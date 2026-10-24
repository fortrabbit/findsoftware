---
id: pelican-panel
name: Pelican Panel
urls:
  home: https://pelican.dev
  repository: https://github.com/pelican/panel
  docs: https://pelican.dev/docs
category:
  - framework
description: Free, open-source game server control panel, built on Laravel and Filament, that runs game servers in Docker containers.
status: active
maintainer: Pelican
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.4
basedOn:
  - laravel
  - filament
databases:
  - sqlite
  - mysql
  - mariadb
  - postgres
runsAs:
  - per-request
installMethod: composer install from the downloaded panel files
licenseModel: open-source
license: AGPL-3.0-only, AGPL-3.0
latestReleaseDate: 2026-10-10
githubStargazers: 2393
contributors: 232
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: name
    url: https://pelican.dev/docs/panel/getting-started
    checkedAt: 2026-10-21
  - field: urls
    url: https://pelican.dev
    checkedAt: 2026-10-21
  - field: urls
    url: https://github.com/pelican/panel
    checkedAt: 2026-10-21
  - field: urls
    url: https://pelican.dev/docs
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://pelican.dev
    checkedAt: 2026-10-21
  - field: basedOn
    url: https://pelican.dev/docs/comparison
    checkedAt: 2026-10-21
  - field: category
    url: https://pelican.dev/docs/comparison
    checkedAt: 2026-10-21
  - field: language
    url: https://github.com/pelican/panel
    checkedAt: 2026-10-21
  - field: runtime
    url: https://pelican.dev/docs/panel/getting-started
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://github.com/pelican/panel/blob/main/composer.json
    checkedAt: 2026-10-21
  - field: databases
    url: https://pelican.dev/docs/panel/getting-started
    checkedAt: 2026-10-21
  - field: databases
    url: https://pelican.dev/docs/panel/getting-started
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://pelican.dev/docs/panel/getting-started
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://pelican.dev/docs/panel/getting-started
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://pelican.dev/docs/panel/getting-started
    checkedAt: 2026-10-21
  - field: license
    url: https://github.com/pelican/panel/blob/main/composer.json
    checkedAt: 2026-10-21
  - field: license
    url: https://github.com/pelican/panel
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/pelican/panel/releases/latest
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/pelican/panel
    checkedAt: 2026-10-21
  - field: contributors
    url: https://api.github.com/repos/pelican/panel/contributors
    checkedAt: 2026-10-21
ai: authored
npmWeeklyDownloads: null
---

Pelican Panel is a free, open-source game server control panel built on Laravel and Filament. It started as a fork of Pterodactyl, as the project's comparison page states. The panel is a Laravel web application that runs on a web server with PHP, and it installs directly with `composer install` or with Docker.

The panel's database can be SQLite, MySQL, MariaDB or PostgreSQL. The game servers it manages run in Docker containers, started by a separate component, Wings, which is not part of this record. The project is maintained under the name Pelican.

## Worth knowing

The only tagged release is a release candidate, and no stable version is tagged, so the record shows the release candidate's date. The name is shared with the Pelican static site generator, which is a different project.
