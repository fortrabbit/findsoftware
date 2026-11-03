---
id: tinyauth
name: Tinyauth
urls:
  home: https://tinyauth.app
  repository: https://github.com/tinyauthapp/tinyauth
  docs: https://tinyauth.app/docs/getting-started/
category:
  - auth
description: OpenID Connect and authentication server that puts a login screen and access controls in front of self-hosted apps through reverse proxies such as Traefik.
status: active
maintainer: tinyauthapp
maintainerType: individual
firstRelease: 2025
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
  - postgres
adminUi: false
i18n: yes, translations contributed through Crowdin
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-source
license: AGPL-3.0
currentMajor: "5"
latestReleaseDate: 2026-09-07
githubStargazers: 8467
contributors: 36
social:
  discord: https://discord.gg/eHzVaCzRRd
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://tinyauth.app
    checkedAt: 2026-11-03
  - field: urls
    url: https://tinyauth.app
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/tinyauthapp/tinyauth
    checkedAt: 2026-11-03
  - field: urls
    url: https://tinyauth.app/docs/getting-started/
    checkedAt: 2026-11-03
  - field: category
    url: https://tinyauth.app
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/tinyauthapp/tinyauth
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://raw.githubusercontent.com/tinyauthapp/tinyauth/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/tinyauthapp/tinyauth
    checkedAt: 2026-11-03
  - field: runtime
    url: https://tinyauth.app
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://tinyauth.app/docs/getting-started/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://tinyauth.app/docs/guides/using-the-binary/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://tinyauth.app/docs/guides/kubernetes/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://tinyauth.app/docs/guides/using-the-binary/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/tinyauthapp/tinyauth
    checkedAt: 2026-11-03
  - field: i18n
    url: https://raw.githubusercontent.com/tinyauthapp/tinyauth/main/README.md
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/tinyauthapp/tinyauth
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/tinyauthapp/tinyauth
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/tinyauthapp/tinyauth/releases/tag/v5.2.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/tinyauthapp/tinyauth/releases/tag/v5.2.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/tinyauthapp/tinyauth/releases/tag/v0.1.0-beta.1
    checkedAt: 2026-11-03
  - field: databases
    url: https://tinyauth.app/docs/reference/configuration/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://tinyauth.app/docs/about/
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Tinyauth puts a login screen in front of self-hosted applications and is an OpenID Connect certified server. It is written in Go and runs as one server process, started from a binary, a Docker container or a Helm chart on Kubernetes. Users are set in configuration as bcrypt-hashed passwords with optional TOTP secrets, and sign-in can go through OAuth providers or an LDAP directory. The [getting-started guide](https://tinyauth.app/docs/getting-started/) places it behind Traefik by default, and per-application labels restrict an app to chosen users or groups.

## Worth knowing

The about page says the project is not designed for production environments that need role-based access control and finer permissions, and recommends Authentik for advanced user management. The README says the project is maintained by a single person.
