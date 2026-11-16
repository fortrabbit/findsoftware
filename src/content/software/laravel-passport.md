---
id: laravel-passport
name: Laravel Passport
urls:
  home: https://laravel.com/framework/docs/passport
  repository: https://github.com/laravel/passport
  docs: https://laravel.com/framework/docs/passport
category:
  - auth
description: Laravel package that adds an OAuth2 server to a Laravel application, issuing access tokens to clients and users.
status: active
maintainer: Taylor Otwell
firstRelease: 2016
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
basedOn:
  - laravel
installMethod: php artisan install:api
licenseModel: open-source
license: MIT
currentMajor: "13"
latestReleaseDate: 2026-11-10
githubStargazers: 3423
packagistDownloads: 110661153
contributors: 196
dependentRepos: 19261
dependentPackages: 562
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://laravel.com/framework/docs/passport
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/laravel/passport
    checkedAt: 2026-11-16
  - field: urls
    url: https://laravel.com/framework/docs/passport
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/laravel/passport/blob/v13.11.0/LICENSE.md
    checkedAt: 2026-11-16
  - field: category
    url: https://laravel.com/framework/docs/passport
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/laravel/passport/blob/v13.11.0/composer.json
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/laravel/passport
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/laravel/passport/blob/v13.11.0/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/laravel/passport/blob/v13.11.0/composer.json
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/laravel/passport/blob/v13.11.0/composer.json
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/laravel/passport/blob/v13.11.0/README.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/laravel/passport/blob/v13.11.0/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://laravel.com/framework/docs/passport
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/laravel/passport/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/laravel/passport/releases/latest
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://repo.packagist.org/p2/laravel/passport.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/laravel/passport
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/laravel/passport/contributors
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/laravel/passport.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/laravel%2Fpassport
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/laravel%2Fpassport
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

Laravel Passport is a Laravel package that adds an OAuth2 server to an application. The [Laravel documentation](https://laravel.com/framework/docs/passport) says Passport is built on top of the League OAuth2 server, and covers the authorization code grant with PKCE, the device authorization grant, the password and implicit grants, the client credentials grant and personal access tokens. It describes the install command as creating the encryption keys access tokens need.

## Worth knowing

The documentation presents Passport and Laravel Sanctum as the two options. It says an application that needs OAuth2 should use Passport, while single-page and mobile applications and plain API tokens fit Sanctum, which does not support OAuth2.

The deployment section says the encryption keys are usually kept out of source control and must be generated the first time Passport is deployed.
