---
id: tooljet
name: ToolJet
urls:
  home: https://tooljet.com
  repository: https://github.com/ToolJet/ToolJet
  docs: https://docs.tooljet.com
  pricing: https://tooljet.com/pricing
category:
  - admin-panel
description: Open-source low-code platform for building internal tools and dashboards on existing databases and APIs, self-hosted or as ToolJet Cloud.
status: active
maintainer: ToolJet Solutions, Inc.
maintainerType: company
firstRelease: 2021
hqCountry: US
language: javascript
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-core
license: AGPL-3.0
currentMajor: "3"
latestReleaseDate: 2026-11-03
githubStargazers: 41183
contributors: 407
social:
  x: https://twitter.com/ToolJet
  subreddit: https://www.reddit.com/r/ToolJet/
  youtube: https://www.youtube.com/channel/UCf1p2G5Z7fPpvlBPf4l2I1w
  facebook: https://www.facebook.com/ToolJet.io
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://tooljet.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://tooljet.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/ToolJet/ToolJet
    checkedAt: 2026-11-03
  - field: urls
    url: https://raw.githubusercontent.com/ToolJet/ToolJet/main/README.md
    checkedAt: 2026-11-03
  - field: category
    url: https://tooljet.com
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://docs.tooljet.com/docs/user-management/authentication/self-hosted/overview/
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://docs.tooljet.com/docs/user-management/authentication/self-hosted/overview/
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://tooljet.com/terms
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/ToolJet/ToolJet
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.tooljet.com/docs/setup/docker/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.tooljet.com/docs/setup/ami/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.tooljet.com/docs/setup/helm/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.tooljet.com/docs/setup/kubernetes/
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.tooljet.com/docs/setup/docker/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.tooljet.com/docs/user-management/authentication/self-hosted/overview/
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://docs.tooljet.com/api/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/ToolJet/ToolJet
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://raw.githubusercontent.com/ToolJet/ToolJet/main/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://tooljet.com/pricing
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/ToolJet/ToolJet/releases/tag/v3.20.253-lts
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/ToolJet/ToolJet/releases/tag/v3.20.253-lts
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/ToolJet/ToolJet/releases/tag/v0.5.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/ToolJet/ToolJet
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/ToolJet/ToolJet
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

ToolJet is a builder for internal tools and dashboards. Its visual app builder connects to databases, APIs and SaaS data sources, and built apps can be embedded in other applications. ToolJet runs as a server that the [Docker guide](https://docs.tooljet.com/docs/setup/docker/) deploys with Docker Compose, and the same docs cover Helm and an AWS AMI. PostgreSQL holds application definitions and encrypted data source credentials. Instance administrators manage the server from a settings page. ToolJet Solutions, Inc. maintains the project, and ToolJet Cloud is its hosted version.

## Worth knowing

The Community Edition is AGPL-3.0, and the README describes a separate Enterprise set on top of it. The licensing docs say a self-hosted instance needs a Trial or Paid license key for premium features such as OpenID SSO login and audit logs, and the README places role-based access control, SCIM provisioning and workflows under the Enterprise set. The README also lists SSO support in the Community Edition, which the licensing docs do not match.
