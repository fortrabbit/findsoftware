---
id: mjml-php
name: mjml-php
urls:
  repository: https://github.com/spatie/mjml-php
category:
  - email
description: PHP package that converts MJML email markup to HTML.
status: active
maintainer: SPATIE BVBA
firstRelease: 2023
hqCountry: BE
language: php
runtime:
  - php
  - node
hosting:
  - php
  - node
runtimeMin: php 8.2
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-07-23
githubStargazers: 282
packagistDownloads: 1674445
contributors: 11
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/spatie/mjml-php
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://spatie.be/disclaimer
    checkedAt: 2026-11-16
  - field: hqCountry
    url: https://spatie.be/disclaimer
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/spatie/mjml-php/releases?per_page=100
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/spatie/mjml-php
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/spatie/mjml-php/blob/1.3.0/composer.json
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/spatie/mjml-php/blob/main/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/spatie/mjml-php/blob/1.3.0/composer.json
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/spatie/mjml-php/blob/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/spatie/mjml-php/blob/main/README.md
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/spatie/mjml-php.json
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/spatie/mjml-php
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/spatie/mjml-php/blob/main/LICENSE.md
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/spatie/mjml-php
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/spatie/mjml-php/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/spatie/mjml-php/releases/tag/1.3.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/spatie/mjml-php/releases/tag/1.3.0
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
---

mjml-php is a PHP package that converts MJML, a markup language for responsive email, into HTML. It is installed with Composer and called from PHP code: `toHtml()` returns the converted HTML, and `convert()` also returns the errors MJML reports for the input. The conversion depends on the JavaScript mjml package, which must be installed on the server next to a Node.js executable. The package finds that executable itself, and an environment variable sets its path when it cannot.

## Worth knowing

The conversion needs Node.js on the machine that runs PHP. For Laravel projects the README describes a separate route through Sidecar, which deploys the conversion as a Lambda function instead.
