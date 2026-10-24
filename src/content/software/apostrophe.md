---
id: apostrophe
name: ApostropheCMS
urls:
  home: https://apostrophecms.com
  repository: https://github.com/apostrophecms/apostrophe
  docs: https://docs.apostrophecms.org/
  pricing: https://apostrophecms.com/pricing/license-pricing
category:
  - cms
  - headless-cms
description: Node.js content management system with in-context editing on the live page, which can also serve content through a REST API for headless use.
status: active
maintainer: Apostrophe Technologies, Inc.
maintainerType: company
firstRelease: 2013
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
contentStore:
  - database
databases:
  - sqlite
  - postgres
  - mongodb
adminUi: true
headlessApi:
  - rest
templating: nunjucks, jsx
i18n: yes, multilingual content in the open source core
runsAs:
  - always-on
installMethod: npm create apostrophe@latest
licenseModel: open-core
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-10-14
githubStargazers: 4653
npmWeeklyDownloads: 18160
contributors: 98
social:
  x: https://x.com/apostrophecms
  discord: https://discord.com/invite/XkbRNq7
  forum: https://github.com/apostrophecms/apostrophe/discussions
  subreddit: https://www.reddit.com/r/apostrophecms/
  youtube: https://www.youtube.com/@ApostropheCMS
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://apostrophecms.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/apostrophecms/apostrophe
    checkedAt: 2026-10-23
  - field: urls
    url: https://docs.apostrophecms.org/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://apostrophecms.com/terms
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/apostrophe
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/apostrophecms/apostrophe/blob/main/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/apostrophecms/apostrophe
    checkedAt: 2026-10-23
  - field: runtime
    url: https://docs.apostrophecms.org/guide/development-setup.html
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://docs.apostrophecms.org/guide/development-setup.html
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/apostrophecms/apostrophe/blob/main/README.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/apostrophecms/apostrophe/blob/main/README.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/apostrophecms/apostrophe/blob/main/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://apostrophecms.com/pricing/license-pricing
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://docs.apostrophecms.org/guide/core-concepts.html
    checkedAt: 2026-10-23
  - field: databases
    url: https://docs.apostrophecms.org/guide/choosing-a-database.html
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/apostrophecms/apostrophe/blob/main/README.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://docs.apostrophecms.org/guide/headless-cms.html
    checkedAt: 2026-10-23
  - field: i18n
    url: https://apostrophecms.com/
    checkedAt: 2026-10-23
  - field: templating
    url: https://docs.apostrophecms.org/guide/nunjucks-templates.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://docs.apostrophecms.org/guide/development-setup.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.apostrophecms.org/guide/development-setup.html
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/apostrophe
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/apostrophe
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/apostrophecms/apostrophe
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/apostrophecms/apostrophe/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/apostrophe
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

ApostropheCMS is a Node.js content management system where editors change text and images directly on the live page. The same content can also be read through its REST API by a separate front end. Content is stored as documents in a database, and the installer asks for SQLite, PostgreSQL or MongoDB when a project is created.

A new project is created with `npm create apostrophe@latest`. In production the site is started with `node app.js`, so it runs as a long-lived Node.js process.

## Worth knowing

The core is MIT-licensed. The Pro extensions are sold under a Pro license, and the README points to self-service sign-up for that license. The company also offers managed hosting next to the open source software.
