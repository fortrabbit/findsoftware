---
id: talivia
name: Talivia
urls:
  home: https://talivia.com
  repository: https://github.com/talivia-group/talivia
  docs: https://talivia.com/docs
category:
  - analytics
description: Self-hosted web analytics platform that connects site visits to customer payments, with a hosted cloud edition.
status: active
maintainer: Talivia
firstRelease: 2026
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
databases:
  - postgres
installMethod: docker compose up --build -d
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-09-24
githubStargazers: 2347
contributors: 1
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://talivia.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/talivia-group/talivia
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/talivia-group/talivia/blob/main/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://talivia.com/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/talivia-group/talivia
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/talivia-group/talivia/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/talivia-group/talivia/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/talivia-group/talivia/blob/v1.0.0/package.json
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/talivia-group/talivia/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/talivia-group/talivia/blob/main/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/talivia-group/talivia/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/talivia-group/talivia
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/talivia-group/talivia/blob/main/README.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/talivia-group/talivia/blob/main/README.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/talivia-group/talivia/releases
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/talivia-group/talivia/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/talivia-group/talivia/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/talivia-group/talivia
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/talivia-group/talivia/contributors
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

Talivia is web analytics software that connects site visits to customer payments. A site adds a tracking script, and the self-hosted edition runs as a Node.js application with a PostgreSQL database. Docker Compose and a local pnpm setup are both documented in the README.

The vendor also runs Talivia Cloud, a managed service that adds integrations the self-hosted edition does not include. The vendor's own alternatives page compares Talivia with Plausible, Umami, Rybbit and OpenPanel.

## Worth knowing

The self-hosted edition is a subset of the complete product. Search Console, Bing Webmaster Tools, GitHub activity and social mentions are available on Talivia Cloud only.
