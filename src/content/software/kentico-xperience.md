---
id: kentico-xperience
name: Xperience by Kentico
urls:
  home: https://www.kentico.com
  docs: https://docs.kentico.com/documentation/developers-and-admins/installation.md
  pricing: https://www.kentico.com/platform/how-to-buy
category:
  - cms
description: Content management and digital experience platform for .NET web applications, with marketing and commerce features.
status: active
maintainer: Kentico software s.r.o.
maintainerType: company
firstRelease: 2022
hqCountry: CZ
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 8
databases:
  - sqlserver
adminUi: true
headlessApi:
  - graphql
templating: razor
i18n: yes, multiple languages with language variants
installMethod: dotnet new project templates, then dotnet new with a template short name
licenseModel: commercial
license: proprietary EULA
currentMajor: "31"
latestReleaseDate: 2026-10-22
social:
  forum: https://community.kentico.com/
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.kentico.com
    checkedAt: 2026-10-26
  - field: urls
    url: https://docs.kentico.com/documentation/developers-and-admins/installation.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.kentico.com/privacy-policy
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://www.kentico.com/privacy-policy
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.nuget.org/v3/registration5-semver1/kentico.xperience.webapp/index.json
    checkedAt: 2026-10-26
  - field: category
    url: https://docs.kentico.com/documentation/developers-and-admins/installation.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://docs.kentico.com/documentation/developers-and-admins/installation/system-requirements.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://docs.kentico.com/documentation/developers-and-admins/installation/system-requirements.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://docs.kentico.com/documentation/developers-and-admins/installation.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://docs.kentico.com/documentation/developers-and-admins/installation/system-requirements.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://docs.kentico.com/documentation/developers-and-admins/installation.md
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://docs.kentico.com/documentation/business-users/headless-content.md
    checkedAt: 2026-10-26
  - field: i18n
    url: https://docs.kentico.com/documentation/developers-and-admins/configuration/languages.md
    checkedAt: 2026-10-26
  - field: license
    url: https://www.kentico.com/end-user-license-agreement
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://docs.kentico.com/documentation/developers-and-admins/installation/licenses.md
    checkedAt: 2026-10-26
  - field: urls
    url: https://www.kentico.com/platform/how-to-buy
    checkedAt: 2026-10-26
  - field: templating
    url: https://docs.kentico.com/documentation/developers-and-admins/configuration/website-channel-management/manage-multiple-websites.md
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.nuget.org/v3/registration5-semver1/kentico.xperience.webapp/31.10.0.json
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.nuget.org/v3/registration5-semver1/kentico.xperience.webapp/31.10.0.json
    checkedAt: 2026-10-26
ai: authored
---

Xperience by Kentico is a content and digital experience management system built on the .NET platform. Its installation page distributes project templates as a .NET package, installed with the dotnet command-line tool, and a project created from them runs against Microsoft SQL Server. Several website channels can run in one application, and the administration interface can be extended.

The product also offers headless content through a GraphQL API, system role assignment for users, external authentication for the administration sign-in, and multiple languages with language variants. Its migration toolkit names Kentico Xperience 13, Kentico 12 and Kentico 11 as sources, and Kentico runs a managed SaaS option for the same product.

## Worth knowing

The product is closed source and licensed by subscription under an end-user license agreement. Its public GitHub repositories hold add-ons and samples rather than the product itself.
