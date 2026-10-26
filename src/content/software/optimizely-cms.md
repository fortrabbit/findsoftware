---
id: optimizely-cms
name: Optimizely CMS
urls:
  home: https://www.optimizely.com/products/content-management/
  docs: https://docs.developers.optimizely.com/content-management-system/v13.0.0-CMS/docs/install-cms13
  pricing: https://www.optimizely.com/plans
category:
  - cms
description: Commercial .NET content management system from Optimizely, installed from NuGet packages on Microsoft SQL Server.
status: active
maintainer: Optimizely North America Inc.
maintainerType: company
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 10
databases:
  - sqlserver
headlessApi:
  - rest
installMethod: dotnet new install EPiServer.Templates, then the epi-alloy-mvc template
licenseModel: commercial
currentMajor: "13"
latestReleaseDate: 2026-06-01
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.optimizely.com/products/content-management/
    checkedAt: 2026-10-26
  - field: urls
    url: https://docs.developers.optimizely.com/content-management-system/v13.0.0-CMS/docs/install-cms13
    checkedAt: 2026-10-26
  - field: description
    url: https://docs.developers.optimizely.com/content-management-system/v13.0.0-CMS/docs/install-cms13
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.optimizely.com/legal/privacy-notice
    checkedAt: 2026-10-26
  - field: maintainerType
    url: https://www.optimizely.com/legal/privacy-notice
    checkedAt: 2026-10-26
  - field: runtime
    url: https://docs.developers.optimizely.com/content-management-system/v13.0.0-CMS/docs/install-cms13
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://docs.developers.optimizely.com/content-management-system/v13.0.0-CMS/docs/install-cms13
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://docs.developers.optimizely.com/content-management-system/v13.0.0-CMS/docs/install-cms13
    checkedAt: 2026-10-26
  - field: databases
    url: https://docs.developers.optimizely.com/content-management-system/v13.0.0-CMS/docs/install-cms13
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://support.optimizely.com/hc/en-us/articles/44937048830221-2026-Optimizely-CMS-13-release-notes
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://docs.developers.optimizely.com/content-management-system/v13.0.0-CMS/docs/install-cms13
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://support.optimizely.com/hc/en-us/articles/44937048830221-2026-Optimizely-CMS-13-release-notes
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://support.optimizely.com/hc/en-us/articles/44937048830221-2026-Optimizely-CMS-13-release-notes
    checkedAt: 2026-10-26
  - field: category
    url: https://www.optimizely.com/products/content-management/
    checkedAt: 2026-10-26
  - field: urls
    url: https://www.optimizely.com/products/content-management/
    checkedAt: 2026-10-26
ai: authored
---

Optimizely CMS is a .NET content management system maintained by Optimizely North America Inc. under a commercial license. Version 13 is installed from Optimizely project templates and NuGet packages, requires .NET 10, and stores its data in Microsoft SQL Server 2022 or Azure SQL. The [install guide](https://docs.developers.optimizely.com/content-management-system/v13.0.0-CMS/docs/install-cms13) also requires Opti ID and Optimizely Graph, which Optimizely includes in the CMS 13 license.

The CMS exposes a REST API and manages several sites from one installation. Optimizely also documents a hosted edition, CMS (SaaS), in [its own docs](https://docs.optimizely.com/cms-saas/docs).

## Worth knowing

Testing and production environments need a commercial license, as the install guide states.
