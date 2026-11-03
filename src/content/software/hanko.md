---
id: hanko
name: Hanko
urls:
  home: https://www.hanko.io/
  repository: https://github.com/teamhanko/hanko
  docs: https://docs.hanko.io
  pricing: https://www.hanko.io/pricing
category:
  - auth
description: Open-source authentication backend for passkeys, passwords and passcodes, with web components for login and registration flows.
status: active
maintainer: Hanko GmbH
maintainerType: company
firstRelease: 2022
hqCountry: DE
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
  - mysql
i18n: yes, i18n and custom translations
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: AGPL-3.0, MIT (hanko-elements and hanko-frontend-sdk), Non-Copyleft commercial license on request
currentMajor: "3"
latestReleaseDate: 2026-10-01
githubStargazers: 9062
npmWeeklyDownloads: 10750
contributors: 54
social:
  x: https://x.com/hanko_io
  discord: https://discord.com/invite/jW2r526qjg
  forum: https://github.com/teamhanko/hanko/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.hanko.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/teamhanko/hanko
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.hanko.io
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.hanko.io/privacy
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.hanko.io/privacy
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/teamhanko/hanko/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/teamhanko/hanko
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/teamhanko/hanko/blob/main/backend/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/teamhanko/hanko/blob/main/backend/README.md
    checkedAt: 2026-11-03
  - field: i18n
    url: https://github.com/teamhanko/hanko/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/teamhanko/hanko/blob/main/backend/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/teamhanko/hanko/blob/main/backend/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/teamhanko/hanko/blob/main/backend/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/teamhanko/hanko/blob/main/backend/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/teamhanko/hanko/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/teamhanko/hanko/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/teamhanko/hanko/blob/main/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.hanko.io/pricing
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/teamhanko/hanko/releases/tag/backend/v3.1.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/teamhanko/hanko/releases/tag/backend/v3.1.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/teamhanko/hanko/commits/v0.1.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/teamhanko/hanko
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/teamhanko/hanko/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-23:2026-10-29/@teamhanko/hanko-elements
    checkedAt: 2026-11-03
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
---

Hanko is an authentication backend for passkeys, passwords and passcodes, with an API for user management, organizations and roles. Applications call its HTTP API directly, or they embed hanko-elements, a set of web components for login and registration screens that talk to that API.

The backend runs as a service with a public API and an administrative API, and it keeps its data in PostgreSQL or MySQL. It needs an SMTP server to send mail. It installs from a Docker image, pre-built binaries or a source build, and the docs describe importing users from Firebase.

## Worth knowing

The backend is licensed under AGPL-3.0, while hanko-elements and the frontend SDK are MIT licensed. The project also offers a non-copyleft commercial license on request, and a fully managed service, Hanko Cloud, which is hosted in the AWS Frankfurt region.
