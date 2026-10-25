---
id: prestashop
name: PrestaShop
urls:
  home: https://www.prestashop-project.org/
  repository: https://github.com/PrestaShop/PrestaShop
  docs: https://devdocs.prestashop-project.org/9/
category:
  - e-commerce
description: Open-source PHP e-commerce platform for building and running online stores.
status: active
maintainer: PrestaShop S.A
maintainerType: company
parent: PrestaShop SA
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
basedOn:
  - symfony
contentStore:
  - database
databases:
  - mysql
  - mariadb
headlessApi:
  - rest
installMethod: zip release package with web installer, cli installer, docker, git clone
licenseModel: open-source
license: OSL-3.0
currentMajor: "9"
latestReleaseDate: 2026-09-30
githubStargazers: 9226
packagistDownloads: 24164
contributors: 257
packagistMonthlyDownloads: 4029
httpArchiveSites: 49565
dependentRepos: 2
wikidata: Q1080982
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://www.prestashop-project.org/
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/PrestaShop/PrestaShop
    checkedAt: 2026-10-18
  - field: urls
    url: https://www.prestashop-project.org/
    checkedAt: 2026-10-18
  - field: urls
    url: https://devdocs.prestashop-project.org/9/basics/installation/
    checkedAt: 2026-10-18
  - field: parent
    url: https://www.prestashop-project.org/
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://www.prestashop.com/en
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://www.prestashop.com/en
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/w/api.php?action=wbsearchentities&search=PrestaShop&language=en&format=json
    checkedAt: 2026-10-18
  - field: category
    url: https://www.prestashop-project.org/
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://devdocs.prestashop-project.org/9/development/architecture/
    checkedAt: 2026-10-18
  - field: language
    url: https://api.github.com/repos/PrestaShop/PrestaShop
    checkedAt: 2026-10-18
  - field: runtime
    url: https://devdocs.prestashop-project.org/9/basics/installation/system-requirements/
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/prestashop/prestashop.json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://build.prestashop-project.org/news/2026/prestashop-9-2-0-available/
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://devdocs.prestashop-project.org/9/basics/installation/system-requirements/
    checkedAt: 2026-10-18
  - field: databases
    url: https://devdocs.prestashop-project.org/9/basics/installation/system-requirements/
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://devdocs.prestashop-project.org/9/admin-api/
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://devdocs.prestashop-project.org/9/basics/installation/
    checkedAt: 2026-10-18
  - field: license
    url: https://api.github.com/repos/PrestaShop/PrestaShop/contents/composer.json?ref=9.2.0
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/PrestaShop/PrestaShop/blob/develop/LICENSE.md
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://www.prestashop.com/en
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://api.github.com/repos/PrestaShop/PrestaShop/releases/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://api.github.com/repos/PrestaShop/PrestaShop/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/PrestaShop/PrestaShop
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/PrestaShop/PrestaShop/contributors
    checkedAt: 2026-10-18
  - field: packagistDownloads
    url: https://packagist.org/packages/prestashop/prestashop.json
    checkedAt: 2026-10-18
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-25
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/prestashop%2Fprestashop
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/prestashop/prestashop/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

PrestaShop is a PHP platform for online stores whose code is being migrated to Symfony step by step. Multistore lets one installation run several shops. It offers an admin API built on API Platform and a web service API. The default theme is Hummingbird. PrestaShop SA maintains the project and also offers a hosted store. The bundled modules are under AFL-3.0, separate from the OSL-3.0 core.

## Worth knowing

Release packages are no longer built or published on GitHub. Downloads are on the company's versions page.
