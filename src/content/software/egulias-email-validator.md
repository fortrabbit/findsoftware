---
id: egulias-email-validator
name: EmailValidator
urls:
  repository: https://github.com/egulias/EmailValidator
  docs: https://github.com/egulias/EmailValidator/blob/4.x/README.md
category:
  - library
description: PHP library that validates email addresses against several RFCs, with pluggable validation strategies.
status: active
maintainer: Eduardo Gulias Davis
maintainerType: individual
firstRelease: 2013
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2025-03-20
githubStargazers: 11639
packagistDownloads: 822644639
contributors: 74
dependentRepos: 433255
dependentPackages: 318
addedAt: 2026-11-08
checkedAt: 2026-11-08
sources:
  - field: urls
    url: https://api.github.com/repos/egulias/EmailValidator
    checkedAt: 2026-11-08
  - field: urls
    url: https://github.com/egulias/EmailValidator/blob/4.x/README.md
    checkedAt: 2026-11-08
  - field: maintainer
    url: https://github.com/egulias/EmailValidator/blob/4.x/LICENSE
    checkedAt: 2026-11-08
  - field: firstRelease
    url: https://repo.packagist.org/p2/egulias/email-validator.json
    checkedAt: 2026-11-08
  - field: category
    url: https://github.com/egulias/EmailValidator/blob/4.x/README.md
    checkedAt: 2026-11-08
  - field: language
    url: https://api.github.com/repos/egulias/EmailValidator
    checkedAt: 2026-11-08
  - field: runtime
    url: https://repo.packagist.org/p2/egulias/email-validator.json
    checkedAt: 2026-11-08
  - field: runtimeMin
    url: https://repo.packagist.org/p2/egulias/email-validator.json
    checkedAt: 2026-11-08
  - field: license
    url: https://github.com/egulias/EmailValidator/blob/4.x/README.md
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://github.com/egulias/EmailValidator/blob/4.x/README.md
    checkedAt: 2026-11-08
  - field: currentMajor
    url: https://api.github.com/repos/egulias/EmailValidator/releases/latest
    checkedAt: 2026-11-08
  - field: latestReleaseDate
    url: https://api.github.com/repos/egulias/EmailValidator/releases/latest
    checkedAt: 2026-11-08
  - field: githubStargazers
    url: https://api.github.com/repos/egulias/EmailValidator
    checkedAt: 2026-11-08
  - field: contributors
    url: https://api.github.com/repos/egulias/EmailValidator/contributors?per_page=1
    checkedAt: 2026-11-08
  - field: packagistDownloads
    url: https://packagist.org/packages/egulias/email-validator.json
    checkedAt: 2026-11-08
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/egulias%2Femail-validator
    checkedAt: 2026-11-08
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/egulias%2Femail-validator
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
runsAs: null
---

EmailValidator is a PHP library that checks email addresses against RFC-based rules and a set of extra strategies. A validator takes one strategy per check: the RFC check, a stricter check that fails on RFC warnings, a DNS check for mail-server records, a combinator that runs several strategies with a logical AND, a Message-ID check and a spoof check. Developers can implement their own strategy. It installs with Composer.

## Worth knowing

The DNS check shows that a domain accepts mail, not that a particular mailbox exists. The spoof check and the DNS check need the PHP Intl extension. The project's supported-versions table marks the 3.x line and older as end of life.
