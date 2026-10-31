---
id: baserow
name: Baserow
urls:
  home: https://baserow.io
  repository: https://github.com/baserow/baserow
  docs: https://baserow.io/docs/index
  pricing: https://baserow.io/pricing
category:
  - admin-panel
  - database
description: No-code platform for building databases, applications and automations, available as a hosted cloud or self-hosted.
status: active
maintainer: Baserow B.V.
maintainerType: company
firstRelease: 2020
hqCountry: NL
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.14
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
i18n: yes, six interface languages (English, French, Dutch, German, Italian, Spanish)
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: MIT, Baserow Premium Edition license (PE License), Baserow Enterprise Edition license (EE License), CC-BY-SA-4.0 (docs directory)
currentMajor: "2"
latestReleaseDate: 2026-10-13
githubStargazers: 6246
contributors: 54
social:
  x: https://twitter.com/baserow
  forum: https://community.baserow.io/
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://baserow.io
    checkedAt: 2026-10-31
  - field: urls
    url: https://baserow.io/docs/index
    checkedAt: 2026-10-31
  - field: urls
    url: https://baserow.io/pricing
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/baserow/baserow
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://baserow.io/terms/subscription
    checkedAt: 2026-10-31
  - field: hqCountry
    url: https://baserow.io/terms/subscription
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/baserow/baserow/tree/0.0.1
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/baserow/baserow
    checkedAt: 2026-10-31
  - field: runtime
    url: https://github.com/baserow/baserow/blob/2.4.1/backend/pyproject.toml
    checkedAt: 2026-10-31
  - field: runtimeMin
    url: https://github.com/baserow/baserow/blob/2.4.1/backend/pyproject.toml
    checkedAt: 2026-10-31
  - field: category
    url: https://github.com/baserow/baserow/blob/master/README.md
    checkedAt: 2026-10-31
  - field: databases
    url: https://github.com/baserow/baserow/blob/master/README.md
    checkedAt: 2026-10-31
  - field: headlessApi
    url: https://github.com/baserow/baserow/blob/master/docs/apis/rest-api.md
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://github.com/baserow/baserow/blob/master/docs/apis/rest-api.md
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/baserow/baserow/blob/master/LICENSE
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/baserow/baserow/blob/master/premium/LICENSE
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/baserow/baserow/blob/master/enterprise/LICENSE
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/baserow/baserow/blob/master/LICENSE
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://github.com/baserow/baserow/blob/master/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/baserow/baserow/blob/master/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/baserow/baserow/blob/master/docs/installation/install-with-docker-compose.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/baserow/baserow/blob/master/docs/installation/install-with-helm.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/baserow/baserow/blob/master/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/baserow/baserow/blob/master/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/baserow/baserow/blob/master/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/baserow/baserow/blob/master/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/baserow/baserow/blob/master/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/baserow/baserow/blob/master/README.md
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://github.com/baserow/baserow/blob/master/docs/installation/install-with-docker.md
    checkedAt: 2026-10-31
  - field: i18n
    url: https://baserow.io/faq
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/baserow/baserow
    checkedAt: 2026-10-31
  - field: contributors
    url: https://github.com/baserow/baserow
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/baserow/baserow/releases/tag/2.4.1
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/baserow/baserow/releases/tag/2.4.1
    checkedAt: 2026-10-31
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Baserow is a no-code platform for building databases, applications and automations on PostgreSQL, with Django and Vue.js in its stack. Its backend and web frontend talk through a REST API, and the project's API page says a website can show data from Baserow through a database token. The README describes Baserow as headless and API first. Applications and portals are built inside Baserow and published on the builder's own domain.

## Worth knowing

Baserow is open core. The MIT-licensed core sits beside premium and enterprise directories whose code needs a paid subscription to run in production. Baserow B.V. runs Baserow Cloud, and the same pricing page offers self-hosting.
