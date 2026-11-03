---
id: pocket-id
name: Pocket ID
urls:
  home: https://pocket-id.org
  repository: https://github.com/pocket-id/pocket-id
  docs: https://pocket-id.org/docs/introduction
category:
  - auth
description: Self-hosted OpenID Connect and OAuth 2.0 provider that lets users sign in to their apps with passkeys.
status: active
maintainer: Elias Schneider
maintainerType: individual
firstRelease: 2024
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
  - postgres
adminUi: true
headlessApi:
  - rest
i18n: yes, interface translated into more than 25 languages by the community
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-source
license: BSD-2-Clause
currentMajor: "2"
latestReleaseDate: 2026-11-02
githubStargazers: 9933
contributors: 108
social:
  discord: https://discord.gg/8wudU9KaxM
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://github.com/pocket-id/pocket-id/blob/main/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://pocket-id.org
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/pocket-id/pocket-id
    checkedAt: 2026-11-03
  - field: urls
    url: https://pocket-id.org/docs/introduction
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/pocket-id/pocket-id/blob/main/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/pocket-id/pocket-id/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/pocket-id/pocket-id/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/pocket-id/pocket-id/releases
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/pocket-id/pocket-id
    checkedAt: 2026-11-03
  - field: runtime
    url: https://pocket-id.org/docs/setup/installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://pocket-id.org/docs/setup/installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://pocket-id.org/docs/setup/installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://pocket-id.org/docs/setup/installation
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://pocket-id.org/docs/setup/installation
    checkedAt: 2026-11-03
  - field: databases
    url: https://pocket-id.org/docs/configuration/environment-variables
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://pocket-id.org/docs/guides/sign-in-methods
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/pocket-id/pocket-id
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/pocket-id/pocket-id/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/pocket-id/pocket-id/releases/tag/v2.19.2
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/pocket-id/pocket-id/releases/tag/v2.19.2
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/pocket-id/pocket-id
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/pocket-id/pocket-id/contributors
    checkedAt: 2026-11-03
  - field: i18n
    url: https://pocket-id.org/
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://pocket-id.org/docs/api
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Pocket ID is an OpenID Connect and OAuth 2.0 provider that lets users sign in to the applications they run with passkeys. It runs as a single program with a built-in SQLite database and can use PostgreSQL instead. The [installation guide](https://pocket-id.org/docs/setup/installation) covers Docker Compose and a single binary, and the binary is meant to run under systemd or the platform's equivalent. An admin UI handles user management, and an admin can issue a login code so a user can add a first passkey or recover access. Users and groups can be imported from LDAP.

The README names Keycloak and ORY Hydra as other self-hosted OpenID Connect and OAuth 2.0 providers, and the documentation names Keycloak and Authentik. It says the project supports only passkey authentication.

## Worth knowing

Browsers allow passkeys only on HTTPS pages, or on localhost, so the instance needs a domain served over HTTPS. Pocket ID keeps its database and uploads in a data directory next to the program.
