---
id: openswoole
name: Open Swoole
urls:
  home: https://openswoole.com
  repository: https://github.com/openswoole/ext-openswoole
  docs: https://openswoole.com/docs
category:
  - web-server
  - framework
description: PHP extension that adds an event-driven server, coroutines and fibers to PHP, so PHP applications can run their own HTTP, WebSocket and TCP servers.
status: active
maintainer: Transfon Ltd
maintainerType: company
firstRelease: 2021
hqCountry: GB
language: cpp
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
runsAs:
  - always-on
installMethod: pie
licenseModel: open-source
license: Apache-2.0
latestReleaseDate: 2026-02-28
githubStargazers: 863
packagistDownloads: 715
contributors: 138
social:
  x: https://twitter.com/openswoole
  discord: https://discord.gg/5QC57RNPpw
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://openswoole.com/
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/openswoole/ext-openswoole
    checkedAt: 2026-10-30
  - field: urls
    url: https://openswoole.com/docs
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://openswoole.com/
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://openswoole.com/
    checkedAt: 2026-10-30
  - field: hqCountry
    url: https://www.transfon.com/privacy
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://github.com/openswoole/ext-openswoole/releases/tag/v4.7.1
    checkedAt: 2026-10-30
  - field: category
    url: https://github.com/openswoole/ext-openswoole
    checkedAt: 2026-10-30
  - field: category
    url: https://openswoole.com/docs
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/openswoole/ext-openswoole
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/openswoole/ext-openswoole/blob/v26.2.0/README.md
    checkedAt: 2026-10-30
  - field: runtimeMin
    url: https://github.com/openswoole/ext-openswoole/blob/v26.2.0/README.md
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://openswoole.com/docs
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/openswoole/ext-openswoole
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://openswoole.com/docs/get-started/installation
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://openswoole.com/docs/get-started/installation
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://openswoole.com/docs/get-started/installation
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://openswoole.com/docs/get-started/installation
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/openswoole/ext-openswoole
    checkedAt: 2026-10-30
  - field: packagistDownloads
    url: https://packagist.org/packages/openswoole/ext-openswoole
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/openswoole/ext-openswoole/releases/tag/v26.2.0
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/openswoole/ext-openswoole
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://github.com/openswoole/ext-openswoole
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/openswoole/ext-openswoole/contributors
    checkedAt: 2026-10-30
ai: authored
npmWeeklyDownloads: null
---

Open Swoole is a PHP extension that adds an event-driven server, coroutines and fibers to PHP. A PHP application uses it to run its own HTTP, WebSocket and TCP servers, and the extension runs inside a PHP command-line process. The server can be run directly on the network, or placed behind Apache or Nginx as a proxy target.

The extension is installed with PIE, PECL, a Docker image, an Ubuntu package archive, an RPM repository or from source. The project's own site describes it as previously named Swoole, and Transfon Ltd publishes it.

## Worth knowing

The server is a long-running process inside PHP, not a script that runs per request.
