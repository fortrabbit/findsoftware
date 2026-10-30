---
id: kgateway
name: kgateway
urls:
  home: https://kgateway.dev
  repository: https://github.com/kgateway-dev/kgateway
  docs: https://kgateway.dev/docs/envoy/latest/
category:
  - backend
  - web-server
description: Envoy-based API gateway and ingress controller for Kubernetes that implements the Kubernetes Gateway API.
status: active
maintainer: LF Projects, LLC
maintainerType: foundation
firstRelease: 2018
language: go
basedOn:
  - envoy
installMethod: helm
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-10-16
githubStargazers: 5728
contributors: 290
social:
  x: https://x.com/kgatewaydev
  bluesky: https://bsky.app/profile/kgateway.dev
  mastodon: https://mastodon.social/@kgateway
  youtube: https://www.youtube.com/@kgateway-dev
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://kgateway.dev/
    checkedAt: 2026-10-30
  - field: urls
    url: https://kgateway.dev/
    checkedAt: 2026-10-30
  - field: urls
    url: https://kgateway.dev/docs/envoy/latest/quickstart/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/kgateway-dev/kgateway
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://kgateway.dev/docs/envoy/latest/
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://kgateway.dev/docs/envoy/latest/
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://kgateway.dev/
    checkedAt: 2026-10-30
  - field: category
    url: https://kgateway.dev/
    checkedAt: 2026-10-30
  - field: basedOn
    url: https://github.com/kgateway-dev/kgateway/blob/main/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/kgateway-dev/kgateway
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://kgateway.dev/docs/envoy/latest/install/helm/
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/kgateway-dev/kgateway/releases/tag/v2.4.7
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/kgateway-dev/kgateway/releases/tag/v2.4.7
    checkedAt: 2026-10-30
  - field: license
    url: https://raw.githubusercontent.com/kgateway-dev/kgateway/main/LICENSE
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://raw.githubusercontent.com/kgateway-dev/kgateway/main/LICENSE
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/kgateway-dev/kgateway
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/kgateway-dev/kgateway/contributors?per_page=1
    checkedAt: 2026-10-30
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

kgateway is an API gateway and ingress controller for Kubernetes that implements the Kubernetes Gateway API. It is built on Envoy, and its control plane is installed into a cluster with Helm. The project was launched in 2018 as Gloo by Solo.io, and it is now maintained under LF Projects, LLC and is a Cloud Native Computing Foundation sandbox project.

## Worth knowing

kgateway is the successor to Gloo Gateway, and its own site says it was known as Gloo. Since a 2.x release the agentgateway control plane lives in a separate repository, so that project is not part of kgateway's own code.
