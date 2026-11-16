---
id: twig
name: Twig
urls:
  home: https://twig.symfony.com/
  repository: https://github.com/twigphp/Twig
  docs: https://twig.symfony.com/doc/3.x/intro.html
category:
  - library
description: Template engine for PHP that compiles templates to optimized PHP code and can run untrusted templates in a sandbox.
status: active
maintainer: Twig Team
maintainerType: community
firstRelease: 2009
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
installMethod: composer
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "3"
latestReleaseDate: 2026-09-25
githubStargazers: 8380
packagistDownloads: 513258663
contributors: 401
dependentRepos: 131829
dependentPackages: 5847
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://twig.symfony.com/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/twigphp/Twig
    checkedAt: 2026-11-16
  - field: urls
    url: https://twig.symfony.com/doc/3.x/intro.html
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/twigphp/Twig/tags
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/twigphp/Twig/3.x/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/twigphp/Twig/3.x/README.rst
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/twigphp/Twig
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/twigphp/Twig/blob/v3.30.0/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/twigphp/Twig/blob/v3.30.0/composer.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://twig.symfony.com/doc/3.x/intro.html
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/twigphp/Twig/blob/v3.30.0/composer.json
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/twigphp/Twig/blob/v3.30.0/composer.json
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/twigphp/Twig/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/twigphp/Twig/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/twigphp/Twig
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/twigphp/Twig/contributors
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/twig/twig.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/twig%2Ftwig
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/twig%2Ftwig
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
runsAs: null
---

Twig is a template engine for PHP. A PHP application loads templates through a loader and an environment object, then renders a named template with an array of variables. Twig compiles each template to plain PHP code and keeps the compiled files in a cache directory, so the application runs compiled code rather than the template text.

Twig can also evaluate templates written by users in a sandbox, where the developer decides which tags, filters and object methods the template may use. The [documentation](https://twig.symfony.com/doc/3.x/intro.html) introduces the basic API.
