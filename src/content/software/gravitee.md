---
id: gravitee
name: Gravitee API Management
urls:
  home: https://www.gravitee.io
  repository: https://github.com/gravitee-io/gravitee-api-management
  docs: https://documentation.gravitee.io/apim/
  pricing: https://www.gravitee.io/pricing
category:
  - backend
description: API management platform with an API gateway, a management console and a developer portal, published as open source with an Enterprise Edition.
status: active
maintainer: Gravitee.io
maintainerType: company
firstRelease: 2015
language: java
runtime:
  - jvm
hosting:
  - java
databases:
  - mongodb
adminUi: true
runsAs:
  - always-on
installMethod: rpm-package
licenseModel: open-core
license: Apache-2.0
currentMajor: "4"
latestReleaseDate: 2026-10-23
githubStargazers: 465
contributors: 159
social:
  x: https://x.com/graviteeio
  forum: https://community.gravitee.io
  facebook: https://www.facebook.com/GraviteeSource
  instagram: https://www.instagram.com/gravitee.io/
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: name
    url: https://www.gravitee.io/platform/api-management
    checkedAt: 2026-10-29
  - field: urls
    url: https://www.gravitee.io
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/gravitee-io/gravitee-api-management
    checkedAt: 2026-10-29
  - field: urls
    url: https://documentation.gravitee.io/apim/
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://www.gravitee.io
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://www.gravitee.io
    checkedAt: 2026-10-29
  - field: category
    url: https://www.gravitee.io/platform/api-management
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/gravitee-io/gravitee-api-management
    checkedAt: 2026-10-29
  - field: runtime
    url: https://documentation.gravitee.io/apim/self-hosted-installation-guides/.zip
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://documentation.gravitee.io/apim/self-hosted-installation-guides
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://documentation.gravitee.io/apim/self-hosted-installation-guides
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://documentation.gravitee.io/apim/self-hosted-installation-guides
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://documentation.gravitee.io/apim/self-hosted-installation-guides
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://documentation.gravitee.io/apim/self-hosted-installation-guides/kubernetes/vanilla-kubernetes
    checkedAt: 2026-10-29
  - field: databases
    url: https://github.com/gravitee-io/gravitee-api-management/blob/master/README.md
    checkedAt: 2026-10-29
  - field: databases
    url: https://documentation.gravitee.io/apim/self-hosted-installation-guides/rpm
    checkedAt: 2026-10-29
  - field: adminUi
    url: https://documentation.gravitee.io/apim/getting-started
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/gravitee-io/gravitee-api-management
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://documentation.gravitee.io/apim/getting-started
    checkedAt: 2026-10-29
  - field: urls
    url: https://www.gravitee.io/pricing
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://documentation.gravitee.io/apim/self-hosted-installation-guides/rpm
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://github.com/gravitee-io/gravitee-api-management/tags
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://api.github.com/repos/gravitee-io/gravitee-api-management/commits/0.1.0
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://api.github.com/repos/gravitee-io/gravitee-api-management/commits/core_4.13.5
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/gravitee-io/gravitee-api-management
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/gravitee-io/gravitee-api-management/contributors
    checkedAt: 2026-10-29
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Gravitee API Management is an API gateway with a management console, where APIs are configured, and a developer portal, where consumers find and register for them. The Gateway and the Management API run on Java, and the Gateway runs as a service. The README's quick start brings up the console, the portal and the Gateway with a MongoDB database, and the self-hosted guides also install Elasticsearch. The [self-hosted guides](https://documentation.gravitee.io/apim/self-hosted-installation-guides) cover an RPM package, a zip download, Docker Compose and Docker CLI, and a Helm chart on Kubernetes.

## Worth knowing

The Enterprise Edition requires a license. Custom roles and OpenID Connect single sign-on are listed among its features on the [Enterprise Edition page](https://documentation.gravitee.io/apim/readme/enterprise-edition), so a deployment that needs them depends on that license. Gravitee Cloud runs the platform as a hosted service.
