---
id: hibernate-orm
name: Hibernate ORM
urls:
  home: https://hibernate.org/orm/
  repository: https://github.com/hibernate/hibernate-orm
  docs: https://hibernate.org/orm/documentation/
category:
  - library
description: Object/relational mapping library for Java that maps classes to relational database tables and implements the Jakarta Persistence specification.
status: active
maintainer: Hibernate
firstRelease: 2010
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 17
databases:
  - postgres
  - mysql
  - mariadb
  - oracle
  - sqlserver
installMethod: gradle
licenseModel: open-source
license: Apache-2.0
currentMajor: "7"
latestReleaseDate: 2026-11-06
githubStargazers: 6484
contributors: 362
social:
  x: https://x.com/hibernate
  bluesky: https://bsky.app/profile/hibernate.org
  forum: https://discourse.hibernate.org/c/hibernate-orm
addedAt: 2026-11-09
checkedAt: 2026-11-09
sources:
  - field: urls
    url: https://hibernate.org/orm/
    checkedAt: 2026-11-09
  - field: urls
    url: https://github.com/hibernate/hibernate-orm/blob/main/README.adoc
    checkedAt: 2026-11-09
  - field: urls
    url: https://api.github.com/repos/hibernate/hibernate-orm
    checkedAt: 2026-11-09
  - field: firstRelease
    url: https://api.github.com/repos/hibernate/hibernate-orm/git/refs/tags/3.6.0.Beta1
    checkedAt: 2026-11-09
  - field: maintainer
    url: https://hibernate.org/orm/
    checkedAt: 2026-11-09
  - field: language
    url: https://api.github.com/repos/hibernate/hibernate-orm
    checkedAt: 2026-11-09
  - field: category
    url: https://github.com/hibernate/hibernate-orm/blob/main/README.adoc
    checkedAt: 2026-11-09
  - field: runtime
    url: https://github.com/hibernate/hibernate-orm/blob/main/README.adoc
    checkedAt: 2026-11-09
  - field: runtimeMin
    url: https://github.com/hibernate/hibernate-orm/blob/main/README.adoc
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://github.com/hibernate/hibernate-orm/blob/7.4.15/documentation/src/main/asciidoc/introduction/Introduction.adoc
    checkedAt: 2026-11-09
  - field: databases
    url: https://hibernate.org/orm/
    checkedAt: 2026-11-09
  - field: license
    url: https://hibernate.org/orm/
    checkedAt: 2026-11-09
  - field: licenseModel
    url: https://github.com/hibernate/hibernate-orm/blob/main/LICENSE.txt
    checkedAt: 2026-11-09
  - field: currentMajor
    url: https://github.com/hibernate/hibernate-orm/releases/tag/7.4.15
    checkedAt: 2026-11-09
  - field: latestReleaseDate
    url: https://github.com/hibernate/hibernate-orm/releases/tag/7.4.15
    checkedAt: 2026-11-09
  - field: githubStargazers
    url: https://api.github.com/repos/hibernate/hibernate-orm
    checkedAt: 2026-11-09
  - field: contributors
    url: https://api.github.com/repos/hibernate/hibernate-orm/contributors?per_page=1
    checkedAt: 2026-11-09
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

Hibernate ORM is an object/relational mapping library for Java. It maps Java classes to relational database tables, and the project describes it as an implementation of the Jakarta Persistence specification. It is a library that a Java application includes, so the application or the framework it runs under is the process that runs it.

The project is published on Maven Central as hibernate-core, and the README links its documentation on the project website. The project's site names a list of databases it tests every day, and a separate community dialects module adds further databases.

The site names the Hibernate project as the copyright holder, and the project states that it is part of the Commonhaus Foundation.

## Worth knowing

Hibernate works in Java SE standalone applications, in EE servers such as WildFly and in containers such as Quarkus, and the project lists those environments on its site. The MongoDB extension and the Google Spanner dialect are third-party projects.
