---
id: genhttp
name: GenHTTP
urls:
  home: https://genhttp.org/
  repository: https://github.com/Kaliumhexacyanoferrat/GenHTTP
  docs: https://genhttp.org/documentation/
category:
  - framework
  - web-server
description: Embeddable C# web server and framework for building REST APIs and websites on .NET.
status: active
maintainer: Andreas Nägeli
maintainerType: individual
firstRelease: 2019
hqCountry: DE
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 10
templating: cottle
i18n: yes
runsAs:
  - always-on
installMethod: NuGet package GenHTTP.Full, dotnet add package
licenseModel: open-source
license: MIT
currentMajor: "11"
latestReleaseDate: 2026-10-16
githubStargazers: 342
contributors: 18
social:
  discord: https://discord.gg/PRkwKrnrB4
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://genhttp.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/Kaliumhexacyanoferrat/GenHTTP
    checkedAt: 2026-10-26
  - field: urls
    url: https://genhttp.org/documentation/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://genhttp.org/legal/
    checkedAt: 2026-10-26
  - field: maintainerType
    url: https://genhttp.org/legal/
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://genhttp.org/legal/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/Kaliumhexacyanoferrat/GenHTTP
    checkedAt: 2026-10-26
  - field: category
    url: https://genhttp.org/
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/Kaliumhexacyanoferrat/GenHTTP
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://genhttp.org/
    checkedAt: 2026-10-26
  - field: runtime
    url: https://genhttp.org/
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://genhttp.org/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://genhttp.org/documentation/server/
    checkedAt: 2026-10-26
  - field: templating
    url: https://genhttp.org/documentation/content/handlers/pages/
    checkedAt: 2026-10-26
  - field: i18n
    url: https://genhttp.org/documentation/content/concerns/localization/
    checkedAt: 2026-10-26
  - field: license
    url: https://genhttp.org/
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/Kaliumhexacyanoferrat/GenHTTP
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/Kaliumhexacyanoferrat/GenHTTP/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/Kaliumhexacyanoferrat/GenHTTP/releases/latest
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/Kaliumhexacyanoferrat/GenHTTP/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/Kaliumhexacyanoferrat/GenHTTP
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/Kaliumhexacyanoferrat/GenHTTP/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

GenHTTP is an embeddable web server and framework written in C# for building REST APIs on .NET. Its homepage presents it as an alternative to ASP.NET Core that needs no configuration. An application adds the GenHTTP.Full NuGet package and starts a host from code; the server keeps running until it receives a shutdown signal. Its [Pages module](https://genhttp.org/documentation/content/handlers/pages/) renders templates with the Cottle engine.

## Worth knowing

Liquid page templates come from a third-party package maintained by Kinetq, not by the project. Commercial options are workshops, prioritized development and consulting, listed on the project's support page, which gives a contact address for them.
