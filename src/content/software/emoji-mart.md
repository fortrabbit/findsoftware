---
id: emoji-mart
name: Emoji Mart
urls:
  home: https://learn.missiveapp.com/open/emoji-mart
  repository: https://github.com/missive/emoji-mart
category:
  - ui-library
description: Customizable emoji picker HTML component for the web.
status: active
maintainer: Missive
firstRelease: 2016
hqCountry: CA
language: javascript
i18n: yes
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2024-04-25
githubStargazers: 9399
npmWeeklyDownloads: 4368793
contributors: 32
dependentRepos: 4809
dependentPackages: 385
addedAt: 2026-11-08
checkedAt: 2026-11-08
sources:
  - field: urls
    url: https://learn.missiveapp.com/open/emoji-mart
    checkedAt: 2026-11-08
  - field: urls
    url: https://api.github.com/repos/missive/emoji-mart
    checkedAt: 2026-11-08
  - field: firstRelease
    url: https://api.github.com/repos/missive/emoji-mart/commits/v0.1.0
    checkedAt: 2026-11-08
  - field: maintainer
    url: https://github.com/missive/emoji-mart/blob/main/LICENSE
    checkedAt: 2026-11-08
  - field: hqCountry
    url: https://missiveapp.com/about
    checkedAt: 2026-11-08
  - field: category
    url: https://github.com/missive/emoji-mart/blob/main/README.md
    checkedAt: 2026-11-08
  - field: language
    url: https://api.github.com/repos/missive/emoji-mart
    checkedAt: 2026-11-08
  - field: i18n
    url: https://github.com/missive/emoji-mart/blob/main/README.md
    checkedAt: 2026-11-08
  - field: license
    url: https://api.github.com/repos/missive/emoji-mart
    checkedAt: 2026-11-08
  - field: licenseModel
    url: https://github.com/missive/emoji-mart/blob/main/LICENSE
    checkedAt: 2026-11-08
  - field: currentMajor
    url: https://github.com/missive/emoji-mart/releases/tag/v5.6.0
    checkedAt: 2026-11-08
  - field: latestReleaseDate
    url: https://github.com/missive/emoji-mart/releases/tag/v5.6.0
    checkedAt: 2026-11-08
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/emoji-mart
    checkedAt: 2026-11-08
  - field: githubStargazers
    url: https://api.github.com/repos/missive/emoji-mart
    checkedAt: 2026-11-08
  - field: contributors
    url: https://api.github.com/repos/missive/emoji-mart/contributors?per_page=1
    checkedAt: 2026-11-08
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/emoji-mart
    checkedAt: 2026-11-08
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/emoji-mart
    checkedAt: 2026-11-08
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
runsAs: null
---

Emoji Mart is an emoji picker for the web, built as a component. The picker shows a searchable grid of emoji with categories, skin tones and custom emoji, and it is available as a React component and as a browser build. Its emoji data is a separate package that the picker either bundles or loads from a CDN. The same data also powers an emoji web component and a search that runs without the picker.

## Worth knowing

The README lists the trade-off for the data. Bundled data renders at once and works offline. Remote data keeps the app bundle small and adds network latency, and offline use then needs a service worker.
