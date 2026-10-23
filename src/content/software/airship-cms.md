---
id: airship-cms
name: CMS Airship
urls:
  home: https://airship.paragonie.com
  repository: https://github.com/paragonie/airship
  docs: https://github.com/paragonie/airship-docs
category:
  - cms
  - framework
description: PHP content management system and blog engine with a Gears extension system, distributed through GitHub and Packagist.
status: discontinued
maintainer: Paragon Initiative Enterprises
firstRelease: 2016
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.2
databases:
  - postgres
adminUi: true
templating: twig
i18n: a lang directory for internationalization
runsAs:
  - per-request
installMethod: git clone and composer install, then the web-based installer
licenseModel: open-core
license: GPL-3.0+, GPL 3, commercial license available
currentMajor: "1"
latestReleaseDate: 2017-05-05
githubStargazers: 412
packagistDownloads: 10
contributors: 16
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: status
    url: https://packagist.org/packages/paragonie/airship.json
    checkedAt: 2026-10-23
  - field: status
    url: https://airship.paragonie.com/
    checkedAt: 2026-10-23
  - field: status
    url: https://api.github.com/repos/paragonie/airship
    checkedAt: 2026-10-23
  - field: urls
    url: https://airship.paragonie.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/paragonie/airship-docs
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/paragonie/airship
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/paragonie/airship
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/paragonie/airship/master/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/paragonie/airship
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/paragonie/airship/master/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://raw.githubusercontent.com/paragonie/airship/master/README.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/paragonie/airship-docs/blob/master/en-us/01-intro/2-Installing.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/paragonie/airship-docs/blob/master/en-us/01-intro/2-Installing.md
    checkedAt: 2026-10-23
  - field: license
    url: https://packagist.org/packages/paragonie/airship.json
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/paragonie/airship/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/paragonie/airship/master/README.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/paragonie/airship/master/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/paragonie/airship/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/paragonie/airship/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/paragonie/airship/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/paragonie/airship
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/paragonie/airship/contributors?per_page=1
    checkedAt: 2026-10-23
  - field: packagistDownloads
    url: https://packagist.org/packages/paragonie/airship.json
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/paragonie/airship-docs/blob/master/en-us/01-intro/1-Lingo-Jargon.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/paragonie/airship-docs/blob/master/en-us/5-Minute-Overview.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://github.com/paragonie/airship-docs/blob/master/en-us/01-intro/1-Lingo-Jargon.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/paragonie/airship-docs/blob/master/en-us/01-intro/2-Installing.md
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

CMS Airship is a content management system, blog engine and application framework written for PHP, developed by Paragon Initiative Enterprises. Its documentation describes extensions of three kinds: Cabins are self-contained applications, Gadgets change the behavior of a Cabin or the engine, and Motifs change appearance. Templates are rendered by Twig, and the administration area is a Cabin called the Bridge. The [install guide](https://github.com/paragonie/airship-docs/blob/master/en-us/01-intro/2-Installing.md) clones the repository, runs composer install, and finishes setup in a web-based installer, with PostgreSQL as the database. A docker-compose file is also provided.

The README lists a multi-site architecture, and the docs describe access controls based on groups and users.

## Worth knowing

The GitHub repository is archived and its Packagist package is flagged as abandoned. The project's documentation site tells readers not to use the Airship website for the time being. The README also offers commercial licenses alongside the GPL 3 license.
