---
id: leadcms
name: LeadCMS
urls:
  home: https://leadcms.ai
  repository: https://github.com/LeadCMS/leadcms.core
  docs: https://leadcms.ai/docs/
category:
  - headless-cms
description: Open source headless CMS and CRM written in .NET, for publishing website content and tracking customer journeys.
status: active
maintainer: LeadCMS
firstRelease: 2022
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
runtimeMin: dotnet 8
contentStore:
  - database
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
i18n: yes, multiple locales in the CMS and SDK
runsAs:
  - always-on
installMethod: Docker Compose from the leadcms.deploy repository
licenseModel: open-source
license: MIT
githubStargazers: 36
contributors: 15
social:
  forum: https://github.com/LeadCMS/leadcms.core/discussions
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://leadcms.ai
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/LeadCMS/leadcms.core
    checkedAt: 2026-10-23
  - field: urls
    url: https://leadcms.ai/docs/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://leadcms.ai/legal/terms/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/LeadCMS/leadcms.core
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/LeadCMS/leadcms.core/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/LeadCMS/leadcms.core/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://leadcms.ai/docs/getting-started/install/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://leadcms.ai/docs/getting-started/install/
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://leadcms.ai
    checkedAt: 2026-10-23
  - field: i18n
    url: https://leadcms.ai/docs/modeling/i18n/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://leadcms.ai/docs/getting-started/install/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://leadcms.ai/docs/getting-started/install/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/LeadCMS/leadcms.core
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://leadcms.ai/legal/terms/
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/LeadCMS/leadcms.core/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/LeadCMS/leadcms.core
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/LeadCMS/leadcms.core/contributors
    checkedAt: 2026-10-23
  - field: category
    url: https://leadcms.ai/docs/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://leadcms.ai
    checkedAt: 2026-10-23
figure:
  emoji: 🔌
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: C# · Headless CMS
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

LeadCMS is an open source headless CMS and CRM written in .NET. It stores its data in PostgreSQL, exposes a RESTful API with OpenAPI documentation, and includes an admin UI. Functions can be added through a plugin system with an IPlugin interface.

The [installation guide](https://leadcms.ai/docs/getting-started/install/) starts the core and its PostgreSQL database with Docker Compose from the leadcms.deploy repository, and the ops guide describes that compose file as a sample for evaluation or a starting point for a production setup.

## Worth knowing

The project publishes only pre-releases on GitHub, so no stable version is listed.
