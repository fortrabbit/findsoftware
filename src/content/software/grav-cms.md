---
id: grav-cms
name: Grav
urls:
  home: https://getgrav.org
  repository: https://github.com/getgrav/grav
  docs: https://learn.getgrav.org
  pricing: https://getgrav.org/premium
  plugins: https://getgrav.org/downloads/plugins
category:
  - cms
description: Flat-file PHP content management system that stores pages as Markdown and YAML files without a database.
status: active
maintainer: Trilby Media
maintainerType: company
firstRelease: 2015
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
basedOn:
  - symfony
contentStore:
  - flat-file
adminUi: true
headlessApi:
  - rest
templating: twig
i18n: yes
runsAs:
  - per-request
installMethod: zip download, composer create-project getgrav/grav, git clone, docker, cloudron, linode marketplace
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-17
githubStargazers: 15687
packagistDownloads: 90772
contributors: 215
pluginCount: 531
social:
  x: https://twitter.com/getgrav
  discord: https://chat.getgrav.org
  forum: https://getgrav.org/forum
wikidata: Q56313389
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://getgrav.org
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/getgrav/grav
    checkedAt: 2026-10-18
  - field: urls
    url: https://getgrav.org
    checkedAt: 2026-10-18
  - field: urls
    url: https://getgrav.org
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://getgrav.org/about
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://getgrav.org/
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://getgrav.org
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q56313389
    checkedAt: 2026-10-18
  - field: category
    url: https://getgrav.org
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://getgrav.org
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/getgrav/grav
    checkedAt: 2026-10-18
  - field: runtime
    url: https://learn.getgrav.org/2/basics/requirements
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://learn.getgrav.org/2/basics/requirements
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://repo.packagist.org/p2/getgrav/grav.json
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://getgrav.org
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://learn.getgrav.org/2/basics/installation
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://getgrav.org/headless
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://learn.getgrav.org/20/api
    checkedAt: 2026-10-18
  - field: templating
    url: https://getgrav.org
    checkedAt: 2026-10-18
  - field: i18n
    url: https://learn.getgrav.org/2/content/multi-language
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://learn.getgrav.org/2/basics/installation
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/getgrav/grav
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://getgrav.org/headless
    checkedAt: 2026-10-18
  - field: urls
    url: https://getgrav.org
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://api.github.com/repos/getgrav/grav/releases/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://api.github.com/repos/getgrav/grav/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/getgrav/grav
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/getgrav/grav/contributors
    checkedAt: 2026-10-18
  - field: packagistDownloads
    url: https://packagist.org/packages/getgrav/grav.json
    checkedAt: 2026-10-18
  - field: urls
    url: https://getgrav.org/downloads/plugins
    checkedAt: 2026-10-18
  - field: pluginCount
    url: https://getgrav.org/downloads/plugins
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://learn.getgrav.org/17/basics/installation
    checkedAt: 2026-10-19
figure:
  emoji: 📝
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: PHP · CMS
ai: authored
npmWeeklyDownloads: null
---

Grav is a flat-file content management system in PHP, built and maintained by Trilby Media. Pages are folders of Markdown and YAML files, so a site runs without a database. Rendering uses Twig on top of Symfony components. Plugins and themes come from the project's directory, and multi-language content is supported.

The admin is a single-page application built with SvelteKit and installed as an optional plugin. A REST API is available for headless use.

## Worth knowing

Multisite support is preliminary, and the admin does not fully support it. The project's documentation disagrees on whether the REST API ships with Grav or comes from a plugin. Premium themes and plugins are one-time purchases, and premium plugins are licensed per production site.
