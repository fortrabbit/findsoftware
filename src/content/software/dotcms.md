---
id: dotcms
name: dotCMS
urls:
  home: https://www.dotcms.com
  repository: https://github.com/dotCMS/core
  docs: https://www.dotcms.com/docs/manage/installation-and-deployment/installation/quick-start-guide
  pricing: https://www.dotcms.com/pricing
category:
  - headless-cms
  - cms
description: Java content management system with an admin console, REST and GraphQL APIs and multi-site management, distributed as a Docker image and as a managed cloud service.
status: active
maintainer: dotCMS LLC
maintainerType: company
firstRelease: 2016
hqCountry: US
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 25
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
  - graphql
i18n: yes
runsAs:
  - always-on
installMethod: docker image
licenseModel: source-available
license: BUSL-1.1
latestReleaseDate: 2026-10-22
githubStargazers: 971
contributors: 105
social:
  x: https://x.com/dotcms
  forum: https://community.dotcms.com/
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://dotcms.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/dotCMS/core
    checkedAt: 2026-10-23
  - field: urls
    url: https://www.dotcms.com/docs/manage/installation-and-deployment/installation/quick-start-guide
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://dev.dotcms.com/docs/privacy-policy
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://dev.dotcms.com/docs/privacy-policy
    checkedAt: 2026-10-23
  - field: urls
    url: https://www.dotcms.com/pricing
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/dotCMS/core
    checkedAt: 2026-10-23
  - field: category
    url: https://www.dotcms.com/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://www.dotcms.com/docs/manage/installation-and-deployment/installation/requirements
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://www.dotcms.com/docs/manage/installation-and-deployment/installation/requirements
    checkedAt: 2026-10-23
  - field: databases
    url: https://www.dotcms.com/docs/manage/installation-and-deployment/installation/requirements
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://www.dotcms.com/docs/manage/installation-and-deployment/installation/quick-start-guide
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://www.dotcms.com/docs/manage/installation-and-deployment/docker/getting-started-with-dotcms-in-docker-containers
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://www.dotcms.com/docs/manage/installation-and-deployment/docker/docker
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/dotCMS/core/main/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/dotCMS/core/blob/main/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/dotCMS/core/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/dotCMS/core/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/dotCMS/core
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/dotCMS/core/contributors?per_page=1
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://www.dotcms.com/docs/manage/installation-and-deployment/installation/quick-start-guide
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://github.com/dotCMS/core/blob/main/README.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://github.com/dotCMS/core/blob/main/README.md
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

dotCMS is a content management system written in Java. It serves content through REST and GraphQL APIs and manages several sites and languages from one installation, with roles and permissions for the people who edit them. The [quick start guide](https://www.dotcms.com/docs/manage/installation-and-deployment/installation/quick-start-guide) starts it from the standard Docker image. The [requirements page](https://www.dotcms.com/docs/manage/installation-and-deployment/installation/requirements) lists PostgreSQL for the database, OpenSearch for search, and Redis or Valkey for cache and pub-sub, with Tomcat bundled in the standard stack.

The same software is offered as dotCMS Cloud, a hosted option that dotCMS runs for its customers, alongside the self-hosted image.

## Worth knowing

The source is published under the Business Source License 1.1. The README says all features are free for organizations whose total finances are below a stated threshold. The license text sets a change date after which the code moves to the GPL v3.

The requirements page says the search server must move to a newer OpenSearch line from Q1 2027.
