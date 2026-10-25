---
id: elasticsearch
name: Elasticsearch
urls:
  home: https://www.elastic.co/elasticsearch
  repository: https://github.com/elastic/elasticsearch
  docs: https://www.elastic.co/docs/deploy-manage/deploy/self-managed/installing-elasticsearch
category:
  - search
description: Distributed search and analytics engine that stores and queries structured, unstructured and vector data over an HTTP API.
status: active
maintainer: elasticsearch B.V.
maintainerType: company
language: java
runtime:
  - jvm
hosting:
  - java
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: tar.gz archive, deb package, rpm package, docker image, docker compose
licenseModel: open-core
license: AGPL-3.0-only OR SSPL-1.0 OR Elastic-2.0 (triple license, default for the repository), Elastic License 2.0 (x-pack folder only)
currentMajor: "9"
latestReleaseDate: 2026-10-06
githubStargazers: 78317
httpArchiveSites: 10700
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: urls
    url: https://www.elastic.co/elasticsearch
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/elastic/elasticsearch
    checkedAt: 2026-10-19
  - field: urls
    url: https://www.elastic.co/docs/deploy-manage/deploy/self-managed/installing-elasticsearch
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://www.elastic.co/legal/privacy-statement
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://www.elastic.co/elasticsearch
    checkedAt: 2026-10-19
  - field: license
    url: https://raw.githubusercontent.com/elastic/elasticsearch/main/LICENSE.txt
    checkedAt: 2026-10-19
  - field: license
    url: https://raw.githubusercontent.com/elastic/elasticsearch/main/LICENSE.txt
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://raw.githubusercontent.com/elastic/elasticsearch/main/LICENSE.txt
    checkedAt: 2026-10-19
  - field: language
    url: https://github.com/elastic/elasticsearch
    checkedAt: 2026-10-19
  - field: category
    url: https://www.elastic.co/elasticsearch
    checkedAt: 2026-10-19
  - field: runtime
    url: https://www.elastic.co/docs/deploy-manage/deploy/self-managed/installing-elasticsearch
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://www.elastic.co/docs/deploy-manage/deploy/self-managed/installing-elasticsearch
    checkedAt: 2026-10-19
  - field: headlessApi
    url: https://www.elastic.co/elasticsearch
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://endoflife.date/api/elasticsearch.json
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://api.github.com/repos/elastic/elasticsearch/releases/latest
    checkedAt: 2026-10-19
  - field: githubStargazers
    url: https://github.com/elastic/elasticsearch
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://www.elastic.co/docs/deploy-manage/deploy/self-managed/installing-elasticsearch
    checkedAt: 2026-10-19
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-25
ai: authored
contentStore: null
databases: null
adminUi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Elasticsearch is a distributed search and analytics engine written in Java. It stores structured, unstructured and vector data and queries it through a REST API. Elastic, a company, develops it and offers Elastic Cloud, a hosted version available as serverless and hosted deployments. Each distribution bundles its own OpenJDK, so a separate Java installation is not needed to run the server. The [self-managed installation guide](https://www.elastic.co/docs/deploy-manage/deploy/self-managed/installing-elasticsearch) describes the archive, package and container options.

## Worth knowing

The repository's default license is a choice of AGPL-3.0-only, SSPL-1.0 or Elastic License 2.0. Code in the x-pack folder is under Elastic License 2.0 alone.
