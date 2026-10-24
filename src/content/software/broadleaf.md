---
id: broadleaf
name: Broadleaf Commerce
urls:
  home: https://broadleafcommerce.com/
  repository: https://github.com/BroadleafCommerce/BroadleafCommerce
  docs: https://monolith.broadleafcommerce.com/docs/core/current/tutorials/getting-started-tutorials
category:
  - e-commerce
  - framework
description: Java and Spring e-commerce framework for building commerce-driven websites.
status: active
maintainer: Broadleaf Commerce, LLC
maintainerType: company
firstRelease: 2012
hqCountry: US
language: java
runtime:
  - jvm
hosting:
  - java
databases:
  - mysql
  - postgres
  - oracle
  - sqlserver
adminUi: true
headlessApi:
  - rest
templating: thymeleaf
i18n: yes, locales resolved by a default Locale Resolver
runsAs:
  - always-on
installMethod: download the Community Edition Heat Clinic starter project and build it with Maven
licenseModel: open-core
license: Fair Use License 1.0, Broadleaf End User License Agreement (EULA), Version 1.1, for uses that require payment, Available to companies with under $5M in revenue; not an Apache 2 open source product
currentMajor: "7"
latestReleaseDate: 2026-10-14
githubStargazers: 1925
contributors: 79
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://broadleafcommerce.com/
    checkedAt: 2026-10-24
  - field: urls
    url: https://api.github.com/repos/BroadleafCommerce/BroadleafCommerce
    checkedAt: 2026-10-24
  - field: urls
    url: https://monolith.broadleafcommerce.com/docs/core/current/tutorials/getting-started-tutorials
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://broadleafcommerce.com/commercial-license/
    checkedAt: 2026-10-24
  - field: hqCountry
    url: https://broadleafcommerce.com/commercial-license/
    checkedAt: 2026-10-24
  - field: language
    url: https://api.github.com/repos/BroadleafCommerce/BroadleafCommerce
    checkedAt: 2026-10-24
  - field: category
    url: https://raw.githubusercontent.com/BroadleafCommerce/BroadleafCommerce/develop-7.0.x/README.md
    checkedAt: 2026-10-24
  - field: runtime
    url: https://raw.githubusercontent.com/BroadleafCommerce/BroadleafCommerce/develop-7.0.x/README.md
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://monolith.broadleafcommerce.com/docs/core/current/getting-started/running-locally
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://monolith.broadleafcommerce.com/docs/core/current/broadleaf-concepts/key-aspects-and-configuration/app-server-configuration/deploying-a-.war-file
    checkedAt: 2026-10-24
  - field: databases
    url: https://monolith.broadleafcommerce.com/docs/core/current/getting-started/running-locally
    checkedAt: 2026-10-24
  - field: headlessApi
    url: https://monolith.broadleafcommerce.com/docs/core/current/broadleaf-concepts/rest/rest-api-overview
    checkedAt: 2026-10-24
  - field: adminUi
    url: https://raw.githubusercontent.com/BroadleafCommerce/BroadleafCommerce/develop-7.0.x/README.md
    checkedAt: 2026-10-24
  - field: templating
    url: https://raw.githubusercontent.com/BroadleafCommerce/BroadleafCommerce/develop-7.0.x/README.md
    checkedAt: 2026-10-24
  - field: license
    url: https://raw.githubusercontent.com/BroadleafCommerce/BroadleafCommerce/develop-7.0.x/README.md
    checkedAt: 2026-10-24
  - field: license
    url: https://raw.githubusercontent.com/BroadleafCommerce/BroadleafCommerce/develop-7.0.x/README.md
    checkedAt: 2026-10-24
  - field: license
    url: https://raw.githubusercontent.com/BroadleafCommerce/BroadleafCommerce/develop-7.0.x/README.md
    checkedAt: 2026-10-24
  - field: licenseModel
    url: https://raw.githubusercontent.com/BroadleafCommerce/BroadleafCommerce/develop-7.0.x/README.md
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://repo1.maven.org/maven2/org/broadleafcommerce/broadleaf-common/
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://api.github.com/repos/BroadleafCommerce/BroadleafCommerce/tags
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://api.github.com/repos/BroadleafCommerce/BroadleafCommerce/commits/6054d9ebbd9361683ed6174f3d22d79870977a95
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/BroadleafCommerce/BroadleafCommerce
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/BroadleafCommerce/BroadleafCommerce/contributors?per_page=1
    checkedAt: 2026-10-24
  - field: i18n
    url: https://monolith.broadleafcommerce.com/docs/core/current/broadleaf-concepts/internationalization/locale-resolution
    checkedAt: 2026-10-24
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Broadleaf Commerce is an e-commerce framework written in Java and built on the Spring Framework. It includes an administrative application built with Spring MVC, where admin users hold roles and permissions, and it sends email through Thymeleaf templates. The [running-locally guide](https://monolith.broadleafcommerce.com/docs/core/current/getting-started/running-locally) starts from a downloaded Community Edition starter project built with Maven. The project's API module exposes REST endpoints, and the databases the guide lists are MySQL, Postgres, Oracle and SQL Server. The [README](https://raw.githubusercontent.com/BroadleafCommerce/BroadleafCommerce/develop-7.0.x/README.md) names Solr for search and Quartz for scheduled tasks. Admin users can authenticate against LDAP, and locales are resolved by a default Locale Resolver. Broadleaf Commerce, LLC, based in Plano, Texas, maintains the project, and also runs Broadleaf Cloud, a fully managed platform.

## Worth knowing

The README states that the Community Edition is "available to companies with under $5M in revenue" and is not an Apache 2 open source product. It is source-available under the Fair Use License 1.0, and uses that require payment fall under the Broadleaf End User License Agreement. The Enterprise Edition and the Microservices Edition are source-available under a commercial license, and the Microservices Edition offers headless commerce APIs. Multi-tenant support is part of the Enterprise Edition.
