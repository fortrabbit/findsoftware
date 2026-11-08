---
id: endroid-qr-code
name: Endroid QR Code
urls:
  repository: https://github.com/endroid/qr-code
category:
  - media
description: PHP library that generates QR codes as PNG, WebP, SVG, EPS or binary output.
status: active
maintainer: Jeroen van den Enden
maintainerType: individual
firstRelease: 2012
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.5
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-11-03
githubStargazers: 4822
packagistDownloads: 88236366
contributors: 55
packagistMonthlyDownloads: 4199452
dependentRepos: 2162
dependentPackages: 250
addedAt: 2026-11-08
checkedAt: 2026-11-08
sources:
  - field: urls
    url: https://api.github.com/repos/endroid/qr-code
    checkedAt: 2026-11-08
  - field: firstRelease
    url: https://api.github.com/repos/endroid/qr-code/commits/1.0.0
    checkedAt: 2026-11-08
  - field: maintainer
    url: https://github.com/endroid/qr-code/blob/main/LICENSE
    checkedAt: 2026-11-08
  - field: category
    url: https://github.com/endroid/qr-code/blob/main/README.md
    checkedAt: 2026-11-08
  - field: language
    url: https://api.github.com/repos/endroid/qr-code
    checkedAt: 2026-11-08
  - field: runtime
    url: https://github.com/endroid/qr-code/blob/6.2.0/composer.json
    checkedAt: 2026-11-08
  - field: runtimeMin
    url: https://github.com/endroid/qr-code/blob/6.2.0/composer.json
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://github.com/endroid/qr-code/blob/main/README.md
    checkedAt: 2026-11-08
  - field: license
    url: https://api.github.com/repos/endroid/qr-code
    checkedAt: 2026-11-08
  - field: licenseModel
    url: https://github.com/endroid/qr-code/blob/main/LICENSE
    checkedAt: 2026-11-08
  - field: currentMajor
    url: https://api.github.com/repos/endroid/qr-code/tags
    checkedAt: 2026-11-08
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/endroid/qr-code.json
    checkedAt: 2026-11-08
  - field: packagistDownloads
    url: https://packagist.org/packages/endroid/qr-code/stats.json
    checkedAt: 2026-11-08
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/endroid/qr-code/stats.json
    checkedAt: 2026-11-08
  - field: githubStargazers
    url: https://api.github.com/repos/endroid/qr-code
    checkedAt: 2026-11-08
  - field: contributors
    url: https://api.github.com/repos/endroid/qr-code/contributors?per_page=1
    checkedAt: 2026-11-08
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/endroid%2Fqr-code
    checkedAt: 2026-11-08
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/endroid%2Fqr-code
    checkedAt: 2026-11-08
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

Endroid QR Code is a PHP library that generates QR codes and writes them as PNG, WebP, SVG, EPS or binary output. A builder sets the content, encoding, error correction, size, margin, a logo and a label, and each output format has a writer with its own options.

A separate Symfony bundle in its own repository adds configuration, multiple configurations and Twig functions on top of the library.

## Worth knowing

Image output needs the PHP GD extension. Validation, which reads a generated code back to check it, is off by default because it affects performance.
