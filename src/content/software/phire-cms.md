---
id: phire-cms
name: Phire CMS
urls:
  home: https://phirecms.org/
  repository: https://github.com/phirecms/phirecms
category:
  - cms
description: Content management system written in PHP, built on the Pop PHP Framework.
status: stub
maintainer: NOLA Interactive, LLC
maintainerType: company
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 5.4
databases:
  - mysql
  - postgres
  - sqlite
adminUi: true
runsAs:
  - per-request
installMethod: composer create-project, git clone, download archive
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "2"
latestReleaseDate: 2018-10-02
githubStargazers: 7
packagistDownloads: 121
contributors: 1
dependentRepos: 4
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://phirecms.org/
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/phirecms/phirecms
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/phirecms/phirecms/blob/master/LICENSE.TXT
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/phirecms/phirecms
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/phirecms/phirecms/blob/master/composer.json
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/phirecms/phirecms/blob/master/composer.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/phirecms/phirecms/blob/master/README.md
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/phirecms/phirecms/blob/master/composer.json
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/phirecms/phirecms/blob/master/LICENSE.TXT
    checkedAt: 2026-10-20
  - field: databases
    url: https://github.com/phirecms/phirecms/blob/master/README.md
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://github.com/phirecms/phirecms/blob/master/README.md
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/phirecms/phirecms/blob/master/README.md
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://github.com/phirecms/phirecms/blob/master/README.md
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/phirecms/phirecms.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/phirecms/phirecms/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://github.com/phirecms/phirecms
    checkedAt: 2026-10-20
  - field: contributors
    url: https://github.com/phirecms/phirecms
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/phirecms/phirecms.json
    checkedAt: 2026-10-20
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/phirecms%2Fphirecms
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Phire CMS is a content management system written in PHP and built on the Pop PHP Framework. It provides user and user role management and has its own administrative login area, and modules extend it.

The software supports MySQL, PostgreSQL or SQLite as its database. It runs per request under a web server with URL rewrite support, so no separate process stays running for the site. The [README](https://github.com/phirecms/phirecms/blob/master/README.md) gives composer create-project as one way to install it.

## Worth knowing

The project's website does not currently serve its documentation: the installation page answers with unrelated content. The README says a new website and documentation are coming soon.
