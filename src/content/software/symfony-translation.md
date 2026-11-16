---
id: symfony-translation
name: Translation
urls:
  home: https://symfony.com/packages/translation
  repository: https://github.com/symfony/translation
  docs: https://symfony.com/doc/current/translation.html
category:
  - library
description: PHP component of Symfony that provides tools to translate messages and internationalize an application.
status: active
maintainer: Fabien Potencier
firstRelease: 2011
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.4
i18n: yes
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-11-04
githubStargazers: 6598
packagistDownloads: 986301422
contributors: 224
packagistMonthlyDownloads: 32192789
dependentRepos: 524870
dependentPackages: 1883
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: name
    url: https://symfony.com/packages/translation
    checkedAt: 2026-11-16
  - field: urls
    url: https://symfony.com/packages/translation
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/symfony/translation
    checkedAt: 2026-11-16
  - field: urls
    url: https://symfony.com/doc/current/translation.html
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/symfony/translation/blob/v8.1.11/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://repo.packagist.org/p2/symfony/translation.json
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/symfony/translation
    checkedAt: 2026-11-16
  - field: category
    url: https://symfony.com/packages/translation
    checkedAt: 2026-11-16
  - field: i18n
    url: https://symfony.com/packages/translation
    checkedAt: 2026-11-16
  - field: runtime
    url: https://symfony.com/packages/translation
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/symfony/translation/blob/v8.1.11/composer.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://symfony.com/packages/translation
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/symfony/translation/blob/v8.1.11/composer.json
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://api.github.com/repos/symfony/translation
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/symfony/translation/releases/tags/v8.1.11
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/symfony/translation/releases/tags/v8.1.11
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/symfony/translation
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/symfony/translation/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/symfony/translation.json
    checkedAt: 2026-11-16
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/symfony/translation.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/symfony%2Ftranslation
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/symfony%2Ftranslation
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

Translation is a PHP component of Symfony that looks up translated messages for the user's locale. Dictionaries can be written in YAML, PHP or XLIFF, and a locale can fall back to other locales. The docs also describe a Twig filter and tag for translating in templates, and the translation:extract command lists the messages the code and templates use. The default locale and the translation directory are set in the application's configuration.

## Worth knowing

Translating into languages other than English needs the PHP intl extension. Translation files can be pushed to and pulled from third-party translation platforms, through provider packages installed separately.
