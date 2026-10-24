---
id: marble
name: Marble
urls:
  home: https://marblecms.com
  repository: https://github.com/usemarble/marble
  docs: https://docs.marblecms.com
  pricing: https://marblecms.com/pricing
category:
  - headless-cms
description: Headless CMS for blog posts, changelogs and articles, with a web dashboard and a REST API.
status: stub
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
installMethod: pnpm install from the monorepo, local development setup
licenseModel: open-source
license: AGPL-3.0
githubStargazers: 384
contributors: 31
social:
  x: https://x.com/usemarblecms
  discord: https://discord.gg/gU44Pmwqkx
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://marblecms.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/usemarble/marble
    checkedAt: 2026-10-23
  - field: urls
    url: https://docs.marblecms.com/llms.txt
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/usemarble/marble
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://marblecms.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://marblecms.com/pricing
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/usemarble/marble
    checkedAt: 2026-10-23
  - field: category
    url: https://marblecms.com/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/usemarble/marble/main/.github/CONTRIBUTING.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://raw.githubusercontent.com/usemarble/marble/main/.github/CONTRIBUTING.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://raw.githubusercontent.com/usemarble/marble/main/.github/CONTRIBUTING.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/usemarble/marble/main/.github/CONTRIBUTING.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://raw.githubusercontent.com/usemarble/marble/main/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://marblecms.com/
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/usemarble/marble
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/usemarble/marble/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

Marble is a headless CMS for blog posts, changelogs and articles. Writers use a web dashboard, and a site fetches the content through a REST API. The repository is a pnpm monorepo with a Hono REST API, a Next.js dashboard and an Astro marketing site, and the API runs as a Cloudflare Worker. The contributor guide sets up Postgres and Redis for local development.

## Worth knowing

The project's homepage sells hosted plans, and no self-hosting or deployment guide was found in its documentation. The local setup needs accounts for Google and GitHub sign-in, Cloudflare R2 storage and Upstash Redis.
