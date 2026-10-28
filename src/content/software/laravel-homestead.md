---
id: laravel-homestead
name: Laravel Homestead
urls:
  home: https://laravel.com/docs/homestead
  repository: https://github.com/laravel/homestead
  docs: https://laravel.com/docs/homestead
category:
  - dev-tool
description: Vagrant-based virtual machine for local Laravel development, with Nginx, PHP, MySQL and PostgreSQL included.
status: discontinued
maintainer: Taylor Otwell
firstRelease: 2014
databases:
  - mysql
  - postgres
runsAs:
  - local
installMethod: git clone of the Homestead repository onto the host machine
licenseModel: open-source
license: MIT
currentMajor: "15"
latestReleaseDate: 2024-04-29
githubStargazers: 3865
packagistDownloads: 8405542
contributors: 243
dependentRepos: 1609
dependentPackages: 83
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: status
    url: https://laravel.com/docs/homestead
    checkedAt: 2026-10-28
  - field: status
    url: https://api.github.com/repos/laravel/homestead
    checkedAt: 2026-10-28
  - field: status
    url: https://repo.packagist.org/p2/laravel/homestead.json
    checkedAt: 2026-10-28
  - field: urls
    url: https://laravel.com/docs/homestead
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/laravel/homestead
    checkedAt: 2026-10-28
  - field: urls
    url: https://laravel.com/docs/homestead
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/laravel/homestead/blob/main/LICENSE.txt
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://repo.packagist.org/p2/laravel/homestead.json
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/laravel/homestead/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/laravel/homestead/releases/latest
    checkedAt: 2026-10-28
  - field: category
    url: https://laravel.com/docs/homestead
    checkedAt: 2026-10-28
  - field: databases
    url: https://laravel.com/docs/homestead
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://laravel.com/docs/homestead
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://laravel.com/docs/homestead
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/laravel/homestead
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/laravel/homestead/blob/main/LICENSE.txt
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/laravel/homestead
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/laravel/homestead/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: packagistDownloads
    url: https://packagist.org/packages/laravel/homestead.json
    checkedAt: 2026-10-28
  - field: packagistDownloads
    url: https://packagist.org/packages/laravel/homestead.json
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/laravel%2Fhomestead
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/laravel%2Fhomestead
    checkedAt: 2026-10-28
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
---

Laravel Homestead is an official, pre-packaged Vagrant box for local Laravel development. The box includes Nginx, PHP, MySQL and PostgreSQL. The Homestead application is a wrapper around Vagrant, and the project is installed by cloning its repository onto the host machine. Taylor Otwell holds the copyright, and the project is released under the MIT license.

## Worth knowing

The project is discontinued. Its documentation calls Homestead a legacy package that is no longer actively maintained, the GitHub repository is archived, and the Packagist package is flagged as abandoned with no replacement named in its metadata. The documentation names Laravel Sail as a modern alternative for local development.
