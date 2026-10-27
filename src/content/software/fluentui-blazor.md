---
id: fluentui-blazor
name: Fluent UI Blazor
urls:
  home: https://www.fluentui-blazor.net
  repository: https://github.com/microsoft/fluentui-blazor
  docs: https://www.fluentui-blazor.net
category:
  - ui-library
description: Component library for ASP.NET Core Blazor applications, built to the Fluent design language.
status: active
maintainer: Microsoft Corporation
maintainerType: company
firstRelease: 2021
hqCountry: US
language: csharp
runtime:
  - dotnet
runtimeMin: dotnet 8
basedOn:
  - blazor
templating: razor
installMethod: dotnet add package
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-10-14
githubStargazers: 4853
contributors: 135
dependentPackages: 25
social:
  discord: https://discord.gg/FcSNfg4
addedAt: 2026-10-27
checkedAt: 2026-10-27
sources:
  - field: urls
    url: https://github.com/microsoft/fluentui-blazor
    checkedAt: 2026-10-27
  - field: urls
    url: https://github.com/microsoft/fluentui-blazor
    checkedAt: 2026-10-27
  - field: urls
    url: https://github.com/microsoft/fluentui-blazor/blob/dev/README.md
    checkedAt: 2026-10-27
  - field: firstRelease
    url: https://github.com/microsoft/fluentui-blazor/releases/tag/0.2.0
    checkedAt: 2026-10-27
  - field: maintainer
    url: https://github.com/microsoft/fluentui-blazor/blob/v5.0.1/LICENSE.TXT
    checkedAt: 2026-10-27
  - field: maintainerType
    url: https://www.microsoft.com/en-us/legal/terms-of-use
    checkedAt: 2026-10-27
  - field: hqCountry
    url: https://www.microsoft.com/en-us/legal/terms-of-use
    checkedAt: 2026-10-27
  - field: language
    url: https://github.com/microsoft/fluentui-blazor
    checkedAt: 2026-10-27
  - field: category
    url: https://github.com/microsoft/fluentui-blazor/blob/dev/README.md
    checkedAt: 2026-10-27
  - field: basedOn
    url: https://github.com/microsoft/fluentui-blazor/blob/dev/README.md
    checkedAt: 2026-10-27
  - field: templating
    url: https://github.com/microsoft/fluentui-blazor/blob/dev/README.md
    checkedAt: 2026-10-27
  - field: runtime
    url: https://github.com/microsoft/fluentui-blazor/blob/dev/README.md
    checkedAt: 2026-10-27
  - field: runtimeMin
    url: https://github.com/microsoft/fluentui-blazor/blob/v5.0.1/Directory.Build.props
    checkedAt: 2026-10-27
  - field: installMethod
    url: https://github.com/microsoft/fluentui-blazor/blob/dev/README.md
    checkedAt: 2026-10-27
  - field: installMethod
    url: https://github.com/microsoft/fluentui-blazor/blob/dev/README.md
    checkedAt: 2026-10-27
  - field: license
    url: https://github.com/microsoft/fluentui-blazor/blob/v5.0.1/LICENSE.TXT
    checkedAt: 2026-10-27
  - field: licenseModel
    url: https://github.com/microsoft/fluentui-blazor
    checkedAt: 2026-10-27
  - field: currentMajor
    url: https://github.com/microsoft/fluentui-blazor/releases/tag/v5.0.1
    checkedAt: 2026-10-27
  - field: latestReleaseDate
    url: https://github.com/microsoft/fluentui-blazor/releases/tag/v5.0.1
    checkedAt: 2026-10-27
  - field: githubStargazers
    url: https://github.com/microsoft/fluentui-blazor
    checkedAt: 2026-10-27
  - field: contributors
    url: https://github.com/microsoft/fluentui-blazor
    checkedAt: 2026-10-27
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/nuget.org/packages/Microsoft.FluentUI.AspNetCore.Components
    checkedAt: 2026-10-27
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

Fluent UI Blazor is a set of Blazor components for ASP.NET Core applications that want the look of Microsoft's Fluent design language. Some components wrap Microsoft's Fluent UI Web Components, and others leverage the Fluent Design System or make it easier to work with Fluent UI. A project adds the library with dotnet add package, registers its services in Program.cs, adds the library stylesheet and places a providers component in its top-level layout.

A separate template package provides Fluent versions of the standard Blazor project templates, and further packages carry the Fluent icons and emoji sets. Microsoft publishes the library, and the source lives in its GitHub organization.

## Worth knowing

Interactive components need an interactive Blazor render mode, which the install steps set globally or per page. The project is not an official part of ASP.NET Core, and the README says support is offered on a best effort basis through the GitHub repository only.
