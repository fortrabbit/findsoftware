---
id: cerbos
name: Cerbos
urls:
  home: https://www.cerbos.dev/
  repository: https://github.com/cerbos/cerbos
  docs: https://docs.cerbos.dev/cerbos/latest/
  pricing: https://www.cerbos.dev/pricing
category:
  - auth
description: Open-core authorization engine that evaluates access policies for applications and services over HTTP and gRPC.
status: active
maintainer: Zenauth Ltd
maintainerType: company
firstRelease: 2021
hqCountry: GB
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - mysql
  - postgres
  - sqlite
runsAs:
  - always-on
installMethod: binary download
licenseModel: open-core
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-10-23
githubStargazers: 4639
contributors: 34
social:
  x: https://x.com/cerbosdev
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: name
    url: https://github.com/cerbos/cerbos
    checkedAt: 2026-10-31
  - field: urls
    url: https://www.cerbos.dev/
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/cerbos/cerbos
    checkedAt: 2026-10-31
  - field: urls
    url: https://docs.cerbos.dev/cerbos/latest/
    checkedAt: 2026-10-31
  - field: urls
    url: https://www.cerbos.dev/pricing
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://www.cerbos.dev/terms-of-service
    checkedAt: 2026-10-31
  - field: maintainerType
    url: https://www.cerbos.dev/terms-of-service
    checkedAt: 2026-10-31
  - field: hqCountry
    url: https://www.cerbos.dev/terms-of-service
    checkedAt: 2026-10-31
  - field: category
    url: https://github.com/cerbos/cerbos
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/cerbos/cerbos
    checkedAt: 2026-10-31
  - field: runtime
    url: https://docs.cerbos.dev/cerbos/latest/installation/binary
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.cerbos.dev/cerbos/latest/installation/binary
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.cerbos.dev/cerbos/latest/installation/container
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.cerbos.dev/cerbos/latest/installation/helm
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://docs.cerbos.dev/cerbos/latest/deployment/
    checkedAt: 2026-10-31
  - field: databases
    url: https://docs.cerbos.dev/cerbos/latest/configuration/storage
    checkedAt: 2026-10-31
  - field: databases
    url: https://docs.cerbos.dev/cerbos/latest/configuration/storage
    checkedAt: 2026-10-31
  - field: databases
    url: https://docs.cerbos.dev/cerbos/latest/configuration/storage
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/cerbos/cerbos/blob/main/LICENSE
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://github.com/cerbos/cerbos
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/cerbos/cerbos/releases/tag/v0.57.0
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/cerbos/cerbos/releases/tag/v0.57.0
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/cerbos/cerbos/releases/tag/v0.0.0-alpha0
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/cerbos/cerbos
    checkedAt: 2026-10-31
  - field: contributors
    url: https://github.com/cerbos/cerbos
    checkedAt: 2026-10-31
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Cerbos is an authorization engine: an application sends it a principal, an action and a resource, and it answers whether the action is allowed under the policies it holds. The [deployment guide](https://docs.cerbos.dev/cerbos/latest/deployment/) describes two ways to run it, as a shared service that a group of applications calls or as a sidecar beside each application. The Cerbos PDP listens for HTTP and gRPC requests and keeps no state of its own; the decisions come from the information the calling application passes in.

Policies are stored as files or in a store, and the [storage page](https://docs.cerbos.dev/cerbos/latest/configuration/storage) lists a git repository, a directory on disk, object storage and database-backed stores as places to keep them. The PDP is distributed as a binary, as a container image on the GitHub Container Registry and as a Helm chart. The company behind it, Zenauth Ltd, publishes the site under the Cerbos.dev name.

## Worth knowing

Cerbos Hub is the policy control plane and has a hosted sign-up. The storage page names MySQL as a dynamic store that accepts policy changes at runtime through the Admin API.
