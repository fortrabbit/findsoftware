---
id: goth
name: Goth
urls:
  repository: https://github.com/markbates/goth
category:
  - auth
description: Go package for writing authentication providers, so Go web applications can sign users in through OAuth and other protocols.
status: active
maintainer: Mark Bates
maintainerType: individual
firstRelease: 2017
language: go
runtime:
  - binary
hosting:
  - binary
installMethod: go get
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2025-08-18
githubStargazers: 6625
contributors: 156
dependentRepos: 493
dependentPackages: 271
addedAt: 2026-11-09
checkedAt: 2026-11-09
sources:
  - field: urls
    url: https://api.github.com/repos/markbates/goth
    checkedAt: 2026-11-09
  - field: language
    url: https://api.github.com/repos/markbates/goth
    checkedAt: 2026-11-09
  - field: category
    url: https://raw.githubusercontent.com/markbates/goth/master/README.md
    checkedAt: 2026-11-09
  - field: runtime
    url: https://raw.githubusercontent.com/markbates/goth/master/README.md
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://raw.githubusercontent.com/markbates/goth/master/README.md
    checkedAt: 2026-11-09
  - field: license
    url: https://api.github.com/repos/markbates/goth
    checkedAt: 2026-11-09
  - field: licenseModel
    url: https://raw.githubusercontent.com/markbates/goth/master/LICENSE.txt
    checkedAt: 2026-11-09
  - field: maintainer
    url: https://raw.githubusercontent.com/markbates/goth/master/LICENSE.txt
    checkedAt: 2026-11-09
  - field: firstRelease
    url: https://api.github.com/repos/markbates/goth/commits/488a04ae13f57b10e55e1a32c8cd62f9cc66c671
    checkedAt: 2026-11-09
  - field: currentMajor
    url: https://github.com/markbates/goth/releases/tag/v1.82.0
    checkedAt: 2026-11-09
  - field: latestReleaseDate
    url: https://api.github.com/repos/markbates/goth/releases/tags/v1.82.0
    checkedAt: 2026-11-09
  - field: githubStargazers
    url: https://api.github.com/repos/markbates/goth
    checkedAt: 2026-11-09
  - field: contributors
    url: https://api.github.com/repos/markbates/goth/contributors?per_page=1
    checkedAt: 2026-11-09
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/proxy.golang.org/packages/github.com%2Fmarkbates%2Fgoth
    checkedAt: 2026-11-09
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/proxy.golang.org/packages/github.com%2Fmarkbates%2Fgoth
    checkedAt: 2026-11-09
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

Goth lets a Go web application offer sign-in through outside services. Each service is a provider that implements the package's Provider and Session interfaces, and the README lists the providers the package ships with.

Sessions default to a cookie store from the gorilla/sessions package. The README shows how to replace that store at startup with one that sets its own secret, path, HTTP-only and secure options.

## Worth knowing

The README's default cookie options list the secure flag as off; its example store turns the flag on for a site served over HTTPS.
