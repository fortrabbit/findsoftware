---
id: zipkin
name: Zipkin
urls:
  home: https://zipkin.io
  repository: https://github.com/openzipkin/zipkin
  docs: https://zipkin.io/pages/quickstart.html
category:
  - analytics
description: Distributed tracing system that collects timing data from instrumented services and shows it in a query API and web UI.
status: active
maintainer: OpenZipkin
firstRelease: 2016
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 17
databases:
  - mysql
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: Apache-2.0
currentMajor: "3"
latestReleaseDate: 2026-04-08
githubStargazers: 17476
contributors: 117
social:
  x: https://twitter.com/zipkinproject
  forum: https://groups.google.com/forum/#!forum/zipkin-user
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://zipkin.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://zipkin.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/openzipkin/zipkin
    checkedAt: 2026-11-03
  - field: urls
    url: https://zipkin.io/pages/quickstart.html
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/openzipkin/zipkin
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/openzipkin/zipkin
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/openzipkin/zipkin
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/openzipkin/zipkin/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/openzipkin/zipkin/blob/master/README.md
    checkedAt: 2026-11-03
  - field: category
    url: https://zipkin.io
    checkedAt: 2026-11-03
  - field: databases
    url: https://zipkin.io/pages/architecture.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://zipkin.io/pages/quickstart.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://zipkin.io/pages/quickstart.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://zipkin.io/pages/quickstart.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://zipkin.io/pages/quickstart.html
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/openzipkin/zipkin/blob/master/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://zipkin.io/pages/community.html
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/openzipkin/zipkin/releases/tag/3.6.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/openzipkin/zipkin/releases/tag/3.6.1
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/openzipkin/zipkin/releases/tag/1.0.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/openzipkin/zipkin
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/openzipkin/zipkin
    checkedAt: 2026-11-03
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Zipkin is a distributed tracing system written in Java. Applications report spans to the Zipkin server over HTTP POST, and the server stores them and serves a query API and a web UI for finding traces by service, operation, tags and duration. The [quickstart](https://zipkin.io/pages/quickstart.html) starts it as a Docker container, as an executable jar, through Homebrew or from source.

The server keeps spans in memory or in a persistent storage backend. The [architecture page](https://zipkin.io/pages/architecture.html) names Cassandra, Elasticsearch and MySQL as backends, and the README says the slim build supports only in-memory and Elasticsearch storage.

## Worth knowing

The web UI has no built-in authentication, as the architecture page states, so access to it is not restricted by the software itself.
