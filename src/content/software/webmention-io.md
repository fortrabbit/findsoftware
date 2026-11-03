---
id: webmention-io
name: Webmention.io
urls:
  home: https://webmention.io
  repository: https://github.com/aaronpk/webmention.io
  docs: https://webmention.io/api
category:
  - community
description: Webmention receiver that accepts mentions for any web page, offered as a hosted service and as open source PHP code.
status: active
maintainer: Aaron Parecki
maintainerType: individual
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
databases:
  - mysql
  - mariadb
adminUi: true
runsAs:
  - always-on
installMethod: composer install from the repository, then MySQL schema and php -S
licenseModel: open-source
license: BSD-2-Clause
githubStargazers: 875
contributors: 1
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://webmention.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/aaronpk/webmention.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/aaronpk/webmention.io/blob/php/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/aaronpk/webmention.io/blob/php/README.md
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/aaronpk/webmention.io/blob/php/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/aaronpk/webmention.io
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/aaronpk/webmention.io/blob/php/README.md
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/aaronpk/webmention.io/blob/php/README.md
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/aaronpk/webmention.io/blob/php/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/aaronpk/webmention.io/blob/php/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/aaronpk/webmention.io/blob/php/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/aaronpk/webmention.io/blob/php/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/aaronpk/webmention.io/blob/php/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/aaronpk/webmention.io/blob/php/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://raw.githubusercontent.com/aaronpk/webmention.io/main/LICENSE.txt
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/aaronpk/webmention.io/blob/php/README.md
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/aaronpk/webmention.io
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/aaronpk/webmention.io/contributors?per_page=1
    checkedAt: 2026-11-03
ai: authored
npmWeeklyDownloads: null
---

Webmention.io is a receiver for webmentions, an implementation of the Webmention protocol that runs apart from the website it serves. A site adds a link tag to its HTML pointing at the service, and a static site gets webmentions that way. The service verifies each mention in the background with a worker. The hosted service at webmention.io is run by the project's maintainer, and the same code can run on a server of one's own: PHP with MySQL or MariaDB, Redis and a worker process, as the README's development section describes.

The API lists and counts the mentions of a page and exports an account's data. A small script renders a page's mentions with no dependencies. Web hooks fire when a mention is received or deleted, and a dashboard deletes mentions and blocks their sources.

## Worth knowing

The install steps sit in the README's development section, and the repository has no releases, so there is no tagged version to pin. The default branch has no LICENSE file although the README names one. Sign-in uses IndieAuth, with an indielogin.com fallback that an operator setting can switch off.
