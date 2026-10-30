---
id: rustfs
name: RustFS
urls:
  home: https://rustfs.com
  repository: https://github.com/rustfs/rustfs
  docs: https://docs.rustfs.com
  pricing: https://rustfs.com/pricing
category:
  - database
description: S3-compatible distributed object storage server written in Rust.
status: active
maintainer: RustFS
firstRelease: 2025
hqCountry: US
language: rust
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: official installation script
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-25
githubStargazers: 35564
contributors: 199
social:
  x: https://x.com/rustfsofficial
  discord: https://discord.gg/NcKBCEJp6P
  forum: https://github.com/rustfs/rustfs/discussions
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://github.com/rustfs/rustfs/blob/main/README.md
    checkedAt: 2026-10-30
  - field: urls
    url: https://rustfs.com
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/rustfs/rustfs
    checkedAt: 2026-10-30
  - field: urls
    url: https://docs.rustfs.com
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://rustfs.com
    checkedAt: 2026-10-30
  - field: hqCountry
    url: https://rustfs.com/about
    checkedAt: 2026-10-30
  - field: category
    url: https://github.com/rustfs/rustfs/blob/main/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/rustfs/rustfs
    checkedAt: 2026-10-30
  - field: runtime
    url: https://docs.rustfs.com/en/installation/linux/quick-start
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://docs.rustfs.com/en/installation/linux/quick-start
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.rustfs.com/en/installation/linux/quick-start
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/rustfs/rustfs/blob/main/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.rustfs.com
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.rustfs.com
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.rustfs.com
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/rustfs/rustfs/blob/main/README.md
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://github.com/rustfs/rustfs/blob/main/README.md
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/rustfs/rustfs/releases/tag/1.0.4
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/rustfs/rustfs/releases/tag/1.0.4
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://rustfs.com/about
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/rustfs/rustfs
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://github.com/rustfs/rustfs/blob/main/README.md
    checkedAt: 2026-10-30
  - field: urls
    url: https://rustfs.com/pricing
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://github.com/rustfs/rustfs
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/rustfs/rustfs/contributors?per_page=1
    checkedAt: 2026-10-30
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

RustFS is an S3-compatible distributed object storage server written in Rust. On Linux the installer script registers a systemd service and starts it, so the server runs as a long-lived process. A container image is also published, and the project publishes a Helm chart and a Kubernetes operator for cluster deployments. A web console is built in, and the server supports OIDC sign-in.

The project documents a migration path from MinIO. The project's own pages state that RustFS is not affiliated with, endorsed by, or sponsored by MinIO, Inc.

## Worth knowing

The about page says RustFS is not identical to every AWS S3 or MinIO API, and it advises configuring the endpoint and checking each operation an application depends on. The software is free to self-host under the Apache 2.0 license, and optional paid support is offered.
