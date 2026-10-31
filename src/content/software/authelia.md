---
id: authelia
name: Authelia
urls:
  home: https://www.authelia.com
  repository: https://github.com/authelia/authelia
  docs: https://www.authelia.com/overview/prologue/introduction/
category:
  - auth
description: Open-source authentication and authorization server and portal that adds multi-factor authentication and single sign-on in front of web applications.
status: active
maintainer: Authelia
firstRelease: 2016
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
currentMajor: "4"
latestReleaseDate: 2026-09-17
githubStargazers: 29461
contributors: 300
social:
  discord: https://discord.authelia.com
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://www.authelia.com/
    checkedAt: 2026-10-31
  - field: urls
    url: https://api.github.com/repos/authelia/authelia
    checkedAt: 2026-10-31
  - field: urls
    url: https://www.authelia.com/overview/prologue/introduction/
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://www.authelia.com/
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://api.github.com/repos/authelia/authelia/commits/41b7440ab5bc0c29807b9be83c75a42f7260429b
    checkedAt: 2026-10-31
  - field: language
    url: https://api.github.com/repos/authelia/authelia/languages
    checkedAt: 2026-10-31
  - field: runtime
    url: https://api.github.com/repos/authelia/authelia/languages
    checkedAt: 2026-10-31
  - field: category
    url: https://www.authelia.com/
    checkedAt: 2026-10-31
  - field: license
    url: https://api.github.com/repos/authelia/authelia
    checkedAt: 2026-10-31
  - field: databases
    url: https://www.authelia.com/configuration/storage/sqlite/
    checkedAt: 2026-10-31
  - field: databases
    url: https://www.authelia.com/configuration/storage/postgres/
    checkedAt: 2026-10-31
  - field: databases
    url: https://www.authelia.com/configuration/storage/mysql/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://www.authelia.com/integration/deployment/docker/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://www.authelia.com/integration/kubernetes/chart/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://www.authelia.com/integration/deployment/bare-metal/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://www.authelia.com/integration/deployment/bare-metal/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://www.authelia.com/integration/deployment/bare-metal/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://www.authelia.com/integration/deployment/bare-metal/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://www.authelia.com/integration/deployment/bare-metal/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://www.authelia.com/integration/deployment/bare-metal/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://www.authelia.com/integration/deployment/bare-metal/
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://www.authelia.com/integration/deployment/bare-metal/
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/authelia/authelia/releases/tag/v4.39.28
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/authelia/authelia/releases/tag/v4.39.28
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://api.github.com/repos/authelia/authelia
    checkedAt: 2026-10-31
  - field: contributors
    url: https://api.github.com/repos/authelia/authelia/contributors?per_page=1
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

Authelia is an open-source authentication and authorization server and portal. Its [introduction](https://www.authelia.com/overview/prologue/introduction/) calls it a 2FA and SSO authentication server, and the homepage presents it as a companion to common reverse proxies. Applications can send their users to it for a session-cookie login, or use it as an OpenID Connect 1.0 provider, or accept identity from trusted headers. Users sign in through its web portal, which also supports passwordless authentication via passkeys and WebAuthn.

The project documents a [Docker](https://www.authelia.com/integration/deployment/docker/) install, a [Helm chart](https://www.authelia.com/integration/kubernetes/chart/) for Kubernetes, and a bare-metal install with example systemd unit files, published binaries, Debian packages with an APT repository, and an AUR package.

## Worth knowing

The bare-metal guide says Authelia runs as a daemon, so a host install keeps a process running rather than starting per request. The repository is maintained by the Authelia GitHub organization, and the homepage's copyright line names Authelia.
