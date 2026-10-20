---
id: elgg
name: Elgg
urls:
  home: https://elgg.org
  repository: https://github.com/Elgg/Elgg
  docs: https://learn.elgg.org
  plugins: https://elgg.org/plugins
category:
  - community
description: Open-source PHP social networking engine for building social networks and community applications.
status: active
maintainer: Elgg Foundation
maintainerType: foundation
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
databases:
  - mariadb
  - mysql
headlessApi:
  - rest
i18n: internationalization and localization supported; Transifex integration possible
runsAs:
  - per-request
  - scheduled
installMethod: composer create-project, zip download
licenseModel: open-source
license: GPL-2.0-only, MIT
currentMajor: "7"
latestReleaseDate: 2026-10-09
githubStargazers: 1676
packagistDownloads: 17872
contributors: 109
social:
  forum: https://elgg.org/discussion/all
wikidata: Q2662124
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://elgg.org/
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/Elgg/Elgg
    checkedAt: 2026-10-20
  - field: urls
    url: https://elgg.org/
    checkedAt: 2026-10-20
  - field: language
    url: https://github.com/Elgg/Elgg
    checkedAt: 2026-10-20
  - field: category
    url: https://elgg.org/
    checkedAt: 2026-10-20
  - field: runtime
    url: https://learn.elgg.org/en/stable/intro/install.html
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://learn.elgg.org/en/stable/intro/install.html
    checkedAt: 2026-10-20
  - field: databases
    url: https://learn.elgg.org/en/stable/intro/install.html
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://learn.elgg.org/en/stable/intro/install.html
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://learn.elgg.org/en/stable/intro/install.html
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://learn.elgg.org/en/stable/intro/install.html
    checkedAt: 2026-10-20
  - field: headlessApi
    url: https://learn.elgg.org/en/stable/guides/web-services.html
    checkedAt: 2026-10-20
  - field: i18n
    url: https://elgg.org/about/features
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/Elgg/Elgg/blob/7.1.1/composer.json
    checkedAt: 2026-10-20
  - field: license
    url: https://learn.elgg.org/en/latest/intro/license.html
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://elgg.org/about/foundation
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://repo.packagist.org/p2/elgg/elgg.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/Elgg/Elgg/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/Elgg/Elgg
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/Elgg/Elgg/contributors?per_page=1&anon=true
    checkedAt: 2026-10-20
  - field: packagistDownloads
    url: https://packagist.org/packages/elgg/elgg.json
    checkedAt: 2026-10-20
  - field: urls
    url: https://elgg.org/
    checkedAt: 2026-10-20
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q2662124
    checkedAt: 2026-10-20
figure:
  emoji: 💬
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: PHP · Community
ai: authored
npmWeeklyDownloads: null
---

Elgg is a social networking engine written in PHP. It needs MariaDB or MySQL, and users install it with Composer or by uploading a zip archive. The [installation guide](https://learn.elgg.org/en/stable/intro/install.html) lists the PHP extensions, database versions and web servers it requires.

PHP serves each request. Background tasks run from timed requests to the site, so the host also needs a scheduled job that sends them. The [web services guide](https://learn.elgg.org/en/stable/guides/web-services.html) describes the API.

## Worth knowing

The full package with its core plugins is licensed under GPLv2. The framework without the plugins is licensed under MIT.
