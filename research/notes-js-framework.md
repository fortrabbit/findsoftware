# JS and TS frameworks and SSGs: research notes

275 candidates checked 2026-10-18: 102 accepted, 47 boundary, 4 hosted-service, 122 rejected (114 on criterion 4, 7 on 2, 1 on 1). Sources: GitHub, npm registry and downloads, JSR, GitLab and Codeberg APIs; READMEs checked for install or docs links.

## Discovery sources swept

| Source | Names | Note |
|---|---|---|
| jamstack.org generators | 160 of 378 | Most rejects: 2012–2022 projects |
| bestofjs API, 14 tags | ~110 | Snapshot dated 2024-08 |
| awesome-static-generators | 0 | Archived |
| Vercel frameworks.ts | 13 new | |
| Netlify build-info | 2 new | |
| Cloudflare C3 templates | 0 new | |
| Gap-filling | ~15 | Midway, Encore, Zudoku, Fern, ReadMe |

## Recurring facts

- Registry: npm, JSR or GitHub only; npm name often differs from the project
- Rendering modes: SSG, SSR, SPA, islands, RSC, per-route hybrid
- UI library underneath: React, Vue, Svelte, Solid, Angular, Lit, agnostic
- Deploy targets and adapters: Node, static folder, Cloudflare Workers, Deno, Bun
- Templating languages per SSG
- Content source: Markdown/MDX files, data files, headless CMS
- Org behind it, visible from the GitHub owner
- Hosted platform or paid add-on next to the open source part

## Surprises

- Stars and downloads disagree: h3 26M npm/wk on 5.5k stars, create-t3-app 29k stars on 214/wk. Keep both; no threshold on one metric.
- Criterion 5 filters nothing without a threshold: every GitHub repo has public stars. Criterion 4 does the work (114 of 122 rejects).
- Repos rename: Eleventy is now `11ty/buildawesome` (homepage build.awesome.me), Redwood split into `redwoodjs/graphql` and RedwoodSDK, Fresh moved to `freshframework/fresh`, Hwy became Vorma (Go). Records need a stable id.
- AI framing spreads: Vocs ("Docs for Agents & Humans"), Primo ("Agent-native visual CMS").
- 47 boundary rows fall into five groups: UI libraries, Express-level HTTP frameworks, build tools, API-docs tools, presentation tools. One scope call per group.
- Docs platforms (Mintlify, GitBook, Fern, ReadMe) need the hosted-service aside too, not only headless CMSs.
