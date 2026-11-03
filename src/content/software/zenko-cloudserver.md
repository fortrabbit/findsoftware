---
id: zenko-cloudserver
name: Zenko CloudServer
urls:
  home: https://www.zenko.io/cloudserver
  repository: https://github.com/scality/cloudserver
  docs: https://s3-server.readthedocs.io/en/latest/
category:
  - database
description: Open-source Amazon S3-compatible object storage server that stores data on local files, in memory or in other clouds.
status: active
maintainer: Scality Inc.
maintainerType: company
firstRelease: 2016
hqCountry: US
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 24
runsAs:
  - always-on
  - local
installMethod: docker
licenseModel: open-source
license: Apache-2.0
currentMajor: "9"
latestReleaseDate: 2026-10-27
githubStargazers: 1954
contributors: 59
social:
  x: https://twitter.com/zenko
  forum: https://forum.zenko.io
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://github.com/scality/cloudserver/blob/development/9.6/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.zenko.io/cloudserver
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/scality/cloudserver
    checkedAt: 2026-11-03
  - field: urls
    url: https://s3-server.readthedocs.io/en/latest/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/scality/cloudserver
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://www.zenko.io/cloudserver
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/scality/cloudserver
    checkedAt: 2026-11-03
  - field: runtime
    url: https://www.zenko.io/cloudserver
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/scality/cloudserver/blob/9.5.2/package.json
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/scality/cloudserver/blob/development/9.6/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/scality/cloudserver/blob/development/9.6/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://s3-server.readthedocs.io/en/latest/GETTING_STARTED.html
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://s3-server.readthedocs.io/en/latest/ARCHITECTURE.html
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/scality/cloudserver/blob/development/9.6/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.scality.com/privacy-policy/
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.scality.com/privacy-policy/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/scality/cloudserver/releases/tag/9.5.2
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/scality/cloudserver/releases/tag/9.5.2
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://www.zenko.io/cloudserver
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/scality/cloudserver
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/scality/cloudserver
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Zenko CloudServer is an object storage server that implements the Amazon S3 API, so applications written against S3 can point at it. It is written in Node.js and runs as a server process; the README also describes running it in a test environment to emulate S3 locally. The [README](https://github.com/scality/cloudserver/blob/development/9.6/README.md) covers a file backend, an in-memory backend and several data backends at once, and it can be run as a Docker container or from a source checkout with yarn.

With the file backend, objects go to local directories; with the memory backend, to memory. With multiple backends, a request header with a location constraint picks the backend for each object. The project began as Scality S3 Server and is described as the core of Zenko, Scality's multi-cloud data controller.

## Worth knowing

The README's install section names Node.js and yarn versions that differ from the Node.js version the package requires, so check the package manifest before choosing a runtime. User management through Vault needs Vault, which the README calls proprietary and separate.
