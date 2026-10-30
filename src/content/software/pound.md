---
id: pound
name: Pound
urls:
  home: https://www.gnu.org.ua/software/pound/
  repository: https://github.com/graygnuorg/pound
  docs: https://www.gnu.org.ua/software/pound/manual/
category:
  - web-server
description: Reverse proxy, load balancer and HTTPS front-end for web servers.
status: active
maintainer: Sergey Poznyakoff
maintainerType: individual
firstRelease: 2022
language: c
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: build from a source tarball
licenseModel: open-source
license: GPL-3.0
currentMajor: "4"
latestReleaseDate: 2026-10-29
githubStargazers: 70
contributors: 7
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://www.gnu.org.ua/software/pound/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/graygnuorg/pound
    checkedAt: 2026-10-30
  - field: urls
    url: https://www.gnu.org.ua/software/pound/manual/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://raw.githubusercontent.com/graygnuorg/pound/master/NEWS
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://raw.githubusercontent.com/graygnuorg/pound/master/NEWS
    checkedAt: 2026-10-30
  - field: category
    url: https://raw.githubusercontent.com/graygnuorg/pound/master/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/graygnuorg/pound
    checkedAt: 2026-10-30
  - field: runtime
    url: https://raw.githubusercontent.com/graygnuorg/pound/master/README.md
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://www.gnu.org.ua/software/pound/manual/Usage.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://raw.githubusercontent.com/graygnuorg/pound/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://raw.githubusercontent.com/graygnuorg/pound/master/README.md
    checkedAt: 2026-10-30
  - field: license
    url: https://api.github.com/repos/graygnuorg/pound
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://api.github.com/repos/graygnuorg/pound/releases
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://api.github.com/repos/graygnuorg/pound/releases
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://api.github.com/repos/graygnuorg/pound/releases
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/graygnuorg/pound
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/graygnuorg/pound/contributors?per_page=1
    checkedAt: 2026-10-30
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Pound sits in front of one or more backend web servers and handles their HTTPS. The [manual](https://www.gnu.org.ua/software/pound/manual/) documents the poundctl management client and the optional Lua extension. Pound is installed by building it from a source tarball or a git clone, and building it needs OpenSSL. Once started, it detaches from the controlling terminal and serves requests.

## Worth knowing

The code was first written at Apsis GmbH, which discontinued the project in 2022. The current maintainer continued it from a fork, and the README says Pound is not a web server, although its special backends can serve static files.
