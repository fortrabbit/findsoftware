---
id: bunit
name: bUnit
urls:
  home: https://bunit.dev
  repository: https://github.com/bUnit-dev/bUnit
  docs: https://bunit.dev/docs/getting-started/
category:
  - testing
description: Testing library for Blazor components that renders them inside .NET unit test projects and verifies their markup.
status: active
maintainer: Egil Hansen
firstRelease: 2019
language: csharp
runtime:
  - dotnet
runtimeMin: dotnet 8.0
installMethod: nuget
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-25
githubStargazers: 1311
contributors: 59
dependentRepos: 369
dependentPackages: 17
social:
  forum: https://github.com/bUnit-dev/bUnit/discussions
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://bunit.dev/
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/bUnit-dev/bUnit
    checkedAt: 2026-11-04
  - field: urls
    url: https://bunit.dev/docs/getting-started/
    checkedAt: 2026-11-04
  - field: category
    url: https://bunit.dev/
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/bUnit-dev/bUnit
    checkedAt: 2026-11-04
  - field: runtime
    url: https://github.com/bUnit-dev/bUnit/blob/stable/docs/site/docs/getting-started/create-test-project.md
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://github.com/bUnit-dev/bUnit/blob/v2.13.3/src/bunit/bunit.csproj
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/bUnit-dev/bUnit/blob/stable/docs/site/docs/getting-started/create-test-project.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/bUnit-dev/bUnit/blob/stable/docs/site/docs/getting-started/create-test-project.md
    checkedAt: 2026-11-04
  - field: license
    url: https://api.github.com/repos/bUnit-dev/bUnit
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://raw.githubusercontent.com/bUnit-dev/bUnit/main/LICENSE
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/bUnit-dev/bUnit/blob/v2.13.3/src/Directory.Build.props
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://api.github.com/repos/bUnit-dev/bUnit/releases
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/bUnit-dev/bUnit/releases
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/bUnit-dev/bUnit/releases
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/bUnit-dev/bUnit
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/bUnit-dev/bUnit/contributors
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/nuget.org/packages/bunit
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/nuget.org/packages/bunit
    checkedAt: 2026-11-04
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
npmWeeklyDownloads: null
---

bUnit lets .NET test projects render Blazor components and check their markup. The [getting-started guide](https://bunit.dev/docs/getting-started/) covers creating a test project, either from the bUnit project template or by adding the package from NuGet to an existing test project.

## Worth knowing

bUnit is no test runner. It builds on xUnit, NUnit, MSTest or TUnit, and a test project uses one of them alongside bUnit.
