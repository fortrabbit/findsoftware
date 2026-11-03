---
id: formio
name: Form.io
urls:
  home: https://form.io
  repository: https://github.com/formio/formio
  docs: https://help.form.io
  pricing: https://form.io/configuration-based-pricing/
category:
  - forms
  - backend
description: Open-source form and API platform for building forms, storing their submissions in MongoDB and serving them over an API, with a paid self-hosted Enterprise Server.
status: active
maintainer: Form.io LLC
maintainerType: company
firstRelease: 2015
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
databases:
  - mongodb
adminUi: true
headlessApi:
  - rest
i18n: yes, translation of platform areas and front-end field UI settings
runsAs:
  - always-on
installMethod: docker-compose
licenseModel: open-core
license: OSL-3.0
currentMajor: "4"
latestReleaseDate: 2026-10-14
githubStargazers: 2328
contributors: 68
social:
  x: https://twitter.com/form_io
  youtube: https://www.youtube.com/channel/UCA_81zGqS4EdrkK0UvLCubg
  instagram: https://www.instagram.com/formdotio/
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://form.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/formio/formio
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/formio/formio/blob/main/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/formio/formio/main/LICENSE.txt
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/formio/formio
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/formio/formio/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://raw.githubusercontent.com/formio/formio/v4.11.0/package.json
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/formio/formio/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/formio/formio/blob/main/README.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/formio/formio/blob/main/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://form.io/configuration-based-pricing/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://registry.npmjs.org/formio/latest
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/formio/formio/commits/v4.11.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/formio/formio/commits/1.0.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/formio/formio
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/formio/formio/contributors
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/formio/formio/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/formio/formio/blob/main/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/formio/formio/blob/main/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/formio/formio/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/formio/formio/blob/main/README.md
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://form.io/faq/
    checkedAt: 2026-11-03
  - field: i18n
    url: https://form.io/faq/
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Form.io is a form and API platform: forms are built in a drag-and-drop builder, and the server keeps its data in MongoDB and serves it through an API. The repository holds the server and the management application, which the [README](https://github.com/formio/formio/blob/main/README.md) runs with Docker Compose or with Node.js and MongoDB. Forms are embedded in Angular.js and React applications through a formio element from the separate formio.js library. Form.io LLC maintains the project, offers a hosted platform, and offers a self-hosted Enterprise Server.

## Worth knowing

The Enterprise Server is a separate paid image that runs with a license key, and the [pricing page](https://form.io/configuration-based-pricing/) lists it with an Enterprise Form Builder Module for building forms inside one's own application. The project is licensed under OSL-3.0, a copyleft license, and the README records a change to that license from BSD.
