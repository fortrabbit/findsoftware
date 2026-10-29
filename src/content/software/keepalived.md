---
id: keepalived
name: Keepalived
urls:
  home: https://www.keepalived.org
  repository: https://github.com/acassen/keepalived
  docs: https://www.keepalived.org/documentation/
category:
  - web-server
description: Routing software for Linux that provides load balancing with IPVS and high availability with VRRP.
status: active
maintainer: Alexandre Cassen
maintainerType: individual
firstRelease: 2000
language: c
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: build from source (configure, make, make install)
licenseModel: open-source
license: GPL-2.0-or-later
currentMajor: "2"
latestReleaseDate: 2026-07-20
githubStargazers: 4733
contributors: 148
social:
  x: https://twitter.com/keepalived
  forum: https://groups.io/g/keepalived-users
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: urls
    url: https://www.keepalived.org/
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/acassen/keepalived
    checkedAt: 2026-10-29
  - field: urls
    url: https://www.keepalived.org/documentation/user-guide/introduction/
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://www.keepalived.org/
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://www.keepalived.org/
    checkedAt: 2026-10-29
  - field: category
    url: https://www.keepalived.org/
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/acassen/keepalived
    checkedAt: 2026-10-29
  - field: runtime
    url: https://www.keepalived.org/documentation/user-guide/installing/
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://www.keepalived.org/documentation/user-guide/installing/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://www.keepalived.org/documentation/user-guide/installing/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://www.keepalived.org/download/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://www.keepalived.org/download/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://www.keepalived.org/download/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://www.keepalived.org/download/
    checkedAt: 2026-10-29
  - field: license
    url: https://www.keepalived.org/
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://www.keepalived.org/download/
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://www.keepalived.org/download/
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://www.keepalived.org/documentation/changelog/
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/acassen/keepalived
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/acassen/keepalived/contributors
    checkedAt: 2026-10-29
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Keepalived is routing software written in C that adds load balancing and high availability to Linux systems. Its load balancing builds on the IPVS kernel module, with health checkers that keep each server pool current. Its high availability uses the VRRP protocol for router failover.

Keepalived runs as a daemon, and the installation page shows it enabled as a systemd service that starts at boot. Most Linux distributions ship a package. The download page says the project itself provides no binary packages, and the source is compiled with configure and make.

## Worth knowing

Keepalived's pages describe load balancing for server pools and failover for routers. They do not name websites or web applications.
