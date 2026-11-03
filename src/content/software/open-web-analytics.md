---
id: open-web-analytics
name: Open Web Analytics
urls:
  home: https://www.openwebanalytics.com
  repository: https://github.com/Open-Web-Analytics/Open-Web-Analytics
  docs: https://github.com/Open-Web-Analytics/Open-Web-Analytics/wiki
category:
  - analytics
description: Open source web analytics framework that records visits to websites and applications and reports on them, with a JavaScript tracker and a PHP server.
status: active
maintainer: Peter Adams
maintainerType: individual
firstRelease: 2006
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
databases:
  - mysql
headlessApi:
  - rest
runsAs:
  - scheduled
  - per-request
installMethod: packaged release archive
licenseModel: open-source
license: GPL-2.0
currentMajor: "1"
latestReleaseDate: 2026-11-01
githubStargazers: 2697
contributors: 24
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.openwebanalytics.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/Open-Web-Analytics/Open-Web-Analytics
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/Open-Web-Analytics/Open-Web-Analytics/blob/master/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/Open-Web-Analytics/Open-Web-Analytics/blob/master/README.md
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/Open-Web-Analytics/Open-Web-Analytics/blob/master/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/Open-Web-Analytics/Open-Web-Analytics
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/Open-Web-Analytics/Open-Web-Analytics/wiki/Technical-Requirements
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/Open-Web-Analytics/Open-Web-Analytics/blob/1.14.6/composer.json
    checkedAt: 2026-11-03
  - field: category
    url: https://www.openwebanalytics.com/
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/Open-Web-Analytics/Open-Web-Analytics/wiki/Technical-Requirements
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/Open-Web-Analytics/Open-Web-Analytics/wiki/Installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/Open-Web-Analytics/Open-Web-Analytics/wiki/Installing-from-Github
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/Open-Web-Analytics/Open-Web-Analytics/wiki/Installation
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/Open-Web-Analytics/Open-Web-Analytics/wiki/Installation
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/Open-Web-Analytics/Open-Web-Analytics
    checkedAt: 2026-11-03
  - field: license
    url: https://www.openwebanalytics.com/about/
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/Open-Web-Analytics/Open-Web-Analytics/blob/master/README.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/Open-Web-Analytics/Open-Web-Analytics/tags
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/Open-Web-Analytics/Open-Web-Analytics/releases/tag/1.14.6
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/Open-Web-Analytics/Open-Web-Analytics/releases/tag/1.14.6
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/Open-Web-Analytics/Open-Web-Analytics
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/Open-Web-Analytics/Open-Web-Analytics/contributors
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/Open-Web-Analytics/Open-Web-Analytics/wiki/REST-API
    checkedAt: 2026-11-03
ai: authored
contentStore: null
adminUi: null
templating: null
i18n: null
renderingModes: null
npmWeeklyDownloads: null
---

Open Web Analytics is a web analytics framework written in PHP. A JavaScript tracker sends visits from websites and applications to a server that stores them in a MySQL database and reports on them through a web interface. The packaged release is unpacked into a directory the web server can reach, and an install wizard creates the database tables.

## Worth knowing

The install wizard, the reporting interface and the JavaScript tracker are all served from the same directory, so that directory has to be reachable from browsers. A cron entry runs the periodic maintenance, and the [installation guide](https://github.com/Open-Web-Analytics/Open-Web-Analytics/wiki/Installation) says that without it no scheduled job runs.
