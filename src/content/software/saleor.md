---
id: saleor
name: Saleor
urls:
  home: https://saleor.io
  repository: https://github.com/saleor/saleor
  docs: https://docs.saleor.io/
  pricing: https://saleor.io/pricing
category:
  - e-commerce
description: Open-source headless commerce platform with a GraphQL API, built in Python on Django.
status: active
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.12
basedOn:
  - django
databases:
  - postgres
headlessApi:
  - graphql
runsAs:
  - always-on
installMethod: docker compose from saleor-platform
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "3"
latestReleaseDate: 2026-10-16
githubStargazers: 23454
httpArchiveSites: 4
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: name
    url: https://saleor.io
    checkedAt: 2026-10-19
  - field: urls
    url: https://saleor.io
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/saleor/saleor
    checkedAt: 2026-10-19
  - field: urls
    url: https://docs.saleor.io/
    checkedAt: 2026-10-19
  - field: license
    url: https://github.com/saleor/saleor/blob/3.23.42/pyproject.toml
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://saleor.io/pricing
    checkedAt: 2026-10-19
  - field: language
    url: https://github.com/saleor/saleor
    checkedAt: 2026-10-19
  - field: runtime
    url: https://github.com/saleor/saleor/blob/3.23.42/pyproject.toml
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://github.com/saleor/saleor/blob/3.23.42/pyproject.toml
    checkedAt: 2026-10-19
  - field: basedOn
    url: https://github.com/saleor/saleor/blob/3.23.42/pyproject.toml
    checkedAt: 2026-10-19
  - field: databases
    url: https://github.com/saleor/saleor/blob/3.23.42/pyproject.toml
    checkedAt: 2026-10-19
  - field: headlessApi
    url: https://docs.saleor.io/llms.txt
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://docs.saleor.io/setup/docker-compose.md
    checkedAt: 2026-10-19
  - field: urls
    url: https://saleor.io/pricing
    checkedAt: 2026-10-19
  - field: githubStargazers
    url: https://github.com/saleor/saleor
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://github.com/saleor/saleor/releases/tag/3.23.42
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://github.com/saleor/saleor/releases/tag/3.23.42
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://docs.saleor.io/setup/docker-compose.md
    checkedAt: 2026-10-19
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Saleor is an open-source commerce platform with a GraphQL-first API. Its core is a Django application that stores data in PostgreSQL. The [documentation](https://docs.saleor.io/) describes self-hosting with Docker Compose from the saleor-platform repository, which builds the images and takes care of the dependencies, and also covers Kubernetes and DigitalOcean deployments.

## Worth knowing

Saleor Commerce Cloud is a hosted, paid option beside the open-source core. Its free sandboxes are for non-commercial use only.
