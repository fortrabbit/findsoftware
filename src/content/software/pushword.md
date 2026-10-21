---
id: pushword
name: Pushword
urls:
  home: https://pushword.piedweb.com
  repository: https://github.com/Pushword/Pushword
  docs: https://pushword.piedweb.com
  plugins: https://pushword.piedweb.com/extensions
category:
  - cms
description: Symfony-based content management system for websites, with Markdown or database content and an optional static export.
status: active
maintainer: Paprika Forge SAS
maintainerType: company
hqCountry: FR
language: php
runtime:
  - php
hosting:
  - php
  - static
runtimeMin: php 8.5
basedOn:
  - symfony
contentStore:
  - database
  - flat-file
databases:
  - sqlite
  - postgres
adminUi: true
headlessApi:
  - rest
templating: twig
i18n: yes
runsAs:
  - static
  - per-request
renderingModes:
  - static
  - server
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-20
githubStargazers: 30
packagistDownloads: 22989
contributors: 2
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://pushword.piedweb.com
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/Pushword/Pushword
    checkedAt: 2026-10-21
  - field: urls
    url: https://github.com/Pushword/Pushword/blob/main/README.md
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://piedweb.com/legal-notice
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://piedweb.com/legal-notice
    checkedAt: 2026-10-21
  - field: hqCountry
    url: https://piedweb.com/legal-notice
    checkedAt: 2026-10-21
  - field: category
    url: https://github.com/Pushword/Pushword/blob/main/README.md
    checkedAt: 2026-10-21
  - field: basedOn
    url: https://github.com/Pushword/Pushword/blob/main/README.md
    checkedAt: 2026-10-21
  - field: language
    url: https://pushword.piedweb.com
    checkedAt: 2026-10-21
  - field: runtime
    url: https://pushword.piedweb.com/installation
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://pushword.piedweb.com/installation
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://pushword.piedweb.com/installation
    checkedAt: 2026-10-21
  - field: databases
    url: https://pushword.piedweb.com/installation
    checkedAt: 2026-10-21
  - field: databases
    url: https://pushword.piedweb.com/installation
    checkedAt: 2026-10-21
  - field: contentStore
    url: https://github.com/Pushword/Pushword/blob/main/README.md
    checkedAt: 2026-10-21
  - field: templating
    url: https://github.com/Pushword/Pushword/blob/main/README.md
    checkedAt: 2026-10-21
  - field: adminUi
    url: https://github.com/Pushword/Pushword/blob/main/README.md
    checkedAt: 2026-10-21
  - field: headlessApi
    url: https://github.com/Pushword/Pushword/blob/main/README.md
    checkedAt: 2026-10-21
  - field: i18n
    url: https://github.com/Pushword/Pushword/blob/main/README.md
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://pushword.piedweb.com/extension/static-generator
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://pushword.piedweb.com
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://pushword.piedweb.com
    checkedAt: 2026-10-21
  - field: urls
    url: https://github.com/Pushword/Pushword/blob/main/README.md
    checkedAt: 2026-10-21
  - field: license
    url: https://api.github.com/repos/Pushword/Pushword
    checkedAt: 2026-10-21
  - field: licenseModel
    url: https://pushword.piedweb.com
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://api.github.com/repos/Pushword/Pushword/releases/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/Pushword/Pushword/releases/latest
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/Pushword/Pushword
    checkedAt: 2026-10-21
  - field: contributors
    url: https://api.github.com/repos/Pushword/Pushword/contributors
    checkedAt: 2026-10-21
  - field: packagistDownloads
    url: https://packagist.org/packages/pushword/core.json
    checkedAt: 2026-10-21
  - field: packagistDownloads
    url: https://packagist.org/packages/pushword/core.json
    checkedAt: 2026-10-21
figure:
  emoji: 📝
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

Pushword is a content management system built on Symfony. Pages are Markdown files with front matter, or database entries, rendered with Twig templates. An admin extension manages pages, media and users, a REST API exposes the content, and several sites and languages run from one installation.

The static generator extension exports the whole site as files for GitHub Pages, Apache, FrankenPHP or Caddy. The same installation can also be served on any PHP host.

## Worth knowing

The project offers three optional Rust executables that take over selected operations from PHP. The project calls all three experimental, and each defaults to PHP.
