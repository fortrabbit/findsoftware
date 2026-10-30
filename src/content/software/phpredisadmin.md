---
id: phpredisadmin
name: phpRedisAdmin
urls:
  repository: https://github.com/erikdubbelboer/phpRedisAdmin
category:
  - admin-panel
description: Simple web interface for managing Redis databases, written in PHP.
status: active
maintainer: Erik Dubbelboer
maintainerType: individual
firstRelease: 2013
language: php
runtime:
  - php
hosting:
  - php
adminUi: true
installMethod: composer create-project
licenseModel: open-source
license: CC-BY-3.0, BSD-3-Clause (bundled Redis string matching code)
currentMajor: "1"
latestReleaseDate: 2026-10-24
githubStargazers: 3182
packagistDownloads: 97058
contributors: 56
dependentRepos: 5
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://github.com/erikdubbelboer/phpRedisAdmin
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://github.com/erikdubbelboer/phpRedisAdmin/blob/master/README.markdown
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://github.com/erikdubbelboer/phpRedisAdmin/blob/master/README.markdown
    checkedAt: 2026-10-30
  - field: category
    url: https://github.com/erikdubbelboer/phpRedisAdmin/blob/master/README.markdown
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/erikdubbelboer/phpRedisAdmin
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/erikdubbelboer/phpRedisAdmin/blob/master/Dockerfile
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://github.com/erikdubbelboer/phpRedisAdmin/blob/master/README.markdown
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/erikdubbelboer/phpRedisAdmin/blob/master/README.markdown
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/erikdubbelboer/phpRedisAdmin/blob/master/README.markdown
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/erikdubbelboer/phpRedisAdmin/blob/master/README.markdown
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/erikdubbelboer/phpRedisAdmin/blob/master/README.markdown
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/erikdubbelboer/phpRedisAdmin/blob/master/LICENSE.redis-stringmatch
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://github.com/erikdubbelboer/phpRedisAdmin/blob/master/README.markdown
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/erikdubbelboer/phpRedisAdmin/releases/tag/v1.28.0
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/erikdubbelboer/phpRedisAdmin/releases/tag/v1.28.0
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://github.com/erikdubbelboer/phpRedisAdmin/releases/tag/v1.1.0
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://github.com/erikdubbelboer/phpRedisAdmin
    checkedAt: 2026-10-30
  - field: contributors
    url: https://github.com/erikdubbelboer/phpRedisAdmin
    checkedAt: 2026-10-30
  - field: packagistDownloads
    url: https://packagist.org/packages/erik-dubbelboer/php-redis-admin.json
    checkedAt: 2026-10-30
  - field: packagistDownloads
    url: https://packagist.org/packages/erik-dubbelboer/php-redis-admin.json
    checkedAt: 2026-10-30
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/erik-dubbelboer%2Fphp-redis-admin
    checkedAt: 2026-10-30
ai: authored
npmWeeklyDownloads: null
---

phpRedisAdmin gives a browser interface to Redis and is written in PHP. The maintainer, Erik Dubbelboer, develops and maintains the project on GitHub.

The README names three ways to install it: Composer's create-project command, a Git checkout with Composer's locked dependencies, and a Docker image published on Docker Hub.

## Worth knowing

The Docker route and source installs need an admin user and password, or a configured login, before the instance is exposed. The README calls unauthenticated access an option for isolated development only.

The project's own license is Creative Commons Attribution 3.0, and one bundled file for Redis string matching code is under a BSD 3-Clause license.
