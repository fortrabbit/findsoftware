---
id: phpwcms
name: phpwcms
urls:
  home: https://www.phpwcms.org/
  repository: https://github.com/slackero/phpwcms
  docs: https://docu.phpwcms.org/
category:
  - cms
description: Web-based content management system and CMS framework that runs on PHP and MySQL.
status: active
maintainer: Oliver Georgi
maintainerType: individual
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
databases:
  - mysql
  - mariadb
adminUi: true
runsAs:
  - per-request
installMethod: git clone, composer install
licenseModel: open-source
license: GPL-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-03
githubStargazers: 96
contributors: 7
social:
  forum: https://forum.phpwcms.org
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://www.phpwcms.org/
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/slackero/phpwcms
    checkedAt: 2026-10-20
  - field: urls
    url: https://docu.phpwcms.org/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://www.phpwcms.org/
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/slackero/phpwcms
    checkedAt: 2026-10-20
  - field: category
    url: https://www.phpwcms.org/
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/slackero/phpwcms/blob/v1.12.4/composer.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/slackero/phpwcms/blob/v1.12.4/composer.json
    checkedAt: 2026-10-20
  - field: databases
    url: https://github.com/slackero/phpwcms/blob/v1.12.4/README.md
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://github.com/slackero/phpwcms/blob/v1.12.4/README.md
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/slackero/phpwcms/blob/v1.12.4/README.md
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://github.com/slackero/phpwcms/blob/v1.12.4/README.md
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/slackero/phpwcms
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/slackero/phpwcms/blob/v1.12.4/LICENSE
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://api.github.com/repos/slackero/phpwcms/releases/latest
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/slackero/phpwcms/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://github.com/slackero/phpwcms
    checkedAt: 2026-10-20
  - field: contributors
    url: https://github.com/slackero/phpwcms
    checkedAt: 2026-10-20
figure:
  emoji: 📝
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

phpwcms is a web-based content management system and CMS framework that runs under PHP and MySQL or MariaDB. One installation serves both an administration backend and the public frontend.

The source is on [GitHub](https://github.com/slackero/phpwcms), and it is installed by cloning the repository and running composer install for its dependencies. Each request is handled by PHP under the web server, so no separate process stays running for the site.
