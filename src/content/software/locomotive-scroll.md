---
id: locomotive-scroll
name: Locomotive Scroll
urls:
  home: https://scroll.locomotive.ca
  repository: https://github.com/locomotivemtl/locomotive-scroll
  docs: https://scroll.locomotive.ca/docs
category:
  - ui-library
  - graphics
description: JavaScript scroll library that detects elements entering the viewport and adds smooth scrolling and parallax effects.
status: active
maintainer: Locomotive Inc.
maintainerType: company
firstRelease: 2019
hqCountry: CA
language: javascript
basedOn:
  - lenis
installMethod: npm, CDN
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-11-13
githubStargazers: 8899
npmWeeklyDownloads: 25978
contributors: 25
dependentRepos: 808
dependentPackages: 20
social:
  instagram: https://www.instagram.com/locomotivemtl/
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://scroll.locomotive.ca/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/locomotivemtl/locomotive-scroll
    checkedAt: 2026-11-16
  - field: urls
    url: https://scroll.locomotive.ca/docs
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/locomotivemtl/locomotive-scroll/tags
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/locomotivemtl/locomotive-scroll/main/LICENSE
    checkedAt: 2026-11-16
  - field: hqCountry
    url: https://locomotive.ca/en
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/locomotivemtl/locomotive-scroll/main/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/locomotivemtl/locomotive-scroll/blob/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/locomotivemtl/locomotive-scroll
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://scroll.locomotive.ca/docs/getting-started/installation
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://scroll.locomotive.ca/docs/getting-started/installation
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/locomotivemtl/locomotive-scroll
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/locomotivemtl/locomotive-scroll/main/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/locomotivemtl/locomotive-scroll/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/locomotivemtl/locomotive-scroll/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/locomotivemtl/locomotive-scroll
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/locomotivemtl/locomotive-scroll/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/locomotive-scroll
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/locomotive-scroll
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/locomotive-scroll
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
runsAs: null
---

Locomotive Scroll detects when elements enter the viewport and adds smooth scrolling and parallax effects to a page. It is built on top of Lenis, a separate smooth scroll engine, and the bundle includes Lenis. Parallax is set per element with the data-scroll-speed attribute.

## Worth knowing

The documentation says the library may not be fully compatible with server-side rendering, because it relies on the window object and the Intersection Observer API.
