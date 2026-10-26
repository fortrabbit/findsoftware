---
id: unfiltered
name: Unfiltered
urls:
  home: https://unfiltered.ws/
  repository: https://github.com/unfiltered/unfiltered
  docs: https://unfiltered.ws/
category:
  - library
description: Scala toolkit for handling HTTP requests across several server backends, including Jetty, Netty and servlet containers.
status: active
maintainer: Nathan Hamblen / Doug Tangren
firstRelease: 2010
language: scala
runtime:
  - jvm
hosting:
  - java
runsAs:
  - always-on
installMethod: sbt or Maven dependency from Maven Central
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-01-12
githubStargazers: 710
contributors: 59
social:
  forum: https://groups.google.com/forum/#!forum/unfiltered-scala
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://unfiltered.ws/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/unfiltered/unfiltered
    checkedAt: 2026-10-26
  - field: urls
    url: https://unfiltered.ws/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/unfiltered/unfiltered/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/unfiltered/unfiltered
    checkedAt: 2026-10-26
  - field: category
    url: https://unfiltered.ws/
    checkedAt: 2026-10-26
  - field: runtime
    url: https://unfiltered.ws/03.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://unfiltered.ws/04.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://unfiltered.ws/01.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://unfiltered.ws/03.html
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/unfiltered/unfiltered
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/unfiltered/unfiltered/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://repo1.maven.org/maven2/net/databinder/unfiltered_2.7.5/
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://repo1.maven.org/maven2/ws/unfiltered/unfiltered-filter_3/maven-metadata.xml
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://repo1.maven.org/maven2/ws/unfiltered/unfiltered-filter_3/0.12.1/
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/unfiltered/unfiltered
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/unfiltered/unfiltered/contributors
    checkedAt: 2026-10-26
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Unfiltered is a Scala toolkit for handling HTTP requests across several server backends. Its core library holds request extractors and response combinators, and an application declares its intents as partial functions over requests. Binding modules run those intents on a servlet container, on Jetty or on Netty, and the project's bindings page names each one. The library is published to Maven Central under the ws.unfiltered organization, for Scala 2.13 and Scala 3.

## Worth knowing

Milestone releases of a newer line are published beside the latest stable release, which is the one the homepage names.
