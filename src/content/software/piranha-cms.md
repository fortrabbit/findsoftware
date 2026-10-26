---
id: piranha-cms
name: Piranha CMS
urls:
  home: https://piranhacms.org/
  repository: https://github.com/PiranhaCMS/piranha.core
  docs: https://piranhacms.org/docs/master/basics/what-is-piranha
category:
  - cms
  - headless-cms
description: Open source CMS for ASP.NET Core that runs as an integrated CMS or as a headless content store, with an admin panel called the Manager.
status: active
maintainer: .NET Foundation and Contributors
maintainerType: foundation
firstRelease: 2017
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 8
contentStore:
  - database
databases:
  - sqlserver
  - sqlite
  - mysql
  - postgres
adminUi: true
templating: razor
installMethod: dotnet new install Piranha.Templates, then dotnet new piranha.razor
licenseModel: open-source
license: MIT
currentMajor: "12"
latestReleaseDate: 2026-07-16
githubStargazers: 2200
contributors: 62
social:
  x: https://twitter.com/piranhacms
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://piranhacms.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/PiranhaCMS/piranha.core
    checkedAt: 2026-10-26
  - field: urls
    url: https://piranhacms.org/docs/master/basics/what-is-piranha
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/PiranhaCMS/piranha.core/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/PiranhaCMS/piranha.core
    checkedAt: 2026-10-26
  - field: runtime
    url: https://piranhacms.org/docs/master/basics/prerequisites
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://piranhacms.org/docs/master/basics/prerequisites
    checkedAt: 2026-10-26
  - field: category
    url: https://piranhacms.org/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/PiranhaCMS/piranha.core/git/refs/tags/v4.0.0-alpha1
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/PiranhaCMS/piranha.core
    checkedAt: 2026-10-26
  - field: license
    url: https://piranhacms.org/
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://piranhacms.org/
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/PiranhaCMS/piranha.core/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/PiranhaCMS/piranha.core/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/PiranhaCMS/piranha.core
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/PiranhaCMS/piranha.core/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/PiranhaCMS/piranha.core
    checkedAt: 2026-10-26
  - field: templating
    url: https://piranhacms.org/docs/master/basics/project-templates
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://piranhacms.org/docs/master/basics/database-setup
    checkedAt: 2026-10-26
  - field: databases
    url: https://piranhacms.org/docs/master/architecture/databases/sql-server
    checkedAt: 2026-10-26
  - field: databases
    url: https://piranhacms.org/docs/master/architecture/databases/sqlite
    checkedAt: 2026-10-26
  - field: databases
    url: https://piranhacms.org/docs/master/architecture/databases/mysql
    checkedAt: 2026-10-26
  - field: databases
    url: https://piranhacms.org/docs/master/basics/packages
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://piranhacms.org/
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Piranha CMS is a content management system for ASP.NET Core, built on .NET 8 and Entity Framework Core. It runs as an integrated CMS inside an ASP.NET Core application or as a headless content store for other applications. Content is kept in a database through Entity Framework Core, and the project publishes data packages for SQL Server, SQLite, MySQL and PostgreSQL. Several sites, each with its own content structure, can be mapped to hostnames or subdomains.

The Manager, its admin panel, is built with Bootstrap and Vue.js. New projects come from templates installed with the dotnet CLI, and the templates include a Razor Pages project.
