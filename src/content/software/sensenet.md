---
id: sensenet
name: sensenet
urls:
  home: https://www.sensenet.com/en/content-services-platform
  repository: https://github.com/SenseNet/sensenet
  docs: https://docs.sensenet.com
category:
  - headless-cms
description: Content services platform that stores content in a repository with an API-first approach, a permission system and preview tools, written in .NET.
status: stub
maintainer: Sense/Net Zrt.
firstRelease: 2017
hqCountry: HU
language: csharp
runtime:
  - dotnet
contentStore:
  - database
databases:
  - sqlserver
adminUi: true
headlessApi:
  - rest
runsAs:
  - local
installMethod: Docker Compose demo stacks, published images
licenseModel: open-core
license: GPL-2.0
currentMajor: "7"
latestReleaseDate: 2025-04-08
githubStargazers: 175
contributors: 53
social:
  x: https://www.twitter.com/sensenet
  forum: https://stackoverflow.com/questions/tagged/sensenet
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/SenseNet/sensenet
    checkedAt: 2026-10-23
  - field: urls
    url: https://docs.sensenet.com
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://www.sensenet.com/en/about-our-culture/privacy
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://www.sensenet.com/en/about-our-culture/privacy
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/SenseNet/sensenet
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://docs.sensenet.com/guides/getting-started
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://docs.sensenet.com/concepts/introduction/02-what-is-csp
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/SenseNet/sensenet/develop/deployment/readme.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/SenseNet/sensenet/develop/deployment/readme.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/SenseNet/sensenet
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/SenseNet/sensenet/develop/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://www.sensenet.com/en/content-services-platform/licensing
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/SenseNet/sensenet/develop/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/SenseNet/sensenet/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/SenseNet/sensenet/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/SenseNet/sensenet/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/SenseNet/sensenet
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/SenseNet/sensenet/contributors
    checkedAt: 2026-10-23
  - field: urls
    url: https://www.sensenet.com/en/content-services-platform
    checkedAt: 2026-10-23
  - field: category
    url: https://docs.sensenet.com/concepts/introduction/02-what-is-csp
    checkedAt: 2026-10-23
  - field: runtime
    url: https://api.github.com/repos/SenseNet/sensenet
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/SenseNet/sensenet/develop/deployment/readme.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://raw.githubusercontent.com/SenseNet/sensenet/develop/deployment/readme.md
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

sensenet is a content services platform written in .NET: a content repository with an API-first approach, a permission system, and preview and collaboration tools. The docs call it headless, with a built-in generic admin UI that connects to a repository by its URL. Content is reached through REST APIs, and the deployment demos store data in a SQL Server database.

The [deployment readme](https://github.com/SenseNet/sensenet/blob/develop/deployment/readme.md) starts the services as local Docker Compose demos and does not describe a production install.

## Worth knowing

The core services are available under GPL-2.0, and the [licensing page](https://www.sensenet.com/en/content-services-platform/licensing) says the open-source version comes without support services. The company also sells an enterprise license with added guarantees and legal protection, OEM terms, and a hosted option called SNaaS, where the repositories run in its cloud.
