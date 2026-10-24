---
id: authentik
name: authentik
urls:
  home: https://goauthentik.io
  repository: https://github.com/goauthentik/authentik
  docs: https://docs.goauthentik.io/install-config/install/docker-compose/
  pricing: https://goauthentik.io/pricing/
category:
  - auth
description: Self-hosted, open source identity provider with OIDC, SAML, LDAP and proxy authentication.
status: active
maintainer: Authentik Security Inc.
maintainerType: company
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.14
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-core
license: MIT
latestReleaseDate: 2026-10-14
githubStargazers: 26005
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: name
    url: https://goauthentik.io
    checkedAt: 2026-10-19
  - field: urls
    url: https://goauthentik.io
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/goauthentik/authentik
    checkedAt: 2026-10-19
  - field: urls
    url: https://docs.goauthentik.io/install-config/install/docker-compose/
    checkedAt: 2026-10-19
  - field: license
    url: https://github.com/goauthentik/authentik/blob/version/2026.8.4/LICENSE
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://goauthentik.io
    checkedAt: 2026-10-19
  - field: language
    url: https://github.com/goauthentik/authentik
    checkedAt: 2026-10-19
  - field: runtime
    url: https://github.com/goauthentik/authentik/blob/version/2026.8.4/pyproject.toml
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://github.com/goauthentik/authentik/blob/version/2026.8.4/pyproject.toml
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://docs.goauthentik.io/install-config/install/docker-compose/
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://docs.goauthentik.io/install-config/install/docker-compose/
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://goauthentik.io
    checkedAt: 2026-10-19
  - field: maintainerType
    url: https://goauthentik.io
    checkedAt: 2026-10-19
  - field: urls
    url: https://goauthentik.io/pricing/
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://github.com/goauthentik/authentik/releases/tag/version/2026.8.4
    checkedAt: 2026-10-19
  - field: githubStargazers
    url: https://github.com/goauthentik/authentik
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://docs.goauthentik.io/install-config/install/docker-compose/
    checkedAt: 2026-10-19
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

authentik is a self-hosted identity provider. It signs users in through OIDC, SAML, LDAP, SCIM, RADIUS and Kerberos, and it can also protect applications as a proxy. Authentik Security Inc. holds the copyright. The [install guide](https://docs.goauthentik.io/install-config/install/docker-compose/) covers Docker Compose and Kubernetes.

## Worth knowing

The MIT license covers the core code; the authentik/enterprise directory has a separate license file, and the website directory is under CC BY-SA 4.0. A paid Enterprise tier sits beside the open-source edition.
