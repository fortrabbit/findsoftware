---
id: river
name: River
urls:
  home: https://www.memorysafety.org/initiative/reverse-proxy/
  repository: https://github.com/memorysafety/river
  docs: https://onevariable.com/river-user-manual/
category:
  - web-server
description: Reverse proxy application written in Rust, built on Cloudflare's Pingora library.
status: stub
maintainer: Internet Security Research Group
firstRelease: 2024
hqCountry: US
language: rust
runtime:
  - binary
hosting:
  - binary
basedOn:
  - pingora
runsAs:
  - always-on
installMethod: binary download from GitHub releases
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2024-08-30
githubStargazers: 2353
contributors: 3
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://github.com/memorysafety/river/blob/main/README.md
    checkedAt: 2026-10-30
  - field: urls
    url: https://www.memorysafety.org/initiative/reverse-proxy/
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/memorysafety/river
    checkedAt: 2026-10-30
  - field: urls
    url: https://onevariable.com/river-user-manual/config/kdl.html
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://www.memorysafety.org/initiative/reverse-proxy/
    checkedAt: 2026-10-30
  - field: hqCountry
    url: https://www.abetterinternet.org/terms-of-service
    checkedAt: 2026-10-30
  - field: category
    url: https://github.com/memorysafety/river/blob/main/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/memorysafety/river
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/memorysafety/river/blob/main/user-manual/src/install.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/memorysafety/river/blob/main/user-manual/src/install.md
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://github.com/memorysafety/river/blob/main/user-manual/src/config/cli.md
    checkedAt: 2026-10-30
  - field: basedOn
    url: https://www.memorysafety.org/initiative/reverse-proxy/
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/memorysafety/river/releases/tag/v0.5.0
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/memorysafety/river/releases/tag/v0.5.0
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://www.memorysafety.org/initiative/reverse-proxy/
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/memorysafety/river
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://github.com/memorysafety/river/blob/main/README.md
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://github.com/memorysafety/river
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/memorysafety/river/contributors?per_page=1
    checkedAt: 2026-10-30
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

River is a reverse proxy application written in Rust and built on [Pingora](https://github.com/cloudflare/pingora), the Rust network services framework from Cloudflare. The project page describes River as a Prossimo initiative, and the Internet Security Research Group maintains it. The application runs as a binary that reads a configuration file in KDL format. Its command line can daemonize the process after startup, and the process otherwise runs until it is stopped.

## Worth knowing

The README says there is no expectation of stability until further notice. The project page says development is paused while the team works on other projects. The project publishes prebuilt binaries for installation and no registry package.
