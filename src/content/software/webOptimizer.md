---
id: webOptimizer
name: WebOptimizer
urls:
  repository: https://github.com/ligershark/WebOptimizer
  docs: https://ligershark.github.io/WebOptimizer/
category:
  - build-tool
description: ASP.NET Core middleware that bundles and minifies CSS and JavaScript files at runtime and keeps the output in memory.
status: active
maintainer: LigerShark
firstRelease: 2017
language: csharp
runtime:
  - dotnet
runtimeMin: dotnet 8.0
basedOn:
  - aspnet-core
installMethod: dotnet add package
licenseModel: open-source
license: Apache-2.0
currentMajor: "3"
latestReleaseDate: 2025-09-03
githubStargazers: 839
contributors: 60
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/ligershark/WebOptimizer
    checkedAt: 2026-10-28
  - field: urls
    url: https://ligershark.github.io/WebOptimizer/
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/ligershark/WebOptimizer/master/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://raw.githubusercontent.com/ligershark/WebOptimizer/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/ligershark/WebOptimizer/master/src/WebOptimizer.Core/WebOptimizer.Core.csproj
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/ligershark/WebOptimizer
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/ligershark/WebOptimizer/master/src/WebOptimizer.Core/WebOptimizer.Core.csproj
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/ligershark/WebOptimizer/master/README.md
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/ligershark/WebOptimizer/master/src/WebOptimizer.Core/WebOptimizer.Core.csproj
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/ligershark/WebOptimizer/master/src/WebOptimizer.Core/WebOptimizer.Core.csproj
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/ligershark/WebOptimizer
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.nuget.org/v3/registration5-semver1/ligershark.weboptimizer.core/index.json
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.nuget.org/v3/registration5-semver1/ligershark.weboptimizer.core/index.json
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.nuget.org/v3/registration5-semver1/ligershark.weboptimizer.core/index.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/ligershark/WebOptimizer/master/README.md
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/ligershark/WebOptimizer
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/ligershark/WebOptimizer/contributors
    checkedAt: 2026-10-28
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

WebOptimizer is middleware for ASP.NET Core that bundles and minifies CSS and JavaScript files while the application runs. It is registered through `services.AddWebOptimizer` and `app.UseWebOptimizer`. The pipeline is set up when the application starts, and each output is generated on the first browser request for it.

Bundles and minification rules are defined in code and can use glob patterns. The output is kept in memory and not written to disk. Tag helpers add a version string to the `script` and `link` tags that refer to registered files, and an `inline` attribute copies a file's content into the page.

## Worth knowing

The library runs inside the ASP.NET Core application it is added to, so the application process produces the bundles. The README describes memory and disk caches as settings, and the disk cache is meant to speed up application restarts.
