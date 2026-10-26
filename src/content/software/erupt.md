---
id: erupt
name: Erupt
urls:
  home: https://www.erupt.xyz
  repository: https://github.com/erupts/erupt
  docs: https://docs.erupt.xyz
  pricing: https://www.erupt.xyz/#!/pro
category:
  - admin-panel
description: Annotation-driven Java admin framework that generates an admin page for each JPA entity class.
status: active
maintainer: YuePeng
maintainerType: individual
firstRelease: 2021
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 17
databases:
  - mysql
  - postgres
  - oracle
  - sqlserver
  - mongodb
adminUi: true
headlessApi:
  - rest
installMethod: Maven dependency erupt-spring-boot-starter
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-09-25
githubStargazers: 3359
contributors: 33
social:
  discord: https://discord.gg/yYaEEQVsA
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.erupt.xyz/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/erupts/erupt
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/erupts/erupt/blob/master/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/erupts/erupt/master/pom.xml
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/erupts/erupt
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/erupts/erupt/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/erupts/erupt/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://github.com/erupts/erupt/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/erupts/erupt/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/erupts/erupt/blob/master/README.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://github.com/erupts/erupt/blob/master/README.md
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://github.com/erupts/erupt/blob/master/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/erupts/erupt/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/erupts/erupt/master/LICENSE
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/erupts/erupt/master/pom.xml
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/erupts/erupt/blob/master/README.md
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/erupts/erupt/blob/master/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/erupts/erupt/releases
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/erupts/erupt/releases/latest
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/erupts/erupt/releases/latest
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/erupts/erupt
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/erupts/erupt/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Erupt generates an admin page for each JPA entity class annotated with @Erupt, so the annotations on a Java class define the admin interface. It runs on Java with Spring Boot and is added to a Maven project through the erupt-spring-boot-starter dependency, or run from a Docker image.

Each annotated entity is also exposed as a REST endpoint. Users, roles and menus come built in, and the project names OAuth2, LDAP and SSO as sign-in options.

## Worth knowing

The core modules are Apache-2.0. Commercial Chart, Flow, Tenant and Cube modules are sold as add-ons beside the core, and the project links a pricing page for them.
