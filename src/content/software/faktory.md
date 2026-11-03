---
id: faktory
name: Faktory
urls:
  home: https://contribsys.com/faktory/
  repository: https://github.com/contribsys/faktory
  docs: https://github.com/contribsys/faktory/wiki
  pricing: https://contribsys.com/faktory/
category:
  - backend
description: Language-agnostic, persistent background job server with a web UI, from which workers in any language fetch jobs.
status: active
maintainer: Contributed Systems LLC
maintainerType: company
firstRelease: 2017
language: go
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: linux rpm and deb packages
licenseModel: open-core
license: AGPL-3.0, Commercial (Faktory Enterprise)
currentMajor: "1"
latestReleaseDate: 2026-08-10
githubStargazers: 6155
contributors: 49
social:
  forum: https://www.rubyforum.org/tag/faktory
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://contribsys.com/faktory/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/contribsys/faktory
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/contribsys/faktory/blob/main/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://contribsys.com/faktory/
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://contribsys.com/faktory/
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/contribsys/faktory
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://www.mikeperham.com/2017/10/24/introducing-faktory/
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/contribsys/faktory
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/contribsys/faktory/wiki/Installation
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/contribsys/faktory/wiki/Deployment
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/contribsys/faktory/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/contribsys/faktory/wiki/Installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/contribsys/faktory/wiki/Installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/contribsys/faktory/wiki/Installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/contribsys/faktory/wiki/Installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/contribsys/faktory/wiki/Installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/contribsys/faktory/wiki/Installation
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/contribsys/faktory/wiki/Kubernetes-Deployment-Example
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/contribsys/faktory/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/contribsys/faktory/wiki/Licensing
    checkedAt: 2026-11-03
  - field: urls
    url: https://contribsys.com/faktory/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/contribsys/faktory/releases/tag/v1.10.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/contribsys/faktory/releases/tag/v1.10.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/contribsys/faktory
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/contribsys/faktory
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Faktory is a language-agnostic background job server with a web UI. Workers in any language fetch jobs from it, and the web UI shows and manages them. The server runs as a single process on a host and starts Redis as a child process to hold its data. The wiki documents installs from Linux RPM and DEB packages, Homebrew, a Docker image, AWS ECS, Render.com, Kubernetes and a source build.

## Worth knowing

The server is licensed under the AGPL-3.0. The Faktory client and worker libraries are not covered by that license, according to the license text. Faktory Enterprise is a commercial edition that the project describes as offering more features and official support, and it adds a remote Redis option.
