---
id: dokuwiki
name: DokuWiki
urls:
  home: https://www.dokuwiki.org
  repository: https://github.com/dokuwiki/dokuwiki
  docs: https://www.dokuwiki.org
category:
  - wiki
description: Open-source PHP wiki engine that keeps its pages in files and needs no database.
status: active
maintainer: Andreas Gohr
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
contentStore:
  - flat-file
runsAs:
  - per-request
installMethod: copy the files to the web server, then run install.php
licenseModel: open-source
license: GPL-2.0
latestReleaseDate: 2026-09-02
githubStargazers: 4730
contributors: 1265
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://github.com/dokuwiki/dokuwiki/blob/master/composer.json
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/dokuwiki/dokuwiki
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/dokuwiki/dokuwiki/blob/master/README
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/dokuwiki/dokuwiki/blob/master/README
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/dokuwiki/dokuwiki/blob/master/composer.json
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/dokuwiki/dokuwiki
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/dokuwiki/dokuwiki/blob/master/composer.json
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/dokuwiki/dokuwiki/blob/master/composer.json
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://api.github.com/repos/dokuwiki/dokuwiki/contents/data
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://github.com/dokuwiki/dokuwiki/blob/master/install.php
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://github.com/dokuwiki/dokuwiki/blob/master/install.php
    checkedAt: 2026-10-20
  - field: license
    url: https://api.github.com/repos/dokuwiki/dokuwiki
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://github.com/dokuwiki/dokuwiki/blob/master/composer.json
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/dokuwiki/dokuwiki/releases/latest
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/dokuwiki/dokuwiki
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/dokuwiki/dokuwiki/contributors?anon=true&per_page=100
    checkedAt: 2026-10-20
figure:
  emoji: 📚
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: PHP · Wiki
ai: authored
npmWeeklyDownloads: null
---

DokuWiki is a wiki engine written in PHP. Pages and uploaded media are stored as files under the data directory of an installation, and the project's composer manifest describes it as not requiring a database. To set it up, the files are copied to a web space with PHP and install.php is opened in a browser.
