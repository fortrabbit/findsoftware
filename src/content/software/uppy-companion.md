---
id: uppy-companion
name: Companion
urls:
  home: https://uppy.io/docs/companion/
  repository: https://github.com/transloadit/uppy
  docs: https://uppy.io/docs/companion/
category:
  - media
  - auth
description: Open source Node.js server that handles OAuth and streams files from remote sources such as Google Drive and Dropbox into uploads made with Uppy.
status: active
maintainer: Transloadit-II GmbH
maintainerType: company
firstRelease: 2016
hqCountry: DE
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
runsAs:
  - always-on
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2026-10-16
npmWeeklyDownloads: 84049
social:
  forum: https://community.transloadit.com/
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://uppy.io/docs/companion/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/transloadit/uppy
    checkedAt: 2026-11-03
  - field: urls
    url: https://uppy.io/docs/companion/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://transloadit.com/imprint/
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://transloadit.com/imprint/
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/transloadit/uppy/blob/main/packages/%40uppy/companion/README.md
    checkedAt: 2026-11-03
  - field: category
    url: https://uppy.io/docs/companion/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/transloadit/uppy
    checkedAt: 2026-11-03
  - field: runtime
    url: https://uppy.io/docs/companion/
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://uppy.io/docs/companion/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://uppy.io/docs/companion/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/transloadit/uppy/blob/main/packages/%40uppy/companion/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://uppy.io/docs/companion/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://uppy.io/docs/companion/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/transloadit/uppy/blob/main/packages/%40uppy/companion/KUBERNETES.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://uppy.io/docs/companion/
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/transloadit/uppy
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://uppy.io/docs/companion/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://registry.npmjs.org/@uppy/companion/latest
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@uppy/companion/latest
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/transloadit/uppy/commits/v0.0.2
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/@uppy/companion
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

Companion is the server half of the Uppy file uploader. It is a Node.js server that holds the OAuth connections to remote file sources such as Google Drive and Dropbox, and it streams the files it fetches to an upload destination. The Uppy client sends its remote-file requests to Companion, and Companion does not keep the files. It runs as a standalone server or as middleware mounted in an existing Express application, and the [documentation](https://uppy.io/docs/companion/) covers both modes. The package is published on npm as `@uppy/companion` and is built from the Uppy monorepo, which Transloadit maintains.

## Worth knowing

Companion runs as its own long-running Node.js process, so the host has to keep it running. Several instances can share a Redis server, and the docs describe that setup.

Transloadit also runs a hosted Companion, which requires a Transloadit plan. On the hosted service, the Google Drive provider does not work with the shared OAuth app, so it needs the operator's own Google OAuth app. Windows is not a supported platform.
