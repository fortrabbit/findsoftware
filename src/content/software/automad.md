---
id: automad
name: Automad
urls:
  home: https://automad.org
  repository: https://github.com/marcantondahmen/automad
  docs: https://automad.org/getting-started
  plugins: https://packages.automad.org
category:
  - cms
description: Flat-file content management system and template engine, written in PHP, that stores content in text files without a database.
status: active
maintainer: Marc Anton Dahmen
maintainerType: individual
firstRelease: 2013
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
contentStore:
  - flat-file
adminUi: true
templating: Automad template language
i18n: dashboard available in several languages
runsAs:
  - per-request
renderingModes:
  - server
installMethod: composer create-project
licenseModel: open-core
license: O'Saasy License Agreement, MIT
currentMajor: "1"
latestReleaseDate: 2024-02-19
githubStargazers: 944
packagistDownloads: 19111
contributors: 1
social:
  x: https://twitter.com/automadcms
  forum: https://github.com/orgs/automadcms/discussions
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: name
    url: https://automad.org/
    checkedAt: 2026-10-24
  - field: urls
    url: https://automad.org/
    checkedAt: 2026-10-24
  - field: urls
    url: https://api.github.com/repos/marcantondahmen/automad
    checkedAt: 2026-10-24
  - field: urls
    url: https://automad.org/getting-started
    checkedAt: 2026-10-24
  - field: category
    url: https://automad.org/
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://github.com/marcantondahmen/automad/blob/master/LICENSE.md
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://api.github.com/repos/marcantondahmen/automad/commits/0.1
    checkedAt: 2026-10-24
  - field: language
    url: https://automad.org/getting-started
    checkedAt: 2026-10-24
  - field: runtime
    url: https://automad.org/getting-started
    checkedAt: 2026-10-24
  - field: runtimeMin
    url: https://automad.org/getting-started
    checkedAt: 2026-10-24
  - field: contentStore
    url: https://automad.org/
    checkedAt: 2026-10-24
  - field: adminUi
    url: https://automad.org/
    checkedAt: 2026-10-24
  - field: templating
    url: https://automad.org/
    checkedAt: 2026-10-24
  - field: renderingModes
    url: https://automad.org/
    checkedAt: 2026-10-24
  - field: i18n
    url: https://automad.org/system
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://automad.org/getting-started
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://automad.org/getting-started
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://automad.org/getting-started
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://automad.org/getting-started
    checkedAt: 2026-10-24
  - field: license
    url: https://github.com/marcantondahmen/automad/blob/master/LICENSE.md
    checkedAt: 2026-10-24
  - field: license
    url: https://automad.org/getting-started/terms-of-use
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/automad/automad.json
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://api.github.com/repos/marcantondahmen/automad/releases
    checkedAt: 2026-10-24
  - field: packagistDownloads
    url: https://packagist.org/packages/automad/automad.json
    checkedAt: 2026-10-24
  - field: packagistDownloads
    url: https://packagist.org/packages/automad/automad.json
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/marcantondahmen/automad
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/marcantondahmen/automad/contributors
    checkedAt: 2026-10-24
  - field: urls
    url: https://automad.org/
    checkedAt: 2026-10-24
ai: authored
npmWeeklyDownloads: null
---

Automad keeps pages in human-readable text files, so a site needs no database. Its browser-based dashboard includes a block editor and an in-page edit mode, and templates are written in Automad's own template language and rendered on the fly. The [getting started guide](https://automad.org/getting-started) covers installation with Docker, with Composer or by uploading the distribution bundle, and asks for PHP 8.2 or newer with the gd, curl and zip modules. The dashboard is available in several languages.

## Worth knowing

The repository license is the O'Saasy License Agreement, which forbids offering the software as a hosted or SaaS product where its main value is the software itself. The terms-of-use page says MIT and the homepage says open-source. The guide says version 1 is no longer supported, and its Composer command installs the 2.0 line, which is in beta and described there as stable and safe for production use. The terms of use state that a minimum of telemetry data is transmitted: the domain name, the Automad version and the server type.
