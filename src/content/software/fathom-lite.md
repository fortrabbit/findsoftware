---
id: fathom-lite
name: Fathom Lite
urls:
  home: https://usefathom.com
  repository: https://github.com/usefathom/fathom
  docs: https://github.com/usefathom/fathom/blob/master/docs/Installation%20instructions.md
category:
  - analytics
description: Open-source web analytics server written in Go, the Lite edition of the hosted Fathom Analytics product.
status: active
maintainer: Conva Ventures Inc.
maintainerType: company
firstRelease: 2018
hqCountry: CA
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
  - mysql
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: binary-download
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2023-01-31
githubStargazers: 8034
contributors: 34
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://usefathom.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/usefathom/fathom
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/usefathom/fathom/blob/master/docs/Installation%20instructions.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/usefathom/fathom/master/LICENSE
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://usefathom.com/legal/privacy
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/usefathom/fathom
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/usefathom/fathom/blob/master/docs/Installation%20instructions.md
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/usefathom/fathom/blob/master/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/usefathom/fathom
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/usefathom/fathom/blob/master/README.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/usefathom/fathom/releases/tag/v1.3.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/usefathom/fathom/releases/tag/v1.3.1
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/usefathom/fathom/releases/tag/latest-development
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/usefathom/fathom
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/usefathom/fathom/contributors
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/usefathom/fathom/blob/master/docs/Installation%20instructions.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/usefathom/fathom/blob/master/docs/Configuration.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/usefathom/fathom/blob/master/docs/Installation%20instructions.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/usefathom/fathom/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/usefathom/fathom/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/usefathom/fathom/blob/master/docs/misc/Heroku.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/usefathom/fathom/blob/master/docs/Installation%20instructions.md
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Fathom Lite is a web analytics server written in Go, published by Conva Ventures Inc. as the open-source edition of the hosted Fathom Analytics product. It ships as a single binary that stores its data in SQLite by default, with MySQL and Postgres as configurable drivers, and its dashboard runs from the same process. A site connects by copying the tracking snippet from the dashboard onto its pages, and the [install guide](https://github.com/usefathom/fathom/blob/master/docs/Installation%20instructions.md) shows the server running under a process manager so it restarts after a reboot.

## Worth knowing

The README says Lite no longer gets new features and that its maintainers keep fixing bugs, so it is a maintenance-only edition. The README's comparison table marks Lite as using cookies, where the hosted product is described as cookie-free. A site that uses a Content Security Policy must allow the instance host for script-src and img-src, as the [README](https://github.com/usefathom/fathom/blob/master/README.md) states. The hosted Fathom Analytics product is a paid service from the same company.
