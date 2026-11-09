---
id: hermes-go
name: Hermes
urls:
  repository: https://github.com/matcornic/hermes
category:
  - email
description: Go package that generates clean, responsive HTML e-mails and plain text versions for transactional mail.
status: active
maintainer: Mathieu Cornic
maintainerType: individual
firstRelease: 2017
language: go
runtime:
  - binary
hosting:
  - binary
i18n: right-to-left text direction
installMethod: go get
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2025-04-04
githubStargazers: 3043
contributors: 12
addedAt: 2026-11-09
checkedAt: 2026-11-09
sources:
  - field: urls
    url: https://api.github.com/repos/matcornic/hermes
    checkedAt: 2026-11-09
  - field: firstRelease
    url: https://github.com/matcornic/hermes/releases/tag/v1.0.0
    checkedAt: 2026-11-09
  - field: maintainer
    url: https://github.com/matcornic/hermes/blob/master/LICENSE
    checkedAt: 2026-11-09
  - field: maintainerType
    url: https://github.com/matcornic/hermes/blob/master/LICENSE
    checkedAt: 2026-11-09
  - field: language
    url: https://api.github.com/repos/matcornic/hermes
    checkedAt: 2026-11-09
  - field: runtime
    url: https://raw.githubusercontent.com/matcornic/hermes/master/README.md
    checkedAt: 2026-11-09
  - field: category
    url: https://raw.githubusercontent.com/matcornic/hermes/master/README.md
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://raw.githubusercontent.com/matcornic/hermes/master/README.md
    checkedAt: 2026-11-09
  - field: i18n
    url: https://github.com/matcornic/hermes/blob/master/README.md
    checkedAt: 2026-11-09
  - field: i18n
    url: https://github.com/matcornic/hermes/blob/master/README.md
    checkedAt: 2026-11-09
  - field: license
    url: https://raw.githubusercontent.com/matcornic/hermes/master/LICENSE
    checkedAt: 2026-11-09
  - field: licenseModel
    url: https://raw.githubusercontent.com/matcornic/hermes/master/LICENSE
    checkedAt: 2026-11-09
  - field: currentMajor
    url: https://github.com/matcornic/hermes/releases/tag/v2.1.0
    checkedAt: 2026-11-09
  - field: latestReleaseDate
    url: https://github.com/matcornic/hermes/releases/tag/v1.3.0
    checkedAt: 2026-11-09
  - field: githubStargazers
    url: https://api.github.com/repos/matcornic/hermes
    checkedAt: 2026-11-09
  - field: contributors
    url: https://api.github.com/repos/matcornic/hermes/contributors?per_page=1
    checkedAt: 2026-11-09
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Hermes is a Go package that generates responsive HTML e-mails and their plain text versions for transactional mail. It is added to a Go project with go get.

The README calls Hermes the Go port of mailgen, the Node.js engine it names. The bundled themes, default and flat, are adapted from Postmark's transactional templates, and their templates are embedded in the application binary. A project that needs its own templates implements the Theme interface and loads its own files.

## Worth knowing

The version 2 tags use a separate module path, and the README says the project moved back to the version 1 path and asks users of the version 2 path to switch. The module path a project imports therefore depends on which release line it picks.
