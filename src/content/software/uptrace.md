---
id: uptrace
name: Uptrace
urls:
  home: https://uptrace.dev
  repository: https://github.com/uptrace/uptrace
  docs: https://uptrace.dev/get/
  pricing: https://uptrace.dev/pricing
category:
  - analytics
description: Open source application performance monitoring server that stores OpenTelemetry traces, metrics and logs and shows them in one web UI.
status: active
maintainer: Uptrace
firstRelease: 2021
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: binary-download
licenseModel: open-core
license: AGPL-3.0
currentMajor: "2"
latestReleaseDate: 2026-05-13
githubStargazers: 4311
contributors: 35
social:
  forum: https://github.com/uptrace/uptrace/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://uptrace.dev
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/uptrace/uptrace
    checkedAt: 2026-11-03
  - field: urls
    url: https://uptrace.dev/get/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://api.github.com/repos/uptrace/uptrace
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/uptrace/uptrace/blob/master/README.md
    checkedAt: 2026-11-03
  - field: category
    url: https://uptrace.dev/get/hosted/docker
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/uptrace/uptrace
    checkedAt: 2026-11-03
  - field: runtime
    url: https://uptrace.dev/get/hosted/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://uptrace.dev/get/hosted/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://uptrace.dev/get/hosted/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://uptrace.dev/get/hosted/docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://uptrace.dev/get/hosted/k8s
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://uptrace.dev/get/hosted/ansible
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://uptrace.dev/get/hosted/install
    checkedAt: 2026-11-03
  - field: databases
    url: https://uptrace.dev/get/hosted/install
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/uptrace/uptrace/blob/master/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://uptrace.dev/pricing
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/uptrace/uptrace
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://uptrace.dev/pricing
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/uptrace/uptrace/releases/tag/v2.0.3
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/uptrace/uptrace/releases/tag/v2.0.3
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/uptrace/uptrace/releases/tag/v0.1.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/uptrace/uptrace
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/uptrace/uptrace/contributors
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

Uptrace is an open source application performance monitoring server. It collects OpenTelemetry traces, metrics and logs and shows them in one web interface. Telemetry is stored in ClickHouse, and users, projects and alerts are stored in PostgreSQL. The [install guide](https://uptrace.dev/get/hosted/install) lists DEB and RPM packages, a pre-compiled binary, and the Docker, Helm and Ansible deployment guides.

The DEB and RPM packages enable the Uptrace service, which starts only after the databases hold every migration. Uptrace Cloud is a hosted version that runs in German data centers with backups in Finland.

## Worth knowing

The Community Edition is licensed under AGPL-3.0. The self-hosted Starter, Team, Business and Enterprise editions are paid and run on a license, and the binary checks the license key of its edition. The paid tiers add features the Community Edition lacks, including SAML single sign-on, role-based access, alert routing, audit logs and Kafka.

Single sign-on with OpenID Connect is part of the open source version, according to the README.
