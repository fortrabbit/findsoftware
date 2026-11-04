---
id: ajv
name: Ajv
urls:
  home: https://ajv.js.org/
  repository: https://github.com/ajv-validator/ajv
  docs: https://ajv.js.org/guide/getting-started.html
category:
  - library
description: JSON Schema and JSON Type Definition validator for Node.js and browsers that compiles schemas into validation functions.
status: active
maintainer: Evgeny Poberezkin
firstRelease: 2015
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 18
i18n: error message translations through the ajv-i18n package
installMethod: npm install
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-04-24
githubStargazers: 14870
npmWeeklyDownloads: 513274688
contributors: 191
dependentRepos: 1087714
dependentPackages: 14548
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://ajv.js.org/
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/ajv-validator/ajv
    checkedAt: 2026-11-04
  - field: urls
    url: https://ajv.js.org/guide/getting-started.html
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/ajv-validator/ajv/blob/master/LICENSE
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/ajv-validator/ajv/blob/master/README.md
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/ajv-validator/ajv
    checkedAt: 2026-11-04
  - field: runtime
    url: https://github.com/ajv-validator/ajv/blob/master/README.md
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://github.com/ajv-validator/ajv/blob/master/README.md
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/ajv-validator/ajv/blob/master/LICENSE
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://github.com/ajv-validator/ajv/blob/master/LICENSE
    checkedAt: 2026-11-04
  - field: i18n
    url: https://github.com/ajv-validator/ajv/blob/master/README.md
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/ajv-validator/ajv/releases/tags/v8.20.0
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/ajv-validator/ajv/releases/tags/v8.20.0
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://registry.npmjs.org/ajv
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/ajv-validator/ajv/blob/master/README.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://ajv.js.org/guide/environments.html
    checkedAt: 2026-11-04
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/ajv
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/ajv-validator/ajv
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/ajv-validator/ajv/contributors?per_page=1
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/ajv
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/ajv
    checkedAt: 2026-11-04
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
runsAs: null
---

Ajv is a validator for JSON data against JSON Schema and JSON Type Definition. It generates code from a schema, so each schema becomes a validation function that the application calls on its data. The package is installed from npm, and browser bundles are also published on cdnjs. Error message translations come from the separate ajv-i18n package.

## Worth knowing

Support for JSON Schema draft 04 is a separate package, ajv-draft-04, and the command-line tool is another package, ajv-cli. The project's docs name both alongside the core package.
