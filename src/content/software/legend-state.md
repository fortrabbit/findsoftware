---
id: legend-state
name: Legend-State
urls:
  home: https://legendapp.com/open-source/state/
  repository: https://github.com/LegendApp/legend-state
  docs: https://www.legendapp.com/open-source/state/
category:
  - library
description: State and sync library for JavaScript apps, with fine-grained reactivity and persistence to local storage and remote backends.
status: active
maintainer: Moo.do LLC
maintainerType: company
firstRelease: 2022
language: javascript
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2024-08-30
githubStargazers: 4225
npmWeeklyDownloads: 160771
contributors: 47
social:
  discord: https://discord.gg/5CBaNtADNX
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://legendapp.com/open-source/state/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/LegendApp/legend-state
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/LegendApp/legend-state/blob/main/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/LegendApp/legend-state/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/@legendapp/state
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/LegendApp/legend-state
    checkedAt: 2026-11-16
  - field: category
    url: https://legendapp.com/open-source/state/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/LegendApp/legend-state/blob/main/README.md
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@legendapp/state
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/LegendApp/legend-state
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/LegendApp/legend-state/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://registry.npmjs.org/@legendapp/state/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@legendapp/state
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/LegendApp/legend-state
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/LegendApp/legend-state/contributors?per_page=1
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
runsAs: null
---

Legend-State is a state library for JavaScript applications with a sync system built in. Values live in observables: get reads one, set writes one, and observers and computed observables re-run when the values they read change. The React bindings ship in the same package as the core, so components read observables through the React helpers the package provides.

A sync plugin connects an observable to a backend such as Keel, Supabase, Firebase or TanStack Query, or to a generic fetch call. A persistence plugin keeps the value in local storage, IndexedDB, MMKV or AsyncStorage. Local changes apply first and are retried until the backend accepts them. The README says Jay Meistrich created and maintains it with Legend and Bravely.

## Worth knowing

The documentation describes a newer major version that is still in beta, while the npm package's stable release is the older line. Legend Kit, a separate product sold as premium tools by subscription, is not part of this library.
