---
id: htmlpurifier
name: HTML Purifier
urls:
  repository: https://github.com/ezyang/htmlpurifier
  docs: https://github.com/ezyang/htmlpurifier/tree/master/docs
category:
  - library
description: HTML filter library written in PHP that removes XSS attacks and makes the output standards-compliant HTML.
status: active
maintainer: Edward Z. Yang
maintainerType: individual
firstRelease: 2006
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 5.6
installMethod: composer
licenseModel: open-source
license: LGPL-2.1
currentMajor: "4"
latestReleaseDate: 2026-09-15
githubStargazers: 3349
packagistDownloads: 398363604
contributors: 95
dependentRepos: 36567
dependentPackages: 417
addedAt: 2026-11-09
checkedAt: 2026-11-09
sources:
  - field: urls
    url: https://api.github.com/repos/ezyang/htmlpurifier
    checkedAt: 2026-11-09
  - field: urls
    url: https://github.com/ezyang/htmlpurifier/blob/master/README.md
    checkedAt: 2026-11-09
  - field: maintainer
    url: https://github.com/ezyang/htmlpurifier/blob/v4.19.1/composer.json
    checkedAt: 2026-11-09
  - field: language
    url: https://api.github.com/repos/ezyang/htmlpurifier
    checkedAt: 2026-11-09
  - field: category
    url: https://github.com/ezyang/htmlpurifier/blob/master/README.md
    checkedAt: 2026-11-09
  - field: runtime
    url: https://github.com/ezyang/htmlpurifier/blob/v4.19.1/composer.json
    checkedAt: 2026-11-09
  - field: runtimeMin
    url: https://github.com/ezyang/htmlpurifier/blob/v4.19.1/composer.json
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://github.com/ezyang/htmlpurifier/blob/master/README.md
    checkedAt: 2026-11-09
  - field: packagistDownloads
    url: https://packagist.org/packages/ezyang/htmlpurifier.json
    checkedAt: 2026-11-09
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/ezyang%2Fhtmlpurifier
    checkedAt: 2026-11-09
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/ezyang%2Fhtmlpurifier
    checkedAt: 2026-11-09
  - field: firstRelease
    url: https://api.github.com/repos/ezyang/htmlpurifier/git/commits/725a8cb4a4a9d0788c54c60097c6d097d6cb29af
    checkedAt: 2026-11-09
  - field: license
    url: https://api.github.com/repos/ezyang/htmlpurifier
    checkedAt: 2026-11-09
  - field: licenseModel
    url: https://raw.githubusercontent.com/ezyang/htmlpurifier/master/LICENSE
    checkedAt: 2026-11-09
  - field: currentMajor
    url: https://api.github.com/repos/ezyang/htmlpurifier/releases
    checkedAt: 2026-11-09
  - field: latestReleaseDate
    url: https://api.github.com/repos/ezyang/htmlpurifier/releases
    checkedAt: 2026-11-09
  - field: githubStargazers
    url: https://api.github.com/repos/ezyang/htmlpurifier
    checkedAt: 2026-11-09
  - field: contributors
    url: https://api.github.com/repos/ezyang/htmlpurifier/contributors?per_page=1
    checkedAt: 2026-11-09
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

HTML Purifier is an HTML filter library written in PHP. It splits a document into tokens, removes elements and attributes that are not on its whitelist, and checks nesting and well-formedness, so the output is standards-compliant HTML. The author named in the package manifest is Edward Z. Yang.

## Worth knowing

The project's own site says the library "is not perfect; it can interact poorly with existing JavaScript on websites".
