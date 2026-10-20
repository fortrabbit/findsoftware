---
id: redaxo
name: REDAXO
urls:
  home: https://redaxo.org
  repository: https://github.com/redaxo/core
  docs: https://redaxo.org/doku/
  plugins: https://redaxo.org/download/addons/
category:
  - cms
description: PHP content management system that builds sites from categories, articles and content blocks, extended by add-ons.
status: active
maintainer: Yakamara Media GmbH & Co. KG
maintainerType: company
firstRelease: 2004
hqCountry: DE
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
adminUi: true
templating: php
i18n: yes, multi-language sites with languages managed in the backend
runsAs:
  - per-request
renderingModes:
  - server
installMethod: zip download, redaxo loader, command line download, docker
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-10-06
githubStargazers: 354
contributors: 78
pluginCount: 310
wikidata: Q2136131
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://redaxo.org/
    checkedAt: 2026-10-20
  - field: urls
    url: https://redaxo.org/
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/redaxo/core
    checkedAt: 2026-10-20
  - field: urls
    url: https://redaxo.org/doku/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://redaxo.org/cms/impressum/
    checkedAt: 2026-10-20
  - field: hqCountry
    url: https://redaxo.org/cms/impressum/
    checkedAt: 2026-10-20
  - field: firstRelease
    url: https://api.github.com/repos/redaxo/core
    checkedAt: 2026-10-20
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q2136131
    checkedAt: 2026-10-20
  - field: category
    url: https://redaxo.org/
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/redaxo/core
    checkedAt: 2026-10-20
  - field: runtime
    url: https://redaxo.org/download/core/
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://redaxo.org/download/core/
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://repo.packagist.org/p2/redaxo/core.json
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://redaxo.org/doku/main/installation/
    checkedAt: 2026-10-20
  - field: databases
    url: https://redaxo.org/doku/main/installation/
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://redaxo.org/
    checkedAt: 2026-10-20
  - field: templating
    url: https://redaxo.org/doku/main/templates/
    checkedAt: 2026-10-20
  - field: i18n
    url: https://redaxo.org/doku/main/mehrsprachigkeit/
    checkedAt: 2026-10-20
  - field: renderingModes
    url: https://redaxo.org/doku/main/templates/
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://redaxo.org/download/core/
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://redaxo.org/doku/main/installation/
    checkedAt: 2026-10-20
  - field: license
    url: https://redaxo.org/cms/lizenz/
    checkedAt: 2026-10-20
  - field: license
    url: https://repo.packagist.org/p2/redaxo/core.json
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://redaxo.org/cms/lizenz/
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/redaxo/core.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/redaxo/core.json
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/redaxo/core
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/redaxo/core/contributors
    checkedAt: 2026-10-20
  - field: urls
    url: https://redaxo.org/download/addons/
    checkedAt: 2026-10-20
  - field: pluginCount
    url: https://redaxo.org/download/addons/
    checkedAt: 2026-10-20
figure:
  emoji: 📝
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

REDAXO is a PHP content management system with a backend that editors use to manage the site. Article output follows templates, which define the HTML structure of each article and support PHP code and REDAXO variables. Content is stored in a MySQL or MariaDB database that the installer needs empty at the start. Add-ons extend the system, and the project lists them in a public directory.

Installation uses a ZIP download, the REDAXO loader script, a command-line download, or a Docker image. Apache works with the .htaccess files REDAXO ships. On nginx, the site needs its own rules to deny web access to the src, data, cache and bin folders under /redaxo.

## Worth knowing

REDAXO 5 and later is MIT-licensed, and the license page adds a condition: the backend must link to redaxo.org and show the REDAXO logo.
