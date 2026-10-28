---
id: coraza
name: Coraza
urls:
  home: https://www.coraza.io
  repository: https://github.com/corazawaf/coraza
  docs: https://www.coraza.io/docs/tutorials/introduction/
category:
  - web-server
description: Web application firewall library written in Go that runs ModSecurity SecLang rule sets, including the OWASP Core Rule Set, inside web servers and proxies.
status: active
maintainer: OWASP Foundation, Inc.
maintainerType: foundation
firstRelease: 2021
language: go
runtime:
  - binary
hosting:
  - binary
installMethod: go module
licenseModel: open-source
license: Apache-2.0
currentMajor: "3"
latestReleaseDate: 2026-10-02
githubStargazers: 3972
contributors: 58
social:
  x: https://twitter.com/corazaio
  forum: https://github.com/corazawaf/coraza/discussions
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://www.coraza.io/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/corazawaf/coraza
    checkedAt: 2026-10-28
  - field: urls
    url: https://www.coraza.io/docs/tutorials/introduction/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://github.com/corazawaf/coraza/releases
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://owasp.org/about/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://owasp.org/about/
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/corazawaf/coraza/blob/main/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/corazawaf/coraza
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/corazawaf/coraza/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/corazawaf/coraza/blob/main/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/corazawaf/coraza/releases/tag/v3.8.1
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://github.com/corazawaf/coraza/releases/tag/v3.8.1
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/corazawaf/coraza
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/corazawaf/coraza/blob/main/README.md
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/corazawaf/coraza
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/corazawaf/coraza/contributors?per_page=1
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

Coraza is a web application firewall library written in Go. It runs rule sets written in SecLang, the rule language of ModSecurity, including the OWASP Core Rule Set. At its core it is a library: a Go program imports it, and the Coraza Project maintains integrations that place it inside an existing server or proxy, among them Caddy, Envoy through proxy-wasm, HAProxy, Traefik and NGINX through a C library.

The OWASP Foundation maintains the project as an OWASP Production Project. Development happens in the public GitHub repository, and questions go to GitHub Discussions.

## Worth knowing

The integrations do not share one stability status. The docs introduction and the README disagree on the HAProxy and Traefik integrations, and the Caddy plugin is marked as needing a maintainer. A reader choosing an integration should check its own repository and status before relying on it.

The README lists a Linux distribution or macOS as prerequisites and says Windows is not supported yet.
