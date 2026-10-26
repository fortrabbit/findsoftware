---
id: orchard-core
name: Orchard Core
urls:
  home: https://orchardcore.net/
  repository: https://github.com/OrchardCMS/OrchardCore
  docs: https://docs.orchardcore.net/en/latest/
category:
  - cms
  - framework
description: Open-source CMS and modular, multi-tenant application framework built on ASP.NET Core.
status: active
maintainer: .NET Foundation
maintainerType: foundation
firstRelease: 2021
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
basedOn:
  - aspnet-core
contentStore:
  - database
databases:
  - sqlserver
  - mysql
  - mariadb
  - postgres
  - sqlite
adminUi: true
headlessApi:
  - graphql
templating: razor, liquid, liquid
i18n: yes, content in many languages
installMethod: dotnet new template (OrchardCore.ProjectTemplates)
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "3"
latestReleaseDate: 2026-07-09
githubStargazers: 8213
contributors: 331
social:
  discord: https://orchardcore.net/discord
  forum: https://github.com/OrchardCMS/OrchardCore/discussions
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://orchardcore.net/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/OrchardCMS/OrchardCore
    checkedAt: 2026-10-26
  - field: urls
    url: https://docs.orchardcore.net/en/latest/
    checkedAt: 2026-10-26
  - field: category
    url: https://orchardcore.net/
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://orchardcore.net/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://orchardcore.net/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/OrchardCMS/OrchardCore
    checkedAt: 2026-10-26
  - field: runtime
    url: https://orchardcore.net/
    checkedAt: 2026-10-26
  - field: templating
    url: https://orchardcore.net/
    checkedAt: 2026-10-26
  - field: templating
    url: https://docs.orchardcore.net/en/latest/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://docs.orchardcore.net/en/latest/getting-started/templates/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://docs.orchardcore.net/en/latest/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://docs.orchardcore.net/en/latest/topics/docker/
    checkedAt: 2026-10-26
  - field: databases
    url: https://docs.orchardcore.net/en/latest/
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://docs.orchardcore.net/en/latest/
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://orchardcore.net/
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://orchardcore.net/
    checkedAt: 2026-10-26
  - field: i18n
    url: https://orchardcore.net/
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/OrchardCMS/OrchardCore
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://orchardcore.net/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/OrchardCMS/OrchardCore/releases
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/OrchardCMS/OrchardCore/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/OrchardCMS/OrchardCore/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/OrchardCMS/OrchardCore
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/OrchardCMS/OrchardCore/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Orchard Core is an open-source CMS and application framework built on ASP.NET Core and extended with C#. Editors manage content, media, users and roles, search and workflows through the CMS, and developers add features as modules. Templates are written in Razor, and editors can change HTML templates in Liquid. One installation can run several isolated sites, content can be queried through a GraphQL API for headless use, and the editor offers a live preview. Content is kept in a relational database through a document abstraction called YesSql, which supports SQL Server, MySQL, MariaDB, PostgreSQL and SQLite.

## Worth knowing

Orchard Core is the ASP.NET Core redevelopment of Orchard. The Orchard 1 line, built on the .NET Framework, has its own record. The documentation describes three ways in: a project template that creates a site with one command, the NuGet packages added to an ASP.NET Core application, and a Dockerfile in the repository.
