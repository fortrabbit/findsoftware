---
id: lifti
name: LIFTI
urls:
  home: https://mikegoatly.github.io/lifti/
  repository: https://github.com/mikegoatly/lifti
  docs: https://mikegoatly.github.io/lifti/docs
category:
  - search
description: In-memory full-text indexing library for .NET that indexes text and object properties and runs boolean queries over them.
status: active
maintainer: Mike Goatly
maintainerType: individual
firstRelease: 2018
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 8.0
i18n: English stemmer by default, custom stemmers
installMethod: Install-Package Lifti.Core
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2025-12-04
githubStargazers: 202
contributors: 4
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://mikegoatly.github.io/lifti/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/mikegoatly/lifti
    checkedAt: 2026-10-28
  - field: urls
    url: https://mikegoatly.github.io/lifti/docs
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/mikegoatly/lifti/v7.0.2/LICENSE
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://api.github.com/users/mikegoatly
    checkedAt: 2026-10-28
  - field: category
    url: https://mikegoatly.github.io/lifti/docs
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/mikegoatly/lifti
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/mikegoatly/lifti/v7.0.2/src/Lifti.Core/Lifti.Core.csproj
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/mikegoatly/lifti/v7.0.2/src/Lifti.Core/Lifti.Core.csproj
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/mikegoatly/lifti
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/mikegoatly/lifti/v7.0.2/LICENSE
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/mikegoatly/lifti/v7.0.2/LICENSE
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://mikegoatly.github.io/lifti/
    checkedAt: 2026-10-28
  - field: i18n
    url: https://mikegoatly.github.io/lifti/docs
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/mikegoatly/lifti/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/mikegoatly/lifti/releases/latest
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.nuget.org/v3/registration5-semver1/lifti.core/index.json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/mikegoatly/lifti
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/mikegoatly/lifti/contributors
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

LIFTI is a .NET library that builds a full-text index in memory. An application adds text against a key, or configures an index to read text from the properties of an object, and then runs queries that combine terms with operators. The index can be serialized to a stream and read back later, and the [docs](https://mikegoatly.github.io/lifti/docs) describe writing it to a backing file as changes are made.

Searching uses the English Porter stemmer by default, and the docs describe implementing a custom stemmer for other needs. The package is distributed through NuGet, and the docs name client applications such as Blazor and ASP.NET applications that search a long list of words as use cases.
