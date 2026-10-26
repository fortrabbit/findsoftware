---
id: http4s
name: http4s
urls:
  home: https://http4s.org/
  repository: https://github.com/http4s/http4s
  docs: https://http4s.org/v0.23/docs/quickstart.html
category:
  - framework
description: Scala library for typeful, functional and streaming HTTP servers and clients, built on FS2 and cats-effect.
status: active
maintainer: http4s
firstRelease: 2014
language: scala
runtime:
  - jvm
hosting:
  - java
runsAs:
  - always-on
installMethod: sbt dependency
licenseModel: open-source
license: Apache 2.0, Apache-2.0, Apache 2
currentMajor: "0"
latestReleaseDate: 2026-09-29
githubStargazers: 2627
contributors: 335
social:
  discord: https://discord.gg/XF3CXcMzqD
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://http4s.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/http4s/http4s
    checkedAt: 2026-10-26
  - field: urls
    url: https://http4s.org/v0.23/docs/quickstart.html
    checkedAt: 2026-10-26
  - field: category
    url: https://http4s.org/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/http4s/http4s/blob/series/0.23/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/http4s/http4s
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/http4s/http4s/blob/series/0.23/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://http4s.org/v0.23/docs/quickstart.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://http4s.org/v0.23/docs/quickstart.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://http4s.org/v0.23/docs/deployment.html
    checkedAt: 2026-10-26
  - field: license
    url: https://http4s.org/
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/http4s/http4s
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/http4s/http4s/blob/series/0.23/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://http4s.org/changelog.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://http4s.org/v0.23/docs/quickstart.html
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/http4s/http4s/blob/series/0.23/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://http4s.org/changelog.html
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/http4s/http4s/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/http4s/http4s/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/http4s/http4s
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/http4s/http4s/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

http4s is a Scala library for HTTP servers and clients written as typed, functional and streaming code. It is built on FS2, manages its effects through cats-effect, and runs on the JVM. Its quickstart adds the Ember client and server modules to an sbt build through libraryDependencies, and its deployment page packages a service as an assembled jar that runs with `java -jar`.

## Worth knowing

The README states that the blaze backend needs a JDK newer than 8u252. The quickstart runs the service as a server on a port, so it needs a host that keeps a process running.
