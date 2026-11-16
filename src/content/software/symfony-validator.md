---
id: symfony-validator
name: Symfony Validator
urls:
  home: https://symfony.com/packages/validator
  repository: https://github.com/symfony/validator
  docs: https://symfony.com/doc/current/validation.html
category:
  - library
description: PHP component of the Symfony project that validates values against constraints, using validator classes for the rules.
status: active
maintainer: Fabien Potencier
firstRelease: 2011
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.4
i18n: validation error messages can be translated
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-11-04
githubStargazers: 2677
packagistDownloads: 346879656
contributors: 388
dependentRepos: 61611
dependentPackages: 3053
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: name
    url: https://symfony.com/packages/validator
    checkedAt: 2026-11-16
  - field: urls
    url: https://symfony.com/packages/validator
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/symfony/validator
    checkedAt: 2026-11-16
  - field: urls
    url: https://symfony.com/doc/current/validation.html
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/symfony/validator/blob/8.2/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/symfony/validator/commits/v2.0.0
    checkedAt: 2026-11-16
  - field: category
    url: https://symfony.com/doc/current/validation.html
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/symfony/validator
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/symfony/validator/blob/v8.1.11/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/symfony/validator/blob/v8.1.11/composer.json
    checkedAt: 2026-11-16
  - field: i18n
    url: https://symfony.com/doc/current/validation/translations.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://symfony.com/doc/current/validation.html
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/symfony/validator/blob/v8.1.11/composer.json
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/symfony/validator/blob/v8.1.11/composer.json
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/symfony/validator/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/symfony/validator/releases
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/symfony/validator.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/symfony/validator
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/symfony/validator/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/symfony%2Fvalidator
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/symfony%2Fvalidator
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
npmWeeklyDownloads: null
runsAs: null
---

Symfony Validator is a PHP component that checks values against constraints. The [validation guide](https://symfony.com/doc/current/validation.html) says it rests on two concepts: constraints define the rules, and validators are the classes that hold the validation logic. The repository README says it follows the JSR-303 Bean Validation specification.

Error messages of constraints used in forms can be translated. The component belongs to the Symfony project.

## Worth knowing

The package is a read-only split of the main Symfony repository. Issues and pull requests go to that main repository, not to this one.
