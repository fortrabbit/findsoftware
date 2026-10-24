---
id: mage-os
name: Mage-OS
urls:
  home: https://mage-os.org
  repository: https://github.com/mage-os/mageos-magento2
  docs: https://devdocs.mage-os.org
category:
  - e-commerce
description: Community-owned open-source PHP e-commerce platform built on the Magento Open Source codebase.
status: active
maintainer: Mage-OS Association
maintainerType: foundation
hqCountry: PL
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
basedOn:
  - magento-open-source
databases:
  - mysql
  - mariadb
adminUi: true
runsAs:
  - per-request
  - scheduled
installMethod: composer create-project --repository-url=https://repo.mage-os.org/ mage-os/project-community-edition
licenseModel: open-source
license: OSL-3.0, OSL 3.0 for application code, AFL 3.0 for static assets, themes and translations
currentMajor: "3"
latestReleaseDate: 2026-10-15
githubStargazers: 321
contributors: 3199
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://mage-os.org
    checkedAt: 2026-10-20
  - field: urls
    url: https://mage-os.org
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/mage-os/mageos-magento2
    checkedAt: 2026-10-20
  - field: urls
    url: https://devdocs.mage-os.org
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://mage-os.org/imprint
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://mage-os.org/imprint
    checkedAt: 2026-10-20
  - field: hqCountry
    url: https://mage-os.org/imprint
    checkedAt: 2026-10-20
  - field: category
    url: https://mage-os.org/about
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://mage-os.org/about
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/mage-os/mageos-magento2
    checkedAt: 2026-10-20
  - field: runtime
    url: https://mage-os.org/get-started/installation
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://mage-os.org/get-started/installation
    checkedAt: 2026-10-20
  - field: databases
    url: https://mage-os.org/get-started/installation
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://mage-os.org/about
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://mage-os.org/get-started/installation
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://mage-os.org/get-started/installation
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/mage-os/mageos-magento2
    checkedAt: 2026-10-20
  - field: license
    url: https://mage-os.org/terms
    checkedAt: 2026-10-20
  - field: license
    url: https://mage-os.org/terms
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://mage-os.org/terms
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.mage-os.org/p2/mage-os/project-community-edition.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/mage-os/mageos-magento2/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/mage-os/mageos-magento2
    checkedAt: 2026-10-20
  - field: contributors
    url: https://github.com/mage-os/mageos-magento2
    checkedAt: 2026-10-20
ai: authored
npmWeeklyDownloads: null
---

Mage-OS is an e-commerce platform forked from the Magento core, which its about page calls a community-driven alternative to Magento Open Source. A store is created with Composer from the `mage-os/project-community-edition` project on the Mage-OS package repository, as the [installation guide](https://mage-os.org/get-started/installation) describes.

## Worth knowing

A store needs a search engine, OpenSearch or Elasticsearch, next to the database and web server. Scheduled tasks for indexing, email sending and cache management are required, so the host has to start scheduled jobs as well as serve PHP.
