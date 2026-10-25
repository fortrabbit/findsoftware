---
id: croogo
name: Croogo
urls:
  home: https://croogo.org
  repository: https://github.com/croogo/croogo
  docs: https://docs.croogo.org
category:
  - cms
description: Open-source content management system for PHP, built on the CakePHP framework.
status: stub
maintainer: Croogo Development Team
maintainerType: community
firstRelease: 2009
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.1
basedOn:
  - cakephp
databases:
  - mysql
  - postgres
adminUi: true
runsAs:
  - per-request
installMethod: composer create-project, web installer
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2020-10-31
githubStargazers: 811
packagistDownloads: 7198
contributors: 125
packagistMonthlyDownloads: 27
dependentRepos: 5
social:
  x: https://twitter.com/croogo
  forum: https://groups.google.com/group/croogo
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://croogo.org/
    checkedAt: 2026-10-20
  - field: urls
    url: https://croogo.org/
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/croogo/croogo
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/croogo/croogo/blob/master/README.mdown
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://croogo.org/
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/croogo/croogo/blob/master/README.mdown
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://github.com/croogo/croogo/blob/master/README.mdown
    checkedAt: 2026-10-20
  - field: firstRelease
    url: https://croogo.org/
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/croogo/croogo/blob/master/README.mdown
    checkedAt: 2026-10-20
  - field: runtime
    url: https://repo.packagist.org/p2/croogo/app.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://repo.packagist.org/p2/croogo/croogo.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/croogo/croogo/blob/master/README.mdown
    checkedAt: 2026-10-20
  - field: databases
    url: https://croogo.org/
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://github.com/croogo/croogo/blob/master/README.mdown
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/croogo/croogo/blob/master/README.mdown
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://github.com/croogo/croogo/blob/master/README.mdown
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/croogo/croogo/blob/master/LICENSE.txt
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://packagist.org/packages/croogo/croogo.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://github.com/croogo/croogo/releases
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://github.com/croogo/croogo
    checkedAt: 2026-10-20
  - field: contributors
    url: https://github.com/croogo/croogo
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/croogo/app.json
    checkedAt: 2026-10-20
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/croogo%2Fapp
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/croogo/app/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Croogo is a content management system for PHP, built on the CakePHP framework. The repository holds the plugins that make up the core. The application template is a separate package, croogo/app, which the install instructions name. Installation runs through Composer's create-project command or a web-based installer, and the admin panel is then reached under /admin. Croogo works with MySQL and PostgreSQL and runs under Apache with mod_rewrite or under nginx.

## Worth knowing

The homepage and the README state different minimum PHP versions. The linked documentation at docs.croogo.org is an older edition than the current release.
