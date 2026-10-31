---
id: activepieces
name: Activepieces
urls:
  home: https://www.activepieces.com
  repository: https://github.com/activepieces/activepieces
  docs: https://www.activepieces.com/docs
  pricing: https://www.activepieces.com/pricing
category:
  - backend
description: Workflow automation platform with a self-hostable server and an embeddable builder that a SaaS product can place inside its own app.
status: active
maintainer: Activepieces Inc.
maintainerType: company
firstRelease: 2023
hqCountry: US
language: javascript
databases:
  - postgres
adminUi: true
i18n: yes, UI translations managed on Crowdin
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: MIT, Activepieces Enterprise license (packages/ee)
currentMajor: "0"
latestReleaseDate: 2026-10-28
githubStargazers: 25303
contributors: 357
social:
  x: https://x.com/activepieces
  discord: https://discord.com/invite/2jUXBKDdP8
  forum: https://community.activepieces.com/
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://www.activepieces.com
    checkedAt: 2026-10-31
  - field: urls
    url: https://www.activepieces.com/docs
    checkedAt: 2026-10-31
  - field: urls
    url: https://www.activepieces.com/pricing
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/activepieces/activepieces
    checkedAt: 2026-10-31
  - field: category
    url: https://www.activepieces.com/docs/embedding/overview
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://github.com/activepieces/activepieces/blob/main/LICENSE
    checkedAt: 2026-10-31
  - field: hqCountry
    url: https://www.activepieces.com/terms
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/activepieces/activepieces/releases/tag/0.1.3
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/activepieces/activepieces
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/activepieces/activepieces/releases/tag/0.92.3-hotfix.2
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/activepieces/activepieces/releases/tag/0.92.3-hotfix.2
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/activepieces/activepieces/blob/main/LICENSE
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/activepieces/activepieces/blob/main/packages/ee/LICENSE
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://github.com/activepieces/activepieces/blob/main/LICENSE
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/activepieces/activepieces
    checkedAt: 2026-10-31
  - field: contributors
    url: https://github.com/activepieces/activepieces
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://www.activepieces.com/docs/install/overview
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://www.activepieces.com/docs/install/overview
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://www.activepieces.com/docs/install/overview
    checkedAt: 2026-10-31
  - field: databases
    url: https://www.activepieces.com/docs/install/overview
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://www.activepieces.com/docs/install/architecture/overview
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://www.activepieces.com/docs/install/options/docker-compose
    checkedAt: 2026-10-31
  - field: i18n
    url: https://www.activepieces.com/docs/about/i18n
    checkedAt: 2026-10-31
ai: authored
packagistDownloads: null
---

Activepieces is a workflow automation platform built by Activepieces Inc. of San Francisco. It runs as a self-hosted server, and the vendor also runs it as a cloud service. Its builder can be embedded in a SaaS product through an SDK, and the embedding docs describe a JSON Web Token that identifies each customer user and is passed to the SDK.

The Docker Compose install runs four containers, including PostgreSQL and Redis. Helm and a curl install script are also named on the install overview. The root of the repository is licensed under MIT Expat, and the packages/ee directory falls under the Enterprise license.

## Worth knowing

Embedding is available on the enterprise plan, according to the embedding docs. A license key unlocks paid features on a self-hosted instance, and the pricing page places SSO, SCIM and custom roles among the paid features.
