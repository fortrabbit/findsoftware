---
id: class-validator
name: class-validator
urls:
  repository: https://github.com/typestack/class-validator
category:
  - library
description: Validation library for TypeScript and JavaScript classes that checks object properties against rules declared with decorators.
status: active
maintainer: TypeStack
firstRelease: 2016
language: javascript
runtime:
  - node
hosting:
  - node
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-02-26
githubStargazers: 11853
npmWeeklyDownloads: 16955226
contributors: 115
dependentRepos: 56346
dependentPackages: 3854
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://github.com/typestack/class-validator
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://registry.npmjs.org/class-validator
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/typestack/class-validator/blob/v0.15.1/LICENSE
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/typestack/class-validator/blob/v0.15.1/README.md
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/typestack/class-validator
    checkedAt: 2026-11-04
  - field: runtime
    url: https://github.com/typestack/class-validator/blob/v0.15.1/README.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/typestack/class-validator/blob/v0.15.1/README.md
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/typestack/class-validator/blob/v0.15.1/LICENSE
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://github.com/typestack/class-validator/releases/tag/v0.15.1
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://github.com/typestack/class-validator/releases/tag/v0.15.1
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/typestack/class-validator
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/typestack/class-validator/contributors
    checkedAt: 2026-11-04
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/class-validator
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/class-validator
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/class-validator
    checkedAt: 2026-11-04
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
runsAs: null
---

class-validator checks the properties of TypeScript and JavaScript class instances against rules attached as decorators, and it exports the same checks as plain functions for validation without decorators. The README says it works in both the browser and Node.js and uses validator.js internally to perform the checks. It covers custom messages, nested objects, validation groups, whitelisting, and custom validators that run synchronously or asynchronously.

## Worth knowing

Schema-based validation without decorators, defined apart from the class, is no longer supported: the README says the feature broke and will not be fixed. A plain object, such as parsed JSON, has to become a class instance before it is validated, for example with class-transformer.
