---
id: flagd
name: flagd
urls:
  home: https://flagd.dev
  repository: https://github.com/open-feature/flagd
  docs: https://flagd.dev/
category:
  - dev-tool
description: Open-source feature flag evaluation daemon that serves flag definitions over gRPC and HTTP, compatible with OpenFeature.
status: active
maintainer: OpenFeature
maintainerType: community
firstRelease: 2022
language: go
runtime:
  - binary
hosting:
  - binary
adminUi: false
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-10-28
githubStargazers: 1020
contributors: 87
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://flagd.dev/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/open-feature/flagd
    checkedAt: 2026-11-03
  - field: urls
    url: https://flagd.dev/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://openfeature.dev/
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://openfeature.dev/
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/open-feature/flagd/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/open-feature/flagd
    checkedAt: 2026-11-03
  - field: runtime
    url: https://flagd.dev/installation/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://flagd.dev/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://flagd.dev/installation/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://flagd.dev/installation/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://flagd.dev/installation/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://flagd.dev/installation/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://flagd.dev/
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/open-feature/flagd
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://flagd.dev/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/open-feature/flagd/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/open-feature/flagd/releases
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/open-feature/flagd/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/open-feature/flagd
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/open-feature/flagd/contributors
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

flagd is a feature flag evaluation engine that runs either as a separate process or inside the application that uses it. It follows the OpenFeature specification and answers evaluations over gRPC, HTTP and the OpenFeature Remote Evaluation Protocol. It has no user interface and no persistence layer of its own.

The project is written in Go. The [installation guide](https://flagd.dev/installation/) lists a container image, release binaries and Kubernetes as install routes.

## Worth knowing

flagd belongs to OpenFeature, which describes itself as a CNCF incubating project. The repository holds several components released under separate tags, and the daemon has its own release line.
