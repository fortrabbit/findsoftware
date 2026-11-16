---
id: php-gettext
name: Gettext
urls:
  repository: https://github.com/php-gettext/Gettext
category:
  - library
description: PHP library that imports, edits and exports gettext translations in PO, MO and other formats.
status: active
maintainer: Oscar Otero Marzoa
firstRelease: 2013
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.2
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2024-12-01
githubStargazers: 703
packagistDownloads: 36755974
contributors: 54
dependentRepos: 1457
dependentPackages: 99
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/php-gettext/Gettext
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/php-gettext/Gettext/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/php-gettext/Gettext/tags?per_page=100
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/php-gettext/Gettext/blob/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/php-gettext/Gettext
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/php-gettext/Gettext/blob/master/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/php-gettext/Gettext/blob/v5.7.3/composer.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/php-gettext/Gettext/blob/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/php-gettext/Gettext/blob/v5.7.3/composer.json
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/php-gettext/Gettext/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/php-gettext/Gettext/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/php-gettext/Gettext
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/php-gettext/Gettext/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/gettext/gettext.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/gettext%2Fgettext
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/gettext%2Fgettext
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
npmWeeklyDownloads: null
runsAs: null
---

Gettext is a PHP library that imports, edits and exports gettext translations. Loaders read PO and MO files into a collection of translations, each with its original text, translation, plural forms, references and comments, and generators write the collection back out. Scanners extract new strings from source files. A merge combines a scan with an existing PO file, and the options decide which translations, headers, comments, flags and references are kept.

The package includes no scanner. Scanners for PHP and JS sources, and a JSON format, are separate packages that the README names.

## Worth knowing

A strict PO loader fails on syntax errors and warns about plural counts and missing headers, so it can serve as a linter for PO files in a build. It is about 50% slower than the default loader.
