---
id: wildfly
name: WildFly
urls:
  home: https://www.wildfly.org
  repository: https://github.com/wildfly/wildfly
  docs: https://docs.wildfly.org/
category:
  - web-server
description: Java application server that runs Jakarta EE and MicroProfile applications from a zip distribution, with a web administration console.
status: active
maintainer: WildFly community
maintainerType: community
firstRelease: 2013
language: java
runtime:
  - jvm
hosting:
  - java
adminUi: true
runsAs:
  - always-on
installMethod: zip or tgz distribution extracted to a directory
licenseModel: open-source
license: Apache-2.0
currentMajor: "42"
latestReleaseDate: 2026-10-22
githubStargazers: 3199
contributors: 298
social:
  x: https://x.com/WildFlyAS
  forum: https://groups.google.com/forum/#!forum/wildfly
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://www.wildfly.org/
    checkedAt: 2026-10-31
  - field: urls
    url: https://api.github.com/repos/wildfly/wildfly
    checkedAt: 2026-10-31
  - field: urls
    url: https://docs.wildfly.org/
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://www.wildfly.org/about/
    checkedAt: 2026-10-31
  - field: maintainerType
    url: https://www.wildfly.org/about/
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://search.maven.org/solrsearch/select?q=g:org.wildfly+AND+a:wildfly-dist&core=gav&rows=200&wt=json
    checkedAt: 2026-10-31
  - field: category
    url: https://www.wildfly.org/
    checkedAt: 2026-10-31
  - field: language
    url: https://api.github.com/repos/wildfly/wildfly
    checkedAt: 2026-10-31
  - field: runtime
    url: https://docs.wildfly.org/42/Getting_Started_Guide.html
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://docs.wildfly.org/42/Getting_Started_Guide.html
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://www.wildfly.org/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.wildfly.org/42/Getting_Started_Guide.html
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.wildfly.org/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.wildfly.org/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.wildfly.org/
    checkedAt: 2026-10-31
  - field: license
    url: https://api.github.com/repos/wildfly/wildfly
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://www.wildfly.org/about/
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/wildfly/wildfly/releases/tag/42.0.0.Final
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/wildfly/wildfly/releases/tag/42.0.0.Final
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://api.github.com/repos/wildfly/wildfly
    checkedAt: 2026-10-31
  - field: contributors
    url: https://api.github.com/repos/wildfly/wildfly/contributors?per_page=1
    checkedAt: 2026-10-31
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

WildFly is a Java application server that the [Getting Started guide](https://docs.wildfly.org/42/Getting_Started_Guide.html) installs by extracting a zip or tgz distribution and starts with standalone.sh or domain.sh. It is an open source community project sponsored by the Commonhaus Foundation, and it has a web administration console.

The distribution can also be built with the WildFly Maven Plugin, packaged as a container image, or deployed to Kubernetes and OpenShift with a Helm chart.

## Worth knowing

The guide describes running the server as a systemd service, so it starts when the system boots. The project maintains only its newest series, and earlier releases no longer receive maintenance.
