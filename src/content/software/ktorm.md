---
id: ktorm
name: Ktorm
urls:
  home: https://www.ktorm.org/
  repository: https://github.com/kotlin-orm/ktorm
  docs: https://www.ktorm.org/en/quick-start.html
category:
  - library
description: Kotlin ORM framework that maps JDBC tables to typed schemas and builds SQL through a strongly typed query DSL and sequence APIs.
status: active
maintainer: kotlin-orm
firstRelease: 2018
language: kotlin
runtime:
  - jvm
hosting:
  - java
databases:
  - mysql
  - postgres
  - sqlite
  - sqlserver
  - oracle
installMethod: Maven dependency org.ktorm:ktorm-core in pom.xml
licenseModel: open-source
license: Apache-2.0
currentMajor: "4"
latestReleaseDate: 2026-06-20
githubStargazers: 2343
contributors: 29
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://www.ktorm.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/kotlin-orm/ktorm
    checkedAt: 2026-11-16
  - field: urls
    url: https://www.ktorm.org/en/quick-start.html
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://api.github.com/repos/kotlin-orm/ktorm
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://repo1.maven.org/maven2/me/liuwj/ktorm/ktorm-core/maven-metadata.xml
    checkedAt: 2026-11-16
  - field: category
    url: https://www.ktorm.org/
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/kotlin-orm/ktorm
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/kotlin-orm/ktorm/blob/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/kotlin-orm/ktorm
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/kotlin-orm/ktorm/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://www.ktorm.org/en/quick-start.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://www.ktorm.org/en/quick-start.html
    checkedAt: 2026-11-16
  - field: databases
    url: https://www.ktorm.org/en/dialects-and-native-sql.html
    checkedAt: 2026-11-16
  - field: databases
    url: https://www.ktorm.org/en/dialects-and-native-sql.html
    checkedAt: 2026-11-16
  - field: databases
    url: https://www.ktorm.org/en/dialects-and-native-sql.html
    checkedAt: 2026-11-16
  - field: databases
    url: https://www.ktorm.org/en/dialects-and-native-sql.html
    checkedAt: 2026-11-16
  - field: databases
    url: https://www.ktorm.org/en/dialects-and-native-sql.html
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/kotlin-orm/ktorm/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/kotlin-orm/ktorm/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/kotlin-orm/ktorm
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/kotlin-orm/ktorm/contributors?per_page=1
    checkedAt: 2026-11-16
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

Ktorm is an object-relational mapping framework for Kotlin that works directly on JDBC. Queries are written in a strongly typed SQL DSL, and the framework generates the SQL from them, which exposes low-level bugs at compile time. Entity sequence APIs let a program write queries with sequence functions such as filter and map, in the style of Kotlin's native collections.

## Worth knowing

The core module supports standard SQL only. Features specific to a database come from a dialect module for that database. The Spring Support page describes integration with Spring JDBC.
