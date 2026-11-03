---
id: maxkey
name: MaxKey
urls:
  home: https://www.maxkey.top
  repository: https://github.com/dromara/MaxKey
  docs: https://www.maxkey.top/doc/docs/overview/intro
category:
  - auth
description: Self-hosted identity and access management server with single sign-on, OAuth 2, OpenID Connect, SAML 2.0, CAS and SCIM support.
status: active
maintainer: MaxKey
firstRelease: 2020
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 21
databases:
  - mysql
adminUi: true
runsAs:
  - always-on
installMethod: Windows zip download with bundled JDK
licenseModel: open-source
license: Apache-2.0
currentMajor: "4"
latestReleaseDate: 2026-10-21
githubStargazers: 1982
contributors: 42
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.maxkey.top/
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.maxkey.top/doc/docs/overview/intro
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/dromara/MaxKey
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.maxkey.top/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/dromara/MaxKey
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/dromara/MaxKey/blob/main/README.md
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/dromara/MaxKey/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/dromara/MaxKey
    checkedAt: 2026-11-03
  - field: runtime
    url: https://www.maxkey.top/doc/docs/install/tutorial
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/dromara/MaxKey/blob/4.2.0/ReleaseNotes.txt
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.maxkey.top/doc/docs/install/tutorial
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.maxkey.top/doc/docs/install/deploy_linux
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.maxkey.top/doc/docs/install/deploy_docker_compose
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.maxkey.top/doc/docs/install/deploy_docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.maxkey.top/doc/docs/install/deploy_baota
    checkedAt: 2026-11-03
  - field: databases
    url: https://www.maxkey.top/doc/docs/install/deploy_linux
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/dromara/MaxKey/releases/tag/4.2.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/dromara/MaxKey/releases/tag/4.2.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/dromara/MaxKey/releases/tag/v.1.2GA
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/dromara/MaxKey
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/dromara/MaxKey
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://www.maxkey.top/doc/docs/install/tutorial
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/dromara/MaxKey/blob/main/README.md
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

MaxKey is an identity and access management server written in Java that provides single sign-on for web and mobile applications. It speaks OAuth 2.x and OpenID Connect, SAML 2.0, JWT, CAS and SCIM, and it stores its data in MySQL. The [Linux install guide](https://www.maxkey.top/doc/docs/install/deploy_linux) sets up a JDK, a MySQL schema and separate start scripts for the authentication server, the management server and a demo, with nginx in front. The same documentation also covers a Windows bundle that includes its own JDK, a Docker Compose setup and a Docker script that pulls the project's images.

## Worth knowing

The comparison page lists an Enterprise Edition beside the Community Edition. The English pages on the site describe an older release line than the Chinese documentation.
