---
id: ebean
name: Ebean
urls:
  home: https://ebean.io
  repository: https://github.com/ebean-orm/ebean
  docs: https://ebean.io/docs/
category:
  - library
description: Object-relational mapping library for Java and Kotlin with type-safe query beans, built-in database migrations and SQL-level control.
status: active
maintainer: Rob Bygrave
firstRelease: 2012
language: java
runtime:
  - jvm
hosting:
  - java
databases:
  - postgres
  - mysql
  - mariadb
  - sqlserver
  - oracle
  - sqlite
installMethod: Maven
licenseModel: open-source
license: Apache-2.0
currentMajor: "19"
latestReleaseDate: 2026-09-21
githubStargazers: 1532
contributors: 99
social:
  forum: https://groups.google.com/forum/#!forum/ebean
addedAt: 2026-11-08
checkedAt: 2026-11-08
sources:
  - field: urls
    url: https://ebean.io/
    checkedAt: 2026-11-08
  - field: urls
    url: https://api.github.com/repos/ebean-orm/ebean
    checkedAt: 2026-11-08
  - field: urls
    url: https://raw.githubusercontent.com/ebean-orm/ebean/master/README.md
    checkedAt: 2026-11-08
  - field: maintainer
    url: https://raw.githubusercontent.com/ebean-orm/ebean/master/pom.xml
    checkedAt: 2026-11-08
  - field: firstRelease
    url: https://api.github.com/repos/ebean-orm/ebean/commits/avaje-ebeanorm-server-3.1.1
    checkedAt: 2026-11-08
  - field: category
    url: https://raw.githubusercontent.com/ebean-orm/ebean/master/docs/LIBRARY.md
    checkedAt: 2026-11-08
  - field: language
    url: https://api.github.com/repos/ebean-orm/ebean
    checkedAt: 2026-11-08
  - field: runtime
    url: https://ebean.io/docs/getting-started/
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://raw.githubusercontent.com/ebean-orm/ebean/master/docs/guides/add-ebean-postgres-maven-pom.md
    checkedAt: 2026-11-08
  - field: databases
    url: https://ebean.io/
    checkedAt: 2026-11-08
  - field: license
    url: https://raw.githubusercontent.com/ebean-orm/ebean/master/LICENSE
    checkedAt: 2026-11-08
  - field: licenseModel
    url: https://raw.githubusercontent.com/ebean-orm/ebean/master/LICENSE
    checkedAt: 2026-11-08
  - field: currentMajor
    url: https://repo1.maven.org/maven2/io/ebean/ebean/maven-metadata.xml
    checkedAt: 2026-11-08
  - field: latestReleaseDate
    url: https://repo1.maven.org/maven2/io/ebean/ebean/19.6.0/
    checkedAt: 2026-11-08
  - field: githubStargazers
    url: https://api.github.com/repos/ebean-orm/ebean
    checkedAt: 2026-11-08
  - field: contributors
    url: https://api.github.com/repos/ebean-orm/ebean/contributors
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

Ebean is an object-relational mapping library for Java and Kotlin. It offers queries at three levels, from ORM queries mixed with SQL to DTO queries and plain SQL with JDBC, and it builds type-safe query beans. The core artifact is added to a Maven project, and the library generates database migrations.

## Worth knowing

Ebean is focused on persistence. The project's library reference puts HTTP routing, dependency injection, JSON serialization and front-end rendering out of scope and says it is paired with a web framework and a DI library as needed.
