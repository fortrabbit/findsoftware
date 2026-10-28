---
id: solr
name: Apache Solr
urls:
  home: https://solr.apache.org/
  repository: https://github.com/apache/solr
  docs: https://solr.apache.org/guide/solr/latest/
category:
  - search
description: Open source search platform built on Apache Lucene that runs as a Java server process.
status: active
maintainer: The Apache Software Foundation
maintainerType: foundation
firstRelease: 2006
hqCountry: US
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 21
runsAs:
  - always-on
installMethod: binary download (tgz from the Apache mirrors)
licenseModel: open-source
license: Apache-2.0
currentMajor: "10"
githubStargazers: 1691
contributors: 322
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://solr.apache.org/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/apache/solr
    checkedAt: 2026-10-28
  - field: urls
    url: https://solr.apache.org/guide/solr/latest/deployment-guide/installing-solr.html
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://github.com/apache/solr/blob/releases/solr/1.1.0/CHANGES.txt
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://solr.apache.org/
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://www.apache.org/foundation/
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/apache/solr
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/apache/solr
    checkedAt: 2026-10-28
  - field: category
    url: https://solr.apache.org/
    checkedAt: 2026-10-28
  - field: runtime
    url: https://solr.apache.org/guide/solr/latest/deployment-guide/system-requirements.html
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://solr.apache.org/guide/solr/latest/deployment-guide/system-requirements.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://solr.apache.org/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://solr.apache.org/downloads.html
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://solr.apache.org/guide/solr/latest/deployment-guide/installing-solr.html
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://repo1.maven.org/maven2/org/apache/solr/solr-core/maven-metadata.xml
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/apache/solr
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/apache/solr/contributors
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

Apache Solr is an open source search platform written in Java and built on Apache Lucene, according to the project's homepage. It runs as a server process that listens on a port once started from its control script, and it is installed from a binary download or a Docker image.

The Apache Software Foundation maintains the project. Its Reference Guide documents the installation and the server.

## Worth knowing

The server needs a Java runtime at or above the minimum that the system requirements page names, so the host must provide Java. As a running process it cannot be hosted as static files.
