---
id: servicestack
name: ServiceStack
urls:
  home: https://servicestack.net
  repository: https://github.com/ServiceStack/ServiceStack
  docs: https://docs.servicestack.net
  pricing: https://servicestack.net/pricing
category:
  - framework
description: Services framework for .NET that builds HTTP and message-based web services from typed request DTOs.
status: active
maintainer: ServiceStack Inc
maintainerType: company
hqCountry: US
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
databases:
  - postgres
  - sqlserver
  - mariadb
  - mysql
  - sqlite
adminUi: true
headlessApi:
  - rest
templating: razor
runsAs:
  - always-on
installMethod: npx create-net scaffold, or the NuGet package
licenseModel: open-core
license: AGPL-3.0 with the FOSS License Exception, ServiceStack License Agreement
currentMajor: "10"
latestReleaseDate: 2026-10-19
githubStargazers: 5499
contributors: 279
social:
  x: https://twitter.com/ServiceStack
  discord: https://discord.gg/w4ayGbuYpA
  forum: https://forums.servicestack.net
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://servicestack.net
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/ServiceStack/ServiceStack
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/ServiceStack/ServiceStack/blob/main/README.md
    checkedAt: 2026-10-26
  - field: urls
    url: https://servicestack.net/pricing
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://servicestack.net/terms
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://servicestack.net/terms
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/ServiceStack/ServiceStack
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/ServiceStack/ServiceStack/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://servicestack.net/getting-started
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://servicestack.net/getting-started
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.servicestack.net/netcore-deploy-rsync
    checkedAt: 2026-10-26
  - field: templating
    url: https://github.com/ServiceStack/ServiceStack/blob/main/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://servicestack.net
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://docs.servicestack.net/why-servicestack
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://servicestack.net
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/ServiceStack/ServiceStack/blob/main/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://servicestack.net/terms
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/ServiceStack/ServiceStack/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/ServiceStack/ServiceStack/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/ServiceStack/ServiceStack
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/ServiceStack/ServiceStack/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

ServiceStack is a web services framework for .NET. It serves HTTP services with REST endpoints, Razor views and a set of built-in admin screens for users, roles, API keys and logs, all in one app. Its data access library, OrmLite, works with PostgreSQL, SQL Server, MariaDB, MySQL and SQLite. A new project starts from `npx create-net`, and the framework is also published as a NuGet package.

An app runs as a .NET process on the server. The [rsync deployment guide](https://docs.servicestack.net/netcore-deploy-rsync) for Ubuntu keeps that process running under supervisor behind an nginx reverse proxy, and the Kamal deployment path runs the app in a Docker container on a Linux host.

## Worth knowing

The source is published under the GNU Affero General Public License with a FOSS License Exception, and any other use falls under the commercial ServiceStack License Agreement. The free licenses cover individuals, collaborative open source projects and small apps within the free usage quotas. The pricing page lists paid Indie and Business licenses, sold per developer.
