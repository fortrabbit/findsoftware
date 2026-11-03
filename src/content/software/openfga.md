---
id: openfga
name: OpenFGA
urls:
  home: https://openfga.dev
  repository: https://github.com/openfga/openfga
  docs: https://openfga.dev/docs
category:
  - auth
description: Open-source authorization server for fine-grained, relationship-based access control, configured with a modeling language and queried through APIs.
status: active
maintainer: OpenFGA
firstRelease: 2022
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
  - mysql
  - sqlite
adminUi: true
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-28
githubStargazers: 6083
contributors: 113
social:
  x: https://twitter.com/OpenFGA
  mastodon: https://mastodon.social/@openfga
  forum: https://github.com/orgs/openfga/discussions
  youtube: https://www.youtube.com/@OpenFGA
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://openfga.dev/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/openfga/openfga
    checkedAt: 2026-11-03
  - field: urls
    url: https://openfga.dev/docs
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://openfga.dev/
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/openfga/openfga/releases
    checkedAt: 2026-11-03
  - field: category
    url: https://openfga.dev/
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/openfga/openfga
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/openfga/openfga/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/openfga/openfga/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/openfga/openfga/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/openfga/openfga/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/openfga/openfga/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://openfga.dev/docs/getting-started/setup-openfga/kubernetes
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://openfga.dev/docs/getting-started/setup-openfga/docker
    checkedAt: 2026-11-03
  - field: databases
    url: https://openfga.dev/docs/getting-started/setup-openfga/configuration
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/openfga/openfga/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/openfga/openfga
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://openfga.dev/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/openfga/openfga/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/openfga/openfga/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/openfga/openfga
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/openfga/openfga
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

OpenFGA decides whether a user may act on an object. An application writes an authorization model in a modeling language, stores relationship tuples and asks the server for checks. The server runs an HTTP API and a gRPC API, and it keeps its data in PostgreSQL, MySQL or SQLite. The project publishes SDKs for several languages, so an application calls the server through a client library.

The project names itself an incubating project of the Cloud Native Computing Foundation, and its footer names The Linux Foundation.

## Worth knowing

The Playground, a web interface for trying out models, is meant for local development only.
