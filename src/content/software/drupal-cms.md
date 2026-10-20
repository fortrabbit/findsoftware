---
id: drupal-cms
name: Drupal CMS
urls:
  home: https://new.drupal.org/drupal-cms
  repository: https://git.drupalcode.org/project/cms
  docs: https://project.pages.drupalcode.org/drupal_cms/
category:
  - cms
description: Distribution of Drupal core that starts a site with preset recipes, site templates and marketing tools.
status: active
maintainer: Drupal Association
maintainerType: foundation
firstRelease: 2024
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
basedOn:
  - drupal
databases:
  - mariadb
  - mysql
  - postgres
  - sqlite
adminUi: true
runsAs:
  - per-request
installMethod: Drupal CMS launcher, or DDEV for a local environment
licenseModel: open-source
license: GPL-2.0-or-later
currentMajor: "2"
latestReleaseDate: 2026-10-14
packagistDownloads: 110756
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://new.drupal.org/drupal-cms
    checkedAt: 2026-10-20
  - field: urls
    url: https://repo.packagist.org/p2/drupal/cms.json
    checkedAt: 2026-10-20
  - field: urls
    url: https://project.pages.drupalcode.org/drupal_cms/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://project.pages.drupalcode.org/drupal_cms/get-started/install/
    checkedAt: 2026-10-20
  - field: category
    url: https://packagist.org/packages/drupal/cms.json
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://repo.packagist.org/p2/drupal/cms.json
    checkedAt: 2026-10-20
  - field: language
    url: https://repo.packagist.org/p2/drupal/core.json
    checkedAt: 2026-10-20
  - field: runtime
    url: https://repo.packagist.org/p2/drupal/core.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://repo.packagist.org/p2/drupal/core.json
    checkedAt: 2026-10-20
  - field: databases
    url: https://www.drupal.org/docs/getting-started/system-requirements
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://project.pages.drupalcode.org/drupal_cms/get-started/install/
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://www.drupal.org/docs/getting-started/system-requirements
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://new.drupal.org/drupal-cms
    checkedAt: 2026-10-20
  - field: license
    url: https://repo.packagist.org/p2/drupal/cms.json
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://new.drupal.org/drupal-cms
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/drupal/cms.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/drupal/cms.json
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/drupal/cms.json
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/drupal/cms.json
    checkedAt: 2026-10-20
  - field: firstRelease
    url: https://repo.packagist.org/p2/drupal/cms.json
    checkedAt: 2026-10-20
figure:
  emoji: 📝
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

Drupal CMS is a distribution of Drupal core that its Composer package describes as a ready-to-use platform. The package requires Drupal core 11, so the PHP, database and templating facts that apply to a site are the ones on the Drupal record. Sites are started with the Drupal CMS launcher, which creates trial sites, or with DDEV for a local environment.

## Worth knowing

Trial sites from the launcher are temporary. The install guide says a site ready to launch is transferred to a hosting provider, where a domain name is then pointed at it.
