---
id: ndx
name: ndx
urls:
  repository: https://github.com/localvoid/ndx
category:
  - search
description: Lightweight full-text indexing and search library for JavaScript and TypeScript, with a dynamic inverted index.
status: stub
maintainer: Boris Kaul
maintainerType: individual
firstRelease: 2016
language: javascript
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2023-03-14
githubStargazers: 156
npmWeeklyDownloads: 1708
contributors: 3
dependentRepos: 16
dependentPackages: 9
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/localvoid/ndx
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/localvoid/ndx/master/LICENSE
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://raw.githubusercontent.com/localvoid/ndx/master/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/ndx
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/localvoid/ndx
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/localvoid/ndx/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/localvoid/ndx
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/localvoid/ndx/master/LICENSE
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/ndx
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/ndx
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/ndx
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/localvoid/ndx
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/localvoid/ndx/contributors
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://registry.npmjs.org/ndx/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://registry.npmjs.org/ndx
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

ndx is a JavaScript and TypeScript library for full-text indexing and search, with a dynamic inverted index and BM25 ranking. Documents can be added and removed after the index is created, and queries match any of their terms. Boris Kaul wrote and maintains it, and the package is published on npm.

## Worth knowing

The README states that queries support only disjunction, so phrase search is not supported, and the index stores no term positions. The README gives import examples but no install command.
