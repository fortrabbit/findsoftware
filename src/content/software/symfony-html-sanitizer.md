---
id: symfony-html-sanitizer
name: Symfony HtmlSanitizer
urls:
  home: https://symfony.com/packages/html-sanitizer
  repository: https://github.com/symfony/html-sanitizer
  docs: https://symfony.com/doc/current/html_sanitizer.html
category:
  - library
description: PHP component with an object-oriented API for sanitizing untrusted HTML input before it is inserted into a document.
status: active
maintainer: Fabien Potencier
firstRelease: 2022
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.4
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-11-04
githubStargazers: 285
packagistDownloads: 71420224
contributors: 25
packagistMonthlyDownloads: 9744662
dependentRepos: 1150
dependentPackages: 29
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://symfony.com/packages/html-sanitizer
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/symfony/html-sanitizer
    checkedAt: 2026-11-16
  - field: urls
    url: https://symfony.com/doc/current/html_sanitizer.html
    checkedAt: 2026-11-16
  - field: category
    url: https://symfony.com/packages/html-sanitizer
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/symfony/html-sanitizer
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/symfony/html-sanitizer/blob/v8.1.11/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/symfony/html-sanitizer/blob/v8.1.11/composer.json
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/symfony/html-sanitizer
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/symfony/html-sanitizer/blob/8.2/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://repo.packagist.org/p2/symfony/html-sanitizer.json
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/symfony/html-sanitizer/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/symfony/html-sanitizer/releases
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://symfony.com/doc/current/html_sanitizer.html
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/symfony/html-sanitizer.json
    checkedAt: 2026-11-16
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/symfony/html-sanitizer.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/symfony/html-sanitizer
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/symfony/html-sanitizer/contributors
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/symfony/html-sanitizer
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/symfony/html-sanitizer
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

Symfony HtmlSanitizer is a PHP component that cleans untrusted HTML before it is inserted into a document. It rebuilds the markup from the elements and attributes a configuration allows, and its docs give output from WYSIWYG editors as an example of untrusted input. It is based on the W3C HTML Sanitizer standard proposal.

The Symfony framework exposes the sanitizer as a service. It integrates with Symfony Forms through an option on text fields, and the docs show a Twig filter and a standalone use.

The repository is a read-only split of the main Symfony repository, which takes the issues and pull requests.
