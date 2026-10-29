---
id: mathesar
name: Mathesar
urls:
  home: https://mathesar.org
  repository: https://github.com/mathesar-foundation/mathesar
  docs: https://docs.mathesar.org/latest/
category:
  - admin-panel
  - database
description: Self-hosted web application that gives users a spreadsheet-like interface for viewing, editing and querying PostgreSQL data.
status: active
maintainer: Mathesar Foundation
maintainerType: foundation
firstRelease: 2023
hqCountry: US
language: python
runtime:
  - python
hosting:
  - python
databases:
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: docker image
licenseModel: open-source
license: GPL-3.0
currentMajor: "0"
latestReleaseDate: 2026-07-02
githubStargazers: 5166
contributors: 142
social:
  x: https://twitter.com/mathesar_org
  bluesky: https://bsky.app/profile/mathesar-org.bsky.social
  discord: https://discord.gg/enaKqGn5xx
  subreddit: https://www.reddit.com/r/mathesar_org/
  youtube: https://www.youtube.com/@mathesar_org
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: name
    url: https://docs.mathesar.org/latest/
    checkedAt: 2026-10-29
  - field: urls
    url: https://mathesar.org/
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/mathesar-foundation/mathesar
    checkedAt: 2026-10-29
  - field: urls
    url: https://docs.mathesar.org/latest/
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://docs.mathesar.org/latest/
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://docs.mathesar.org/latest/
    checkedAt: 2026-10-29
  - field: hqCountry
    url: https://mathesar.cloud/
    checkedAt: 2026-10-29
  - field: category
    url: https://docs.mathesar.org/latest/
    checkedAt: 2026-10-29
  - field: language
    url: https://docs.mathesar.org/latest/administration/version-support/
    checkedAt: 2026-10-29
  - field: runtime
    url: https://docs.mathesar.org/latest/administration/version-support/
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://github.com/mathesar-foundation/mathesar/releases/tag/0.12.0
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://api.github.com/repos/mathesar-foundation/mathesar/releases
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://api.github.com/repos/mathesar-foundation/mathesar/releases
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/mathesar-foundation/mathesar/blob/0.12.0/LICENSE
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://docs.mathesar.org/latest/
    checkedAt: 2026-10-29
  - field: databases
    url: https://mathesar.org/
    checkedAt: 2026-10-29
  - field: adminUi
    url: https://docs.mathesar.org/latest/
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://docs.mathesar.org/latest/administration/install-from-scratch/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.mathesar.org/latest/administration/try-mathesar-locally/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.mathesar.org/latest/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.mathesar.org/latest/administration/install-from-scratch/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.mathesar.org/latest/
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/mathesar-foundation/mathesar
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/mathesar-foundation/mathesar/contributors?per_page=1&anon=false
    checkedAt: 2026-10-29
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Mathesar is a web application that gives users a spreadsheet-like interface for viewing, editing and querying data in PostgreSQL databases. Its backend runs on Python. The Mathesar Foundation, a nonprofit, maintains it.

The docs describe three self-hosted routes: a single container for trying it out, a Docker Compose setup with separate reverse-proxy and database containers, and a direct install on Linux. It supports single sign-on through any identity provider that implements OpenID Connect.

## Worth knowing

The direct install sets Mathesar up as a systemd service that runs continuously, so a host for it needs a long-running process and cannot serve static files alone. The Foundation also runs a hosted version, [Mathesar Cloud](https://mathesar.cloud/).
