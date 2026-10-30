---
id: phpmyadmin
name: phpMyAdmin
urls:
  home: https://www.phpmyadmin.net/
  repository: https://github.com/phpmyadmin/phpmyadmin
  docs: https://docs.phpmyadmin.net/
category:
  - admin-panel
description: Web interface written in PHP for administering MySQL and MariaDB databases.
status: active
maintainer: The phpMyAdmin Team
maintainerType: community
firstRelease: 1998
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.2
databases:
  - mysql
  - mariadb
adminUi: true
i18n: 98 languages, LTR and RTL
runsAs:
  - per-request
installMethod: distribution tarball from the downloads page
licenseModel: open-source
license: GPL-2.0-only
currentMajor: "5"
latestReleaseDate: 2025-10-08
githubStargazers: 7968
packagistDownloads: 404795
contributors: 291
social:
  x: https://x.com/phpmya
  facebook: https://www.facebook.com/pmyadmin/
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://www.phpmyadmin.net/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/phpmyadmin/phpmyadmin
    checkedAt: 2026-10-30
  - field: urls
    url: https://www.phpmyadmin.net/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://repo.packagist.org/p2/phpmyadmin/phpmyadmin.json
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://repo.packagist.org/p2/phpmyadmin/phpmyadmin.json
    checkedAt: 2026-10-30
  - field: category
    url: https://www.phpmyadmin.net/
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/phpmyadmin/phpmyadmin
    checkedAt: 2026-10-30
  - field: runtime
    url: https://docs.phpmyadmin.net/en/latest/require.html
    checkedAt: 2026-10-30
  - field: runtimeMin
    url: https://github.com/phpmyadmin/phpmyadmin/blob/RELEASE_5_2_3/composer.json
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://docs.phpmyadmin.net/en/latest/require.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.phpmyadmin.net/en/latest/setup.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.phpmyadmin.net/en/latest/setup.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.phpmyadmin.net/en/latest/setup.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.phpmyadmin.net/en/latest/setup.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.phpmyadmin.net/en/latest/setup.html
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://www.phpmyadmin.net/
    checkedAt: 2026-10-30
  - field: databases
    url: https://www.phpmyadmin.net/
    checkedAt: 2026-10-30
  - field: i18n
    url: https://www.phpmyadmin.net/
    checkedAt: 2026-10-30
  - field: license
    url: https://repo.packagist.org/p2/phpmyadmin/phpmyadmin.json
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://raw.githubusercontent.com/phpmyadmin/phpmyadmin/RELEASE_5_2_3/LICENSE
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/phpmyadmin/phpmyadmin/releases/tag/RELEASE_5_2_3
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/phpmyadmin/phpmyadmin/releases/tag/RELEASE_5_2_3
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://www.phpmyadmin.net/about/
    checkedAt: 2026-10-30
  - field: packagistDownloads
    url: https://packagist.org/packages/phpmyadmin/phpmyadmin/stats.json
    checkedAt: 2026-10-30
  - field: packagistDownloads
    url: https://packagist.org/packages/phpmyadmin/phpmyadmin/stats.json
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/phpmyadmin/phpmyadmin
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/phpmyadmin/phpmyadmin/contributors?per_page=1
    checkedAt: 2026-10-30
ai: authored
npmWeeklyDownloads: null
---

phpMyAdmin is a web interface, written in PHP, for administering MySQL and MariaDB databases. The [project site](https://www.phpmyadmin.net/) describes it as designed for administering both over the web. The [setup documentation](https://docs.phpmyadmin.net/en/latest/setup.html) gives several ways to deploy it: a distribution tarball, Linux distribution packages, a Composer project, a git checkout and the official Docker image.

Its files are placed on a web server, which runs the application for each request. The interface is translated into many languages, including right-to-left ones.
