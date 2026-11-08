---
id: exposed
name: Exposed
urls:
  home: https://www.jetbrains.com/exposed/
  repository: https://github.com/JetBrains/Exposed
  docs: https://www.jetbrains.com/help/exposed/home.html
category:
  - library
description: Kotlin SQL library with a typesafe query DSL and a DAO API for database access.
status: active
maintainer: JetBrains
maintainerType: company
firstRelease: 2016
language: kotlin
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 8
databases:
  - postgres
  - mysql
  - sqlite
  - oracle
  - mariadb
  - sqlserver
installMethod: maven central
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-11-04
githubStargazers: 9301
contributors: 246
addedAt: 2026-11-08
checkedAt: 2026-11-08
sources:
  - field: urls
    url: https://www.jetbrains.com/exposed/
    checkedAt: 2026-11-08
  - field: urls
    url: https://www.jetbrains.com/help/exposed/home.html
    checkedAt: 2026-11-08
  - field: urls
    url: https://api.github.com/repos/JetBrains/Exposed
    checkedAt: 2026-11-08
  - field: maintainer
    url: https://www.jetbrains.com/exposed/
    checkedAt: 2026-11-08
  - field: maintainerType
    url: https://www.jetbrains.com/exposed/
    checkedAt: 2026-11-08
  - field: firstRelease
    url: https://api.github.com/repos/JetBrains/Exposed/commits/0a7a5addf72be80ddbac55df4ee39e519303df94
    checkedAt: 2026-11-08
  - field: category
    url: https://github.com/JetBrains/Exposed/blob/main/README.md
    checkedAt: 2026-11-08
  - field: language
    url: https://api.github.com/repos/JetBrains/Exposed
    checkedAt: 2026-11-08
  - field: runtime
    url: https://github.com/JetBrains/Exposed/blob/main/README.md
    checkedAt: 2026-11-08
  - field: runtimeMin
    url: https://github.com/JetBrains/Exposed/blob/main/README.md
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://www.jetbrains.com/help/exposed/exposed-modules.html
    checkedAt: 2026-11-08
  - field: databases
    url: https://www.jetbrains.com/exposed/
    checkedAt: 2026-11-08
  - field: databases
    url: https://www.jetbrains.com/exposed/
    checkedAt: 2026-11-08
  - field: databases
    url: https://www.jetbrains.com/exposed/
    checkedAt: 2026-11-08
  - field: databases
    url: https://www.jetbrains.com/exposed/
    checkedAt: 2026-11-08
  - field: databases
    url: https://github.com/JetBrains/Exposed/blob/main/README.md
    checkedAt: 2026-11-08
  - field: databases
    url: https://github.com/JetBrains/Exposed/blob/main/README.md
    checkedAt: 2026-11-08
  - field: license
    url: https://github.com/JetBrains/Exposed/blob/main/LICENSE.txt
    checkedAt: 2026-11-08
  - field: currentMajor
    url: https://api.github.com/repos/JetBrains/Exposed/releases/latest
    checkedAt: 2026-11-08
  - field: latestReleaseDate
    url: https://api.github.com/repos/JetBrains/Exposed/releases/latest
    checkedAt: 2026-11-08
  - field: githubStargazers
    url: https://api.github.com/repos/JetBrains/Exposed
    checkedAt: 2026-11-08
  - field: contributors
    url: https://api.github.com/repos/JetBrains/Exposed/contributors?per_page=1
    checkedAt: 2026-11-08
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

Exposed is a Kotlin SQL library with two access styles: a typesafe DSL for building queries and a DAO API for working with entities. Its modules are added to an existing Gradle or Maven project from Maven Central and run on the JVM. An application needs the core module and one transport module, JDBC or R2DBC, and the database access modules are optional layers on top of the core.

## Worth knowing

The R2DBC modules and the Spring modules need a newer JDK than the minimum on the record, which covers the other modules. The DAO API works only with the JDBC transport. Its R2DBC variant is an experimental preview, and its API may change between releases.
