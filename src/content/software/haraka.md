---
id: haraka
name: Haraka
urls:
  home: https://haraka.github.io/
  repository: https://github.com/haraka/Haraka
  docs: https://haraka.github.io/getting_started
  plugins: https://github.com/haraka/Haraka/blob/master/Plugins.md
category:
  - email
description: Node.js SMTP server with a plugin system, run as a filtering mail transfer agent or a mail submission server.
status: stub
maintainer: Haraka community
maintainerType: community
firstRelease: 2011
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 20
runsAs:
  - always-on
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-17
githubStargazers: 5633
npmWeeklyDownloads: 3197
contributors: 185
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://haraka.github.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/haraka/Haraka
    checkedAt: 2026-11-03
  - field: urls
    url: https://haraka.github.io/getting_started
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://haraka.github.io/
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://haraka.github.io/
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/haraka/Haraka/blob/master/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/haraka/Haraka
    checkedAt: 2026-11-03
  - field: runtime
    url: https://haraka.github.io/
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/haraka/Haraka/blob/v3.3.5/package.json
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://haraka.github.io/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/haraka/Haraka/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://haraka.github.io/plugins/daemonize
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/haraka/Haraka/blob/v3.3.5/package.json
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/haraka/Haraka/releases/tag/v3.3.5
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/haraka/Haraka/releases/tag/v3.3.5
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/haraka/Haraka/commits/v0.2
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/haraka/Haraka
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/haraka/Haraka/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-23:2026-10-29/haraka
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/haraka/Haraka/blob/master/README.md
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Haraka is an SMTP server written in Node.js and extended through plugins. It can act as a filtering mail transfer agent for the domains it is configured to accept, or as a mail submission server on ports 465 and 587, where an auth plugin handles the sign-in of the sending client.

The README says Haraka is not a mail store, a local delivery agent or an IMAP server. The project keeps a registry of community and core plugins. It was started by Matt Sergeant and is now maintained by the Haraka community.
