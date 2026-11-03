---
id: traks
name: Traks
urls:
  home: https://traks.dev
  repository: https://github.com/shivamanupadi/traks
category:
  - analytics
description: Self-hosted web analytics that runs on Cloudflare Workers, Durable Objects, D1 and R2 in the site owner's own Cloudflare account.
status: active
maintainer: Shivaprasad Manupadi
maintainerType: individual
firstRelease: 2026
language: javascript
databases:
  - sqlite
installMethod: Cloudflare install wizard at traks.dev/deploy
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-11-03
githubStargazers: 337
contributors: 5
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://traks.dev/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/shivamanupadi/traks
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/shivamanupadi/traks/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/shivamanupadi/traks/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/shivamanupadi/traks/languages
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/shivamanupadi/traks/blob/main/README.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/shivamanupadi/traks/releases
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/shivamanupadi/traks/releases/latest
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/shivamanupadi/traks/releases/latest
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/shivamanupadi/traks
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/shivamanupadi/traks/contributors
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/shivamanupadi/traks/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/shivamanupadi/traks/blob/main/README.md
    checkedAt: 2026-11-03
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Traks is web analytics that runs on Cloudflare's own services. A collect Worker receives each visit, a Durable Object per site serves the current day and the live view, and history is written to Apache Iceberg tables on R2 and read with R2 SQL. The owner installs it into their own Cloudflare account through a wizard at traks.dev, which provisions the Workers, the D1 database, the R2 bucket and the pipeline, and the repository is not needed to run it. The tracked site includes one script tag, and the dashboard signs in with email and password through Better Auth on D1.

Visitors are counted with a hash that rotates each day from a secret, the IP address and the user agent, so no cookies are set and raw IP addresses are not stored. The dashboard receives live visitor counts over a WebSocket. MCP and WebMCP tools expose the analytics to AI agents, and bot and agent traffic is classified and reported alongside human traffic.

## Worth knowing

The analytics run on Cloudflare products, and a running instance is billed to the owner's Cloudflare account. The README describes several of those products as open beta. Each site's live counts sit on one Durable Object, and the README says that counts can undercount for "today" while a site's traffic peaks.
