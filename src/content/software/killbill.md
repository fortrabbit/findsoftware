---
id: killbill
name: Kill Bill
urls:
  home: https://killbill.io
  repository: https://github.com/killbill/killbill
  docs: https://docs.killbill.io
  pricing: https://killbill.io/pricing
category:
  - e-commerce
description: Open-source subscription billing and payments platform that a business runs on its own infrastructure and extends through plugins.
status: active
maintainer: The Billing Project, LLC
maintainerType: company
firstRelease: 2011
language: java
runtime:
  - jvm
hosting:
  - java
databases:
  - mysql
  - mariadb
  - postgres
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: Apache-2.0, Aviate commercial license, for the Aviate enterprise edition only
latestReleaseDate: 2026-09-29
githubStargazers: 5835
contributors: 48
social:
  x: https://twitter.com/killbillio
  forum: https://groups.google.com/g/killbilling-users
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://killbill.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/killbill/killbill
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.killbill.io
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/killbill/killbill
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/killbill/killbill/tree/killbill-0.0.5
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/killbill/killbill
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/killbill/killbill
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/killbill/killbill
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.killbill.io/latest/getting_started.html
    checkedAt: 2026-11-03
  - field: category
    url: https://killbill.io
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.killbill.io/latest/getting_started.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.killbill.io/latest/getting_started.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.killbill.io/latest/getting_started.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.killbill.io/latest/getting_started.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.killbill.io/latest/getting_started.html
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.killbill.io/latest/getting_started.html
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.killbill.io/latest/getting_started.html
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/killbill/killbill
    checkedAt: 2026-11-03
  - field: urls
    url: https://killbill.io/pricing
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/killbill/killbill/releases/tag/killbill-0.24.22
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/killbill/killbill
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/killbill/killbill
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Kill Bill is an open-source subscription billing and payments platform written in Java. It runs as a server with the Kaui administrative console for operators, and it exposes a REST API for applications. The [getting-started guide](https://docs.killbill.io/latest/getting_started.html) covers an install with the official Docker images and Docker Compose, a manual install on Apache Tomcat with MySQL, and a one-click installer for AWS.

The core team uses MySQL and also runs regression tests against MariaDB and PostgreSQL.

## Worth knowing

Aviate is the enterprise edition, sold under a commercial license. The [pricing page](https://killbill.io/pricing) says to choose Aviate for enterprise features and support.

The manual Tomcat install needs JDK 11.
