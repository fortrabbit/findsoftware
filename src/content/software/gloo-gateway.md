---
id: gloo-gateway
name: Gloo Gateway
urls:
  repository: https://github.com/solo-io/gloo
  docs: https://docs.solo.io/gateway/latest/
category:
  - backend
  - web-server
description: Envoy-based Kubernetes API gateway and ingress controller that implements the Kubernetes Gateway API.
status: discontinued
maintainer: Solo.io, Inc.
maintainerType: company
firstRelease: 2018
language: go
installMethod: install in a Kubernetes cluster
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-21
githubStargazers: 171
contributors: 188
social:
  x: https://twitter.com/soloio_inc
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: status
    url: https://raw.githubusercontent.com/solo-io/gloo/main/README.md
    checkedAt: 2026-10-29
  - field: name
    url: https://raw.githubusercontent.com/solo-io/gloo/main/README.md
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/solo-io/gloo
    checkedAt: 2026-10-29
  - field: urls
    url: https://raw.githubusercontent.com/solo-io/gloo/main/README.md
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://raw.githubusercontent.com/solo-io/gloo/main/LICENSE
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://raw.githubusercontent.com/solo-io/gloo/main/LICENSE
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://api.github.com/repos/solo-io/gloo/git/ref/tags/0.2.26
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/solo-io/gloo/languages
    checkedAt: 2026-10-29
  - field: category
    url: https://raw.githubusercontent.com/solo-io/gloo/main/README.md
    checkedAt: 2026-10-29
  - field: license
    url: https://raw.githubusercontent.com/solo-io/gloo/main/LICENSE
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://raw.githubusercontent.com/solo-io/gloo/main/LICENSE
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://api.github.com/repos/solo-io/gloo/releases
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://api.github.com/repos/solo-io/gloo/releases
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/solo-io/gloo
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/solo-io/gloo/contributors
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.solo.io/gateway/latest/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.solo.io/gateway/latest/
    checkedAt: 2026-10-29
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Gloo Gateway is an Envoy-based gateway for Kubernetes that implements the Kubernetes Gateway API and runs as an ingress controller. It is installed in a Kubernetes cluster, and the glooctl CLI is part of its documented tooling. Solo.io, Inc. maintains the project.

The repository carries an end-of-life notice for Gloo OSS, the open source edition, and it still publishes releases. The notice names kgateway, a project donated to the Cloud Native Computing Foundation, as its successor.

## Worth knowing

The README encourages users of Gloo OSS to migrate to kgateway. The product page for Gloo Gateway on the maintainer's site now presents kgateway under the name Solo Enterprise for kgateway.
