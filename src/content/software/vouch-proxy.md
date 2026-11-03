---
id: vouch-proxy
name: Vouch Proxy
urls:
  repository: https://github.com/vouch/vouch-proxy
  docs: https://github.com/vouch/vouch-proxy
category:
  - auth
  - web-server
description: Single sign-on proxy for Nginx that checks each request against a login from an OAuth or OIDC provider through the auth_request module.
status: active
maintainer: The Vouch Proxy Authors
maintainerType: community
firstRelease: 2017
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-09-27
githubStargazers: 3281
contributors: 66
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://github.com/vouch/vouch-proxy
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/vouch/vouch-proxy/blob/master/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/vouch/vouch-proxy/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://api.github.com/users/vouch
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/vouch/vouch-proxy/tree/v0.2.0
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/vouch/vouch-proxy/blob/master/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/vouch/vouch-proxy
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/vouch/vouch-proxy/blob/master/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/vouch/vouch-proxy/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/vouch/vouch-proxy/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/vouch/vouch-proxy/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/vouch/vouch-proxy/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/vouch/vouch-proxy/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/vouch/vouch-proxy/blob/master/README.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/vouch/vouch-proxy/tree/v0.50.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/vouch/vouch-proxy/commit/75741a1134
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/vouch/vouch-proxy
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/vouch/vouch-proxy
    checkedAt: 2026-11-03
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

Vouch Proxy is an SSO solution for Nginx that uses the auth_request module to check each request against a login from an OAuth or OIDC provider. Nginx calls the proxy's /validate endpoint before it serves a protected site, and the proxy runs as a server beside Nginx. The project is written in Go and ships as a binary, a container image and a Helm chart, and its README also covers a build from source.
