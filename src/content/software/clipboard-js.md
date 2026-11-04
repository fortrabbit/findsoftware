---
id: clipboard-js
name: clipboard.js
urls:
  home: https://clipboardjs.com/
  repository: https://github.com/zenorocha/clipboard.js
category:
  - ui-library
description: JavaScript library that copies text to the clipboard when a user activates an element, with no Flash dependency.
status: stub
maintainer: Zeno Rocha
maintainerType: individual
firstRelease: 2015
language: javascript
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2022-05-04
githubStargazers: 34090
npmWeeklyDownloads: 2528595
contributors: 52
dependentRepos: 148442
dependentPackages: 3292
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://clipboardjs.com/
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/zenorocha/clipboard.js
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/zenorocha/clipboard.js/blob/master/LICENSE
    checkedAt: 2026-11-04
  - field: maintainerType
    url: https://github.com/zenorocha/clipboard.js/blob/master/LICENSE
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/zenorocha/clipboard.js
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://api.github.com/repos/zenorocha/clipboard.js/releases
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/zenorocha/clipboard.js/blob/master/readme.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/zenorocha/clipboard.js/blob/master/readme.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/zenorocha/clipboard.js/blob/master/readme.md
    checkedAt: 2026-11-04
  - field: license
    url: https://api.github.com/repos/zenorocha/clipboard.js
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://api.github.com/repos/zenorocha/clipboard.js
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/zenorocha/clipboard.js/releases/latest
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/zenorocha/clipboard.js/releases/latest
    checkedAt: 2026-11-04
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/clipboard
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/zenorocha/clipboard.js
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/zenorocha/clipboard.js/contributors
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/clipboard
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/clipboard
    checkedAt: 2026-11-04
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

clipboard.js copies text to the clipboard when a user clicks an element. The text can come from a data attribute, from the value or text of another element, or from a function that returns a string or a node. A cut action removes the text from an input or textarea instead. The library attaches one listener through event delegation and fires success and error events for the page to respond to. It includes no CSS or tooltip; the README suggests showing the feedback in the page.

## Worth knowing

Copying depends on the Selection and execCommand browser APIs. The README says the library degrades for older browsers, where the page should tell the visitor to press the keyboard shortcut, because the text is already selected.
