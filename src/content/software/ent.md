---
id: ent
name: ent
urls:
  home: https://entgo.io
  repository: https://github.com/ent/ent
  docs: https://entgo.io/docs/getting-started/
category:
  - library
description: Entity framework for Go that models a database schema as Go code and generates a statically typed query API.
status: active
maintainer: The Ent Authors
maintainerType: community
firstRelease: 2020
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - mariadb
  - postgres
  - sqlite
installMethod: Go modules (go get)
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-03-23
githubStargazers: 17221
contributors: 234
dependentRepos: 808
dependentPackages: 1073
social:
  x: https://twitter.com/entgo_io
  discord: https://discord.gg/qZmPgTE6RX
  forum: https://github.com/ent/ent/discussions
addedAt: 2026-11-08
checkedAt: 2026-11-08
sources:
  - field: urls
    url: https://entgo.io/
    checkedAt: 2026-11-08
  - field: urls
    url: https://api.github.com/repos/ent/ent
    checkedAt: 2026-11-08
  - field: urls
    url: https://entgo.io/docs/getting-started/
    checkedAt: 2026-11-08
  - field: firstRelease
    url: https://api.github.com/repos/ent/ent/releases
    checkedAt: 2026-11-08
  - field: maintainer
    url: https://entgo.io/
    checkedAt: 2026-11-08
  - field: category
    url: https://entgo.io/
    checkedAt: 2026-11-08
  - field: language
    url: https://api.github.com/repos/ent/ent
    checkedAt: 2026-11-08
  - field: runtime
    url: https://entgo.io/
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://entgo.io/docs/code-gen/
    checkedAt: 2026-11-08
  - field: databases
    url: https://entgo.io/docs/dialects/
    checkedAt: 2026-11-08
  - field: databases
    url: https://entgo.io/docs/dialects/
    checkedAt: 2026-11-08
  - field: databases
    url: https://entgo.io/docs/dialects/
    checkedAt: 2026-11-08
  - field: databases
    url: https://entgo.io/docs/dialects/
    checkedAt: 2026-11-08
  - field: license
    url: https://github.com/ent/ent/blob/master/README.md
    checkedAt: 2026-11-08
  - field: licenseModel
    url: https://github.com/ent/ent/blob/master/LICENSE
    checkedAt: 2026-11-08
  - field: currentMajor
    url: https://api.github.com/repos/ent/ent/releases/latest
    checkedAt: 2026-11-08
  - field: latestReleaseDate
    url: https://api.github.com/repos/ent/ent/releases/latest
    checkedAt: 2026-11-08
  - field: githubStargazers
    url: https://api.github.com/repos/ent/ent
    checkedAt: 2026-11-08
  - field: contributors
    url: https://api.github.com/repos/ent/ent/contributors?per_page=1
    checkedAt: 2026-11-08
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/proxy.golang.org/packages/entgo.io%2Fent
    checkedAt: 2026-11-08
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/proxy.golang.org/packages/entgo.io%2Fent
    checkedAt: 2026-11-08
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

ent is an entity framework for Go, maintained by The Ent Authors. A database schema is modeled as Go code, and the project's codegen tool from the cmd/ent package generates the Go code the application builds on. The [code generation page](https://entgo.io/docs/code-gen/) shows how to add ent to a project's go.mod with Go modules.

The GraphQL integration uses the gqlgen library to generate a GraphQL schema and Query and Mutation resolvers from the entity schema.

The documentation is at entgo.io, starting with a [getting-started guide](https://entgo.io/docs/getting-started/).
