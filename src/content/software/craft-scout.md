---
id: craft-scout
name: Scout for Craft CMS
urls:
  repository: https://github.com/studioespresso/craft-scout
  docs: https://github.com/studioespresso/craft-scout/blob/v6/README.md
  plugins: https://plugins.craftcms.com/scout
category:
  - search
description: Craft CMS plugin that keeps Algolia full-text search indexes in sync with Craft entries.
status: active
maintainer: Studio Espresso
firstRelease: 2017
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
basedOn:
  - craft-cms
installMethod: composer require, php craft plugin/install scout
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-07-28
githubStargazers: 80
packagistDownloads: 151365
contributors: 30
dependentRepos: 2
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/studioespresso/craft-scout
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/studioespresso/craft-scout/blob/v6/README.md
    checkedAt: 2026-10-28
  - field: urls
    url: https://plugins.craftcms.com/scout
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/studioespresso/craft-scout/blob/v6/LICENSE.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://repo.packagist.org/p2/studioespresso/craft-scout.json
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/studioespresso/craft-scout
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/studioespresso/craft-scout/blob/6.0.0/composer.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/studioespresso/craft-scout/blob/6.0.0/composer.json
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/studioespresso/craft-scout/blob/v6/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/studioespresso/craft-scout/blob/v6/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/studioespresso/craft-scout/blob/v6/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/studioespresso/craft-scout
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/studioespresso/craft-scout/blob/v6/LICENSE.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/studioespresso/craft-scout/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/studioespresso/craft-scout/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/studioespresso/craft-scout
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/studioespresso/craft-scout/contributors
    checkedAt: 2026-10-28
  - field: packagistDownloads
    url: https://packagist.org/packages/studioespresso/craft-scout.json
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/studioespresso%2Fcraft-scout
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

Scout for Craft CMS is a Craft plugin that adds full-text search to Craft entries. It keeps Algolia search indexes in sync with the entries, and each index is defined in the site's config file with an element type, a criteria function and a transformer for the data sent to Algolia.

The plugin is installed with Composer into a Craft project and then activated from the Craft command line. Studio Espresso maintains it.

## Worth knowing

Search runs on Algolia, a hosted service: the configuration takes an Algolia application ID and admin API key, so an Algolia account is needed for indexing and search.
