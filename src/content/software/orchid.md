---
id: orchid
name: Orchid
urls:
  home: https://orchid.software
  repository: https://github.com/orchidsoftware/platform
  docs: https://orchid.software/en/docs/
category:
  - admin-panel
description: Free Laravel package for building back-office applications, admin panels and dashboards in PHP.
status: active
maintainer: Chernyaev Alexandr
maintainerType: individual
language: php
runtime:
  - php
hosting:
  - php
basedOn:
  - laravel
adminUi: true
templating: blade, vue
runsAs:
  - per-request
installMethod: composer require orchid/platform
licenseModel: open-source
license: MIT
currentMajor: "14"
latestReleaseDate: 2026-03-21
githubStargazers: 4799
packagistDownloads: 2648579
contributors: 178
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://orchid.software
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/orchidsoftware/platform/blob/master/readme.md
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/orchidsoftware/platform
    checkedAt: 2026-10-20
  - field: urls
    url: https://orchid.software/en/docs/
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/orchidsoftware/platform/blob/master/LICENSE
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://github.com/orchidsoftware/platform/blob/master/LICENSE
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/orchidsoftware/platform/blob/master/readme.md
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://github.com/orchidsoftware/platform/blob/master/readme.md
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/orchidsoftware/platform
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/orchidsoftware/platform/blob/master/readme.md
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://orchid.software/en/docs/installation
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://orchid.software/en/docs/installation
    checkedAt: 2026-10-20
  - field: templating
    url: https://orchid.software/en/docs/
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://github.com/orchidsoftware/platform/blob/master/readme.md
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/orchidsoftware/platform/blob/14.53.0/composer.json
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://github.com/orchidsoftware/platform/blob/master/LICENSE
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://api.github.com/repos/orchidsoftware/platform/releases/latest
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/orchidsoftware/platform/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/orchidsoftware/platform
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/orchidsoftware/platform/contributors
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/orchid/platform.json
    checkedAt: 2026-10-20
figure:
  emoji: 🎛️
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: PHP · Admin
ai: authored
npmWeeklyDownloads: null
---

Orchid is a Laravel package for building back-office applications, admin panels, user panels and dashboards. The [readme](https://github.com/orchidsoftware/platform/blob/master/readme.md) describes working in PHP without writing HTML, CSS or JavaScript, and the [documentation](https://orchid.software/en/docs/) states that the HTML is generated with Blade or Vue.

The [installation guide](https://orchid.software/en/docs/installation) starts from a new Laravel project and a database. Composer adds the package, and artisan commands install it and create the first admin user. The admin path defaults to `/admin`.

## Worth knowing

The installer overwrites the `app/Models/User` model of the Laravel project, as the installation guide says.
