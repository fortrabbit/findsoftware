# Developer libraries: research notes

943 candidates checked 2026-10-19: 713 accepted, 55 boundary, 175 rejected (all on criterion 4), no hosted-service. Sources: GitHub GraphQL API (stars, archived flag, license, latest release, newest tag, README), npm registry and downloads API, Packagist, PyPI and pypistats, RubyGems, crates.io, Hex, NuGet. lastRelease takes the registry date of the latest stable version first, then the newer GitHub release, then the newest git tag. Criterion 3: README install section found by pattern, else a docs or getting-started page on the homepage or in the repo; met for every row.

Provisional floor: a row needs 1,000 GitHub stars, or 10,000 weekly downloads on npm, PyPI or Hex, or 43,000 monthly on Packagist, or 130,000 per 90 days on crates.io. RubyGems and NuGet publish only totals, so those rows pass on stars or 5M total downloads. Below the floor and dropped: basicLightbox (602 stars; npm 3.9k/wk), Orchid ORM (543 stars; npm 4.0k/wk), CakePHP ORM split (149 stars; Packagist 268k total, under the monthly figure).

Accepted by group: testing 106, api-layer 64, orm and query builders 72, validation 43, charts 42, auth 41, editor 38, i18n 35, markdown 29, forms 27, state 25, animation 21, templating 19, email-templating 18, widgets (carousel, lightbox, date picker, select, data grid, tour, upload, dialog, notifications) 59, maps 11, pdf 10, syntax-highlight 10, html-sanitizer 7, 3d and canvas 12, realtime 6, other 18 (media players, client storage, QR codes, spreadsheet IO). By language: TS 263, JS 137, PHP 89, Python 61, Ruby 40, Rust 28, Go 27, Java 26, C# 21, Elixir 10, other 13.

Already in other areas, skipped: `playwright` and `lighthouse` (build-dev), `storybook`, `htmx`, `alpine`, `tanstack-start`, `scalar`, `redocly` (js-framework), `api-platform`, `inertia`, `livewire` (php-framework), `grapesjs`, `puck`, `craftjs` (headless-selfhosted), `charts-css`, `emotion` (css-ui), `django-rest-framework`, `django-ninja`, `dash`, `streamlit`, `templ` (other-languages), `asciidoctor`, `pandoc` (ssg-other), auth servers, PDF renderers and mail catchers (site-services). Ids taken by a different project, so renamed here: `ace-editor`, `glide-js`, `slick-carousel`, `slate-editor`, `dapper-orm`, `carbon-php`, `laravel-echo`, `lighthouse-php`, `league-fractal`, `mako-templates`, `slim-template`, `bun-orm`.

## Discovery sources swept

| Source | Names | Note |
|---|---|---|
| GitHub topics, 53 of them (`wysiwyg`, `rich-text-editor`, `charts`, `data-visualization`, `maps`, `leaflet`, `animation`, `carousel`, `lightbox`, `validation`, `forms`, `orm`, `query-builder`, `graphql-server`, `trpc`, `openapi`, `markdown-parser`, `commonmark`, `i18n`, `localization`, `testing-framework`, `e2e-testing`, `state-management`, `email-template`, `mjml` and more), 1,000+ stars | 1,822 repos, 351 kept | Noisy: AI browser agents under `browser-automation`, Android and iOS libraries under `animation` and `charts`, note apps under `markdown` |
| sorrycc/awesome-javascript, 25 sections | 328 links, 243 not yet listed, ~45 added | Mostly jQuery-era widgets, many stale or renamed |
| ziadoz/awesome-php, 10 sections | 92 links, 71 not yet listed, ~12 added | |
| vinta/awesome-python, 14 sections | 80 links, 62 not yet listed, ~15 added | |
| Own knowledge, checked against GitHub and the registry | ~520 | Every group in the brief plus orphan widgets from css-ui |

Left out: framework wrappers of one listed library (react-quill, vue-chartjs, react-chartjs-2, react-leaflet, react-map-gl, echarts-for-react, lottie-react, jest-dom), database drivers (pg, mysql2, postgres.js, pgx), API client apps (Bruno, Insomnia, Hoppscotch), HTML email templates without a library (Cerberus), plugins for one library (Leaflet.markercluster, remark-gfm), mobile-only libraries (React Native, Flutter, Android, iOS), game engines (Phaser).

Groups added beyond the brief because no other area covers them: auth libraries (the auth servers sit in site-services), templating engines, PDF generation and viewing, QR codes, spreadsheet import and export, client-side storage, widgets that css-ui left out (data grids, date pickers, selects, uploads, tours, dialogs, notifications), syntax highlighting and HTML sanitizers.

## Recurring facts

- Framework binding: framework-agnostic core with official React, Vue, Svelte, Angular, Solid packages (Tiptap, TanStack, FormKit, Motion, Lexical) or bound to one framework (Pinia, NgRx, react-hook-form)
- Headless or styled: headless (TanStack Table, Tiptap, Floating UI, Conform) versus shipped UI and CSS (TinyMCE, Swiper, Flatpickr)
- Rendering target for charts and graphics: SVG, Canvas, WebGL, WebGPU
- Editor output format: HTML, JSON document model, Markdown, Yjs document
- Collaboration support: Yjs or Automerge binding, companion server (Hocuspocus)
- Spec compliance: CommonMark and GFM for Markdown, ICU MessageFormat and CLDR for i18n, JSON Schema draft, OpenAPI version, Standard Schema for validators, GraphQL spec
- Databases supported by ORMs: Postgres, MySQL, SQLite, SQL Server, MongoDB, libSQL, D1, PlanetScale
- Schema approach: schema-first or code-first (GraphQL), schema file plus codegen (Prisma, sqlc) or TypeScript-defined (Drizzle, Kysely), migrations included or separate
- Runtime: browser, Node, Deno, Bun, edge workers
- Browser engines driven by testing tools: Chromium, Firefox, WebKit; protocol: CDP, WebDriver, WebDriver BiDi
- License model: MIT/Apache, GPL or commercial dual license (CKEditor 5, TinyMCE 7, Flickity, lightGallery, fullPage.js), open core with a paid tier (AG Grid Enterprise, Tiptap Pro, Handsontable, Highcharts), free proprietary (GSAP). GitHub detects no license for 116 rows
- Hosted companion: Mapbox token, Unlayer editor, Spline and Rive editors, Cypress Cloud, Tiptap Cloud, Chromatic
- jQuery dependency: Select2, Slick, Owl Carousel, Summernote, Chosen, DataTables (optional now)
- TypeScript types: bundled, DefinitelyTyped, none
- Bundle size: stated on homepages (Valibot, uPlot, Day.js, Preact Signals) as a selling point
- Registry: npm, Packagist, PyPI, RubyGems, crates.io, Hex, NuGet, Maven Central, Go modules (no download figure for Go and Maven)

## Boundary groups

55 rows in eight groups, one scope call each:

| Group | Rows | Question |
|---|---|---|
| General-purpose utilities (HTTP clients, date libraries, Lodash, Ramda, RxJS, Immer, VueUse, react-use, Effect) | 32 | Web helper or out? |
| Python data-science plotting with HTML output (Bokeh, Plotly.py, Altair, pygal, pyecharts, Folium) | 6 | Web helper or out? |
| Load-testing tools (k6, Artillery, Locust, Gatling) | 4 | testing here or build-dev? |
| Email sending (Nodemailer, PHPMailer, Symfony Mailer, Anymail) | 4 | In beside email templating? |
| Framework bindings (react-i18next, next-i18next, React Testing Library, React Final Form) | 4 | Own record or part of the parent? |
| Hosted dependency (Mapbox GL JS needs a token, React Email Editor loads Unlayer, Spline runtime has no public source) | 3 | Library or hosted-service? |
| WordPress block editor used standalone (Gutenberg) | 1 | Editor library or part of WordPress? |
| Archived on GitHub with a recent release (Bleach) | 1 | Deprecated by the maintainer but still published |

## Surprises

- D3 (7.9.0, 2024-03), Redux core (5.0.1, 2023-12), remark (15.0.1, 2023-09), Leaflet (1.9.4, 2023-05) and Flatpickr (2022) fail criterion 4 while downloads run in the millions a week. Leaflet 2.0 exists only as tags, Redux Toolkit releases where Redux core does not, and the unified ecosystem ships through plugins while its core packages stay put. A per-package release date misreads stable or ecosystem-shaped projects; this group decides whether criterion 4 holds for libraries.
- Animation and widgets carry most rejections: 27 of 175 in animation (AOS, Animate.css, Velocity, ScrollReveal, Splide), plus toasts, date pickers and lightboxes from the jQuery era.
- Repos leave GitHub: CodeMirror and ProseMirror moved to code.haverbeke.berlin, SheetJS to its own git server with GitHub as a stale mirror, the Elf state library's repo is gone while npm still serves 17k/wk. rspec-core and sanitize-html were archived into monorepos.
- Monorepos blur the record unit: Active Record lives in rails/rails, Eloquent in a read-only split, Symfony components in splits of symfony/symfony. Stars belong to the monorepo, not the library.
- Playwright sits as boundary "generic dev tool" in build-dev while the brief puts testing frameworks in scope here; the two areas need one answer.
- Dual and commercial licenses are common in editors, carousels and grids (17 rows); GSAP moved to a free proprietary license.
- Language spread is wide in testing, ORMs, validation and auth, and narrow (TS/JS only) in editors, charts, maps, animation and widgets.
- Name collisions: Glide, Slate, Slick, Dapper, Mako, Slim, Fractal and Lighthouse each name two different projects across areas.
