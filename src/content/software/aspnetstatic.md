---
id: aspnetstatic
name: AspNetStatic
urls:
  repository: https://github.com/ZarehD/AspNetStatic
  docs: https://github.com/ZarehD/AspNetStatic/blob/master/Readme.md
category:
  - ssg
description: ASP.NET Core library that generates static HTML files from the routes of an ASP.NET Core app.
status: active
maintainer: Zareh DerGevorkian
maintainerType: individual
firstRelease: 2023
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
  - static
runtimeMin: dotnet 8
runsAs:
  - static
  - always-on
renderingModes:
  - static
  - server
installMethod: dotnet add package
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-04-29
githubStargazers: 171
contributors: 3
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/ZarehD/AspNetStatic
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/ZarehD/AspNetStatic/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/ZarehD/AspNetStatic/blob/master/Notices.md
    checkedAt: 2026-10-23
  - field: maintainerType
    url: https://api.github.com/users/ZarehD
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/ZarehD/AspNetStatic
    checkedAt: 2026-10-23
  - field: runtime
    url: https://api.nuget.org/v3-flatcontainer/aspnetstatic/0.27.8/aspnetstatic.nuspec
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://api.nuget.org/v3-flatcontainer/aspnetstatic/0.27.8/aspnetstatic.nuspec
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/ZarehD/AspNetStatic/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/ZarehD/AspNetStatic/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/ZarehD/AspNetStatic/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/ZarehD/AspNetStatic/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/ZarehD/AspNetStatic/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/ZarehD/AspNetStatic/blob/master/Readme.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/ZarehD/AspNetStatic
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/ZarehD/AspNetStatic/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/ZarehD/AspNetStatic/releases?per_page=100
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/ZarehD/AspNetStatic/releases?per_page=100
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/ZarehD/AspNetStatic/releases?per_page=100
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/ZarehD/AspNetStatic
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/ZarehD/AspNetStatic/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: C# · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

AspNetStatic is a NuGet package that generates static HTML files from the routes of an ASP.NET Core app. It is added with `dotnet add package AspNetStatic`, and the routes to generate are listed in an IStaticResourcesInfoProvider registered in the app's dependency injection container.

The package has two modes. In standalone generation the app writes the static files, which are then copied to a web host. In partial static site mode the app keeps running, serves the generated files for the static routes, and serves other routes dynamically. The package is built on ASP.NET Core, and its [README](https://github.com/ZarehD/AspNetStatic/blob/master/Readme.md) says it works with Razor Pages, MVC and Blazor SSR.

## Worth knowing

Routes for static content must not sit behind authentication or anything else that needs user interaction. Blazor pages have to finish rendering on the server, without client-side JavaScript or WebAssembly.
