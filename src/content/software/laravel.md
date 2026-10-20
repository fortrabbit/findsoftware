---
id: laravel
name: Laravel
urls:
  home: https://laravel.com
  repository: https://github.com/laravel/framework
  docs: https://laravel.com/docs
category:
  - framework
description: PHP web application framework with routing, an ORM, templating, queues and scheduled jobs.
status: active
maintainer: Laravel
maintainerType: company
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
databases:
  - mariadb
  - mysql
  - postgres
  - sqlite
  - sqlserver
templating: blade
i18n: yes
runsAs:
  - per-request
renderingModes:
  - server
installMethod: laravel new (Laravel installer), composer global require laravel/installer
licenseModel: open-source
license: MIT
currentMajor: "13"
latestReleaseDate: 2026-10-16
githubStargazers: 34963
social:
  x: https://x.com/laravel
  discord: https://discord.com/invite/laravel
wikidata: Q13634357
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://laravel.com/docs/13.x/installation
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/laravel/framework
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/laravel/framework
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/laravel/laravel
    checkedAt: 2026-10-18
  - field: urls
    url: https://laravel.com/docs/13.x/installation
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://laravel.com/careers
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://laravel.com/careers
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q13634357
    checkedAt: 2026-10-18
  - field: category
    url: https://laravel.com/docs/13.x/installation
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/laravel/framework
    checkedAt: 2026-10-18
  - field: runtime
    url: https://laravel.com/docs/13.x/deployment
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/laravel/framework.json
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://laravel.com/docs/13.x/deployment
    checkedAt: 2026-10-18
  - field: databases
    url: https://laravel.com/docs/13.x/database
    checkedAt: 2026-10-18
  - field: templating
    url: https://laravel.com/docs/13.x/blade
    checkedAt: 2026-10-18
  - field: i18n
    url: https://laravel.com/docs/13.x/localization
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://laravel.com/docs/13.x/installation
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://laravel.com/docs/13.x/installation
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/laravel/framework
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/laravel/framework
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://github.com/laravel/framework/releases
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/laravel/framework/releases
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/laravel/framework
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/laravel/laravel
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://laravel.com/docs/13.x/deployment
    checkedAt: 2026-10-19
figure:
  emoji: 🧱
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: PHP · Framework
ai: authored
npmWeeklyDownloads: null
---

Laravel is a PHP framework for web applications, covering routing, database access through an ORM, Blade templates, queued jobs and a task scheduler. Applications are created with the Laravel installer or with Composer, and the web server's document root is the `public` folder. Queue workers, Reverb and Octane each need a process monitor when used, and the scheduler needs a single cron entry on the server. Frontends beyond Blade, such as React, Vue, Svelte or Livewire, come as starter kits. The company behind the framework sells hosted and commercial products around it, including Laravel Cloud and Forge.

## Worth knowing

Laravel needs writable `storage` and `bootstrap/cache` directories. MongoDB support comes from a package that MongoDB maintains, not from the framework itself.
