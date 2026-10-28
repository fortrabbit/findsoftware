---
id: cert-manager
name: cert-manager
urls:
  home: https://cert-manager.io
  repository: https://github.com/cert-manager/cert-manager
  docs: https://cert-manager.io/docs/
category:
  - web-server
description: Kubernetes controller that issues and renews X.509 TLS certificates for workloads in a Kubernetes or OpenShift cluster.
status: active
maintainer: The cert-manager Authors
maintainerType: community
firstRelease: 2017
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: kubectl-apply
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-23
githubStargazers: 14138
contributors: 382
social:
  x: https://twitter.com/CertManager
  mastodon: https://infosec.exchange/@CertManager
  forum: https://groups.google.com/forum/#!forum/cert-manager-dev
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://cert-manager.io/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/cert-manager/cert-manager
    checkedAt: 2026-10-28
  - field: urls
    url: https://cert-manager.io/docs/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://cert-manager.io/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/cert-manager/cert-manager/releases
    checkedAt: 2026-10-28
  - field: category
    url: https://cert-manager.io/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/cert-manager/cert-manager
    checkedAt: 2026-10-28
  - field: runtime
    url: https://api.github.com/repos/cert-manager/cert-manager
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://cert-manager.io/docs/installation/best-practice/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://cert-manager.io/docs/installation/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://cert-manager.io/docs/installation/helm/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://cert-manager.io/docs/installation/
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/cert-manager/cert-manager
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://api.github.com/repos/cert-manager/cert-manager
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/cert-manager/cert-manager/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/cert-manager/cert-manager/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/cert-manager/cert-manager
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/cert-manager/cert-manager/contributors?per_page=1
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

cert-manager is a controller for Kubernetes and OpenShift clusters that creates TLS certificates for workloads running in the cluster and renews them before they expire. It automates certificates for Ingress with TLS. It is installed into the cluster with static manifests through kubectl apply, through the Helm chart, or with the cmctl command.

The installation guide's section on availability suggests two replicas of the controller and cainjector components, so that a standby pod can take leadership when the active pod is disrupted. The project was created by Jetstack and donated to the Cloud Native Computing Foundation in 2020, and its authors are named in the site footer.

## Worth knowing

cert-manager is a cluster component: it needs a Kubernetes or OpenShift cluster to run, and the Helm route is described for both platforms.
