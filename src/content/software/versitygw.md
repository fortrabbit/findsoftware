---
id: versitygw
name: Versity S3 Gateway
urls:
  home: https://www.versity.com/products/versitygw/
  repository: https://github.com/versity/versitygw
  docs: https://github.com/versity/versitygw/wiki
category:
  - database
description: Open source Go server that presents an S3 API in front of file storage and other backends, translating each S3 request into backend operations.
status: active
maintainer: Versity Software, Inc.
maintainerType: company
firstRelease: 2023
hqCountry: US
language: go
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: binary-download
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-22
githubStargazers: 3092
contributors: 84
social:
  x: https://twitter.com/VersitySoftware
  bluesky: https://bsky.app/profile/versitysoftware.bsky.social
  forum: https://github.com/versity/versitygw/discussions
  youtube: https://www.youtube.com/channel/UCfqtvXkUPsI--Q-JBw1PQqA
  facebook: https://www.facebook.com/versitysoftware
  instagram: https://www.instagram.com/versitysoftware/
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.versity.com/products/versitygw/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/versity/versitygw
    checkedAt: 2026-11-03
  - field: urls
    url: https://raw.githubusercontent.com/versity/versitygw/main/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.versity.com/privacy-policy/
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.versity.com/privacy-policy/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/versity/versitygw
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/versity/versitygw/wiki/Quickstart
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/versity/versitygw/wiki/Quickstart
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/versity/versitygw/wiki/Quickstart
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://raw.githubusercontent.com/versity/versitygw/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://raw.githubusercontent.com/versity/versitygw/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/versity/versitygw/wiki/Linux-Install
    checkedAt: 2026-11-03
  - field: category
    url: https://raw.githubusercontent.com/versity/versitygw/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/versity/versitygw
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://api.github.com/repos/versity/versitygw
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/versity/versitygw/releases/tag/v0.1
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/versity/versitygw/releases/tag/v1.10.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/versity/versitygw/releases/tag/v1.10.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/versity/versitygw
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/versity/versitygw/contributors
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/versity/versitygw/wiki/Linux-Install
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/versity/versitygw/wiki/WebGUI
    checkedAt: 2026-11-03
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

The Versity S3 Gateway is an open source Go server that accepts S3 API requests and translates each one into operations on a backend. The backends it names are a POSIX file system, Versity's ScoutFS, Azure Blob Storage and other S3 servers. Applications that use the S3 API can read and write through it. The gateway is stateless. The project ships release binaries, RPM and Debian packages with systemd service files, a Docker image and a Helm chart for Kubernetes, and it can be built from source with Go. Versity Software, Inc. maintains it, and its address on the privacy policy is in San Jose, California.

## Worth knowing

The optional WebGUI is a management and explorer interface, and the standalone IAM service, started with the iam subcommand, adds IAM users and roles with identity policies and OIDC federation. Paid support is sold through sales and is not an edition of the software.
