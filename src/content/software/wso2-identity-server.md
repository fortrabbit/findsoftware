---
id: wso2-identity-server
name: WSO2 Identity Server
urls:
  home: https://wso2.com/identity-server
  repository: https://github.com/wso2/product-is
  docs: https://is.docs.wso2.com/en/latest/
category:
  - auth
description: Open-source identity and access management server, written in Java, for on-premises and cloud deployments.
status: active
maintainer: WSO2 LLC
maintainerType: company
firstRelease: 2015
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 21
databases:
  - oracle
  - postgres
  - mysql
  - sqlserver
  - mariadb
adminUi: true
headlessApi:
  - rest
i18n: yes, translated sign-in, sign-up, account recovery and My Account interfaces
runsAs:
  - always-on
installMethod: binary download
licenseModel: open-source
license: Apache-2.0
currentMajor: "7"
latestReleaseDate: 2026-05-13
githubStargazers: 888
contributors: 229
social:
  x: https://twitter.com/wso2
  discord: https://discord.gg/wso2
  forum: https://stackoverflow.com/questions/tagged/wso2-is
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://github.com/wso2/product-is
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/wso2/product-is
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/wso2/product-is
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/wso2/product-is/releases/tag/product-is-5.1.0-M1
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/wso2/product-is
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/wso2/product-is
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/wso2/product-is
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/wso2/product-is/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/wso2/docs-is/blob/master/en/identity-server/7.3.0/docs/deploy/get-started/install.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/wso2/product-is/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/wso2/docs-is/blob/master/en/includes/deploy/deploy-is-on-kubernetes.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/wso2/docs-is/blob/master/en/identity-server/7.3.0/docs/deploy/get-started/install.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/wso2/product-is/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/wso2/docs-is/blob/master/en/identity-server/7.3.0/docs/deploy/get-started/install.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/wso2/docs-is/blob/master/en/identity-server/7.3.0/docs/deploy/get-started/install.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/wso2/docs-is/blob/master/en/identity-server/7.3.0/docs/deploy/configure/databases/carbon-database/change-to-mariadb.md
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/wso2/docs-is/blob/master/en/identity-server/7.3.0/docs/apis/index.md
    checkedAt: 2026-11-03
  - field: i18n
    url: https://github.com/wso2/docs-is/blob/master/en/includes/guides/branding/localization/localization-overview.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/wso2/product-is/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/wso2/product-is/releases/tag/v7.3.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/wso2/product-is/releases/tag/v7.3.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/wso2/product-is
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/wso2/product-is
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

WSO2 Identity Server is an identity and access management server from WSO2 LLC, written in Java. It is installed from a distribution zip and started with its wso2server script, which can also run it in the background on Linux. The [README](https://github.com/wso2/product-is) names a Developer and Administrator Console and an End User Portal as its web applications. Applications call the server through REST APIs and an authentication API for in-app sign-in, and external identity providers can be connected over OAuth 2.0, OpenID Connect and SAML. Its role-based access control covers delegated administration rights.

The server ships with an embedded H2 database, and the install page names Oracle, PostgreSQL, MySQL and MS SQL as production options. A Helm chart deploys it on Kubernetes.

## Worth knowing

The README says the hosted Asgardeo service is built on the same technology core as the server. WSO2 also sells an on-premises subscription that brings expert support, product updates and a licensed distribution for commercial use.
