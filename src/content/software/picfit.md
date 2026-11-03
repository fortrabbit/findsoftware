---
id: picfit
name: picfit
urls:
  repository: https://github.com/thoas/picfit
  docs: https://github.com/thoas/picfit/blob/main/README.rst
category:
  - media
description: Go server that resizes and manipulates images on request, acting as a proxy in front of the storage that holds the originals.
status: active
maintainer: Florent Messa
maintainerType: individual
firstRelease: 2015
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: make build (from a git clone)
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-21
githubStargazers: 2343
contributors: 27
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://api.github.com/repos/thoas/picfit
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/thoas/picfit/blob/main/README.rst
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/thoas/picfit/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/thoas/picfit/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/thoas/picfit/blob/main/README.rst
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/thoas/picfit
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/thoas/picfit/blob/main/README.rst
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/thoas/picfit/blob/main/README.rst
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/thoas/picfit/blob/main/README.rst
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/thoas/picfit/blob/main/README.rst
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/thoas/picfit/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/thoas/picfit/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/thoas/picfit/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/thoas/picfit/releases
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/thoas/picfit/tags
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/thoas/picfit
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/thoas/picfit/contributors?per_page=1
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
npmWeeklyDownloads: null
---

picfit is a Go server that resizes and manipulates images on request. It acts as a proxy on a storage engine, serves the results ideally behind an HTTP cache such as varnish, and works with several storage backends and key/value stores for the keys of generated images. It is built from source with make, or with a Docker-based build that produces a binary, and run as a server process configured with a JSON file.

## Worth knowing

The build needs the libvips image library. Requests can be required to carry an HMAC-SHA1 signature made with a secret key, which a configuration option turns on.
