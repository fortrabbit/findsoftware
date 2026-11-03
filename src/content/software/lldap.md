---
id: lldap
name: LLDAP
urls:
  repository: https://github.com/lldap/lldap
  docs: https://github.com/lldap/lldap/blob/v0.6.3/docs/install.md
category:
  - auth
description: Lightweight authentication server that exposes an LDAP interface and a web UI for managing users and groups.
status: active
maintainer: Valentin Tolmer
maintainerType: individual
firstRelease: 2021
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
  - mysql
  - postgres
adminUi: true
headlessApi:
  - graphql
runsAs:
  - always-on
installMethod: docker image lldap/lldap, with a compose example
licenseModel: open-source
license: GPL-3.0-only
currentMajor: "0"
latestReleaseDate: 2026-04-30
githubStargazers: 6609
contributors: 178
social:
  discord: https://discord.gg/h5PEdRMNyP
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://api.github.com/repos/lldap/lldap
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/lldap/lldap/blob/v0.6.3/docs/install.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/lldap/lldap/blob/v0.6.3/Cargo.toml
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/lldap/lldap/blob/v0.6.3/Cargo.toml
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/lldap/lldap/releases
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/lldap/lldap/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/lldap/lldap
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/lldap/lldap/blob/v0.6.3/docs/install.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/lldap/lldap/blob/v0.6.3/docs/install.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/lldap/lldap/blob/v0.6.3/docs/install.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/lldap/lldap/blob/v0.6.3/docs/install.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/lldap/lldap/blob/v0.6.3/docs/install.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/lldap/lldap/blob/v0.6.3/docs/install.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/lldap/lldap/blob/v0.6.3/docs/install.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/lldap/lldap/blob/main/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/lldap/lldap/blob/main/README.md
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/lldap/lldap/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/lldap/lldap/blob/v0.6.3/Cargo.toml
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/lldap/lldap/blob/v0.6.3/Cargo.toml
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/lldap/lldap/releases/tag/v0.6.3
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/lldap/lldap/releases/tag/v0.6.3
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/lldap/lldap
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/lldap/lldap/contributors
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

LLDAP is a lightweight authentication server with a simplified LDAP interface, kept deliberately smaller than a full LDAP server. Per its README it connects to other components such as Keycloak, Authelia and Nextcloud that use it as the source of users and groups. Administrators manage those users and groups in a web front end, and scripts can do the same through the GraphQL API. Data is kept in SQLite by default, and the database can be switched to MySQL/MariaDB or PostgreSQL. It runs as a long-lived service that listens on one port for LDAP and another for the web interface, and the [install guide](https://github.com/lldap/lldap/blob/v0.6.3/docs/install.md) covers a container image, Podman, the TrueNAS SCALE app catalog, distribution packages and a build from source with Cargo.

The FAQ names Kanidm as the project to look at when modern identity protocols are needed.

## Worth knowing

The README states that the goal is not to provide a full LDAP server. The FAQ states that LLDAP is developed by volunteers, that it offers no commercial support contracts, and that one maintainer knows the whole codebase.
