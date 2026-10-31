---
id: authgear
name: Authgear
urls:
  home: https://www.authgear.com
  repository: https://github.com/authgear/authgear-server
  docs: https://docs.authgear.com/
  pricing: https://www.authgear.com/pricing
category:
  - auth
description: Open-source login and identity service with passkeys, SSO, MFA and user management, self-hosted or offered as Authgear Cloud.
status: active
maintainer: Skymakers Digital Limited
maintainerType: company
firstRelease: 2021
hqCountry: GB
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
adminUi: true
headlessApi:
  - graphql
i18n: yes, language and localization for display texts
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: Apache-2.0
latestReleaseDate: 2026-10-22
githubStargazers: 2137
contributors: 46
social:
  discord: https://discord.gg/Kdn5vcYwAS
  forum: https://github.com/authgear/authgear-server/discussions
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://www.authgear.com/
    checkedAt: 2026-10-31
  - field: urls
    url: https://api.github.com/repos/authgear/authgear-server
    checkedAt: 2026-10-31
  - field: urls
    url: https://docs.authgear.com/
    checkedAt: 2026-10-31
  - field: urls
    url: https://www.authgear.com/pricing
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://www.authgear.com/terms/
    checkedAt: 2026-10-31
  - field: maintainerType
    url: https://www.authgear.com/terms/
    checkedAt: 2026-10-31
  - field: hqCountry
    url: https://www.authgear.com/terms/
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/authgear/authgear-server/releases/tag/2021-08-16.0
    checkedAt: 2026-10-31
  - field: language
    url: https://api.github.com/repos/authgear/authgear-server/languages
    checkedAt: 2026-10-31
  - field: runtime
    url: https://api.github.com/repos/authgear/authgear-server/languages
    checkedAt: 2026-10-31
  - field: category
    url: https://www.authgear.com/
    checkedAt: 2026-10-31
  - field: license
    url: https://api.github.com/repos/authgear/authgear-server
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.authgear.com/deployment/local
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.authgear.com/deployment/helm
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.authgear.com/deployment/helm
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.authgear.com/authgear-once/install-authgear-once-on-a-vm
    checkedAt: 2026-10-31
  - field: databases
    url: https://docs.authgear.com/deployment/local
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://github.com/authgear/authgear-server/blob/main/README.md
    checkedAt: 2026-10-31
  - field: i18n
    url: https://docs.authgear.com/
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/authgear/authgear-server/releases/tag/2026-10-22.0
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://api.github.com/repos/authgear/authgear-server
    checkedAt: 2026-10-31
  - field: contributors
    url: https://api.github.com/repos/authgear/authgear-server/contributors?per_page=1
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://github.com/authgear/authgear-server/blob/main/README.md
    checkedAt: 2026-10-31
  - field: headlessApi
    url: https://docs.authgear.com/reference/apis/admin-api
    checkedAt: 2026-10-31
ai: authored
contentStore: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Authgear is a login and identity service that a team runs on its own servers or uses as the hosted Authgear Cloud. The server is written in Go and depends on PostgreSQL and Redis, as the [local deployment guide](https://docs.authgear.com/deployment/local) states. Applications connect through OpenID Connect and SAML single sign-on, and through SDKs for Swift, Kotlin, Flutter and React Native. A Helm chart covers Kubernetes installs, and [Authgear ONCE](https://docs.authgear.com/authgear-once/install-authgear-once-on-a-vm) packages an easy-install version for a Linux server under a one-time license that is purchased.

An admin portal sits on top of the server. The homepage says everything the portal does is also available through the Admin API.

## Worth knowing

The pricing page lists an EU data region for Authgear Cloud as coming soon.
