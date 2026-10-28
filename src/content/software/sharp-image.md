---
id: sharp-image
name: sharp
urls:
  home: https://sharp.pixelplumbing.com
  repository: https://github.com/lovell/sharp
  docs: https://sharp.pixelplumbing.com/install
category:
  - media
  - build-tool
description: Node.js module that resizes and converts JPEG, PNG, WebP, AVIF and other image formats, using the libvips image library.
status: active
maintainer: Lovell Fuller
maintainerType: individual
firstRelease: 2013
language: javascript
runtime:
  - node
  - deno
  - bun
hosting:
  - node
  - deno
  - bun
runtimeMin: node 20
installMethod: npm install sharp
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-09-27
githubStargazers: 32806
npmWeeklyDownloads: 133705513
contributors: 229
dependentRepos: 178353
dependentPackages: 4168
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://sharp.pixelplumbing.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/lovell/sharp
    checkedAt: 2026-10-28
  - field: urls
    url: https://sharp.pixelplumbing.com/install
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/lovell/sharp/blob/main/package.json
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://github.com/lovell/sharp/blob/main/package.json
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/lovell/sharp
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/lovell/sharp/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/lovell/sharp/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://registry.npmjs.org/sharp/latest
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://sharp.pixelplumbing.com/install
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/lovell/sharp
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/lovell/sharp/blob/main/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/sharp
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/lovell/sharp/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/lovell/sharp/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/lovell/sharp
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/lovell/sharp/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/sharp
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/sharp
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/sharp
    checkedAt: 2026-10-28
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

sharp is a Node.js module that resizes images and converts them between JPEG, PNG, WebP, AVIF and other formats. It runs in the process that loads it and uses the libvips image library for the pixel work, which the project credits for its speed in resizing.

The package is installed with npm. The install guide describes prebuilt binaries for common platforms, which the package manager selects at install time, and an option to build against a globally installed copy of libvips. Lovell Fuller is named as the package's author.

## Worth knowing

The prebuilt binaries are the default route. A globally installed libvips is used only when it is at least the version the package names, and the install guide says that option is unsupported on Windows and on macOS under Rosetta.
