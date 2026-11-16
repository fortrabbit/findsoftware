---
id: runtypes
name: Runtypes
urls:
  repository: https://github.com/runtypes/runtypes
category:
  - library
description: TypeScript library that checks untyped values against runtime type definitions and infers static types from the same definitions.
status: active
maintainer: Tom Crockett
firstRelease: 2016
language: javascript
runtime:
  - node
  - deno
hosting:
  - node
  - deno
installMethod: deno
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2026-08-14
githubStargazers: 2702
npmWeeklyDownloads: 285093
contributors: 40
dependentRepos: 878
dependentPackages: 316
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/runtypes/runtypes
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/runtypes/runtypes/master/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/runtypes
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/runtypes/runtypes/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/runtypes/runtypes
    checkedAt: 2026-11-16
  - field: runtime
    url: https://jsr.io/@runtypes/runtypes
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://jsr.io/@runtypes/runtypes
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/runtypes/runtypes
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/runtypes/runtypes/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/runtypes/runtypes/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/runtypes/runtypes/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/runtypes/runtypes
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/runtypes/runtypes/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/runtypes
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/runtypes
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/runtypes
    checkedAt: 2026-11-16
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

Runtypes is a TypeScript library that checks values of unknown shape against type definitions built from composable validators for primitives, literals, arrays, tuples, objects and unions. The static types of checked values are inferred from the same definitions, so the types do not have to be written twice. A failed check throws a ValidationError that carries a structured failure.
