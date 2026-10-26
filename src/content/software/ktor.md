---
id: ktor
name: Ktor
urls:
  home: https://ktor.io
  repository: https://github.com/ktorio/ktor
  docs: https://ktor.io/docs/welcome.html
category:
  - framework
description: Kotlin framework for building asynchronous servers and HTTP clients, extended with plugins and engines.
status: active
maintainer: JetBrains
parent: JetBrains
firstRelease: 2018
language: kotlin
runtime:
  - jvm
hosting:
  - java
templating: html-dsl, freemarker, velocity, mustache, thymeleaf, pebble, jte
runsAs:
  - always-on
installMethod: web-based Ktor project generator, or Gradle or Maven dependencies on io.ktor artifacts
licenseModel: open-source
license: Apache-2.0
currentMajor: "3"
latestReleaseDate: 2026-09-18
githubStargazers: 14554
contributors: 401
social:
  subreddit: https://www.reddit.com/r/ktor/
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://ktor.io/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/ktorio/ktor
    checkedAt: 2026-10-26
  - field: urls
    url: https://ktor.io/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://ktor.io/
    checkedAt: 2026-10-26
  - field: parent
    url: https://ktor.io/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/ktorio/ktor/releases/tags/0.9.2
    checkedAt: 2026-10-26
  - field: language
    url: https://ktor.io/
    checkedAt: 2026-10-26
  - field: runtime
    url: https://ktor.io/docs/server-engines.html
    checkedAt: 2026-10-26
  - field: category
    url: https://ktor.io/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://ktor.io/docs/server-create-a-new-project.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://ktor.io/docs/server-create-and-configure.html
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/ktorio/ktor
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/ktorio/ktor/releases?per_page=100
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/ktorio/ktor/releases/latest
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/ktorio/ktor
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/ktorio/ktor/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: templating
    url: https://ktor.io/docs/server-templating.html
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Ktor is a Kotlin framework for asynchronous servers and HTTP clients. A server can run as a self-contained application that starts an engine such as Netty, Jetty, Tomcat or CIO and listens on a port, or as a servlet inside a container such as Tomcat or Jetty.

Views can be written with a Kotlin HTML DSL or with JVM template engines, among them FreeMarker, Velocity, Mustache, Thymeleaf, Pebble and JTE. Authentication covers LDAP and OpenID Connect.

New projects come from the web-based project generator, and the core dependency is io.ktor:ktor-server-core, resolved from Maven Central through Gradle or Maven. JetBrains supports and develops the framework.
