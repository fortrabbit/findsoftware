---
id: nixiesearch
name: Nixiesearch
urls:
  home: https://www.nixiesearch.ai/
  repository: https://github.com/nixiesearch/nixiesearch
  docs: https://nixiesearch.ai/quickstart/
category:
  - search
description: Search engine server, powered by Apache Lucene, that keeps its index in S3-compatible storage and answers lexical, semantic and hybrid queries over HTTP.
status: active
maintainer: Nixiesearch
firstRelease: 2023
language: scala
runtime:
  - jvm
hosting:
  - java
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-01-06
githubStargazers: 619
contributors: 7
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://www.nixiesearch.ai/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/nixiesearch/nixiesearch
    checkedAt: 2026-10-28
  - field: urls
    url: https://nixiesearch.ai/quickstart/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://nixiesearch.ai/deployment/distributed/lambda/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/nixiesearch/nixiesearch
    checkedAt: 2026-10-28
  - field: runtime
    url: https://nixiesearch.ai/deployment/distributed/lambda/
    checkedAt: 2026-10-28
  - field: category
    url: https://www.nixiesearch.ai/
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/nixiesearch/nixiesearch/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://nixiesearch.ai/quickstart/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://nixiesearch.ai/deployment/distributed/overview/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://nixiesearch.ai/deployment/distributed/lambda/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/nixiesearch/nixiesearch/master/README.md
    checkedAt: 2026-10-28
  - field: headlessApi
    url: https://raw.githubusercontent.com/nixiesearch/nixiesearch/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/nixiesearch/nixiesearch
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/nixiesearch/nixiesearch/master/README.md
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/nixiesearch/nixiesearch/master/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/nixiesearch/nixiesearch/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/nixiesearch/nixiesearch/releases/latest
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/nixiesearch/nixiesearch/commits/0.0.1
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/nixiesearch/nixiesearch
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/nixiesearch/nixiesearch/contributors
    checkedAt: 2026-10-28
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

Nixiesearch is a search server that uses Apache Lucene for its indexes and can keep them in S3-compatible object storage, a local directory or memory. A standalone deployment runs the whole server in one process, started from the [quickstart](https://nixiesearch.ai/quickstart/) Docker image. A distributed deployment splits the work: searcher pods load the indexes from S3 and answer queries, while one indexer pod builds the indexes and uploads them, as the [deployment overview](https://nixiesearch.ai/deployment/distributed/overview/) describes. The index schema and the embedding models are declared in a YAML config file, and the server answers queries over HTTP, with vector search among its index types.

## Worth knowing

The searchers can also run as AWS Lambda functions, but the Lambda deployment covers searchers only; the indexer runs separately on Kubernetes, ECS or EC2. Local ONNX embedding inference is not recommended on Lambda because the CPU is limited, so embeddings there come from an API provider.

Usage telemetry is sent by default. The help pages name two ways to switch it off: the NIXIESEARCH_CORE_TELEMETRY environment variable and the core.telemetry setting in the config file.
