---
id: october-cms
name: October CMS
urls:
  home: https://octobercms.com
  repository: https://github.com/octobercms/october
  docs: https://docs.octobercms.com
  pricing: https://octobercms.com/pricing
  plugins: https://octobercms.com/plugins
category:
  - cms
description: Commercially licensed PHP content management system built on the Laravel framework.
status: active
maintainer: Responsiv Pty Ltd
maintainerType: company
hqCountry: AU
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
basedOn:
  - laravel
contentStore:
  - database
databases:
  - mysql
  - mariadb
  - postgres
  - sqlite
adminUi: true
templating: twig
i18n: yes
runsAs:
  - per-request
installMethod: composer create-project october/october, ddev, browser wizard installer
licenseModel: source-available
license: proprietary, NOASSERTION (custom EULA in LICENSE.md)
currentMajor: "4"
latestReleaseDate: 2026-10-12
githubStargazers: 11146
packagistDownloads: 271854
contributors: 342
social:
  x: https://twitter.com/octobercms
  forum: https://talk.octobercms.com
  youtube: https://www.youtube.com/c/OctoberCMSOfficial
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://octobercms.com
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/octobercms/october
    checkedAt: 2026-10-18
  - field: urls
    url: https://octobercms.com
    checkedAt: 2026-10-18
  - field: urls
    url: https://octobercms.com
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://github.com/octobercms/october/blob/develop/LICENSE.md
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://github.com/octobercms/october/blob/develop/LICENSE.md
    checkedAt: 2026-10-18
  - field: hqCountry
    url: https://github.com/octobercms/october/blob/develop/LICENSE.md
    checkedAt: 2026-10-18
  - field: category
    url: https://octobercms.com
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://octobercms.com
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://repo.packagist.org/p2/october/october.json
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/octobercms/october
    checkedAt: 2026-10-18
  - field: runtime
    url: https://docs.octobercms.com/4.x/setup/installation.html
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://docs.octobercms.com/4.x/setup/installation.html
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/october/october.json
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://docs.octobercms.com/4.x/cms/themes/themes.html
    checkedAt: 2026-10-18
  - field: databases
    url: https://docs.octobercms.com/4.x/setup/installation.html
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://docs.octobercms.com/4.x/setup/installation.html
    checkedAt: 2026-10-18
  - field: templating
    url: https://docs.octobercms.com/4.x/cms/themes/themes.html
    checkedAt: 2026-10-18
  - field: i18n
    url: https://docs.octobercms.com/4.x/extend/multisite/introduction.html
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://docs.octobercms.com/4.x/setup/installation.html
    checkedAt: 2026-10-18
  - field: license
    url: https://repo.packagist.org/p2/october/october.json
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/octobercms/october
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/octobercms/october/blob/develop/LICENSE.md
    checkedAt: 2026-10-18
  - field: urls
    url: https://octobercms.com
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://repo.packagist.org/p2/october/october.json
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/october/october.json
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/octobercms/october
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/octobercms/october/contributors
    checkedAt: 2026-10-18
  - field: packagistDownloads
    url: https://packagist.org/packages/october/october.json
    checkedAt: 2026-10-18
  - field: urls
    url: https://octobercms.com
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://docs.octobercms.com/4.x/setup/installation.html
    checkedAt: 2026-10-19
ai: authored
npmWeeklyDownloads: null
---

October CMS is a content management system written in PHP on the Laravel framework. It has a backend panel for managing content and a Twig-based theme layer for the front end. Themes are plain files that can live in version control, and the system also uses a database. The docs describe approaches for running several languages and several websites, and extensions are added from the plugin marketplace.

Installation needs a license key before the setup can finish. The source is public on GitHub, but the EULA that governs it forbids modifying and redistributing the code. Updates come through an update gateway. The license is perpetual, but without renewal access to that gateway ends.

## Worth knowing

Every new account gets one free license with its first year of updates. Further sites need a paid license or a subscription. The [pricing page](https://octobercms.com/pricing) lists the current editions.
