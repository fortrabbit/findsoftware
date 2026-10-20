---
id: opencart
name: OpenCart
urls:
  home: https://www.opencart.com
  repository: https://github.com/opencart/opencart
  docs: https://docs.opencart.com
category:
  - e-commerce
description: Open source ecommerce platform written in PHP for running an online store on a web server.
status: active
maintainer: OpenCart
firstRelease: 2006
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
databases:
  - mysql
  - mariadb
  - postgres
adminUi: true
templating: twig
runsAs:
  - per-request
installMethod: zip download, manual upload
licenseModel: open-source
license: GPL-3.0, GPL-3.0-or-later
currentMajor: "4"
latestReleaseDate: 2026-08-11
githubStargazers: 8218
contributors: 329
social:
  x: https://twitter.com/opencart
  forum: https://forum.opencart.com
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://www.opencart.com/
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/opencart/opencart
    checkedAt: 2026-10-20
  - field: urls
    url: https://docs.opencart.com/getting-started/installation
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://www.opencart.com/
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/opencart/opencart/blob/master/README.md
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/opencart/opencart
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/opencart/opencart/blob/4.1.0.4/composer.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/opencart/opencart/blob/4.1.0.4/composer.json
    checkedAt: 2026-10-20
  - field: templating
    url: https://github.com/opencart/opencart/blob/4.1.0.4/composer.json
    checkedAt: 2026-10-20
  - field: databases
    url: https://docs.opencart.com/getting-started/system-requirements
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/opencart/opencart/blob/master/INSTALL.md
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://github.com/opencart/opencart/blob/master/INSTALL.md
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://docs.opencart.com/getting-started/installation
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/opencart/opencart/blob/master/LICENSE.md
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/opencart/opencart/blob/4.1.0.4/composer.json
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://github.com/opencart/opencart/releases/latest
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://github.com/opencart/opencart/releases/latest
    checkedAt: 2026-10-20
  - field: firstRelease
    url: https://www.opencart.com/index.php?route=cms/company
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://github.com/opencart/opencart
    checkedAt: 2026-10-20
  - field: contributors
    url: https://github.com/opencart/opencart/graphs/contributors
    checkedAt: 2026-10-20
figure:
  emoji: 🛒
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: PHP · Shop
ai: authored
npmWeeklyDownloads: null
---

OpenCart is an open source ecommerce platform written in PHP, with Twig templates. A merchant uploads the files to a web server, creates a database, and runs the installation steps, as the [installation guide](https://docs.opencart.com/getting-started/installation) describes. The installer creates the admin account, and the admin panel is where the store is managed. PHP handles each request, so no separate process runs beside the web server.

OpenCart maintains the software and also offers OpenCart Cloud, a hosted service separate from the software.

## Worth knowing

The [system requirements](https://docs.opencart.com/getting-started/system-requirements) page and the latest release's composer.json name different minimum PHP versions.
