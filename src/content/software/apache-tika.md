---
id: apache-tika
name: Apache Tika
urls:
  home: https://tika.apache.org/
  repository: https://github.com/apache/tika
  docs: https://tika.apache.org/docs/4.2.x/index.html
category:
  - media
description: Java toolkit that detects and extracts metadata and text from over a thousand different file types, such as PPT, XLS and PDF.
status: active
maintainer: The Apache Software Foundation
maintainerType: foundation
firstRelease: 2009
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 17
runsAs:
  - always-on
installMethod: Maven
licenseModel: open-source
license: Apache-2.0
currentMajor: "4"
latestReleaseDate: 2026-10-28
githubStargazers: 4119
contributors: 168
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://tika.apache.org/
    checkedAt: 2026-10-31
  - field: urls
    url: https://tika.apache.org/docs/4.2.x/index.html
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/apache/tika
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://tika.apache.org/
    checkedAt: 2026-10-31
  - field: maintainerType
    url: https://tika.apache.org/
    checkedAt: 2026-10-31
  - field: category
    url: https://tika.apache.org/
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/apache/tika
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://github.com/apache/tika
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/apache/tika
    checkedAt: 2026-10-31
  - field: runtime
    url: https://tika.apache.org/download.html
    checkedAt: 2026-10-31
  - field: runtimeMin
    url: https://tika.apache.org/download.html
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://tika.apache.org/download.html
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://tika.apache.org/docs/4.2.x/using-tika/docker.html
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://tika.apache.org/download.html
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://tika.apache.org/docs/4.2.x/using-tika/server/index.html
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://tika.apache.org/download.html
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/apache/tika/tags
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://tika.apache.org/
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://search.maven.org/solrsearch/select?q=g:org.apache.tika+AND+a:tika-core&core=gav&rows=200&wt=json
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/apache/tika
    checkedAt: 2026-10-31
  - field: contributors
    url: https://github.com/apache/tika
    checkedAt: 2026-10-31
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

Apache Tika is a Java toolkit that detects file types and extracts metadata and text from documents such as PPT, XLS and PDF files. It can be embedded in a Java application through its Java API, or run as a separate service: tika-server exposes Tika over HTTP, standalone or in a container. The project publishes official Docker images, zip distributions and Maven artifacts. The Apache Software Foundation maintains it under the Apache-2.0 license.

## Worth knowing

The docs recommend running Tika as a separate service for most use cases, because a parser crash then cannot affect the application that calls it. The current line ships zip distributions rather than runnable jars.
