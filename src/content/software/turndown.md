---
id: turndown
name: Turndown
urls:
  home: https://mixmark-io.github.io/turndown/
  repository: https://github.com/mixmark-io/turndown
category:
  - library
description: JavaScript library that converts HTML into Markdown, for Node.js and in the browser.
status: active
maintainer: Dom Christie
firstRelease: 2014
language: javascript
runtime:
  - node
hosting:
  - node
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2026-11-04
githubStargazers: 11511
npmWeeklyDownloads: 17306257
contributors: 30
dependentRepos: 18680
dependentPackages: 536
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://mixmark-io.github.io/turndown/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/mixmark-io/turndown
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/mixmark-io/turndown/tags
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/mixmark-io/turndown/master/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/mixmark-io/turndown/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/mixmark-io/turndown
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/mixmark-io/turndown/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/mixmark-io/turndown/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/mixmark-io/turndown/master/README.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/mixmark-io/turndown/master/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/mixmark-io/turndown/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/mixmark-io/turndown/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/mixmark-io/turndown
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/mixmark-io/turndown/contributors
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/turndown
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/turndown
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/turndown
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

Turndown reads HTML and writes Markdown, and takes either an HTML string or a DOM node as input. The demo page says it aims to be CommonMark compliant, and options cover heading style, bullet markers, code block fences, emphasis and link style.

Rules decide how each element converts. Added rules take precedence over the CommonMark rules, `keep` and `remove` filters choose which elements stay as HTML or disappear, and plugins bundle several rules together. The [online demo](https://mixmark-io.github.io/turndown/) shows a conversion on the project's own page.

## Worth knowing

Turndown escapes Markdown characters in text with backslashes, using a group of regular expressions. The README says the resulting escaping rules can be quite aggressive, and a developer who is confident in the escaping can override the escape method.
