---
id: neos
name: Neos
urls:
  home: https://www.neos.io
  repository: https://github.com/neos/neos-development-collection
  docs: https://docs.neos.io/guide/installation-development-setup
  plugins: https://www.neos.io/download-and-extend/packages.html
category:
  - cms
  - framework
description: Open-source content management system and application framework for websites and digital content, built on the Flow PHP framework.
status: active
maintainer: Neos Foundation e.V.
maintainerType: foundation
hqCountry: DE
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.4
basedOn:
  - flow
adminUi: true
templating: fluid
i18n: yes
runsAs:
  - per-request
installMethod: docker, ddev, manual
licenseModel: open-source
license: GPL-3.0, GPL-3.0-or-later
currentMajor: "9"
latestReleaseDate: 2026-10-09
githubStargazers: 265
packagistDownloads: 1085126
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://api.github.com/repos/neos/neos-development-collection
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/neos/neos-development-collection
    checkedAt: 2026-10-20
  - field: urls
    url: https://docs.neos.io/guide/installation-development-setup
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://www.neos.io/footer-content/imprint.html
    checkedAt: 2026-10-20
  - field: hqCountry
    url: https://www.neos.io/community/neos-foundation-ev.html
    checkedAt: 2026-10-20
  - field: category
    url: https://www.neos.io/
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://raw.githubusercontent.com/neos/neos-development-collection/master/composer.json
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/neos/neos-development-collection
    checkedAt: 2026-10-20
  - field: runtime
    url: https://docs.neos.io/guide/installation-development-setup/system-requirements
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://repo.packagist.org/p2/neos/neos.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://docs.neos.io/guide/installation-development-setup/system-requirements
    checkedAt: 2026-10-20
  - field: templating
    url: https://raw.githubusercontent.com/neos/neos-development-collection/master/composer.json
    checkedAt: 2026-10-20
  - field: i18n
    url: https://www.neos.io/
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://www.neos.io/
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://docs.neos.io/guide/installation-development-setup
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://docs.neos.io/guide/installation-development-setup/system-requirements
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/neos/neos-development-collection
    checkedAt: 2026-10-20
  - field: license
    url: https://raw.githubusercontent.com/neos/neos-development-collection/master/composer.json
    checkedAt: 2026-10-20
  - field: license
    url: https://repo.packagist.org/p2/neos/neos.json
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://api.github.com/repos/neos/neos-development-collection/releases/latest
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/neos/neos-development-collection/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/neos/neos-development-collection
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/neos/neos.json
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/neos/neos.json
    checkedAt: 2026-10-20
  - field: urls
    url: https://www.neos.io/
    checkedAt: 2026-10-20
figure:
  emoji: 📝
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

Neos is a content management system and application framework built on the Flow framework. Editors work in an inline editor on the page itself, and one installation can serve several languages and several sites. The project lists role management among its features.

The [installation guide](https://docs.neos.io/guide/installation-development-setup) describes Docker, DDEV and manual development setups. Production runs behind Apache or Nginx.

## Worth knowing

Neos precompiles classes with PHP, so the PHP command-line version has to match the web server's PHP version. Without that match it does not work.
