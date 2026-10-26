---
id: blazor
name: Blazor
urls:
  home: https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor
  repository: https://github.com/dotnet/aspnetcore
  docs: https://learn.microsoft.com/en-us/aspnet/core/blazor/
category:
  - framework
description: Web UI framework for building interactive web apps with C# and Razor components, shipped as part of ASP.NET Core.
status: active
maintainer: Microsoft Corporation
maintainerType: company
firstRelease: 2018
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
  - static
templating: razor
i18n: yes
runsAs:
  - browser
  - static
  - always-on
renderingModes:
  - static
  - server
  - spa
installMethod: dotnet-cli
licenseModel: open-source
license: MIT
currentMajor: "10"
latestReleaseDate: 2026-10-13
githubStargazers: 38497
contributors: 340
social:
  x: https://twitter.com/dotnet
  bluesky: https://bsky.app/profile/dot.net
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/dotnet/aspnetcore
    checkedAt: 2026-10-26
  - field: urls
    url: https://learn.microsoft.com/en-us/aspnet/core/blazor/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://devblogs.microsoft.com/dotnet/blazor-experimental-project/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.microsoft.com/en-us/legal/terms-of-use
    checkedAt: 2026-10-26
  - field: maintainerType
    url: https://www.microsoft.com/en-us/legal/terms-of-use
    checkedAt: 2026-10-26
  - field: language
    url: https://github.com/dotnet/aspnetcore
    checkedAt: 2026-10-26
  - field: runtime
    url: https://learn.microsoft.com/en-us/aspnet/core/blazor/hosting-models
    checkedAt: 2026-10-26
  - field: category
    url: https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor
    checkedAt: 2026-10-26
  - field: templating
    url: https://learn.microsoft.com/en-us/aspnet/core/blazor/hosting-models
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://learn.microsoft.com/en-us/aspnet/core/blazor/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://learn.microsoft.com/en-us/aspnet/core/blazor/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://learn.microsoft.com/en-us/aspnet/core/blazor/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://learn.microsoft.com/en-us/aspnet/core/blazor/hosting-models
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://learn.microsoft.com/en-us/aspnet/core/blazor/host-and-deploy/webassembly
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://learn.microsoft.com/en-us/aspnet/core/blazor/hosting-models
    checkedAt: 2026-10-26
  - field: i18n
    url: https://learn.microsoft.com/en-us/aspnet/core/blazor/globalization-localization
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/dotnet/aspnetcore
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/dotnet/aspnetcore
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://github.com/dotnet/aspnetcore/releases/tag/v10.0.13
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://github.com/dotnet/aspnetcore/releases/tag/v10.0.13
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://github.com/dotnet/aspnetcore
    checkedAt: 2026-10-26
  - field: contributors
    url: https://github.com/dotnet/aspnetcore
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Blazor is a web UI framework in which the components are written in Razor and C#, and the same components can run in one of several hosting models. In the Blazor Server model they execute on the server inside an ASP.NET Core app and update the page over a SignalR connection. In the WebAssembly model they run in the browser on a .NET runtime that is downloaded with the app. Blazor Web Apps combine static rendering, interactive server rendering and client-side rendering in one app. Microsoft maintains it as part of the ASP.NET Core repository, and the templates come from the .NET SDK and Visual Studio.

## Worth knowing

The hosting model decides what the site needs. A Blazor Server app needs a running ASP.NET Core server, and the docs state that serverless deployment is not possible for it. A standalone WebAssembly app can be served as static files from a CDN, but the docs state that it is limited to a subset of the .NET APIs and that its browser runtime must be downloaded before the app starts.
