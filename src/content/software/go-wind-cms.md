---
id: go-wind-cms
name: GoWind Content Hub
urls:
  home: https://www.gowind.cloud
  repository: https://github.com/tx7do/go-wind-cms
  docs: https://www.gowind.cloud/cms/intro.html
category:
  - headless-cms
description: Headless content platform in Go, with an admin console, multi-tenant and multi-site management, and Vue, React, Taro and Flutter frontends, built on go-kratos.
status: active
maintainer: Bobo
maintainerType: individual
firstRelease: 2026
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
  - mysql
adminUi: true
headlessApi:
  - rest
  - graphql
i18n: yes
runsAs:
  - always-on
installMethod: git clone, then make docker-up
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-20
githubStargazers: 228
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://www.gowind.cloud/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/tx7do/go-wind-cms
    checkedAt: 2026-10-23
  - field: urls
    url: https://www.gowind.cloud/cms/intro.html
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/tx7do/go-wind-cms/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/tx7do/go-wind-cms/blob/main/README.en-US.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/tx7do/go-wind-cms/blob/main/README.en-US.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/tx7do/go-wind-cms/blob/main/README.en-US.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/tx7do/go-wind-cms/blob/main/README.en-US.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/tx7do/go-wind-cms/blob/main/README.en-US.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://github.com/tx7do/go-wind-cms/blob/main/README.en-US.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://github.com/tx7do/go-wind-cms/blob/main/README.en-US.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://www.gowind.cloud/cms/installation.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://www.gowind.cloud/cms/installation.html
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/tx7do/go-wind-cms
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/tx7do/go-wind-cms/main/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://github.com/tx7do/go-wind-cms/releases/tag/v1.3.0
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://github.com/tx7do/go-wind-cms/releases/tag/v1.3.0
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/tx7do/go-wind-cms/releases/tag/v1.0.0
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/tx7do/go-wind-cms
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/tx7do/go-wind-cms/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

GoWind Content Hub is a headless content platform written in Go and built on go-kratos. It runs as three services: an admin service that serves the REST API for the admin console, an app service that serves the REST API for public frontends, and a core service that holds the business logic and data layer and is reached over gRPC. Content is stored in PostgreSQL by default, with MySQL as the other supported database. The project includes multi-site and multi-tenant management, with role-based permissions and native i18n. Besides REST, a read-only GraphQL content API is documented.

Readers reach the content through separate frontends: Vue with Nuxt.js, React with Next.js, Taro for WeChat Mini Programs and H5, and Flutter for native apps. The backend uses Redis for caching and task queues, MinIO or local disk for files, and OpenSearch for search. The [installation guide](https://www.gowind.cloud/cms/installation.html) starts the infrastructure and the services with Docker Compose.

## Worth knowing

The installation guide lists PostgreSQL, Redis, MinIO, OpenSearch, etcd and Jaeger as infrastructure services, so a full deployment is several services rather than a single process.
