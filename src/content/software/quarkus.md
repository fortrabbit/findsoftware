---
id: quarkus
name: Quarkus
urls:
  home: https://quarkus.io
  repository: https://github.com/quarkusio/quarkus
  docs: https://quarkus.io/guides/
  plugins: https://quarkus.io/extensions/
category:
  - framework
description: Java framework for building cloud-native applications that run on the JVM or as native executables.
status: active
maintainer: Commonhaus Foundation
maintainerType: foundation
firstRelease: 2019
language: java
runtime:
  - jvm
  - binary
hosting:
  - java
  - binary
runtimeMin: jvm 17
databases:
  - mariadb
  - sqlserver
  - mysql
  - oracle
  - postgres
templating: qute
i18n: localized message bundles in Qute templates
runsAs:
  - always-on
installMethod: Quarkus CLI or Maven plugin
licenseModel: open-source
license: Apache-2.0
currentMajor: "3"
latestReleaseDate: 2026-10-19
githubStargazers: 15964
contributors: 371
social:
  x: https://x.com/quarkusio
  bluesky: https://bsky.app/profile/quarkus.io
  mastodon: https://fosstodon.org/@quarkusio
  forum: https://github.com/quarkusio/quarkus/discussions
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/quarkusio/quarkus
    checkedAt: 2026-10-26
  - field: urls
    url: https://quarkus.io/
    checkedAt: 2026-10-26
  - field: urls
    url: https://quarkus.io/guides/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://quarkus.io/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/quarkusio/quarkus
    checkedAt: 2026-10-26
  - field: category
    url: https://quarkus.io/
    checkedAt: 2026-10-26
  - field: runtime
    url: https://quarkus.io/
    checkedAt: 2026-10-26
  - field: runtime
    url: https://quarkus.io/guides/building-native-image
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://quarkus.io/guides/getting-started
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://quarkus.io/get-started/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://quarkus.io/guides/getting-started
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/quarkusio/quarkus
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://quarkus.io/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://quarkus.io/about/
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/quarkusio/quarkus/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/quarkusio/quarkus/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/quarkusio/quarkus
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/quarkusio/quarkus/contributors
    checkedAt: 2026-10-26
  - field: urls
    url: https://quarkus.io/
    checkedAt: 2026-10-26
  - field: databases
    url: https://quarkus.io/guides/datasource
    checkedAt: 2026-10-26
  - field: templating
    url: https://quarkus.io/guides/qute
    checkedAt: 2026-10-26
  - field: i18n
    url: https://quarkus.io/guides/qute-reference
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Quarkus is a Java framework for cloud-native applications, developed as part of the Commonhaus Foundation. An application is created with the Quarkus CLI or with the Maven plugin. The same code can be packaged as a JVM application that starts with java -jar, or built into a native executable. Database access goes through JDBC extensions, and the project documents a templating engine written for Quarkus, OpenID Connect support and a migration guide for Spring Boot applications.

## Worth knowing

The guides name GraalVM or Mandrel as the route to native executables. The project's news says the move to the Commonhaus Foundation addresses the perception that the project depended too much on one vendor, which the news names as Red Hat.
