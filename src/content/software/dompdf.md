---
id: dompdf
name: Dompdf
urls:
  home: https://dompdf.github.io/
  repository: https://github.com/dompdf/dompdf
  docs: https://github.com/dompdf/dompdf/blob/v3.1.6/README.md
category:
  - media
description: PHP library that converts HTML and CSS to PDF documents.
status: active
maintainer: dompdf project (GitHub organization dompdf)
maintainerType: community
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.1
runsAs:
  - per-request
installMethod: composer require dompdf/dompdf
licenseModel: open-source
license: LGPL-2.1
currentMajor: "3"
latestReleaseDate: 2026-07-20
githubStargazers: 11198
packagistDownloads: 218979915
contributors: 176
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: urls
    url: https://dompdf.github.io/
    checkedAt: 2026-10-19
  - field: urls
    url: https://api.github.com/repos/dompdf/dompdf
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/dompdf/dompdf/blob/v3.1.6/README.md
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://dompdf.github.io/
    checkedAt: 2026-10-19
  - field: maintainerType
    url: https://api.github.com/repos/dompdf/dompdf
    checkedAt: 2026-10-19
  - field: category
    url: https://dompdf.github.io/
    checkedAt: 2026-10-19
  - field: language
    url: https://api.github.com/repos/dompdf/dompdf
    checkedAt: 2026-10-19
  - field: runtime
    url: https://dompdf.github.io/
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://repo.packagist.org/p2/dompdf/dompdf.json
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://github.com/dompdf/dompdf/blob/v3.1.6/README.md
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://github.com/dompdf/dompdf/blob/v3.1.6/README.md
    checkedAt: 2026-10-19
  - field: license
    url: https://api.github.com/repos/dompdf/dompdf
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://api.github.com/repos/dompdf/dompdf
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://repo.packagist.org/p2/dompdf/dompdf.json
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://api.github.com/repos/dompdf/dompdf/releases/latest
    checkedAt: 2026-10-19
  - field: githubStargazers
    url: https://api.github.com/repos/dompdf/dompdf
    checkedAt: 2026-10-19
  - field: contributors
    url: https://api.github.com/repos/dompdf/dompdf/contributors
    checkedAt: 2026-10-19
  - field: packagistDownloads
    url: https://packagist.org/packages/dompdf/dompdf.json
    checkedAt: 2026-10-19
  - field: packagistDownloads
    url: https://packagist.org/packages/dompdf/dompdf.json
    checkedAt: 2026-10-19
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

Dompdf converts HTML and CSS into PDF inside a PHP application. The application installs it with Composer, as the [README](https://github.com/dompdf/dompdf/blob/v3.1.6/README.md) shows, and loads it as a dependency, so no separate server or process runs. The bundled R&OS CPDF class renders PDFs without an external PDF library; PDFLib is an optional backend that needs a PECL extension.

## Worth knowing

The homepage lists the PHP extensions DOM and MBString as requirements. It says Dompdf does not tolerate poorly formed HTML well, suggests the built-in HTML5 parser or a validator, and states that a table row must fit on one page.
