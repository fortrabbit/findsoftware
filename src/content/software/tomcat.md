---
id: tomcat
name: Apache Tomcat
urls:
  home: https://tomcat.apache.org
  repository: https://github.com/apache/tomcat
  docs: https://tomcat.apache.org/tomcat-11.0-doc/
category:
  - web-server
description: Java servlet and JSP container, an open source implementation of the Jakarta Servlet, Pages, Expression Language, WebSocket, Annotations and Authentication specifications.
status: active
maintainer: The Apache Software Foundation
maintainerType: foundation
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 17
adminUi: true
templating: jsp
runsAs:
  - always-on
installMethod: binary download, zip and tar.gz
licenseModel: open-source
license: Apache-2.0
currentMajor: "11"
latestReleaseDate: 2026-10-12
githubStargazers: 8267
contributors: 167
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://tomcat.apache.org/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/apache/tomcat
    checkedAt: 2026-10-30
  - field: urls
    url: https://raw.githubusercontent.com/apache/tomcat/main/README.md
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://raw.githubusercontent.com/apache/tomcat/11.0.27/NOTICE
    checkedAt: 2026-10-30
  - field: category
    url: https://tomcat.apache.org/tomcat-11.0-doc/index.html
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/apache/tomcat
    checkedAt: 2026-10-30
  - field: runtime
    url: https://raw.githubusercontent.com/apache/tomcat/11.0.27/RUNNING.txt
    checkedAt: 2026-10-30
  - field: runtimeMin
    url: https://tomcat.apache.org/tomcat-11.0-doc/setup.html
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://tomcat.apache.org/tomcat-11.0-doc/setup.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://tomcat.apache.org/download-11.cgi
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://tomcat.apache.org/tomcat-11.0-doc/setup.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://tomcat.apache.org/tomcat-11.0-doc/maven-jars.html
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://api.github.com/repos/apache/tomcat/tags
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://tomcat.apache.org/
    checkedAt: 2026-10-30
  - field: license
    url: https://api.github.com/repos/apache/tomcat
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/apache/tomcat
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/apache/tomcat/contributors?per_page=1
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://tomcat.apache.org/tomcat-11.0-doc/html-manager-howto.html
    checkedAt: 2026-10-30
  - field: templating
    url: https://tomcat.apache.org/tomcat-11.0-doc/jasper-howto.html
    checkedAt: 2026-10-30
ai: authored
contentStore: null
databases: null
headlessApi: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Apache Tomcat implements the Jakarta Servlet, Pages, Expression Language, WebSocket, Annotations and Authentication specifications in Java. It runs on a Java runtime. The [documentation](https://tomcat.apache.org/tomcat-11.0-doc/) for each major line is published by the project.

The project publishes a binary archive. The Windows installer registers Tomcat as a service, and the Maven Central artifacts serve projects that use Tomcat's libraries.
