---
id: liferay
name: Liferay DXP
urls:
  home: https://www.liferay.com/
  repository: https://github.com/liferay/liferay-portal
  docs: https://learn.liferay.com/
category:
  - cms
description: Java-based digital experience platform for building portals, websites, intranets and commerce on one server.
status: active
maintainer: Liferay Inc.
maintainerType: company
hqCountry: US
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 21
databases:
  - mariadb
  - mysql
  - postgres
  - oracle
  - sqlserver
headlessApi:
  - rest
  - graphql
i18n: 50+ languages
runsAs:
  - always-on
installMethod: build from source with ant all, or the Free Tier bundle
licenseModel: open-core
license: LGPL-2.1-or-later, LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
latestReleaseDate: 2026-08-12
githubStargazers: 2266
contributors: 298
social:
  x: https://x.com/liferay
  forum: https://discuss.liferay.com/
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.liferay.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/liferay/liferay-portal
    checkedAt: 2026-10-26
  - field: urls
    url: https://learn.liferay.com/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.liferay.com/legal
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://www.liferay.com/legal
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/liferay/liferay-portal
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/liferay/liferay-portal/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://github.com/liferay/liferay-portal/blob/master/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/liferay/liferay-portal/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/liferay/liferay-portal/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/liferay/liferay-portal/blob/master/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://learn.liferay.com/w/dxp/getting-started/liferay-dxp-free-tier
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/liferay/liferay-portal/blob/master/LICENSING.md
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/liferay/liferay-portal/blob/master/LICENSING.md
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/liferay/liferay-portal/blob/master/README.md
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/liferay/liferay-portal/git/refs/tags/2026.q3.0
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/liferay/liferay-portal
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/liferay/liferay-portal/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://www.liferay.com/
    checkedAt: 2026-10-26
  - field: i18n
    url: https://www.liferay.com/
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Liferay DXP is a digital experience platform written in Java, maintained by Liferay Inc. Its source is the liferay-portal repository, and building that repository with Apache Ant produces a bundle that contains a Tomcat application server with Liferay DXP deployed, so the platform runs as a long-running server process.

## Worth knowing

The code is dual-licensed. Each source file can be used under the LGPL-2.1-or-later or under a proprietary EULA that applies to Liferay's subscription customers. The README places multifactor authentication, SAML, advanced analytics and production-scale clustering in the Enterprise Subscription, while the Free Tier is described as a bundle with an activation key.
