---
id: gancio
name: Gancio
urls:
  home: https://gancio.org
  repository: https://framagit.org/les/gancio
  docs: https://gancio.org/install
category:
  - community
description: Self-hosted shared event agenda for local communities, with ActivityPub federation.
status: active
maintainer: lesion
maintainerType: individual
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 20
contentStore:
  - database
databases:
  - sqlite
  - mariadb
  - postgres
runsAs:
  - always-on
installMethod: npm global package (Debian guide), docker, nixos module, yunohost
licenseModel: open-source
license: AGPL-3.0
currentMajor: "1"
latestReleaseDate: 2025-12-14
npmWeeklyDownloads: 72
social:
  mastodon: https://mastodon.cisti.org/@gancio
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: urls
    url: https://gancio.org
    checkedAt: 2026-10-19
  - field: urls
    url: https://framagit.org/api/v4/projects/les%2Fgancio
    checkedAt: 2026-10-19
  - field: urls
    url: https://gancio.org/install
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://framagit.org/les/gancio/-/raw/v1.28.2/package.json
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://framagit.org/les/gancio/-/raw/v1.28.2/package.json
    checkedAt: 2026-10-19
  - field: category
    url: https://gancio.org
    checkedAt: 2026-10-19
  - field: language
    url: https://framagit.org/les/gancio/-/raw/v1.28.2/package.json
    checkedAt: 2026-10-19
  - field: runtime
    url: https://gancio.org/install/debian
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://gancio.org/install/debian
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://framagit.org/les/gancio/-/raw/v1.28.2/package.json
    checkedAt: 2026-10-19
  - field: databases
    url: https://framagit.org/les/gancio/-/raw/main/.env.example
    checkedAt: 2026-10-19
  - field: contentStore
    url: https://framagit.org/les/gancio/-/raw/main/.env.example
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://gancio.org/install
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://gancio.org/install/debian
    checkedAt: 2026-10-19
  - field: license
    url: https://framagit.org/les/gancio/-/raw/v1.28.2/package.json
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://framagit.org/les/gancio/-/raw/v1.28.2/package.json
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://framagit.org/api/v4/projects/les%2Fgancio/releases?per_page=3
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://framagit.org/api/v4/projects/les%2Fgancio/releases?per_page=3
    checkedAt: 2026-10-19
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/gancio
    checkedAt: 2026-10-19
ai: authored
packagistDownloads: null
---

Gancio is a shared event agenda for local communities that federates events over ActivityPub. It runs as a Node.js service: the Debian guide installs it as a global npm package and starts it as a service, and the project also documents Docker, NixOS and YunoHost installs. Events are kept in a database, SQLite in the example configuration, which also names MariaDB and PostgreSQL. The source is on Framagit, maintained by a developer who appears as "lesion" in the package metadata.

## Worth knowing

The homepage and install docs describe a beta line and advise new instances to start on it. The npm registry does not carry the current stable release.
