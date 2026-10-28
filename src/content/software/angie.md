---
id: angie
name: Angie
urls:
  home: https://angie.software/
  repository: https://github.com/webserver-llc/angie
  docs: https://en.angie.software/angie/docs/
category:
  - web-server
description: Open-source web server forked from nginx, intended as a drop-in replacement for it.
status: active
maintainer: Web Server LLC
maintainerType: company
parent: Rubytech
firstRelease: 2022
hqCountry: RU
language: c
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: binary packages
licenseModel: open-core
license: BSD-2-Clause
currentMajor: "1"
latestReleaseDate: 2026-10-16
githubStargazers: 2605
contributors: 116
httpArchiveSites: 3245
social:
  forum: https://forum.angie.software/
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: name
    url: https://github.com/webserver-llc/angie
    checkedAt: 2026-10-28
  - field: urls
    url: https://angie.software/
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/webserver-llc/angie
    checkedAt: 2026-10-28
  - field: urls
    url: https://en.angie.software/angie/docs/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/webserver-llc/angie/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://angie.software/
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://angie.software/
    checkedAt: 2026-10-28
  - field: parent
    url: https://angie.software/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/webserver-llc/angie/releases
    checkedAt: 2026-10-28
  - field: category
    url: https://en.angie.software/angie/docs/
    checkedAt: 2026-10-28
  - field: category
    url: https://en.angie.software/angie/docs/configuration/first-steps/
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/webserver-llc/angie
    checkedAt: 2026-10-28
  - field: runtime
    url: https://en.angie.software/angie/docs/installation/
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/webserver-llc/angie/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/webserver-llc/angie/releases
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/webserver-llc/angie/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://en.angie.software/angie/docs/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://en.angie.software/angie/docs/installation/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://en.angie.software/angie/docs/installation/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://en.angie.software/angie/docs/installation/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://en.angie.software/angie/docs/configuration/first-steps/
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/webserver-llc/angie
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/webserver-llc/angie/contributors
    checkedAt: 2026-10-28
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-28
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

Angie is a web server and reverse proxy forked from nginx. The project describes it as a drop-in replacement, so existing nginx setups can move over without major changes to module setup or configuration. The [migration guide](https://en.angie.software/angie/docs/configuration/migration/) replaces a packaged nginx with a packaged Angie on the same host. The [installation guide](https://en.angie.software/angie/docs/installation/) lists binary packages for most Linux distributions and FreeBSD, Docker images and a source build. The server runs as a master process with worker processes. The docs include a guide to OpenID Connect sign-in.

## Worth knowing

Angie PRO is a commercial edition with features the open-source version lacks. Its binary packages sit in a private repository, and access requires a contract and a license.
