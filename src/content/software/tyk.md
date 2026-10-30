---
id: tyk
name: Tyk Gateway
urls:
  home: https://tyk.io
  repository: https://github.com/TykTechnologies/tyk
  docs: https://tyk.io/docs/tyk-open-source
  pricing: https://tyk.io/pricing/
category:
  - backend
description: Open source API and AI gateway written in Go that supports REST, GraphQL, TCP, gRPC and MCP traffic.
status: active
maintainer: Tyk Technologies Ltd
maintainerType: company
firstRelease: 2014
hqCountry: GB
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: docker image
licenseModel: open-core
license: MPL-2.0, commercial license (ee folder)
currentMajor: "5"
latestReleaseDate: 2026-10-27
githubStargazers: 10870
contributors: 116
social:
  x: https://twitter.com/tyk_io
  forum: https://community.tyk.io
  youtube: https://www.youtube.com/@TykAPIM
  facebook: https://www.facebook.com/Tyk.API.Management/
  instagram: https://www.instagram.com/tyk.api.experience/
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://tyk.io/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/TykTechnologies/tyk
    checkedAt: 2026-10-30
  - field: urls
    url: https://raw.githubusercontent.com/TykTechnologies/tyk/master/README.md
    checkedAt: 2026-10-30
  - field: urls
    url: https://tyk.io/pricing/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://tyk.io/terms-conditions/
    checkedAt: 2026-10-30
  - field: hqCountry
    url: https://tyk.io/about-us/
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://api.github.com/repos/TykTechnologies/tyk/releases
    checkedAt: 2026-10-30
  - field: category
    url: https://raw.githubusercontent.com/TykTechnologies/tyk/master/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/TykTechnologies/tyk
    checkedAt: 2026-10-30
  - field: runtime
    url: https://raw.githubusercontent.com/TykTechnologies/tyk/master/README.md
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://tyk.io/docs/apim/open-source/installation
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://tyk.io/docs/deployment-and-operations/tyk-open-source-api-gateway/quick-start
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://tyk.io/docs/apim/open-source/installation
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://tyk.io/docs/apim/open-source/installation
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://tyk.io/docs/apim/open-source/installation
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://tyk.io/docs/apim/open-source/installation
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://raw.githubusercontent.com/TykTechnologies/tyk/master/README.md
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://api.github.com/repos/TykTechnologies/tyk/releases
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://api.github.com/repos/TykTechnologies/tyk/releases/latest
    checkedAt: 2026-10-30
  - field: license
    url: https://raw.githubusercontent.com/TykTechnologies/tyk/master/LICENSE.md
    checkedAt: 2026-10-30
  - field: license
    url: https://raw.githubusercontent.com/TykTechnologies/tyk/master/ee/LICENSE-EE.md
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/TykTechnologies/tyk
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/TykTechnologies/tyk/contributors?per_page=1
    checkedAt: 2026-10-30
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Tyk Gateway is an open source API and AI gateway written in Go. The README lists REST, GraphQL, TCP, gRPC and MCP among the protocols it supports. The [quick start](https://tyk.io/docs/deployment-and-operations/tyk-open-source-api-gateway/quick-start) runs it in Docker. The install guide also covers a Helm chart for Kubernetes, an Ansible role, and packages for Ubuntu and for Red Hat or CentOS, and the packages start the gateway as a service. Tyk Technologies Ltd maintains it.

## Worth knowing

The gateway is dual-licensed. Code outside the ee folder is under the Mozilla Public License 2.0, and the ee folder is under a commercial license. The dashboard, developer portal, operator and multi data center bridge are paid components, and the README describes Tyk Self-Managed as the enterprise platform. Tyk Cloud is the hosted option. The open source gateway needs Redis.
