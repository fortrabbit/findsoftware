---
id: typia
name: Typia
urls:
  home: https://typia.io
  repository: https://github.com/samchon/typia
  docs: https://typia.io/docs/
category:
  - library
description: TypeScript transformer library that compiles pure TypeScript types into runtime validators, JSON serializers and random generators.
status: active
maintainer: Jeongho Nam
maintainerType: individual
firstRelease: 2022
language: javascript
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "15"
latestReleaseDate: 2026-11-14
githubStargazers: 5969
npmWeeklyDownloads: 503887
contributors: 96
ecosystemsMonthlyDownloads: 1786277
dependentRepos: 123
dependentPackages: 94
social:
  discord: https://discord.gg/E94XhzrUCZ
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://typia.io/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/samchon/typia
    checkedAt: 2026-11-16
  - field: urls
    url: https://typia.io/docs/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/samchon/typia/master/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/samchon/typia/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/samchon/typia
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/samchon/typia/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/samchon/typia/master/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/samchon/typia/master/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/samchon/typia/commits/v2.0.2
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/samchon/typia/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/samchon/typia/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/samchon/typia
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/samchon/typia/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/typia
    checkedAt: 2026-11-16
  - field: ecosystemsMonthlyDownloads
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/typia
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/typia
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/typia
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

Typia is a TypeScript transformer. A project calls a function such as `typia.is<T>()` or `typia.assert<T>()` with a type argument, and the build replaces the call with a checker written for that type, so the validators need no separate schema and no reflection at runtime. The same transform produces JSON schemas, typed stringify and parse functions, Protocol Buffer encoders and decoders, and random data for a type.

Its [homepage](https://typia.io/) contrasts this with validators that need a separate schema object, such as Zod, io-ts and class-validator.

## Worth knowing

The transform runs when the project compiles, so the stock `tsc`, `ts-node` and `tsx` do not apply it. The [setup guide](https://typia.io/docs/setup/) covers `ttsc` and `ttsx`, and a legacy path for projects pinned to earlier releases.
