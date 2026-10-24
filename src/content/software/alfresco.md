---
id: alfresco
name: Alfresco Community Edition
urls:
  home: https://www.hyland.com/en/solutions/products/alfresco-platform
  repository: https://github.com/Alfresco/alfresco-community-repo
  docs: https://docs.hyland.com/p/alfresco
category:
  - cms
description: Java content repository and REST API of Alfresco Content Services Community, for document and content management.
status: active
maintainer: Hyland Software, Inc.
maintainerType: company
language: java
runtime:
  - jvm
hosting:
  - java
databases:
  - mysql
  - mariadb
  - postgres
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: distribution zip
licenseModel: open-core
license: LGPL-3.0
latestReleaseDate: 2026-07-21
githubStargazers: 240
contributors: 197
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://www.hyland.com/en/solutions/products/alfresco-platform
    checkedAt: 2026-10-24
  - field: urls
    url: https://api.github.com/repos/Alfresco/alfresco-community-repo
    checkedAt: 2026-10-24
  - field: urls
    url: https://github.com/Alfresco/alfresco-community-repo/blob/master/README.md
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://www.hyland.com/en/legal
    checkedAt: 2026-10-24
  - field: maintainerType
    url: https://www.hyland.com/en/legal
    checkedAt: 2026-10-24
  - field: language
    url: https://api.github.com/repos/Alfresco/alfresco-community-repo
    checkedAt: 2026-10-24
  - field: runtime
    url: https://github.com/Alfresco/alfresco-community-repo/blob/master/README.md
    checkedAt: 2026-10-24
  - field: headlessApi
    url: https://github.com/Alfresco/alfresco-community-repo/blob/master/README.md
    checkedAt: 2026-10-24
  - field: headlessApi
    url: https://github.com/Alfresco/alfresco-community-repo/blob/master/README.md
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://github.com/Alfresco/acs-community-packaging/blob/master/README.md
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://github.com/Alfresco/acs-community-packaging/blob/master/README.md
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://github.com/Alfresco/acs-community-packaging/blob/master/README.md
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://alfresco.github.io/acs-deployment/
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://hub.docker.com/v2/repositories/alfresco/alfresco-content-repository-community/tags
    checkedAt: 2026-10-24
  - field: license
    url: https://api.github.com/repos/Alfresco/alfresco-community-repo
    checkedAt: 2026-10-24
  - field: license
    url: https://github.com/Alfresco/alfresco-community-repo/blob/master/LICENSE.txt
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/Alfresco/alfresco-community-repo
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/Alfresco/alfresco-community-repo/contributors
    checkedAt: 2026-10-24
  - field: databases
    url: https://github.com/Alfresco/docs-alfresco/blob/master/content-services/community/config/databases.md
    checkedAt: 2026-10-24
  - field: category
    url: https://github.com/Alfresco/docs-alfresco/blob/master/content-services/community/index.md
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://github.com/Alfresco/docs-alfresco/blob/master/content-services/community/install/zip/index.md
    checkedAt: 2026-10-24
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Alfresco Community Edition is the Java content repository of Alfresco Content Services, published by Hyland Software, Inc. The documentation describes it as an enterprise content management system with document management and web content management applications; it runs on Apache Tomcat, uses MySQL, MariaDB or PostgreSQL, and can authenticate users through LDAP or SSO. The repository is a set of Java libraries for core utilities, the data model, the repository services and a REST API framework. A separate packaging project builds them into a distribution zip of web application archives and a Docker image for deployment on an application server, and it refers to a deployment project for docker-compose and Helm setups.

## Worth knowing

The repository holds the Community Edition only; the README names enterprise projects that extend it. The acs-deployment project installs the Enterprise version by default, with a limited trial, and the Community Edition needs no license or Quay.io account. Its libraries are published to the Alfresco Maven repository, not to Maven Central. The database and authentication documentation covers the 23.x line.
