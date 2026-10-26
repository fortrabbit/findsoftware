---
id: blazor-blueprint
name: Blazor Blueprint
urls:
  home: https://blazorblueprintui.com
  repository: https://github.com/blazorblueprintui/ui
  docs: https://blazorblueprintui.com/docs/installation
category:
  - ui-library
description: Component library for Blazor with styled components and headless primitives, inspired by shadcn/ui.
status: active
maintainer: Mathew Taylor
maintainerType: individual
firstRelease: 2026
language: csharp
runtime:
  - dotnet
runtimeMin: dotnet 10
basedOn:
  - blazor
i18n: yes
installMethod: nuget, dotnet-cli, dotnet-new-template
licenseModel: open-source
license: Apache-2.0
currentMajor: "4"
latestReleaseDate: 2026-09-22
githubStargazers: 670
contributors: 19
social:
  forum: https://github.com/blazorblueprintui/ui/discussions
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://blazorblueprintui.com
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/blazorblueprintui/ui
    checkedAt: 2026-10-26
  - field: urls
    url: https://blazorblueprintui.com/docs/installation
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://www.nuget.org/packages/BlazorBlueprint.Components
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://azuresearch-usnc.nuget.org/query?q=packageid:BlazorBlueprint.Components
    checkedAt: 2026-10-26
  - field: maintainerType
    url: https://azuresearch-usnc.nuget.org/query?q=packageid:BlazorBlueprint.Components
    checkedAt: 2026-10-26
  - field: language
    url: https://github.com/blazorblueprintui/ui
    checkedAt: 2026-10-26
  - field: category
    url: https://blazorblueprintui.com/
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://blazorblueprintui.com/docs/introduction
    checkedAt: 2026-10-26
  - field: runtime
    url: https://blazorblueprintui.com/docs/installation
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://blazorblueprintui.com/docs/installation
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://blazorblueprintui.com/docs/installation
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/blazorblueprintui/ui/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: license
    url: https://blazorblueprintui.com/
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://blazorblueprintui.com/faq
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://azuresearch-usnc.nuget.org/query?q=packageid:BlazorBlueprint.Components
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.nuget.org/v3/registration5-semver1/blazorblueprint.components/index.json
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://github.com/blazorblueprintui/ui
    checkedAt: 2026-10-26
  - field: contributors
    url: https://github.com/blazorblueprintui/ui
    checkedAt: 2026-10-26
  - field: i18n
    url: https://github.com/blazorblueprintui/ui/blob/main/README.md
    checkedAt: 2026-10-26
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
hosting: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

Blazor Blueprint is a component library for Blazor, the .NET framework for building web UI with C# and Razor components. It ships as the BlazorBlueprint.Components NuGet package, which pulls in a headless primitives package. The components are styled with a pre-built Tailwind CSS stylesheet that a project links from its layout. The README describes the design as inspired by shadcn/ui, and the install guide provides a project template for the .NET CLI. Mathew Taylor, named as the NuGet author, maintains it under a GitHub organization of the same name.

## Worth knowing

The install guide states a minimum .NET release for the current major version and says it does not run on the two releases before that. The repository is a monorepo that keeps the components and the primitives in separate packages.
