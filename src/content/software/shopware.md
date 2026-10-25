---
id: shopware
name: Shopware
urls:
  home: https://www.shopware.com
  repository: https://github.com/shopware/shopware
  docs: https://developer.shopware.com/docs/
  pricing: https://www.shopware.com/en/pricing/
  plugins: https://store.shopware.com/en/extensions/
category:
  - e-commerce
description: Open-source e-commerce platform built on Symfony and Vue.js, with a Twig storefront, an administration panel and APIs for headless frontends.
status: active
maintainer: shopware AG
maintainerType: company
hqCountry: DE
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
basedOn:
  - symfony
  - vue
contentStore:
  - database
databases:
  - mysql
  - mariadb
adminUi: true
headlessApi:
  - rest
templating: twig
i18n: yes, per sales-channel domain language, currency and snippet set
renderingModes:
  - server
  - api-only
installMethod: shopware-cli project create, docker via shopware-cli, local php and composer via shopware-cli
licenseModel: open-core
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-10-07
githubStargazers: 3450
packagistDownloads: 6294025
contributors: 267
pluginCount: 3100
packagistMonthlyDownloads: 246162
httpArchiveSites: 8649
dependentRepos: 298
dependentPackages: 216
social:
  discord: https://chat.shopware.com
  forum: https://forum.shopware.com
wikidata: Q1805797
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://www.shopware.com/en/
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/shopware/shopware
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/shopware/shopware
    checkedAt: 2026-10-18
  - field: urls
    url: https://developer.shopware.com/docs/guides/installation/
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://www.shopware.com/en/company/
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://www.shopware.com/en/company/
    checkedAt: 2026-10-18
  - field: hqCountry
    url: https://www.shopware.com/en/company/
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/w/api.php?action=wbsearchentities&search=Shopware&language=en&format=json
    checkedAt: 2026-10-18
  - field: category
    url: https://developer.shopware.com/docs/concepts/framework/architecture/
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://api.github.com/repos/shopware/shopware
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://developer.shopware.com/docs/concepts/framework/architecture/
    checkedAt: 2026-10-18
  - field: language
    url: https://api.github.com/repos/shopware/shopware
    checkedAt: 2026-10-18
  - field: runtime
    url: https://developer.shopware.com/docs/guides/hosting/
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/shopware/core.json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://developer.shopware.com/docs/guides/hosting/
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://developer.shopware.com/docs/guides/hosting/
    checkedAt: 2026-10-18
  - field: databases
    url: https://developer.shopware.com/docs/guides/hosting/
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://developer.shopware.com/docs/concepts/framework/architecture/administration-concept.html
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://developer.shopware.com/docs/concepts/api/store-api.html
    checkedAt: 2026-10-18
  - field: templating
    url: https://developer.shopware.com/docs/concepts/framework/architecture/storefront-concept.html
    checkedAt: 2026-10-18
  - field: i18n
    url: https://developer.shopware.com/docs/concepts/commerce/catalog/sales-channels.html
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://developer.shopware.com/docs/concepts/framework/architecture/
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://developer.shopware.com/docs/guides/installation/
    checkedAt: 2026-10-18
  - field: license
    url: https://api.github.com/repos/shopware/shopware
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://www.shopware.com/en/pricing/
    checkedAt: 2026-10-18
  - field: urls
    url: https://www.shopware.com/en/pricing/
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://api.github.com/repos/shopware/shopware/releases/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://api.github.com/repos/shopware/shopware/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/shopware/shopware
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/shopware/shopware/contributors
    checkedAt: 2026-10-18
  - field: packagistDownloads
    url: https://packagist.org/packages/shopware/core.json
    checkedAt: 2026-10-18
  - field: urls
    url: https://store.shopware.com/en/extensions/
    checkedAt: 2026-10-18
  - field: pluginCount
    url: https://api.github.com/repos/shopware/shopware
    checkedAt: 2026-10-18
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-25
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/shopware%2Fcore
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/shopware%2Fcore
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/shopware/core/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Shopware is an e-commerce platform built on Symfony, with a Twig storefront, a Vue.js administration panel, and a Store API and Admin API for headless frontends. One installation can run several sales channels, each with its own domains, languages, currencies and snippet sets. Search, cache and message transports can run on OpenSearch, Elasticsearch, Redis, Valkey or RabbitMQ. Scheduled tasks need a worker or cron that runs the scheduled task command. shopware AG maintains the platform and offers paid editions that add features on top of the Community Edition. The Shopware Frontends toolkit provides the official Vue and Nuxt based headless storefront.

## Worth knowing

The Community Edition software stays usable at any revenue, but its Fair Usage Policy requires a paid plan for Shopware Account and Store access once gross merchandise value passes a set threshold.
