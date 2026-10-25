---
id: filament
name: Filament
urls:
  home: https://filamentphp.com
  repository: https://github.com/filamentphp/filament
  docs: https://filamentphp.com/docs/5.x/introduction/installation
  pricing: https://filamentphp.com/themes
  plugins: https://filamentphp.com/plugins
category:
  - admin-panel
  - framework
description: UI framework for Laravel for building admin panels and apps from Livewire-based tables, forms and other components.
status: active
maintainer: Dan Harrin, Ryan Chandler, Filament core team
maintainerType: community
firstRelease: 2020
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
basedOn:
  - laravel
  - livewire
  - alpine
adminUi: true
templating: blade, livewire
renderingModes:
  - server
installMethod: composer require filament/filament, php artisan filament:install --panels
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-10-13
githubStargazers: 32292
packagistDownloads: 43663141
contributors: 373
pluginCount: 1156
packagistMonthlyDownloads: 5616191
dependentRepos: 1097
dependentPackages: 763
social:
  discord: https://filamentphp.com/discord
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://filamentphp.com/
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/filamentphp/filament
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/filamentphp/filament
    checkedAt: 2026-10-18
  - field: urls
    url: https://filamentphp.com/
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://packagist.org/packages/filament/filament
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://filamentphp.com/team
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://filamentphp.com/team
    checkedAt: 2026-10-18
  - field: category
    url: https://filamentphp.com/
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://filamentphp.com/
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/filamentphp/filament
    checkedAt: 2026-10-18
  - field: runtime
    url: https://filamentphp.com/docs/5.x/introduction/installation
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/filament/filament.json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://filamentphp.com/docs/5.x/introduction/installation
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://filamentphp.com/docs/5.x/introduction/installation
    checkedAt: 2026-10-18
  - field: templating
    url: https://filamentphp.com/docs/5.x/introduction/installation
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://filamentphp.com/docs/5.x/deployment
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://filamentphp.com/docs/5.x/introduction/installation
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/filamentphp/filament
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/filamentphp/filament
    checkedAt: 2026-10-18
  - field: urls
    url: https://filamentphp.com/
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://github.com/filamentphp/filament/releases/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/filamentphp/filament/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/filamentphp/filament
    checkedAt: 2026-10-18
  - field: contributors
    url: https://github.com/filamentphp/filament/graphs/contributors
    checkedAt: 2026-10-18
  - field: packagistDownloads
    url: https://packagist.org/packages/filament/filament
    checkedAt: 2026-10-18
  - field: urls
    url: https://filamentphp.com/
    checkedAt: 2026-10-18
  - field: pluginCount
    url: https://filamentphp.com/plugins
    checkedAt: 2026-10-18
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/filament%2Ffilament
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/filament%2Ffilament
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/filament/filament/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

Filament is a set of Laravel packages for building admin panels and applications from components such as tables, forms, infolists, actions, notifications and widgets. It is developed as one monorepo and runs on top of Livewire, Alpine.js and Tailwind CSS, with Laravel as the host application. Its install command sets up a panel, served at /admin by default. Dan Harrin, Ryan Chandler and the Filament core team maintain it.

## Worth knowing

Outside the local environment, the user model has to implement Filament's user authorization, or nobody can sign in to the panel. Production also needs cached components and icons, an upgrade command after Composer's autoload dump, and a Node build for the Tailwind assets. Official themes are paid add-ons, and the plugin directory lists third-party plugins with paid licenses.
