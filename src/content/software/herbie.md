---
id: herbie
name: Herbie
urls:
  home: https://herbie.tebe.ch
  repository: https://github.com/getherbie/herbie
  docs: https://herbie.tebe.ch/doc
category:
  - cms
description: Flat-file content management system in PHP that keeps pages as text files and renders them with Twig.
status: active
maintainer: Thomas Breuss
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.0
contentStore:
  - flat-file
templating: twig
installMethod: composer create-project, docker compose
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "2"
latestReleaseDate: 2025-05-23
githubStargazers: 90
packagistDownloads: 2267
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://herbie.tebe.ch/
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/getherbie/herbie
    checkedAt: 2026-10-20
  - field: urls
    url: https://herbie.tebe.ch/doc/introduction
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://raw.githubusercontent.com/getherbie/herbie/2.x/LICENCE.md
    checkedAt: 2026-10-20
  - field: language
    url: https://raw.githubusercontent.com/getherbie/herbie/v2.2.0/composer.json
    checkedAt: 2026-10-20
  - field: category
    url: https://herbie.tebe.ch/
    checkedAt: 2026-10-20
  - field: runtime
    url: https://herbie.tebe.ch/doc/first-steps/installation
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://herbie.tebe.ch/doc/first-steps/installation
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://herbie.tebe.ch/doc/introduction
    checkedAt: 2026-10-20
  - field: templating
    url: https://herbie.tebe.ch/
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://herbie.tebe.ch/doc/first-steps/installation
    checkedAt: 2026-10-20
  - field: license
    url: https://raw.githubusercontent.com/getherbie/herbie/v2.2.0/composer.json
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://api.github.com/repos/getherbie/herbie/releases/latest
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/getherbie/herbie/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/getherbie/herbie
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/getherbie/herbie.json
    checkedAt: 2026-10-20
ai: authored
npmWeeklyDownloads: null
---

Herbie is a flat-file content management system written in PHP. Pages are text files rather than database rows, and layouts are [Twig](https://twig.symfony.com) templates. The [installation guide](https://herbie.tebe.ch/doc/first-steps/installation) creates a site from the getherbie/start-website template with Composer or Docker Compose.

## Worth knowing

The installation guide documents local setups only, using PHP's built-in server or a Docker Compose service. It does not describe running a live site.
