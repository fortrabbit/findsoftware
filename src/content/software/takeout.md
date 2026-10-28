---
id: takeout
name: Takeout
urls:
  repository: https://github.com/tighten/takeout
  docs: https://github.com/tighten/takeout/blob/master/README.md
category:
  - dev-tool
description: Command-line tool that starts one Docker container per local development dependency, such as MySQL or Redis.
status: active
maintainer: Tighten Co.
maintainerType: company
firstRelease: 2020
language: php
runtime:
  - php
runtimeMin: php 8.2
runsAs:
  - local
installMethod: docker
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-01-29
githubStargazers: 1655
packagistDownloads: 21142
contributors: 55
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://github.com/tighten/takeout/blob/master/README.md
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/tighten/takeout
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/tighten/takeout/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/tighten/takeout/blob/master/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/tighten/takeout
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/tighten/takeout/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://repo.packagist.org/p2/tightenco/takeout.json
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/tighten/takeout
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/tighten/takeout/master/LICENSE.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/tighten/takeout/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/tighten/takeout/blob/master/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/tighten/takeout/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/tighten/takeout/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/tighten/takeout/releases/latest
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/tighten/takeout/master/LICENSE.md
    checkedAt: 2026-10-28
  - field: packagistDownloads
    url: https://packagist.org/packages/tightenco/takeout.json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/tighten/takeout
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/tighten/takeout/contributors?per_page=1
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
npmWeeklyDownloads: null
---

Takeout is a command-line tool that starts a Docker container for each development dependency a project needs, such as MySQL, Redis or Meilisearch, and stops or removes those containers on request. It is meant to be paired with Laravel Valet, and the README lists macOS, Linux and Windows through WSL2 as supported platforms. The recommended way to run it is the Docker image through a shell alias, and the Composer package is the alternative for environments that already have PHP.

## Worth knowing

The README says that disabling a service removes its container but keeps its data in a Docker volume, so the data stays until that volume is deleted. The README marks the Composer route as not recommended, and its example pins an older release line, while the Docker alias pulls the latest image.
