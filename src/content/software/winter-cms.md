---
id: winter-cms
name: Winter CMS
urls:
  home: https://wintercms.com
  repository: https://github.com/wintercms/winter
  docs: https://wintercms.com/docs
  plugins: https://wintercms.com/marketplace (in development, no listings)
category:
  - cms
description: Open-source PHP content management system built on the Laravel framework, forked from October CMS.
status: active
maintainer: Frostbyte Foundation (organizational backing), led by Luke Towers
maintainerType: foundation
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
basedOn:
  - laravel
contentStore:
  - database
databases:
  - mariadb
  - mysql
  - postgres
  - sqlite
  - sqlserver
adminUi: true
templating: twig
i18n: via official Winter.Translate plugin
runsAs:
  - per-request
installMethod: composer create-project wintercms/winter, web installer, softaculous, docker
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-08-19
githubStargazers: 1522
packagistDownloads: 47293
contributors: 340
social:
  x: https://twitter.com/usewintercms
  discord: https://discord.gg/D5MFSPH6Ux
  forum: https://github.com/wintercms/winter/discussions
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://wintercms.com
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/wintercms/winter
    checkedAt: 2026-10-18
  - field: urls
    url: https://wintercms.com
    checkedAt: 2026-10-18
  - field: urls
    url: https://wintercms.com
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://github.com/wintercms/winter
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://wintercms.com
    checkedAt: 2026-10-18
  - field: category
    url: https://github.com/wintercms/winter
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://github.com/wintercms/winter
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/wintercms/winter
    checkedAt: 2026-10-18
  - field: runtime
    url: https://wintercms.com/docs/v1.2/docs/setup/installation
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://wintercms.com/docs/v1.2/docs/setup/installation
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/wintercms/winter.json
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://wintercms.com/docs/v1.2/docs/cms/themes
    checkedAt: 2026-10-18
  - field: databases
    url: https://wintercms.com/docs/v1.2/docs/setup/installation
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://github.com/wintercms/winter
    checkedAt: 2026-10-18
  - field: templating
    url: https://wintercms.com/docs/v1.2/docs/cms/themes
    checkedAt: 2026-10-18
  - field: i18n
    url: https://github.com/wintercms/wn-translate-plugin
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://wintercms.com/docs/v1.2/docs/setup/installation
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://wintercms.com/docs/v1.2/docs/architecture/using-composer
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/wintercms/winter
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://wintercms.com
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://api.github.com/repos/wintercms/winter/releases/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://api.github.com/repos/wintercms/winter/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/wintercms/winter
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/wintercms/winter/contributors
    checkedAt: 2026-10-18
  - field: packagistDownloads
    url: https://packagist.org/packages/wintercms/winter.json
    checkedAt: 2026-10-18
  - field: packagistDownloads
    url: https://packagist.org/packages/winter/wn-system-module.json
    checkedAt: 2026-10-18
  - field: urls
    url: https://wintercms.com/marketplace
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://wintercms.com/docs/setup/installation
    checkedAt: 2026-10-19
figure:
  emoji: 📝
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

Winter CMS is a content management system written in PHP on Laravel, with the project's own Storm library underneath. It began in 2021 as a fork of October CMS. Its themes are plain files, and an optional database layer can store modified CMS files. Themes use Twig. A backend administrator account is created during installation, and multilingual sites use the official Winter.Translate plugin.

The official container image runs FrankenPHP. The Frostbyte Foundation provides organizational backing, Luke Towers leads the project, and paid support is offered by Ringer HQ, a separate company.

## Worth knowing

The official marketplace is still in development and lists no extensions; it points to a community list instead. The [installation guide](https://wintercms.com/docs/v1.2/docs/setup/installation) lists the PHP extensions the install needs.
