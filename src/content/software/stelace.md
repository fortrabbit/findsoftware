---
id: stelace
name: Stelace
urls:
  home: https://stelace.com
  repository: https://github.com/stelace/stelace
  docs: https://stelace.com/docs
  pricing: https://stelace.com/pricing
category:
  - backend
description: Open-source marketplace backend and API server in Node.js, with search, user, transaction, event and content APIs.
status: stub
maintainer: Sharinplace SAS
maintainerType: company
firstRelease: 2019
hqCountry: FR
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 12
databases:
  - postgres
adminUi: false
headlessApi:
  - rest
installMethod: git clone and docker-compose
licenseModel: open-core
license: GPL-3.0
githubStargazers: 317
contributors: 5
social:
  x: https://twitter.com/StelaceAPI
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: name
    url: https://github.com/stelace/stelace
    checkedAt: 2026-10-23
  - field: urls
    url: https://stelace.com
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/stelace/stelace
    checkedAt: 2026-10-23
  - field: urls
    url: https://stelace.com/docs
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/stelace/stelace
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/stelace/stelace
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/stelace/stelace
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/stelace/stelace
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/stelace/stelace
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/stelace/stelace
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/stelace/stelace
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/stelace/stelace
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://stelace.com
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/stelace/stelace
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/stelace/stelace
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://stelace.com/legal/terms
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/stelace/stelace/releases/tag/v1.0.0-beta.0
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://github.com/stelace/stelace
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/stelace/stelace/contributors?per_page=1
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/stelace/stelace
    checkedAt: 2026-10-23
figure:
  emoji: 🏗️
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Backend
ai: authored
packagistDownloads: null
---

Stelace is an open-source backend and API server for marketplaces, written in JavaScript for Node.js, with a REST API and OpenID support for SSO connections. The README lists search and matchmaking over assets, user authentication, a transaction process, events and webhooks, workflows, a content management API and a plugin system. The repository is started with Docker Compose, and PostgreSQL holds the data.

The admin dashboard is not in the repository. The README says it is tied to the hosted Stelace offer and is not open-source, and the company's homepage describes a commercial license with Enterprise support alongside running one's own instance. The code is licensed GPL-3.0. Sharinplace SAS holds the copyright and is a French company.

## Worth knowing

No stable release is tagged; the newest tagged version is a pre-release. The README lists Elasticsearch and Redis as requirements next to PostgreSQL.
