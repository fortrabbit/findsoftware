---
id: apache-shiro
name: Apache Shiro
urls:
  home: https://shiro.apache.org/
  repository: https://github.com/apache/shiro
  docs: https://shiro.apache.org/10-minute-tutorial.html
category:
  - auth
description: Java security framework that performs authentication, authorization, cryptography and session management.
status: active
maintainer: The Apache Software Foundation
maintainerType: foundation
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
currentMajor: "3"
latestReleaseDate: 2026-08-23
githubStargazers: 4464
contributors: 83
social:
  forum: https://github.com/apache/shiro/discussions
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://shiro.apache.org/
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/apache/shiro
    checkedAt: 2026-11-04
  - field: urls
    url: https://shiro.apache.org/10-minute-tutorial.html
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://search.maven.org/solrsearch/select?q=g:org.apache.shiro+AND+a:shiro-core&core=gav&rows=200&wt=json
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://shiro.apache.org/
    checkedAt: 2026-11-04
  - field: maintainerType
    url: https://shiro.apache.org/
    checkedAt: 2026-11-04
  - field: category
    url: https://shiro.apache.org/
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/apache/shiro
    checkedAt: 2026-11-04
  - field: runtime
    url: https://shiro.apache.org/download.html
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://shiro.apache.org/download.html
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://shiro.apache.org/download.html
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://shiro.apache.org/download.html
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/apache/shiro/blob/main/LICENSE
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://github.com/apache/shiro/blob/main/LICENSE
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://github.com/apache/shiro/releases/tag/shiro-root-3.0.1
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/apache/shiro/releases
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/apache/shiro
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/apache/shiro/contributors
    checkedAt: 2026-11-04
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

Apache Shiro is a Java security framework for authentication, authorization, cryptography and session management. A Java application adds it through Maven: shiro-core is required in every environment, and shiro-web is the module for web applications. The web configuration pages register a listener and a filter in web.xml, and the site lists Spring, Guice and Jakarta EE integrations alongside the core.

The Apache Software Foundation maintains the project.

## Worth knowing

The site marks its older release lines as end of life; the download page offers the current line. Building from the source bundle needs a newer JDK than the runtime minimum on the download page.
