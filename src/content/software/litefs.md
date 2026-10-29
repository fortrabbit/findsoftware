---
id: litefs
name: LiteFS
urls:
  home: https://docs.fly.io/litefs
  repository: https://github.com/superfly/litefs
  docs: https://docs.fly.io/litefs/getting-started-fly
category:
  - database
description: FUSE-based file system that replicates SQLite databases across a cluster of machines.
status: active
maintainer: Fly.io, Inc.
maintainerType: company
firstRelease: 2022
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
runsAs:
  - always-on
installMethod: docker image flyio/litefs, copied into the application image
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2025-04-22
githubStargazers: 4908
contributors: 19
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: name
    url: https://github.com/superfly/litefs
    checkedAt: 2026-10-29
  - field: urls
    url: https://docs.fly.io/litefs
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/superfly/litefs
    checkedAt: 2026-10-29
  - field: urls
    url: https://docs.fly.io/litefs/getting-started-fly
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://fly.io/legal/terms-of-service
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/superfly/litefs
    checkedAt: 2026-10-29
  - field: runtime
    url: https://docs.fly.io/litefs/getting-started-fly
    checkedAt: 2026-10-29
  - field: category
    url: https://docs.fly.io/litefs
    checkedAt: 2026-10-29
  - field: databases
    url: https://raw.githubusercontent.com/superfly/litefs/main/README.md
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://github.com/superfly/litefs/releases/tag/v0.5.14
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://github.com/superfly/litefs/releases/tag/v0.5.14
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://github.com/superfly/litefs/releases/tag/v0.1.0-alpha1
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/superfly/litefs
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://raw.githubusercontent.com/superfly/litefs/main/LICENSE
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.fly.io/litefs/getting-started-fly
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.fly.io/litefs/faq
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.fly.io/litefs/getting-started-fly
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/superfly/litefs
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/superfly/litefs/contributors
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://docs.fly.io/litefs/getting-started-fly
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

LiteFS is a FUSE-based file system that replicates SQLite databases across a cluster of machines. It is installed by copying the litefs binary from the flyio/litefs Docker image into an application's container, by downloading a prebuilt binary from the GitHub releases, or by setting up a cluster on Fly.io. It can run on its own or act as a supervisor process for the application. Fly.io, Inc. maintains it and publishes the documentation.

## Worth knowing

The Fly.io docs say LiteFS is outside the company's scope of support and should be used with caution, and the README describes the project as actively maintained in a beta state. The FAQ gives write throughput of about 100 transactions per second, a limit of the FUSE interface. A cluster takes its lease from Consul or from a static setting. The FAQ also compares it with Litestream.
