---
id: papercut-smtp
name: Papercut SMTP
urls:
  home: https://www.papercut-smtp.com
  repository: https://github.com/ChangemakerStudios/Papercut-SMTP
  docs: https://www.papercut-smtp.com/
category:
  - dev-tool
  - email
description: Desktop email viewer and built-in SMTP server for development that catches the messages an application sends without delivering them.
status: active
maintainer: Changemaker Studios
firstRelease: 2014
language: csharp
runtime:
  - dotnet
hosting:
  - dotnet
adminUi: true
headlessApi:
  - rest
runsAs:
  - local
  - always-on
installMethod: binary-download
licenseModel: open-source
license: Apache-2.0
currentMajor: "7"
latestReleaseDate: 2026-08-15
githubStargazers: 3337
contributors: 35
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.papercut-smtp.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.papercut-smtp.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/ChangemakerStudios/Papercut-SMTP
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/ChangemakerStudios/Papercut-SMTP/blob/7.8.0/Directory.Build.props
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/ChangemakerStudios/Papercut-SMTP
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/ChangemakerStudios/Papercut-SMTP/blob/7.8.0/src/Papercut.Service/Papercut.Service.csproj
    checkedAt: 2026-11-03
  - field: category
    url: https://www.papercut-smtp.com/
    checkedAt: 2026-11-03
  - field: category
    url: https://www.papercut-smtp.com/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/ChangemakerStudios/Papercut-SMTP
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/ChangemakerStudios/Papercut-SMTP
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/ChangemakerStudios/Papercut-SMTP/releases/tag/7.8.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/ChangemakerStudios/Papercut-SMTP/releases/tag/7.8.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/ChangemakerStudios/Papercut-SMTP/tags
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/ChangemakerStudios/Papercut-SMTP
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/ChangemakerStudios/Papercut-SMTP/graphs/contributors
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.papercut-smtp.com/getting-started/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/ChangemakerStudios/Papercut-SMTP/blob/develop/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.papercut-smtp.com/docker/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.papercut-smtp.com/getting-started/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.papercut-smtp.com/service/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://www.papercut-smtp.com/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://www.papercut-smtp.com/service/
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://www.papercut-smtp.com/mcp/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://www.papercut-smtp.com/service/
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Papercut SMTP is a desktop email viewer with a built-in SMTP server, meant for development. An application points its mail settings at that server, and each message it sends is stored as an .eml file and shown in the app instead of being delivered. An optional service runs the same server as a Windows service or in a Linux container, adds a browser-based web UI and an HTTP API for scripting, and offers an MCP server that AI agents can use to read the captured mail.

## Worth knowing

The desktop app lists Windows 10 or later as its requirement. The server delivers nothing, but the service has no built-in authentication for its web UI, so a network address needs a firewall or a reverse proxy with authentication in front of it. The service can also reject mail once a rate limit is reached, which lets a team test how an application handles a throttling mail server.
