---
id: lunar
name: Lunar
urls:
  home: https://lunarphp.com
  repository: https://github.com/lunarphp/lunar
  docs: https://docs.lunarphp.com/
  plugins: https://docs.lunarphp.com/1.x/addons/community/overview
category:
  - e-commerce
description: Set of Laravel packages that add headless e-commerce models, actions and a Filament admin panel to a Laravel application.
status: active
maintainer: LunarPHP Ltd
maintainerType: company
firstRelease: 2022
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
basedOn:
  - laravel
  - filament
  - livewire
contentStore:
  - database
databases:
  - mysql
  - postgres
adminUi: true
i18n: yes, translatable attributes per language
installMethod: composer require lunarphp/lunar, php artisan lunar:install
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-08-26
githubStargazers: 3757
contributors: 147
social:
  x: https://x.com/lunarphp
  discord: https://lunarphp.com/discord
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://lunarphp.com/
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/lunarphp/lunar
    checkedAt: 2026-10-18
  - field: urls
    url: https://lunarphp.com/
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/lunarphp/lunar/readme
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://api.github.com/repos/lunarphp/lunar/releases
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://lunarphp.com/
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://lunarphp.com/
    checkedAt: 2026-10-18
  - field: category
    url: https://docs.lunarphp.com/
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://docs.lunarphp.com/1.x/getting-started/overview/introduction.md
    checkedAt: 2026-10-18
  - field: language
    url: https://api.github.com/repos/lunarphp/lunar
    checkedAt: 2026-10-18
  - field: runtime
    url: https://docs.lunarphp.com/1.x/getting-started/setup/installation
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/lunarphp/core.json
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://docs.lunarphp.com/1.x/getting-started/setup/installation
    checkedAt: 2026-10-18
  - field: databases
    url: https://docs.lunarphp.com/1.x/getting-started/setup/installation
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://docs.lunarphp.com/1.x/getting-started/setup/installation
    checkedAt: 2026-10-18
  - field: i18n
    url: https://docs.lunarphp.com/1.x/reference/languages.md
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://docs.lunarphp.com/1.x/getting-started/setup/installation
    checkedAt: 2026-10-18
  - field: license
    url: https://api.github.com/repos/lunarphp/lunar
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://lunarphp.com/
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://api.github.com/repos/lunarphp/lunar/releases/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://api.github.com/repos/lunarphp/lunar/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/lunarphp/lunar
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/lunarphp/lunar/contributors
    checkedAt: 2026-10-18
  - field: urls
    url: https://docs.lunarphp.com/llms.txt
    checkedAt: 2026-10-18
figure:
  emoji: 🛒
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: PHP · Shop
ai: authored
npmWeeklyDownloads: null
---

Lunar is a set of Laravel packages that adds e-commerce models, actions and a Filament admin panel to an existing Laravel application. It has no standalone install: the packages are required with Composer and set up with an install command, and the admin panel, which uses Livewire, is served at `/lunar`. Attributes can be translated per language, and channels publish products to different storefronts within one installation. The docs describe no external API to call. A Livewire starter kit exists, and an Inertia with Vue kit is in development. LunarPHP Ltd maintains the packages.
