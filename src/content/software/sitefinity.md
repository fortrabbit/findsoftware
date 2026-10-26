---
id: sitefinity
name: Progress Sitefinity
urls:
  home: https://www.progress.com/sitefinity-cms
  docs: https://www.progress.com/documentation/sitefinity-cms
category:
  - cms
description: Commercial .NET content management and digital experience platform from Progress, offered on-premises or as a cloud service.
status: active
maintainer: Progress Software Corporation
maintainerType: company
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 4.8
databases:
  - sqlserver
headlessApi:
  - rest
  - graphql
installMethod: NuGet package (full package for MVC mode, lighter package for hybrid ASP.NET Core mode)
currentMajor: "15"
social:
  forum: https://community.progress.com/s/topic/0TO4Q00000026ITWAY/sitefinity-general-discussions
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.progress.com/sitefinity-cms
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.progress.com/sitefinity-cms
    checkedAt: 2026-10-26
  - field: urls
    url: https://www.progress.com/documentation/sitefinity-cms/system-requirements
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://www.progress.com/documentation/sitefinity-cms/system-requirements
    checkedAt: 2026-10-26
  - field: databases
    url: https://www.progress.com/documentation/sitefinity-cms/system-requirements
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://www.progress.com/documentation/sitefinity-cms/install-sitefinity
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://www.progress.com/sitefinity-cms
    checkedAt: 2026-10-26
  - field: category
    url: https://www.progress.com/sitefinity-cms
    checkedAt: 2026-10-26
  - field: runtime
    url: https://www.progress.com/sitefinity-cms
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://azuresearch-usnc.nuget.org/query?q=packageid:Telerik.Sitefinity.All
    checkedAt: 2026-10-26
ai: authored
---

Progress Sitefinity is a content management and digital experience platform from Progress. It runs on the .NET Framework under IIS with a SQL Server database, and the [installation guide](https://www.progress.com/documentation/sitefinity-cms/install-sitefinity) describes installing it from a NuGet package, either alone or paired with an ASP.NET Core renderer. The [product page](https://www.progress.com/sitefinity-cms) describes on-premises installation next to Sitefinity Cloud, a platform-as-a-service on Microsoft Azure, and a managed SaaS option.

## Worth knowing

The product page describes REST and OData/GraphQL endpoints, so a front end can read content headlessly. The record holds no license terms for the on-premises product.
