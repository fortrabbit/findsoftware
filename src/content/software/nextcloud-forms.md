---
id: nextcloud-forms
name: Nextcloud Forms
urls:
  repository: https://github.com/nextcloud/forms
  docs: https://github.com/nextcloud/forms/tree/main/docs
category:
  - forms
description: Survey and questionnaire app for Nextcloud that creates forms, collects responses and can embed a form in an external website.
status: active
maintainer: Nextcloud GmbH
maintainerType: company
firstRelease: 2019
hqCountry: DE
language: javascript
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
installMethod: clone into the Nextcloud apps folder and build (development setup)
licenseModel: open-source
license: AGPL-3.0-or-later
currentMajor: "5"
latestReleaseDate: 2026-10-22
githubStargazers: 383
contributors: 62
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://api.github.com/repos/nextcloud/forms
    checkedAt: 2026-11-03
  - field: urls
    url: https://raw.githubusercontent.com/nextcloud/forms/main/docs/Embedding.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/nextcloud/forms/main/REUSE.toml
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://nextcloud.com/impressum/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/nextcloud/forms
    checkedAt: 2026-11-03
  - field: category
    url: https://raw.githubusercontent.com/nextcloud/forms/main/README.md
    checkedAt: 2026-11-03
  - field: runtime
    url: https://raw.githubusercontent.com/nextcloud/forms/v5.4.1/composer.json
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://raw.githubusercontent.com/nextcloud/forms/v5.4.1/composer.json
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://raw.githubusercontent.com/nextcloud/forms/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://raw.githubusercontent.com/nextcloud/forms/main/appinfo/info.xml
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://raw.githubusercontent.com/nextcloud/forms/main/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/nextcloud/forms/releases
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/nextcloud/forms/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/nextcloud/forms/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/nextcloud/forms
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/nextcloud/forms/contributors
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

Nextcloud Forms is a survey and questionnaire app that runs inside a Nextcloud server. Forms are shared through public share links, and a share link can be converted to an embeddable link. The [embedding guide](https://github.com/nextcloud/forms/blob/main/docs/Embedding.md) shows an iframe that places the form on an external website, with messages that resize the frame and report a saved submission. The app also has a Forms Public API for custom forms, described in the repository, and the Nextcloud server can send Forms events to webhook listeners.

The repository describes a development setup that clones the app into the apps folder of a Nextcloud server and builds its JavaScript. The app's PHP side runs on the Nextcloud server, and results can be exported as CSV in the format Google Forms uses.

## Worth knowing

The app runs only on the Nextcloud server versions named in its metadata, so it depends on that server for its database and storage.
