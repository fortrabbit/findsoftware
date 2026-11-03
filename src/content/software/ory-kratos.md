---
id: ory-kratos
name: Ory Kratos
urls:
  home: https://www.ory.sh/kratos
  repository: https://github.com/ory/kratos
  docs: https://www.ory.com/docs/oss/kratos/install
  pricing: https://www.ory.com/pricing
category:
  - auth
description: Identity and user management server, written in Go, that runs login, registration, recovery, verification and profile flows for applications over HTTP APIs.
status: active
maintainer: Ory Corp
maintainerType: company
firstRelease: 2020
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
templating: go templates
i18n: yes, email and SMS templates can be translated by the identity's language trait
runsAs:
  - always-on
installMethod: homebrew
licenseModel: open-core
license: Apache-2.0
latestReleaseDate: 2026-03-20
githubStargazers: 13950
contributors: 236
social:
  x: https://x.com/orycorp
  forum: https://github.com/ory/kratos/discussions
  youtube: https://www.youtube.com/@OryCorp
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://github.com/ory/kratos/blob/master/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.ory.sh/kratos
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/ory/kratos
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.ory.com/docs/oss/kratos/install
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/ory/kratos
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/ory/kratos
    checkedAt: 2026-11-03
  - field: runtime
    url: https://www.ory.com/docs/oss/kratos/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.ory.com/docs/oss/kratos/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.ory.com/docs/oss/kratos/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.ory.com/docs/oss/kratos/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.ory.com/docs/oss/kratos/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.ory.com/docs/oss/kratos/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.ory.com/docs/oss/kratos/install
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.ory.com/docs/oss/kratos/install
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/ory/kratos/releases/tag/v26.2.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/ory/kratos/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/ory/kratos
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/ory/kratos/contributors?per_page=1
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
    url: https://github.com/ory/kratos/blob/master/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://www.ory.com/docs/kratos/guides/production
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://www.ory.com/docs/oss/kratos/install
    checkedAt: 2026-11-03
  - field: i18n
    url: https://www.ory.com/docs/kratos/emails-sms/custom-email-templates
    checkedAt: 2026-11-03
  - field: templating
    url: https://www.ory.com/docs/kratos/emails-sms/custom-email-templates
    checkedAt: 2026-11-03
ai: authored
contentStore: null
adminUi: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Ory Kratos is an API-first identity and user management server written in Go. It runs the login, registration, account recovery, verification and profile flows that an application would otherwise build itself, and applications reach it over HTTP APIs. Email and SMS templates use Go templates and can be translated per user. The [install guide](https://www.ory.com/docs/oss/kratos/install) covers Homebrew, a shell install script, Scoop, Docker, Helm charts and binary downloads, and a build from source. A production deployment needs a database such as PostgreSQL, MySQL or CockroachDB. Ory Corp maintains the project, and the same server powers Ory Identities on the Ory Network.

## Worth knowing

SAML, SCIM and organization login are named as Enterprise License features that the open source version does not include. The APIs come without access control, so the install guide advises putting Ory Oathkeeper or an API gateway in front of them.
