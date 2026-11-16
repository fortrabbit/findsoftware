---
id: laravel-permission
name: Laravel Permission
urls:
  home: https://spatie.be/docs/laravel-permission
  repository: https://github.com/spatie/laravel-permission
  docs: https://spatie.be/docs/laravel-permission/v8/introduction
category:
  - auth
description: Laravel package that manages users' roles and permissions in a database and registers them with Laravel's gate.
status: active
maintainer: SPATIE BVBA
maintainerType: company
firstRelease: 2015
hqCountry: BE
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
basedOn:
  - laravel
installMethod: composer require spatie/laravel-permission
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-11-06
githubStargazers: 12985
packagistDownloads: 134743775
contributors: 246
dependentRepos: 13830
dependentPackages: 762
social:
  bluesky: https://bsky.app/profile/spatie.be
  mastodon: https://phpc.social/@spatie
  youtube: https://www.youtube.com/channel/UCoBbei3S9JLTcS2VeEOWDeQ
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: name
    url: https://spatie.be/docs/laravel-permission/v8/introduction
    checkedAt: 2026-11-16
  - field: urls
    url: https://spatie.be/docs/laravel-permission/v8/introduction
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/spatie/laravel-permission
    checkedAt: 2026-11-16
  - field: urls
    url: https://spatie.be/docs/laravel-permission/v8/introduction
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://spatie.be/privacy
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://spatie.be/privacy
    checkedAt: 2026-11-16
  - field: hqCountry
    url: https://spatie.be/privacy
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/spatie/laravel-permission
    checkedAt: 2026-11-16
  - field: category
    url: https://spatie.be/docs/laravel-permission/v8/introduction
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://spatie.be/docs/laravel-permission/v8/introduction
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/spatie/laravel-permission/8.5.0/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://raw.githubusercontent.com/spatie/laravel-permission/8.5.0/composer.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://spatie.be/docs/laravel-permission/v8/installation-laravel
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/spatie/laravel-permission
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/spatie/laravel-permission/8.5.0/composer.json
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/spatie/laravel-permission/main/LICENSE.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/spatie/laravel-permission/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/spatie/laravel-permission/releases/latest
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://repo.packagist.org/p2/spatie/laravel-permission.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/spatie/laravel-permission
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/spatie/laravel-permission/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/spatie/laravel-permission.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/spatie%2Flaravel-permission
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/spatie%2Flaravel-permission
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

Laravel Permission manages roles and permissions for a Laravel application's users in the database, and registers the permissions with Laravel's gate. The [documentation](https://spatie.be/docs/laravel-permission/v8/introduction) describes a role as a named group of permissions that can be assigned to users or other models, and says every guard has its own set of permissions and roles. The README names Bouncer among its alternatives.

## Worth knowing

The prerequisites page says the User model must not have a role or roles property or method, and must implement Laravel's Authorizable contract.
