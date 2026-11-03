---
id: skywalking
name: Apache SkyWalking
urls:
  home: https://skywalking.apache.org/
  repository: https://github.com/apache/skywalking
  docs: https://skywalking.apache.org/docs/main/v11.0.0/en/
category:
  - analytics
description: Application performance monitoring system for distributed systems, microservices and container-based architectures.
status: active
maintainer: Apache SkyWalking
firstRelease: 2015
language: java
runtime:
  - jvm
hosting:
  - java
databases:
  - mysql
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: binary-download
licenseModel: open-source
license: Apache-2.0
currentMajor: "11"
latestReleaseDate: 2026-08-28
githubStargazers: 24989
contributors: 389
social:
  x: https://x.com/AsfSkyWalking
  forum: https://github.com/apache/skywalking/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://skywalking.apache.org/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/apache/skywalking
    checkedAt: 2026-11-03
  - field: urls
    url: https://skywalking.apache.org/docs/main/v11.0.0/en/
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/apache/skywalking/releases/tag/1.0-alpha1
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/apache/skywalking/blob/v11.0.0/NOTICE
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/apache/skywalking/blob/v11.0.0/README.md
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/apache/skywalking/blob/v11.0.0/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/apache/skywalking/languages
    checkedAt: 2026-11-03
  - field: runtime
    url: https://skywalking.apache.org/docs/main/v11.0.0/en/setup/backend/backend-setup/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://skywalking.apache.org/downloads/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://skywalking.apache.org/docs/main/v11.0.0/en/setup/backend/backend-setup/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://skywalking.apache.org/docs/skywalking-helm/next/readme/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://skywalking.apache.org/docs/main/v11.0.0/en/setup/backend/backend-setup/
    checkedAt: 2026-11-03
  - field: databases
    url: https://skywalking.apache.org/docs/main/v11.0.0/en/setup/backend/backend-setup/
    checkedAt: 2026-11-03
  - field: databases
    url: https://skywalking.apache.org/docs/main/v11.0.0/en/setup/backend/backend-storage/
    checkedAt: 2026-11-03
  - field: databases
    url: https://skywalking.apache.org/docs/main/v11.0.0/en/setup/backend/backend-storage/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://skywalking.apache.org/docs/main/v11.0.0/en/setup/backend/backend-docker/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/apache/skywalking/blob/v11.0.0/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/apache/skywalking/releases/tag/v11.0.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/apache/skywalking/releases/tag/v11.0.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/apache/skywalking
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/apache/skywalking
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

Apache SkyWalking is an application performance monitoring system for distributed systems, microservices and container-based architectures. Applications connect through agents for their language, and the OAP server listens for gRPC APIs. Storage is pluggable: the project recommends BanyanDB and also documents MySQL, PostgreSQL, Elasticsearch and OpenSearch. A startup script runs the OAP server and the UI together, and the project documents Docker images and a Helm chart for Kubernetes. The server can also receive traces in OpenTelemetry format and convert them to the Zipkin trace format. The project is developed under the Apache Software Foundation.
