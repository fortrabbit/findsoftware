---
id: linq2db
name: LINQ to DB
urls:
  home: https://linq2db.github.io/
  repository: https://github.com/linq2db/linq2db
  docs: https://linq2db.github.io/articles/get-started/install/index.html
category:
  - library
description: C# data access library that maps POCO classes to database tables and translates LINQ queries into SQL.
status: active
maintainer: Igor Tkachev, Ilya Chudin, Svyatoslav Danyliv, Dmitry Lukashenko, and others
firstRelease: 2013
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
databases:
  - postgres
  - mysql
  - sqlite
  - sqlserver
  - oracle
installMethod: nuget
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-10-23
githubStargazers: 3334
contributors: 137
dependentRepos: 552
dependentPackages: 140
social:
  discord: https://discord.gg/PcV6pTXt4s
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://linq2db.github.io/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/linq2db/linq2db
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/linq2db/linq2db/master/docs/source/articles/get-started/install/index.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/linq2db/linq2db/master/MIT-LICENSE.txt
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/linq2db/linq2db/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/linq2db/linq2db
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/linq2db/linq2db/master/docs/source/articles/get-started/install/index.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/linq2db/linq2db/master/docs/source/articles/get-started/install/index.md
    checkedAt: 2026-11-16
  - field: databases
    url: https://raw.githubusercontent.com/linq2db/linq2db/master/docs/source/articles/general/databases.md
    checkedAt: 2026-11-16
  - field: databases
    url: https://raw.githubusercontent.com/linq2db/linq2db/master/docs/source/articles/general/databases.md
    checkedAt: 2026-11-16
  - field: databases
    url: https://raw.githubusercontent.com/linq2db/linq2db/master/docs/source/articles/general/databases.md
    checkedAt: 2026-11-16
  - field: databases
    url: https://raw.githubusercontent.com/linq2db/linq2db/master/docs/source/articles/general/databases.md
    checkedAt: 2026-11-16
  - field: databases
    url: https://raw.githubusercontent.com/linq2db/linq2db/master/docs/source/articles/general/databases.md
    checkedAt: 2026-11-16
  - field: databases
    url: https://raw.githubusercontent.com/linq2db/linq2db/master/docs/source/articles/general/databases.md
    checkedAt: 2026-11-16
  - field: databases
    url: https://raw.githubusercontent.com/linq2db/linq2db/master/docs/source/articles/general/databases.md
    checkedAt: 2026-11-16
  - field: databases
    url: https://raw.githubusercontent.com/linq2db/linq2db/master/docs/source/articles/general/databases.md
    checkedAt: 2026-11-16
  - field: databases
    url: https://raw.githubusercontent.com/linq2db/linq2db/master/docs/source/articles/general/databases.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/linq2db/linq2db
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/linq2db/linq2db/master/MIT-LICENSE.txt
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/linq2db/linq2db/releases/tags/v6.5.1
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/linq2db/linq2db/releases
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.nuget.org/v3/catalog0/data/2019.01.04.22.10.26/linq2db.0.0.1.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/linq2db/linq2db
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/linq2db/linq2db/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/nuget.org/packages/linq2db
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/nuget.org/packages/linq2db
    checkedAt: 2026-11-16
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

LINQ to DB is a data access library for C# that maps classes to database tables and translates LINQ queries into SQL. The README places it one step above micro-ORMs and lighter than LINQ to SQL or Entity Framework, and says it has no change-tracking, so the application manages that itself.

The repository also holds the linq2db.cli dotnet tool and integrations with Entity Framework Core, ASP.NET Core Identity and LINQPad.

## Worth knowing

Database access goes through ADO.NET providers that the project lists, some installed from NuGet and some locally. The NuGet package targets .NET Framework 4.6.2, .NET Standard 2.0 and newer .NET versions. The README states that F# use is supported through a separate project in the repository.
