---
id: typo3-cms
name: TYPO3
urls:
  home: https://typo3.org
  repository: https://github.com/TYPO3/typo3
  docs: https://docs.typo3.org/
  plugins: https://extensions.typo3.org/
category:
  - cms
description: Open-source PHP content management system with a browser-based backend, Fluid templating and multi-site, multi-language site handling.
status: active
maintainer: TYPO3 Association
maintainerType: foundation
parent: TYPO3 Association, owner of TYPO3 GmbH (founded 2016)
firstRelease: 2000
hqCountry: CH
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
basedOn:
  - symfony
  - doctrine-dbal
contentStore:
  - database
databases:
  - mariadb
  - mysql
  - postgres
  - sqlite
adminUi: true
templating: fluid
i18n: yes, localized records and interface labels in core
runsAs:
  - per-request
renderingModes:
  - server
installMethod: composer create-project typo3/cms-base-distribution, ddev
licenseModel: open-source
license: GPL-2.0-or-later, GPL-2.0
currentMajor: "14"
latestReleaseDate: 2026-10-13
githubStargazers: 1215
packagistDownloads: 14685571
pluginCount: 9198
packagistMonthlyDownloads: 493892
dependentRepos: 3856
dependentPackages: 3067
social:
  bluesky: https://bsky.app/profile/typo3.com
  mastodon: https://typo3.social/@typo3
  forum: https://typo3.community/
wikidata: Q618512
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://typo3.org/
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/TYPO3/typo3
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/TYPO3/typo3
    checkedAt: 2026-10-18
  - field: urls
    url: https://docs.typo3.org/m/typo3/tutorial-getting-started/main/en-us/Index.html
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://typo3.com/typo3-cms/the-typo3-story
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://typo3.org/project/association
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://typo3.org/project/association
    checkedAt: 2026-10-18
  - field: hqCountry
    url: https://typo3.org/project/association
    checkedAt: 2026-10-18
  - field: parent
    url: https://typo3.org/project/association
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q618512
    checkedAt: 2026-10-18
  - field: category
    url: https://api.github.com/repos/TYPO3/typo3
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://repo.packagist.org/p2/typo3/cms-core.json
    checkedAt: 2026-10-18
  - field: language
    url: https://get.typo3.org/version/14
    checkedAt: 2026-10-18
  - field: runtime
    url: https://get.typo3.org/version/14
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/typo3/cms-core.json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://get.typo3.org/version/14
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://get.typo3.org/version/14
    checkedAt: 2026-10-18
  - field: databases
    url: https://get.typo3.org/version/14
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://docs.typo3.org/m/typo3/tutorial-getting-started/main/en-us/Installation/Install.html
    checkedAt: 2026-10-18
  - field: templating
    url: https://docs.typo3.org/m/typo3/tutorial-getting-started/main/en-us/Concepts/Fluid/Index.html
    checkedAt: 2026-10-18
  - field: i18n
    url: https://docs.typo3.org/m/typo3/reference-coreapi/main/en-us/ApiOverview/Localization/Index.html
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://docs.typo3.org/m/typo3/tutorial-getting-started/main/en-us/Concepts/Fluid/Index.html
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://get.typo3.org/version/14
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://docs.typo3.org/m/typo3/tutorial-getting-started/main/en-us/Installation/Install.html
    checkedAt: 2026-10-18
  - field: license
    url: https://packagist.org/packages/typo3/cms-core.json
    checkedAt: 2026-10-18
  - field: license
    url: https://api.github.com/repos/TYPO3/typo3
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://packagist.org/packages/typo3/cms-core.json
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://repo.packagist.org/p2/typo3/cms-core.json
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/typo3/cms-core.json
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/TYPO3/typo3
    checkedAt: 2026-10-18
  - field: packagistDownloads
    url: https://packagist.org/packages/typo3/cms-core.json
    checkedAt: 2026-10-18
  - field: urls
    url: https://typo3.org/
    checkedAt: 2026-10-18
  - field: pluginCount
    url: https://extensions.typo3.org/api/v1/extension?per_page=1
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://docs.typo3.org/m/typo3/tutorial-getting-started/main/en-us/Installation/Install.html
    checkedAt: 2026-10-19
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/typo3%2Fcms-core
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/typo3%2Fcms-core
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/typo3/cms-core/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

TYPO3 is a PHP content management system in which editors work in a browser-based backend at `/typo3/` and pages are rendered with the Fluid template engine. One instance can serve several frontend sites, and localized records and interface labels are part of the core. The core builds on Symfony components and Doctrine DBAL. Projects start from the base distribution through Composer. The code is reviewed on the project's own Gerrit server, and GitHub holds a synchronized mirror. The TYPO3 Association maintains the project and owns TYPO3 GmbH.

## Worth knowing

Each LTS release is fully supported for about 1.5 years, then receives security fixes. After that, fixes come only from the paid extended long-term support program (ELTS) from TYPO3 GmbH.
