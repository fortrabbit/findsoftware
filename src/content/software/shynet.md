---
id: shynet
name: Shynet
urls:
  repository: https://github.com/milesmcc/shynet
  docs: https://github.com/milesmcc/shynet/blob/master/GUIDE.md
category:
  - analytics
description: Self-hosted web analytics for websites that works without cookies, through a tracking script or a tracking pixel.
status: active
maintainer: Miles McCain
maintainerType: individual
firstRelease: 2020
language: python
basedOn:
  - django
databases:
  - postgres
  - sqlite
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker-image
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-03-15
githubStargazers: 3157
contributors: 38
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://api.github.com/repos/milesmcc/shynet
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/milesmcc/shynet/blob/master/GUIDE.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/milesmcc/shynet/blob/master/README.md
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/milesmcc/shynet/blob/master/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/milesmcc/shynet
    checkedAt: 2026-11-03
  - field: basedOn
    url: https://github.com/milesmcc/shynet/blob/master/README.md
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/milesmcc/shynet/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/milesmcc/shynet/blob/master/GUIDE.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/milesmcc/shynet/blob/master/GUIDE.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/milesmcc/shynet/blob/master/GUIDE.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/milesmcc/shynet/blob/master/GUIDE.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/milesmcc/shynet/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/milesmcc/shynet/blob/master/GUIDE.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/milesmcc/shynet/blob/master/GUIDE.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/milesmcc/shynet/blob/master/GUIDE.md
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/milesmcc/shynet/blob/master/GUIDE.md
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/milesmcc/shynet
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/milesmcc/shynet/blob/master/README.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/milesmcc/shynet/commits/v0.1.0
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/milesmcc/shynet/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/milesmcc/shynet/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/milesmcc/shynet
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/milesmcc/shynet/contributors
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Shynet is web analytics software written in Python on Django. A site is added as a service in the dashboard, which produces a tracking script to place on the pages; visitors without JavaScript are counted through a 1x1 tracking pixel. The README describes the tool as working without cookies and as keeping visitor data on the operator's own server. Each instance runs as a long-lived web server, and the documented deployments are a Docker image, Docker Compose, Heroku and Render. Data is stored in PostgreSQL or SQLite. The dashboard supports several users: administrators can share services with other users, and the dashboard data can be read through an API that takes a user token.

## Worth knowing

The [usage guide](https://github.com/milesmcc/shynet/blob/master/GUIDE.md) says Heroku's free Postgres add-on is unlikely to support an instance that records more than a few hundred requests per day. Every tracked page needs the script tag that points at the instance.
