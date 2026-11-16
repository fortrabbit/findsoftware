---
id: typewriter-effect
name: TypewriterJS
urls:
  repository: https://github.com/tameemsafi/typewriterjs
category:
  - graphics
description: JavaScript library that types out and deletes text on a web page with a typewriter effect, with a React component in the same package.
status: active
maintainer: Tameem Safi
maintainerType: individual
firstRelease: 2017
language: javascript
installMethod: npm, script tag from a CDN
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-22
githubStargazers: 2663
npmWeeklyDownloads: 185280
contributors: 21
ecosystemsMonthlyDownloads: 848009
dependentRepos: 4352
dependentPackages: 42
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/tameemsafi/typewriterjs
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/tameemsafi/typewriterjs/main/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/tameemsafi/typewriterjs/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/tameemsafi/typewriterjs
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/tameemsafi/typewriterjs/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/tameemsafi/typewriterjs/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/tameemsafi/typewriterjs/main/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/tameemsafi/typewriterjs/main/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/tameemsafi/typewriterjs/commits/v1.0.0
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://registry.npmjs.org/typewriter-effect/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://registry.npmjs.org/typewriter-effect
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/tameemsafi/typewriterjs
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/tameemsafi/typewriterjs/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/typewriter-effect
    checkedAt: 2026-11-16
  - field: ecosystemsMonthlyDownloads
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/typewriter-effect
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/typewriter-effect
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/typewriter-effect
    checkedAt: 2026-11-16
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

TypewriterJS types text into a page element one character at a time and deletes it again, running a queue of typed, pasted, deleted and paused steps. The npm package holds the core library and a React component that wraps it, and the component passes its typewriter instance to an init callback so the core API can be called from React code.

Strings that contain HTML tags are added as real elements. The [README](https://github.com/tameemsafi/typewriterjs) says such strings and the cursor option are added with innerHTML, and a parseHTML option turns the parsing off.

## Worth knowing

The package also ships a command line tool that plays the effect in a terminal or records it as a GIF, and that tool needs Node.js 24 or newer. The README says sites and apps that install the package can use any Node.js version.
