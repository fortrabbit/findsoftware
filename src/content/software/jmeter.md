---
id: jmeter
name: Apache JMeter
urls:
  home: https://jmeter.apache.org/
  repository: https://github.com/apache/jmeter
  docs: https://jmeter.apache.org/usermanual/get-started.html
category:
  - testing
description: Java application for load testing and measuring the performance of web and other protocol services, with a GUI for building test plans and a command-line mode for runs.
status: active
maintainer: The Apache Software Foundation
maintainerType: foundation
firstRelease: 1998
language: java
runtime:
  - jvm
runtimeMin: jvm 8
runsAs:
  - local
installMethod: binary download
licenseModel: open-source
license: Apache-2.0
currentMajor: "5"
latestReleaseDate: 2024-01-09
githubStargazers: 9604
contributors: 91
social:
  x: https://twitter.com/ApacheJMeter
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://jmeter.apache.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/apache/jmeter
    checkedAt: 2026-11-16
  - field: urls
    url: https://jmeter.apache.org/usermanual/get-started.html
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://jmeter.apache.org/changes_history.html
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/apache/jmeter/master/NOTICE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/apache/jmeter
    checkedAt: 2026-11-16
  - field: category
    url: https://jmeter.apache.org/
    checkedAt: 2026-11-16
  - field: runtime
    url: https://jmeter.apache.org/usermanual/get-started.html
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://jmeter.apache.org/usermanual/get-started.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://jmeter.apache.org/usermanual/get-started.html
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://jmeter.apache.org/
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/apache/jmeter
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://api.github.com/repos/apache/jmeter
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/apache/jmeter/releases/tag/rel/v5.6.3
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/apache/jmeter/releases/tag/rel/v5.6.3
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/apache/jmeter
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/apache/jmeter
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Apache JMeter is a Java application for load testing and measuring the performance of services. Test plans are built in a graphical interface, and the user manual says load tests must be run in its command-line mode. The release is an archive that is unzipped and started with the scripts in its bin directory.

## Worth knowing

JMeter works at protocol level and does not execute the JavaScript of the HTML pages it loads or render them as a browser does.
