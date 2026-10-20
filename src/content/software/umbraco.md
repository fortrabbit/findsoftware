---
id: umbraco
name: Umbraco
urls:
  home: https://umbraco.com
  repository: https://github.com/umbraco/Umbraco-CMS
  docs: https://docs.umbraco.com/umbraco-cms
  pricing: https://umbraco.com/pricing/
  plugins: https://marketplace.umbraco.com/
category:
  - cms
  - headless-cms
description: Content management system built on .NET, with Razor templating and a built-in Content Delivery API.
status: active
maintainer: Umbraco
maintainerType: company
hqCountry: DK
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 10.0
contentStore:
  - database
databases:
  - sqlite
  - sqlserver
adminUi: true
headlessApi:
  - rest
templating: razor
i18n: yes, language variants
runsAs:
  - always-on
renderingModes:
  - server
installMethod: dotnet new install Umbraco.Templates, dotnet new umbraco, Visual Studio, Docker Compose, unattended install
licenseModel: open-core
license: MIT
currentMajor: "18"
latestReleaseDate: 2026-10-06
githubStargazers: 5270
contributors: 1211
social:
  discord: https://discord.com/invite/umbraco
  forum: https://forum.umbraco.com/
  youtube: https://www.youtube.com/@UmbracoCommunity
wikidata: Q285761
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://umbraco.com/products/umbraco-cms/
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/umbraco/Umbraco-CMS
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/umbraco/Umbraco-CMS
    checkedAt: 2026-10-18
  - field: urls
    url: https://docs.umbraco.com/umbraco-cms/fundamentals/setup/install
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://umbraco.com/about-us/
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://umbraco.com/about-us/
    checkedAt: 2026-10-18
  - field: hqCountry
    url: https://umbraco.com/about-us/
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q285761
    checkedAt: 2026-10-18
  - field: category
    url: https://umbraco.com/products/umbraco-cms/
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/umbraco/Umbraco-CMS
    checkedAt: 2026-10-18
  - field: runtime
    url: https://docs.umbraco.com/umbraco-cms/fundamentals/setup/requirements
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://docs.umbraco.com/umbraco-cms/fundamentals/setup/requirements
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://docs.umbraco.com/umbraco-cms/fundamentals/setup/requirements
    checkedAt: 2026-10-18
  - field: databases
    url: https://docs.umbraco.com/umbraco-cms/fundamentals/setup/requirements
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://umbraco.com/products/umbraco-cms/
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api
    checkedAt: 2026-10-18
  - field: templating
    url: https://docs.umbraco.com/umbraco-cms/fundamentals/design/templates/basic-razor-syntax
    checkedAt: 2026-10-18
  - field: i18n
    url: https://docs.umbraco.com/umbraco-cms/tutorials/multilanguage-setup
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://docs.umbraco.com/umbraco-cms/fundamentals/design/templates/basic-razor-syntax
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://docs.umbraco.com/umbraco-cms/fundamentals/setup/install
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/umbraco/Umbraco-CMS
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://umbraco.com/pricing/
    checkedAt: 2026-10-18
  - field: urls
    url: https://umbraco.com/pricing/
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://github.com/umbraco/Umbraco-CMS/releases
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/umbraco/Umbraco-CMS/releases
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/umbraco/Umbraco-CMS
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/umbraco/Umbraco-CMS/contributors?anon=true
    checkedAt: 2026-10-18
  - field: urls
    url: https://marketplace.umbraco.com/
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://docs.umbraco.com/umbraco-cms/fundamentals/setup/install
    checkedAt: 2026-10-19
figure:
  emoji: 📝
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: C# · CMS
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Umbraco CMS is a content management system built on .NET, with a built-in back office for editors, Razor views for templates and language variants for multilingual sites. A Content Delivery API is built into the CMS and must be enabled in configuration. It returns JSON over HTTP GET, so the same site can also be used headless. On SQL Server the database needs a case-insensitive collation, and WebSockets are recommended for SignalR.

## Worth knowing

The CMS is MIT-licensed, while the company sells Umbraco Cloud hosting, Heartcore and enterprise support. Several add-ons are paid and are separate from the free CMS.
