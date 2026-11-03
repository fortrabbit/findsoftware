---
id: voidauth
name: VoidAuth
urls:
  home: https://voidauth.app
  repository: https://github.com/voidauth/voidauth
  docs: https://voidauth.app/#/Getting-Started
category:
  - auth
description: Open-source single sign-on server with an OpenID Connect provider, forward-auth endpoints and an LDAP directory, run in front of self-hosted applications.
status: active
maintainer: Derek Paschal
maintainerType: community
firstRelease: 2025
language: javascript
runtime:
  - node
hosting:
  - node
databases:
  - postgres
  - sqlite
adminUi: true
i18n: yes, interface translations
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-source
license: AGPL-3.0
currentMajor: "1"
latestReleaseDate: 2026-11-01
githubStargazers: 2904
contributors: 30
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://voidauth.app
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/voidauth/voidauth
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/voidauth/voidauth/blob/main/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/voidauth/voidauth/blob/main/package.json
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://api.github.com/users/voidauth
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/voidauth/voidauth/releases/tag/v1.0.0
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/voidauth/voidauth/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/voidauth/voidauth
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/voidauth/voidauth/blob/main/package.json
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/voidauth/voidauth/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/voidauth/voidauth/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/voidauth/voidauth/blob/main/docs/Getting-Started.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/voidauth/voidauth/blob/main/docs/Getting-Started.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/voidauth/voidauth/blob/main/docs/Getting-Started.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/voidauth/voidauth/blob/main/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/voidauth/voidauth/blob/main/docs/Configuration.md
    checkedAt: 2026-11-03
  - field: i18n
    url: https://github.com/voidauth/voidauth/blob/main/docs/Contributing-Translations.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/voidauth/voidauth/releases/tag/v1.18.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/voidauth/voidauth/releases/tag/v1.18.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/voidauth/voidauth
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/voidauth/voidauth/contributors
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
---

VoidAuth is a single sign-on server written in TypeScript that runs on Node.js and stands in front of self-hosted applications. It acts as an OpenID Connect provider for applications that speak OIDC, exposes an LDAP directory, and offers forward-auth endpoints that a reverse proxy calls for each request. Administrators manage users and security groups in a built-in admin panel. The install route is Docker Compose, with PostgreSQL or a SQLite file for storage.

## Worth knowing

The README's disclaimer says the project has not been audited. A protected site needs a reverse proxy in front of VoidAuth, because the proxy calls the forward-auth endpoints for each request.
