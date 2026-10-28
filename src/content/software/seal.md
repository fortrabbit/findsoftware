---
id: seal
name: SEAL
urls:
  home: https://php-cmsig.github.io/search/
  repository: https://github.com/PHP-CMSIG/search
  docs: https://php-cmsig.github.io/search/getting-started/index.html
category:
  - search
description: PHP library that gives one interface for adding, removing and searching documents across several search engines.
status: active
maintainer: Alexander Schranz
firstRelease: 2023
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
installMethod: composer require
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-15
githubStargazers: 443
packagistDownloads: 547754
contributors: 28
dependentPackages: 41
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://php-cmsig.github.io/search/index.html
    checkedAt: 2026-10-28
  - field: urls
    url: https://php-cmsig.github.io/search/getting-started/index.html
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/PHP-CMSIG/search
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/PHP-CMSIG/seal/blob/0.12.19/composer.json
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://repo.packagist.org/p2/cmsig/seal.json
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/PHP-CMSIG/search
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/PHP-CMSIG/seal/blob/0.12.19/composer.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/PHP-CMSIG/seal/blob/0.12.19/composer.json
    checkedAt: 2026-10-28
  - field: category
    url: https://php-cmsig.github.io/search/index.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://php-cmsig.github.io/search/getting-started/index.html
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/PHP-CMSIG/search
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/PHP-CMSIG/seal/blob/0.12/LICENSE
    checkedAt: 2026-10-28
  - field: packagistDownloads
    url: https://packagist.org/packages/cmsig/seal.json
    checkedAt: 2026-10-28
  - field: packagistDownloads
    url: https://packagist.org/packages/cmsig/seal.json
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packagist.org/packages/cmsig/seal.json
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://repo.packagist.org/p2/cmsig/seal.json
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/cmsig/seal.json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/PHP-CMSIG/search
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/PHP-CMSIG/search/contributors?per_page=1
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

SEAL is a PHP library that gives one interface for adding, removing and searching documents across several search engines. A schema defines the indexes and their fields, an engine object runs the operations, and an adapter package connects the engine to each search service. The introduction names Loupe, Meilisearch, Algolia, Elasticsearch, OpenSearch, RediSearch, Solr and Typesense as the supported engines. The library is installed with Composer, and at least one adapter is required next to it.

The data is kept by the search engine the adapter talks to, not by SEAL itself. The framework integrations for Laravel, Symfony, Spiral, Mezzio and Yii are separate packages that wrap the core.

## Worth knowing

The README states that the project is heavily under development. The Composer package is split from the cmsig/search repository, where development happens and issues are tracked.
