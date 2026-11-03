---
id: altcha
name: ALTCHA
urls:
  home: https://altcha.org
  repository: https://github.com/altcha-org/altcha
  docs: https://altcha.org/docs/
  pricing: https://altcha.org/pricing
category:
  - forms
description: Open-source proof-of-work CAPTCHA widget and server verification libraries, with a paid self-hosted server (Sentinel) and a hosted service (Cloud).
status: active
maintainer: BAU Software s.r.o.
maintainerType: company
firstRelease: 2023
hqCountry: CZ
language: javascript
databases:
  - sqlite
  - postgres
  - mysql
  - mariadb
  - sqlserver
  - oracle
adminUi: true
i18n: 50+ languages
runsAs:
  - browser
  - always-on
installMethod: npm
licenseModel: open-core
license: MIT, ALTCHA Sentinel End-User License Agreement
currentMajor: "3"
latestReleaseDate: 2026-10-22
githubStargazers: 2874
npmWeeklyDownloads: 290520
contributors: 1
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://altcha.org
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/altcha-org/altcha
    checkedAt: 2026-11-03
  - field: urls
    url: https://altcha.org/docs/
    checkedAt: 2026-11-03
  - field: urls
    url: https://altcha.org/pricing
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://altcha.org/legal/
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://altcha.org/legal/
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://altcha.org/legal/
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/altcha-org/altcha/releases
    checkedAt: 2026-11-03
  - field: category
    url: https://altcha.org
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/altcha-org/altcha
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://altcha.org/docs/integration/widget/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://altcha.org/docs/sentinel/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://altcha.org/docs/sentinel/security/license/
    checkedAt: 2026-11-03
  - field: databases
    url: https://altcha.org/docs/sentinel/databases/
    checkedAt: 2026-11-03
  - field: databases
    url: https://altcha.org/docs/sentinel/databases/
    checkedAt: 2026-11-03
  - field: databases
    url: https://altcha.org/docs/sentinel/databases/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://altcha.org/docs/integration/widget/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://altcha.org/docs/integration/widget/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://altcha.org/docs/sentinel/get-started/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://altcha.org/docs/sentinel/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://altcha.org/docs/sentinel/databases/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://altcha.org/docs/sentinel/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://altcha.org/docs/sentinel/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://altcha.org/docs/sentinel/install/
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/altcha-org/altcha
    checkedAt: 2026-11-03
  - field: license
    url: https://altcha.org/legal/
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://altcha.org/legal/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/altcha-org/altcha/releases/tag/v3.5.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/altcha-org/altcha/releases/tag/v3.5.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/altcha-org/altcha
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/altcha-org/altcha/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/altcha
    checkedAt: 2026-11-03
  - field: i18n
    url: https://github.com/altcha-org/altcha/blob/main/README.md
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
---

ALTCHA is a CAPTCHA widget that runs a proof-of-work calculation in the visitor's browser instead of showing visual puzzles. A site adds the widget as a web component, either from the npm package or from a script tag. The site's server then checks the submitted payload with one of the official verification libraries, which cover TypeScript, Python, Go, PHP, Java, Ruby, Rust and several other languages, as the [server integration page](https://altcha.org/docs/integration/server/) lists.

ALTCHA Sentinel is the self-hosted server for the widget. It runs on the operator's own infrastructure, stores its data in embedded storage by default or in an external database, and adds risk scoring, adaptive challenges and an admin app. A hosted service, ALTCHA Cloud, runs the same engine in the EU.

## Worth knowing

Sentinel is a separate product under its own license and needs a paid license before it runs in production; a 30-day trial is available. The widget's code challenge option requires Sentinel or a custom server. Sentinel verifies its license by default with a server at eu.altcha.org.
