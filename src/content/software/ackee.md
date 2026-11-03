---
id: ackee
name: Ackee
urls:
  home: https://ackee.electerious.com
  repository: https://github.com/electerious/Ackee
  docs: https://github.com/electerious/Ackee/blob/master/README.md
category:
  - analytics
description: Self-hosted web analytics tool built with Node.js and MongoDB, which runs on the operator's own server and reports on the traffic of their websites.
status: active
maintainer: Tobias Reich
maintainerType: individual
firstRelease: 2019
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 24
databases:
  - mongodb
adminUi: true
headlessApi:
  - graphql
runsAs:
  - always-on
installMethod: docker-compose
licenseModel: open-source
license: MIT, The MIT License (MIT)
currentMajor: "3"
latestReleaseDate: 2026-10-23
githubStargazers: 4722
contributors: 45
httpArchiveSites: 184
social:
  x: https://twitter.com/getackee
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://ackee.electerious.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/electerious/Ackee
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/electerious/Ackee/blob/master/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/electerious/Ackee/blob/v3.7.1/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/electerious/Ackee/releases
    checkedAt: 2026-11-03
  - field: category
    url: https://ackee.electerious.com
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/electerious/Ackee
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/electerious/Ackee/blob/master/docs/API.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/electerious/Ackee
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/electerious/Ackee/blob/v3.7.1/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://ackee.electerious.com
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/electerious/Ackee/releases/tag/v3.7.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/electerious/Ackee/releases/tag/v3.7.1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/electerious/Ackee
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/electerious/Ackee/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Ackee is a web analytics server that its operator runs on their own infrastructure. The server is a Node.js process that keeps visit data in a MongoDB database, shows the statistics in its own interface, and offers a GraphQL API that other tools can query. Each site to be measured adds a tracking script that sends its visits to the server, so the analytics data stays on the operator's side.

The [get-started guide](https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md) describes a Docker Compose setup with MongoDB included, a single Docker container, a source install, a Helm chart maintained outside the project, and deploy routes on several hosting platforms. The guide recommends placing the server behind a reverse proxy on a subdomain, with SSL and CORS headers configured separately.

## Worth knowing

The FAQ states that one Ackee instance serves one user account, and that several instances can share the same MongoDB.
