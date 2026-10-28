---
id: jampack
name: Jampack
urls:
  home: https://jampack.divriots.com/
  repository: https://github.com/divriots/jampack
  docs: https://jampack.divriots.com/installation/
category:
  - build-tool
description: Post-build optimizer that compresses and optimizes the static output of a site generator, with image, CSS, JavaScript and HTML passes.
status: active
maintainer: DIV-RIOTS SAS
maintainerType: company
firstRelease: 2020
hqCountry: FR
language: javascript
runtime:
  - node
runtimeMin: node 14
runsAs:
  - local
installMethod: npm install -D @divriots/jampack
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-04
githubStargazers: 1695
npmWeeklyDownloads: 3255
contributors: 17
social:
  discord: https://discord.gg/XkQxSU9
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://jampack.divriots.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/divriots/jampack
    checkedAt: 2026-10-28
  - field: urls
    url: https://jampack.divriots.com/installation/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://divriots.com/legal/code.to.design/terms/
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://divriots.com/legal/code.to.design/privacy/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/divriots/jampack
    checkedAt: 2026-10-28
  - field: category
    url: https://jampack.divriots.com/
    checkedAt: 2026-10-28
  - field: runtime
    url: https://registry.npmjs.org/@divriots%2fjampack/latest
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://registry.npmjs.org/@divriots%2fjampack/latest
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://jampack.divriots.com/installation/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://jampack.divriots.com/installation/
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/divriots/jampack
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/divriots/jampack/blob/main/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/@divriots%2fjampack
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://registry.npmjs.org/@divriots%2fjampack/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@divriots%2fjampack
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/divriots/jampack
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/divriots/jampack/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/@divriots/jampack
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
---

Jampack is a post-processing tool for the output of a static site generator. It runs after the generator has written the site, optimizes the images in that output folder, and compresses the HTML, CSS, JavaScript, SVG and image files in a second pass. The project describes itself as neither a bundler nor a framework.

Projects install it from npm as a development dependency and call it from their build script after the generator, so every build of the site passes through it. For images it produces responsive srcset variants and lazy loading. It inlines critical CSS and prefetches the links on a page, so later navigations are faster.
