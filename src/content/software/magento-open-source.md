---
id: magento-open-source
name: Magento Open Source
urls:
  home: https://magento.com/products/magento-open-source
  repository: https://github.com/magento/magento2
  docs: https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/overview.html
category:
  - e-commerce
description: Open-source PHP e-commerce platform from Adobe, the free base of Adobe Commerce.
status: active
maintainer: Adobe Inc.
maintainerType: company
parent: Adobe
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
contentStore:
  - database
databases:
  - mysql
  - mariadb
headlessApi:
  - rest
  - graphql
templating: phtml, knockout html templates
runsAs:
  - per-request
installMethod: composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition
licenseModel: open-source
license: OSL-3.0, AFL-3.0, OSL-3.0
currentMajor: "2"
latestReleaseDate: 2026-05-12
githubStargazers: 12206
contributors: 255
social:
  forum: https://opensource.magento.com/
wikidata: Q1884012
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://api.github.com/repos/magento/magento2/readme
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/magento/magento2/readme
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/magento/magento2
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/magento/magento2/readme
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://api.github.com/repos/magento/magento2
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://api.github.com/repos/magento/magento2
    checkedAt: 2026-10-18
  - field: parent
    url: https://api.github.com/repos/magento/magento2/readme
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/w/api.php?action=wbsearchentities&search=Magento&language=en&format=json
    checkedAt: 2026-10-18
  - field: category
    url: https://api.github.com/repos/magento/magento2/readme
    checkedAt: 2026-10-18
  - field: language
    url: https://api.github.com/repos/magento/magento2
    checkedAt: 2026-10-18
  - field: runtime
    url: https://experienceleague.adobe.com/en/docs/commerce-operations/installation-guide/system-requirements
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://api.github.com/repos/magento/magento2/contents/composer.json?ref=2.4.9
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://experienceleague.adobe.com/en/docs/commerce-operations/installation-guide/system-requirements
    checkedAt: 2026-10-18
  - field: databases
    url: https://experienceleague.adobe.com/en/docs/commerce-operations/installation-guide/system-requirements
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://developer.adobe.com/commerce/webapi/
    checkedAt: 2026-10-18
  - field: templating
    url: https://developer.adobe.com/commerce/frontend-core/guide/templates/
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://experienceleague.adobe.com/en/docs/commerce-operations/installation-guide/composer
    checkedAt: 2026-10-18
  - field: license
    url: https://api.github.com/repos/magento/magento2/contents/composer.json?ref=2.4.9
    checkedAt: 2026-10-18
  - field: license
    url: https://api.github.com/repos/magento/magento2
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://api.github.com/repos/magento/magento2/readme
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://api.github.com/repos/magento/magento2/releases
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/magento/magento2
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/magento/magento2/contributors
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/overview.html
    checkedAt: 2026-10-19
figure:
  emoji: 🛒
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: PHP · Shop
ai: authored
npmWeeklyDownloads: null
---

Magento Open Source is the free, PHP-based e-commerce platform from Adobe, and the code base that Adobe Commerce builds on. A store runs on MySQL or MariaDB with OpenSearch for search, Valkey for cache, and RabbitMQ or ActiveMQ Artemis as the message queue. The project's README lists these as tested versions. It exposes REST and GraphQL APIs for headless use. Default templates are PHTML files, alongside Knockout HTML templates. The install comes from a Composer repository at repo.magento.com that needs Marketplace access keys, so it is not a public Composer package. Many system functions depend on cron, which `bin/magento cron:install` sets up.

## Worth knowing

The published support schedule is written for Adobe Commerce, and those pages do not name Magento Open Source.
