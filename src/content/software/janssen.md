---
id: janssen
name: Janssen
urls:
  home: https://docs.jans.io
  repository: https://github.com/JanssenProject/jans
  docs: https://docs.jans.io/v2.6.0/
category:
  - auth
description: Open-source identity and access management server with OAuth 2.0, OpenID Connect, SAML, FIDO2 and SCIM, installed on virtual machines, Docker or Kubernetes.
status: active
maintainer: Janssen Project
firstRelease: 2020
language: java
runtime:
  - jvm
hosting:
  - java
databases:
  - postgres
  - mysql
adminUi: true
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-11-03
githubStargazers: 656
contributors: 120
social:
  forum: https://github.com/JanssenProject/jans/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://docs.jans.io/v2.6.0/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/JanssenProject/jans
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.jans.io/v2.6.0/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/JanssenProject/jans
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/JanssenProject/jans
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/JanssenProject/jans
    checkedAt: 2026-11-03
  - field: category
    url: https://docs.jans.io/v2.6.0/
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/JanssenProject/jans
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/JanssenProject/jans/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.jans.io/v2.6.0/janssen-server/install/install-faq/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.jans.io/v2.6.0/janssen-server/install/docker-install/quick-start/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.jans.io/v2.6.0/janssen-server/install/helm-install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.jans.io/v2.6.0/janssen-server/
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.jans.io/v2.6.0/janssen-server/install/helm-install/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.jans.io/v2.6.0/janssen-server/install/docker-install/quick-start/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/JanssenProject/jans/releases/tag/v2.6.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/JanssenProject/jans/releases/tag/v2.6.1
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/JanssenProject/jans/releases/tag/v1.0.0-a2
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/JanssenProject/jans
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/JanssenProject/jans/contributors
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Janssen is an open-source identity and access management server written in Java. Its Auth Server implements OAuth 2.0, OpenID Connect, SAML 2.0, FIDO2, SCIM and UMA 2.0, and it is built on the Java Weld framework. The Linux Foundation hosts the project, which Gluu contributed in 2020.

The [documentation](https://docs.jans.io/v2.6.0/) describes three install routes: a Docker demo that runs the server with MySQL or PostgreSQL, a [Helm chart](https://docs.jans.io/v2.6.0/janssen-server/install/helm-install/) for Kubernetes that recommends PostgreSQL, and Linux packages for Ubuntu and Red Hat on virtual machines. Administrators connect to the server with a terminal UI.

## Worth knowing

The Docker demo installer is meant as a demonstration, and its page lists 8 GB of RAM and 4 CPU cores as the requirement. The same repository holds Agama, a language for web authentication flows, and Cedarling, a policy engine with SDKs for Java, Go, Rust, Python and C.
