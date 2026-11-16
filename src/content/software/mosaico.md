---
id: mosaico
name: Mosaico
urls:
  home: https://mosaico.io/
  repository: https://github.com/voidlabs/mosaico
  docs: https://github.com/voidlabs/mosaico/wiki
category:
  - ui-library
description: Open-source JavaScript email template editor for responsive HTML emails, served alongside the creator's own backend.
status: active
maintainer: Void Labs Snc
maintainerType: company
firstRelease: 2015
hqCountry: IT
language: javascript
basedOn:
  - knockout
runsAs:
  - browser
installMethod: source-build
licenseModel: open-source
license: GPL-3.0
currentMajor: "0"
latestReleaseDate: 2025-08-22
githubStargazers: 1783
contributors: 10
social:
  x: https://twitter.com/MosaicoEditor
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://mosaico.io/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/voidlabs/mosaico
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/voidlabs/mosaico/blob/master/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://github.com/voidlabs/mosaico/releases/tag/v0.11
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://www.voxmail.it/contatti
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://www.voxmail.it/contatti
    checkedAt: 2026-11-16
  - field: hqCountry
    url: https://www.voxmail.it/
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/voidlabs/mosaico/blob/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://github.com/voidlabs/mosaico/blob/master/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/voidlabs/mosaico/wiki/Developers
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://github.com/voidlabs/mosaico/wiki/Serving-Mosaico
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/voidlabs/mosaico/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/voidlabs/mosaico/blob/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/voidlabs/mosaico/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/voidlabs/mosaico/releases/tag/v0.18.11
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/voidlabs/mosaico/releases/tag/v0.18.11
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/voidlabs/mosaico
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/voidlabs/mosaico/contributors?per_page=1
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
---

Mosaico is a JavaScript library for editing responsive email templates. The README says Mosaico does not define what can be edited or which styles can change; the template does, so the same editor works with different templates. It is a frontend application that needs a server-side backend for image upload, sending and downloading emails. The [wiki page on serving Mosaico](https://github.com/voidlabs/mosaico/wiki/Serving-Mosaico) lists backends that other people wrote in PHP, Python, .NET and Ruby. The repository builds with npm and grunt, and it also ships a Dockerfile.

## Worth knowing

The GitHub distribution includes a minimal Node.js backend suitable just for tests, so a production setup needs a backend the creator writes or adopts. The live demo on the project's site runs a custom backend and a template that is not part of the open-source distribution.
