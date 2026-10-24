---
id: pbootcms
name: PbootCMS
urls:
  home: https://www.pbootcms.com
  repository: https://github.com/pbootcmspro/PbootCMS
  docs: https://www.pbootcms.com/docs/
category:
  - cms
description: Chinese-language PHP content management system for building corporate websites, published as open-source code.
status: active
maintainer: 星梦
maintainerType: individual
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.4
contentStore:
  - database
databases:
  - sqlite
  - mysql
adminUi: true
templating: pboot tag templates
i18n: yes, multi-language sites
runsAs:
  - per-request
installMethod: upload the source to a PHP web space
licenseModel: open-source
license: Apache 2.0, except one authorization file
currentMajor: "3"
latestReleaseDate: 2026-10-12
githubStargazers: 327
contributors: 1
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://www.pbootcms.com
    checkedAt: 2026-10-20
  - field: urls
    url: https://www.pbootcms.com
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/pbootcmspro/PbootCMS
    checkedAt: 2026-10-20
  - field: urls
    url: https://www.pbootcms.com/docs/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://www.pbootcms.com/freesn/
    checkedAt: 2026-10-20
  - field: category
    url: https://www.pbootcms.com
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/pbootcmspro/PbootCMS
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/pbootcmspro/PbootCMS/blob/master/README.md
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/pbootcmspro/PbootCMS/blob/master/README.md
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/pbootcmspro/PbootCMS/blob/master/README.md
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://github.com/pbootcmspro/PbootCMS/blob/master/README.md
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://github.com/pbootcmspro/PbootCMS/blob/master/README.md
    checkedAt: 2026-10-20
  - field: databases
    url: https://github.com/pbootcmspro/PbootCMS/blob/master/README.md
    checkedAt: 2026-10-20
  - field: templating
    url: https://github.com/pbootcmspro/PbootCMS/blob/master/README.md
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://www.pbootcms.com
    checkedAt: 2026-10-20
  - field: i18n
    url: https://github.com/pbootcmspro/PbootCMS/blob/master/README.md
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/pbootcmspro/PbootCMS/blob/master/README.md
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://github.com/pbootcmspro/PbootCMS/blob/master/README.md
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://api.github.com/repos/pbootcmspro/PbootCMS/releases/latest
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/pbootcmspro/PbootCMS/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/pbootcmspro/PbootCMS
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/pbootcmspro/PbootCMS/contributors
    checkedAt: 2026-10-20
ai: authored
npmWeeklyDownloads: null
---

PbootCMS is a PHP content management system for corporate websites, with its website and documentation in Chinese. The default database is SQLite, so the published source runs from a PHP web space without a database server. The [README](https://github.com/pbootcmspro/PbootCMS/blob/master/README.md) describes MySQL as the alternative, set up by importing the bundled SQL file. The back end is a responsive admin built on LayUI, and pages are built with the software's own tag syntax, such as `{pboot:list}`.

The feature list includes custom content models and fields, multi-language and multi-region sites with bound domains, custom forms, and role and permission management.

## Worth knowing

Each site needs a domain authorization code. The project issues it free on its [authorization page](https://www.pbootcms.com/freesn/), and that page says the code is checked without a network connection. The project also sells a universal code valid for any domain. The README says all code is Apache 2.0 licensed except one authorization file. The homepage lists the online shop feature as not yet developed.
