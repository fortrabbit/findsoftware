---
id: emissary-ingress
name: Emissary-ingress
urls:
  home: https://emissary-ingress.dev
  repository: https://github.com/emissary-ingress/emissary
  docs: https://emissary-ingress.dev/docs/
category:
  - backend
  - web-server
description: Kubernetes-native API gateway and Layer 7 load balancer built on the Envoy Proxy, configured through Kubernetes resources.
status: active
maintainer: Emissary-ingress Authors
maintainerType: community
firstRelease: 2018
language: python
runsAs:
  - always-on
installMethod: helm-chart
licenseModel: open-source
license: Apache-2.0
currentMajor: "4"
latestReleaseDate: 2026-05-19
githubStargazers: 4522
contributors: 196
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: name
    url: https://emissary-ingress.dev/
    checkedAt: 2026-10-28
  - field: urls
    url: https://emissary-ingress.dev/
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/emissary-ingress/emissary
    checkedAt: 2026-10-28
  - field: urls
    url: https://emissary-ingress.dev/docs/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://emissary-ingress.dev/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://github.com/emissary-ingress/emissary
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/emissary-ingress/emissary/releases
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/emissary-ingress/emissary
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/emissary-ingress/emissary
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/emissary-ingress/emissary/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/emissary-ingress/emissary/releases/latest
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/emissary-ingress/emissary/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/emissary-ingress/emissary/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://emissary-ingress.dev/docs/4.0/topics/install/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://emissary-ingress.dev/docs/4.0/topics/install/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://emissary-ingress.dev/docs/4.0/topics/install/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://emissary-ingress.dev/docs/4.0/about/features-and-benefits/
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/emissary-ingress/emissary
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/emissary-ingress/emissary/contributors
    checkedAt: 2026-10-28
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Emissary-ingress is a Kubernetes-native API gateway and Layer 7 load balancer built on the Envoy Proxy. It runs as Kubernetes deployments, and the [features page](https://emissary-ingress.dev/docs/4.0/about/features-and-benefits/) says scaling it means changing the replicas in that deployment. The [install guide](https://emissary-ingress.dev/docs/4.0/topics/install/) recommends Helm and also describes plain Kubernetes YAML. It offers a Docker image for trying the gateway locally.

## Worth knowing

The project's README says the original parent company has stepped back from direct involvement, and that the community now carries the project. It is a CNCF Incubating project.
