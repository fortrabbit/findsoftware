---
id: casdoor
name: Casdoor
urls:
  home: https://casdoor.ai
  repository: https://github.com/casdoor/casdoor
  docs: https://casdoor.org/docs/overview
  pricing: https://www.casdoor.com/pricing
category:
  - auth
description: Open-source identity and access management and single sign-on platform with a web admin console.
status: active
maintainer: Casdoor contributors
maintainerType: community
firstRelease: 2021
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - mariadb
  - postgres
  - sqlserver
  - oracle
  - sqlite
adminUi: true
i18n: multiple languages, with community translation
runsAs:
  - always-on
installMethod: binary-download
licenseModel: open-source
license: Apache-2.0
currentMajor: "4"
latestReleaseDate: 2026-10-30
githubStargazers: 14720
contributors: 321
social:
  discord: https://discord.gg/5rPsrAzK7S
  forum: https://github.com/casdoor/casdoor/discussions
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: name
    url: https://casdoor.org/docs/overview
    checkedAt: 2026-10-31
  - field: urls
    url: https://casdoor.ai
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/casdoor/casdoor
    checkedAt: 2026-10-31
  - field: urls
    url: https://casdoor.org/docs/overview
    checkedAt: 2026-10-31
  - field: urls
    url: https://www.casdoor.com/pricing
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://casdoor.org
    checkedAt: 2026-10-31
  - field: maintainerType
    url: https://casdoor.org
    checkedAt: 2026-10-31
  - field: category
    url: https://casdoor.org/docs/overview
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/casdoor/casdoor
    checkedAt: 2026-10-31
  - field: runtime
    url: https://casdoor.org/docs/basic/server-installation
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://casdoor.org/docs/basic/server-installation
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://casdoor.org/docs/basic/server-installation
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://casdoor.org/docs/basic/try-with-docker
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/casdoor/casdoor/blob/master/README.md
    checkedAt: 2026-10-31
  - field: databases
    url: https://casdoor.org/docs/basic/server-installation
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://casdoor.org/docs/basic/server-installation
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://casdoor.org/docs/basic/server-installation
    checkedAt: 2026-10-31
  - field: i18n
    url: https://casdoor.org
    checkedAt: 2026-10-31
  - field: license
    url: https://www.casdoor.com/pricing
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://www.casdoor.com/pricing
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/casdoor/casdoor/releases/tag/v4.25.0
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/casdoor/casdoor/releases/tag/v4.25.0
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/casdoor/casdoor/releases/tag/v1.0.0
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/casdoor/casdoor
    checkedAt: 2026-10-31
  - field: contributors
    url: https://github.com/casdoor/casdoor
    checkedAt: 2026-10-31
ai: authored
contentStore: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Casdoor is an identity provider and single sign-on server: applications send users to it to sign in, and it returns a verified identity over OAuth 2.0, OpenID Connect, SAML or CAS. The [overview](https://casdoor.org/docs/overview) describes it as an identity and access management platform, with LDAP and RADIUS for applications and devices that speak only those protocols. Users, applications, sign-in pages and providers are managed in a web admin console. Several organizations can share one installation, and each has its own users, groups, roles, applications and branding.

The project is a single Go program that serves the built frontend on one port, and it runs on a database that the operator connects through `conf/app.conf`. The [server installation guide](https://casdoor.org/docs/basic/server-installation) covers a pre-built binary and a build from source, and the Docker Hub images and a Helm chart are the other routes the project documents. The repository is Apache-2.0 licensed, and the pricing page says Casdoor Cloud is operated by Casbin Inc.

## Worth knowing

The server needs a database that the operator provides, and the all-in-one Docker image uses an embedded SQLite file that the project describes as not for production. Casdoor Cloud is a dedicated instance that the project hosts and keeps upgraded, sold on the cloud plans of the pricing page, and self-hosting is listed there as free.
