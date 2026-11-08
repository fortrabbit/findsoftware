---
id: egjs-flicking
name: Flicking
urls:
  home: https://naver.github.io/egjs-flicking/
  repository: https://github.com/naver/egjs-flicking
  docs: https://naver.github.io/egjs-flicking/docs/guide/quickstart
category:
  - ui-library
description: Carousel component for web pages, with a plain JavaScript package and React and Vue 3 ports.
status: active
maintainer: NAVER Corp.
maintainerType: company
firstRelease: 2017
language: javascript
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-09-30
githubStargazers: 2922
npmWeeklyDownloads: 34392
contributors: 27
dependentRepos: 213
dependentPackages: 17
addedAt: 2026-11-08
checkedAt: 2026-11-08
sources:
  - field: urls
    url: https://naver.github.io/egjs-flicking/
    checkedAt: 2026-11-08
  - field: urls
    url: https://api.github.com/repos/naver/egjs-flicking
    checkedAt: 2026-11-08
  - field: urls
    url: https://naver.github.io/egjs-flicking/docs/guide/quickstart
    checkedAt: 2026-11-08
  - field: maintainer
    url: https://github.com/naver/egjs-flicking/blob/master/LICENSE
    checkedAt: 2026-11-08
  - field: firstRelease
    url: https://registry.npmjs.org/@egjs%2Fflicking
    checkedAt: 2026-11-08
  - field: category
    url: https://github.com/naver/egjs-flicking/blob/master/README.md
    checkedAt: 2026-11-08
  - field: language
    url: https://api.github.com/repos/naver/egjs-flicking
    checkedAt: 2026-11-08
  - field: license
    url: https://github.com/naver/egjs-flicking/blob/master/README.md
    checkedAt: 2026-11-08
  - field: currentMajor
    url: https://api.github.com/repos/naver/egjs-flicking/releases?per_page=40
    checkedAt: 2026-11-08
  - field: latestReleaseDate
    url: https://api.github.com/repos/naver/egjs-flicking/releases/latest
    checkedAt: 2026-11-08
  - field: githubStargazers
    url: https://api.github.com/repos/naver/egjs-flicking
    checkedAt: 2026-11-08
  - field: contributors
    url: https://api.github.com/repos/naver/egjs-flicking/contributors?per_page=1
    checkedAt: 2026-11-08
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@egjs/flicking
    checkedAt: 2026-11-08
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@egjs%2Fflicking
    checkedAt: 2026-11-08
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@egjs%2Fflicking
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://naver.github.io/egjs-flicking/docs/guide/quickstart
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://naver.github.io/egjs-flicking/docs/guide/quickstart
    checkedAt: 2026-11-08
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

Flicking is a carousel component for web pages, published as the @egjs/flicking package. The core is written for plain JavaScript and TypeScript, and the React and Vue 3 ports are separate packages in the same repository. Plugins for autoplay, fade, parallax, arrows and pagination ship as a further package. The README lists circular mode, free scroll and virtual scroll for large sets of panels among its features. Apps install the core with npm or yarn, and the quickstart also gives a CDN route for prototypes.

## Worth knowing

Flicking measures the size of DOM elements to place its panels, so with server-side rendering the panels can shift once the page hydrates; the SSR guide covers this. Next.js and Nuxt are the frameworks the project names for server-side rendering.
