---
id: fornax
name: Fornax
urls:
  home: https://ionide.io/Tools/fornax.html
  repository: https://github.com/ionide/Fornax
  docs: https://ionide.io/Tools/fornax.html
category:
  - ssg
description: Scriptable static site generator that defines page layouts in F# scripts.
status: active
maintainer: Lambda Factory
firstRelease: 2019
language: fsharp
runtime:
  - dotnet
hosting:
  - static
templating: F# DSL
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: dotnet tool install fornax -g
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-11-09
githubStargazers: 256
contributors: 34
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://ionide.io/Tools/fornax.html
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/ionide/Fornax
    checkedAt: 2026-10-23
  - field: urls
    url: https://ionide.io/Tools/fornax.html
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/ionide/Fornax/master/LICENSE.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/ionide/Fornax
    checkedAt: 2026-10-23
  - field: runtime
    url: https://ionide.io/Tools/fornax.html
    checkedAt: 2026-10-23
  - field: category
    url: https://ionide.io/Tools/fornax.html
    checkedAt: 2026-10-23
  - field: templating
    url: https://ionide.io/Tools/fornax.html
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://ionide.io/Tools/fornax.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://ionide.io/Tools/fornax.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://ionide.io/Tools/fornax.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://ionide.io/Tools/fornax.html
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/ionide/Fornax/master/LICENSE.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/ionide/Fornax/master/LICENSE.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/ionide/Fornax/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/ionide/Fornax/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/ionide/Fornax/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/ionide/Fornax
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/ionide/Fornax/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Fornax is a scriptable static site generator that defines its page layouts with a type-safe F# DSL. It runs as a global .NET tool. The `fornax build` command writes the generated site to a `_public` folder, and `fornax watch` starts a small local webserver that hosts the site and recompiles it when files change.

The Ionide documentation page for Fornax says the page itself was built with Fornax.
