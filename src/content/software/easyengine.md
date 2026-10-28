---
id: easyengine
name: EasyEngine
urls:
  home: https://easyengine.io
  repository: https://github.com/EasyEngine/easyengine
  docs: https://easyengine.io/cli/handbook/
  pricing: https://easyengine.io/pricing/
category:
  - web-server
  - dev-tool
description: Command-line control panel that installs and manages WordPress sites on Nginx, PHP and MySQL, using Docker containers.
status: active
maintainer: rtCamp, Inc
maintainerType: company
firstRelease: 2014
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 7.0
installMethod: linux-installer-script
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-10-21
githubStargazers: 2174
contributors: 54
social:
  x: https://x.com/easyengine
  forum: https://community.easyengine.io/
  facebook: https://www.facebook.com/easyengine/
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: name
    url: https://easyengine.io/
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/EasyEngine/easyengine
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/EasyEngine/easyengine
    checkedAt: 2026-10-28
  - field: urls
    url: https://easyengine.io/cli/handbook/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://easyengine.io/terms-and-conditions/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://easyengine.io/about/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/EasyEngine/easyengine/releases
    checkedAt: 2026-10-28
  - field: category
    url: https://easyengine.io/
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/EasyEngine/easyengine
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/EasyEngine/easyengine/blob/develop/README.md
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/EasyEngine/easyengine/blob/v4.13.3/composer.json
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/EasyEngine/easyengine/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/EasyEngine/easyengine/releases/latest
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/EasyEngine/easyengine/blob/v4.13.3/composer.json
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://easyengine.io/cli/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://easyengine.io/cli/handbook/install/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://easyengine.io/cli/handbook/install/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://easyengine.io/cli/handbook/install/
    checkedAt: 2026-10-28
  - field: urls
    url: https://easyengine.io/pricing/
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/EasyEngine/easyengine
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/EasyEngine/easyengine/contributors
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
npmWeeklyDownloads: null
---

EasyEngine is a command-line tool, written in PHP, that a server administrator runs to create and manage WordPress sites on a server. The [install guide](https://easyengine.io/cli/handbook/install/) installs it with an installer script on Linux, with Homebrew on Mac, or from a phar file. The guide says EasyEngine runs on Linux and Mac, and on any platform that has PHP and Docker.

The company behind it also offers EasyEngine Dashboard, a hosted control panel that manages sites on servers the user supplies. The command-line tool is the open source part of that product line, and the dashboard is a separate hosted service.

## Worth knowing

The [README](https://github.com/EasyEngine/easyengine/blob/develop/README.md) says the tool currently runs only with root privileges, so it needs a server where its user has root access.
