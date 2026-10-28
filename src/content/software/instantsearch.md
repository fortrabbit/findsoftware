---
id: instantsearch
name: InstantSearch
urls:
  home: https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/
  repository: https://github.com/algolia/instantsearch
  docs: https://www.algolia.com/doc/guides/building-search-ui/installation/js/
category:
  - search
description: Open source JavaScript UI library of widgets that builds a search interface on Algolia's search API, with React and Vue wrappers.
status: active
maintainer: Algolia, Inc.
maintainerType: company
firstRelease: 2015
language: javascript
runsAs:
  - browser
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-10-26
githubStargazers: 4065
npmWeeklyDownloads: 614373
contributors: 212
dependentRepos: 1512
dependentPackages: 72
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/
    checkedAt: 2026-10-28
  - field: urls
    url: https://www.algolia.com/doc/guides/building-search-ui/installation/js/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/algolia/instantsearch
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/algolia/instantsearch/master/LICENSE
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/algolia/instantsearch
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/instantsearch.js
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/algolia/instantsearch
    checkedAt: 2026-10-28
  - field: category
    url: https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://www.algolia.com/doc/guides/building-search-ui/installation/js/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.algolia.com/doc/guides/building-search-ui/installation/js/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.algolia.com/doc/guides/building-search-ui/installation/js/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://www.algolia.com/doc/guides/building-search-ui/installation/js/
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/algolia/instantsearch/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/algolia/instantsearch/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/algolia/instantsearch
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/algolia/instantsearch/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-19:2026-10-25/instantsearch.js
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/instantsearch.js
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/instantsearch.js
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

InstantSearch.js is an open source JavaScript library for building a search interface in a web frontend. It is made of predefined widgets, such as a search box and a list of refinements, that sit on an instantsearch wrapper. The wrapper passes queries to Algolia's search API and returns the results to the widgets. A developer can style the widgets with CSS, change their output through connectors, or write custom widgets. The library loads into a page from npm or a content delivery network, and the install guide also names a generator that creates a starter app.

## Worth knowing

The wrapper needs an Algolia application ID, a search API key and an index name, so the widgets depend on an Algolia index. The library has no server part of its own, and Algolia's hosted search service answers every query. The project also has React and Vue wrappers, which are separate packages in the same repository.
