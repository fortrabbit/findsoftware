import { expect, test, type Page } from '@playwright/test';

/*
 * These cover the four things that would be worst to break silently: the list
 * everyone lands on, the promises a record page makes about its own data, the
 * governance rules that are otherwise only words on a policy page, and the
 * no-JavaScript fallback the whole distribution thesis rests on.
 *
 * Records are added daily, so nothing here counts the dataset. Where a number
 * matters it is read off the page and checked against the same page's rows,
 * which reach it by a different route.
 */

/* Long-standing listed records. Stubs are found through /stubs/, since which records are stubs moves. */
const listedRecord = { path: '/wordpress/', name: 'WordPress' };
const builtOnIt = '/woocommerce/';
/* Records whose prose links out; at least one of them must, or the prose check proves nothing. */
const proseRecords = ['/astro/', '/hugo/', '/django/'];

const rows = '[data-find-results] .provider-list > li';
const affiliate = /[?&](ref|aff|affiliate|partner|utm_[a-z]+|fpr|via)=/i;

const leadingNumber = async (page: Page, selector: string) =>
  Number((await page.locator(selector).first().innerText()).match(/^\d+/)?.[0]);

const firstStub = async (page: Page) => {
  await page.goto('/stubs/');
  const link = page.locator(`${rows} .provider-name a`).first();
  return { href: (await link.getAttribute('href'))!, name: await link.innerText() };
};

const byName = (a: string, b: string) => a.localeCompare(b, 'en');

test.describe('the register', () => {
  test('is alphabetical by default', async ({ page }) => {
    await page.goto('/');
    const names = await page.locator(`${rows} .provider-name a`).allInnerTexts();
    expect(names.length).toBeGreaterThan(0);
    expect(names).toEqual([...names].sort(byName));
    await expect(page.locator('.sort-links a[aria-current="page"]')).toHaveText('A–Z');
  });

  /* The count is a sentence and the rows are markup: two routes to one number. */
  test('says how many it lists, and lists that many', async ({ page }) => {
    await page.goto('/');
    const said = await leadingNumber(page, '[data-find-count]');
    await expect(page.locator(rows)).toHaveCount(said);
  });

  /*
   * Astro drops a whitespace-only text node between two expressions, so a count
   * written as `{n} {noun}` in markup renders "150records" as soon as a
   * formatter puts the two on separate lines. The strings are built in
   * frontmatter, and this asserts the space.
   */
  test('puts a space between a number and the noun it counts', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('[data-find-count]')).toHaveText(/^\d+ projects?\.$/);

    for (const link of await page.locator('[data-find-aside] a').all()) {
      await expect(link).toHaveText(/^\d+ [A-Za-z]/);
    }

    await page.goto('/categories/');
    await expect(page.locator('.annotation').first()).toHaveText(/^\d+ values? in use\./);
  });

  /*
   * Anchors are linked from prose, so they have to exist — scoped to the
   * results, because a bare #w also matches whatever a browser extension
   * injects into the page.
   */
  test('groups the rows under letters a link can reach', async ({ page }) => {
    await page.goto('/');
    const results = page.locator('[data-find-results]');
    await expect(results.locator('#w')).toBeVisible();
    await expect(results.locator(`#w li[data-record="wordpress"]`)).toBeVisible();
  });

  test('every row carries a tile, so a missing logo never looks broken', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('[data-find-results] .provider-tile')).toHaveCount(await page.locator(rows).count());
  });

  /*
   * Adoption figures are data, never an order: no sort, filter or facet uses
   * them. The two other orders are both by a date the project stands behind.
   */
  test('offers no order or filter by adoption figures', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.sort-links a')).toHaveText(['A–Z', 'Updated', 'Added']);

    const facets = await page.locator('.find-facet-title > span:first-child').allInnerTexts();
    expect(facets.length).toBeGreaterThan(0);
    for (const facet of facets) expect(facet).not.toMatch(/star|download|plugin|contributor|score|rating/i);

    await expect(page.locator('.provider-signal, .favorite-badge, [class*="rating"], [class*="score"]')).toHaveCount(0);
  });

  /*
   * Records sit at the root, beside the facet indexes and the written pages.
   * That is one namespace shared by three kinds of thing, which validate guards
   * — this is the other half: that a record answers there.
   */
  test('serves a record from the root', async ({ page }) => {
    await page.goto(listedRecord.path);
    // Scoped to the article: a bare h1 also matches whatever an extension injects.
    await expect(page.locator('article h1')).toHaveText(listedRecord.name);
  });
});

test.describe('the register by date', () => {
  /*
   * Each order is a page, so it works without JavaScript and can be linked to,
   * and each holds every row the register holds.
   */
  test('offers the same rows by date last checked and by date added, as pages', async ({ page }) => {
    await page.goto('/');
    const total = await page.locator(rows).count();

    for (const [path, label] of [
      ['/updated/', 'Updated'],
      ['/added/', 'Added'],
    ]) {
      await page.goto(path);
      await expect(page.locator('.sort-links a[aria-current="page"]')).toHaveText(label);
      await expect(page.locator(rows)).toHaveCount(total);

      /* One list, no subheadings: a heading per month would date the register in its own words. */
      await expect(page.locator('[data-find-results] h2')).toHaveCount(0);
    }
  });

  test('puts the newest date first', async ({ page }) => {
    const data = await (await page.request.get('/software.json')).json();
    const dates = new Map<string, Record<string, string | undefined>>(
      data.software.map((record: Record<string, string>) => [record.id, record]),
    );

    for (const [path, field] of [
      ['/updated/', 'checkedAt'],
      ['/added/', 'addedAt'],
    ]) {
      await page.goto(path);
      const ids = await page
        .locator(rows)
        .evaluateAll((items) => items.map((item) => item.getAttribute('data-record')));
      const held = ids.map((id) => dates.get(id!)?.[field]).filter((date): date is string => Boolean(date));
      expect(held.length, `${path} has dated rows`).toBeGreaterThan(0);
      expect(held, `${path} is newest first`).toEqual([...held].sort().reverse());
    }
  });
});

test.describe('a facet and its values', () => {
  test('the facet lists its values, each a link to its own page', async ({ page }) => {
    await page.goto('/categories/');
    await expect(page.locator('h1')).toHaveText('Categories');
    await expect(page.locator('main a[href="/categories/cms/"]')).toBeVisible();
  });

  test('a value is the register narrowed, alphabetical and saying so', async ({ page }) => {
    await page.goto('/categories/cms/');

    await expect(page.locator('h1')).toHaveText('Content management systems');
    await expect(page.locator('.crumb a[href="/categories/"]')).toBeVisible();

    /* Position on a list that names its subject is not ranking, so the list says how it is ordered. */
    await expect(page.locator('.annotation').first()).toContainText('alphabetically');

    const names = await page.locator(`${rows} .provider-name a`).allInnerTexts();
    expect(names).toContain(listedRecord.name);
    expect(names).toEqual([...names].sort(byName));

    const said = await leadingNumber(page, '.annotation');
    await expect(page.locator(rows)).toHaveCount(said);
  });

  test('a record links each value it holds to that value page', async ({ page }) => {
    await page.goto(listedRecord.path);
    await expect(page.locator('article a[href="/categories/cms/"]').first()).toBeVisible();
  });
});

test.describe('a record', () => {
  test('marks sourced facts and links them to their source', async ({ page }) => {
    await page.goto(listedRecord.path);

    const markers = page.locator('article .footnote-ref');
    await expect(markers.first()).toBeVisible();

    /* Every marker lands on a source, not only the first. */
    for (const target of new Set(await markers.evaluateAll((refs) => refs.map((ref) => ref.getAttribute('href'))))) {
      await expect(page.locator(`.sources ${target}`), `${target} exists`).toHaveCount(1);
    }

    // The date a source was read, which is the whole claim a citation here makes.
    for (const date of await page.locator('.sources li .source-date').allInnerTexts()) {
      expect(date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
    await expect(page.locator('.sources li a[href^="http"]').first()).toBeVisible();
  });

  /* Absent means unknown, and unknown is left out rather than drawn as a placeholder. */
  test('shows only what is held', async ({ page }) => {
    await page.goto(listedRecord.path);
    await expect(page.locator('.fact-list > dd').first()).toBeVisible();
    await expect(page.locator('.fact-list > dd', { hasText: /^(\?|unknown|n\/a)$/i })).toHaveCount(0);
  });

  test('sends every outbound link with rel=nofollow, and hands the project the record path', async ({ page }) => {
    await page.goto(listedRecord.path);

    const links = await page.locator('.record-links a[href^="http"], .social-links a, .sources a[href^="http"]').all();
    expect(links.length).toBeGreaterThan(0);

    for (const link of links) {
      await expect(link).toHaveAttribute('rel', 'nofollow');
      // Against the site-wide strict-origin header: a project clicking its own
      // link lands on its analytics as the record rather than the domain.
      await expect(link).toHaveAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    }
  });

  test('holds the prose to the same policy', async ({ page }) => {
    let seen = 0;

    for (const path of proseRecords) {
      await page.goto(path);
      for (const link of await page.locator('.record-prose a[href^="http"]').all()) {
        seen += 1;
        await expect(link).toHaveAttribute('rel', 'nofollow');
        await expect(link).toHaveAttribute('referrerpolicy', 'no-referrer-when-downgrade');
      }
    }

    expect(seen, 'at least one fixture has an outbound link in its prose').toBeGreaterThan(0);
  });

  /* Shown with the reason they do not compare, wherever they are shown. */
  test('links its adoption figures to why they do not compare', async ({ page }) => {
    await page.goto(listedRecord.path);
    await expect(page.locator('article a[href="/about/#adoption-figures"]')).toBeVisible();

    await page.goto('/about/');
    await expect(page.locator('#adoption-figures')).toBeVisible();
  });

  /* Software built on other software is its own record, and says what it is built on. */
  test('links to the software it is built on', async ({ page }) => {
    await page.goto(builtOnIt);
    await expect(page.locator(`article a[href="${listedRecord.path}"]`).first()).toBeVisible();
  });
});

test.describe('the groups beside the register', () => {
  /*
   * The repo holds more records than the register shows. The hidden ones are
   * reachable, because a decision nobody can see is not a decision, but they
   * are opt-in and never in the count. The way in is a link in the sentence
   * that counts the register, so it works without scripting and can be crawled.
   */
  test('stubs are out of the register, and have a page of their own', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-find-aside] a[href="/stubs/"]').click();

    /* The heading is the word that was clicked, so arriving needs no second reading. */
    await expect(page.locator('h1')).toHaveText('Stubs');
    await expect(page.locator(rows).first()).toBeVisible();

    const said = await leadingNumber(page, '.annotation');
    await expect(page.locator(rows)).toHaveCount(said);

    const stub = await firstStub(page);
    await page.goto('/');
    await expect(page.locator(`[data-find-results] a[href="${stub.href}"]`)).toHaveCount(0);
  });

  test('a stub keeps its record page', async ({ page }) => {
    const stub = await firstStub(page);
    await page.goto(stub.href);
    await expect(page.locator('article h1')).toHaveText(stub.name);
  });

  test('each group is its own list, not appended to the register', async ({ page }) => {
    await page.goto('/');
    const listed = await page.locator(rows).count();

    for (const [path, heading] of [
      ['/defunct/', 'Defunct'],
      ['/hosted/', 'Hosted services'],
      ['/boundary/', 'Boundary cases'],
    ]) {
      await page.goto(path);
      await expect(page.locator('h1')).toHaveText(heading);
      const shown = await page.locator(rows).count();
      expect(shown, `${path} lists something`).toBeGreaterThan(0);
      expect(shown, `${path} is the group alone`).toBeLessThan(listed);
    }
  });

  /* The lists the register panel offers are links too, so a crawler reaches them. */
  test('the register panel links each list to its own page', async ({ page }) => {
    await page.goto('/');
    await page.locator('.find-more > summary').click();
    const box = page.locator('[aria-labelledby="facet-register"]');
    await expect(box.locator('a[href="/hosted/"]')).toBeVisible();
    await expect(box.locator('a[href="/boundary/"]')).toBeVisible();
  });
});

test.describe('governance, as behaviour rather than policy text', () => {
  test('the sitemap lists no page that asks not to be indexed', async ({ page }) => {
    const stub = await firstStub(page);
    const sitemap = await (await page.request.get('/sitemap.xml')).text();

    expect(sitemap).toContain(`${listedRecord.path}</loc>`);
    expect(sitemap).not.toContain('/stubs/</loc>');
    expect(sitemap).not.toContain(`${stub.href}</loc>`);
  });

  test('stays out of search engines until the flag says otherwise', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);

    // Both layers read PUBLIC_INDEXABLE, so they can only ever disagree by
    // accident — which is exactly the accident that ships unnoticed.
    const robots = await page.request.get('/robots.txt');
    expect(await robots.text()).toContain('Disallow: /');
  });

  test('carries no affiliate parameters on the register', async ({ page }) => {
    await page.goto('/');
    const hrefs = await page
      .locator('a[href^="http"]')
      .evaluateAll((links) => links.map((link) => (link as HTMLAnchorElement).href));
    for (const href of hrefs) expect(href).not.toMatch(affiliate);
  });

  /* Every listed record, read through its markdown copy, which carries every link and source the page does. */
  test('carries no affiliate parameters in any record', async ({ request }) => {
    const records = (await (await request.get('/software.json')).json()).software as { href: string }[];
    expect(records.length).toBeGreaterThan(0);

    // In batches: all at once and `astro preview` drops connections.
    const copies: { href: string; text: string }[] = [];
    for (let start = 0; start < records.length; start += 20) {
      copies.push(
        ...(await Promise.all(
          records.slice(start, start + 20).map(async ({ href }) => {
            const answer = await request.get(`${href.replace(/\/$/, '')}.md`);
            expect(answer.status(), `${href}.md is served`).toBe(200);
            return { href, text: await answer.text() };
          }),
        )),
      );
    }

    for (const { href, text } of copies) {
      for (const url of text.match(/https?:\/\/[^\s)>"]+/g) ?? []) {
        // GitHub's API names a git ref with `?ref=`, which reaches no partner programme.
        if (url.startsWith('https://api.github.com/')) continue;
        expect(url, `${href}.md`).not.toMatch(affiliate);
      }
    }
  });

  test('names its publisher on every page', async ({ page }) => {
    for (const path of ['/', listedRecord.path, '/categories/cms/']) {
      await page.goto(path);
      await expect(page.locator('footer a[href="https://www.fortrabbit.com"]')).toHaveAttribute('rel', 'nofollow');
    }
  });
});

test.describe('markdown copies', () => {
  test('a record has one at the same address with .md appended', async ({ page }) => {
    await page.goto(listedRecord.path);
    await expect(page.locator('article a[href="/wordpress.md"]')).toBeVisible();

    const answer = await page.request.get('/wordpress.md');
    expect(answer.status()).toBe(200);
    const text = await answer.text();
    expect(text).toMatch(/^# WordPress\n/);
    expect(text).toContain('/wordpress/');

    /* The copy keeps the citations, each with the date it was read. */
    expect(text).toContain('### Sources');
    expect(text).toMatch(/: https?:\/\/\S+ \(read \d{4}-\d{2}-\d{2}\)/);
  });

  test('so do a facet value, a facet and a written page', async ({ page }) => {
    for (const [path, heading] of [
      ['/categories/cms.md', /^# /],
      ['/categories/index.md', /^# Categories/],
      ['/about.md', /^# /],
      ['/criteria.md', /^# /],
    ] as const) {
      const answer = await page.request.get(path);
      expect(answer.status(), `${path} is served`).toBe(200);
      expect(await answer.text(), `${path} opens with a heading`).toMatch(heading);
    }

    expect(await (await page.request.get('/categories/cms.md')).text()).toContain('(http');
  });
});

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('the register is still the register', async ({ page }) => {
    await page.goto('/');
    const said = await leadingNumber(page, '[data-find-count]');
    await expect(page.locator(rows)).toHaveCount(said);
    await expect(page.locator(rows).first()).toBeVisible();
  });

  test('every facet is reachable as a real link', async ({ page }) => {
    await page.goto('/');

    const fallback = page.locator('[data-find-fallback]');
    await expect(fallback).toBeVisible();
    await expect(fallback.locator('a[href="/categories/"]')).toBeVisible();

    await page.goto('/categories/cms/');
    await expect(page.locator(rows).first()).toBeVisible();
  });

  test('a record is whole', async ({ page }) => {
    await page.goto(listedRecord.path);
    await expect(page.locator('article h1')).toHaveText(listedRecord.name);
    await expect(page.locator('.sources li').first()).toBeVisible();
  });
});

test.describe('filtering', () => {
  /*
   * The only surface on the site that needs JavaScript, and the reason the rest
   * is tested twice: losing this leaves a reader with the whole register and every
   * facet as a link, which is the whole point of the fallback.
   */
  test.skip(({ javaScriptEnabled }) => javaScriptEnabled === false, 'filtering is the one JavaScript-only surface');

  test('narrows the list and says how many it dropped', async ({ page }) => {
    await page.goto('/');

    /*
     * Visible rows, not rows: filtering hides what the server already rendered
     * rather than rebuilding the list, so the ones that do not match are still
     * in the document.
     */
    const shown = page.locator(`${rows}:visible`);
    const listed = await page.locator(rows).count();
    await expect(shown).toHaveCount(listed);

    await page.locator('.find-facet input[type=checkbox]').first().check();
    await expect(shown).not.toHaveCount(listed);
    await expect(page.locator('[data-find-count]')).toHaveText(new RegExp(`^${await shown.count()} of ${listed} `));

    /*
     * The count and the groups beside the register share a paragraph, and only
     * the count is a function of the filters.
     */
    await expect(page.locator('[data-find-aside] a[href="/stubs/"]')).toBeVisible();
  });

  /* The script and the value page narrow the same list the same way. */
  test('a filter in the address matches the value page', async ({ page }) => {
    await page.goto('/categories/cms/');
    const expected = await page.locator(`${rows} .provider-name a`).allInnerTexts();

    await page.locator('.find-onward').click();
    await expect(page.locator('input[data-facet="categories"][value="cms"]')).toBeChecked();
    await expect(page.locator(`${rows}:visible`)).toHaveCount(expected.length);
    expect(await page.locator(`${rows}:visible .provider-name a`).allInnerTexts()).toEqual(expected);
  });

  /* A letter with nothing left under it takes its heading away. */
  test('takes a letter away when nothing under it survives', async ({ page }) => {
    await page.goto('/');

    const headings = page.locator('[data-find-results] .letter-group:visible');
    const before = await headings.count();

    /* The smallest value on show, so whole letters drop out. */
    await page.locator('.find-facet input[type=checkbox]:visible').last().check();
    await expect(headings).not.toHaveCount(before);

    for (const group of await headings.all()) {
      await expect(group.locator('.provider-list > li:visible').first()).toBeVisible();
    }
  });

  /*
   * The register is server-rendered and filtering hides what does not match, so
   * a filtered row is not a copy that has to be kept looking like the original —
   * it is the original.
   */
  test('a filtered row is the row the server drew', async ({ page }) => {
    await page.goto('/');

    const row = page.locator(rows).first();
    const id = await row.getAttribute('data-record');
    await expect(row.locator('.provider-tile')).toBeVisible();

    await page.locator('[data-list-style] button[value=slim]').click();
    await expect(row.locator('.provider-tile')).toBeHidden();
    await expect(row.locator('.provider-name a')).toBeVisible();

    await page.locator('.find-facet input[type=checkbox]').first().check();
    expect(await row.getAttribute('data-record')).toBe(id);
  });

  test('swaps to a list beside the register, and puts it in the address', async ({ page }) => {
    await page.goto('/');
    await page.locator('.find-more > summary').click();
    await page.locator('[aria-labelledby="facet-register"] input[value=hosted]').check();

    await expect(page.locator('[data-find-count]')).toContainText('in Hosted services');
    expect(new URL(page.url()).searchParams.get('register')).toBe('hosted');

    /* The register's list is put away whole rather than row by row. */
    await expect(page.locator('[data-find-results]')).toBeHidden();
    await expect(page.locator('[data-find-list=hosted] .provider-list > li:visible').first()).toBeVisible();
  });

  test('arrives on the list the address asks for', async ({ page }) => {
    await page.goto('/?register=hosted');

    await expect(page.locator('[data-find-list=hosted]')).toBeVisible();
    await expect(page.locator('[data-find-results]')).toBeHidden();
    await expect(page.locator('input[data-register-option][value=hosted]')).toBeChecked();
  });
});

/*
 * The card a link turns into elsewhere, which is the one part of the site nobody
 * on the site ever sees. It is drawn at build time by a WebAssembly renderer, so
 * the failure to guard against is not an ugly card — it is all of them silently
 * not being drawn while every page goes on promising one.
 */
test.describe('share cards', () => {
  const png = async (page: Page, path: string) => {
    const answer = await page.request.get(path);
    expect(answer.status(), `${path} is served`).toBe(200);
    expect(answer.headers()['content-type']).toContain('image/png');

    const bytes = await answer.body();
    expect(bytes.subarray(1, 4).toString(), `${path} is a PNG`).toBe('PNG');

    // Width and height live in the IHDR chunk, at a fixed offset in every PNG.
    return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20), bytes: bytes.length };
  };

  const declared = async (page: Page, path: string) => {
    await page.goto(path);
    const content = await page.locator('meta[property="og:image"]').getAttribute('content');
    expect(content, `${path} declares a card`).toBeTruthy();
    return new URL(content!).pathname;
  };

  test('a record points at its own card, drawn at the size every network expects', async ({ page }) => {
    expect(await declared(page, listedRecord.path)).toBe('/og/wordpress.png');

    const card = await png(page, '/og/wordpress.png');
    expect(card).toMatchObject({ width: 1200, height: 630 });

    /*
     * A card that renders but draws nothing still weighs something. Flat white
     * at this size compresses to a few hundred bytes, so a floor catches the
     * empty card that a status code and a header cannot.
     */
    expect(card.bytes).toBeGreaterThan(10_000);
  });

  test("pages that are not records share the register's", async ({ page }) => {
    await png(page, '/og/default.png');

    for (const path of ['/', '/criteria/', '/about/', '/stubs/']) {
      expect(await declared(page, path), `${path} falls back to the register's card`).toBe('/og/default.png');
    }
  });

  /*
   * A value page is the one somebody sends when they mean "the ones that do X".
   * Its card sits a level down the path, because /og/<name>.png belongs to the
   * records.
   */
  test('a facet and one of its values each draw their own', async ({ page }) => {
    for (const [path, card] of [
      ['/categories/', '/og/categories/index.png'],
      ['/categories/cms/', '/og/categories/cms.png'],
    ]) {
      expect(await declared(page, path), `${path} draws its own card`).toBe(card);
      expect(await png(page, card)).toMatchObject({ width: 1200, height: 630 });
    }
  });
});

test.describe('search', () => {
  /*
   * The other JavaScript-only surface, and the one that reaches for a module
   * nothing in the bundle can see: Pagefind writes /pagefind/pagefind.js after
   * astro build, so the import is inline and unbundled. A break shows the "only
   * built for the deployed site" message on a site where it has been built.
   */
  test.skip(({ javaScriptEnabled }) => javaScriptEnabled === false, 'search is the other JavaScript-only surface');

  test('answers a query typed into the form', async ({ page }) => {
    await page.goto('/search/');

    await page.locator('[data-search-input]').fill('wordpress');
    await page.locator('.search-form button[type=submit]').click();

    await expect(page.locator('[data-search-summary]')).toContainText(/pages? match/);
    await expect(page.locator(`[data-search-results] a[href^="${listedRecord.path}"]`).first()).toBeVisible();
  });

  test('answers a query arriving in the URL, which is what a shared link is', async ({ page }) => {
    await page.goto('/search/?q=wordpress');

    await expect(page.locator('[data-search-summary]')).toContainText(/pages? match/);
    await expect(page.locator('[data-search-results] a').first()).toBeVisible();
  });
});

test.describe('where to host it', () => {
  // The publisher's slot is disclosed on the About page and appears only where FindHost lists fortrabbit.
  test('labels fortrabbit as the publisher on a record FindHost lists it for', async ({ page }) => {
    await page.goto('/kirby/');
    const block = page.locator('.hosting-block');
    await expect(block.locator('.host-publisher')).toContainText('fortrabbit');
    await expect(block.locator('.host-label')).toHaveText('Publisher');
  });

  test('shows no publisher slot where FindHost does not list fortrabbit', async ({ page }) => {
    await page.goto('/nextjs/');
    const block = page.locator('.hosting-block');
    await expect(block.locator('.host-list > li')).toHaveCount(4);
    await expect(block.locator('.host-publisher')).toHaveCount(0);
  });
});

test.describe('records for machines', () => {
  test('a record has a JSON copy with its sources, announced in the head', async ({ page, request }) => {
    await page.goto('/kirby/');
    await expect(page.locator('link[rel="alternate"][type="application/json"]')).toHaveAttribute('href', '/kirby.json');
    const body = await (await request.get('/kirby.json')).json();
    expect(body.record.id).toBe('kirby');
    expect(body.record.sources.length).toBeGreaterThan(0);
  });
});
