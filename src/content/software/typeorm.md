---
id: typeorm
name: TypeORM
urls:
  home: https://typeorm.io
  repository: https://github.com/typeorm/typeorm
  docs: https://typeorm.io/docs/getting-started
category:
  - library
description: TypeScript and JavaScript ORM that maps database tables to classes and offers a query builder, with DataMapper and ActiveRecord patterns.
status: active
maintainer: TypeORM
firstRelease: 2016
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 20
databases:
  - postgres
  - mysql
  - mariadb
  - sqlite
  - sqlserver
  - oracle
  - mongodb
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-11-12
githubStargazers: 36674
npmWeeklyDownloads: 6716641
contributors: 424
ecosystemsMonthlyDownloads: 26021915
dependentRepos: 51340
dependentPackages: 3660
social:
  discord: https://discord.gg/cC9hkmUgNa
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://typeorm.io/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/typeorm/typeorm
    checkedAt: 2026-11-16
  - field: urls
    url: https://typeorm.io/docs/getting-started
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/typeorm/typeorm/master/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://typeorm.io/docs/getting-started
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/typeorm/typeorm
    checkedAt: 2026-11-16
  - field: runtime
    url: https://typeorm.io/docs/getting-started
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://raw.githubusercontent.com/typeorm/typeorm/1.1.3/package.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://typeorm.io/docs/getting-started
    checkedAt: 2026-11-16
  - field: databases
    url: https://typeorm.io/docs/getting-started
    checkedAt: 2026-11-16
  - field: databases
    url: https://typeorm.io/docs/getting-started
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/typeorm/typeorm/master/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/typeorm/typeorm/master/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/typeorm
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/typeorm/typeorm/releases?per_page=100
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/typeorm/typeorm/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/typeorm/typeorm
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/typeorm/typeorm/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/typeorm
    checkedAt: 2026-11-16
  - field: ecosystemsMonthlyDownloads
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/typeorm
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/typeorm
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/typeorm
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

TypeORM maps database tables to classes in TypeScript or JavaScript. Entity classes declare their columns and relations with decorators, and the application reads and writes rows through repositories, the entity manager or a query builder. The same entities can follow a DataMapper style, where a repository handles the rows, or an ActiveRecord style, where the entity class carries its own save and find methods.

The package also covers migrations and a CLI whose `init` command generates a starter project for a Node.js application. The [getting-started guide](https://typeorm.io/docs/getting-started) walks through the setup.

## Worth knowing

Entities rely on decorators, so the project's TypeScript configuration enables experimentalDecorators and emitDecoratorMetadata, and the reflect-metadata shim is installed beside the package. Each database needs its own driver package, installed as that driver's documentation describes.
