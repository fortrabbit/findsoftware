---
id: kanidm
name: Kanidm
urls:
  home: https://kanidm.com
  repository: https://github.com/kanidm/kanidm
  docs: https://kanidm.github.io/kanidm/stable/
category:
  - auth
description: Open-source identity management server with passkeys, OAuth2 and OpenID Connect, LDAP, RADIUS and Linux login integration, written in Rust.
status: active
maintainer: Kanidm project team
maintainerType: community
firstRelease: 2019
language: rust
runtime:
  - binary
hosting:
  - binary
contentStore:
  - database
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: MPL-2.0
currentMajor: "1"
latestReleaseDate: 2026-11-01
githubStargazers: 5528
contributors: 156
social:
  forum: https://github.com/kanidm/kanidm/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://kanidm.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/kanidm/kanidm
    checkedAt: 2026-11-03
  - field: urls
    url: https://kanidm.github.io/kanidm/stable/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://kanidm.github.io/kanidm/stable/support.html
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/kanidm/kanidm/blob/master/LICENSE.md
    checkedAt: 2026-11-03
  - field: category
    url: https://kanidm.com
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/kanidm/kanidm
    checkedAt: 2026-11-03
  - field: runtime
    url: https://kanidm.com
    checkedAt: 2026-11-03
  - field: contentStore
    url: https://kanidm.com/comparisons/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://kanidm.github.io/kanidm/stable/evaluation_quickstart.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://kanidm.github.io/kanidm/stable/installing_client_tools.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://kanidm.github.io/kanidm/stable/installing_client_tools.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://kanidm.github.io/kanidm/stable/print.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://kanidm.github.io/kanidm/stable/print.html
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://kanidm.github.io/kanidm/stable/print.html
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/kanidm/kanidm/releases/tag/v1.12.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/kanidm/kanidm/releases/tag/v1.12.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/kanidm/kanidm/releases/tag/v1.0.0rc1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/kanidm/kanidm
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/kanidm/kanidm/contributors
    checkedAt: 2026-11-03
ai: authored
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Kanidm is an identity management server written in Rust. It offers passkey login through WebAuthn, OAuth 2.0 and OpenID Connect for single sign-on into web applications, a read-only LDAPS gateway for legacy systems and RADIUS for network and VPN authentication. Users have a web UI for self service, and administrators use the command line tools.

The server runs from a container image, which the [evaluation quickstart](https://kanidm.github.io/kanidm/stable/evaluation_quickstart.html) pulls and starts with Docker or Podman. The [client tools page](https://kanidm.github.io/kanidm/stable/installing_client_tools.html) covers system packages and cargo. The project's [comparison page](https://kanidm.com/comparisons/) compares Kanidm with LLDAP, Keycloak, Authentik, Authelia, Zitadel and Rauthy.

## Worth knowing

The evaluation quickstart is for trying Kanidm out; the project recommends following the installation chapter for a production deployment because of security considerations. The project's support page gives each stable release a limited support window.
