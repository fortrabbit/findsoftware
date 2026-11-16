---
id: imask
name: imaskjs
urls:
  home: https://imask.js.org
  repository: https://github.com/uNmAnNeR/imaskjs
  docs: https://imask.js.org/
category:
  - forms
description: Vanilla JavaScript input mask library that formats values typed into input fields and returns raw and unmasked values.
status: active
maintainer: uNmAnNeR
maintainerType: individual
firstRelease: 2017
language: javascript
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2024-05-21
githubStargazers: 5177
npmWeeklyDownloads: 2105113
contributors: 31
dependentRepos: 2304
dependentPackages: 322
social:
  forum: https://github.com/uNmAnNeR/imaskjs/discussions
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://imask.js.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/uNmAnNeR/imaskjs
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/uNmAnNeR/imaskjs/blob/master/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/uNmAnNeR/imaskjs/tags?per_page=100
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/uNmAnNeR/imaskjs/master/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/uNmAnNeR/imaskjs/blob/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/uNmAnNeR/imaskjs
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://imask.js.org/guide.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://imask.js.org/guide.html
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/uNmAnNeR/imaskjs/master/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/uNmAnNeR/imaskjs/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/uNmAnNeR/imaskjs/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/uNmAnNeR/imaskjs/releases
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/imask
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/uNmAnNeR/imaskjs
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/uNmAnNeR/imaskjs/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/imask
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/imask
    checkedAt: 2026-11-16
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

imaskjs is a vanilla JavaScript input mask that applies a mask to an HTML input element and gives access to raw and unmasked values. Masks can be a regular expression, a function, a number or date format, a pattern with fixed parts and custom definitions, or a dynamic mask chosen on the fly. A pipe converts and formats values, and the library also works with web components and contenteditable elements.

## Worth knowing

The guide says a mask applied to an input element needs `type="text"`, because other input types are not supported. The repository is a monorepo that also ships packages for Vue, Angular, React, React Native, Svelte and Solid, listed in the README as plugins.
