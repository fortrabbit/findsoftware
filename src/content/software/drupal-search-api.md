---
id: drupal-search-api
name: Search API
urls:
  home: https://www.drupal.org/project/search_api
  repository: https://git.drupalcode.org/project/search_api
  docs: https://www.drupal.org/docs/contributed-modules/search-api
  plugins: https://www.drupal.org/project/search_api/ecosystem
category:
  - search
description: Drupal module that provides a framework for creating searches on Drupal entities, backed by a search server or Drupal's own database.
status: active
maintainer: drunken monkey
firstRelease: 2010
language: php
runtime:
  - php
hosting:
  - php
basedOn:
  - drupal
installMethod: composer
licenseModel: open-source
license: GPL-2.0-or-later
currentMajor: "1"
latestReleaseDate: 2026-10-11
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://www.drupal.org/project/search_api
    checkedAt: 2026-10-28
  - field: urls
    url: https://www.drupal.org/project/search_api
    checkedAt: 2026-10-28
  - field: urls
    url: https://www.drupal.org/project/search_api
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://www.drupal.org/project/search_api
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://updates.drupal.org/release-history/search_api/7.x
    checkedAt: 2026-10-28
  - field: category
    url: https://www.drupal.org/project/search_api
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://www.drupal.org/project/search_api
    checkedAt: 2026-10-28
  - field: language
    url: https://packages.drupal.org/files/packages/8/p2/drupal/search_api.json
    checkedAt: 2026-10-28
  - field: runtime
    url: https://packages.drupal.org/files/packages/8/p2/drupal/search_api.json
    checkedAt: 2026-10-28
  - field: license
    url: https://git.drupalcode.org/project/search_api/-/raw/8.x-1.42/composer.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.drupal.org/project/search_api
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://updates.drupal.org/release-history/search_api/8.x
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://updates.drupal.org/release-history/search_api/8.x
    checkedAt: 2026-10-28
  - field: urls
    url: https://www.drupal.org/project/search_api
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
npmWeeklyDownloads: null
---

Search API is a Drupal module that builds searches over any entity Drupal knows, using whichever search engine a site connects to it. A site builder defines an index of entity fields in Drupal and sends its content to a backend module. The project names Apache Solr and Elasticsearch as backends for larger sites and includes a Database search module that indexes and searches content in Drupal's own database. Search results can be shown with the Views module, and faceted search uses the Facets module.

The module is installed with Composer like other Drupal modules, and it is developed on [drupal.org](https://www.drupal.org/project/search_api) with its source on [git.drupalcode.org](https://git.drupalcode.org/project/search_api).

## Worth knowing

The Database search backend is meant for testing and for smaller sites, and the project page points larger sites to Solr or Elasticsearch. Search API does not restrict access on its own. The site owner has to index and display only items the visitor may see, and the project offers node access checks as one way to do that.
