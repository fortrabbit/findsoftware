---
id: swashbuckle
name: Swashbuckle.AspNetCore
urls:
  repository: https://github.com/domaindrivendev/Swashbuckle.AspNetCore
  docs: https://github.com/domaindrivendev/Swashbuckle.AspNetCore/tree/master/docs
category:
  - backend
description: Library that generates OpenAPI (Swagger) documents from an ASP.NET Core application and serves an embedded swagger-ui for them.
status: active
maintainer: Richard Morris
maintainerType: individual
firstRelease: 2017
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
basedOn:
  - aspnet-core
installMethod: nuget
licenseModel: open-source
license: MIT
currentMajor: "11"
latestReleaseDate: 2026-11-12
githubStargazers: 5500
contributors: 237
dependentRepos: 66
dependentPackages: 1666
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/domaindrivendev/Swashbuckle.AspNetCore
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/domaindrivendev/Swashbuckle.AspNetCore/blob/master/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/domaindrivendev/Swashbuckle.AspNetCore/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/domaindrivendev/Swashbuckle.AspNetCore/blob/master/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/domaindrivendev/Swashbuckle.AspNetCore/blob/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/domaindrivendev/Swashbuckle.AspNetCore
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/domaindrivendev/Swashbuckle.AspNetCore/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/domaindrivendev/Swashbuckle.AspNetCore/blob/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/domaindrivendev/Swashbuckle.AspNetCore
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/domaindrivendev/Swashbuckle.AspNetCore/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/domaindrivendev/Swashbuckle.AspNetCore/releases/tags/v11.0.1
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/domaindrivendev/Swashbuckle.AspNetCore/releases/tags/v11.0.1
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/domaindrivendev/Swashbuckle.AspNetCore/commits/v1.0.0-rc1
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/domaindrivendev/Swashbuckle.AspNetCore
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/domaindrivendev/Swashbuckle.AspNetCore/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/nuget.org/packages/Swashbuckle.AspNetCore
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/nuget.org/packages/Swashbuckle.AspNetCore
    checkedAt: 2026-11-16
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Swashbuckle.AspNetCore generates OpenAPI (Swagger) documents from an ASP.NET Core application's code and serves them as JSON, with an embedded swagger-ui for exploring them. The parts work together or on their own: the generator, a middleware that exposes the document, and the UI. Add-on packages include a command line tool and Redoc as an alternative interface.

The library is added to an ASP.NET Core application as a NuGet package, and the application registers the generator in its startup path.

## Worth knowing

The embedded Redoc interface collects anonymous usage telemetry by default. The README says the `disableTelemetry` option turns it off.
