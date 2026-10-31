---
id: cadence
name: Cadence
urls:
  home: https://cadenceworkflow.io
  repository: https://github.com/cadence-workflow/cadence
  docs: https://cadenceworkflow.io/docs/
category:
  - backend
description: Open-source workflow engine for building fault-tolerant, stateful distributed applications.
status: active
maintainer: LF Projects, LLC
maintainerType: foundation
firstRelease: 2017
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - postgres
  - sqlite
adminUi: true
runsAs:
  - always-on
installMethod: source-build
licenseModel: open-source
license: Apache-2.0, CC-BY-4.0
currentMajor: "1"
latestReleaseDate: 2026-10-30
githubStargazers: 9530
contributors: 180
social:
  x: https://x.com/cadenceworkflow
  forum: https://github.com/cadence-workflow/cadence/discussions
  subreddit: https://www.reddit.com/r/cadenceworkflow/
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: name
    url: https://cadenceworkflow.io/docs/concepts/open-source-workflow-engine/
    checkedAt: 2026-10-31
  - field: urls
    url: https://cadenceworkflow.io
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/cadence-workflow/cadence
    checkedAt: 2026-10-31
  - field: urls
    url: https://cadenceworkflow.io/docs/
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://cadenceworkflow.io
    checkedAt: 2026-10-31
  - field: maintainerType
    url: https://cadenceworkflow.io
    checkedAt: 2026-10-31
  - field: category
    url: https://cadenceworkflow.io/docs/concepts/open-source-workflow-engine/
    checkedAt: 2026-10-31
  - field: category
    url: https://cadenceworkflow.io
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/cadence-workflow/cadence
    checkedAt: 2026-10-31
  - field: runtime
    url: https://cadenceworkflow.io/docs/get-started/
    checkedAt: 2026-10-31
  - field: databases
    url: https://cadenceworkflow.io/docs/get-started/
    checkedAt: 2026-10-31
  - field: databases
    url: https://cadenceworkflow.io/docs/get-started/
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://cadenceworkflow.io
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://cadenceworkflow.io/docs/get-started/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://cadenceworkflow.io/docs/get-started/server-installation/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://cadenceworkflow.io/docs/concepts/open-source-workflow-engine/
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://cadenceworkflow.io/docs/get-started/server-installation/
    checkedAt: 2026-10-31
  - field: license
    url: https://cadenceworkflow.io/docs/concepts/open-source-workflow-engine/
    checkedAt: 2026-10-31
  - field: license
    url: https://cadenceworkflow.io/docs/about/license/
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://github.com/cadence-workflow/cadence
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/cadence-workflow/cadence/releases/tag/v1.4.5
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/cadence-workflow/cadence/releases/tag/v1.4.5
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/cadence-workflow/cadence/releases/tag/v0.1.1-beta
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/cadence-workflow/cadence
    checkedAt: 2026-10-31
  - field: contributors
    url: https://github.com/cadence-workflow/cadence
    checkedAt: 2026-10-31
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Cadence runs long-running business logic as workflows written in Go or Java, with Python and Ruby SDKs that the community maintains. The workflow code runs in worker services that the application deploys, and the Cadence server keeps the workflow history and the task queues. The server is stateless and stores its history in an external database, Cassandra, MySQL or PostgreSQL.

The server is a Go program that the [get-started guide](https://cadenceworkflow.io/docs/get-started/) builds from the repository with `make bins`, and the [server installation guide](https://cadenceworkflow.io/docs/get-started/server-installation/) starts with Docker Compose. The [overview](https://cadenceworkflow.io/docs/concepts/open-source-workflow-engine/) also describes a Kubernetes deployment with a Helm chart. The project is run by a Series of LF Projects, LLC, and its site describes it as a Cloud Native Computing Foundation project.

## Worth knowing

The quickstart runs the server on an embedded SQLite backend. The [open-source overview](https://cadenceworkflow.io/docs/concepts/open-source-workflow-engine/) deployment table pairs SQLite with local development, demos and CI, and pairs Cassandra, MySQL or PostgreSQL with staging and production. The installation guide asks the operator to keep the server process running in the background.
