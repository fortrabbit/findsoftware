---
id: modsecurity
name: ModSecurity
urls:
  home: https://modsecurity.org/
  repository: https://github.com/owasp-modsecurity/ModSecurity
  docs: https://modsecurity.org/docs/
category:
  - web-server
description: Open-source web application firewall engine, with a C++ library that web server connectors call for each request.
status: active
maintainer: OWASP Foundation
maintainerType: foundation
firstRelease: 2002
language: cpp
runtime:
  - binary
hosting:
  - binary
installMethod: autotools source build of libmodsecurity
licenseModel: open-source
license: Apache-2.0
currentMajor: "3"
latestReleaseDate: 2026-09-29
githubStargazers: 9844
contributors: 98
social:
  x: https://x.com/ModSecurity
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://modsecurity.org/
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/owasp-modsecurity/ModSecurity
    checkedAt: 2026-10-30
  - field: urls
    url: https://modsecurity.org/docs/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://modsecurity.org/
    checkedAt: 2026-10-30
  - field: category
    url: https://modsecurity.org/docs/
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/owasp-modsecurity/ModSecurity
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/owasp-modsecurity/ModSecurity/blob/v3/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/owasp-modsecurity/ModSecurity/blob/v3/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/owasp-modsecurity/ModSecurity/blob/v3/master/README.md
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/owasp-modsecurity/ModSecurity/blob/v3/master/LICENSE
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://modsecurity.org/
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/owasp-modsecurity/ModSecurity/releases/tag/v3.0.17
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/owasp-modsecurity/ModSecurity/releases/tag/v3.0.17
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://modsecurity.org/history/
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://github.com/owasp-modsecurity/ModSecurity
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/owasp-modsecurity/ModSecurity/contributors?per_page=1
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

ModSecurity is an open-source web application firewall engine, written in C++, that inspects HTTP traffic against rules written in its SecRules language. Version 3 is a standalone library that web server connectors call for each request, and the project maintains its NGINX and Apache connectors in separate repositories. Version 2 is the classic Apache module, which is also packaged for IIS. The library builds from source with autotools, and the README also describes a Windows build.

## Worth knowing

Two engine generations are maintained side by side. The project is maintained by OWASP after a commercial sponsor ended its support.
