---
id: freshlytics
name: Freshlytics
urls:
  repository: https://github.com/sheshbabu/freshlytics
  docs: https://github.com/sheshbabu/freshlytics/blob/master/docs/README.md
category:
  - analytics
description: Self-hosted web analytics service that records page views through a tracking snippet, with a dashboard for several projects.
status: stub
maintainer: Sheshbabu
maintainerType: individual
firstRelease: 2019
language: javascript
runtime:
  - node
hosting:
  - node
databases:
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: Docker Compose file using the freshlytics/freshlytics image
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2020-04-12
githubStargazers: 362
contributors: 5
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://api.github.com/repos/sheshbabu/freshlytics
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/sheshbabu/freshlytics/blob/master/docs/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/sheshbabu/freshlytics/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/sheshbabu/freshlytics
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/sheshbabu/freshlytics/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/sheshbabu/freshlytics/blob/1.1.0/package.json
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/sheshbabu/freshlytics/blob/master/docs/troubleshooting.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/sheshbabu/freshlytics/blob/master/docs/installation.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/sheshbabu/freshlytics/blob/master/docs/development.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/sheshbabu/freshlytics/blob/master/docs/installation.md
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/sheshbabu/freshlytics
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/sheshbabu/freshlytics/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/sheshbabu/freshlytics/tags
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/sheshbabu/freshlytics/tags
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/sheshbabu/freshlytics/tags
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/sheshbabu/freshlytics
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/sheshbabu/freshlytics/contributors
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/sheshbabu/freshlytics/blob/master/docs/usage.md
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Freshlytics is a self-hosted web analytics service written in TypeScript and run on Node. A site adds a tracking snippet to the head of its pages, which sends page views to the instance, and a dashboard shows them by page URL, referrer, browser and date range across several projects. Users are either admins, who manage projects and other users, or regular users. The instance stores its data in PostgreSQL through the PipelineDB image that the installation guide names, and the guide runs the service with Docker Compose.

## Worth knowing

The project's own pages say it uses no cookies and collects no personally identifiable information. Its installation guide depends on PipelineDB for data storage, and the database is recorded as PostgreSQL because the guide's image is a PostgreSQL build. The project publishes tags without GitHub releases, and the newest tag is the release date the record shows.
