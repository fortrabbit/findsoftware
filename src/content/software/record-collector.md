---
id: record-collector
name: Record Collector
urls:
  home: https://record-collector.net
  repository: https://github.com/krompaco/record-collector
  docs: https://record-collector.net/pages/getting-started/
category:
  - ssg
description: Static site generator for .NET that reads a content folder and renders pages with ASP.NET Core and Blazor components.
status: active
maintainer: Johan Kronberg
maintainerType: individual
language: csharp
runtime:
  - dotnet
hosting:
  - static
contentStore:
  - flat-file
templating: blazor
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: git clone
licenseModel: open-source
license: MIT
githubStargazers: 58
contributors: 3
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://record-collector.net/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/krompaco/record-collector
    checkedAt: 2026-10-23
  - field: urls
    url: https://record-collector.net/pages/getting-started/
    checkedAt: 2026-10-23
  - field: category
    url: https://record-collector.net/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/krompaco/record-collector
    checkedAt: 2026-10-23
  - field: runtime
    url: https://record-collector.net/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://record-collector.net/pages/about/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://record-collector.net/pages/getting-started/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://record-collector.net/pages/about/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://record-collector.net/pages/getting-started/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://record-collector.net/pages/getting-started/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://record-collector.net/pages/getting-started/
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/krompaco/record-collector/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/krompaco/record-collector
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/krompaco/record-collector/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/krompaco/record-collector/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/krompaco/record-collector
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/krompaco/record-collector/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Record Collector is a static site generator for .NET. It reads a content folder into C# objects and renders the pages with Blazor components, so a site's templates are Blazor components. The about page describes using those objects in a regular ASP.NET Core project, which also lets a site be run and customized like an ordinary ASP.NET application.

The [getting-started page](https://record-collector.net/pages/getting-started/) covers cloning or downloading the repository, running the web app locally and generating the static files, which can be hosted for example on Netlify.

## Worth knowing

No NuGet package was found under the project's name, so the repository is the install route. The default frontend needs npm steps.
