---
id: sozu
name: Sōzu
urls:
  home: https://www.sozu.io
  repository: https://github.com/sozu-proxy/sozu
  docs: https://github.com/sozu-proxy/sozu/blob/main/doc/README.md
category:
  - web-server
description: HTTP and TCP reverse proxy written in Rust that accepts configuration changes at runtime and upgrades without dropping connections.
status: active
maintainer: Clever Cloud SAS
maintainerType: company
firstRelease: 2017
hqCountry: FR
language: rust
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: prebuilt-binary-tarball
licenseModel: open-source
license: AGPL-3.0, LGPL-3.0
currentMajor: "2"
latestReleaseDate: 2026-10-19
githubStargazers: 3752
contributors: 58
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://www.sozu.io/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/sozu-proxy/sozu
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/sozu-proxy/sozu
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/sozu-proxy/sozu/blob/main/README.md
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://www.sozu.io/legal-notice/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://github.com/sozu-proxy/sozu/blob/main/README.md
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://www.sozu.io/legal-notice/
    checkedAt: 2026-10-30
  - field: hqCountry
    url: https://www.sozu.io/legal-notice/
    checkedAt: 2026-10-30
  - field: category
    url: https://www.sozu.io/
    checkedAt: 2026-10-30
  - field: category
    url: https://www.sozu.io/
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/sozu-proxy/sozu
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/sozu-proxy/sozu/blob/main/README.md
    checkedAt: 2026-10-30
  - field: license
    url: https://api.github.com/repos/sozu-proxy/sozu
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/sozu-proxy/sozu/blob/main/README.md
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://www.sozu.io/about
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/sozu-proxy/sozu/releases/tag/2.3.3
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/sozu-proxy/sozu/releases/tag/2.3.3
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://github.com/sozu-proxy/sozu/tree/0.1.0
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/sozu-proxy/sozu
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/sozu-proxy/sozu/contributors
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/sozu-proxy/sozu/blob/main/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/sozu-proxy/sozu/blob/main/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/sozu-proxy/sozu/blob/main/README.md
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://github.com/sozu-proxy/sozu/blob/main/README.md
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

Sōzu is a reverse proxy written in Rust that routes HTTP and TCP traffic to backend servers. It accepts configuration changes at runtime without a reload, and it upgrades itself while still processing requests, so the proxy stays up during updates. The [repository](https://github.com/sozu-proxy/sozu) ships pre-built Linux binaries with each tagged release, a Docker image on Docker Hub, and a source build with cargo. Clever Cloud SAS, a company in Nantes, France, maintains the project.

## Worth knowing

The main program is licensed under AGPL-3.0 and the command library under LGPL-3.0. The project's about page says a business building on Sōzu should contribute back or agree a separate business arrangement with Clever Cloud.
