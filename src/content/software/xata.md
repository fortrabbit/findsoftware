---
id: xata
name: Xata
urls:
  home: https://xata.io
  repository: https://github.com/xataio/xata
  docs: https://xata.io/docs
  pricing: https://xata.io/pricing
category:
  - database
description: Open-source platform for running many PostgreSQL instances on Kubernetes, with copy-on-write branching and scale-to-zero.
status: active
maintainer: Xatabase, Inc.
maintainerType: company
hqCountry: US
language: go
databases:
  - postgres
installMethod: local development with kind and Tilt
licenseModel: open-source
license: Apache-2.0
githubStargazers: 1105
contributors: 18
social:
  x: https://twitter.com/xata
  bluesky: https://bsky.app/profile/xata.io
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: name
    url: https://xata.io/
    checkedAt: 2026-10-31
  - field: urls
    url: https://xata.io/
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/xataio/xata
    checkedAt: 2026-10-31
  - field: urls
    url: https://xata.io/docs
    checkedAt: 2026-10-31
  - field: urls
    url: https://xata.io/pricing
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://xata.io/terms
    checkedAt: 2026-10-31
  - field: hqCountry
    url: https://xata.io/privacy
    checkedAt: 2026-10-31
  - field: category
    url: https://github.com/xataio/xata
    checkedAt: 2026-10-31
  - field: databases
    url: https://xata.io/
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/xataio/xata
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/xataio/xata
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://xata.io/open-source/xata-core
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://xata.io/open-source/quickstart
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/xataio/xata
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://github.com/xataio/xata
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/xataio/xata
    checkedAt: 2026-10-31
  - field: contributors
    url: https://api.github.com/repos/xataio/xata/contributors?per_page=1
    checkedAt: 2026-10-31
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

Xata is an open-source platform that runs many PostgreSQL instances on Kubernetes, with copy-on-write branching and scale-to-zero. The homepage describes it as running vanilla PostgreSQL. The [repository README](https://github.com/xataio/xata) describes it as a platform for self-hosting many Postgres instances, and the [project's open-source pages](https://xata.io/open-source/xata-core) say it ships as Helm charts for a Kubernetes cluster. The README also describes a local setup with kind and Tilt.

The company also runs Xata Cloud, a fully managed service billed by usage, and sells a bring-your-own-cloud deployment in which Xata installs the data plane in the customer's Kubernetes cluster.

## Worth knowing

The README advises against the platform for a single Postgres instance and against offering it as a public Postgres-as-a-Service to end customers. The sign-in with an identity provider uses OpenID Connect, and SAML is not supported out of the box.
