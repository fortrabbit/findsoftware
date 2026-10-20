---
id: drupal
name: Drupal
urls:
  home: https://www.drupal.org
  repository: https://github.com/drupal/drupal
  docs: https://www.drupal.org/docs
  plugins: https://www.drupal.org/project/project_module
category:
  - cms
  - framework
description: Open-source PHP content management system and framework built on Symfony components, with Twig theming and core JSON:API and REST modules.
status: active
maintainer: Drupal community, supported by the Drupal Association
maintainerType: community
firstRelease: 2001
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
basedOn:
  - symfony
contentStore:
  - database
databases:
  - mariadb
  - mysql
  - postgres
  - sqlite
adminUi: true
headlessApi:
  - rest
templating: twig
i18n: yes, built-in translation modules
runsAs:
  - per-request
renderingModes:
  - server
installMethod: composer create-project drupal/recommended-project, Drupal CMS desktop app, ddev
licenseModel: open-source
license: GPL-2.0-or-later, GPL
currentMajor: "11"
latestReleaseDate: 2026-10-14
githubStargazers: 4292
pluginCount: 39446
wikidata: Q170855
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://www.drupal.org/about
    checkedAt: 2026-10-18
  - field: urls
    url: https://www.drupal.org/about
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/drupal/drupal
    checkedAt: 2026-10-18
  - field: urls
    url: https://www.drupal.org/docs/getting-started/system-requirements
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://www.drupal.org/about/history
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://www.drupal.org/about
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://www.drupal.org/about
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q170855
    checkedAt: 2026-10-18
  - field: category
    url: https://new.drupal.org/download
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://repo.packagist.org/p2/drupal/core.json
    checkedAt: 2026-10-18
  - field: language
    url: https://www.drupal.org/docs/getting-started/system-requirements/php-requirements
    checkedAt: 2026-10-18
  - field: runtime
    url: https://www.drupal.org/docs/getting-started/system-requirements/php-requirements
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/drupal/core.json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://www.drupal.org/docs/getting-started/system-requirements/php-requirements
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://www.drupal.org/docs/getting-started/system-requirements
    checkedAt: 2026-10-18
  - field: databases
    url: https://www.drupal.org/docs/getting-started/system-requirements/database-server-requirements
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://new.drupal.org/download
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module
    checkedAt: 2026-10-18
  - field: templating
    url: https://www.drupal.org/docs/develop/theming-drupal
    checkedAt: 2026-10-18
  - field: i18n
    url: https://www.drupal.org/docs/multilingual-guide
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://www.drupal.org/docs/develop/theming-drupal
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://new.drupal.org/download
    checkedAt: 2026-10-18
  - field: license
    url: https://packagist.org/packages/drupal/core.json
    checkedAt: 2026-10-18
  - field: license
    url: https://www.drupal.org/about
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://www.drupal.org/about
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://repo.packagist.org/p2/drupal/core.json
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/drupal/core.json
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/drupal/drupal
    checkedAt: 2026-10-18
  - field: urls
    url: https://www.drupal.org/api-d7/node.json?type=project_module&field_project_type=full&limit=1
    checkedAt: 2026-10-18
  - field: pluginCount
    url: https://www.drupal.org/api-d7/node.json?type=project_module&field_project_type=full&limit=1
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://www.drupal.org/docs/getting-started/system-requirements
    checkedAt: 2026-10-19
figure:
  emoji: 📝
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

Drupal is an open-source PHP content management system and framework built on Symfony components. Content is stored in a database, and pages are themed with Twig. The admin interface runs in the browser. Core ships JSON:API and REST modules for headless use, and one codebase can serve several sites. Two starting points are documented: Drupal CMS, a distribution, and Drupal core, installed with Composer. Extensions are modules published on drupal.org. The project is community-driven and supported by the Drupal Association, a non-profit.

## Worth knowing

Each older minor of core loses security support when a newer minor ships, so an installed site has to follow the minor releases. PostgreSQL needs the `pg_trgm` extension.
