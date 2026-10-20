import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';
import { hasAffiliateParams } from './lib/affiliate';
import { asideOf, hiddenStatuses, vocabulary } from './lib/fields';

/**
 * This file is a governance artifact, not a type definition.
 *
 * Four fields are required of a listed record — id, name, a home or repository URL, category.
 * Everything else is optional, so absent means unknown, renders as `?`, and the
 * build stays green. Nothing here may express a rank, score, boost or weight;
 * scripts/validate.ts asserts that no such field has appeared.
 *
 * Every closed vocabulary comes from src/data/fields.yml, which also carries the
 * label each value is shown under and the section of the record page it appears
 * in. A field with a `vocabulary()` call here has an entry there; the rest —
 * identity, provenance, and the display-only pieces — are rendered by markup
 * written for them and are the schema's alone.
 */

const publicUrl = z
  .url()
  .refine((value) => value.startsWith('https://'), 'Must be https')
  .refine((value) => !hasAffiliateParams(value), 'Affiliate parameters are not allowed in any URL');

/** Generative identity: an emoji and two hex values, no image file. */
const figure = z.object({
  emoji: z.string().min(1),
  color: z.string(),
  textColor: z.string(),
  text: z.string(),
});

const providerFields = z
  .object({
    // Required — the fields without which a record is not a record.
    id: z.string(),
    name: z.string(),
    /*
     * Pages the project operates, and which the dataset may cite. `social` is
     * kept apart: those are accounts, not documents.
     */
    urls: z
      .object({
        home: publicUrl.optional(),
        repository: publicUrl.optional(),
        docs: publicUrl.optional(),
        pricing: publicUrl.optional(),
        plugins: publicUrl.optional(),
      })
      .optional(),
    category: z
      .array(z.enum(vocabulary('category')))
      .nonempty()
      .optional(),

    // Identity
    description: z.string().max(200).optional(),
    maintainer: z.string().optional(),
    maintainerType: z.enum(vocabulary('maintainerType')).optional(),
    parent: z.string().optional(),
    firstRelease: z.number().int().optional(),
    hqCountry: z.enum(vocabulary('hqCountry')).optional(),
    wikidata: z
      .string()
      .regex(/^Q\d+$/, 'a Wikidata id looks like Q123456')
      .nullable()
      .optional(),

    // Kind
    hosting: z.array(z.enum(vocabulary('hosting'))).nullable().optional(),
    language: z.enum(vocabulary('language')).optional(),
    runtime: z.array(z.enum(vocabulary('runtime'))).optional(),
    runtimeMin: z.string().nullable().optional(),
    /** Other software it is built on, by record id where a record exists. */
    basedOn: z.array(z.string()).optional(),

    /*
     * Content. Nullable, as FindSoftware's tech stack is: `null` reads as "the
     * question does not apply", which a framework without content storage is.
     */
    contentStore: z
      .array(z.enum(vocabulary('contentStore')))
      .nullable()
      .optional(),
    databases: z
      .array(z.enum(vocabulary('databases')))
      .nullable()
      .optional(),
    adminUi: z.boolean().nullable().optional(),
    headlessApi: z
      .array(z.enum(vocabulary('headlessApi')))
      .nullable()
      .optional(),
    templating: z.string().nullable().optional(),
    i18n: z.string().nullable().optional(),

    // Rendering and deploy
    runsAs: z.array(z.enum(vocabulary('runsAs'))).nullable().optional(),
    renderingModes: z.array(z.enum(vocabulary('renderingModes'))).nullable().optional(),
    installMethod: z.string().optional(),

    // License
    licenseModel: z.enum(vocabulary('licenseModel')).optional(),
    license: z.string().optional(),

    // Releases
    currentMajor: z.string().optional(),
    latestReleaseDate: z.coerce.date().optional(),

    // Adoption — recorded with a date, never sorted, filtered or ranked by.
    githubStargazers: z.number().int().nonnegative().optional(),
    contributors: z.number().int().nonnegative().optional(),
    packagistDownloads: z.number().int().nonnegative().nullable().optional(),
    npmWeeklyDownloads: z.number().int().nonnegative().nullable().optional(),
    pluginCount: z.number().int().nonnegative().optional(),

    social: z
      .object({
        x: publicUrl.optional(),
        bluesky: publicUrl.optional(),
        mastodon: publicUrl.optional(),
        discord: publicUrl.optional(),
        forum: publicUrl.optional(),
        subreddit: publicUrl.optional(),
        youtube: publicUrl.optional(),
      })
      .optional(),

    // Meta & provenance
    checkedAt: z.coerce.date().optional(),
    addedAt: z.coerce.date().optional(),
    sources: z.array(z.object({ field: z.string(), url: publicUrl, checkedAt: z.coerce.date() })).optional(),
    status: z.enum(vocabulary('status')).optional(),
    /** The numbered listing criterion a stub failed, where it failed one. */
    criterion: z.number().int().min(1).max(5).optional(),
    ai: z.enum(vocabulary('ai')).optional(),

    // Display only — never filterable, never sortable, never counted
    figure: figure.optional(),
    favorite: z.boolean().optional(),
  })
  /*
   * The required-field rule, which only a record in the register has to satisfy.
   * Hiding a record is how a stub is admitted without lowering the bar for the
   * ones on show.
   *
   * A record beside the register is exempt for a different reason: a company that
   * owns hosting brands without selling hosting has no category, and demanding
   * one would mean inventing it.
   */
  .superRefine((record, ctx) => {
    const hidden = hiddenStatuses.has(String(record.status));
    const beside = asideOf.has(String(record.status));

    if (!hidden && !beside && !record.category?.length) {
      ctx.addIssue({
        code: 'custom',
        path: ['category'],
        message: 'Required unless the record is a stub or beside the register',
      });
    }

    /*
     * A project with no website of its own links its repository instead, and a
     * stopped one may have neither: the domain is parked or sold. The repository
     * never stands in as the home page, so the two links stay distinct facts.
     */
    if (record.status !== 'discontinued' && !record.urls?.home && !record.urls?.repository) {
      ctx.addIssue({
        code: 'custom',
        path: ['urls', 'home'],
        message: 'Required unless the project has a repository or has stopped',
      });
    }
  });

const software = defineCollection({
  loader: glob({ base: 'src/content/software', pattern: '**/*.md' }),
  schema: providerFields,
});

/**
 * An optional explainer for a facet value, keyed `<facet>/<value>` —
 * `software/wordpress.md`, `category/paas.md` — or for a whole facet, keyed
 * `<facet>` — `category.md`, which heads /categories/.
 *
 * Written only where there is something true and useful to say; a value without
 * one is still a good page, and inventing filler for every value is what the
 * sites this dataset exists to correct do for a living.
 */
const notes = defineCollection({
  /*
   * The id is the path as written. The loader's default slugs it, which
   * lowercases `regions/DE.md` to `regions/de` — and nothing then matches a
   * value whose id is the code.
   */
  loader: glob({
    base: 'src/content/notes',
    pattern: '**/*.md',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    /** The browser title. A facet's note also takes the heading; a value's does not, so page and filter agree. */
    title: z.string().optional(),
    description: z.string().max(200).optional(),
    /** The opening line, set larger than the body. `description` is for search results; this is for the reader. */
    lead: z.string().optional(),
    /** When the note last changed what it says. Dates its page in the sitemap, and so what IndexNow is told. */
    updated: z.coerce.date().optional(),
    figure: figure.optional(),
    ai: z.enum(vocabulary('ai')).optional(),
    /*
     * The questions a value page answers under its list. On a facet's note they
     * are asked on every value page of it, with `{label}` for the value. Kept
     * short because the first sentence is the one that gets quoted, and plain
     * except for links, which is all an answer needs to send a reader onward.
     */
    faq: z
      .array(
        z.object({
          q: z.string().max(100),
          a: z.string().refine((answer) => answer.split(/\s+/).length <= 70, 'An answer is 70 words at most'),
        }),
      )
      .optional(),
    /** What a "best" question asks about, where the facet's pattern reads badly for this value. */
    topic: z.string().optional(),
  }),
});

export const collections = { software, notes };
