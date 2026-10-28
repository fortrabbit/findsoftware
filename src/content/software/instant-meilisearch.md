---
id: instant-meilisearch
name: Instant Meilisearch
urls:
  repository: https://github.com/meilisearch/meilisearch-js-plugins
  docs: https://www.meilisearch.com/docs
category:
  - search
description: JavaScript client library that connects a Meilisearch index to the InstantSearch.js front-end search UI library.
status: active
maintainer: Meili SAS
maintainerType: company
firstRelease: 2020
language: javascript
runtimeMin: node 20
basedOn:
  - instantsearch
  - meilisearch
runsAs:
  - browser
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-09-16
githubStargazers: 533
npmWeeklyDownloads: 54588
contributors: 39
social:
  discord: https://discord.meilisearch.com
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://github.com/meilisearch/meilisearch-js-plugins
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/meilisearch/meilisearch-js-plugins/blob/main/packages/instant-meilisearch/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/meilisearch/meilisearch-js-plugins/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://github.com/meilisearch/meilisearch-js-plugins/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/meilisearch/meilisearch-js-plugins/blob/main/packages/instant-meilisearch/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/meilisearch/meilisearch-js-plugins/blob/main/packages/instant-meilisearch/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/meilisearch/meilisearch-js-plugins/blob/main/packages/instant-meilisearch/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/meilisearch/meilisearch-js-plugins
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://registry.npmjs.org/@meilisearch/instant-meilisearch
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/meilisearch/meilisearch-js-plugins/blob/main/packages/instant-meilisearch/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/meilisearch/meilisearch-js-plugins/blob/main/packages/instant-meilisearch/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/meilisearch/meilisearch-js-plugins/blob/main/packages/instant-meilisearch/README.md
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/@meilisearch/instant-meilisearch
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/meilisearch/meilisearch-js-plugins/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://registry.npmjs.org/@meilisearch/instant-meilisearch
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@meilisearch/instant-meilisearch
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/@meilisearch/instant-meilisearch
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://github.com/meilisearch/meilisearch-js-plugins
    checkedAt: 2026-10-28
  - field: contributors
    url: https://github.com/meilisearch/meilisearch-js-plugins/graphs/contributors
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

Instant Meilisearch is a JavaScript package that connects a Meilisearch index to InstantSearch.js, the front-end search UI library that Algolia develops. It supplies the search client that InstantSearch.js calls, so queries go to Meilisearch and InstantSearch.js draws the search interface. The [README](https://github.com/meilisearch/meilisearch-js-plugins/blob/main/packages/instant-meilisearch/README.md) describes an npm install and a script-tag setup from a CDN, and it runs in the browser of the site visitor.

The package lives in the meilisearch-js-plugins repository, which holds other packages. It needs a Meilisearch instance that holds the data, and the Meilisearch server is a separate product.

## Worth knowing

The README limits its compatibility guarantee to one major release of InstantSearch.js and one of Meilisearch, and it marks some InstantSearch widgets as unsupported where Meilisearch lacks the feature they use.
