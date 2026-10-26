---
id: lift
name: Lift
urls:
  home: https://liftweb.net/
  repository: https://github.com/lift/framework
  docs: https://github.com/lift/framework/blob/main/README.md
  plugins: https://liftweb.net/lift_modules
category:
  - framework
description: Scala web framework for building interactive web applications that run on Java servlet containers.
status: active
maintainer: Lift Committers and Contributors
maintainerType: community
firstRelease: 2008
language: scala
runtime:
  - jvm
hosting:
  - java
runsAs:
  - always-on
installMethod: sbt new with lift/basic-app.g8 or lift/blank-app.g8
licenseModel: open-source
license: Apache-2.0
currentMajor: "4"
latestReleaseDate: 2026-05-17
githubStargazers: 1283
contributors: 83
social:
  forum: https://groups.google.com/forum/#!forum/liftweb
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://liftweb.net/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/lift/framework
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/lift/framework/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/lift/framework/blob/main/build.sbt
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/lift/framework
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/lift/framework/blob/main/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/lift/framework/blob/main/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/lift/framework/blob/main/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/lift/framework/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/lift/framework/blob/main/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/lift/framework
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/lift/framework/blob/main/LICENSE.txt
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://liftweb.net/
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/lift/framework/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/lift/framework/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/lift/framework
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/lift/framework/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://search.maven.org/solrsearch/select?q=g:net.liftweb+AND+a:lift-webkit&core=gav&rows=200&wt=json
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/lift/framework/blob/main/README.md
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Lift is a web framework for Scala that runs on the JVM. Applications are created with sbt, using the lift/basic-app.g8 or lift/blank-app.g8 templates. Lift applications are deployed to a Java servlet container or application server, so they run as long-lived server processes.

## Worth knowing

The README's compatibility table gives Java 11 as the minimum for the 4.0 line.

The persistence components, Mapper and Record, have been removed from the main repository; projects that rely on them stay on an earlier release line or use another ORM.
