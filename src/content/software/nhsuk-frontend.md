---
id: nhsuk-frontend
name: NHS.UK frontend
urls:
  home: https://nhsuk.github.io/nhsuk-frontend/
  repository: https://github.com/nhsuk/nhsuk-frontend
  docs: https://github.com/nhsuk/nhsuk-frontend/tree/main/docs
category:
  - css-framework
  - ui-library
description: Frontend code, with CSS, JavaScript and assets, for building user interfaces for NHS websites and services.
status: active
maintainer: NHS England
firstRelease: 2018
language: javascript
templating: nunjucks
runsAs:
  - browser
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "10"
latestReleaseDate: 2026-10-27
githubStargazers: 688
npmWeeklyDownloads: 38145
contributors: 60
dependentRepos: 244
dependentPackages: 14
addedAt: 2026-10-27
checkedAt: 2026-10-27
sources:
  - field: urls
    url: https://nhsuk.github.io/nhsuk-frontend/
    checkedAt: 2026-10-27
  - field: urls
    url: https://github.com/nhsuk/nhsuk-frontend
    checkedAt: 2026-10-27
  - field: urls
    url: https://github.com/nhsuk/nhsuk-frontend/blob/main/README.md
    checkedAt: 2026-10-27
  - field: firstRelease
    url: https://github.com/nhsuk/nhsuk-frontend/releases/tag/0.1.4
    checkedAt: 2026-10-27
  - field: maintainer
    url: https://github.com/nhsuk/nhsuk-frontend/blob/main/LICENSE
    checkedAt: 2026-10-27
  - field: language
    url: https://github.com/nhsuk/nhsuk-frontend
    checkedAt: 2026-10-27
  - field: category
    url: https://github.com/nhsuk/nhsuk-frontend/blob/main/README.md
    checkedAt: 2026-10-27
  - field: installMethod
    url: https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/installation/installing-with-npm.md
    checkedAt: 2026-10-27
  - field: installMethod
    url: https://github.com/nhsuk/nhsuk-frontend/blob/main/README.md
    checkedAt: 2026-10-27
  - field: templating
    url: https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/installation/installing-with-npm.md
    checkedAt: 2026-10-27
  - field: runsAs
    url: https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/installation/installing-compiled.md
    checkedAt: 2026-10-27
  - field: license
    url: https://github.com/nhsuk/nhsuk-frontend
    checkedAt: 2026-10-27
  - field: license
    url: https://github.com/nhsuk/nhsuk-frontend/blob/main/LICENSE
    checkedAt: 2026-10-27
  - field: license
    url: https://github.com/nhsuk/nhsuk-frontend/blob/main/README.md
    checkedAt: 2026-10-27
  - field: licenseModel
    url: https://github.com/nhsuk/nhsuk-frontend
    checkedAt: 2026-10-27
  - field: currentMajor
    url: https://github.com/nhsuk/nhsuk-frontend/releases/tag/v10.7.0
    checkedAt: 2026-10-27
  - field: latestReleaseDate
    url: https://github.com/nhsuk/nhsuk-frontend/releases/tag/v10.7.0
    checkedAt: 2026-10-27
  - field: githubStargazers
    url: https://github.com/nhsuk/nhsuk-frontend
    checkedAt: 2026-10-27
  - field: contributors
    url: https://github.com/nhsuk/nhsuk-frontend
    checkedAt: 2026-10-27
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/nhsuk-frontend
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/nhsuk-frontend
    checkedAt: 2026-10-27
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/nhsuk-frontend
    checkedAt: 2026-10-27
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
---

NHS.UK frontend is the code for building user interfaces for NHS websites and services, maintained by NHS England and published on npm as nhsuk-frontend. The npm route gives a project the Sass source, which it forwards into its own stylesheet, the JavaScript that starts all components with an initAll call, and Nunjucks macros for the components. The [installation guide](https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/installation/installing-with-npm.md) describes that route, and the [precompiled-files guide](https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/installation/installing-compiled.md) describes copying the built CSS, JavaScript and assets into a project instead.

## Worth knowing

The precompiled files cannot change the Sass settings, cannot use the Nunjucks macros and cannot import single components, so the guide points live applications to the npm route. The npm route needs Node.js and Dart Sass in the project's build. The README points to the NHS digital service manual for component examples and guidance.
