---
id: wicket
name: Apache Wicket
urls:
  home: https://wicket.apache.org/
  repository: https://github.com/apache/wicket
  docs: https://wicket.apache.org/docs/
category:
  - framework
description: Component-based Java web framework that keeps behavior in Java classes and markup in plain HTML.
status: active
maintainer: The Apache Software Foundation
maintainerType: foundation
parent: The Apache Software Foundation
firstRelease: 2007
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 17
templating: html
i18n: yes
runsAs:
  - always-on
renderingModes:
  - server
installMethod: Maven or Gradle dependency, or the Maven quick start archetype
licenseModel: open-source
license: Apache-2.0
currentMajor: "10"
latestReleaseDate: 2026-08-30
githubStargazers: 800
contributors: 130
wikidata: Q617162
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://wicket.apache.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/apache/wicket
    checkedAt: 2026-10-26
  - field: urls
    url: https://wicket.apache.org/docs/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://wicket.apache.org/
    checkedAt: 2026-10-26
  - field: parent
    url: https://wicket.apache.org/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/apache/wicket
    checkedAt: 2026-10-26
  - field: category
    url: https://wicket.apache.org/
    checkedAt: 2026-10-26
  - field: runtime
    url: https://wicket.apache.org/start/quickstart.html
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://wicket.apache.org/start/quickstart.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://wicket.apache.org/versions/wicket-10.x/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://wicket.apache.org/docs/deployment-mode.html
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://archive.apache.org/dist/wicket/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://wicket.apache.org/docs/why-wicket.html
    checkedAt: 2026-10-26
  - field: templating
    url: https://wicket.apache.org/docs/why-wicket.html
    checkedAt: 2026-10-26
  - field: i18n
    url: https://wicket.apache.org/docs/topics/i18n.html
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/apache/wicket
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/apache/wicket/master/LICENSE
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://repo1.maven.org/maven2/org/apache/wicket/wicket-core/maven-metadata.xml
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://wicket.apache.org/versions/wicket-10.x/
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/apache/wicket
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/apache/wicket/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q617162
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Apache Wicket is a Java web framework that builds each page from a tree of Java components. Each component's markup is a plain HTML template, and a wicket:id attribute on a tag connects it to the Java component with the same id. When a request comes in, Wicket finds or creates the page, lets the components handle the request and renders the HTML from that tree. The documentation describes the same WAR file running on a production server in deployment mode.
