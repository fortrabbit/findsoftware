---
id: squidex
name: Squidex
urls:
  home: https://squidex.io
  repository: https://github.com/Squidex/squidex
  docs: https://docs.squidex.io/
  pricing: https://squidex.io/pricing
category:
  - headless-cms
description: Open source headless CMS and content management hub, built with ASP.NET Core, that serves content through REST and GraphQL APIs.
status: active
maintainer: Squidex UG
maintainerType: company
firstRelease: 2019
hqCountry: DE
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 10
contentStore:
  - database
databases:
  - mongodb
  - postgres
  - mysql
  - sqlserver
adminUi: true
headlessApi:
  - rest
  - graphql
i18n: yes
runsAs:
  - always-on
installMethod: Docker Compose
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2026-09-28
githubStargazers: 2513
contributors: 75
social:
  x: https://twitter.com/squidexcms
  forum: https://support.squidex.io
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://squidex.io/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/Squidex/squidex
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/Squidex/squidex/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://squidex.io/legal
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://squidex.io/legal
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/Squidex/squidex/releases
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/Squidex/squidex/blob/master/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/Squidex/squidex
    checkedAt: 2026-10-23
  - field: runtime
    url: https://squidex.io/
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/Squidex/squidex/blob/master/backend/src/Squidex/Squidex.csproj
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/Squidex/squidex
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://squidex.io/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/Squidex/squidex/blob/master/README.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/Squidex/squidex/blob/master/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://squidex.io/
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://squidex.io/
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://squidex.io/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://docs.squidex.io/01-getting-started/installation/platforms/install-docker
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.squidex.io/01-getting-started/installation/platforms/install-docker
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.squidex.io/01-getting-started/installation/platforms/install-iis
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://squidex.io/
    checkedAt: 2026-10-23
  - field: i18n
    url: https://squidex.io/features
    checkedAt: 2026-10-23
  - field: urls
    url: https://squidex.io/pricing
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/Squidex/squidex/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/Squidex/squidex/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/Squidex/squidex
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/Squidex/squidex/contributors
    checkedAt: 2026-10-23
figure:
  emoji: 🔌
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: C# · Headless CMS
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Squidex is an open source headless CMS and content management hub. It stores content in a database and serves it through REST and GraphQL APIs, and it includes an admin interface. The project says it is built with ASP.NET Core and CQRS. Each project can define any number of languages, and publishing workflows can restrict stage transitions to user groups.

Squidex supports MongoDB, PostgreSQL, MySQL and SQL Server as its database. The Docker install page describes a Compose setup with Squidex as one of its containers, so the site runs as a long-running server process. Other install routes are the OS binaries and Helm charts for Kubernetes.

## Worth knowing

Squidex is also offered as a SaaS version at cloud.squidex.io, next to the open source software.
