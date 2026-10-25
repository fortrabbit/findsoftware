---
id: processwire
name: ProcessWire
urls:
  home: https://processwire.com
  repository: https://github.com/processwire/processwire
  docs: https://processwire.com/docs/
  plugins: https://processwire.com/modules/
category:
  - cms
description: Open source PHP content management system with a page and field data model and a PHP API.
status: active
maintainer: ProcessWire
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.1
contentStore:
  - database
databases:
  - mysql
  - mariadb
adminUi: true
templating: php
i18n: yes, built into the core
runsAs:
  - per-request
renderingModes:
  - server
installMethod: zip download, git clone, composer create-project
licenseModel: open-core
license: MPL-2.0, MIT
currentMajor: "3"
latestReleaseDate: 2026-08-28
githubStargazers: 1160
packagistDownloads: 37488
contributors: 36
packagistMonthlyDownloads: 1518
httpArchiveSites: 2792
dependentRepos: 28
dependentPackages: 30
social:
  forum: https://processwire.com/talk/
wikidata: Q3021710
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://processwire.com/
    checkedAt: 2026-10-20
  - field: urls
    url: https://processwire.com/
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/processwire/processwire
    checkedAt: 2026-10-20
  - field: urls
    url: https://processwire.com/docs/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://processwire.com/
    checkedAt: 2026-10-20
  - field: category
    url: https://processwire.com/
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/processwire/processwire
    checkedAt: 2026-10-20
  - field: runtime
    url: https://processwire.com/docs/start/install/new/
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://processwire.com/docs/start/install/new/
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://repo.packagist.org/p2/processwire/processwire.json
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://processwire.com/docs/start/install/new/
    checkedAt: 2026-10-20
  - field: databases
    url: https://processwire.com/docs/start/install/new/
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://processwire.com/about/background/
    checkedAt: 2026-10-20
  - field: templating
    url: https://processwire.com/docs/start/templates/
    checkedAt: 2026-10-20
  - field: i18n
    url: https://processwire.com/about/features/
    checkedAt: 2026-10-20
  - field: renderingModes
    url: https://processwire.com/docs/start/templates/
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://processwire.com/docs/start/install/new/
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://processwire.com/docs/start/templates/
    checkedAt: 2026-10-20
  - field: license
    url: https://processwire.com/about/license/
    checkedAt: 2026-10-20
  - field: license
    url: https://repo.packagist.org/p2/processwire/processwire.json
    checkedAt: 2026-10-20
  - field: license
    url: https://processwire.com/about/license/
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://processwire.com/about/license/
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/processwire/processwire.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/processwire/processwire.json
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/processwire/processwire
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/processwire/processwire/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/processwire/processwire.json
    checkedAt: 2026-10-20
  - field: urls
    url: https://processwire.com/modules/
    checkedAt: 2026-10-20
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q3021710
    checkedAt: 2026-10-20
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-25
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/processwire%2Fprocesswire
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/processwire%2Fprocesswire
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/processwire/processwire/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

ProcessWire is a PHP content management system built around pages, templates and fields. Each page is rendered by a template file, a PHP script that receives API variables for the page being viewed. Editors work in the ProcessWire admin, where pages are edited through a process module. Content is kept in a MySQL or MariaDB database. The core includes multi-language support and role-based access control, with roles assigned to templates.

The [install guide](https://processwire.com/docs/start/install/new/) lists Apache or a compatible web server with mod_rewrite and .htaccess support, PDO for PHP, and either GD or ImageMagick.

## Worth knowing

The core is licensed under MPL-2.0, and some core components use MIT where a file header says so.
