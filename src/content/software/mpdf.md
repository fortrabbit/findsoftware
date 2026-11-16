---
id: mpdf
name: mPDF
urls:
  home: https://mpdf.github.io
  repository: https://github.com/mpdf/mpdf
  docs: https://mpdf.github.io/
category:
  - media
description: PHP library that generates PDF files from UTF-8 encoded HTML.
status: active
maintainer: Ian Back
firstRelease: 2008
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 5.6
i18n: RTL and CJK languages
installMethod: composer require mpdf/mpdf
licenseModel: open-source
license: GPL-2.0-only, GPL-2.0-or-later
currentMajor: "8"
latestReleaseDate: 2026-03-11
githubStargazers: 4709
packagistDownloads: 97898939
contributors: 92
dependentRepos: 6279
dependentPackages: 455
social:
  forum: https://github.com/mpdf/mpdf/discussions
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://mpdf.github.io/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/mpdf/mpdf
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/mpdf/mpdf/blob/development/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/mpdf/mpdf/blob/development/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://mpdf.github.io/about-mpdf/changelog.html
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/mpdf/mpdf
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/mpdf/mpdf/blob/development/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/mpdf/mpdf/blob/development/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/mpdf/mpdf/blob/v8.3.1/composer.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/mpdf/mpdf/blob/development/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/mpdf/mpdf/blob/v8.3.1/composer.json
    checkedAt: 2026-11-16
  - field: license
    url: https://mpdf.github.io/about-mpdf/license.html
    checkedAt: 2026-11-16
  - field: i18n
    url: https://mpdf.github.io/about-mpdf/features.html
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/mpdf/mpdf/blob/development/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://repo.packagist.org/p2/mpdf/mpdf.json
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/mpdf/mpdf.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/mpdf/mpdf
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/mpdf/mpdf/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/mpdf/mpdf.json
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/mpdf/mpdf.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/mpdf%2Fmpdf
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/mpdf%2Fmpdf
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
npmWeeklyDownloads: null
---

mPDF is a PHP library that generates PDF files from UTF-8 encoded HTML. It runs inside PHP and needs the mbstring and gd extensions loaded. The project says it is based on FPDF and HTML2FPDF, and its manual lists support for right-to-left and CJK languages. Ian Back wrote it.

## Worth knowing

The README calls the software quite dated and points to headless Chrome for state of the art CSS support. Its default branch can differ from the last stable release. A few features need extra PHP extensions, including zlib, bcmath and xml.
