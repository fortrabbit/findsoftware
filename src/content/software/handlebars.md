---
id: handlebars
name: Handlebars
urls:
  home: https://handlebarsjs.com/
  repository: https://github.com/handlebars-lang/handlebars.js
  docs: https://handlebarsjs.com/guide/
category:
  - library
description: JavaScript templating engine that compiles Handlebars templates into functions that render HTML, text and other output.
status: active
maintainer: Yehuda Katz
maintainerType: individual
firstRelease: 2011
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 0.4
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-10-05
githubStargazers: 18691
npmWeeklyDownloads: 55977392
contributors: 177
dependentRepos: 1258975
dependentPackages: 15556
addedAt: 2026-11-09
checkedAt: 2026-11-09
sources:
  - field: urls
    url: https://handlebarsjs.com/
    checkedAt: 2026-11-09
  - field: urls
    url: https://github.com/handlebars-lang/handlebars.js
    checkedAt: 2026-11-09
  - field: urls
    url: https://handlebarsjs.com/guide/
    checkedAt: 2026-11-09
  - field: maintainer
    url: https://github.com/handlebars-lang/handlebars.js/blob/master/LICENSE
    checkedAt: 2026-11-09
  - field: maintainerType
    url: https://github.com/handlebars-lang/handlebars.js/blob/master/LICENSE
    checkedAt: 2026-11-09
  - field: firstRelease
    url: https://registry.npmjs.org/handlebars
    checkedAt: 2026-11-09
  - field: category
    url: https://handlebarsjs.com/
    checkedAt: 2026-11-09
  - field: language
    url: https://github.com/handlebars-lang/handlebars.js
    checkedAt: 2026-11-09
  - field: runtime
    url: https://github.com/handlebars-lang/handlebars.js/blob/master/README.md
    checkedAt: 2026-11-09
  - field: runtimeMin
    url: https://github.com/handlebars-lang/handlebars.js/blob/v4.7.10/package.json
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://handlebarsjs.com/guide/installation/
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://handlebarsjs.com/guide/installation/
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://handlebarsjs.com/guide/installation/
    checkedAt: 2026-11-09
  - field: license
    url: https://github.com/handlebars-lang/handlebars.js
    checkedAt: 2026-11-09
  - field: licenseModel
    url: https://github.com/handlebars-lang/handlebars.js
    checkedAt: 2026-11-09
  - field: currentMajor
    url: https://github.com/handlebars-lang/handlebars.js/releases/tag/v4.7.10
    checkedAt: 2026-11-09
  - field: latestReleaseDate
    url: https://github.com/handlebars-lang/handlebars.js/releases/tag/v4.7.10
    checkedAt: 2026-11-09
  - field: githubStargazers
    url: https://api.github.com/repos/handlebars-lang/handlebars.js
    checkedAt: 2026-11-09
  - field: contributors
    url: https://api.github.com/repos/handlebars-lang/handlebars.js/contributors?per_page=1
    checkedAt: 2026-11-09
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/handlebars
    checkedAt: 2026-11-09
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/handlebars
    checkedAt: 2026-11-09
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/handlebars
    checkedAt: 2026-11-09
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

Handlebars is a JavaScript templating engine. A program passes a template string to `Handlebars.compile`, which returns a function; calling that function with a data object produces the rendered output. Templates can also be precompiled ahead of time, which reduces the runtime a page has to load. The [installation guide](https://handlebarsjs.com/guide/installation/) describes the npm, CDN and download routes. The engine is designed for any ECMAScript 2020 environment, including Node.js and current browsers. It is largely compatible with Mustache templates.

## Worth knowing

The project calls Handlebars a pure rendering engine. It has no built-in event handling, backend access or incremental DOM updates, so a page that needs those pairs it with other code or a framework. The installation guide notes that the downloadable browser builds are not meant for production use, and it recommends a build tool for browser projects.
