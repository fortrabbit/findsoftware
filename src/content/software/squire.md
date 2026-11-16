---
id: squire
name: Squire
urls:
  repository: https://github.com/fastmail/Squire
  docs: https://github.com/fastmail/Squire/blob/master/README.md
category:
  - ui-library
description: HTML5 rich text editor library that a web page embeds in place of a textarea and edits as HTML.
status: active
maintainer: Neil Jenkins
firstRelease: 2014
language: javascript
installMethod: npm, script tag
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-11-10
githubStargazers: 4928
npmWeeklyDownloads: 64481
contributors: 27
dependentRepos: 875
dependentPackages: 21
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/fastmail/Squire
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/fastmail/Squire/blob/master/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/fastmail/Squire/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/fastmail/Squire/blob/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/fastmail/Squire
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/fastmail/Squire/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/fastmail/Squire/blob/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/fastmail/Squire
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/fastmail/Squire/blob/master/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/fastmail/Squire/git/tags/41ff391f36612f44d2aa0222f165127ff7a741c5
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://registry.npmjs.org/squire-rte/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://registry.npmjs.org/squire-rte
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/squire-rte
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/squire-rte
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/squire-rte
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/fastmail/Squire
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/fastmail/Squire/contributors?per_page=1
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

Squire is an HTML5 rich text editor that a page creates on a DOM node, replacing a textarea, and reads and writes as HTML. It was built for email composition in the Fastmail web app, where forwarded and quoted HTML from other senders has to keep its formatting. The editor therefore keeps the HTML as the source of truth rather than converting it into a limited internal model. It ships no toolbar, widgets or overlays; the application builds its own interface around the editor.

## Worth knowing

The README says a page must provide a way to turn raw HTML safely into DOM nodes. Squire uses DOMPurify when the page loads it; otherwise the configuration needs a sanitizeToDOMFragment function.
