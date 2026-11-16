---
id: marked
name: Marked
urls:
  home: https://marked.js.org
  repository: https://github.com/markedjs/marked
  docs: https://marked.js.org
  plugins: https://marked.js.org/using_advanced
category:
  - library
description: Markdown parser and compiler written in JavaScript that converts Markdown to HTML in browsers and on Node.js.
status: active
maintainer: MarkedJS
maintainerType: community
firstRelease: 2011
language: javascript
runtime:
  - node
hosting:
  - node
installMethod: npm install
licenseModel: open-source
license: MIT, BSD-3-Clause
currentMajor: "18"
latestReleaseDate: 2026-11-09
githubStargazers: 37306
npmWeeklyDownloads: 126826502
contributors: 273
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://marked.js.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/markedjs/marked
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/markedjs/marked/blob/master/README.md
    checkedAt: 2026-11-16
  - field: urls
    url: https://marked.js.org/using_advanced
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/markedjs/marked/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/markedjs/marked/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/markedjs/marked
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/markedjs/marked/blob/master/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/markedjs/marked/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/markedjs/marked/blob/master/README.md
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/marked
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/markedjs/marked/blob/v18.2.0/package.json
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/markedjs/marked/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/markedjs/marked/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/markedjs/marked/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/markedjs/marked/releases
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/marked
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/markedjs/marked
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/markedjs/marked/contributors?per_page=1
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

Marked is a Markdown compiler that turns Markdown into HTML. It runs in a browser or on Node.js, and it can also be used from a command line interface. It is built for speed and parses without caching, and custom extensions can be added to adapt it.

The MarkedJS organization maintains it, and the project's own documentation pages are rendered with Marked.

## Worth knowing

Marked does not sanitize the HTML it outputs. The README recommends passing the output through a sanitizer such as DOMPurify before it is shown to users.

Node.js support covers only the current and LTS release lines.
