# Notes: headless CMSs, content backends, git-based CMSs, JS/TS and Python e-commerce

Swept 2026-10-18. 222 rows: 65 accepted, 30 boundary, 60 hosted-service, 67 rejected (60 on criterion 4).

## Discovery sources

| Source | Names | New after earlier sources |
|---|---|---|
| jamstack.org/headless-cms (repo `jamstack/jamstack.org`, frontmatter) | 134 | 127 in area; Craft, Statamic, WordPress, Wagtail, Orchard Core, Pimcore and b2evolution left to other areas |
| cms-comparison.io (data repo `gentics/headless-cms-comparison`, last push 2024-02) | 29 | 0 |
| awesome-headless-cms (`n370`) | 33 tools | 5 |
| bestofjs static API, tags cms, ecommerce, blog (snapshot frozen at 2024-08-10) | 50 | about 30 |
| GitHub topic search (headless-cms, git-cms, cms per language, ecommerce, headless-commerce) | 328 repos | about 60; rest were libraries, starters, tutorials or other areas |
| awesome-headless-commerce (`notrab`) | 120 | 15 commerce platforms |
| Own knowledge | 1 | Spurtcommerce |

## Recurring facts worth a field

- Content storage: SQL (Postgres, MySQL, SQLite), MongoDB, git files, Firestore, Cloudflare D1
- API: REST, GraphQL or both. Git-based CMSs have no API and write commits instead
- Runtime target: plain Node, Docker, AWS Lambda only (Webiny), Cloudflare Workers or Pages only (SonicJS, microfeed)
- Embedded in a framework: Payload in Next.js, EmDash and StudioCMS in Astro, Nuxt Content and Pruvious in Nuxt
- Git provider lock: some git-based CMSs log in through GitHub only
- Paid editions: open core with an enterprise tier, plus a cloud version of the same product (Strapi, Directus, Payload, Tina, Medusa, Vendure)
- License: GitHub detects no standard license for Strapi, Directus, Medusa, Vendure, Webiny, NocoDB, GrapesJS and others. Needs a free-text license field
- Admin UI stack, visual editing, live preview, i18n, editor roles
- AI and MCP: many homepages now lead with "agentic" or ship an MCP server

## Surprises

- 13 of 77 hosted services from jamstack.org and the awesome lists are dead or pivoted. Hosted records need a liveness check on every refresh
- Active projects without tagged releases (Sitepins, Marble, Markdown Ninja, BCMS) fail criterion 4 read strictly; a commit-date fallback needs a decision
- Repos move or change purpose: Puck, Atomic Server, CrafterCMS moved; `mnfst/manifest` is now an LLM gateway
- Library vs CMS: Puck, GrapesJS, Craft.js, Velite, Nuxt Content are embeddable pieces with large download counts
- Storefront templates (Next.js Commerce, Hydrogen, Alokai) sit between framework and e-commerce: own category or out
