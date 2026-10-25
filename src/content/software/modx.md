---
id: modx
name: MODX
urls:
  home: https://modx.com
  repository: https://github.com/modxcms/revolution
  docs: https://docs.modx.com/3.x/en/index
category:
  - cms
  - framework
description: Open-source PHP content management system and application framework, published as MODX Revolution.
status: active
maintainer: MODX, LLC
maintainerType: company
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
contentStore:
  - database
databases:
  - mysql
i18n: yes
runsAs:
  - per-request
installMethod: zip download, composer create-project, git, cli
licenseModel: open-source
license: GPL-2.0, GPL-2.0+
currentMajor: "3"
latestReleaseDate: 2026-08-26
githubStargazers: 1413
packagistDownloads: 11752
packagistMonthlyDownloads: 838
httpArchiveSites: 5508
dependentRepos: 5
dependentPackages: 1
social:
  forum: https://forums.modx.com/
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://api.github.com/repos/modxcms/revolution
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/modxcms/revolution
    checkedAt: 2026-10-20
  - field: urls
    url: https://raw.githubusercontent.com/modxcms/revolution/3.x/composer.json
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://raw.githubusercontent.com/modxcms/revolution/3.x/README.md
    checkedAt: 2026-10-20
  - field: category
    url: https://raw.githubusercontent.com/modxcms/revolution/3.x/README.md
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/modxcms/revolution
    checkedAt: 2026-10-20
  - field: runtime
    url: https://raw.githubusercontent.com/modxcms/revolution/3.x/composer.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://raw.githubusercontent.com/modxcms/revolution/3.x/composer.json
    checkedAt: 2026-10-20
  - field: i18n
    url: https://raw.githubusercontent.com/modxcms/revolution/3.x/README.md
    checkedAt: 2026-10-20
  - field: databases
    url: https://github.com/modxorg/Docs/blob/3.x/en/getting-started/server-requirements.md
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://github.com/modxorg/Docs/blob/3.x/en/getting-started/server-requirements.md
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/modxorg/Docs/blob/3.x/en/getting-started/installation.md
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/modxorg/Docs/blob/3.x/en/getting-started/installation/composer.md
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://github.com/modxorg/Docs/blob/3.x/en/getting-started/server-requirements.md
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/modxcms/revolution
    checkedAt: 2026-10-20
  - field: license
    url: https://repo.packagist.org/p2/modx/revolution.json
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://api.github.com/repos/modxcms/revolution/tags
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://repo.packagist.org/p2/modx/revolution.json
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/modxcms/revolution
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/modx/revolution.json
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/modx/revolution.json
    checkedAt: 2026-10-20
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-25
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/modx%2Frevolution
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/modx%2Frevolution
    checkedAt: 2026-10-25
  - field: packagistMonthlyDownloads
    url: https://packagist.org/packages/modx/revolution/stats.json
    checkedAt: 2026-10-25
ai: authored
npmWeeklyDownloads: null
---

MODX Revolution is a content management system and application framework written in PHP, which its README describes for multi-language, multi-domain sites. Content is kept in a MySQL database, and a web server such as Apache or nginx runs it for each request.

The [installation guide](https://github.com/modxorg/Docs/blob/3.x/en/getting-started/installation.md) offers a zip package that is extracted and set up as the usual path, plus Composer, Git and command-line installs.

## Worth knowing

The documentation names PostgreSQL support only as a third-party implementation, and extras often ship database drivers for MySQL alone.
