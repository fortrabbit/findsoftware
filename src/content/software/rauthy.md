---
id: rauthy
name: Rauthy
urls:
  home: https://sebadob.github.io/rauthy/
  repository: https://github.com/sebadob/rauthy
  docs: https://sebadob.github.io/rauthy/
category:
  - auth
description: Rust identity provider for single sign-on through OpenID Connect and OAuth 2, with passkey login and a built-in admin UI.
status: active
maintainer: Sebastian Dobe
maintainerType: individual
firstRelease: 2023
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
adminUi: true
i18n: yes, server-side translation of end-user pages
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-10-19
githubStargazers: 1419
contributors: 67
social:
  forum: https://github.com/sebadob/rauthy/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://sebadob.github.io/rauthy/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/sebadob/rauthy
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/sebadob/rauthy
    checkedAt: 2026-11-03
  - field: urls
    url: https://sebadob.github.io/rauthy/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/sebadob/rauthy/blob/main/Cargo.toml
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://api.github.com/users/sebadob
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/sebadob/rauthy/releases/tag/v0.12.0
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/sebadob/rauthy
    checkedAt: 2026-11-03
  - field: runtime
    url: https://sebadob.github.io/rauthy/getting_started/k8s.html
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/sebadob/rauthy
    checkedAt: 2026-11-03
  - field: databases
    url: https://sebadob.github.io/rauthy/
    checkedAt: 2026-11-03
  - field: i18n
    url: https://github.com/sebadob/rauthy
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/sebadob/rauthy
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://sebadob.github.io/rauthy/getting_started/docker.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://sebadob.github.io/rauthy/getting_started/k8s.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://sebadob.github.io/rauthy/getting_started/main.html
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://sebadob.github.io/rauthy/getting_started/docker.html
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/sebadob/rauthy/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/sebadob/rauthy/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/sebadob/rauthy
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/sebadob/rauthy/contributors
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/sebadob/rauthy/releases/tag/v0.37.2
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/sebadob/rauthy/releases/tag/v0.37.2
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Rauthy is an identity provider for single sign-on through OpenID Connect and OAuth 2, and it also supports PAM, as its [documentation](https://sebadob.github.io/rauthy/) states. The project is written in Rust, and the server runs from a container image. The [Docker guide](https://sebadob.github.io/rauthy/getting_started/docker.html) starts it as an HTTPS server, and the Kubernetes guide runs the binary from that image.

By default Rauthy runs on an embedded store and needs no external database, and Postgres can be used instead. The admin UI covers the administration of the application and its users, and each user has an account dashboard. The server offers server-side translation of its end-user pages.

## Worth knowing

The PAM and NSS modules for Linux logins live in a separate repository, and the README says that repository relies on GPLv3 dependencies.
