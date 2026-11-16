---
id: typegoose
name: Typegoose
urls:
  home: https://typegoose.github.io/typegoose/
  repository: https://github.com/typegoose/typegoose
  docs: https://typegoose.github.io/typegoose/docs/guides/quick-start-guide/
category:
  - library
description: Wrapper that defines Mongoose models from TypeScript classes decorated with property decorators.
status: active
maintainer: The Typegoose Team
maintainerType: community
firstRelease: 2017
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 20
databases:
  - mongodb
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "13"
latestReleaseDate: 2026-09-22
githubStargazers: 2311
npmWeeklyDownloads: 313784
contributors: 101
dependentRepos: 2527
dependentPackages: 223
social:
  discord: https://discord.gg/BpGjTTD
  forum: https://github.com/typegoose/typegoose/discussions
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://typegoose.github.io/typegoose/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/typegoose/typegoose
    checkedAt: 2026-11-16
  - field: urls
    url: https://typegoose.github.io/typegoose/docs/guides/quick-start-guide/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/typegoose/typegoose/master/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/typegoose/typegoose
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/typegoose/typegoose/master/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://typegoose.github.io/typegoose/docs/guides/quick-start-guide/
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://typegoose.github.io/typegoose/docs/guides/quick-start-guide/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://typegoose.github.io/typegoose/docs/guides/quick-start-guide/
    checkedAt: 2026-11-16
  - field: databases
    url: https://typegoose.github.io/typegoose/docs/api/decorators/searchIndexes
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/typegoose/typegoose
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/typegoose/typegoose/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/typegoose/typegoose/releases
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/typegoose/typegoose/commits/v2.2.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/typegoose/typegoose/releases
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@typegoose%2ftypegoose
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/typegoose/typegoose
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/typegoose/typegoose/contributors
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40typegoose%2Ftypegoose
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40typegoose%2Ftypegoose
    checkedAt: 2026-11-16
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
runsAs: null
---

Typegoose defines Mongoose models from TypeScript classes. A class carries property decorators, and getModelForClass turns it into a regular Mongoose model whose documents have the class's types, so the schema and the TypeScript type come from one definition.

Typegoose wraps Mongoose and does not change its functions. Mongoose is installed next to Typegoose as a peer dependency. Static methods, instance methods and hooks are written on the class.

## Worth knowing

Each Typegoose release line works with a range of Mongoose versions, and the compatibility page lists them. Mongoose may change types even in patch versions, so an upgrade of one can need a matching upgrade of the other.
