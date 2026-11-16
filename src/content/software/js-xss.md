---
id: js-xss
name: js-xss
urls:
  home: https://jsxss.com/
  repository: https://github.com/leizongmin/js-xss
  docs: https://jsxss.com/en/starter/quickstart.html
category:
  - library
description: Node.js and browser module that sanitizes untrusted HTML against a whitelist of tags and attributes to prevent cross-site scripting.
status: active
maintainer: Zongmin Lei
maintainerType: individual
firstRelease: 2012
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 0.10
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-24
githubStargazers: 5312
npmWeeklyDownloads: 7468135
contributors: 38
dependentRepos: 111112
dependentPackages: 899
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://jsxss.com/en/index.html
    checkedAt: 2026-11-16
  - field: urls
    url: https://jsxss.com/en/starter/quickstart.html
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/leizongmin/js-xss
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/leizongmin/js-xss/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/leizongmin/js-xss/blob/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://registry.npmjs.org/xss/latest
    checkedAt: 2026-11-16
  - field: runtime
    url: https://registry.npmjs.org/xss/latest
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://registry.npmjs.org/xss/latest
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/leizongmin/js-xss/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/leizongmin/js-xss/blob/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/leizongmin/js-xss/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/leizongmin/js-xss/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://registry.npmjs.org/xss/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://registry.npmjs.org/xss
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/xss
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/leizongmin/js-xss
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/leizongmin/js-xss/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-08:2026-11-14/xss
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/xss
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/xss
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

js-xss sanitizes untrusted HTML against a whitelist of tags and attributes to prevent cross-site scripting. The site documents its use on Node.js and in the browser, and a command-line tool for processing files.

## Worth knowing

When the whitelist allows the `style` attribute, its value is processed by the separate cssfilter module, which has its own default whitelist.
