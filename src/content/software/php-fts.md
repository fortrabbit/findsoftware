---
id: php-fts
name: PHP-FTS
urls:
  repository: https://github.com/olivier-ls/php-fts
  docs: https://github.com/olivier-ls/php-fts/blob/main/README.md
category:
  - search
description: Pure PHP full-text search library that keeps its index in files on disk, with typo tolerance, filters and facets.
status: active
maintainer: Olivier
maintainerType: individual
firstRelease: 2026
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
contentStore:
  - flat-file
runsAs:
  - per-request
installMethod: composer require
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-09-14
githubStargazers: 147
packagistDownloads: 29
contributors: 1
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/olivier-ls/php-fts
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/olivier-ls/php-fts/blob/main/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/olivier-ls/php-fts/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/olivier-ls/php-fts/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/olivier-ls/php-fts/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/olivier-ls/php-fts
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/olivier-ls/php-fts/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/olivier-ls/php-fts/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://repo.packagist.org/p2/ols/php-fts.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/olivier-ls/php-fts/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/olivier-ls/php-fts/blob/main/README.md
    checkedAt: 2026-10-28
  - field: contentStore
    url: https://github.com/olivier-ls/php-fts/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/olivier-ls/php-fts/blob/main/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/olivier-ls/php-fts/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/olivier-ls/php-fts/releases/latest
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://repo.packagist.org/p2/ols/php-fts.json
    checkedAt: 2026-10-28
  - field: packagistDownloads
    url: https://packagist.org/packages/ols/php-fts.json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/olivier-ls/php-fts
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/olivier-ls/php-fts/contributors
    checkedAt: 2026-10-28
ai: authored
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
npmWeeklyDownloads: null
---

php-fts is a full-text search library written in PHP. It keeps its index in a directory of files, so it needs no database and no separate search service. Projects add it with Composer or by copying the source into the project. The README states that a request opens the index directory, reads what it needs and ends, so the library runs inside each request rather than as a process of its own. Documents are stored in that directory in readable form. The library requires PHP 8.1 or higher, and Olivier maintains it.

## Worth knowing

The README says to keep the index directory outside the web root, because the documents can be read from its files. The 2.0 release cannot open an index written by the 1.x line, so a 1.x index is rebuilt from the source data.
