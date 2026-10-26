---
id: qor
name: QOR
urls:
  home: https://getqor.com/
  repository: https://github.com/qor/qor
  docs: https://doc.getqor.com/
category:
  - cms
  - e-commerce
  - admin-panel
description: Go libraries for building business applications, content management systems and e-commerce systems.
status: stub
maintainer: The Plant Co., Ltd.
maintainerType: company
firstRelease: 2016
hqCountry: JP
language: go
runtime:
  - binary
hosting:
  - binary
adminUi: true
headlessApi:
  - rest
i18n: yes
runsAs:
  - always-on
installMethod: go get
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2022-11-14
githubStargazers: 5346
contributors: 29
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/qor/qor
    checkedAt: 2026-10-26
  - field: urls
    url: https://getqor.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://doc.getqor.com/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://the-plant.com/privacy-policy/
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://the-plant.com/privacy-policy/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/qor/qor
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/qor/qor/master/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://raw.githubusercontent.com/qor/qor/v1.3.0/go.mod
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://doc.getqor.com/get_started.html
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/qor/qor
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/qor/qor/master/README.md
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/qor/qor/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/qor/qor/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/qor/qor
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/qor/qor/contributors
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/qor/qor/git/tags/b72c2bff4ad9df701bab2ccf7a080c039fcbba18
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://raw.githubusercontent.com/qor/qor/master/README.md
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://doc.getqor.com/admin/restful_api.html
    checkedAt: 2026-10-26
  - field: i18n
    url: https://doc.getqor.com/admin/i18n.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://doc.getqor.com/get_started.html
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

QOR is a set of libraries written in Go for business applications, content management systems and e-commerce systems. Its admin library generates an admin interface and a RESTful API for registered data models, and a minimal program mounts it on an HTTP server that keeps running. The original QOR was a proprietary framework written in Ruby on Rails and used internally at The Plant, a Tokyo company; the Go rewrite is released under the MIT license.

## Worth knowing

The README says QOR is not a boxed turnkey solution and needs coding skills to use. Building the frontend files needs Node.js and Gulp. The project's homepage now presents QOR5, so which repository is current is not settled.
