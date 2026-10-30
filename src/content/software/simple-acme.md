---
id: simple-acme
name: simple-acme
urls:
  home: https://simple-acme.com
  repository: https://github.com/simple-acme/simple-acme
  docs: https://simple-acme.com/manual/getting-started
category:
  - web-server
description: Command-line ACME client that obtains and renews Let's Encrypt and other ACME certificates, with IIS installation on Windows.
status: active
maintainer: WouterTinus
firstRelease: 2024
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 10
runsAs:
  - scheduled
installMethod: xcopy (zip download from GitHub releases)
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-10-06
githubStargazers: 660
contributors: 111
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://simple-acme.com
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/simple-acme/simple-acme
    checkedAt: 2026-10-30
  - field: urls
    url: https://simple-acme.com/manual/getting-started
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://simple-acme.com/manual/about/simple-acme
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://github.com/simple-acme/simple-acme/releases/tag/v2.3.0.1797
    checkedAt: 2026-10-30
  - field: category
    url: https://github.com/simple-acme/simple-acme/blob/main/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/simple-acme/simple-acme
    checkedAt: 2026-10-30
  - field: runtime
    url: https://simple-acme.com
    checkedAt: 2026-10-30
  - field: runtimeMin
    url: https://github.com/simple-acme/simple-acme/blob/v2.4.1/src/main/wacs.csproj
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://simple-acme.com/manual/getting-started
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://simple-acme.com
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://simple-acme.com
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://simple-acme.com
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://simple-acme.com
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://github.com/simple-acme/simple-acme/blob/main/LICENSE
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/simple-acme/simple-acme
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/simple-acme/simple-acme/releases/tag/v2.4.1
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/simple-acme/simple-acme/releases/tag/v2.4.1
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://github.com/simple-acme/simple-acme
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/simple-acme/simple-acme/contributors?per_page=1
    checkedAt: 2026-10-30
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

simple-acme is a command-line ACME client that requests certificates from Let's Encrypt and other ACME servers, and it installs them into IIS on Windows. The [getting-started guide](https://simple-acme.com/manual/getting-started) walks through a first certificate for an IIS site. Its default HTTP validation is handled by the program itself, and the program creates a Windows scheduled task that runs it every day to renew certificates when they are due.

The project is a fork of win-acme, which the [about page](https://simple-acme.com/manual/about/simple-acme) describes as the project it was cloned from. The [upgrading page](https://simple-acme.com/manual/upgrading) describes moving a win-acme 2.x installation over by copying files.

## Worth knowing

The full build loads plugins, and the trimmed build does not. Linux support is still in beta, and the program is built on .NET. The project takes donations through GitHub Sponsors and Patreon.
