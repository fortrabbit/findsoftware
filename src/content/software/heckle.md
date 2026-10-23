---
id: heckle
name: Heckle
urls:
  repository: https://code.haverbeke.berlin/marijn/heckle
  docs: https://code.haverbeke.berlin/marijn/heckle/src/branch/main/README.md
category:
  - ssg
description: Minimal Jekyll clone for Node.js that builds a site from Jekyll-style folders with Mold templates.
status: active
maintainer: Marijn Haverbeke
maintainerType: individual
language: javascript
runtime:
  - node
hosting:
  - node
contentStore:
  - flat-file
templating: mold
installMethod: npm install, then run heckle.js with nodejs in the blog directory
licenseModel: open-source
license: MIT
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://raw.githubusercontent.com/marijnh/heckle/master/README.md
    checkedAt: 2026-10-22
  - field: urls
    url: https://code.haverbeke.berlin/marijn/heckle/raw/branch/main/README.md
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/marijnh/heckle/master/LICENSE
    checkedAt: 2026-10-22
  - field: license
    url: https://raw.githubusercontent.com/marijnh/heckle/master/LICENSE
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://raw.githubusercontent.com/marijnh/heckle/master/LICENSE
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/marijnh/heckle
    checkedAt: 2026-10-22
  - field: category
    url: https://raw.githubusercontent.com/marijnh/heckle/master/README.md
    checkedAt: 2026-10-22
  - field: runtime
    url: https://raw.githubusercontent.com/marijnh/heckle/master/README.md
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://raw.githubusercontent.com/marijnh/heckle/master/README.md
    checkedAt: 2026-10-22
  - field: templating
    url: https://raw.githubusercontent.com/marijnh/heckle/master/README.md
    checkedAt: 2026-10-22
  - field: contentStore
    url: https://raw.githubusercontent.com/marijnh/heckle/master/README.md
    checkedAt: 2026-10-22
figure:
  emoji: ⚡
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · SSG
ai: authored
packagistDownloads: null
---

Heckle is a minimal Jekyll clone for Node.js, written by Marijn Haverbeke. It treats the _posts, _layouts and _includes folders in much the same way Jekyll does, and its templates are written in the Mold templating language.

Dependencies are installed with npm install, and the site is built by running heckle.js with nodejs from the directory that holds the blog files. The repository moved from GitHub to a new host at code.haverbeke.berlin, and the GitHub copy is archived.

## Worth knowing

The README calls the project a work in progress that may be radically changed or abandoned at any time, and it advises against using Heckle where a stable, finished tool is needed. An npm package named heckle exists, but it belongs to a different project.
