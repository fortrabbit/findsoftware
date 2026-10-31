---
id: apereo-cas
name: Apereo CAS
urls:
  home: https://apereo.github.io/cas/
  repository: https://github.com/apereo/cas
  docs: https://apereo.github.io/cas/8.0.x/planning/Getting-Started.html
category:
  - auth
description: Single sign-on and identity provider server written in Java, supporting the CAS, SAML, OpenID Connect and OAuth 2.0 protocols.
status: active
maintainer: The Apereo Foundation
maintainerType: foundation
firstRelease: 2005
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 25
basedOn:
  - spring-framework
  - spring-boot
i18n: yes, described as multilingual on the homepage
runsAs:
  - always-on
installMethod: source-build
licenseModel: open-source
license: Apache-2.0
currentMajor: "8"
latestReleaseDate: 2026-10-24
githubStargazers: 11392
contributors: 334
social:
  forum: https://apereo.github.io/cas/Mailing-Lists.html
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://apereo.github.io/cas/8.0.x/index.html
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/apereo/cas
    checkedAt: 2026-10-31
  - field: urls
    url: https://apereo.github.io/cas/8.0.x/planning/Getting-Started.html
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://github.com/apereo/cas/blob/master/NOTICE
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/apereo/cas
    checkedAt: 2026-10-31
  - field: runtime
    url: https://apereo.github.io/cas/8.0.x/planning/Installation-Requirements.html
    checkedAt: 2026-10-31
  - field: runtimeMin
    url: https://github.com/apereo/cas/blob/v8.0.3/gradle.properties
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://apereo.github.io/cas/8.0.x/installation/WAR-Overlay-Installation.html
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://apereo.github.io/cas/8.0.x/installation/WAR-Overlay-Installation.html
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://apereo.github.io/cas/8.0.x/installation/Docker-Installation.html
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://apereo.github.io/cas/8.0.x/installation/Docker-Installation.html
    checkedAt: 2026-10-31
  - field: category
    url: https://apereo.github.io/cas/8.0.x/index.html
    checkedAt: 2026-10-31
  - field: basedOn
    url: https://apereo.github.io/cas/8.0.x/planning/Architecture.html
    checkedAt: 2026-10-31
  - field: basedOn
    url: https://github.com/apereo/cas/blob/master/README.md
    checkedAt: 2026-10-31
  - field: i18n
    url: https://apereo.github.io/cas/8.0.x/index.html
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/apereo/cas
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://github.com/apereo/cas
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/apereo/cas/releases/tag/v8.0.3
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/apereo/cas/releases/tag/v8.0.3
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://api.github.com/repos/apereo/cas/commits/25042ebd9f1bb54d00384717458c407c96f04071
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/apereo/cas
    checkedAt: 2026-10-31
  - field: contributors
    url: https://github.com/apereo/cas
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://apereo.github.io/cas/8.0.x/planning/Getting-Started.html
    checkedAt: 2026-10-31
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Apereo CAS is the Java server of the CAS project, which handles sign-in for web applications. It is built on the Spring Framework and Spring Boot and speaks the CAS, SAML, OpenID Connect, OAuth 2.0 and WS-Federation protocols, and applications connect to it through the protocols they use. The [WAR overlay guide](https://apereo.github.io/cas/8.0.x/installation/WAR-Overlay-Installation.html) describes a Gradle project that builds a cas.war file for a servlet container such as Apache Tomcat, and the [Docker guide](https://apereo.github.io/cas/8.0.x/installation/Docker-Installation.html) offers images that are mostly meant as quickstarts and demos, plus a Helm chart for Kubernetes. The Apereo Foundation maintains the project.
