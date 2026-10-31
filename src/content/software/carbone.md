---
id: carbone
name: Carbone
urls:
  home: https://carbone.io
  repository: https://github.com/carboneio/carbone
  docs: https://carbone.io/documentation.html
  pricing: https://carbone.io/pricing.html
category:
  - media
description: Document generator that fills Word, Excel, OpenDocument and PowerPoint templates with JSON data and exports PDF and other formats.
status: active
maintainer: CARBONEIO SAS
maintainerType: company
firstRelease: 2017
hqCountry: FR
language: javascript
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: npm
licenseModel: open-core
license: Carbone Community License 1.0, Carbone On-Premise License, free (Community Edition)
currentMajor: "5"
latestReleaseDate: 2026-10-30
githubStargazers: 2133
npmWeeklyDownloads: 31227
contributors: 9
social:
  x: https://x.com/carbone_io
  discord: https://discord.gg/kKB3aPYqnh
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: name
    url: https://carbone.io
    checkedAt: 2026-10-31
  - field: urls
    url: https://carbone.io
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/carboneio/carbone
    checkedAt: 2026-10-31
  - field: urls
    url: https://carbone.io/documentation.html
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://carbone.io/company/legal-notices.html
    checkedAt: 2026-10-31
  - field: maintainerType
    url: https://carbone.io/company/legal-notices.html
    checkedAt: 2026-10-31
  - field: hqCountry
    url: https://carbone.io/company/legal-notices.html
    checkedAt: 2026-10-31
  - field: category
    url: https://carbone.io
    checkedAt: 2026-10-31
  - field: category
    url: https://carbone.io/documentation/developer/on-premise-installation/introduction.html
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/carboneio/carbone
    checkedAt: 2026-10-31
  - field: runtime
    url: https://carbone.io/documentation/developer/on-premise-installation/introduction.html
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/carboneio/carbone
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/carboneio/carbone
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://carbone.io/documentation/developer/on-premise-installation/introduction.html
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://carbone.io/documentation/developer/on-premise-installation/introduction.html
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://carbone.io/documentation/developer/on-premise-installation/introduction.html
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/carboneio/carbone/blob/master/LICENSE.md
    checkedAt: 2026-10-31
  - field: license
    url: https://carbone.io/company/licenses.html
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://github.com/carboneio/carbone
    checkedAt: 2026-10-31
  - field: urls
    url: https://carbone.io/pricing.html
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://carbone.io/changelog.html
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://carbone.io/changelog.html
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://registry.npmjs.org/carbone
    checkedAt: 2026-10-31
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-23:2026-10-29/carbone
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/carboneio/carbone
    checkedAt: 2026-10-31
  - field: contributors
    url: https://github.com/carboneio/carbone
    checkedAt: 2026-10-31
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Carbone is a document generator: it analyzes a template, injects JSON data into it and exports the result in the template's own format or converted to another one. The on-premise distribution runs as a single executable that embeds the template engine, an API server with a REST API and Carbone Studio, a template editor. It comes as a standalone binary or as a Docker image, and the [introduction to on-premise installation](https://carbone.io/documentation/developer/on-premise-installation/introduction.html) describes both. An npm package embeds the generator in a Node.js application.

PDF output needs LibreOffice on the system, and the full Docker image bundles it. Without LibreOffice, the npm package still generates formats that match the template type. The on-premise REST API is the same as the one on [Carbone Cloud](https://carbone.io/pricing.html), the hosted service.

## Worth knowing

The license does not allow offering Carbone, or a wrapper around it, as a hosted document generation service outside a product of the user's own. Authentication is disabled by default on on-premise deployments. The npm package is one major version behind the on-premise distribution.
