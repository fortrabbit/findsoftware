---
id: zincsearch
name: ZincSearch
urls:
  home: https://zincsearch-docs.zinc.dev/
  repository: https://github.com/zincsearch/zincsearch
  docs: https://zincsearch-docs.zinc.dev/
category:
  - search
description: Go search engine that does full-text indexing as a single binary, with Elasticsearch-compatible APIs for ingesting data and an embedded web UI.
status: active
maintainer: Zinc Labs Inc.
maintainerType: company
firstRelease: 2021
language: go
runtime:
  - binary
hosting:
  - binary
basedOn:
  - riot
adminUi: true
runsAs:
  - always-on
installMethod: binary download
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-09-12
githubStargazers: 17922
contributors: 64
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://zincsearch-docs.zinc.dev/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/zincsearch/zincsearch
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/zincsearch/zincsearch
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/zincsearch/zincsearch/blob/main/COPYRIGHT
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/zincsearch/zincsearch
    checkedAt: 2026-10-28
  - field: runtime
    url: https://zincsearch-docs.zinc.dev/
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/zincsearch/zincsearch
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/zincsearch/zincsearch/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://zincsearch-docs.zinc.dev/installation/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://zincsearch-docs.zinc.dev/installation/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://zincsearch-docs.zinc.dev/installation/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://zincsearch-docs.zinc.dev/installation/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://zincsearch-docs.zinc.dev/installation/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://zincsearch-docs.zinc.dev/installation/
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/zincsearch/zincsearch
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://github.com/zincsearch/zincsearch
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://zincsearch-docs.zinc.dev/installation/
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/zincsearch/zincsearch/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/zincsearch/zincsearch/releases
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/zincsearch/zincsearch/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/zincsearch/zincsearch
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/zincsearch/zincsearch/contributors?per_page=1
    checkedAt: 2026-10-28
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

ZincSearch is a search engine written in Go and distributed as a single binary that runs a full-text indexing server. It takes data through an API compatible with Elasticsearch's ingestion calls, and its web UI for querying data is embedded in the binary. The index is stored on disk.

The [installation guide](https://zincsearch-docs.zinc.dev/installation/) covers binary downloads, a Homebrew tap, a Docker image and a Helm chart for Kubernetes.

## Worth knowing

The README calls ZincSearch a lighter alternative to Elasticsearch, says Kibana is not supported, and points users who need log search to OpenObserve, a separate project.
