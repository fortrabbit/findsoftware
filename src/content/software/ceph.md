---
id: ceph
name: Ceph
urls:
  home: https://ceph.io/en/
  repository: https://github.com/ceph/ceph
  docs: https://docs.ceph.com/en/umbrella/install/
category:
  - database
description: Open-source distributed storage system that serves object, block and file interfaces from one cluster built on commodity hardware.
status: active
maintainer: Ceph Foundation
maintainerType: foundation
firstRelease: 2012
language: cpp
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: cephadm
licenseModel: open-source
license: LGPL-2.1 OR LGPL-3.0, CC-BY-SA-3.0
currentMajor: "21"
latestReleaseDate: 2026-10-28
githubStargazers: 17184
contributors: 288
social:
  x: https://twitter.com/ceph
  bluesky: https://bsky.app/profile/ceph.io
  subreddit: https://www.reddit.com/r/ceph
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: name
    url: https://ceph.io/en/
    checkedAt: 2026-10-31
  - field: urls
    url: https://ceph.io/en/
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/ceph/ceph
    checkedAt: 2026-10-31
  - field: urls
    url: https://docs.ceph.com/en/umbrella/install/
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://ceph.io/en/foundation/
    checkedAt: 2026-10-31
  - field: maintainerType
    url: https://ceph.io/en/foundation/
    checkedAt: 2026-10-31
  - field: category
    url: https://ceph.io/en/
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/ceph/ceph
    checkedAt: 2026-10-31
  - field: runtime
    url: https://docs.ceph.com/en/umbrella/radosgw/
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://docs.ceph.com/en/umbrella/radosgw/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.ceph.com/en/umbrella/install/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.ceph.com/en/umbrella/install/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.ceph.com/en/umbrella/install/
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://docs.ceph.com/en/umbrella/mgr/dashboard/
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/ceph/ceph
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/ceph/ceph
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://ceph.io/en/
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://docs.ceph.com/en/umbrella/releases/
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://docs.ceph.com/en/umbrella/releases/
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/ceph/ceph/tree/v0.48argonaut
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/ceph/ceph
    checkedAt: 2026-10-31
  - field: contributors
    url: https://github.com/ceph/ceph
    checkedAt: 2026-10-31
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

Ceph is a distributed storage system that serves object, block and file interfaces from one cluster. The [Object Gateway](https://docs.ceph.com/en/umbrella/radosgw/) is an HTTP server that gives applications an interface compatible with a large subset of the Amazon S3 API and of the OpenStack Swift API. The Ceph Dashboard is a web management and monitoring tool that runs as a Ceph Manager Daemon module.

The [installation guide](https://docs.ceph.com/en/umbrella/install/) names cephadm as the tool that installs and manages a cluster, and Rook as the way to run Ceph on Kubernetes. Cephadm needs Python 3, systemd and Podman or Docker. The project is maintained by the Ceph Foundation, which operates under the Linux Foundation.

## Worth knowing

The repository on GitHub has tags but no releases, so the current stable line comes from the project's [release index](https://docs.ceph.com/en/umbrella/releases/). In that scheme the x.0 releases are development versions and the x.1 releases are release candidates, and only the x.2 releases are stable. Most of the code is under the LGPL, and some files carry other licenses.
