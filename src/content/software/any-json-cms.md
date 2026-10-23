---
id: any-json-cms
name: Any JSON CMS
urls:
  repository: https://github.com/evmizulin/any-json-cms
category:
  - headless-cms
description: Open source headless CMS that manages JSON models and entries and serves them through an API key protected endpoint.
status: stub
maintainer: Evgeny Mizulin
maintainerType: individual
firstRelease: 2019
runtime:
  - node
hosting:
  - node
runtimeMin: node 8
contentStore:
  - database
databases:
  - mongodb
adminUi: true
installMethod: git clone and npm install, for the admin application server and the API server
licenseModel: open-source
license: GPL-3.0
currentMajor: "1"
githubStargazers: 130
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/evmizulin/any-json-cms
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/evmizulin/cms-api/master/package.json
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/evmizulin/cms-api/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/evmizulin/cms-admin/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/evmizulin/any-json-cms/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/evmizulin/cms-api/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/evmizulin/cms-api/blob/master/README.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/evmizulin/cms-api/blob/master/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/evmizulin/cms-admin/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/evmizulin/any-json-cms
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/evmizulin/any-json-cms/master/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/evmizulin/any-json-cms/tags
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/evmizulin/any-json-cms/commits/1.0.0
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/evmizulin/any-json-cms
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/evmizulin/any-json-cms/contributors
    checkedAt: 2026-10-23
figure:
  emoji: 🔌
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: Headless CMS
ai: authored
---

Any JSON CMS is a headless CMS that stores JSON models and entries and delivers them to other applications. It has two parts: an admin application server with a web interface, and an API server. The API server stores its data in MongoDB and sends e-mail through Sendmail. Both parts are Node.js programs installed by cloning their repositories and running `npm install`, and each reads a `config.js` file for its settings.

## Worth knowing

The repository has no release, only two tags, and its newest commit is from 2022.
