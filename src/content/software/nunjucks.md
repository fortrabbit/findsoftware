---
id: nunjucks
name: Nunjucks
urls:
  home: https://mozilla.github.io/nunjucks/
  repository: https://github.com/mozilla/nunjucks
  docs: https://mozilla.github.io/nunjucks/
category:
  - library
description: Templating engine for JavaScript, inspired by jinja2, that renders in Node.js and in the browser.
status: active
maintainer: James Long
maintainerType: individual
firstRelease: 2012
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 6
installMethod: npm, script tag
licenseModel: open-source
license: BSD-2-Clause
currentMajor: "3"
latestReleaseDate: 2023-04-19
githubStargazers: 9006
npmWeeklyDownloads: 4928999
contributors: 120
dependentRepos: 68715
dependentPackages: 2944
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/mozilla/nunjucks
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/mozilla/nunjucks
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/mozilla/nunjucks/blob/master/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/nunjucks
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/mozilla/nunjucks/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/mozilla/nunjucks/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/mozilla/nunjucks
    checkedAt: 2026-11-16
  - field: category
    url: https://mozilla.github.io/nunjucks/
    checkedAt: 2026-11-16
  - field: runtime
    url: https://mozilla.github.io/nunjucks/getting-started.html
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/mozilla/nunjucks/blob/v3.2.4/package.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/mozilla/nunjucks/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://mozilla.github.io/nunjucks/getting-started.html
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/mozilla/nunjucks
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/mozilla/nunjucks/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/mozilla/nunjucks/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/mozilla/nunjucks/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/mozilla/nunjucks
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/mozilla/nunjucks/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/nunjucks
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/nunjucks
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/nunjucks
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

Nunjucks is a templating engine for JavaScript that fills template files with data. Its template language has block inheritance, autoescaping, macros and asynchronous control, and the project describes the language as essentially a port of jinja2. It runs on Node.js, and in the browser a script tag loads either the full compiler or a smaller build that only renders templates precompiled ahead of time.

## Worth knowing

Nunjucks does not sandbox execution, so user-defined templates, or user content placed into template definitions, are unsafe. On the server that can expose data or run code; in the browser it can open cross-site scripting, which a strong content security policy can mitigate. Templates written for jinja2 may need changes, because the language differs in a few places.
