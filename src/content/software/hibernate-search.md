---
id: hibernate-search
name: Hibernate Search
urls:
  home: https://hibernate.org/search/
  repository: https://github.com/hibernate/hibernate-search
  docs: https://hibernate.org/search/documentation/
category:
  - search
description: Java library that indexes Hibernate ORM entities into Apache Lucene or Elasticsearch and runs full-text queries against them.
status: active
maintainer: Hibernate
firstRelease: 2010
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 17
installMethod: maven
licenseModel: open-source
license: Apache-2.0
currentMajor: "8"
latestReleaseDate: 2026-05-27
githubStargazers: 537
contributors: 65
social:
  x: https://x.com/hibernate
  bluesky: https://bsky.app/profile/hibernate.org
  forum: https://discourse.hibernate.org/c/hibernate-search
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://hibernate.org/search/
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/hibernate/hibernate-search
    checkedAt: 2026-10-28
  - field: urls
    url: https://hibernate.org/search/documentation/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://hibernate.org/search/
    checkedAt: 2026-10-28
  - field: category
    url: https://hibernate.org/search/
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/hibernate/hibernate-search
    checkedAt: 2026-10-28
  - field: runtime
    url: https://docs.hibernate.org/search/8.4/reference/en-US/html_single/
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/hibernate/hibernate-search/blob/8.4.0.Final/pom.xml
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.hibernate.org/search/8.4/getting-started/orm/en-US/html_single/
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/hibernate/hibernate-search/blob/main/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/hibernate/hibernate-search/releases/tag/8.4.0.Final
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://github.com/hibernate/hibernate-search/releases/tag/8.4.0.Final
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://github.com/hibernate/hibernate-search/tree/3.3.0.Alpha1
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://github.com/hibernate/hibernate-search
    checkedAt: 2026-10-28
  - field: contributors
    url: https://github.com/hibernate/hibernate-search/graphs/contributors
    checkedAt: 2026-10-28
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

Hibernate Search adds full-text search to Java applications that use Hibernate ORM. It indexes Hibernate ORM entities into Apache Lucene indexes or Elasticsearch and OpenSearch clusters and runs full-text queries against them.

The index is either local Lucene storage or a remote Elasticsearch or OpenSearch cluster that is configured separately. The project ships no server of its own, and the [documentation](https://hibernate.org/search/documentation/) is the place to start.

## Worth knowing

Hibernate Search is a library inside a Java application, not a search service a site can call. A site built with it needs a Java build that pulls the Maven artifacts, and the Elasticsearch option adds a cluster to run beside the application.
