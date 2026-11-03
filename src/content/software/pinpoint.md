---
id: pinpoint
name: Pinpoint
urls:
  home: https://pinpoint-apm.github.io/pinpoint/
  repository: https://github.com/pinpoint-apm/pinpoint
  docs: https://pinpoint-apm.gitbook.io/pinpoint/
  plugins: https://github.com/pinpoint-apm/pinpoint/tree/master/agent-module/plugins
category:
  - analytics
description: Application performance management tool that traces transactions across distributed applications, with agents for Java, PHP and Python, and charts their topology.
status: active
maintainer: NAVER Corp.
maintainerType: company
firstRelease: 2015
hqCountry: KR
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
installMethod: release build results (executable jars)
licenseModel: open-source
license: Apache-2.0
currentMajor: "4"
latestReleaseDate: 2026-10-28
githubStargazers: 13871
contributors: 125
social:
  x: https://twitter.com/Pinpoint_APM
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://pinpoint-apm.github.io/pinpoint/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/pinpoint-apm/pinpoint
    checkedAt: 2026-11-03
  - field: urls
    url: https://pinpoint-apm.gitbook.io/pinpoint/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/pinpoint-apm/pinpoint/blob/master/NOTICE
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://api.github.com/orgs/naver
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/pinpoint-apm/pinpoint/blob/master/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/pinpoint-apm/pinpoint
    checkedAt: 2026-11-03
  - field: runtime
    url: https://pinpoint-apm.gitbook.io/pinpoint/getting-started/installation
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/pinpoint-apm/pinpoint
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/pinpoint-apm/pinpoint/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://pinpoint-apm.gitbook.io/pinpoint/getting-started/installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://pinpoint-apm.gitbook.io/pinpoint/getting-started/installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://pinpoint-apm.gitbook.io/pinpoint/getting-started/quickstart
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/pinpoint-apm/pinpoint-kubernetes/blob/master/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://pinpoint-apm.gitbook.io/pinpoint/getting-started/installation
    checkedAt: 2026-11-03
  - field: databases
    url: https://pinpoint-apm.gitbook.io/pinpoint/getting-started/installation
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/pinpoint-apm/pinpoint-kubernetes/blob/master/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://pinpoint-apm.gitbook.io/pinpoint/documents/alarm
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://pinpoint-apm.gitbook.io/pinpoint/getting-started/installation
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/pinpoint-apm/pinpoint/blob/master/README.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/pinpoint-apm/pinpoint/releases/tag/v4.0.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/pinpoint-apm/pinpoint/releases/tag/v4.0.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/pinpoint-apm/pinpoint/releases/tag/1.1.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/pinpoint-apm/pinpoint
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/pinpoint-apm/pinpoint
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/pinpoint-apm/pinpoint/blob/master/README.md
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

Pinpoint is an application performance management tool for large distributed systems. It traces transactions across distributed applications, with agents for Java, PHP and Python, and charts their topology. A Java agent is attached to each monitored application with a JVM argument, and it reports to a collector.

The collector and the web component are Java applications that the install guide says are deployed on a web container. Their data is stored in HBase, and metric and statistics data in Pinot.

## Worth knowing

The install guide names HBase and Pinot as storage, MySQL for Web configuration and Kafka for the Pinot ingestion path, so a self-hosted instance is several services rather than a single program.
