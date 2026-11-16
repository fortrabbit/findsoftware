---
id: typebox
name: TypeBox
urls:
  home: https://sinclairzx81.github.io/typebox/
  repository: https://github.com/sinclairzx81/typebox
  docs: https://sinclairzx81.github.io/typebox/
category:
  - library
description: Runtime type system for TypeScript that builds JSON Schema objects which infer as TypeScript types and validate data.
status: active
maintainer: Haydn Paterson
maintainerType: individual
firstRelease: 2021
language: javascript
i18n: multiple languages
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-11-12
githubStargazers: 7039
npmWeeklyDownloads: 16559544
contributors: 62
dependentRepos: 1
dependentPackages: 1
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/sinclairzx81/typebox
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/sinclairzx81/typebox
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/sinclairzx81/typebox/main/license
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/sinclairzx81/typebox
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/sinclairzx81/typebox/main/readme.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/sinclairzx81/typebox/main/readme.md
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/sinclairzx81/typebox/main/readme.md
    checkedAt: 2026-11-16
  - field: i18n
    url: https://github.com/sinclairzx81/typebox/blob/main/docs/docs/system/2_locale.html
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/sinclairzx81/typebox/main/license
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/sinclairzx81/typebox/main/license
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://registry.npmjs.org/typebox
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/sinclairzx81/typebox/commits/0.17.7
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://registry.npmjs.org/typebox
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/typebox
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/sinclairzx81/typebox
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/sinclairzx81/typebox/contributors
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/typebox
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/typebox
    checkedAt: 2026-11-16
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

TypeBox is a TypeScript library that builds JSON Schema objects in memory and infers the matching TypeScript type from each one. One definition can therefore be checked statically by TypeScript and at runtime with standard JSON Schema validation.

The package also includes a Script engine that converts TypeScript type definitions written as text into JSON Schema, and a compiler submodule that checks values against a compiled schema. The README names REST and RPC services as a place to validate data received over the wire.

## Worth knowing

The 1.x line is ESM only. The 0.x line is kept under long-term support in a separate repository and supports both ESM and CommonJS.
