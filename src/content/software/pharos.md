---
id: pharos
name: Pharos
urls:
  home: https://pharos.jstor.org
  repository: https://github.com/ithaka/pharos
  docs: https://pharos.jstor.org/getting-started/
category:
  - ui-library
description: JSTOR's design system, a web component library with React wrappers for building products in the JSTOR brand.
status: active
maintainer: Ithaka Harbors, Inc.
maintainerType: company
parent: ITHAKA
firstRelease: 2021
language: javascript
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "14"
latestReleaseDate: 2026-10-23
githubStargazers: 134
npmWeeklyDownloads: 49
contributors: 37
dependentRepos: 1
dependentPackages: 3
addedAt: 2026-10-27
checkedAt: 2026-10-27
sources:
  - field: urls
    url: https://pharos.jstor.org
    checkedAt: 2026-10-27
  - field: urls
    url: https://api.github.com/repos/ithaka/pharos
    checkedAt: 2026-10-27
  - field: urls
    url: https://pharos.jstor.org/getting-started/
    checkedAt: 2026-10-27
  - field: firstRelease
    url: https://registry.npmjs.org/@ithaka/pharos
    checkedAt: 2026-10-27
  - field: maintainer
    url: https://github.com/ithaka/pharos/blob/develop/LICENSE
    checkedAt: 2026-10-27
  - field: language
    url: https://api.github.com/repos/ithaka/pharos
    checkedAt: 2026-10-27
  - field: category
    url: https://github.com/ithaka/pharos/blob/develop/packages/pharos/README.md
    checkedAt: 2026-10-27
  - field: license
    url: https://api.github.com/repos/ithaka/pharos
    checkedAt: 2026-10-27
  - field: licenseModel
    url: https://api.github.com/repos/ithaka/pharos
    checkedAt: 2026-10-27
  - field: currentMajor
    url: https://registry.npmjs.org/@ithaka/pharos
    checkedAt: 2026-10-27
  - field: latestReleaseDate
    url: https://api.github.com/repos/ithaka/pharos/releases
    checkedAt: 2026-10-27
  - field: githubStargazers
    url: https://api.github.com/repos/ithaka/pharos
    checkedAt: 2026-10-27
  - field: contributors
    url: https://api.github.com/repos/ithaka/pharos/contributors?per_page=1
    checkedAt: 2026-10-27
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/@ithaka/pharos
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40ithaka%2Fpharos
    checkedAt: 2026-10-27
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40ithaka%2Fpharos
    checkedAt: 2026-10-27
  - field: parent
    url: https://pharos.jstor.org/
    checkedAt: 2026-10-27
  - field: installMethod
    url: https://github.com/ithaka/pharos/blob/develop/packages/pharos/README.md
    checkedAt: 2026-10-27
  - field: installMethod
    url: https://pharos.jstor.org/getting-started/
    checkedAt: 2026-10-27
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

Pharos is the design system JSTOR uses for its products. The library is a set of web components that the application registers under a scoping prefix, so more than one copy of the library can run on a page. React applications use wrapper components from the same package, and the package also carries design tokens, typography styles and an icon set.

## Worth knowing

The README says the components rely on class names that a bundler's minifier would otherwise rename, and it asks for a bundler setting that keeps them. The scoped custom element registries proposal is not finalized, so the README asks for a polyfill to use the components.
