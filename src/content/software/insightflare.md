---
id: insightflare
name: InsightFlare
urls:
  home: https://demo.insightflare.net
  repository: https://github.com/RavelloH/InsightFlare
category:
  - analytics
description: Privacy-friendly web analytics tool that a site owner deploys to their own Cloudflare account and embeds with a small script.
status: active
maintainer: RavelloH
maintainerType: individual
firstRelease: 2026
language: javascript
adminUi: true
i18n: yes, a multilingual dashboard
installMethod: Cloudflare Deploy button
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-09-03
githubStargazers: 712
contributors: 7
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://demo.insightflare.net
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/RavelloH/InsightFlare
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/RavelloH/InsightFlare/main/LICENSE
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/RavelloH/InsightFlare
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/RavelloH/InsightFlare/blob/main/.github/readme/README.en.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/RavelloH/InsightFlare/blob/main/.github/readme/README.en.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/RavelloH/InsightFlare/blob/main/.github/readme/README.en.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/RavelloH/InsightFlare/blob/main/.github/readme/README.en.md
    checkedAt: 2026-11-03
  - field: i18n
    url: https://github.com/RavelloH/InsightFlare/blob/main/.github/readme/README.en.md
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/RavelloH/InsightFlare
    checkedAt: 2026-11-03
  - field: license
    url: https://raw.githubusercontent.com/RavelloH/InsightFlare/main/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/RavelloH/InsightFlare/releases
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/RavelloH/InsightFlare/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/RavelloH/InsightFlare/releases/latest
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/RavelloH/InsightFlare
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/RavelloH/InsightFlare/contributors
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
---

InsightFlare is a web analytics tool that runs on Cloudflare Workers, so the software and its data stay in the Cloudflare account of the person who deploys it. A site loads a tracking script from its deployment, and an admin dashboard shows the traffic that script reports. The Cloudflare Deploy button creates the Worker and its resources from the repository, and a manual setup binds a D1 database and the other resources by hand. The dashboard is available in several languages.

## Worth knowing

Analytics Engine, the R2 cold archive and the connection for AI agents are optional parts that need extra Cloudflare setup, and reading the analytics datasets requires an API token with account analytics read permission.
