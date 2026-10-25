---
id: laminas-mvc
name: laminas-mvc
urls:
  home: https://docs.laminas.dev/laminas-mvc/
  repository: https://github.com/laminas/laminas-mvc
  docs: https://docs.laminas.dev/laminas-mvc/
category:
  - framework
description: Event-driven MVC layer for PHP web applications, with applications, controllers and plugins, from the Laminas Project.
status: active
maintainer: Laminas Project, a Series of LF Projects, LLC
maintainerType: foundation
parent: Linux Foundation
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
runsAs:
  - per-request
installMethod: composer require
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "3"
latestReleaseDate: 2024-11-21
githubStargazers: 174
packagistDownloads: 27805461
contributors: 199
packagistMonthlyDownloads: 519315
dependentRepos: 1614
dependentPackages: 363
social:
  forum: https://discourse.laminas.dev
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://docs.laminas.dev/laminas-mvc/
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/laminas/laminas-mvc
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/laminas/laminas-mvc
    checkedAt: 2026-10-20
  - field: urls
    url: https://docs.laminas.dev/laminas-mvc/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/laminas/laminas-mvc/blob/3.9.x/LICENSE.md
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://getlaminas.org/about/foundation
    checkedAt: 2026-10-20
  - field: parent
    url: https://getlaminas.org/about
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/laminas/laminas-mvc
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://getlaminas.org/support
    checkedAt: 2026-10-20
  - field: category
    url: https://docs.laminas.dev/laminas-mvc/
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/laminas/laminas-mvc
    checkedAt: 2026-10-20
  - field: runtime
    url: https://docs.laminas.dev/tutorials/getting-started/skeleton-application/
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://repo.packagist.org/p2/laminas/laminas-mvc.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://docs.laminas.dev/tutorials/getting-started/skeleton-application/
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://docs.laminas.dev/laminas-mvc/
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://raw.githubusercontent.com/laminas/laminas-mvc-skeleton/master/README.md
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/laminas/laminas-mvc.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/laminas/laminas-mvc/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/laminas/laminas-mvc
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/laminas/laminas-mvc/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/laminas/laminas-mvc.json
    checkedAt: 2026-10-20
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/laminas%2Flaminas-mvc
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/laminas%2Flaminas-mvc
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/laminas/laminas-mvc/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

laminas-mvc is the event-driven MVC layer of the Laminas Project, with applications, controllers and plugins. It is installed with Composer, either with `composer require` in an existing project or from the laminas-mvc-skeleton starter, and the skeleton's setup instructions point Apache or Nginx at the project's public directory. The [laminas-mvc docs](https://docs.laminas.dev/laminas-mvc/) cover installation and the rest of the API.

## Worth knowing

The project calls the package feature-complete and in security-only maintenance mode. It receives security patches until the end of 2028, with no new features or bug fixes, and no releases after that, as the [end-of-life schedule](https://getlaminas.org/blog/2026-03-06-laminas-mvc-eol-schedule.html) states. The same post encourages moving to Mezzio, the Laminas middleware approach.
