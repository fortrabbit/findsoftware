---
id: mediawiki
name: MediaWiki
urls:
  home: https://www.mediawiki.org
  repository: https://github.com/wikimedia/mediawiki
  docs: https://www.mediawiki.org/wiki/Manual:Contents
category:
  - wiki
  - ssg
description: Open-source PHP wiki software for collaborative documentation and knowledge sharing.
status: active
maintainer: MediaWiki contributors
maintainerType: community
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
contentStore:
  - database
databases:
  - sqlite
  - mariadb
  - mysql
  - postgres
runsAs:
  - per-request
installMethod: download the software, upload the files to a web server, then run the installation script in the browser
licenseModel: open-source
license: GPL-2.0-or-later
currentMajor: "1"
latestReleaseDate: 2026-10-02
githubStargazers: 5208
contributors: 1104
addedAt: 2026-10-19
checkedAt: 2026-10-20
sources:
  - field: name
    url: https://www.mediawiki.org
    checkedAt: 2026-10-20
  - field: urls
    url: https://www.mediawiki.org
    checkedAt: 2026-10-20
  - field: urls
    url: https://api.github.com/repos/wikimedia/mediawiki
    checkedAt: 2026-10-20
  - field: urls
    url: https://www.mediawiki.org/wiki/MediaWiki
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://www.mediawiki.org
    checkedAt: 2026-10-20
  - field: category
    url: https://www.mediawiki.org
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/wikimedia/mediawiki
    checkedAt: 2026-10-20
  - field: runtime
    url: https://www.mediawiki.org/wiki/Manual:Installing_MediaWiki
    checkedAt: 2026-10-20
  - field: databases
    url: https://www.mediawiki.org/wiki/Manual:Installing_MediaWiki
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://www.mediawiki.org/wiki/Manual:Installing_MediaWiki
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://www.mediawiki.org/wiki/Manual:Installing_MediaWiki
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://www.mediawiki.org/wiki/Manual:Installing_MediaWiki
    checkedAt: 2026-10-20
  - field: contentStore
    url: https://www.mediawiki.org/wiki/Manual:Installing_MediaWiki
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/wikimedia/mediawiki/blob/master/COPYING
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://github.com/wikimedia/mediawiki/blob/master/COPYING
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://endoflife.date/api/mediawiki.json
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/wikimedia/mediawiki
    checkedAt: 2026-10-20
  - field: contributors
    url: https://github.com/wikimedia/mediawiki
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://www.mediawiki.org/wiki/Manual:Installation_requirements
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://endoflife.date/api/mediawiki.json
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/wikimedia/mediawiki/blob/master/COPYING
    checkedAt: 2026-10-20
ai: authored
npmWeeklyDownloads: null
---

MediaWiki is wiki software that its homepage describes as a collaboration and documentation platform. Its files are uploaded to a web server, and an installation script run in the browser sets up the wiki and the database that holds its content, as the [installation manual](https://www.mediawiki.org/wiki/Manual:Installing_MediaWiki) describes.
