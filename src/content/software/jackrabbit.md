---
id: jackrabbit
name: Apache Jackrabbit
urls:
  home: https://jackrabbit.apache.org/
  repository: https://github.com/apache/jackrabbit
  docs: https://jackrabbit.apache.org/getting-started-with-apache-jackrabbit.html
category:
  - backend
description: Java implementation of the Content Repository for Java Technology API (JCR), a hierarchical content store with search, versioning and transactions.
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
runtimeMin: jvm 11
runsAs:
  - always-on
installMethod: download the standalone server jar and start it with java -jar
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-10-06
githubStargazers: 365
contributors: 33
social:
  forum: https://jackrabbit.apache.org/mailing-lists.html
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://jackrabbit.apache.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/apache/jackrabbit
    checkedAt: 2026-10-26
  - field: urls
    url: https://jackrabbit.apache.org/getting-started-with-apache-jackrabbit.html
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/apache/jackrabbit/trunk/NOTICE.txt
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://www.apache.org/foundation/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/apache/jackrabbit
    checkedAt: 2026-10-26
  - field: runtime
    url: https://jackrabbit.apache.org/downloads.html
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://jackrabbit.apache.org/downloads.html
    checkedAt: 2026-10-26
  - field: category
    url: https://jackrabbit.apache.org/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://jackrabbit.apache.org/standalone-server.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://jackrabbit.apache.org/standalone-server.html
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/apache/jackrabbit
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/apache/jackrabbit/trunk/LICENSE.txt
    checkedAt: 2026-10-26
  - field: license
    url: https://jackrabbit.apache.org/downloads.html
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://search.maven.org/solrsearch/select?q=g:org.apache.jackrabbit+AND+a:jackrabbit-core+AND+v:1.0&core=gav&rows=5&wt=json
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://repo1.maven.org/maven2/org/apache/jackrabbit/jackrabbit-core/maven-metadata.xml
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://repo1.maven.org/maven2/org/apache/jackrabbit/jackrabbit-core/2.22.5/
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/apache/jackrabbit
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/apache/jackrabbit/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Apache Jackrabbit is a Java implementation of the Content Repository for Java Technology API (JCR), a hierarchical content store with support for structured and unstructured content. Java code uses it through the JCR API, and the [standalone server](https://jackrabbit.apache.org/standalone-server.html) runs a repository from a single jar that is started with `java -jar`.

The deployment models page describes three setups: a repository embedded in an application, a shared resource of an application server, and a repository server. The standalone server listens on localhost port 8080 once started. The configuration page says that most persistence managers store data in databases, which may have to be set up separately. The Apache Software Foundation maintains the project.
