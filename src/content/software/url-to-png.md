---
id: url-to-png
name: URL-to-PNG
urls:
  home: https://jasonraimondi.github.io/url-to-png/
  repository: https://github.com/jasonraimondi/url-to-png
  docs: https://jasonraimondi.github.io/url-to-png/getting_started/
category:
  - media
description: Self-hosted HTTP service that renders a web page with Playwright and returns it as a cached PNG screenshot.
status: active
maintainer: Jason Raimondi
maintainerType: individual
firstRelease: 2018
language: javascript
runtime:
  - node
hosting:
  - node
installMethod: docker
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-04-18
githubStargazers: 256
contributors: 7
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://jasonraimondi.github.io/url-to-png/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/jasonraimondi/url-to-png
    checkedAt: 2026-11-03
  - field: urls
    url: https://jasonraimondi.github.io/url-to-png/getting_started/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/jasonraimondi/url-to-png/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/jasonraimondi/url-to-png/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/jasonraimondi/url-to-png
    checkedAt: 2026-11-03
  - field: runtime
    url: https://jasonraimondi.github.io/url-to-png/config/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://jasonraimondi.github.io/url-to-png/getting_started/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://jasonraimondi.github.io/url-to-png/getting_started/
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/jasonraimondi/url-to-png
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://jasonraimondi.github.io/url-to-png/getting_started/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/jasonraimondi/url-to-png/releases/tag/v2.1.4
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/jasonraimondi/url-to-png/releases/tag/v2.1.4
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/jasonraimondi/url-to-png/tree/0.9.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/jasonraimondi/url-to-png
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/jasonraimondi/url-to-png/contributors
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

URL-to-PNG is a self-hosted HTTP service that renders a web page and returns it as a PNG image. A page calls the service with query parameters, such as the URL to capture and the image width, and the service caches the rendered image. The [getting started guide](https://jasonraimondi.github.io/url-to-png/getting_started/) describes the Docker image, which is also on Docker Hub, and a local development setup from source.

## Worth knowing

Pages render in a headless Chromium browser that the service drives through Playwright. The cache can write to a local directory, an S3 bucket or CouchDB, as the configuration page describes.
