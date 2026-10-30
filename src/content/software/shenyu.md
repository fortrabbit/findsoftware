---
id: shenyu
name: Apache ShenYu
urls:
  home: https://shenyu.apache.org
  repository: https://github.com/apache/shenyu
  docs: https://shenyu.apache.org/docs/
category:
  - backend
description: Java-native API gateway for HTTP, Dubbo, gRPC and WebSocket services, with plugins for authentication, traffic control and observability.
status: active
maintainer: The Apache Software Foundation
maintainerType: foundation
firstRelease: 2019
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 17
databases:
  - mysql
  - postgres
  - oracle
adminUi: true
installMethod: binary package (bootstrap tar.gz)
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-07-08
githubStargazers: 8908
contributors: 386
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://shenyu.apache.org
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/apache/shenyu
    checkedAt: 2026-10-30
  - field: urls
    url: https://shenyu.apache.org/docs/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://shenyu.apache.org
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://github.com/apache/shenyu/tree/1.0.2
    checkedAt: 2026-10-30
  - field: category
    url: https://shenyu.apache.org
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/apache/shenyu
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/apache/shenyu/blob/v2.7.1/pom.xml
    checkedAt: 2026-10-30
  - field: runtimeMin
    url: https://github.com/apache/shenyu/blob/v2.7.1/pom.xml
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://shenyu.apache.org/docs/deployment/deployment-quick/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://shenyu.apache.org/docs/deployment/deployment-docker/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://shenyu.apache.org/docs/deployment/deployment-docker-compose/
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://shenyu.apache.org
    checkedAt: 2026-10-30
  - field: databases
    url: https://shenyu.apache.org/docs/deployment/deployment-docker/
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/apache/shenyu
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://github.com/apache/shenyu
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/apache/shenyu/releases/tag/v2.7.1
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/apache/shenyu/releases/tag/v2.7.1
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://github.com/apache/shenyu
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/apache/shenyu/contributors?per_page=1
    checkedAt: 2026-10-30
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Apache ShenYu is an API gateway written in Java and published by The Apache Software Foundation. The gateway ships as a bootstrap distribution, and a separate ShenYu Admin console manages its plugins, selectors and routing rules. The [deployment guide](https://shenyu.apache.org/docs/deployment/deployment-docker/) describes running the bootstrap and the admin console as Docker containers, and the [binary guide](https://shenyu.apache.org/docs/deployment/deployment-quick/) describes running the bootstrap from its tarball.

The admin console keeps its data in an external database, which the deployment guide sets up for MySQL, PostgreSQL or Oracle. The [docker-compose guide](https://shenyu.apache.org/docs/deployment/deployment-docker-compose/) starts a deployment from a compose file.

## Worth knowing

The gateway runs on Java 17 or later. The admin console and the gateway are published as separate distributions.
