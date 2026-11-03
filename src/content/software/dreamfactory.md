---
id: dreamfactory
name: DreamFactory
urls:
  home: https://www.dreamfactory.com
  repository: https://github.com/dreamfactorysoftware/dreamfactory
  docs: https://docs.dreamfactory.com
  pricing: https://www.dreamfactory.com/pricing
category:
  - backend
description: Self-hosted platform that generates governed REST APIs over databases and file services for applications and AI models.
status: active
maintainer: DreamFactory Software Inc.
maintainerType: company
firstRelease: 2015
hqCountry: US
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.3
basedOn:
  - laravel
contentStore:
  - database
databases:
  - sqlite
  - mysql
  - postgres
  - sqlserver
adminUi: true
headlessApi:
  - rest
installMethod: Linux installer dfsetup.run
licenseModel: open-core
license: Apache-2.0, Apache 2.0 for the core platform
currentMajor: "7"
latestReleaseDate: 2026-09-24
githubStargazers: 1787
packagistDownloads: 190
contributors: 22
social:
  x: https://twitter.com/dfsoftwareinc
  forum: https://community.dreamfactory.com
  youtube: https://www.youtube.com/c/dreamfactorysoftware
  facebook: https://www.facebook.com/dfsoftwareinc/
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://github.com/dreamfactorysoftware/dreamfactory/blob/master/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.dreamfactory.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/dreamfactorysoftware/dreamfactory
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.dreamfactory.com
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.dreamfactory.com/privacy-policy
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.dreamfactory.com/privacy-policy
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/dreamfactorysoftware/dreamfactory/commit/7c9893dc47946054f079743d37347c2121b709b8
    checkedAt: 2026-11-03
  - field: basedOn
    url: https://github.com/dreamfactorysoftware/dreamfactory/blob/master/README.md
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/dreamfactorysoftware/dreamfactory/blob/master/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/dreamfactorysoftware/dreamfactory/blob/7.7.1/composer.json
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.dreamfactory.com/getting-started/installing-dreamfactory/docker-installation
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/dreamfactorysoftware/dreamfactory/blob/7.7.1/composer.json
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/dreamfactorysoftware/dreamfactory/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/dreamfactorysoftware/dreamfactory/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/dreamfactorysoftware/dreamfactory/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/dreamfactorysoftware/dreamfactory/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/dreamfactorysoftware/dreamfactory/blob/master/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.dreamfactory.com/getting-started/installing-dreamfactory/linux-installation
    checkedAt: 2026-11-03
  - field: contentStore
    url: https://docs.dreamfactory.com/getting-started/installing-dreamfactory/linux-installation
    checkedAt: 2026-11-03
  - field: packagistDownloads
    url: https://packagist.org/packages/dreamfactory/dreamfactory.json
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/dreamfactorysoftware/dreamfactory/blob/master/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/dreamfactorysoftware/dreamfactory/blob/master/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/dreamfactorysoftware/dreamfactory
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/dreamfactorysoftware/dreamfactory/blob/master/README.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://www.dreamfactory.com/about
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.dreamfactory.com/pricing
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/dreamfactorysoftware/dreamfactory/releases/tag/7.7.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/dreamfactorysoftware/dreamfactory/releases/tag/7.7.1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/dreamfactorysoftware/dreamfactory
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/dreamfactorysoftware/dreamfactory/contributors
    checkedAt: 2026-11-03
ai: authored
npmWeeklyDownloads: null
---

DreamFactory is a self-hosted platform that generates REST APIs for databases and file services. Its README says it creates REST endpoints automatically for SQL and NoSQL databases, and it is built on the Laravel framework. A web-based admin console manages services, roles, users and API keys, and role-based access control sets permissions per table, endpoint and HTTP verb.

It installs with a Linux installer script, on Windows with IIS or Apache, with Docker Compose, through a Helm chart on Kubernetes, or with an npx command. The Docker image includes NGINX and PHP 8.3 or later. The [documentation](https://docs.dreamfactory.com) covers the installers and the platform.

## Worth knowing

The core platform is open source, and a commercial edition adds connectors and features that the open source edition lacks, as the [about page](https://www.dreamfactory.com/about) states. The README lists SAML, OAuth 2.0, OpenID Connect and LDAP among its single sign-on options, and its FAQ places LDAP and SAML in the commercial edition.
