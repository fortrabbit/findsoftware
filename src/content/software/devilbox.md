---
id: devilbox
name: Devilbox
urls:
  repository: https://github.com/cytopia/devilbox
  docs: https://devilbox.readthedocs.io
category:
  - dev-tool
description: Docker-based local development environment for PHP projects, with web servers, PHP versions, databases and development tools as containers.
status: active
maintainer: cytopia
maintainerType: individual
firstRelease: 2016
language: php
runsAs:
  - local
installMethod: git clone, then docker-compose up
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2022-12-18
githubStargazers: 4469
contributors: 66
social:
  discord: https://discord.gg/2wP3V6kBj4
  forum: https://devilbox.discourse.group
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/cytopia/devilbox
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/cytopia/devilbox/blob/master/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/cytopia/devilbox/blob/master/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/cytopia/devilbox
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/cytopia/devilbox/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/cytopia/devilbox/blob/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/cytopia/devilbox/master/LICENSE.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/cytopia/devilbox/releases
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/cytopia/devilbox
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/cytopia/devilbox/master/LICENSE.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/cytopia/devilbox/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://github.com/cytopia/devilbox/releases/tag/v2.4.0
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/cytopia/devilbox
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/cytopia/devilbox/contributors?per_page=1
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
npmWeeklyDownloads: null
---

Devilbox is a Docker-based development environment for PHP projects, meant to run on the developer's own machine. Its web servers, PHP versions and databases run as containers that the developer starts with docker-compose, and the README describes the aim as a reproducible environment that runs on all major platforms. The stack ships Apache and Nginx, several PHP and MySQL versions, MariaDB, PostgreSQL, MongoDB, Redis and Memcached among its containers, and the README names CakePHP, Laravel and WordPress among the frameworks it supports.

## Worth knowing

Docker Engine and Docker Compose are required, and the README gives minimum versions for both. The newest listed release is a pre-release, and the last stable release comes before it. The copyright line names cytopia as the maintainer, and no company or legal name is stated.
