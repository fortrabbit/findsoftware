---
id: asset-mapper
name: Symfony AssetMapper
urls:
  home: https://symfony.com/asset-mapper
  repository: https://github.com/symfony/asset-mapper
  docs: https://symfony.com/doc/current/frontend/asset_mapper.html
category:
  - build-tool
description: Symfony component that maps asset directories to versioned public files and loads JavaScript through browser importmaps, without a bundler.
status: active
maintainer: Fabien Potencier
maintainerType: individual
firstRelease: 2023
language: php
runtime:
  - php
runtimeMin: php 8.4
basedOn:
  - symfony
runsAs:
  - static
installMethod: composer require symfony/asset-mapper symfony/asset symfony/twig-pack
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-10-14
githubStargazers: 173
packagistDownloads: 12580866
contributors: 53
packagistMonthlyDownloads: 1357726
dependentRepos: 23
dependentPackages: 32
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://symfony.com/asset-mapper
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/symfony/asset-mapper
    checkedAt: 2026-10-28
  - field: urls
    url: https://symfony.com/doc/current/frontend/asset_mapper.html
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/symfony/asset-mapper/8.2/LICENSE
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://raw.githubusercontent.com/symfony/asset-mapper/8.2/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/symfony/asset-mapper
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/symfony/asset-mapper/v8.1.9/composer.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/symfony/asset-mapper/v8.1.9/composer.json
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/symfony/asset-mapper/8.2/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://symfony.com/asset-mapper
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://symfony.com/doc/current/frontend/asset_mapper.html
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://symfony.com/doc/current/frontend/asset_mapper.html
    checkedAt: 2026-10-28
  - field: license
    url: https://packagist.org/packages/symfony/asset-mapper.json
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/symfony/asset-mapper/8.2/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/symfony/asset-mapper/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/symfony/asset-mapper/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/symfony/asset-mapper/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/symfony/asset-mapper
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/symfony/asset-mapper/contributors
    checkedAt: 2026-10-28
  - field: packagistDownloads
    url: https://packagist.org/packages/symfony/asset-mapper.json
    checkedAt: 2026-10-28
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/symfony/asset-mapper.json
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/symfony%2Fasset-mapper
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/symfony%2Fasset-mapper
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
npmWeeklyDownloads: null
---

Symfony AssetMapper is the component that the Symfony framework uses to serve application assets without a bundler. It maps directories, such as assets/, to public paths and gives each file a version hash in its name. JavaScript modules load through a browser importmap, so one module can import another or a third-party package without a build step, and a Twig call renders the map into the page.

The component is installed with Composer. In development, the Symfony application returns the versioned URLs itself. Before deployment, the asset-map:compile command writes the final files into public/assets, where the web server serves them directly.

## Worth knowing

The component does not minify assets. The project points to separate bundles for Sass, TypeScript, Tailwind CSS and minification, and to a dedicated bundle for linting.
