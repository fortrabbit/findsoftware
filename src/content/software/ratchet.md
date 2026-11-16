---
id: ratchet
name: Ratchet
urls:
  repository: https://github.com/ratchetphp/Ratchet
category:
  - backend
description: PHP library for asynchronously serving WebSocket connections from a long-running PHP process.
status: stub
maintainer: Chris Boden
firstRelease: 2012
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 5.4
runsAs:
  - always-on
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2021-12-14
githubStargazers: 6435
packagistDownloads: 23956117
contributors: 50
dependentRepos: 3295
dependentPackages: 250
social:
  forum: https://groups.google.com/forum/#!forum/ratchet-php
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/ratchetphp/Ratchet
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/ratchetphp/Ratchet/git/refs/tags/v0.1
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/ratchetphp/Ratchet/0.4.x/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/ratchetphp/Ratchet
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/ratchetphp/Ratchet/0.4.x/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://raw.githubusercontent.com/ratchetphp/Ratchet/v0.4.4/composer.json
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/ratchetphp/Ratchet/0.4.x/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/ratchetphp/Ratchet/0.4.x/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/ratchetphp/Ratchet/v0.4.4/composer.json
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/ratchetphp/Ratchet/0.4.x/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/ratchetphp/Ratchet/releases/tag/v0.4.4
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/ratchetphp/Ratchet/releases/tag/v0.4.4
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/ratchetphp/Ratchet
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/ratchetphp/Ratchet/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/cboden/ratchet.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/cboden%2Fratchet
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/cboden%2Fratchet
    checkedAt: 2026-11-16
ai: authored
npmWeeklyDownloads: null
---

Ratchet is a PHP library for serving WebSocket connections asynchronously, added to a project with Composer. A Ratchet server is a long-running PHP process, and the project's deployment guide recommends running it under a supervisor daemon that restarts it if it halts.

## Worth knowing

The README says shell access is required and root access is recommended. To serve WebSockets on port 80 or 443 next to a regular web stack, it names a reverse proxy or a second machine.

The README also announces an effort to revive the project.
