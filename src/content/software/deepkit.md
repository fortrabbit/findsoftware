---
id: deepkit
name: Deepkit Framework
urls:
  home: https://deepkit.io
  repository: https://github.com/marcj/deepkit
  docs: https://deepkit.io/en/documentation/introduction
category:
  - framework
description: TypeScript framework that builds validation, serialization, HTTP, RPC, database access and dependency injection on TypeScript types kept at runtime.
status: active
maintainer: Marc J. Schmidt
maintainerType: individual
language: typescript
runtime:
  - node
hosting:
  - node
databases:
  - postgres
  - mysql
  - sqlite
  - mongodb
installMethod: npm init @deepkit/app
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2025-09-22
githubStargazers: 3545
npmWeeklyDownloads: 7149
contributors: 31
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://deepkit.io
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/marcj/deepkit
    checkedAt: 2026-10-21
  - field: urls
    url: https://github.com/marcj/deepkit/blob/master/README.md
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://github.com/marcj/deepkit/blob/master/LICENSE
    checkedAt: 2026-10-21
  - field: category
    url: https://github.com/marcj/deepkit/blob/master/README.md
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/marcj/deepkit
    checkedAt: 2026-10-21
  - field: license
    url: https://registry.npmjs.org/@deepkit/type/latest
    checkedAt: 2026-10-21
  - field: license
    url: https://github.com/marcj/deepkit/blob/master/LICENSE
    checkedAt: 2026-10-21
  - field: licenseModel
    url: https://github.com/marcj/deepkit/blob/master/README.md
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://github.com/marcj/deepkit/blob/master/README.md
    checkedAt: 2026-10-21
  - field: runtime
    url: https://github.com/marcj/deepkit/blob/master/website/src/pages/documentation/framework/deployment.md
    checkedAt: 2026-10-21
  - field: databases
    url: https://github.com/marcj/deepkit/blob/master/README.md
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/@deepkit/type/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@deepkit/type
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@deepkit/type
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/marcj/deepkit
    checkedAt: 2026-10-21
  - field: contributors
    url: https://api.github.com/repos/marcj/deepkit/contributors?anon=true&per_page=100
    checkedAt: 2026-10-21
figure:
  emoji: 🧱
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: TypeScript · Framework
ai: authored
packagistDownloads: null
---

Deepkit Framework is a TypeScript framework whose types stay available at runtime, so one type definition serves validation, serialization, database access, HTTP, RPC and dependency injection. The packages are modular: the README describes more than 40 independent packages, and one can use only what is needed. The framework package, `@deepkit/framework`, adds commands to an application, among them `server:start`, which starts the HTTP server. The [introduction](https://deepkit.io/en/documentation/introduction) gives an overview.

## Worth knowing

Runtime types need the Deepkit type compiler installed next to the type package, and `experimentalDecorators` is needed for certain functions in the framework. The deployment guide compiles the application to JavaScript and runs it with Node.
