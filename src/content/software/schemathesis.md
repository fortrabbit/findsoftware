---
id: schemathesis
name: Schemathesis
urls:
  home: https://schemathesis.io/
  repository: https://github.com/schemathesis/schemathesis
  docs: https://schemathesis.readthedocs.io/en/stable/
category:
  - testing
description: Python tool that tests OpenAPI, GraphQL and gRPC APIs by generating inputs from their schemas.
status: active
maintainer: Dmitry Dygalo & Schemathesis.io
firstRelease: 2019
language: python
runtime:
  - python
runtimeMin: python 3.11
basedOn:
  - hypothesis
runsAs:
  - local
installMethod: uv
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-11-12
githubStargazers: 3782
contributors: 71
social:
  discord: https://discord.gg/R9ASRAmHnA
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://schemathesis.io/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/schemathesis/schemathesis
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/schemathesis/schemathesis/blob/master/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/schemathesis/schemathesis/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/schemathesis/schemathesis/releases
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/schemathesis/schemathesis
    checkedAt: 2026-11-16
  - field: category
    url: https://api.github.com/repos/schemathesis/schemathesis
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://schemathesis.io/
    checkedAt: 2026-11-16
  - field: runtime
    url: https://pypi.org/pypi/schemathesis/json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://pypi.org/pypi/schemathesis/json
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://schemathesis.readthedocs.io/en/stable/guides/cicd/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/schemathesis/schemathesis/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://schemathesis.readthedocs.io/en/stable/quick-start/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://schemathesis.readthedocs.io/en/stable/guides/docker/
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/schemathesis/schemathesis/blob/master/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/schemathesis/schemathesis/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/schemathesis/schemathesis/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/schemathesis/schemathesis
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/schemathesis/schemathesis/contributors?per_page=1
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Schemathesis is a testing tool that generates test requests from an API's schema. It works with OpenAPI, GraphQL and gRPC schemas and is built on Hypothesis. It runs locally or in CI, and the [Docker guide](https://schemathesis.readthedocs.io/en/stable/guides/docker/) describes running the official image without installing Python.

## Worth knowing

Schemathesis sends requests that create, change and delete data, so the README advises pointing it at a dev or staging environment, not production.
