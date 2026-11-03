---
id: convoy
name: Convoy
urls:
  home: https://getconvoy.io
  repository: https://github.com/frain-dev/convoy
  docs: https://docs.getconvoy.io/
  pricing: https://getconvoy.io/pricing
category:
  - backend
description: Webhooks gateway that ingests, stores, retries and delivers webhook events, run as a self-hosted server and agent or as a hosted cloud service.
status: active
maintainer: Frain Technologies Inc.
maintainerType: company
parent: Frain Technologies
firstRelease: 2021
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
adminUi: true
installMethod: shell install script (curl), starts Docker services
licenseModel: source-available
license: Elastic-2.0, Software License Agreement, licensed solely for Licensee's internal business purposes
latestReleaseDate: 2026-10-20
githubStargazers: 2888
contributors: 41
social:
  x: https://twitter.com/getconvoy
  forum: https://community.getconvoy.io
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://getconvoy.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/frain-dev/convoy
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.getconvoy.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://getconvoy.io/pricing
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://docs.getconvoy.io/legal/software-license-agreement
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://docs.getconvoy.io/legal/software-license-agreement
    checkedAt: 2026-11-03
  - field: parent
    url: https://github.com/frain-dev/convoy/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/frain-dev/convoy
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/frain-dev/convoy
    checkedAt: 2026-11-03
  - field: runtime
    url: https://api.github.com/repos/frain-dev/convoy
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.getconvoy.io/deployment/install-convoy/docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.getconvoy.io/deployment/install-convoy/docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.getconvoy.io/deployment/install-convoy/kubernetes
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/frain-dev/convoy/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: license
    url: https://docs.getconvoy.io/legal/software-license-agreement
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/frain-dev/convoy/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/frain-dev/convoy
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.getconvoy.io/deployment/install-convoy/kubernetes
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.getconvoy.io/deployment/install-convoy/kubernetes
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/frain-dev/convoy/releases/tag/v26.9.2
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/frain-dev/convoy/releases/tag/v0.1.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/frain-dev/convoy
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/frain-dev/convoy/contributors
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Convoy is a webhooks gateway written in Go. It runs as a server and an agent, which can be scaled independently, and it includes a dashboard. The Kubernetes guide lists Postgres and Redis instances as prerequisites. It installs with a one-line script for trying it on a local machine, with Docker Compose from a cloned repository, or with a Helm chart for Kubernetes. The Helm chart installs Bitnami Postgres and Redis by default for evaluation.

## Worth knowing

The repository's Elastic License 2.0 does not allow offering the software to third parties as a hosted or managed service. The documentation's Software License Agreement limits use to the licensee's internal business purposes and forbids distributing the software to third parties. Both statements are current.

Premium and Enterprise are paid editions. A self-hosted instance enables them with a license key, and Enterprise adds SAML SSO. The vendor also runs a cloud version of the gateway.
