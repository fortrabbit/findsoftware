---
id: cap
name: Cap
urls:
  home: https://trycap.dev
  repository: https://github.com/tiagozip/cap
  docs: https://trycap.dev/guide/
category:
  - forms
description: Self-hosted CAPTCHA alternative that verifies visitors with proof-of-work and instrumentation challenges instead of puzzles.
status: active
maintainer: tiago.zip
maintainerType: individual
firstRelease: 2025
language: javascript
runtime:
  - bun
hosting:
  - bun
adminUi: true
headlessApi:
  - rest
i18n: yes, widget labels can be overridden per language
installMethod: npm
licenseModel: open-source
license: Apache-2.0
currentMajor: "3"
latestReleaseDate: 2026-09-23
githubStargazers: 8244
npmWeeklyDownloads: 24969
contributors: 31
social:
  x: https://x.com/tiagozip_
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://trycap.dev
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/tiagozip/cap
    checkedAt: 2026-11-03
  - field: urls
    url: https://trycap.dev/guide/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://trycap.dev/guide/standalone/
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://api.github.com/users/tiagozip
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/tiagozip/cap/releases
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/tiagozip/cap
    checkedAt: 2026-11-03
  - field: category
    url: https://trycap.dev
    checkedAt: 2026-11-03
  - field: runtime
    url: https://trycap.dev/guide/standalone/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://trycap.dev/guide/widget
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://trycap.dev/guide/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://trycap.dev/guide/standalone/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://trycap.dev/guide/standalone/
    checkedAt: 2026-11-03
  - field: license
    url: https://raw.githubusercontent.com/tiagozip/cap/main/README.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://raw.githubusercontent.com/tiagozip/cap/main/README.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/tiagozip/cap/releases/tag/standalone@3.1.13
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/tiagozip/cap/releases/tag/standalone@3.1.13
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/tiagozip/cap
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/tiagozip/cap/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/cap-widget
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://trycap.dev/guide/
    checkedAt: 2026-11-03
  - field: i18n
    url: https://trycap.dev/guide/widget.html
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
templating: null
renderingModes: null
packagistDownloads: null
---

Cap is a self-hosted CAPTCHA that checks visitors with proof-of-work and instrumentation challenges, which the visitor's browser solves in the background. The browser side is the `cap-widget` package from npm, a web component that a site can also load from a CDN. The server side is Cap Standalone, a Bun program that runs from the `tiago2/cap` Docker image, keeps its data in Redis or Valkey, and offers a web dashboard for site keys, a REST API and a verification endpoint compatible with reCAPTCHA. The project is made by tiago.zip.

## Worth knowing

The widget and the standalone server have separate release lines in one repository.
