---
id: cronicle
name: Cronicle
urls:
  home: https://cronicle.net
  repository: https://github.com/jhuckaby/Cronicle
  docs: https://github.com/jhuckaby/Cronicle/blob/master/docs/Setup.md
category:
  - backend
description: Multi-server task scheduler and runner with a web UI, written in Node.js, that runs scheduled, repeating and on-demand jobs on worker servers.
status: active
maintainer: Joseph Huckaby
maintainerType: individual
firstRelease: 2016
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: install script run with Node.js
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-11-02
githubStargazers: 5871
contributors: 12
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://cronicle.net/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/jhuckaby/Cronicle
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/jhuckaby/Cronicle/blob/master/docs/Setup.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/jhuckaby/Cronicle/master/README.md
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://api.github.com/users/jhuckaby
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/jhuckaby/Cronicle/releases
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/jhuckaby/Cronicle
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/jhuckaby/Cronicle
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/jhuckaby/Cronicle/blob/master/docs/Setup.md
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://raw.githubusercontent.com/jhuckaby/Cronicle/v0.9.142/package.json
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/jhuckaby/Cronicle/blob/master/docs/CommandLine.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://cronicle.net/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/jhuckaby/Cronicle/blob/master/docs/Setup.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/jhuckaby/Cronicle
    checkedAt: 2026-11-03
  - field: license
    url: https://raw.githubusercontent.com/jhuckaby/Cronicle/master/LICENSE.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://raw.githubusercontent.com/jhuckaby/Cronicle/master/LICENSE.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/jhuckaby/Cronicle/releases/latest
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/jhuckaby/Cronicle/releases/latest
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/jhuckaby/Cronicle
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/jhuckaby/Cronicle/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/jhuckaby/Cronicle/blob/master/README.md
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Cronicle is a task scheduler and runner for several servers, with a web UI for scheduling, running and watching jobs. A primary server keeps time and assigns jobs to worker servers, and a backup server takes over if the primary fails. Jobs run plugins, which are executable scripts in any language. External applications can register an API key and use the REST API to schedule and run events. Cronicle is written in JavaScript for Node.js. It installs with a script or from a release tarball, and the install guide starts it as a service with a control script.

## Worth knowing

The README says the project will continue to receive bug fixes and security patches, and it names xyOps, a separate product by the same author, as the path for new features. Storage defaults to local disk, with Couchbase or Amazon S3 as alternatives.
