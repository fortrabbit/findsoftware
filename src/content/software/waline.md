---
id: waline
name: Waline
urls:
  home: https://waline.js.org
  repository: https://github.com/walinejs/waline
  docs: https://waline.js.org/en/guide/get-started/
category:
  - community
description: "Comment system for web pages: a client script shows the comments and a server stores, moderates and notifies."
status: active
maintainer: lizheming
maintainerType: individual
firstRelease: 2020
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 26
databases:
  - mongodb
  - mysql
  - postgres
  - sqlite
adminUi: true
i18n: built-in languages and customizable locale
runsAs:
  - always-on
installMethod: Vercel deploy button for the server
licenseModel: open-source
license: GPL-2.0, MIT
currentMajor: "3"
latestReleaseDate: 2026-11-03
githubStargazers: 3158
npmWeeklyDownloads: 12668
contributors: 127
dependentRepos: 880
dependentPackages: 33
social:
  forum: https://github.com/walinejs/waline/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://waline.js.org/en/advanced/intro.html
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/walinejs/waline
    checkedAt: 2026-11-03
  - field: urls
    url: https://waline.js.org/en/guide/get-started/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://waline.js.org/en/advanced/intro.html
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://waline.js.org/en/advanced/intro.html
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/walinejs/waline
    checkedAt: 2026-11-03
  - field: category
    url: https://waline.js.org/en/advanced/intro.html
    checkedAt: 2026-11-03
  - field: databases
    url: https://waline.js.org/en/reference/server/env
    checkedAt: 2026-11-03
  - field: databases
    url: https://waline.js.org/en/reference/server/env
    checkedAt: 2026-11-03
  - field: databases
    url: https://waline.js.org/en/reference/server/env
    checkedAt: 2026-11-03
  - field: databases
    url: https://waline.js.org/en/reference/server/env
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://waline.js.org/en/guide/get-started/
    checkedAt: 2026-11-03
  - field: i18n
    url: https://waline.js.org/en/guide/features/i18n.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://waline.js.org/en/guide/get-started/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://waline.js.org/en/advanced/faq.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://waline.js.org/en/advanced/faq.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://waline.js.org/en/guide/get-started/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://waline.js.org/en/guide/deploy/vps.html
    checkedAt: 2026-11-03
  - field: runtime
    url: https://registry.npmjs.org/@waline/vercel/latest
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://registry.npmjs.org/@waline/vercel/latest
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://waline.js.org/en/guide/deploy/vps.html
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/walinejs/waline
    checkedAt: 2026-11-03
  - field: license
    url: https://registry.npmjs.org/@waline/client/latest
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/walinejs/waline
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://registry.npmjs.org/@waline/client/latest
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@waline/client
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://registry.npmjs.org/@waline/client
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/walinejs/waline
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/walinejs/waline/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/@waline/client
    checkedAt: 2026-11-03
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40waline%2Fclient
    checkedAt: 2026-11-03
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40waline%2Fclient
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Waline is a comment system for web pages. A client script shows the comment list and the comment box on a page, and a server stores the comments and sends notifications. The client loads from unpkg or installs from npm, and the page names the server in its serverURL option. The server is deployed to Vercel from a template or run from a Docker image or as a Node process behind a proxy, as the [get-started guide](https://waline.js.org/en/guide/get-started/) and the [self-host page](https://waline.js.org/en/guide/deploy/vps.html) describe. The project began as a backend for Valine, and its FAQ describes Waline as Valine with a backend.

Comments are stored in the database the server is configured with: MongoDB, MySQL, PostgreSQL or SQLite. The server sends e-mail notifications for replies and new comments and gives an administrator a comment management dashboard. Visitors can register through the comment box, and the first person to register becomes the administrator.

## Worth knowing

The client and the server are separate packages in one repository, and the server's update path differs by host, as the FAQ explains.
