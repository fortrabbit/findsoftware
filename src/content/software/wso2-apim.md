---
id: wso2-apim
name: WSO2 API Manager
urls:
  repository: https://github.com/wso2/product-apim
  docs: https://apim.docs.wso2.com/en/latest/
category:
  - backend
description: Java-based API management platform for designing, publishing, securing and analyzing APIs, with a gateway that serves them and a developer portal.
status: active
maintainer: WSO2 Inc
maintainerType: company
firstRelease: 2015
language: java
runtime:
  - jvm
hosting:
  - java
contentStore:
  - database
databases:
  - postgres
  - mysql
  - sqlserver
  - oracle
adminUi: true
i18n: yes, the API Publisher and Developer Portal can be localized
runsAs:
  - always-on
installMethod: zip archive download
licenseModel: open-source
license: Apache-2.0
currentMajor: "4"
latestReleaseDate: 2026-04-29
githubStargazers: 1042
contributors: 233
social:
  x: https://twitter.com/wso2
  discord: https://discord.gg/wso2
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: name
    url: https://github.com/wso2/product-apim/blob/master/README.md
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/wso2/product-apim
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/wso2/product-apim/blob/master/README.md
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://github.com/wso2/product-apim/blob/master/pom.xml
    checkedAt: 2026-10-31
  - field: category
    url: https://github.com/wso2/docs-apim/blob/4.7.0/en/docs/get-started/overview.md
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/wso2/product-apim
    checkedAt: 2026-10-31
  - field: runtime
    url: https://github.com/wso2/product-apim/blob/master/README.md
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://github.com/wso2/docs-apim/blob/4.7.0/en/docs/install-and-setup/install/installing-the-product/installing-api-m-as-a-linux-service.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/wso2/docs-apim/blob/4.7.0/en/docs/install-and-setup/install/installing-the-product/installing-api-m-runtime.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/wso2/docs-apim/blob/4.7.0/en/docs/install-and-setup/install/installation-options.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/wso2/docs-apim/blob/4.7.0/en/docs/install-and-setup/install/installation-options.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/wso2/docs-apim/blob/4.7.0/en/docs/install-and-setup/install/installation-options.md
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://github.com/wso2/docs-apim/blob/4.7.0/en/docs/install-and-setup/install/installing-the-product/running-the-api-m.md
    checkedAt: 2026-10-31
  - field: contentStore
    url: https://github.com/wso2/docs-apim/blob/4.7.0/en/docs/install-and-setup/setup/setting-up-databases/overview.md
    checkedAt: 2026-10-31
  - field: databases
    url: https://github.com/wso2/docs-apim/blob/4.7.0/en/docs/install-and-setup/install/installation-prerequisites.md
    checkedAt: 2026-10-31
  - field: i18n
    url: https://github.com/wso2/docs-apim/blob/4.7.0/en/docs/reference/customize-product/customizations/adding-internationalization.md
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/wso2/product-apim
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://github.com/wso2/docs-apim/blob/4.7.0/en/docs/get-started/overview.md
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/wso2/product-apim/releases/tag/v4.7.0
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/wso2/product-apim/releases/latest
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/wso2/product-apim/releases/tag/v1.9.0-M2
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/wso2/product-apim
    checkedAt: 2026-10-31
  - field: contributors
    url: https://api.github.com/repos/wso2/product-apim/contributors?per_page=1
    checkedAt: 2026-10-31
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

WSO2 API Manager is an API management platform for designing, publishing, securing and analyzing APIs. Its classic gateway routes API traffic, and the Management Console, the API Publisher and the Developer Portal are the web portals the product serves.

The product runs on a Java Virtual Machine. Its docs name a zip archive, Helm charts, Docker Compose and Puppet modules as ways to install it, and the Helm, Docker and Puppet routes each point to a repository WSO2 publishes. By default it stores its data in an embedded H2 database. Single sign-on uses OIDC by default, and tenants let separate organizational units share one deployment, each one logically isolated.

## Worth knowing

The docs describe a distributed Enterprise package beside the all-in-one package. The docs recommend Oracle, PostgreSQL, MySQL or MS SQL over the embedded database for production, and they describe running the product as a service started from a boot script.
