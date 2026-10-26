---
id: javalin
name: Javalin
urls:
  home: https://javalin.io
  repository: https://github.com/javalin/javalin
  docs: https://javalin.io/documentation
category:
  - framework
description: Java and Kotlin web framework for building web applications and APIs.
status: active
firstRelease: 2017
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 17
templating: freemarker, velocity, thymeleaf
runsAs:
  - always-on
installMethod: Maven or Gradle dependency
licenseModel: open-source
license: Apache-2.0
currentMajor: "7"
latestReleaseDate: 2026-10-25
githubStargazers: 8376
contributors: 205
social:
  discord: https://discord.gg/sgak4e5NKv
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://javalin.io/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/javalin/javalin
    checkedAt: 2026-10-26
  - field: urls
    url: https://javalin.io/documentation
    checkedAt: 2026-10-26
  - field: language
    url: https://javalin.io/
    checkedAt: 2026-10-26
  - field: category
    url: https://javalin.io/
    checkedAt: 2026-10-26
  - field: runtime
    url: https://javalin.io/documentation
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://javalin.io/documentation
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://javalin.io/documentation
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://javalin.io/documentation
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/javalin/javalin/master/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://javalin.io/
    checkedAt: 2026-10-26
  - field: templating
    url: https://javalin.io/documentation
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://repo1.maven.org/maven2/io/javalin/javalin/maven-metadata.xml
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/javalin/javalin/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/javalin/javalin/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/javalin/javalin
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/javalin/javalin/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Javalin is a Java and Kotlin web framework. Starting a Javalin application starts an embedded Jetty server, and the process keeps serving requests until the application is stopped. It is added to a project as a Maven or Gradle dependency, and template rendering comes from separate per-engine artifacts for engines such as FreeMarker, Velocity and Thymeleaf. The [documentation](https://javalin.io/documentation) describes the setup.

## Worth knowing

Because the server runs inside the application's own process, a host has to keep a Java process alive for the site to answer requests.
