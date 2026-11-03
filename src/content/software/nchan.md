---
id: nchan
name: Nchan
urls:
  home: https://nchan.io
  repository: https://github.com/slact/nchan
  docs: https://nchan.io
category:
  - backend
description: Pub/sub server module for Nginx that delivers published messages to WebSocket, EventSource and other HTTP-based subscribers.
status: active
maintainer: Leo Ponomarev
maintainerType: individual
firstRelease: 2009
language: c
runtime:
  - binary
hosting:
  - binary
basedOn:
  - nginx
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: source-build
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-02-14
githubStargazers: 3063
contributors: 35
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://nchan.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/slact/nchan
    checkedAt: 2026-11-03
  - field: urls
    url: https://nchan.io
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/slact/nchan/blob/master/LICENCE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/slact/nchan/blob/master/LICENCE
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/slact/nchan
    checkedAt: 2026-11-03
  - field: category
    url: https://nchan.io
    checkedAt: 2026-11-03
  - field: basedOn
    url: https://nchan.io
    checkedAt: 2026-11-03
  - field: runtime
    url: https://nchan.io
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://nchan.io
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://nchan.io
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://nchan.io
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://nchan.io
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://nchan.io
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://nchan.io
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://nchan.io
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/slact/nchan/blob/master/LICENCE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/slact/nchan/blob/master/LICENCE
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/slact/nchan
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/slact/nchan
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/slact/nchan/tags
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://nchan.io
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/slact/nchan/tags
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://nchan.io
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Nchan is a pub/sub server module for Nginx. Publishers send messages to a channel with HTTP POST requests, and subscribers receive them over WebSocket, EventSource (Server-Sent Events), long-polling and other HTTP-based methods. It is written in C and runs inside Nginx, with connections handled by the Nginx worker processes. The project documents a source build and packages for Homebrew, Debian, Fedora and Arch Linux.

## Worth knowing

Because Nchan is an Nginx module, a site that uses it runs it on an Nginx build that loads the module. The first version was written in 2009 and 2010 as the Nginx HTTP Push Module.
