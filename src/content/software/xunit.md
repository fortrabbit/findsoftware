---
id: xunit
name: xUnit.net
urls:
  home: https://xunit.net/
  repository: https://github.com/xunit/xunit
  docs: https://xunit.net/docs/getting-started/v3/getting-started
category:
  - testing
description: Free, open source unit testing framework for C#, F# and Visual Basic on .NET.
status: active
maintainer: .NET Foundation and Contributors
maintainerType: foundation
firstRelease: 2011
language: csharp
runtime:
  - dotnet
runtimeMin: dotnet 8.0
runsAs:
  - local
installMethod: nuget
licenseModel: open-source
license: Apache-2.0, MIT
currentMajor: "4"
latestReleaseDate: 2026-11-11
githubStargazers: 4617
contributors: 141
social:
  bluesky: https://bsky.app/profile/xunit.net
  mastodon: https://dotnet.social/@xunit
  forum: https://github.com/xunit/xunit/discussions
addedAt: 2026-11-17
checkedAt: 2026-11-17
sources:
  - field: urls
    url: https://xunit.net/
    checkedAt: 2026-11-17
  - field: urls
    url: https://api.github.com/repos/xunit/xunit
    checkedAt: 2026-11-17
  - field: urls
    url: https://xunit.net/docs/getting-started/v3/getting-started
    checkedAt: 2026-11-17
  - field: maintainer
    url: https://raw.githubusercontent.com/xunit/xunit/main/LICENSE
    checkedAt: 2026-11-17
  - field: language
    url: https://api.github.com/repos/xunit/xunit
    checkedAt: 2026-11-17
  - field: category
    url: https://raw.githubusercontent.com/xunit/xunit/main/README.md
    checkedAt: 2026-11-17
  - field: runtime
    url: https://raw.githubusercontent.com/xunit/xunit/main/README.md
    checkedAt: 2026-11-17
  - field: runtimeMin
    url: https://raw.githubusercontent.com/xunit/xunit/main/README.md
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://xunit.net/docs/getting-started/v3/getting-started
    checkedAt: 2026-11-17
  - field: license
    url: https://raw.githubusercontent.com/xunit/xunit/main/README.md
    checkedAt: 2026-11-17
  - field: license
    url: https://raw.githubusercontent.com/xunit/xunit/main/LICENSE
    checkedAt: 2026-11-17
  - field: licenseModel
    url: https://raw.githubusercontent.com/xunit/xunit/main/README.md
    checkedAt: 2026-11-17
  - field: firstRelease
    url: https://api.nuget.org/v3/registration5-gz-semver2/xunit/index.json
    checkedAt: 2026-11-17
  - field: currentMajor
    url: https://api.github.com/repos/xunit/xunit/releases
    checkedAt: 2026-11-17
  - field: latestReleaseDate
    url: https://api.github.com/repos/xunit/xunit/releases
    checkedAt: 2026-11-17
  - field: githubStargazers
    url: https://api.github.com/repos/xunit/xunit
    checkedAt: 2026-11-17
  - field: contributors
    url: https://api.github.com/repos/xunit/xunit/contributors?per_page=1
    checkedAt: 2026-11-17
  - field: runsAs
    url: https://xunit.net/docs/getting-started/v3/getting-started
    checkedAt: 2026-11-17
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

xUnit.net is a free, open source unit testing framework for C#, F#, and Visual Basic on .NET. The v3 line is set up from a project template package, and the test projects it creates reference the framework package. Tests run from the .NET SDK command line, Visual Studio, Visual Studio Code, JetBrains Rider, NCrunch and other environments that support Microsoft Testing Platform or VSTest.

The project is part of the .NET Foundation and is governed by a Project Lead.

## Worth knowing

The v3 line supports .NET 8.0 or later. The older v2 package named xunit has its own release history and is not the package the current guide installs.
