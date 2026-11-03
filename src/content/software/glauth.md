---
id: glauth
name: GLAuth
urls:
  home: https://glauth.github.io
  repository: https://github.com/glauth/glauth
  docs: https://glauth.github.io/docs/
category:
  - auth
description: Lightweight LDAP server written in Go, with user directories held in flat files, S3, SQL databases or another LDAP server.
status: active
maintainer: The GLAuth Project
maintainerType: community
firstRelease: 2018
language: go
runtime:
  - binary
hosting:
  - binary
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: precompiled binary from the releases page
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-09-13
githubStargazers: 2860
contributors: 45
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://glauth.github.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/glauth/glauth
    checkedAt: 2026-11-03
  - field: urls
    url: https://glauth.github.io/docs/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://glauth.github.io/
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://glauth.github.io/
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/glauth/glauth/commits/975d1d3b13e808cc667d507a2d367f1ab86ce057
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/glauth/glauth/blob/GLAuth-v2.5.4/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/glauth/glauth
    checkedAt: 2026-11-03
  - field: runtime
    url: https://glauth.github.io/docs/quickstart.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://glauth.github.io/docs/quickstart.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://glauth.github.io/docs/containerization.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://glauth.github.io/docs/kubernetes.html
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/glauth/glauth/blob/GLAuth-v2.5.4/README.md
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://glauth.github.io/docs/web-ui.html
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://glauth.github.io/docs/web-ui.html
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/glauth/glauth/blob/GLAuth-v2.5.4/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://glauth.github.io/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/glauth/glauth/releases/tag/GLAuth-v2.5.4
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/glauth/glauth/releases/latest
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/glauth/glauth
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/glauth/glauth/contributors?per_page=1
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

GLAuth is an LDAP server. Systems that authenticate against LDAP can use it as their directory. It is written in Go and runs as one process, started with a configuration file. The user directory can stay in that file or sit in another backend: flat files, S3, ownCloud, a SQL database or another LDAP server. An optional web UI shows statistics and application health on the same address as a REST API. The project distributes a standalone executable, a container image and a Helm chart.

## Worth knowing

The quickstart configuration is meant for trying the server out, and the docs say to set up TLS before production use. The README places the single-server setup, driven by a configuration file, in production when it is deployed with Puppet, Chef or Ansible, and calls GLAuth an alternative to OpenLDAP and Active Directory for development or a homelab.
