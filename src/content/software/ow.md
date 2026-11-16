---
id: ow
name: ow
urls:
  home: https://sindresorhus.com/ow/
  repository: https://github.com/sindresorhus/ow
  docs: https://sindresorhus.com/ow/
category:
  - library
description: TypeScript library for runtime validation of function arguments, with chainable predicates and readable error messages.
status: active
maintainer: Sindre Sorhus
maintainerType: individual
firstRelease: 2016
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 20
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2025-10-16
githubStargazers: 3865
npmWeeklyDownloads: 2637752
contributors: 34
dependentRepos: 46961
dependentPackages: 480
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/sindresorhus/ow
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/sindresorhus/ow
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/sindresorhus/ow/main/readme.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/sindresorhus/ow/main/license
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/sindresorhus/ow
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/sindresorhus/ow/main/readme.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/sindresorhus/ow/main/readme.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://raw.githubusercontent.com/sindresorhus/ow/v3.1.1/package.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/sindresorhus/ow/main/readme.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/sindresorhus/ow
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/sindresorhus/ow/main/license
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/sindresorhus/ow/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/sindresorhus/ow/releases/latest
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/ow
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/sindresorhus/ow
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/sindresorhus/ow/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/ow
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/ow
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/ow
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

ow checks the arguments of a function at runtime and throws an ArgumentError with a message when a value does not match. Checks are written as chained predicates, such as ow.string.minLength, and TypeScript type guards narrow the checked value afterwards.

The package installs from npm and runs in Node.js, where the name of a checked value is inferred from the source. In the browser that inference does not work.

## Worth knowing

For complex schema validation, such as API responses or parsed JSON, the README points to zod instead. A dev-only import, ow/dev-only, exports a shim in production builds, which lowers the bundle size.
