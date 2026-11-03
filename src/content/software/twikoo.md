---
id: twikoo
name: Twikoo
urls:
  home: https://twikoo.js.org
  repository: https://github.com/twikoojs/twikoo
  docs: https://twikoo.js.org/quick-start.html
category:
  - community
description: Comment system for static websites, with a backend that runs as cloud functions or as a self-hosted server.
status: active
maintainer: iMaeGoo
firstRelease: 2020
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 20
databases:
  - mongodb
adminUi: true
i18n: yes, nine locales
runsAs:
  - always-on
installMethod: npm global install of the tkserver server package
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-22
githubStargazers: 2319
npmWeeklyDownloads: 4561
contributors: 74
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://twikoo.js.org/
    checkedAt: 2026-11-03
  - field: urls
    url: https://twikoo.js.org/quick-start.html
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/twikoojs/twikoo
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/twikoojs/twikoo/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/twikoojs/twikoo/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/twikoojs/twikoo/languages
    checkedAt: 2026-11-03
  - field: category
    url: https://twikoo.js.org/intro.html
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/twikoojs/twikoo/releases
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/twikoojs/twikoo/releases/latest
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/twikoojs/twikoo/releases/latest
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/twikoojs/twikoo
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/twikoojs/twikoo/contributors
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/twikoo
    checkedAt: 2026-11-03
  - field: runtime
    url: https://twikoo.js.org/backend.html
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://twikoo.js.org/faq.html
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://twikoo.js.org/backend.html
    checkedAt: 2026-11-03
  - field: databases
    url: https://twikoo.js.org/backend.html
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/twikoojs/twikoo/blob/main/README.en.md
    checkedAt: 2026-11-03
  - field: i18n
    url: https://github.com/twikoojs/twikoo/blob/main/README.en.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://twikoo.js.org/backend.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/twikoojs/twikoo/blob/main/README.en.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/twikoojs/twikoo/blob/main/README.en.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://twikoo.js.org/backend.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://twikoo.js.org/quick-start.html
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Twikoo is a comment system for static websites. A front-end script on each page shows the comments and the form, and a backend stores them and sends the notifications. The backend runs either as cloud functions on one of several hosting platforms, or as a self-hosted server started with the tkserver package on Node.js.

The front end is a JavaScript file that the page includes by hand, or through a site theme that supports Twikoo. Comments are stored in MongoDB or in D1 on Cloudflare, and the self-hosted server falls back to a local lokijs file when no MongoDB connection is set. The comment panel has an embedded management area behind a password, where comments can be hidden, deleted and reviewed, and the settings changed. Comments can be imported from Valine, Artalk and Disqus, and the interface has nine locales.

## Worth knowing

The cloud functions need Node.js 20 or newer. The self-hosted server runs as a long-running process that the operator starts with nohup or a systemd service, and the docs advise a reverse proxy in front of it for HTTPS. Spam checks through Akismet or Tencent Cloud content security each need the operator's own account.
