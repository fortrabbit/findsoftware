---
id: grandnode
name: GrandNode
urls:
  home: https://grandnode.com/
  repository: https://github.com/grandnode/grandnode2
  docs: https://grandnode.com/knowledgebase
  pricing: https://grandnode.com/official
category:
  - e-commerce
description: Open-source e-commerce platform built on ASP.NET Core and MongoDB, with multi-store and multi-vendor support.
status: active
maintainer: GrandNode
firstRelease: 2016
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 10
databases:
  - mongodb
adminUi: true
headlessApi:
  - rest
templating: vue
i18n: yes
runsAs:
  - always-on
installMethod: docker run, or dotnet run from source
licenseModel: open-source
license: GPL-3.0
currentMajor: "2"
latestReleaseDate: 2026-10-04
githubStargazers: 1337
contributors: 28
social:
  forum: https://github.com/grandnode/grandnode2/discussions
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://grandnode.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/grandnode/grandnode2
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/grandnode/grandnode2/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://grandnode.com/aboutus
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://grandnode.com/aboutus
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/grandnode/grandnode2
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/grandnode/grandnode2/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/grandnode/grandnode2/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://github.com/grandnode/grandnode2/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/grandnode/grandnode2/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/grandnode/grandnode2/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/grandnode/grandnode2/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/grandnode/grandnode2/blob/develop/docs/installation.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://github.com/grandnode/grandnode2/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: i18n
    url: https://github.com/grandnode/grandnode2/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://github.com/grandnode/grandnode2/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://github.com/grandnode/grandnode2/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/grandnode/grandnode2/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: urls
    url: https://grandnode.com/official
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/grandnode/grandnode2/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/grandnode/grandnode2/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/grandnode/grandnode2
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/grandnode/grandnode2/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

GrandNode is an e-commerce platform written in C# on ASP.NET Core, with MongoDB as its database. The README says it runs a single online shop, a multi-store installation or a multi-vendor marketplace, and that it exposes a REST API for headless storefronts. It is started with `docker run` or from source with `dotnet run`, and the [installation guide](https://github.com/grandnode/grandnode2/blob/develop/docs/installation.md) describes running it as a systemd service on Linux behind nginx.

## Worth knowing

The GrandNode Official subscription sells long-term support releases, backported security fixes and a compliance pack on top of the GPL-3.0 code. The project says the Official subscription is not a different product from the open source code. LiteDB is named as an option for small installs, and MongoDB 4.0 or newer is the database the README names.
