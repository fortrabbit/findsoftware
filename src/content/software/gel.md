---
id: gel
name: Gel
urls:
  home: https://geldata.com
  repository: https://github.com/geldata/gel
  docs: https://docs.geldata.com
category:
  - database
description: Graph-relational database that runs on Postgres, queried with the EdgeQL language and driven by a schema of object types and links.
status: stub
maintainer: Gel Data Inc.
maintainerType: company
firstRelease: 2019
language: python
basedOn:
  - postgresql
databases:
  - postgres
adminUi: true
headlessApi:
  - graphql
runsAs:
  - always-on
installMethod: bash installer (curl)
licenseModel: open-source
license: Apache-2.0
currentMajor: "7"
latestReleaseDate: 2025-11-05
githubStargazers: 14177
npmWeeklyDownloads: 1239840
contributors: 126
dependentRepos: 3
dependentPackages: 2
social:
  x: https://twitter.com/geldata
  discord: https://discord.gg/gel
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: name
    url: https://raw.githubusercontent.com/geldata/gel/master/README.md
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/geldata/gel
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/geldata/gel
    checkedAt: 2026-10-29
  - field: urls
    url: https://geldata.com/
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://geldata.com/about
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://geldata.com/about
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://api.github.com/repos/geldata/gel/releases
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/geldata/gel/languages
    checkedAt: 2026-10-29
  - field: category
    url: https://raw.githubusercontent.com/geldata/gel/master/README.md
    checkedAt: 2026-10-29
  - field: license
    url: https://api.github.com/repos/geldata/gel
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://geldata.com/
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://api.github.com/repos/geldata/gel/releases
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://api.github.com/repos/geldata/gel/releases
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/geldata/gel
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/geldata/gel/contributors
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.geldata.com/learn/installation
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.geldata.com/learn/installation
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.geldata.com/learn/installation
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.geldata.com/reference/running/deployment/docker
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.geldata.com/reference/running/deployment/bare_metal
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.geldata.com/learn/installation
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.geldata.com/learn/installation
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://docs.geldata.com/reference/running/deployment/bare_metal
    checkedAt: 2026-10-29
  - field: databases
    url: https://docs.geldata.com/reference/running/deployment
    checkedAt: 2026-10-29
  - field: headlessApi
    url: https://docs.geldata.com/reference/using/graphql/graphql
    checkedAt: 2026-10-29
  - field: adminUi
    url: https://geldata.com/
    checkedAt: 2026-10-29
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-19:2026-10-25/gel
    checkedAt: 2026-10-29
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/gel
    checkedAt: 2026-10-29
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/gel
    checkedAt: 2026-10-29
  - field: basedOn
    url: https://www.geldata.com/
    checkedAt: 2026-10-30
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Gel is a graph-relational database that runs on Postgres. Its schema is written as object types with properties and links, its queries use the EdgeQL language, and the schema is exposed through a GraphQL interface. The server includes a graphical UI. Gel Data Inc. maintains the project.

The CLI installs with a bash or PowerShell installer, Homebrew or Nixpkgs, and JavaScript and Python projects can run it through npx or uvx. Docker users run the geldata/gel image, and Linux servers can install the server package, which bundles a systemd unit that starts the server.

## Worth knowing

The Docker container needs about 1 GB of RAM, and the [deployment guide](https://docs.geldata.com/reference/running/deployment) says Gel connects to an external PostgreSQL instance as the PostgreSQL superuser.

The maintainer's [announcement](https://www.geldata.com/blog/gel-joins-vercel) says the company is shutting down, its team is joining Vercel, and Gel Cloud is closed, while Gel stays open source on GitHub.

Installed as a service, the server is a long-running process, so it needs a host that keeps processes running.
