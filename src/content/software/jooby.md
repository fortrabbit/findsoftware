---
id: jooby
name: Jooby
urls:
  home: https://jooby.io
  repository: https://github.com/jooby-project/jooby
  docs: https://jooby.io
category:
  - framework
description: Modular web framework for Java and Kotlin.
status: active
maintainer: Edgar Espina
firstRelease: 2014
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 21
databases:
  - mysql
  - postgres
templating: freemarker, handlebars, jstachio, jte, pebble, rocker, thymeleaf
runsAs:
  - always-on
installMethod: jooby CLI, Maven or Gradle project
licenseModel: open-source
license: Apache-2.0
currentMajor: "4"
latestReleaseDate: 2026-07-29
githubStargazers: 1782
contributors: 97
pluginCount: 50
social:
  discord: https://discord.gg/JmyxrKPvjY
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://jooby.io
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/jooby-project/jooby
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/jooby-project/jooby/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/jooby-project/jooby/main/pom.xml
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://repo1.maven.org/maven2/org/jooby/jooby/
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/jooby-project/jooby/blob/main/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/jooby-project/jooby
    checkedAt: 2026-10-26
  - field: runtime
    url: https://jooby.io
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://jooby.io
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://jooby.io
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://jooby.io
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://jooby.io
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://jooby.io
    checkedAt: 2026-10-26
  - field: databases
    url: https://jooby.io
    checkedAt: 2026-10-26
  - field: databases
    url: https://jooby.io
    checkedAt: 2026-10-26
  - field: templating
    url: https://jooby.io
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/jooby-project/jooby
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/jooby-project/jooby/main/LICENSE
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/jooby-project/jooby/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/jooby-project/jooby/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/jooby-project/jooby
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/jooby-project/jooby/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: pluginCount
    url: https://github.com/jooby-project/jooby/blob/main/README.md
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Jooby is a Java and Kotlin framework built from a core and over 50 thin modules, among them template engine modules. It can run on Netty, Jetty, Undertow or Vert.x. A new project is scaffolded by the jooby command-line tool into a Maven or Gradle build, optionally with a Dockerfile.

An application is packaged as a fat jar and started with "java -jar", so a live site needs a host that keeps a JVM process running.

## Worth knowing

Releases continue on more than one major line, and the newest release overall can be on an older line than the current major.
