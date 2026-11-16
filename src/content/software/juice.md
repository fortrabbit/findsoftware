---
id: juice
name: Juice
urls:
  home: https://automattic.github.io/juice/
  repository: https://github.com/Automattic/juice
  docs: https://github.com/Automattic/juice#readme
category:
  - build-tool
  - email
description: JavaScript library that inlines CSS rules into the style attributes of HTML, used for HTML emails and embeds.
status: active
maintainer: Automattic
firstRelease: 2011
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
installMethod: npm install
licenseModel: open-source
license: MIT
currentMajor: "12"
latestReleaseDate: 2026-11-10
githubStargazers: 3286
npmWeeklyDownloads: 4634599
contributors: 67
dependentRepos: 7645
dependentPackages: 441
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://automattic.github.io/juice/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/Automattic/juice
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/Automattic/juice/master/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/Automattic/juice/master/LICENSE.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/Automattic/juice
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/Automattic/juice/master/LICENSE.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/Automattic/juice/master/LICENSE.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/Automattic/juice
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/Automattic/juice/master/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/Automattic/juice/master/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://raw.githubusercontent.com/Automattic/juice/v12.2.3/package.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/Automattic/juice/master/README.md
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/juice
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/juice
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/juice
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/Automattic/juice
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/Automattic/juice/contributors
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/Automattic/juice/releases/tags/v12.2.3
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/Automattic/juice/releases/tags/v12.2.3
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/juice
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
---

Juice is a JavaScript library that moves CSS rules into the style attribute of the HTML elements they match, for HTML emails and for embedding HTML in third-party websites. It takes an HTML string, a file or a cheerio document, and an options object controls how media queries, font faces, table attributes and template code blocks are handled. A command-line tool does the same for HTML files and whole directories.

The default module runs on Node.js. A separate browser entry exposes the inlining functions for code bundled for the browser, without the file and remote-resource functions. The project site hosts a web client for trying the library on a page of HTML.

## Worth knowing

Rules that use pseudo-classes such as :hover cannot be inlined, so they stay in a style tag.
