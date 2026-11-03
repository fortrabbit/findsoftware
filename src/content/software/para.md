---
id: para
name: Para
urls:
  home: https://paraio.org
  repository: https://github.com/Erudika/para
  docs: https://paraio.org/docs/
category:
  - backend
description: Open-source backend server with a REST API over any database, for web and mobile apps, that can also run inside a JVM application.
status: active
maintainer: Erudika EOOD
firstRelease: 2014
hqCountry: BG
language: java
runtime:
  - jvm
hosting:
  - java
databases:
  - mysql
  - mariadb
  - postgres
  - sqlserver
  - oracle
  - sqlite
  - mongodb
adminUi: true
headlessApi:
  - rest
i18n: yes, language packs and currency utilities
runsAs:
  - always-on
installMethod: binary-download
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-09
githubStargazers: 574
contributors: 15
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://paraio.org/
    checkedAt: 2026-11-03
  - field: urls
    url: https://paraio.org/docs/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/Erudika/para
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://erudika.com/imprint
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://erudika.com/imprint
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/Erudika/para
    checkedAt: 2026-11-03
  - field: runtime
    url: https://paraio.org/docs/deployment/standalone/
    checkedAt: 2026-11-03
  - field: category
    url: https://paraio.org/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/Erudika/para
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/Erudika/para
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/Erudika/para/releases/tag/1.57.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/Erudika/para/releases/tag/1.57.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/Erudika/para/releases/tag/v1.1.2
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/Erudika/para
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/Erudika/para/graphs/contributors
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://paraio.org/docs/deployment/standalone/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://paraio.org/docs/deployment/docker/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://paraio.org/docs/getting-started/maven/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://paraio.org/docs/deployment/standalone/
    checkedAt: 2026-11-03
  - field: databases
    url: https://paraio.org/docs/data-stores/sql/
    checkedAt: 2026-11-03
  - field: databases
    url: https://paraio.org/docs/data-stores/sql/
    checkedAt: 2026-11-03
  - field: databases
    url: https://paraio.org/docs/data-stores/mongodb/
    checkedAt: 2026-11-03
  - field: databases
    url: https://paraio.org/docs/data-stores/dynamodb/
    checkedAt: 2026-11-03
  - field: databases
    url: https://paraio.org/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/Erudika/para
    checkedAt: 2026-11-03
  - field: i18n
    url: https://github.com/Erudika/para
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://paraio.org/
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Para is a backend server written in Java. It exposes a REST API and keeps each app's data in its own table, index and cache inside one server. It runs as an executable JAR with an embedded server, or it can be added to a JVM project as a Maven artifact.

Data goes to a default H2 database, or through plugins to MySQL, MariaDB, PostgreSQL, SQL Server, Oracle, SQLite, MongoDB, Cassandra or DynamoDB. Search runs on Lucene or Elasticsearch, and caching on Caffeine or Hazelcast. Sign-in can use SAML, LDAP or OAuth 2.0, and users fall into three groups: users, mods and admins. An admin user interface, the Para Web Console, is offered alongside it.

## Worth knowing

Erudika, a company based in Bulgaria, funds and supports the project. It also offers managed hosting as Para Cloud, which its documentation describes as free for developers.
