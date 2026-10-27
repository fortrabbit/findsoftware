---
id: virto-commerce
name: Virto Commerce
urls:
  home: https://virtocommerce.com
  repository: https://github.com/VirtoCommerce/vc-platform
  docs: https://docs.virtocommerce.org
  pricing: https://virtocommerce.com/pricing
category:
  - e-commerce
description: Modular .NET ecommerce platform with REST and GraphQL APIs for B2B, B2C and marketplace businesses.
status: active
maintainer: Virto Solutions LTD
firstRelease: 2014
hqCountry: CY
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 10
contentStore:
  - database
databases:
  - sqlserver
  - mysql
  - postgres
adminUi: true
headlessApi:
  - rest
  - graphql
templating: liquid
i18n: yes
runsAs:
  - always-on
  - local
installMethod: precompiled binaries from GitHub releases
licenseModel: source-available
license: Virto Commerce Open Software License, Virto Commerce Open Source License Version 3.0 (VCOSL)
currentMajor: "3"
latestReleaseDate: 2026-10-26
githubStargazers: 1315
contributors: 94
social:
  x: https://twitter.com/virtocommerce
  forum: https://www.virtocommerce.org/
  facebook: https://www.facebook.com/virtocommerce
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://virtocommerce.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/VirtoCommerce/vc-platform
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/VirtoCommerce/vc-platform/blob/dev/README.md
    checkedAt: 2026-10-26
  - field: urls
    url: https://virtocommerce.com/pricing
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://virtocommerce.com/privacy
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://virtocommerce.com/privacy
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/VirtoCommerce/vc-platform/releases
    checkedAt: 2026-10-26
  - field: category
    url: https://virtocommerce.com/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/VirtoCommerce/vc-platform
    checkedAt: 2026-10-26
  - field: runtime
    url: https://docs.virtocommerce.org/platform/developer-guide/latest/Getting-Started/system-requirements
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://docs.virtocommerce.org/platform/developer-guide/latest/Getting-Started/system-requirements
    checkedAt: 2026-10-26
  - field: databases
    url: https://docs.virtocommerce.org/platform/developer-guide/latest/Getting-Started/system-requirements
    checkedAt: 2026-10-26
  - field: databases
    url: https://docs.virtocommerce.org/platform/developer-guide/latest/Getting-Started/system-requirements
    checkedAt: 2026-10-26
  - field: databases
    url: https://docs.virtocommerce.org/platform/developer-guide/latest/Getting-Started/system-requirements
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://docs.virtocommerce.org/platform/developer-guide/latest/Getting-Started/Installation-Guide/windows
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://docs.virtocommerce.org/platform/developer-guide/latest/Getting-Started/system-requirements
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://github.com/VirtoCommerce/vc-platform/blob/dev/README.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://docs.virtocommerce.org/platform/developer-guide/latest/Back-End-Architecture/01-tech-stack/
    checkedAt: 2026-10-26
  - field: i18n
    url: https://docs.virtocommerce.org/platform/developer-guide/latest/Tutorials-and-How-tos/How-tos/configuring-multiple-stores/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://docs.virtocommerce.org/platform/developer-guide/latest/Getting-Started/Installation-Guide/linux
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://docs.virtocommerce.org/platform/developer-guide/latest/Getting-Started/Installation-Guide/linux
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.virtocommerce.org/platform/developer-guide/latest/Getting-Started/Installation-Guide/linux
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.virtocommerce.org/platform/developer-guide/latest/Getting-Started/Installation-Guide/start-local
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/VirtoCommerce/vc-platform/blob/dev/LICENSE
    checkedAt: 2026-10-26
  - field: license
    url: https://virtocommerce.com/open-source-license
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://api.github.com/repos/VirtoCommerce/vc-platform
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/VirtoCommerce/vc-platform/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/VirtoCommerce/vc-platform/releases/latest
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/VirtoCommerce/vc-platform
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/VirtoCommerce/vc-platform/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Virto Commerce is written in C# and runs on .NET. Its business logic is reached through REST or GraphQL endpoints, and administration happens in a browser-based interface called the Platform Manager. The platform stores its content in a SQL Server, MySQL or PostgreSQL database named in its connection strings.

The platform is installed from a precompiled release or with the vc-build command-line tool, then started with the .NET runtime, after which it keeps running and accepts connections. One installation can serve several stores, each with its own domain, catalog and theme. The Windows install guide recommends Elasticsearch for search, because the default Lucene .NET engine is not meant for production.

## Worth knowing

The source code is public, but the license does not work like a typical open-source license. The [license page](https://virtocommerce.com/open-source-license) allows use of the source only for non-production purposes, by entities with annual group revenue of US$1,000,000 or less, and requires a commercial license agreement for any production use. The commercial license has a Small Business License edition that is offered free of charge under the same revenue limit. The license also requires a "powered by Virto Commerce" notice on screens and at start-up, which a commercial license can remove.

Virto also offers a hosted option, Virto Cloud, next to the self-hosted platform.
