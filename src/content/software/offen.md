---
id: offen
name: Offen Fair Web Analytics
urls:
  home: https://www.offen.dev
  repository: https://github.com/offen/offen
  docs: https://docs.offen.dev
category:
  - analytics
description: Self-hosted web analytics that collects usage data only after visitors opt in and encrypts it end-to-end.
status: active
maintainer: Offen Fair Web Analytics Authors
maintainerType: community
firstRelease: 2020
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
  - mysql
  - postgres
adminUi: true
i18n: English, French, German, Portuguese, Spanish and Vietnamese
runsAs:
  - always-on
installMethod: single binary tarball from get.offen.dev
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2024-05-22
githubStargazers: 982
contributors: 14
social:
  mastodon: https://fosstodon.org/@offen
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.offen.dev/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/offen/offen
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.offen.dev/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/offen/offen/development/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://docs.offen.dev/developing-offen/programming-languages/
    checkedAt: 2026-11-03
  - field: category
    url: https://docs.offen.dev/
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.offen.dev/running-offen/downloads-distributions/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.offen.dev/running-offen/installation-requirements/
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.offen.dev/running-offen/installation-requirements/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.offen.dev/running-offen/downloads-distributions/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.offen.dev/running-offen/downloads-distributions/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.offen.dev/running-offen/tutorials/configuring-deploying-offen-docker/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.offen.dev/get-started/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.offen.dev/get-started/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.offen.dev/get-started/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/offen/offen/blob/development/README.md
    checkedAt: 2026-11-03
  - field: i18n
    url: https://github.com/offen/offen/blob/development/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://raw.githubusercontent.com/offen/offen/development/REUSE.toml
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/offen/offen/blob/development/README.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/offen/offen/releases
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/offen/offen/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/offen/offen/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/offen/offen
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/offen/offen/contributors
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Offen Fair Web Analytics is web analytics for operators who want usage statistics for their own websites. Visitors opt in through a consent banner, whose colors, shape and font can be customized. The instance runs on the operator's server and is served over HTTPS, and it has an Auditorium interface for operators and for the users whose data it holds. The [installation requirements](https://docs.offen.dev/running-offen/installation-requirements/) say the process must always be running and restart on failure.

The instance is installed from a single binary, a Docker image, a deb package for Ubuntu and Debian, or through deploy routes for Heroku, Uberspace and YunoHost. It stores data in SQLite, MySQL or PostgreSQL. The pages place the tracking script on each website with a script tag that points to the instance, and recommend a subdomain of the website's own domain for the instance. The project describes usage data as encrypted end to end and deleted after six months.

## Worth knowing

The docs advise against running the instance behind a reverse proxy.
