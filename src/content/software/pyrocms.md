---
id: pyrocms
name: PyroCMS
urls:
  home: https://www.pyrocms.com/
  repository: https://github.com/pyrocms/pyrocms
  docs: https://pyrocms.com/documentation
  pricing: https://pyrocms.com/pro
category:
  - cms
description: PHP content management system built on Laravel, with a control panel, an addon system and the Streams Platform.
status: active
maintainer: PyroCMS, Inc.
maintainerType: company
language: php
runtime:
  - php
hosting:
  - php
basedOn:
  - laravel
databases:
  - mysql
adminUi: true
templating: twig
i18n: yes, built in
runsAs:
  - per-request
renderingModes:
  - server
installMethod: composer create-project, web installer, cli installer, curl installer
licenseModel: open-core
license: MIT, PRO License (proprietary)
currentMajor: "3"
latestReleaseDate: 2026-10-13
githubStargazers: 3173
packagistDownloads: 68947
contributors: 23
social:
  x: https://twitter.com/pyrocms
  discord: https://discord.gg/Sh79MvV
  forum: https://pyrocms.com/forum
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://www.pyrocms.com/
    checkedAt: 2026-10-20
  - field: urls
    url: https://www.pyrocms.com/
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/pyrocms/pyrocms
    checkedAt: 2026-10-20
  - field: urls
    url: https://pyrocms.com/documentation
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://www.pyrocms.com/
    checkedAt: 2026-10-20
  - field: category
    url: https://www.pyrocms.com/
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/pyrocms/pyrocms
    checkedAt: 2026-10-20
  - field: runtime
    url: https://pyrocms.com/documentation/pyrocms/latest/getting-started/installation
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://www.pyrocms.com/
    checkedAt: 2026-10-20
  - field: databases
    url: https://pyrocms.com/documentation/pyrocms/latest/getting-started/installation
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://www.pyrocms.com/
    checkedAt: 2026-10-20
  - field: templating
    url: https://pyrocms.com/documentation/streams-platform/latest/templating
    checkedAt: 2026-10-20
  - field: i18n
    url: https://www.pyrocms.com/
    checkedAt: 2026-10-20
  - field: renderingModes
    url: https://pyrocms.com/documentation/pyrocms/latest/getting-started/installation
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://pyrocms.com/documentation/pyrocms/latest/getting-started/installation
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://pyrocms.com/documentation/pyrocms/latest/getting-started/installation
    checkedAt: 2026-10-20
  - field: license
    url: https://repo.packagist.org/p2/pyrocms/pyrocms.json
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/pyrocms/pyrocms/blob/master/LICENSE.md
    checkedAt: 2026-10-20
  - field: license
    url: https://pyrocms.com/pro/license
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://www.pyrocms.com/
    checkedAt: 2026-10-20
  - field: urls
    url: https://pyrocms.com/pro
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/pyrocms/pyrocms.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/pyrocms/pyrocms.json
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/pyrocms/pyrocms
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/pyrocms/pyrocms/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/pyrocms/pyrocms.json
    checkedAt: 2026-10-20
figure:
  emoji: 📝
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

PyroCMS is a content management system built on Laravel. Its views are Twig templates, and editors manage content through a control panel. Features arrive as addons, and the docs mark several modules as PRO. The release also requires the Streams Platform, a separate Composer package that the docs present as a platform layer beneath the CMS.

The [installation docs](https://pyrocms.com/documentation/pyrocms/latest/getting-started/installation) run `composer create-project pyrocms/pyrocms`, then a web or command-line installer. The web root must point at the public directory, and the storage, public/app and bootstrap/cache directories must be writable by the web server. The docs configure MySQL as the database.

## Worth knowing

The core is MIT-licensed. The PRO addons, including the API module, fall under a separate PRO License and come with a paid PRO subscription.
