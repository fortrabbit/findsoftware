---
id: sanitize-html
name: sanitize-html
urls:
  repository: https://github.com/apostrophecms/apostrophe
  docs: https://github.com/apostrophecms/apostrophe/tree/main/packages/sanitize-html#readme
category:
  - library
description: JavaScript library that cleans user-submitted HTML, keeping allowlisted elements and attributes and discarding the rest.
status: active
maintainer: P'unk Avenue LLC
maintainerType: company
firstRelease: 2013
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-11-11
githubStargazers: 4669
npmWeeklyDownloads: 18174490
contributors: 101
dependentRepos: 89985
dependentPackages: 1495
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/apostrophecms/apostrophe
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/apostrophecms/apostrophe/main/packages/sanitize-html/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/apostrophecms/apostrophe/main/packages/sanitize-html/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/apostrophecms/apostrophe
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/apostrophecms/apostrophe/main/packages/sanitize-html/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/apostrophecms/apostrophe/main/packages/sanitize-html/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://registry.npmjs.org/sanitize-html/latest
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/apostrophecms/apostrophe/main/packages/sanitize-html/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/apostrophecms/apostrophe/main/packages/sanitize-html/package.json
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/apostrophecms/apostrophe/main/packages/sanitize-html/package.json
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/sanitize-html
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/apostrophecms/apostrophe/tags
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://registry.npmjs.org/sanitize-html
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/apostrophecms/apostrophe
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/apostrophecms/apostrophe/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/sanitize-html
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/sanitize-html
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/sanitize-html
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

sanitize-html is a JavaScript library that cleans user-submitted HTML. A caller lists the tags and the attributes per tag to permit, and the library discards the rest. The README names HTML from rich text editors, including CSS pasted from Word, as typical input.

The 2.x line no longer ships a build for the browser, so browser use means including the package in the project's own bundle.

## Worth knowing

The standalone repository is archived and points to the monorepo, where the package sits in its packages/sanitize-html directory. The README's Node.js support statement is older than the requirement in the published package.
