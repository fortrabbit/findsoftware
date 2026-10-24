---
id: iron-beard
name: IronBeard
urls:
  repository: https://github.com/wkallhof/iron-beard
  docs: https://github.com/wkallhof/iron-beard/blob/master/README.md
category:
  - ssg
description: Static site generator built with .NET that turns Razor and Markdown files into static HTML.
status: active
maintainer: Wade Kallhoff
maintainerType: individual
firstRelease: 2018
language: csharp
runtime:
  - dotnet
hosting:
  - static
runtimeMin: dotnet 10
contentStore:
  - flat-file
templating: razor
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: dotnet tool install --global IronBeard
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-02-15
githubStargazers: 35
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/wkallhof/iron-beard
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/wkallhof/iron-beard/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/wkallhof/iron-beard/blob/master/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/wkallhof/iron-beard
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/wkallhof/iron-beard/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/wkallhof/iron-beard/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/wkallhof/iron-beard/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/wkallhof/iron-beard/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/wkallhof/iron-beard/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/wkallhof/iron-beard/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/wkallhof/iron-beard/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/wkallhof/iron-beard/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/wkallhof/iron-beard/master/LICENSE
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/wkallhof/iron-beard/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.nuget.org/v3/registration5-semver1/ironbeard/index.json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.nuget.org/v3/registration5-semver1/ironbeard/index.json
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.nuget.org/v3/registration5-semver1/ironbeard/index.json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/wkallhof/iron-beard
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/wkallhof/iron-beard/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

IronBeard is a static site generator built with .NET. It processes Razor (`.cshtml`) and Markdown (`.md`) files into static HTML. The `beard` command is installed as a .NET global tool and generates the site into a `www` folder by default.

## Worth knowing

Building the site needs the .NET 10 SDK installed on the machine that runs `beard`, so the generated files are what goes to a web space, not the generator itself. The NuGet package is at major version 2, while the repository's tags stop at v1.0.44, so the 2.x line has no tag in the repository to compare against.
