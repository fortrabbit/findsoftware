---
id: webmentiond
name: webmentiond
urls:
  home: https://webmentiond.org
  repository: https://github.com/zerok/webmentiond
  docs: https://webmentiond.org/getting-started/
category:
  - community
description: Webmention receiver server that stores incoming mentions in SQLite and lets the site owner approve or reject them.
status: active
maintainer: Horst Gutmann
maintainerType: individual
firstRelease: 2023
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
adminUi: true
runsAs:
  - always-on
installMethod: docker image zerok/webmentiond
licenseModel: open-source
license: GPL-3.0
currentMajor: "1"
latestReleaseDate: 2025-12-01
githubStargazers: 73
contributors: 6
social:
  subreddit: https://www.reddit.com/r/webmentiond/
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://webmentiond.org/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/zerok/webmentiond
    checkedAt: 2026-11-03
  - field: urls
    url: https://webmentiond.org/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://zerokspot.com/
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://zerokspot.com/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/zerok/webmentiond
    checkedAt: 2026-11-03
  - field: category
    url: https://webmentiond.org/
    checkedAt: 2026-11-03
  - field: runtime
    url: https://webmentiond.org/install-from-source/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://webmentiond.org/configuration/
    checkedAt: 2026-11-03
  - field: databases
    url: https://webmentiond.org/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://webmentiond.org/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://webmentiond.org/install-from-source/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://webmentiond.org/install-from-source/
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/zerok/webmentiond
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://raw.githubusercontent.com/zerok/webmentiond/main/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/zerok/webmentiond/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/zerok/webmentiond/releases
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/zerok/webmentiond/releases/tags/v1.0.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/zerok/webmentiond
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/zerok/webmentiond/contributors?per_page=1
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

webmentiond is a Go server that receives webmentions, stores them in a SQLite database and offers a UI for approving or rejecting them. The site links to the server's receive endpoint from the head of its pages, and a widget script shows the approved mentions on a page, as the [getting-started guide](https://webmentiond.org/getting-started/) describes. The server runs from a Docker image, which the install page names as the default way to run it, or from a binary built from source.

The admin UI signs in with an e-mail link sent through an SMTP server, and the addresses allowed to sign in are set when the server starts. Approval can be automated for sources whose URL matches a pattern in the [policies](https://webmentiond.org/policies/) table; policies cannot be configured through the UI yet.

## Worth knowing

The server needs an SMTP account to send the sign-in e-mail, and write access to the SQLite file and the folder that holds it. A source build needs Go and Node. The repository's Dockerfile says it is no longer maintained, and the image is built by a script in the repository instead.
