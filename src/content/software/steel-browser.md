---
id: steel-browser
name: Steel Browser
urls:
  home: https://steel.dev
  repository: https://github.com/steel-dev/steel-browser
  docs: https://docs.steel.dev
category:
  - testing
description: Open-source browser API server that AI agents and apps call to start and control browser sessions.
status: active
maintainer: Nen Labs, Inc.
maintainerType: company
firstRelease: 2024
hqCountry: US
language: javascript
runtime:
  - node
hosting:
  - node
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker image (ghcr.io)
licenseModel: open-source
license: Apache-2.0
githubStargazers: 7915
contributors: 30
social:
  x: https://twitter.com/steeldotdev
  discord: https://discord.gg/steel-dev
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://steel.dev
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.steel.dev
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/steel-dev/steel-browser
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/steel-dev/steel-browser
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://steel.dev/terms
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://steel.dev/terms
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/steel-dev/steel-browser/releases/tag/beta-release
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/steel-dev/steel-browser/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/steel-dev/steel-browser/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/steel-dev/steel-browser/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/steel-dev/steel-browser/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/steel-dev/steel-browser/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.steel.dev/overview/self-hosting/docker
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/steel-dev/steel-browser/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/steel-dev/steel-browser/blob/main/README.md
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/steel-dev/steel-browser/blob/main/README.md
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/steel-dev/steel-browser
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/steel-dev/steel-browser
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/steel-dev/steel-browser/blob/main/README.md
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Steel Browser is a server that AI agents and apps call to start browser sessions and control them. It drives Chrome, so Puppeteer, Playwright and Selenium clients can connect to it, and it exposes a [REST API](https://github.com/steel-dev/steel-browser/blob/main/README.md) with an OpenAPI reference. The server runs as a Docker image or as a Node.js process with Chrome installed, and the README names one-click deploys to Railway and Render. The company also runs Steel Cloud, a managed version of the same product.

## Worth knowing

The project has no stable release: every tag so far is a beta, so the record has no current major version. The server is Apache 2.0 licensed. The Docker image is published on the GitHub container registry rather than Docker Hub.
