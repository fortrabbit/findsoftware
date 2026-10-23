---
id: contember
name: Contember
urls:
  home: https://www.contember.com
  repository: https://github.com/contember/contember
  docs: https://docs.contember.com
category:
  - headless-cms
  - backend
description: Open-source platform for building data-driven web applications, with a GraphQL API, PostgreSQL and a React administration interface.
status: active
maintainer: Contember Limited
maintainerType: company
firstRelease: 2020
language: javascript
contentStore:
  - database
databases:
  - postgres
adminUi: true
headlessApi:
  - graphql
i18n: yes, multi-language and translatable apps
runsAs:
  - always-on
installMethod: npx @contember/create
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-07-14
githubStargazers: 192
npmWeeklyDownloads: 522
contributors: 28
social:
  x: https://twitter.com/contember
  forum: https://github.com/orgs/contember/discussions
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://www.contember.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/contember/contember
    checkedAt: 2026-10-23
  - field: urls
    url: https://docs.contember.com/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/contember/contember/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/contember/contember
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/contember/contember/releases
    checkedAt: 2026-10-23
  - field: category
    url: https://docs.contember.com/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/contember/contember/blob/main/README.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/contember/contember/blob/main/README.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://github.com/contember/contember/blob/main/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/contember/contember/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.contember.com/intro/installation
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.contember.com/guides/self-hosted-contember
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.contember.com/intro/installation
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://docs.contember.com/guides/self-hosted-contember
    checkedAt: 2026-10-23
  - field: i18n
    url: https://docs.contember.com/
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/contember/contember/main/LICENSE
    checkedAt: 2026-10-23
  - field: license
    url: https://registry.npmjs.org/@contember/interface/latest
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/contember/contember/main/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/contember/contember/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@contember%2finterface
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/contember/contember
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/contember/contember/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@contember/interface
    checkedAt: 2026-10-23
figure:
  emoji: 🔌
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Headless CMS
ai: authored
packagistDownloads: null
---

Contember is an open-source platform for building data-driven web applications. Developers describe the data model in TypeScript, and the engine provides a GraphQL API over a PostgreSQL database, with role-based access control and sign-in through OpenID Connect providers. The administration interface is built with Contember Interface, a React framework described in the docs. New projects start from the @contember/create scaffold, which installs Contember Interface, and the engine is published as a Docker image for self-hosting.

## Worth knowing

The company's homepage now leads with Contember Fabrika, a managed platform for building company apps, and lists the open-source framework and Contember Cloud among its products. Contember Cloud is the managed hosting option next to self-hosting. The GitHub API does not detect the license, while the LICENSE file names Apache License 2.0 for the content outside the third-party components.
