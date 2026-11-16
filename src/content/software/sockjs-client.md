---
id: sockjs-client
name: SockJS-client
urls:
  repository: https://github.com/sockjs/sockjs-client
category:
  - backend
description: JavaScript client library that gives browsers a WebSocket-like object and falls back to other transports when WebSocket is unavailable.
status: stub
maintainer: SockJS
firstRelease: 2011
language: javascript
runsAs:
  - browser
installMethod: script tag
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2022-05-28
githubStargazers: 8504
npmWeeklyDownloads: 2718897
contributors: 55
dependentRepos: 2327592
dependentPackages: 989
social:
  forum: https://groups.google.com/forum/#!forum/sockjs
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: status
    url: https://sockjs.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/sockjs/sockjs-client
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://api.github.com/orgs/sockjs
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/sockjs/sockjs-client/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/sockjs/sockjs-client
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://raw.githubusercontent.com/sockjs/sockjs-client/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/sockjs/sockjs-client/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/sockjs/sockjs-client
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/sockjs/sockjs-client/main/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/sockjs/sockjs-client/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/sockjs/sockjs-client/releases
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/sockjs/sockjs-client/commits/v0.0.1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/sockjs-client
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/sockjs/sockjs-client
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/sockjs/sockjs-client/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/sockjs-client
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/sockjs-client
    checkedAt: 2026-11-16
ai: authored
packagistDownloads: null
---

SockJS-client is a browser JavaScript library that gives a page a WebSocket-like object for two-way communication with a server. The README says it tries native WebSockets first and falls back to other browser transports, such as streaming and polling, when those fail.

The client needs a server counterpart. The README names SockJS-node as the server for Node.js and lists servers for other languages.

## Worth knowing

A single SockJS session uses two browser connections to one domain, so the README says a page should not open more than one session to the same domain at a time.
