---
id: loki
name: Loki
urls:
  home: https://loki.js.org/
  repository: https://github.com/oblador/loki
  docs: https://loki.js.org/getting-started.html
category:
  - testing
description: Visual regression testing tool that screenshots Storybook stories and compares them with reference images.
status: active
maintainer: Joel Arvidsson
maintainerType: individual
firstRelease: 2017
language: javascript
runtime:
  - node
basedOn:
  - storybook
runsAs:
  - local
installMethod: yarn add loki --dev, then yarn loki init
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2024-08-27
githubStargazers: 1915
npmWeeklyDownloads: 27338
contributors: 62
dependentRepos: 315
dependentPackages: 137
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://loki.js.org/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/oblador/loki
    checkedAt: 2026-10-28
  - field: urls
    url: https://loki.js.org/getting-started.html
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/oblador/loki/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/oblador/loki
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/oblador/loki/blob/master/packages/loki/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/oblador/loki/blob/master/packages/loki/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://loki.js.org/getting-started.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://loki.js.org/getting-started.html
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://loki.js.org/continuous-integration.html
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/oblador/loki
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/oblador/loki/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/loki
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/oblador/loki/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/oblador/loki/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/oblador/loki
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/oblador/loki/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/loki
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/loki
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/loki
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
---

Loki is a visual regression tester for Storybook stories. It captures a screenshot of each story and compares it with reference images that are checked into the project's git repository. It runs on Node and is added to a project with a package manager.

Loki does not start any servers, so the Storybook it tests has to be available when the tests run. The [continuous integration guide](https://loki.js.org/continuous-integration.html) describes it as built to run on a CI server. It renders stories with Chrome, either in Docker or as a local application, and the README also lists Chrome in AWS Lambda.

## Worth knowing

The Docker target needs Docker, the local Chrome target needs a Chrome installation, and the gm diffing engine needs GraphicsMagick.
