---
id: play
name: Play Framework
urls:
  home: https://www.playframework.com/
  repository: https://github.com/playframework/playframework
  docs: https://www.playframework.com/documentation/latest/Installing
category:
  - framework
description: Java and Scala web framework whose production build is a distribution that runs as a server process, with Twirl templates.
status: active
maintainer: The Play Framework Contributors
maintainerType: community
firstRelease: 2012
language: scala
runtime:
  - jvm
hosting:
  - java
templating: twirl
i18n: yes, messages per language tag
runsAs:
  - always-on
installMethod: sbt new playframework/play-scala-seed.g8
licenseModel: open-source
license: Apache-2.0, Apache 2
currentMajor: "3"
latestReleaseDate: 2026-09-30
githubStargazers: 12621
contributors: 374
social:
  x: https://twitter.com/playframework
  discord: https://discord.gg/g5s2vtZ4Fa
  forum: https://github.com/playframework/playframework/discussions
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.playframework.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/playframework/playframework
    checkedAt: 2026-10-26
  - field: urls
    url: https://www.playframework.com/documentation/latest/Installing
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/playframework/playframework/main/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/playframework/playframework
    checkedAt: 2026-10-26
  - field: runtime
    url: https://www.playframework.com/documentation/latest/Requirements
    checkedAt: 2026-10-26
  - field: category
    url: https://www.playframework.com/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/playframework/playframework/git/refs/tags/2.0
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/playframework/playframework
    checkedAt: 2026-10-26
  - field: license
    url: https://www.playframework.com/documentation/latest/Production
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://www.playframework.com/documentation/latest/Production
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/playframework/playframework/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/playframework/playframework/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/playframework/playframework
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/playframework/playframework/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://www.playframework.com/documentation/latest/NewApplication
    checkedAt: 2026-10-26
  - field: templating
    url: https://www.playframework.com/documentation/latest/ScalaTemplates
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://www.playframework.com/documentation/latest/ProductionConfiguration
    checkedAt: 2026-10-26
  - field: i18n
    url: https://www.playframework.com/documentation/latest/ScalaI18N
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Play Framework is a web framework for Java and Scala, maintained by The Play Framework Contributors and published under the Apache License 2.0. Projects are created with sbt new from a giter8 template, such as the Scala seed. Templates are written in Twirl, the template engine Play ships with, and the docs describe messages per language tag for internationalization.

For production, the dist task builds a binary distribution whose start script runs the application as a server that listens on an HTTP port. The server needs only a Java installation to run it.

## Worth knowing

The docs describe the current line of Play as built on Pekko in place of Akka, following Akka's license change.
