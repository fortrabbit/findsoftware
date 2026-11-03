---
id: openbao
name: OpenBao
urls:
  home: https://openbao.org/
  repository: https://github.com/openbao/openbao
  docs: https://openbao.org/docs/
category:
  - auth
description: Open source secrets manager that stores, encrypts and distributes secrets, certificates and keys, served through an HTTP API.
status: active
maintainer: OpenBao
firstRelease: 2024
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
licenseModel: open-source
license: MPL-2.0
currentMajor: "2"
latestReleaseDate: 2026-10-26
githubStargazers: 8841
contributors: 373
social:
  bluesky: https://bsky.app/profile/openbao-official.bsky.social
  forum: https://github.com/openbao/openbao/discussions
  youtube: https://www.youtube.com/@OpenBao
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://openbao.org/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/openbao/openbao
    checkedAt: 2026-11-03
  - field: urls
    url: https://openbao.org/docs/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://openbao.org/
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/openbao/openbao/releases
    checkedAt: 2026-11-03
  - field: category
    url: https://openbao.org/
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/openbao/openbao
    checkedAt: 2026-11-03
  - field: runtime
    url: https://openbao.org/docs/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://openbao.org/docs/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://openbao.org/docs/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://openbao.org/docs/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://openbao.org/docs/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://openbao.org/docs/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://openbao.org/docs/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://openbao.org/docs/platform/k8s/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://openbao.org/docs/commands/server/
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/openbao/openbao/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/openbao/openbao
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://openbao.org/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/openbao/openbao/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/openbao/openbao/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/openbao/openbao
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/openbao/openbao
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/openbao/openbao/blob/main/README.md
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

OpenBao stores, encrypts and distributes secrets, certificates and keys. Clients reach it through an HTTP API, and the server command starts a process that answers those requests. It can write data to disk or to PostgreSQL. The project's homepage describes it as a fork of Vault that the Linux Foundation's OpenSSF manages.

Packages exist for several Linux distributions, Homebrew and FreeBSD. The install guide also covers container images, precompiled binaries and a source build, and the project publishes a Helm chart for running the server on Kubernetes.

## Worth knowing

The server starts sealed. An operator has to initialize it and unseal it before it responds to any request, which the server command page describes as the normal start-up.
