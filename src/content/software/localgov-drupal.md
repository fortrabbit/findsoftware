---
id: localgov-drupal
name: LocalGov Drupal
urls:
  home: https://localgovdrupal.org
  repository: https://git.drupalcode.org/project/localgov
  docs: https://docs.localgovdrupal.org/
category:
  - cms
description: Drupal distribution and install profile for building public-facing websites for UK councils.
status: active
maintainer: Open Digital Cooperative Ltd
maintainerType: company
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
basedOn:
  - drupal
installMethod: composer create-project drupal/localgov_project:^4.0
licenseModel: open-source
license: GPL-2.0-or-later
currentMajor: "4"
latestReleaseDate: 2026-09-14
packagistDownloads: 20009
packagistMonthlyDownloads: 3650
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://localgovdrupal.org
    checkedAt: 2026-10-20
  - field: urls
    url: https://localgovdrupal.org
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://localgovdrupal.org/localgov-drupal-subscriber-and-membership-terms-and-conditions
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://localgovdrupal.org/localgov-drupal-subscriber-and-membership-terms-and-conditions
    checkedAt: 2026-10-20
  - field: description
    url: https://www.drupal.org/project/localgov
    checkedAt: 2026-10-20
  - field: category
    url: https://www.drupal.org/project/localgov
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/localgovdrupal/localgov
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/localgovdrupal/localgov/blob/3.x/composer.json
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://project.pages.drupalcode.org/localgov_docs/legacy-documentation/deploying-localgov-drupal/installing-and-deploying-lgd/
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://github.com/localgovdrupal/localgov/blob/3.x/LICENSE
    checkedAt: 2026-10-20
  - field: urls
    url: https://repo.packagist.org/p2/drupal/localgov.json
    checkedAt: 2026-10-20
  - field: urls
    url: https://docs.localgovdrupal.org/
    checkedAt: 2026-10-20
  - field: license
    url: https://repo.packagist.org/p2/drupal/localgov.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://repo.packagist.org/p2/drupal/localgov.json
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://www.drupal.org/project/localgov
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/drupal/localgov.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/drupal/localgov.json
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/drupal/localgov.json
    checkedAt: 2026-10-20
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/drupal/localgov/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

LocalGov Drupal is a Drupal install profile that UK councils use for their public websites. A new site is scaffolded with Composer from the `localgov_project` template, as the [installation docs](https://project.pages.drupalcode.org/localgov_docs/legacy-documentation/deploying-localgov-drupal/installing-and-deploying-lgd/) show.

Open Digital Cooperative Ltd, a multi-stakeholder co-operative registered as a company limited by guarantee, governs the project, and the homepage counts the council sites and microsites built on it.

## Worth knowing

The GitHub repository is marked archived and points to the drupal.org project, which is the current home. The Composer package moved from `localgovdrupal/localgov` to `drupal/localgov`.
