---
id: efcore
name: Entity Framework Core
urls:
  home: https://learn.microsoft.com/ef/
  repository: https://github.com/dotnet/efcore
  docs: https://learn.microsoft.com/en-us/ef/core/
  plugins: https://learn.microsoft.com/en-us/ef/core/providers/
category:
  - library
description: Object-relational mapper for .NET that maps entity classes to databases and queries them with LINQ.
status: active
maintainer: .NET Foundation
maintainerType: foundation
firstRelease: 2014
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 10.0
databases:
  - sqlserver
  - sqlite
  - mariadb
  - mysql
  - postgres
installMethod: nuget
licenseModel: open-source
license: MIT
currentMajor: "10"
latestReleaseDate: 2026-10-25
githubStargazers: 14814
contributors: 364
dependentRepos: 169
dependentPackages: 5701
addedAt: 2026-11-08
checkedAt: 2026-11-08
sources:
  - field: urls
    url: https://learn.microsoft.com/ef/
    checkedAt: 2026-11-08
  - field: urls
    url: https://learn.microsoft.com/en-us/ef/core/
    checkedAt: 2026-11-08
  - field: urls
    url: https://api.github.com/repos/dotnet/efcore
    checkedAt: 2026-11-08
  - field: firstRelease
    url: https://api.github.com/repos/dotnet/efcore/releases/tags/7.0.0-alpha2
    checkedAt: 2026-11-08
  - field: maintainer
    url: https://raw.githubusercontent.com/dotnet/efcore/main/LICENSE.txt
    checkedAt: 2026-11-08
  - field: category
    url: https://learn.microsoft.com/en-us/ef/core/
    checkedAt: 2026-11-08
  - field: language
    url: https://api.github.com/repos/dotnet/efcore
    checkedAt: 2026-11-08
  - field: runtime
    url: https://learn.microsoft.com/en-us/ef/core/get-started/overview/install
    checkedAt: 2026-11-08
  - field: runtimeMin
    url: https://api.nuget.org/v3-flatcontainer/microsoft.entityframeworkcore/10.0.14/microsoft.entityframeworkcore.nuspec
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://learn.microsoft.com/en-us/ef/core/get-started/overview/install
    checkedAt: 2026-11-08
  - field: databases
    url: https://raw.githubusercontent.com/dotnet/efcore/main/README.md
    checkedAt: 2026-11-08
  - field: urls
    url: https://raw.githubusercontent.com/dotnet/efcore/main/README.md
    checkedAt: 2026-11-08
  - field: license
    url: https://raw.githubusercontent.com/dotnet/efcore/main/LICENSE.txt
    checkedAt: 2026-11-08
  - field: currentMajor
    url: https://github.com/dotnet/efcore/releases/tag/v10.0.13
    checkedAt: 2026-11-08
  - field: latestReleaseDate
    url: https://api.nuget.org/v3/catalog0/data/2026.10.25.17.33.47/microsoft.entityframeworkcore.10.0.14.json
    checkedAt: 2026-11-08
  - field: githubStargazers
    url: https://api.github.com/repos/dotnet/efcore
    checkedAt: 2026-11-08
  - field: contributors
    url: https://api.github.com/repos/dotnet/efcore/contributors
    checkedAt: 2026-11-08
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/nuget.org/packages/microsoft.entityframeworkcore
    checkedAt: 2026-11-08
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/nuget.org/packages/microsoft.entityframeworkcore
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

Entity Framework Core is an object-relational mapper for .NET, developed in the dotnet/efcore repository next to Microsoft.Data.Sqlite, an ADO.NET provider for SQLite. Applications add the Microsoft.EntityFrameworkCore package from NuGet together with the provider package for their database, as the [install guide](https://learn.microsoft.com/en-us/ef/core/get-started/overview/install) describes. The library needs a recent version of .NET at runtime. Database access goes through provider packages, and the [providers list](https://learn.microsoft.com/en-us/ef/core/providers/) names providers from several sources.

## Worth knowing

Not every provider is maintained by the EF Core project. A provider for a database that the core project does not ship, such as Firebird, MongoDB or Oracle, comes from its own maintainer.
