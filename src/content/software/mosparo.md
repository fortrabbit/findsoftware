---
id: mosparo
name: mosparo
urls:
  home: https://mosparo.io
  repository: https://github.com/mosparo/mosparo
  docs: https://documentation.mosparo.io
  plugins: https://documentation.mosparo.io/docs/integration/with_plugins
category:
  - forms
description: Self-hosted spam protection for web forms that checks submitted form data against rules instead of showing a puzzle.
status: active
maintainer: mosparo Association
maintainerType: foundation
firstRelease: 2022
hqCountry: CH
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
databases:
  - mysql
  - mariadb
  - postgres
  - sqlite
adminUi: true
i18n: user interface translated through Weblate
runsAs:
  - per-request
  - scheduled
installMethod: zip archive from the releases page, uploaded to a web host
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-26
githubStargazers: 313
contributors: 74
social:
  x: https://twitter.com/mosparo_io
  bluesky: https://bsky.app/profile/mosparo.io
  mastodon: https://zepi.social/@mosparo
  youtube: https://www.youtube.com/@mosparo
  instagram: https://www.instagram.com/mosparo/
  threads: https://www.threads.net/@mosparo
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://mosparo.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/mosparo/mosparo
    checkedAt: 2026-11-03
  - field: urls
    url: https://documentation.mosparo.io/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://mosparo.io/
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://mosparo.io/legal-notice/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/mosparo/mosparo
    checkedAt: 2026-11-03
  - field: category
    url: https://mosparo.io/
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/mosparo/mosparo/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://raw.githubusercontent.com/mosparo/mosparo/v1.5.13/composer.json
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/mosparo/mosparo/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://documentation.mosparo.io/docs/installation/install/docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://documentation.mosparo.io/docs/installation/install/docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/mosparo/mosparo/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://documentation.mosparo.io/docs/installation/install/kubernetes
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://documentation.mosparo.io/docs/installation/install/normal
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://documentation.mosparo.io/docs/installation/configure/cron_jobs
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/mosparo/mosparo/blob/master/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://mosparo.io/how-to-use/
    checkedAt: 2026-11-03
  - field: i18n
    url: https://github.com/mosparo/mosparo/blob/master/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/mosparo/mosparo
    checkedAt: 2026-11-03
  - field: license
    url: https://raw.githubusercontent.com/mosparo/mosparo/v1.5.13/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/mosparo/mosparo/blob/master/README.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/mosparo/mosparo/releases
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/mosparo/mosparo/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/mosparo/mosparo/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/mosparo/mosparo
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/mosparo/mosparo/contributors
    checkedAt: 2026-11-03
  - field: urls
    url: https://documentation.mosparo.io/docs/integration/with_plugins
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
renderingModes: null
npmWeeklyDownloads: null
---

mosparo is spam protection for web forms. It checks the data a visitor enters against rules set up for a project instead of showing a puzzle. The site loads a box from the mosparo installation, and the site's backend verifies the submitted data with a mosparo API client library. The installation has a web interface where projects are created for each website and rules are managed, with administrator and regular user accounts.

The installation is a PHP application that runs on web hosting from the release archive, from the mosparo/mosparo Docker image, from a Helm chart, or from the GitHub source with Composer and npm. Its data is stored in MySQL, MariaDB, PostgreSQL or SQLite, and cron jobs handle cleanup and rule package refreshes. The README says submitted data is deleted after 14 days and that the software uses only the form data, the IP address and the user agent of the visitor. The [documentation](https://documentation.mosparo.io) covers installation and integration, including a [list of plugins](https://documentation.mosparo.io/docs/integration/with_plugins) for other systems.
