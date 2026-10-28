---
id: laravel-sail
name: Laravel Sail
urls:
  home: https://laravel.com/docs/sail
  repository: https://github.com/laravel/sail
  docs: https://laravel.com/docs/sail
category:
  - dev-tool
description: Docker-based local development environment for Laravel applications, driven by a sail command-line script stored in the project.
status: active
maintainer: Taylor Otwell
firstRelease: 2020
databases:
  - mysql
  - mongodb
runsAs:
  - local
installMethod: composer require laravel/sail --dev, then php artisan sail:install
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-13
githubStargazers: 1921
packagistDownloads: 240077197
contributors: 174
dependentRepos: 122698
dependentPackages: 600
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://laravel.com/docs/sail
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/laravel/sail
    checkedAt: 2026-10-28
  - field: urls
    url: https://laravel.com/docs/sail
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/laravel/sail/blob/1.x/LICENSE.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://repo.packagist.org/p2/laravel/sail.json
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/laravel/sail/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/laravel/sail/releases/latest
    checkedAt: 2026-10-28
  - field: category
    url: https://laravel.com/docs/sail
    checkedAt: 2026-10-28
  - field: databases
    url: https://laravel.com/docs/sail
    checkedAt: 2026-10-28
  - field: databases
    url: https://laravel.com/docs/sail
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://laravel.com/docs/sail
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/laravel/sail/blob/1.x/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/laravel/sail
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/laravel/sail/blob/1.x/README.md
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/laravel/sail
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/laravel/sail/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: packagistDownloads
    url: https://packagist.org/packages/laravel/sail.json
    checkedAt: 2026-10-28
  - field: packagistDownloads
    url: https://packagist.org/packages/laravel/sail.json
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/laravel%2Fsail
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/laravel%2Fsail
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

Laravel Sail is a command-line interface for Laravel's default Docker development environment. It is added to a project with Composer, and the sail:install Artisan command sets it up. The services it runs are defined in the application's compose.yaml file, which contains a MySQL container and a MongoDB Atlas Local container. The package is maintained by Taylor Otwell under the MIT license and belongs to the Laravel organization on GitHub.

## Worth knowing

The README states that, other than Docker, no software or libraries are required on the local computer. The project states support for macOS, Linux and Windows through WSL2. The README states that Sail is derived from Vessel, a tool by Chris Fidao.
