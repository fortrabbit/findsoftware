---
id: jsharmony-cms
name: jsHarmony CMS
urls:
  home: https://www.jsharmonycms.com
  repository: https://github.com/apHarmony/jsharmony-cms
  docs: https://www.jsharmonycms.com/resources/documentation/
  pricing: https://www.jsharmonycms.com/pricing/
category:
  - cms
description: Node.js content management system with in-page editing, built on the jsHarmony framework and publishing static pages.
status: active
maintainer: apHarmony
firstRelease: 2019
hqCountry: US
language: javascript
runtime:
  - node
hosting:
  - node
  - static
databases:
  - sqlite
  - sqlserver
  - postgres
adminUi: true
runsAs:
  - always-on
  - static
renderingModes:
  - static
installMethod: npm global jsharmony-cli, then jsharmony create project
licenseModel: open-source
license: LGPL-3.0
currentMajor: "2"
latestReleaseDate: 2026-10-08
githubStargazers: 8
npmWeeklyDownloads: 24
contributors: 3
dependentRepos: 1
dependentPackages: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://www.jsharmonycms.com
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/apHarmony/jsharmony-cms
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/apHarmony/jsharmony-cms/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/apHarmony/jsharmony-cms/blob/master/package.json
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://www.jsharmonycms.com
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/apHarmony/jsharmony-cms
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/apHarmony/jsharmony-cms/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/apHarmony/jsharmony-cms-sample/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/apHarmony/jsharmony-cms-sample/blob/master/README.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/apHarmony/jsharmony-cms/blob/master/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://www.jsharmonycms.com
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/apHarmony/jsharmony-cms/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://www.jsharmonycms.com/blog/jsharmony-static-cms/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/apHarmony/jsharmony-cms/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/apHarmony/jsharmony-cms
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://www.jsharmonycms.com/pricing/
    checkedAt: 2026-10-23
  - field: urls
    url: https://www.jsharmonycms.com/pricing/
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/jsharmony-cms
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/jsharmony-cms/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/jsharmony-cms
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/apHarmony/jsharmony-cms
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/apHarmony/jsharmony-cms/contributors?per_page=1
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/jsharmony-cms
    checkedAt: 2026-10-23
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/jsharmony-cms
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/jsharmony-cms
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
---

jsHarmony CMS is a Node.js content management system with in-page editing, published by apHarmony. Editors change page content and components inside the page itself, and the CMS runs on the jsHarmony framework, configured in app.config.js, with SQLite, MSSQL or PostgreSQL as its database.

The CMS is installed with the jsharmony-cli npm package, which creates a project from the sample or empty project repository, and the server is started with node app.js. Editing happens in that web application; the [deployment targets](https://www.jsharmonycms.com/resources/documentation/deployment-targets/) page describes publishing the site files to SFTP, FTP, S3, Git, a local folder or a CMS deployment host, and users can be granted access to targets by role. One instance can hold several sites.

## Worth knowing

The software is licensed under LGPL-3.0. The starter templates that ship with it come from other authors under CC BY 3.0 licenses. The [pricing page](https://www.jsharmonycms.com/pricing/) lists a free self-hosted option next to paid hosting and support plans.
