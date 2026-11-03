---
id: ory-keto
name: Ory Keto
urls:
  home: https://www.ory.sh/keto
  repository: https://github.com/ory/keto
  docs: https://www.ory.com/docs/oss/keto
  pricing: https://www.ory.com/pricing
category:
  - auth
description: Authorization server, written in Go, that stores relationships between subjects and objects and answers permission checks based on Google's Zanzibar model.
status: active
maintainer: Ory Corp
maintainerType: company
firstRelease: 2018
hqCountry: US
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
  - mysql
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: homebrew
licenseModel: open-core
license: Apache-2.0
latestReleaseDate: 2026-03-20
githubStargazers: 5418
contributors: 84
social:
  x: https://x.com/orycorp
  forum: https://github.com/ory/keto/discussions
  youtube: https://www.youtube.com/@OryCorp
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://github.com/ory/keto/blob/master/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.ory.sh/keto
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/ory/keto
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.ory.com/docs/oss/keto
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/ory/keto
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/ory/keto
    checkedAt: 2026-11-03
  - field: runtime
    url: https://www.ory.com/docs/oss/keto/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.ory.com/docs/oss/keto/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.ory.com/docs/oss/keto/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.ory.com/docs/oss/keto/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.ory.com/docs/oss/keto/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.ory.com/docs/oss/keto/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.ory.com/docs/oss/keto/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.ory.com/docs/oss/keto/install
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/ory/keto/releases/tag/v26.2.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/ory/keto/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/ory/keto
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/ory/keto/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.ory.com/legal/privacy
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.ory.com/legal/privacy
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.ory.com/pricing
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://www.ory.com/docs/keto/concepts/api-overview
    checkedAt: 2026-11-03
  - field: databases
    url: https://www.ory.com/docs/keto/guides/production
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://www.ory.com/docs/keto/guides/production
    checkedAt: 2026-11-03
ai: authored
contentStore: null
adminUi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Ory Keto is an authorization server written in Go. It is an open source implementation of Google's Zanzibar model, and it answers permission checks between subjects and objects, with access control policies written in the Ory Permission Language. Applications call its REST or gRPC APIs for those checks. The [install guide](https://www.ory.com/docs/oss/keto/install) covers Homebrew, a shell install script, Scoop, Docker, Helm charts and binary downloads, and a build from source. A production deployment needs a database such as PostgreSQL, MySQL or CockroachDB. Ory Corp maintains the project, and the same server powers Ory Permissions on the Ory Network.

## Worth knowing

The Ory open source servers come without access control on their APIs, so the install guide advises putting Ory Oathkeeper or an API gateway in front of them. An Enterprise License build adds features the open source version does not have; it is distributed from a private Docker registry.
