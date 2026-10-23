---
id: graze
name: graze
urls:
  repository: https://github.com/mikoskinen/graze
  docs: https://github.com/mikoskinen/graze/blob/master/readme.md
category:
  - ssg
description: Static site generator for .NET that builds HTML sites from Razor templates and an XML configuration file.
status: stub
maintainer: Mikael Koskinen
maintainerType: individual
firstRelease: 2012
language: csharp
runtime:
  - dotnet
hosting:
  - static
contentStore:
  - flat-file
templating: razor
runsAs:
  - static
renderingModes:
  - static
installMethod: download the release zip
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2018-03-25
githubStargazers: 152
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/mikoskinen/graze
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/mikoskinen/graze/blob/master/readme.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/mikoskinen/graze/blob/master/readme.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/mikoskinen/graze/blob/master/readme.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/mikoskinen/graze
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/mikoskinen/graze/blob/master/readme.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/mikoskinen/graze/blob/master/readme.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/mikoskinen/graze/blob/master/readme.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/mikoskinen/graze/blob/master/readme.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/mikoskinen/graze/blob/master/readme.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/mikoskinen/graze/blob/master/readme.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/mikoskinen/graze/blob/master/readme.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/mikoskinen/graze/blob/master/readme.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/mikoskinen/graze/blob/master/readme.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.nuget.org/v3/registration5-semver1/graze/index.json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/mikoskinen/graze/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/mikoskinen/graze/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/mikoskinen/graze
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/mikoskinen/graze/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: C# · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Graze is a static site generator for .NET. A site is a Razor template and an XML configuration file, and the data in the XML is available to the template. The output is static files, which the README says can be hosted on any web server. Graze is installed by downloading its release zip and running `graze.exe`, or from the NuGet package `graze`.

## Worth knowing

The README says the latest version moved from .NET Framework to .NET Core 3.1 and .NET Standard 2.0, with two breaking changes for layouts and raw HTML. The record holds no minimum runtime version for it.
