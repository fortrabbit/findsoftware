---
id: haproxy
name: HAProxy
urls:
  home: https://www.haproxy.org
  repository: https://github.com/haproxy/haproxy
  docs: https://docs.haproxy.org/3.4/intro.html
category:
  - web-server
description: Load balancer and reverse proxy for TCP and HTTP applications, built as a single multi-threaded daemon.
status: active
maintainer: Willy Tarreau
maintainerType: individual
firstRelease: 2000
language: c
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: docker-image
licenseModel: open-core
license: GPL-2.0, LGPL-2.1
currentMajor: "3"
latestReleaseDate: 2026-10-14
githubStargazers: 6956
contributors: 303
social:
  forum: https://discourse.haproxy.org/
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: name
    url: https://www.haproxy.org
    checkedAt: 2026-10-29
  - field: urls
    url: https://www.haproxy.org
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/haproxy/haproxy
    checkedAt: 2026-10-29
  - field: urls
    url: https://docs.haproxy.org/3.4/intro.html
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://raw.githubusercontent.com/haproxy/haproxy/master/LICENSE
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://raw.githubusercontent.com/haproxy/haproxy/master/LICENSE
    checkedAt: 2026-10-29
  - field: category
    url: https://www.haproxy.org
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/haproxy/haproxy
    checkedAt: 2026-10-29
  - field: runtime
    url: https://docs.haproxy.org/3.4/management.html
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://www.haproxy.org
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://www.haproxy.org/download/3.4/src/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://www.haproxy.org
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://docs.haproxy.org/3.4/management.html
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/haproxy/haproxy/blob/master/doc/gpl.txt
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/haproxy/haproxy/blob/master/doc/lgpl.txt
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://raw.githubusercontent.com/haproxy/haproxy/master/LICENSE
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://www.haproxy.org
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://www.haproxy.org/download/3.4/src/CHANGELOG
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://www.haproxy.org/download/3.4/src/CHANGELOG
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/haproxy/haproxy
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/haproxy/haproxy/contributors
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

HAProxy is a load balancer and reverse proxy for TCP and HTTP traffic. It runs as a multi-threaded, event-driven daemon written in C. It is installed from a source tarball published on haproxy.org, from Debian and Ubuntu packages or from its Docker images, which come in Alpine-based, Debian-based and RHEL-based variants. The project maintains several branches at once, and each branch has its own end-of-life date, which endoflife.date lists.

## Worth knowing

HAProxy Enterprise is a commercial edition, sold with pricing on request. Its source is mirrored on GitHub, while the project's own git repositories are on git.haproxy.org.
