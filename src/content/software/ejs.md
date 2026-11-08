---
id: ejs
name: EJS
urls:
  home: https://ejs.co/
  repository: https://github.com/mde/ejs
  docs: https://ejs.co/docs/
category:
  - library
description: Templating language that generates HTML from plain JavaScript written inside templates, for Node.js and the browser.
status: active
maintainer: Matthew Eernisse
maintainerType: individual
firstRelease: 2011
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 0.12
installMethod: npm
licenseModel: open-source
license: Apache-2.0
currentMajor: "7"
latestReleaseDate: 2026-10-18
githubStargazers: 8131
npmWeeklyDownloads: 59644117
contributors: 123
dependentRepos: 1532080
dependentPackages: 15041
addedAt: 2026-11-08
checkedAt: 2026-11-08
sources:
  - field: urls
    url: https://ejs.co/
    checkedAt: 2026-11-08
  - field: urls
    url: https://api.github.com/repos/mde/ejs
    checkedAt: 2026-11-08
  - field: urls
    url: https://ejs.co/docs/
    checkedAt: 2026-11-08
  - field: maintainer
    url: https://ejs.co/
    checkedAt: 2026-11-08
  - field: firstRelease
    url: https://registry.npmjs.org/ejs
    checkedAt: 2026-11-08
  - field: category
    url: https://ejs.co/
    checkedAt: 2026-11-08
  - field: language
    url: https://api.github.com/repos/mde/ejs
    checkedAt: 2026-11-08
  - field: runtime
    url: https://ejs.co/docs/
    checkedAt: 2026-11-08
  - field: runtimeMin
    url: https://github.com/mde/ejs/blob/main/README.md
    checkedAt: 2026-11-08
  - field: license
    url: https://ejs.co/
    checkedAt: 2026-11-08
  - field: currentMajor
    url: https://api.github.com/repos/mde/ejs/releases?per_page=40
    checkedAt: 2026-11-08
  - field: latestReleaseDate
    url: https://api.github.com/repos/mde/ejs/releases/latest
    checkedAt: 2026-11-08
  - field: githubStargazers
    url: https://api.github.com/repos/mde/ejs
    checkedAt: 2026-11-08
  - field: contributors
    url: https://api.github.com/repos/mde/ejs/contributors?per_page=1
    checkedAt: 2026-11-08
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/ejs
    checkedAt: 2026-11-08
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/ejs
    checkedAt: 2026-11-08
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/ejs
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://ejs.co/docs/
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://ejs.co/
    checkedAt: 2026-11-08
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

EJS is a templating language that writes HTML with plain JavaScript. Templates hold JavaScript between scriptlet tags, and output tags insert values escaped or unescaped. The library compiles a template to a JavaScript function, which it caches, and runs on Node.js or in the browser. In the browser, a prebuilt script compiles and renders template strings, while loading template files needs the Node.js entry point. EJS installs from npm, ships a command-line tool, and complies with the Express view system, so an Express app can use it as its view engine.

## Worth knowing

The README states that EJS is effectively a JavaScript runtime, so giving end users unrestricted access to the render method is an unsafe way to use it. Escaping covers HTML content and quoted attributes by default, and the README says other output contexts need their own escape function.
