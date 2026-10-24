---
id: formcms
name: FormCMS
urls:
  home: https://formcms.com
  repository: https://github.com/formcms/formcms
  docs: https://github.com/formcms/formcms/wiki
category:
  - headless-cms
description: Open-source headless CMS built with ASP.NET Core and React, with a REST and GraphQL API and an MCP server for AI agents.
status: active
maintainer: FormCMS
maintainerType: individual
firstRelease: 2024
language: csharp
runtime:
  - dotnet
  - node
hosting:
  - dotnet
  - node
contentStore:
  - database
databases:
  - sqlite
  - postgres
  - sqlserver
  - mysql
adminUi: true
headlessApi:
  - rest
  - graphql
templating: handlebars
runsAs:
  - always-on
renderingModes:
  - server
installMethod: docker
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-05-07
githubStargazers: 271
contributors: 4
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: name
    url: https://formcms.com
    checkedAt: 2026-10-23
  - field: urls
    url: https://formcms.com
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/formcms/formcms
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/formcms/formcms/wiki
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/formcms/formcms/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/formcms/formcms/releases/tag/v0.0.6
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/formcms/formcms/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/formcms/formcms/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/formcms/formcms
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/formcms/formcms/blob/main/readme.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/formcms/formcms/wiki/Build-a-Full%E2%80%90Stack-React-App-with-FormCMS-and-AI-Agents-(Antigravity,-Cursor,-Codex)
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/formcms/formcms/blob/main/readme.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/formcms/formcms/blob/main/readme.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/formcms/formcms/blob/main/readme.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://github.com/formcms/formcms/wiki/Architecture.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/formcms/formcms/blob/main/readme.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/formcms/formcms/wiki/Setup.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/formcms/formcms/wiki/Build-a-Full%E2%80%90Stack-React-App-with-FormCMS-and-AI-Agents-(Antigravity,-Cursor,-Codex)
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://github.com/formcms/formcms/releases/tag/v0.6.9
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://github.com/formcms/formcms/releases/tag/v0.6.9
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://github.com/formcms/formcms
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/formcms/formcms/contributors?per_page=1
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/formcms/formcms/wiki/Page-Templates-Interactivity.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/formcms/formcms/wiki/Page-Templates-Interactivity.md
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

FormCMS is a headless content management system built on ASP.NET Core. It exposes REST and GraphQL APIs for every entity a user defines and stores content in SQLite, PostgreSQL, SQL Server or MySQL. Pages render on the server from Handlebars templates, and the project ships an MCP server so AI agents can design schemas and seed data.

The admin portal, FormMate, is a Node.js application that sits next to the .NET server. The project's Docker image runs both behind one port, and the [wiki](https://github.com/formcms/formcms/wiki) covers setup and architecture, including running from source.

## Worth knowing

The homepage says v1.0 is live, while the newest GitHub release is in the 0.6 series. Running from source needs both Node.js and the .NET SDK. The wiki says only Gemini has been fully tested for the AI features.
