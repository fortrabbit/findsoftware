---
id: oauth2-client
name: OAuth 2.0 Client
urls:
  home: https://oauth2-client.thephpleague.com/
  repository: https://github.com/thephpleague/oauth2-client
  docs: https://oauth2-client.thephpleague.com/usage/
  plugins: https://oauth2-client.thephpleague.com/providers/league/
category:
  - auth
description: PHP library that provides a base for connecting an application to OAuth 2.0 service providers.
status: active
maintainer: Alex Bilbie
firstRelease: 2013
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.1
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-09-16
githubStargazers: 3819
packagistDownloads: 148868867
contributors: 201
dependentRepos: 4119
dependentPackages: 1064
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://oauth2-client.thephpleague.com/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/thephpleague/oauth2-client
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/thephpleague/oauth2-client/blob/master/README.md
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/thephpleague/oauth2-client/blob/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/thephpleague/oauth2-client
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/thephpleague/oauth2-client/blob/2.9.1/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/thephpleague/oauth2-client/blob/2.9.1/composer.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://oauth2-client.thephpleague.com/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/thephpleague/oauth2-client/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/thephpleague/oauth2-client/commits/0.1.0
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/thephpleague/oauth2-client
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/thephpleague/oauth2-client/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/thephpleague/oauth2-client/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/thephpleague/oauth2-client/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/thephpleague/oauth2-client
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/thephpleague/oauth2-client/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/league/oauth2-client.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/league%2Foauth2-client
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/league%2Foauth2-client
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/thephpleague/oauth2-client/blob/master/README.md
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

oauth2-client is a PHP library that gives an application a base for connecting to OAuth 2.0 service providers. Its GenericProvider class works with any provider that issues Bearer tokens. Provider-specific clients for services such as Facebook, GitHub, Google, Instagram and LinkedIn are separate packages, and the project lists official and third-party ones on its site.

The package is installed with Composer. The homepage says the base package is required directly only to use the GenericProvider; a provider client is required on its own.
