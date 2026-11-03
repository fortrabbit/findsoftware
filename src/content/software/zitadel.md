---
id: zitadel
name: ZITADEL
urls:
  home: https://zitadel.com
  repository: https://github.com/zitadel/zitadel
  docs: https://zitadel.com/docs
  pricing: https://zitadel.com/pricing
category:
  - auth
description: Multi-tenant identity platform for authentication and authorization, available as a self-hosted server or as a cloud service.
status: active
maintainer: Zitadel, Inc.
maintainerType: company
firstRelease: 2020
hqCountry: US
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
i18n: yes, self-service interfaces in several languages
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: AGPL-3.0, Commercial Enterprise License, Apache-2.0, MIT
currentMajor: "4"
latestReleaseDate: 2026-11-03
githubStargazers: 15502
contributors: 251
social:
  x: https://x.com/zitadel
  discord: https://discord.com/invite/zitadel
  forum: https://github.com/zitadel/zitadel/discussions
  youtube: https://www.youtube.com/@zitadel
  facebook: https://www.facebook.com/zitadel.social
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://zitadel.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://zitadel.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/zitadel/zitadel
    checkedAt: 2026-11-03
  - field: urls
    url: https://zitadel.com/docs
    checkedAt: 2026-11-03
  - field: urls
    url: https://zitadel.com/pricing
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/zitadel/zitadel
    checkedAt: 2026-11-03
  - field: license
    url: https://zitadel.com/self-hosted
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/zitadel/zitadel/blob/main/LICENSING.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/zitadel/zitadel/blob/main/LICENSING.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://zitadel.com/self-hosted
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/zitadel/zitadel
    checkedAt: 2026-11-03
  - field: runtime
    url: https://zitadel.com/docs/concepts/architecture/software
    checkedAt: 2026-11-03
  - field: category
    url: https://zitadel.com
    checkedAt: 2026-11-03
  - field: databases
    url: https://zitadel.com/docs/concepts/architecture/software
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://zitadel.com/docs/self-hosting/deploy/overview
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://zitadel.com/docs/self-hosting/deploy/overview
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://zitadel.com/docs/concepts/architecture/software
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://zitadel.com/docs/apis/introduction
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://zitadel.com/docs/concepts/architecture/software
    checkedAt: 2026-11-03
  - field: i18n
    url: https://zitadel.com/docs/concepts/features/selfservice
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://zitadel.com/docs/legal/policies/privacy-policy
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://zitadel.com/docs/legal/policies/privacy-policy
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/zitadel/zitadel/releases/tag/v4.20.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/zitadel/zitadel/releases/tag/v4.20.1
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/zitadel/zitadel/releases/tag/v0.0.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/zitadel/zitadel
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/zitadel/zitadel
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

ZITADEL is an identity platform for authentication and authorization, written in Go. It implements OpenID Connect, OAuth 2.0 and SAML, offers role-based access control and includes a management console. Its APIs are described as gRPC and REST. The [architecture page](https://zitadel.com/docs/concepts/architecture/software) says each binary contains all the components needed to serve traffic, and the [self-hosting overview](https://zitadel.com/docs/self-hosting/deploy/overview) names the container images and an official Helm chart as the ways to deploy it. The architecture page lists PostgreSQL as the supported database.

The project is maintained by Zitadel, Inc. and is also offered as ZITADEL Cloud, a managed SaaS, which the [cloud page](https://zitadel.com/zitadel-cloud) describes.

## Worth knowing

The community edition is licensed under the AGPLv3. A commercial enterprise license replaces that license and comes with a paid enterprise edition, as the [self-hosted page](https://zitadel.com/self-hosted) explains. The login UI and the client packages are under the MIT license, and the API definitions under Apache 2.0. The Linux install guide says it does not work for ZITADEL 4 and points to the Docker version.
