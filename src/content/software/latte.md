---
id: latte
name: Latte
urls:
  home: https://latte.nette.org
  repository: https://github.com/nette/latte
  docs: https://latte.nette.org/en/develop
category:
  - library
description: PHP templating engine that compiles templates into PHP code and escapes output according to the HTML context it appears in.
status: active
maintainer: David Grudl
firstRelease: 2014
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
i18n: translation tags and a translate filter through a translator extension
installMethod: composer
licenseModel: open-source
license: BSD-3-Clause, GPL-2.0-only, GPL-3.0-only
currentMajor: "3"
latestReleaseDate: 2026-10-22
githubStargazers: 1297
packagistDownloads: 17391354
contributors: 50
social:
  x: https://twitter.com/nettefw
  discord: https://discord.gg/azXxTbuQVq
  forum: https://forum.nette.org/en/
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://latte.nette.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/nette/latte
    checkedAt: 2026-11-16
  - field: urls
    url: https://latte.nette.org/en/develop
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/nette/latte/blob/master/license.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/nette/latte/releases?per_page=100
    checkedAt: 2026-11-16
  - field: category
    url: https://latte.nette.org/
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/nette/latte
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/nette/latte/blob/v3.1.7/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/nette/latte/blob/v3.1.7/composer.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://latte.nette.org/en/develop
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/nette/latte/blob/v3.1.7/composer.json
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/nette/latte/blob/v3.1.7/composer.json
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/nette/latte/blob/v3.1.7/composer.json
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/nette/latte/blob/v3.1.7/composer.json
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/nette/latte/releases?per_page=100
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/nette/latte/releases?per_page=100
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/nette/latte
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/nette/latte/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/latte/latte.json
    checkedAt: 2026-11-16
  - field: i18n
    url: https://latte.nette.org/en/develop
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
npmWeeklyDownloads: null
runsAs: null
---

Latte is a templating engine for PHP. Its expressions are written exactly as in PHP. Latte compiles templates into PHP code, caches the result on disk and regenerates the cache when the source file changes. It escapes each value according to the HTML context it appears in, such as text, an attribute or JavaScript. The engine is called from PHP code, which passes parameters as arrays or as typed objects.

## Worth knowing

The homepage compares Latte with Twig, and a converter on the Latte site turns Twig templates into Latte.
