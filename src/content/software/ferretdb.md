---
id: ferretdb
name: FerretDB
urls:
  repository: https://github.com/FerretDB/FerretDB
  docs: https://docs.ferretdb.io/
category:
  - database
description: Open-source proxy that serves the MongoDB wire protocol and stores data in PostgreSQL with the DocumentDB extension.
status: stub
maintainer: FerretDB Inc.
maintainerType: company
firstRelease: 2021
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2025-11-10
githubStargazers: 11109
contributors: 106
social:
  x: https://x.com/ferret_db
  mastodon: https://techhub.social/@ferretdb
  forum: https://github.com/FerretDB/FerretDB/discussions
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: name
    url: https://github.com/FerretDB/FerretDB/blob/main/README.md
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/FerretDB/FerretDB
    checkedAt: 2026-10-29
  - field: urls
    url: https://github.com/FerretDB/FerretDB/blob/main/README.md
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://docs.ferretdb.io/installation/
    checkedAt: 2026-10-29
  - field: category
    url: https://github.com/FerretDB/FerretDB/blob/main/README.md
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/FerretDB/FerretDB
    checkedAt: 2026-10-29
  - field: runtime
    url: https://github.com/FerretDB/FerretDB/blob/v2.7.0/go.mod
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://api.github.com/repos/FerretDB/FerretDB/releases/latest
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://api.github.com/repos/FerretDB/FerretDB/releases/latest
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://api.github.com/repos/FerretDB/FerretDB/releases
    checkedAt: 2026-10-29
  - field: license
    url: https://api.github.com/repos/FerretDB/FerretDB/license
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://github.com/FerretDB/FerretDB/blob/main/README.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.ferretdb.io/installation/ferretdb/docker/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.ferretdb.io/installation/ferretdb/deb/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.ferretdb.io/installation/ferretdb/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://github.com/FerretDB/FerretDB/blob/main/README.md
    checkedAt: 2026-10-29
  - field: databases
    url: https://github.com/FerretDB/FerretDB/blob/main/README.md
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://docs.ferretdb.io/installation/ferretdb/systemd/
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/FerretDB/FerretDB
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/FerretDB/FerretDB/contributors
    checkedAt: 2026-10-29
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

FerretDB is an open-source proxy that accepts MongoDB wire protocol connections and converts the queries to SQL. It stores data in PostgreSQL with the DocumentDB extension, and clients connect with any MongoDB driver. The project is written in Go and ships as a container image, a .deb package, a Kubernetes deployment and a Go library that embeds it in an application. The packages include a systemd unit that starts the server.

FerretDB Cloud is a managed service that runs FerretDB instances for you.

## Worth knowing

The project's homepage does not answer, so the record is a stub until a homepage is readable again or the project names a new one.
