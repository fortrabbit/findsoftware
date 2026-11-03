---
id: d8a
name: d8a
urls:
  home: https://d8a.tech
  repository: https://github.com/d8a-tech/d8a
  docs: https://docs.d8a.tech/getting-started
  pricing: https://d8a.tech/pricing
category:
  - analytics
description: Web analytics pipeline that receives GA4 and Matomo tracking and writes sessions to BigQuery, ClickHouse or CSV and Parquet files.
status: active
maintainer: Govanalytics B.V.
maintainerType: company
firstRelease: 2025
hqCountry: NL
language: go
adminUi: false
runsAs:
  - always-on
installMethod: Docker Compose, single node with ClickHouse
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-26
githubStargazers: 62
contributors: 4
social:
  x: https://x.com/d8atech
  discord: https://discord.gg/EegbcdsWUc
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://d8a.tech/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/d8a-tech/d8a
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.d8a.tech/getting-started
    checkedAt: 2026-11-03
  - field: urls
    url: https://d8a.tech/pricing
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/d8a-tech/d8a/blob/master/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/d8a-tech/d8a
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/d8a-tech/d8a/blob/master/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/d8a-tech/d8a
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.d8a.tech/articles/production-operations
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.d8a.tech/articles/production-operations
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/d8a-tech/d8a/blob/master/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://d8a.tech/terms/
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://d8a.tech/terms
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://d8a.tech/terms
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/d8a-tech/d8a/git/tags/6d0bd3aa8dac0b7852599f75edee15509b61c131
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/d8a-tech/d8a/releases/latest
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/d8a-tech/d8a/releases/latest
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/d8a-tech/d8a
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/d8a-tech/d8a/contributors
    checkedAt: 2026-11-03
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

d8a is a web analytics pipeline that receives Google Analytics 4 and Matomo tracking and writes sessions to a warehouse. It writes events and sessions as flat tables to BigQuery or ClickHouse, or to CSV and Parquet files on S3, MinIO, GCS or a local disk. It ships without a reporting UI, so a BI tool or the prebuilt Data Studio dashboard reads the data.

The documented production setup is single-node Docker Compose with ClickHouse, described in the [production operations guide](https://docs.d8a.tech/articles/production-operations). Its receiver runs as an HTTP server that publishes to a queue. The software is written in Go.

## Worth knowing

The code is MIT-licensed. d8a.tech Cloud runs the same pipeline in the EU, as a hosted service next to the open-source code.
