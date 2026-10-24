---
id: fastschema
name: FastSchema
urls:
  home: https://fastschema.com
  repository: https://github.com/fastschema/fastschema
  docs: https://fastschema.com/docs
category:
  - headless-cms
  - backend
  - framework
description: Go backend-as-a-service that generates a database, REST endpoints and an admin dashboard from schemas, and can also be embedded as a Go web framework.
status: active
maintainer: Nguyen Ngoc Phuong and Contributors
maintainerType: community
firstRelease: 2024
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
  - mysql
  - postgres
adminUi: true
headlessApi:
  - rest
installMethod: docker pull ghcr.io/fastschema/fastschema
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-07-11
githubStargazers: 576
contributors: 11
social:
  x: https://x.com/fastschema
  discord: https://discord.gg/Auy2Zr3Ycf
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://fastschema.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/fastschema/fastschema
    checkedAt: 2026-10-23
  - field: urls
    url: https://fastschema.com/docs/getting-started
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/fastschema/fastschema/develop/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/fastschema/fastschema
    checkedAt: 2026-10-23
  - field: runtime
    url: https://fastschema.com/docs/getting-started
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/fastschema/fastschema/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/fastschema/fastschema/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/fastschema/fastschema/blob/develop/README.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://fastschema.com/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://fastschema.com/docs/framework/deployment
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://fastschema.com/docs/getting-started
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://fastschema.com/docs/getting-started
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/fastschema/fastschema
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/fastschema/fastschema/develop/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://github.com/fastschema/fastschema/releases/tag/v0.15.1
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://github.com/fastschema/fastschema/releases/tag/v0.15.1
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/fastschema/fastschema/releases/tag/v0.0.1
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/fastschema/fastschema
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/fastschema/fastschema/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

FastSchema is a backend as a service written in Go. A project defines its data as schemas in the admin dashboard, and FastSchema creates the database tables and a set of REST endpoints for each schema, along with an OpenAPI description. It runs as a standalone binary or in a Docker container, and it can also be imported into a Go program as a web framework with resources, hooks and an ORM.

SQLite is the default database, and MySQL or PostgreSQL can be selected through the environment configuration. Uploaded files are stored on a local disk or in an S3-compatible store through rclone drivers. Access is controlled by roles and permissions, and a new install creates the admin, user and guest roles. Social sign-in providers are enabled in the configuration.

## Worth knowing

The project describes itself as beta. Its file storage supports the local filesystem and S3-compatible stores, and the docs say other storage systems are not yet supported.
