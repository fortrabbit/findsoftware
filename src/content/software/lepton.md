---
id: lepton
name: LEPTON CMS
urls:
  home: https://lepton-cms.org
  repository: https://gitlab.com/lepton-cms/LEPTON
  docs: https://doc.lepton-cms.org
  plugins: https://lepton-cms.com
category:
  - cms
description: Content management system written in PHP that runs on MySQL or MariaDB and is installed by uploading its package to a web space.
status: active
maintainer: LEPTON Project
parent: cms-lab UG
firstRelease: 2013
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
databases:
  - mysql
  - mariadb
adminUi: true
i18n: yes
installMethod: upload package by FTP, then the install wizard
licenseModel: open-source
license: GPL-3.0
currentMajor: "7"
latestReleaseDate: 2026-04-24
social:
  forum: https://forum.lepton-cms.org
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://gitlab.com/api/v4/projects/lepton-cms%2FLEPTON
    checkedAt: 2026-10-23
  - field: urls
    url: https://lepton-cms.org/
    checkedAt: 2026-10-23
  - field: urls
    url: https://gitlab.com/lepton-cms/LEPTON/-/raw/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://lepton-cms.org/english/disclaimer.php
    checkedAt: 2026-10-23
  - field: category
    url: https://lepton-cms.org/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://lepton-cms.org/posts/new-release-lepton-7.5.0-177.php
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://lepton-cms.org/posts/new-release-lepton-7.5.0-177.php
    checkedAt: 2026-10-23
  - field: databases
    url: https://lepton-cms.org/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://lepton-cms.org/
    checkedAt: 2026-10-23
  - field: i18n
    url: https://lepton-cms.org/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://lepton-cms.org/english/download/stable.php
    checkedAt: 2026-10-23
  - field: license
    url: https://gitlab.com/lepton-cms/LEPTON/-/raw/master/COPYING
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://lepton-cms.org/english/about/license.php
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://gitlab.com/api/v4/projects/lepton-cms%2FLEPTON/repository/tags
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://gitlab.com/api/v4/projects/lepton-cms%2FLEPTON/repository/tags
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://lepton-cms.org/english/download/stable.php
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://gitlab.com/api/v4/projects/lepton-cms%2FLEPTON/repository/tags
    checkedAt: 2026-10-23
  - field: urls
    url: https://lepton-cms.com/
    checkedAt: 2026-10-23
  - field: parent
    url: https://lepton-cms.org/english/disclaimer.php
    checkedAt: 2026-10-23
ai: authored
---

LEPTON CMS is a content management system written in PHP that keeps its content in a MySQL or MariaDB database. The project's homepage describes it as a full customizable content management system with a backend and multi-language support, and the LEPTON Project maintains it. Installation is done by hand: the upload directory of the release package goes to a web space over FTP, and the install wizard at /install sets up the rest.

## Worth knowing

The project's site lists commercial add-ons next to free ones, and the free ones are listed in an [add-ons repository](https://lepton-cms.com/); this record covers the core only. The release page gives PHP 8.1 as the minimum for the current release and 8.4 as the recommended version.
