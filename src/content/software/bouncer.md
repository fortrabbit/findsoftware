---
id: bouncer
name: Bouncer
urls:
  repository: https://github.com/JosephSilber/bouncer
  docs: https://github.com/JosephSilber/bouncer/blob/master/readme.md
category:
  - auth
description: PHP library for managing roles, abilities and model ownership on Eloquent models, integrated with Laravel's gate.
status: active
maintainer: Joseph Silber
maintainerType: individual
firstRelease: 2015
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
installMethod: composer require silber/bouncer
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-03-18
githubStargazers: 3577
packagistDownloads: 5331530
contributors: 50
dependentRepos: 309
dependentPackages: 32
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://api.github.com/repos/JosephSilber/bouncer
    checkedAt: 2026-11-04
  - field: urls
    url: https://github.com/JosephSilber/bouncer/blob/master/readme.md
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/JosephSilber/bouncer/blob/master/readme.md
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/JosephSilber/bouncer
    checkedAt: 2026-11-04
  - field: runtime
    url: https://github.com/JosephSilber/bouncer/blob/v1.0.4/composer.json
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://github.com/JosephSilber/bouncer/blob/v1.0.4/composer.json
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/JosephSilber/bouncer/blob/master/readme.md
    checkedAt: 2026-11-04
  - field: license
    url: https://api.github.com/repos/JosephSilber/bouncer
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://github.com/JosephSilber/bouncer/blob/master/readme.md
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://raw.githubusercontent.com/JosephSilber/bouncer/master/LICENSE.txt
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://repo.packagist.org/p2/silber/bouncer.json
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/JosephSilber/bouncer/releases
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/JosephSilber/bouncer/releases
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/JosephSilber/bouncer
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/JosephSilber/bouncer/contributors
    checkedAt: 2026-11-04
  - field: packagistDownloads
    url: https://packagist.org/packages/silber/bouncer.json
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/silber%2Fbouncer
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/silber%2Fbouncer
    checkedAt: 2026-11-04
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

Bouncer manages roles and abilities on Eloquent models, and it is installed with Composer. A developer grants abilities to users and roles, restricts an ability to a model type or a model instance, forbids an ability, and lets a user or role own a model. In a Laravel app, Bouncer is consulted when an ability is checked at Laravel's gate. The README has a separate install section for apps that do not use Laravel, which starts with the same Composer command.
