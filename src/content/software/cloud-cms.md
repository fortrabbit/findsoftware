---
id: cloud-cms
name: Cloud CMS
urls:
  home: https://gitana.io
  docs: https://gitana.io/documentation
  pricing: https://gitana.io/pricing
category:
  - cms
description: Enterprise content management platform with a REST and GraphQL API, offered hosted by its maker or self-managed on Kubernetes.
status: stub
maintainer: Gitana Software, Inc.
maintainerType: company
hqCountry: US
contentStore:
  - database
databases:
  - mongodb
adminUi: true
headlessApi:
  - rest
  - graphql
i18n: yes, multilingual content in the Starter plan
runsAs:
  - always-on
installMethod: Docker images and Kubernetes configuration files with Helm charts, delivered to subscription customers
licenseModel: commercial
license: proprietary
latestReleaseDate: 2026-09-07
social:
  bluesky: https://bsky.app/profile/gitana.bsky.social
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://gitana.io/
    checkedAt: 2026-10-23
  - field: category
    url: https://gitana.io/pricing
    checkedAt: 2026-10-23
  - field: urls
    url: https://gitana.io/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://gitana.io/privacy
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://gitana.io/privacy
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://gitana.io/pricing
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://gitana.io/
    checkedAt: 2026-10-23
  - field: i18n
    url: https://gitana.io/pricing
    checkedAt: 2026-10-23
  - field: urls
    url: https://gitana.io/pricing
    checkedAt: 2026-10-23
  - field: license
    url: https://gitana.io/pricing/self-managed
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://gitana.io/releases
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://gitana.io/documentation/gitana/4.0/self-managed/kits
    checkedAt: 2026-10-23
  - field: databases
    url: https://gitana.io/documentation/gitana/4.0/self-managed/kits
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://gitana.io/documentation/gitana/4.0/self-managed/docker
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://gitana.io/releases
    checkedAt: 2026-10-23
  - field: status
    url: https://gitana.io/documentation/gitana/4.0/self-managed/kubernetes
    checkedAt: 2026-10-23
ai: authored
---

Cloud CMS is an enterprise content platform from Gitana Software, Inc. in Boston, which brands its website as Gitana. Editors work in a form-based editorial interface, and content is read through a REST API or a GraphQL API. MongoDB is the primary data store.

The platform is offered hosted by the company, or self-managed under a commercial license: subscription customers receive Docker images, Kubernetes configuration files and Helm charts and run the services as long-running containers. The [Docker documentation](https://gitana.io/documentation/gitana/4.0/self-managed/docker) describes the images.

## Worth knowing

The record is a stub. The 4.0 Kubernetes configuration files are available from support on request, and the Docker Compose route is described as deprecated, so no public installation documentation is known. Public install docs or images would settle it.

A free Developer Edition is listed. Single sign-on is listed from the Business plan; the [pricing page](https://gitana.io/pricing) describes the hosted plans.
