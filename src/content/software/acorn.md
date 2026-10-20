---
id: acorn
name: Acorn
urls:
  home: https://roots.io/acorn/
  repository: https://github.com/roots/acorn
  docs: https://roots.io/acorn/docs/
category:
  - framework
description: Composer package that loads Laravel components, such as Blade, Eloquent and Artisan, inside WordPress plugins and themes.
status: active
maintainer: Roots Software LLC
maintainerType: company
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
basedOn:
  - laravel
  - wordpress
templating: blade
installMethod: composer require
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-09-22
githubStargazers: 1008
packagistDownloads: 2737269
contributors: 54
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://api.github.com/repos/roots/acorn
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/roots/acorn
    checkedAt: 2026-10-20
  - field: urls
    url: https://roots.io/acorn/docs/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/roots/acorn/blob/main/LICENSE.md
    checkedAt: 2026-10-20
  - field: category
    url: https://roots.io/acorn/
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://roots.io/acorn/docs/installation/
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://roots.io/acorn/docs/installation/
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/roots/acorn
    checkedAt: 2026-10-20
  - field: runtime
    url: https://roots.io/acorn/docs/installation/
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://roots.io/acorn/docs/installation/
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://roots.io/acorn/docs/installation/
    checkedAt: 2026-10-20
  - field: templating
    url: https://roots.io/acorn/
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/roots/acorn
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/roots/acorn.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/roots/acorn/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/roots/acorn
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/roots/acorn/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/roots/acorn.json
    checkedAt: 2026-10-20
figure:
  emoji: 🧱
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: PHP · Framework
ai: authored
npmWeeklyDownloads: null
---

Acorn is a Composer package that loads a Laravel application container inside WordPress, so a plugin or theme can use Laravel components such as Blade templates, Eloquent models, migrations and queues. It follows the WordPress lifecycle and template hierarchy, so WordPress still selects the template for each page. The `wp acorn` command exposes Laravel's Artisan commands, and the [installation guide](https://roots.io/acorn/docs/installation/) describes the setup.

## Worth knowing

Acorn runs inside a WordPress site and takes its server requirements from WordPress and Laravel.
