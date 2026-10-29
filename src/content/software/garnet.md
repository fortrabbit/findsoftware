---
id: garnet
name: Garnet
urls:
  home: https://microsoft.github.io/garnet/
  repository: https://github.com/microsoft/garnet
  docs: https://microsoft.github.io/garnet/docs/getting-started
category:
  - database
description: High-performance cache-store server from Microsoft Research that speaks the RESP wire protocol, written in C# on .NET.
status: active
maintainer: Microsoft Corporation
maintainerType: company
firstRelease: 2024
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 10.0
runsAs:
  - always-on
installMethod: dotnet tool
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-28
githubStargazers: 12064
contributors: 106
social:
  x: https://twitter.com/msrgarnet
  discord: https://aka.ms/garnet-discord
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: urls
    url: https://microsoft.github.io/garnet/
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/microsoft/garnet
    checkedAt: 2026-10-29
  - field: urls
    url: https://microsoft.github.io/garnet/docs/getting-started
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://github.com/microsoft/garnet/blob/main/LICENSE
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://github.com/microsoft/garnet/blob/main/LICENSE
    checkedAt: 2026-10-29
  - field: category
    url: https://microsoft.github.io/garnet/
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/microsoft/garnet
    checkedAt: 2026-10-29
  - field: runtime
    url: https://microsoft.github.io/garnet/docs/getting-started
    checkedAt: 2026-10-29
  - field: runtimeMin
    url: https://github.com/microsoft/garnet/blob/v2.2.5/Directory.Build.props
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://microsoft.github.io/garnet/docs/welcome/releases
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://microsoft.github.io/garnet/docs/welcome/releases
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://microsoft.github.io/garnet/docs/welcome/releases
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://microsoft.github.io/garnet/docs/getting-started
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://microsoft.github.io/garnet/docs/getting-started
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://api.github.com/repos/microsoft/garnet/releases
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://api.github.com/repos/microsoft/garnet/releases
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://api.github.com/repos/microsoft/garnet/releases
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/microsoft/garnet/blob/main/README.md
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://github.com/microsoft/garnet/blob/main/README.md
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/microsoft/garnet
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/microsoft/garnet/contributors?per_page=1
    checkedAt: 2026-10-29
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Garnet is a cache-store server from Microsoft Research, written in C# for .NET. It speaks the RESP protocol, so clients written for Redis can connect to it without changes. The server runs as a process that listens on TCP port 6379 by default. It is installed as a .NET tool, from a container image, or built from source with the .NET SDK. The maintainer is Microsoft Corporation.

## Worth knowing

The project's FAQ states that Garnet is not associated with Redis.
