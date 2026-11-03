---
id: jsreport
name: jsreport
urls:
  home: https://jsreport.net
  repository: https://github.com/jsreport/jsreport
  docs: https://jsreport.net/learn
  pricing: https://jsreport.net/buy
category:
  - media
description: Open-source reporting server that renders PDF, Excel, DOCX and other documents from HTML and JavaScript templates.
status: active
maintainer: jsreport
firstRelease: 2014
hqCountry: CZ
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
contentStore:
  - flat-file
databases:
  - sqlserver
  - postgres
  - mongodb
  - oracle
adminUi: true
headlessApi:
  - rest
templating: handlebars, jsrender
runsAs:
  - always-on
installMethod: npm
licenseModel: open-core
license: LGPL-3.0, commercial, an enterprise license needed beyond 5 report templates on premise, commercial End User License Agreement for the commercial software
currentMajor: "4"
latestReleaseDate: 2026-10-23
githubStargazers: 1323
npmWeeklyDownloads: 6089
contributors: 23
social:
  forum: https://forum.jsreport.net
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://jsreport.net
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/jsreport/jsreport
    checkedAt: 2026-11-03
  - field: urls
    url: https://jsreport.net
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://jsreport.net/about
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://jsreport.net/about
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/jsreport/jsreport/blob/master/executable-license.txt
    checkedAt: 2026-11-03
  - field: license
    url: https://jsreport.net/on-prem
    checkedAt: 2026-11-03
  - field: license
    url: https://jsreport.net/terms-of-use-commercial.txt
    checkedAt: 2026-11-03
  - field: category
    url: https://jsreport.net/learn/get-started
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/jsreport/jsreport
    checkedAt: 2026-11-03
  - field: runtime
    url: https://jsreport.net/learn/get-started
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://registry.npmjs.org/jsreport/4.15.0
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://jsreport.net/learn/docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://jsreport.net/on-prem
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://jsreport.net/learn/docker
    checkedAt: 2026-11-03
  - field: contentStore
    url: https://jsreport.net/learn/template-stores
    checkedAt: 2026-11-03
  - field: databases
    url: https://jsreport.net/learn/template-stores
    checkedAt: 2026-11-03
  - field: databases
    url: https://jsreport.net/learn/template-stores
    checkedAt: 2026-11-03
  - field: databases
    url: https://jsreport.net/learn/template-stores
    checkedAt: 2026-11-03
  - field: databases
    url: https://jsreport.net/learn/template-stores
    checkedAt: 2026-11-03
  - field: templating
    url: https://jsreport.net/learn/templating-engines
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://jsreport.net
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://jsreport.net
    checkedAt: 2026-11-03
  - field: urls
    url: https://jsreport.net/buy
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/jsreport/jsreport/releases/tag/4.15.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/jsreport/jsreport/releases/tag/4.15.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://jsreport.net/about
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-23:2026-10-29/jsreport
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/jsreport/jsreport
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/jsreport/jsreport/contributors
    checkedAt: 2026-11-03
ai: authored
i18n: null
renderingModes: null
packagistDownloads: null
---

jsreport is an open-source reporting server that runs on Node.js and produces reports from HTML and JavaScript templates. It renders PDF, Excel, DOCX, HTML and CSV outputs, and it offers a web-based designer, a REST API and a command line tool. Templates are written with handlebars or jsrender, and they are stored on the file system by default, with store extensions for SQL Server, PostgreSQL, MongoDB and Oracle.

The [install page](https://jsreport.net/on-prem) starts the server with npm and the [Docker page](https://jsreport.net/learn/docker) runs it as a container. The Docker page suggests running the container as a daemon with a restart policy, which keeps the server running across reboots.

## Worth knowing

On-premise use is free up to five report templates. Beyond that a commercial enterprise license is needed, and the commercial End User License Agreement governs that software. The repository is licensed under the LGPL.
