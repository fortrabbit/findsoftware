---
id: blast
name: Blast
urls:
  repository: https://github.com/mosuka/blast
  docs: https://github.com/mosuka/blast/blob/master/README.md
category:
  - search
description: Full-text search and indexing server written in Go on top of Bleve, with gRPC and RESTful APIs.
status: discontinued
maintainer: Minoru Osuka
maintainerType: individual
firstRelease: 2018
language: go
runtime:
  - binary
hosting:
  - binary
basedOn:
  - bleve
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: compile from source with make
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2021-01-18
githubStargazers: 1074
contributors: 3
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: status
    url: https://raw.githubusercontent.com/mosuka/blast/master/README.md
    checkedAt: 2026-10-28
  - field: status
    url: https://api.github.com/repos/mosuka/blast
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/mosuka/blast
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/mosuka/blast/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/mosuka/blast/master/Dockerfile
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/mosuka/blast
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/mosuka/blast/master/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://raw.githubusercontent.com/mosuka/blast/master/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/mosuka/blast/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/mosuka/blast/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/mosuka/blast/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/mosuka/blast/master/README.md
    checkedAt: 2026-10-28
  - field: headlessApi
    url: https://raw.githubusercontent.com/mosuka/blast/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/mosuka/blast
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/mosuka/blast/master/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/mosuka/blast/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/mosuka/blast/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/mosuka/blast/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/mosuka/blast
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/mosuka/blast/contributors?per_page=1
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

Blast is a full-text search and indexing server written in Go on top of Bleve. It provides gRPC and RESTful APIs and runs nodes that replicate their state with Raft consensus. The project builds from source with make, and a Docker image is available. Its [README](https://github.com/mosuka/blast/blob/master/README.md) opens with a notice that the project has been taken over by Phalanx.

## Worth knowing

The repository is archived on GitHub and the README says the project has not been maintained for a long time.
