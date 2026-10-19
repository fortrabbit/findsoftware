---
id: sylius
name: Sylius
urls:
  home: https://sylius.com
  repository: https://github.com/Sylius/Sylius
  docs: https://docs.sylius.com/public
  pricing: https://sylius.com/plus/
  plugins: https://store.sylius.com/
category:
  - e-commerce
  - framework
description: Headless open-source e-commerce framework built on Symfony, Doctrine and API Platform.
status: active
maintainer: Sylius
maintainerType: company
firstRelease: 2017
hqCountry: PL
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
  - mysql
  - mariadb
  - postgres
adminUi: true
headlessApi:
  - rest
templating: twig
installMethod: composer create-project sylius/sylius-standard, docker via Sylius-Standard make init
licenseModel: open-core
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-14
githubStargazers: 8560
contributors: 324
social:
  x: https://twitter.com/Sylius
wikidata: Q97379963
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://sylius.com/
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/Sylius/Sylius
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/Sylius/Sylius
    checkedAt: 2026-10-18
  - field: urls
    url: https://docs.sylius.com/public
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://docs.sylius.com/public/open-source/release-cycle.md
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://sylius.com/
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://sylius.com/plus/
    checkedAt: 2026-10-18
  - field: hqCountry
    url: https://sylius.com/
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/w/api.php?action=wbsearchentities&search=Sylius&language=en&format=json
    checkedAt: 2026-10-18
  - field: category
    url: https://sylius.com/
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://repo.packagist.org/p2/sylius/sylius.json
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://api.github.com/repos/Sylius/Sylius-Standard/readme
    checkedAt: 2026-10-18
  - field: language
    url: https://api.github.com/repos/Sylius/Sylius
    checkedAt: 2026-10-18
  - field: runtime
    url: https://docs.sylius.com/public/getting-started/before-you-begin.md
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/sylius/sylius.json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://docs.sylius.com/public/getting-started/before-you-begin.md
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://docs.sylius.com/public/getting-started/before-you-begin.md
    checkedAt: 2026-10-18
  - field: databases
    url: https://docs.sylius.com/public/getting-started/before-you-begin.md
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://docs.sylius.com/public/getting-started/before-you-begin.md
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://api.github.com/repos/Sylius/Sylius-Standard/readme
    checkedAt: 2026-10-18
  - field: templating
    url: https://repo.packagist.org/p2/sylius/sylius.json
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://docs.sylius.com/public/getting-started/sylius-ce-installation.md
    checkedAt: 2026-10-18
  - field: license
    url: https://api.github.com/repos/Sylius/Sylius
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://sylius.com/plus/
    checkedAt: 2026-10-18
  - field: urls
    url: https://sylius.com/plus/
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://api.github.com/repos/Sylius/Sylius/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/Sylius/Sylius
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/Sylius/Sylius/contributors
    checkedAt: 2026-10-18
  - field: urls
    url: https://sylius.com/plugins/
    checkedAt: 2026-10-18
figure:
  emoji: 🛒
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: PHP · Shop
ai: authored
npmWeeklyDownloads: null
---

Sylius is a headless e-commerce framework built on Symfony, Doctrine and API Platform. It provides a REST API and an admin panel based on Symfony Forms. Templates use Twig, and the front-end assets are built with Node.js and npm. Sylius, a company based in Poland, maintains the project. Its commercial Sylius Plus edition adds modules such as B2B, marketplace, RMA and multi-source inventory, with SLA support. The install uses the Sylius-Standard project template through Composer.

## Worth knowing

The core runs on *nix systems, and Windows is supported only through WSL. Sylius Plus pricing depends on the modules chosen and on gross merchandise value.
