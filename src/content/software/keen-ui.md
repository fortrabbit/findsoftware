---
id: keen-ui
name: Keen UI
urls:
  home: https://josephuspaye.github.io/Keen-UI/
  repository: https://github.com/JosephusPaye/Keen-UI
  docs: https://josephuspaye.github.io/Keen-UI/
category:
  - ui-library
description: Vue.js UI component library inspired by Google's Material Design.
status: stub
maintainer: Josephus Paye II
maintainerType: individual
firstRelease: 2016
language: javascript
basedOn:
  - vue
runsAs:
  - browser
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2022-08-06
githubStargazers: 4052
npmWeeklyDownloads: 1762
contributors: 28
dependentRepos: 155
dependentPackages: 24
addedAt: 2026-10-27
checkedAt: 2026-10-27
sources:
  - field: urls
    url: https://josephuspaye.github.io/Keen-UI/
    checkedAt: 2026-10-27
  - field: urls
    url: https://api.github.com/repos/JosephusPaye/Keen-UI
    checkedAt: 2026-10-27
  - field: urls
    url: https://github.com/JosephusPaye/Keen-UI/blob/next/README.md
    checkedAt: 2026-10-27
  - field: basedOn
    url: https://github.com/JosephusPaye/Keen-UI/blob/next/README.md
    checkedAt: 2026-10-27
  - field: category
    url: https://github.com/JosephusPaye/Keen-UI/blob/next/README.md
    checkedAt: 2026-10-27
  - field: firstRelease
    url: https://registry.npmjs.org/keen-ui
    checkedAt: 2026-10-27
  - field: maintainer
    url: https://github.com/JosephusPaye/Keen-UI/blob/next/README.md
    checkedAt: 2026-10-27
  - field: language
    url: https://api.github.com/repos/JosephusPaye/Keen-UI
    checkedAt: 2026-10-27
  - field: installMethod
    url: https://github.com/JosephusPaye/Keen-UI/blob/next/README.md
    checkedAt: 2026-10-27
  - field: installMethod
    url: https://github.com/JosephusPaye/Keen-UI/blob/next/README.md
    checkedAt: 2026-10-27
  - field: runsAs
    url: https://github.com/JosephusPaye/Keen-UI/blob/next/README.md
    checkedAt: 2026-10-27
  - field: license
    url: https://github.com/JosephusPaye/Keen-UI/blob/next/README.md
    checkedAt: 2026-10-27
  - field: licenseModel
    url: https://github.com/JosephusPaye/Keen-UI/blob/next/README.md
    checkedAt: 2026-10-27
  - field: currentMajor
    url: https://github.com/JosephusPaye/Keen-UI/releases/tag/v1.4.0
    checkedAt: 2026-10-27
  - field: latestReleaseDate
    url: https://github.com/JosephusPaye/Keen-UI/releases/tag/v1.4.0
    checkedAt: 2026-10-27
  - field: githubStargazers
    url: https://api.github.com/repos/JosephusPaye/Keen-UI
    checkedAt: 2026-10-27
  - field: contributors
    url: https://api.github.com/repos/JosephusPaye/Keen-UI
    checkedAt: 2026-10-27
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/keen-ui
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/keen-ui
    checkedAt: 2026-10-27
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/keen-ui
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
---

Keen UI is a component library for Vue.js. A project installs the keen-ui npm package and either registers every component at once as a Vue plugin or imports single components by name. The stylesheet, keen-ui.css, is a separate file the project imports alongside the components. The README also describes loading the library with script tags, which makes it available globally.

Keen UI does not include a CSS framework. Its README says it has no styles for a grid system or typography, and that it can be used with any page layout, structure or CSS framework. The [documentation and demo](https://josephuspaye.github.io/Keen-UI/) show the components in use.

## Worth knowing

The README asks projects to apply a box-sizing reset and set the root font size before the components, because component sizes depend on the root font size. Importing components one at a time needs a single bootstrap import per project, and the README warns that the standalone files repeat shared code, which can enlarge the bundle.
