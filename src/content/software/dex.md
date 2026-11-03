---
id: dex
name: Dex
urls:
  home: https://dexidp.io
  repository: https://github.com/dexidp/dex
  docs: https://dexidp.io/docs/
category:
  - auth
description: OpenID Connect identity service that sits in front of LDAP, SAML and social login providers, so applications only speak OpenID Connect.
status: active
maintainer: Dex IdP Contributors
maintainerType: community
firstRelease: 2015
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
  - postgres
  - mysql
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-10-21
githubStargazers: 11226
contributors: 273
social:
  forum: https://github.com/dexidp/dex/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://dexidp.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://dexidp.io/docs/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/dexidp/dex
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://dexidp.io
    checkedAt: 2026-11-03
  - field: category
    url: https://dexidp.io
    checkedAt: 2026-11-03
  - field: category
    url: https://dexidp.io
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/dexidp/dex
    checkedAt: 2026-11-03
  - field: runtime
    url: https://dexidp.io
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/dexidp/dex
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/dexidp/dex
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/dexidp/dex/releases/tag/v2.46.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/dexidp/dex/releases/tag/v2.46.1
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/dexidp/dex/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/dexidp/dex
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/dexidp/dex
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://dexidp.io/docs/getting-started/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://dexidp.io/docs/getting-started/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://dexidp.io/docs/getting-started/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://dexidp.io/
    checkedAt: 2026-11-03
  - field: databases
    url: https://dexidp.io/docs/configuration/storage/
    checkedAt: 2026-11-03
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Dex is an OpenID Connect provider written in Go and shipped as a single binary. Applications use Dex as an OpenID Connect or OAuth 2.0 provider, while Dex authenticates users against upstream sources such as LDAP, SAML, GitHub, Google and Microsoft. Its state lives in SQLite3, Postgres or MySQL, and the storage page also lists etcd and Kubernetes custom resources as backends. The project distributes a container image and a reference Helm chart, and the [getting started page](https://dexidp.io/docs/getting-started/) also describes building from source. The Kubernetes guide deploys Dex as a deployment with a config map and a node port service. Dex is developed under the Cloud Native Computing Foundation.

## Worth knowing

The README marks the SAML 2.0 connector as unmaintained and likely vulnerable to authentication bypasses.
