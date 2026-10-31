---
id: win-acme
name: win-acme
urls:
  home: https://www.win-acme.com
  repository: https://github.com/win-acme/win-acme
  docs: https://www.win-acme.com/manual/getting-started
category:
  - web-server
description: ACME client for Windows that obtains and renews TLS certificates from Let's Encrypt and other ACME services and installs them in IIS and other stores.
status: active
maintainer: ZeroSSL
maintainerType: company
firstRelease: 2015
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 7
runsAs:
  - scheduled
installMethod: zip download, unpacked and run as wacs.exe
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2024-05-25
githubStargazers: 5832
contributors: 93
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://www.win-acme.com/
    checkedAt: 2026-10-31
  - field: urls
    url: https://api.github.com/repos/win-acme/win-acme
    checkedAt: 2026-10-31
  - field: urls
    url: https://www.win-acme.com/manual/getting-started
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://github.com/win-acme/win-acme/blob/master/README.md
    checkedAt: 2026-10-31
  - field: maintainerType
    url: https://github.com/win-acme/win-acme/blob/master/README.md
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/win-acme/win-acme/releases/tag/v0.6
    checkedAt: 2026-10-31
  - field: category
    url: https://github.com/win-acme/win-acme/blob/master/README.md
    checkedAt: 2026-10-31
  - field: language
    url: https://api.github.com/repos/win-acme/win-acme
    checkedAt: 2026-10-31
  - field: runtime
    url: https://github.com/win-acme/win-acme/blob/master/README.md
    checkedAt: 2026-10-31
  - field: runtimeMin
    url: https://github.com/win-acme/win-acme/blob/v2.2.9.1701/src/main/wacs.csproj
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://www.win-acme.com/manual/automatic-renewal
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/win-acme/win-acme/blob/master/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/win-acme/win-acme/blob/master/README.md
    checkedAt: 2026-10-31
  - field: license
    url: https://api.github.com/repos/win-acme/win-acme
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://github.com/win-acme/win-acme/blob/master/LICENSE
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/win-acme/win-acme/releases/tag/v2.2.9.1701
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/win-acme/win-acme/releases/tag/v2.2.9.1701
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://api.github.com/repos/win-acme/win-acme
    checkedAt: 2026-10-31
  - field: contributors
    url: https://api.github.com/repos/win-acme/win-acme/contributors?per_page=1
    checkedAt: 2026-10-31
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

win-acme runs on Windows and requests certificates from Let's Encrypt and other ACME services for the sites on the machine. The [getting started guide](https://www.win-acme.com/manual/getting-started) asks for the program to be unzipped to a folder that stays in place, because the scheduled task runs from it. The homepage describes creating and installing certificates on a local IIS server.

A scheduled task renews the certificates. The [automatic renewal page](https://www.win-acme.com/manual/automatic-renewal) says the task runs every day and checks two conditions before it renews.

## Worth knowing

The README says ZeroSSL officially maintains the repository. A fork named simple-acme describes itself as a clone of this project.

The system requirements page limits the current build to recent Windows Server editions and lists older builds for older Windows releases.
