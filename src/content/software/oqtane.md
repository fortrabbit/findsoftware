---
id: oqtane
name: Oqtane
urls:
  home: https://www.oqtane.org/
  repository: https://github.com/oqtane/oqtane.framework
  docs: https://docs.oqtane.org
  plugins: https://www.oqtane.net
category:
  - cms
  - framework
description: Open source CMS and modular application framework for building web, desktop and mobile applications on .NET, using Blazor.
status: active
maintainer: Oqtane Labs Inc
maintainerType: company
firstRelease: 2019
hqCountry: US
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 10
contentStore:
  - database
databases:
  - sqlserver
  - mysql
  - sqlite
  - postgres
adminUi: true
headlessApi:
  - rest
templating: razor
i18n: yes, content localization
renderingModes:
  - server
  - spa
installMethod: dotnet new template (Oqtane.Application.Template)
licenseModel: open-source
license: MIT
currentMajor: "10"
latestReleaseDate: 2026-09-14
githubStargazers: 2258
contributors: 60
social:
  x: https://twitter.com/oqtane
  discord: https://discord.gg/BnPny88avK
  forum: https://github.com/oqtane/oqtane.framework/discussions
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.oqtane.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/oqtane/oqtane.framework
    checkedAt: 2026-10-26
  - field: urls
    url: https://docs.oqtane.org
    checkedAt: 2026-10-26
  - field: category
    url: https://www.oqtane.org/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.oqtane.org/
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://www.oqtane.org/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/oqtane/oqtane.framework
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/oqtane/oqtane.framework/blob/dev/README.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://github.com/oqtane/oqtane.framework/blob/dev/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://www.oqtane.org/blog/!/7/announcing-oqtane-a-modular-application-framework-for-blazor
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/oqtane/oqtane.framework/blob/dev/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/oqtane/oqtane.framework/blob/dev/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/oqtane/oqtane.framework/blob/dev/README.md
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://www.oqtane.org/
    checkedAt: 2026-10-26
  - field: databases
    url: https://www.oqtane.org/
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://www.oqtane.org/
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://www.oqtane.org/
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://www.oqtane.org/
    checkedAt: 2026-10-26
  - field: templating
    url: https://www.oqtane.org/
    checkedAt: 2026-10-26
  - field: i18n
    url: https://github.com/oqtane/oqtane.framework/blob/dev/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/oqtane/oqtane.framework/blob/dev/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://www.oqtane.org/
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/oqtane/oqtane.framework/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/oqtane/oqtane.framework/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/oqtane/oqtane.framework
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/oqtane/oqtane.framework/contributors
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/oqtane/oqtane.framework/blob/dev/README.md
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Oqtane is a CMS and application framework for .NET, written in C# on top of Blazor. Administrators manage pages and content from an administrative interface inside the site, and developers extend it with modules and themes. The UI is built from Razor components, and the framework exposes REST-based APIs. One installation can serve several clients, with shared or isolated tenancy models. It supports Blazor's interactive render modes, so pages can render on the server or in the browser. Content is stored in SQL Server, MySQL, SQLite or PostgreSQL.

## Worth knowing

The Windows [installation post](https://www.oqtane.org/blog/!/24/installing-oqtane-on-iis) states that Blazor supports one app pool per app and that Oqtane does not support IIS sub-applications. The documentation site at [docs.oqtane.org](https://docs.oqtane.org) was generated for version 10.00.04, so the release notes on GitHub hold the newer changes.
