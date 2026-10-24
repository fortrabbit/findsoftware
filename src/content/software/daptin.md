---
id: daptin
name: Daptin
urls:
  home: https://daptin.github.io/
  repository: https://github.com/daptin/daptin
  docs: https://github.com/daptin/daptin/wiki/Getting-Started-Guide
category:
  - backend
description: Self-hosted application server that runs APIs, identity, permissions, files and automation from a schema of data.
status: active
maintainer: Daptin contributors
maintainerType: community
firstRelease: 2017
language: go
runtime:
  - binary
hosting:
  - binary
contentStore:
  - database
databases:
  - sqlite
  - mysql
  - postgres
  - mariadb
adminUi: true
headlessApi:
  - rest
  - graphql
templating: go-templates
i18n: yes, translations
runsAs:
  - always-on
renderingModes:
  - static
installMethod: docker
licenseModel: open-source
license: LGPL-3.0
currentMajor: "0"
latestReleaseDate: 2026-10-13
githubStargazers: 1898
contributors: 12
social:
  discord: https://discord.gg/t564q8SQVk
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://daptin.github.io/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/daptin/daptin
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/daptin/daptin/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://daptin.github.io/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/daptin/daptin
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/daptin/daptin/releases
    checkedAt: 2026-10-23
  - field: category
    url: https://daptin.github.io/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/daptin/daptin/blob/master/README.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://daptin.github.io/
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/daptin/daptin/wiki/Installation
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/daptin/daptin/blob/master/README.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://github.com/daptin/daptin/blob/master/README.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://github.com/daptin/daptin/blob/master/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://daptin.github.io/
    checkedAt: 2026-10-23
  - field: i18n
    url: https://github.com/daptin/daptin/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/daptin/daptin/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/daptin/daptin/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/daptin/daptin/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/daptin/daptin/wiki/Installation
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/daptin/daptin/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/daptin/daptin/wiki/Production-Deployment
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/daptin/daptin/wiki/Subsites
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/daptin/daptin/master/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/daptin/daptin/blob/master/README.md
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/daptin/daptin/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/daptin/daptin/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/daptin/daptin
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/daptin/daptin/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Daptin is a self-hosted application server written in Go. It runs APIs, identity, permissions, files and automation from a data schema. Each table in the schema becomes stored data with a JSON:API resource, and GraphQL queries and actions are optional. Data is kept in SQLite, MySQL, MariaDB or PostgreSQL. Sites and subsites, routed by host or path, are served with Go templates, and the Subsites page describes hosting static websites from one instance. The documented install paths are a Docker image, Docker Compose, a Linux binary, and a Kustomize deployment guide for Kubernetes. The production checklist expects the process to run under a process supervisor.

## Worth knowing

The pages read describe Daptin as an application server and do not call it a headless CMS, although the repository carries that topic. The README points new users to a Getting Started Guide on the project's wiki.
