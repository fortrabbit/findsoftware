---
id: avored
name: AvoRed
urls:
  repository: https://github.com/avored/laravel-ecommerce
  docs: https://github.com/avored/laravel-ecommerce/blob/main/README.md
category:
  - e-commerce
description: Open-source headless e-commerce system with a GraphQL API on a Laravel backend and a separate frontend application.
status: active
language: javascript
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.3
basedOn:
  - laravel
databases:
  - mysql
adminUi: true
headlessApi:
  - graphql
installMethod: composer require, git clone and npm install
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2023-02-02
githubStargazers: 1543
packagistDownloads: 17186
contributors: 42
packagistMonthlyDownloads: 346
dependentRepos: 25
dependentPackages: 15
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://github.com/avored/laravel-ecommerce/blob/main/README.md
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/avored/laravel-ecommerce
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/avored/laravel-ecommerce/blob/main/README.md
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/avored/laravel-ecommerce/blob/main/README.md
    checkedAt: 2026-10-20
  - field: basedOn
    url: https://github.com/avored/laravel-ecommerce/blob/main/README.md
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/avored/laravel-ecommerce
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/avored/framework/blob/5.0.6/composer.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/avored/framework/blob/5.0.6/composer.json
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/avored/laravel-ecommerce/blob/main/README.md
    checkedAt: 2026-10-20
  - field: databases
    url: https://github.com/avored/laravel-ecommerce/blob/main/README.md
    checkedAt: 2026-10-20
  - field: headlessApi
    url: https://github.com/avored/laravel-ecommerce/blob/main/README.md
    checkedAt: 2026-10-20
  - field: adminUi
    url: https://github.com/avored/laravel-ecommerce/blob/main/README.md
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/avored/framework/blob/5.0.6/composer.json
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/avored/framework.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/avored/framework.json
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://github.com/avored/laravel-ecommerce
    checkedAt: 2026-10-20
  - field: contributors
    url: https://github.com/avored/laravel-ecommerce
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/avored/framework.json
    checkedAt: 2026-10-20
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/avored%2Fframework
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/avored%2Fframework
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/avored/framework/stats.json
    checkedAt: 2026-10-25
ai: authored
---

AvoRed is a headless e-commerce system: a Laravel backend serves the store through a GraphQL API, and a separate frontend application consumes it. The [README](https://github.com/avored/laravel-ecommerce/blob/main/README.md) installs the backend with Composer from the avored/framework package, clones the frontend and runs it with npm, and its Docker example configures a MySQL database. The backend includes an admin area.

## Worth knowing

GitHub reports no license for the frontend repository, while the avored/framework package states MIT. The avored.com domain now sells a separate hosted product, so the README's links to it lead to another service.
