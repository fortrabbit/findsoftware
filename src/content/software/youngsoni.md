---
id: youngsoni
name: Youngsoni
urls:
  repository: https://github.com/ElijahToussaint/youngsoni
  docs: https://github.com/ElijahToussaint/youngsoni/blob/main/README.md
category:
  - ssg
description: Static blog generator that builds an HTML website from Markdown posts and Hjson configuration, with a web interface for editing its content.
status: active
maintainer: elijah toussaint
maintainerType: individual
firstRelease: 2023
runtime:
  - node
hosting:
  - static
contentStore:
  - flat-file
adminUi: true
templating: nunjucks
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: git clone, then npm install and ./generate.sh
licenseModel: open-source
license: AGPL-3.0, AGPL-3.0-or-later
currentMajor: "1"
latestReleaseDate: 2023-01-07
githubStargazers: 3
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/ElijahToussaint/youngsoni
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/ElijahToussaint/youngsoni/blob/main/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/ElijahToussaint/youngsoni/blob/main/package.json
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/ElijahToussaint/youngsoni/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/ElijahToussaint/youngsoni/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/ElijahToussaint/youngsoni/blob/main/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/ElijahToussaint/youngsoni/blob/main/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/ElijahToussaint/youngsoni/blob/main/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/ElijahToussaint/youngsoni/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/ElijahToussaint/youngsoni/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/ElijahToussaint/youngsoni/blob/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/ElijahToussaint/youngsoni/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/ElijahToussaint/youngsoni/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/ElijahToussaint/youngsoni
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/ElijahToussaint/youngsoni/blob/main/package.json
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/ElijahToussaint/youngsoni/blob/main/package.json
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/ElijahToussaint/youngsoni/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/ElijahToussaint/youngsoni/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/ElijahToussaint/youngsoni/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/ElijahToussaint/youngsoni
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/ElijahToussaint/youngsoni/contributors
    checkedAt: 2026-10-23
ai: authored
---

Youngsoni is a static blog generator that runs on Node.js. Posts are Markdown files in the posts directory, and the site is rendered with Nunjucks templates. It is installed by cloning its Git repository and running `npm install`, and `./generate.sh` builds the site. The generated output is static HTML. `npm start` starts a local web server for previewing the site and for a web interface that creates, edits and deletes site information.

## Worth knowing

The LICENSE file holds the AGPL-3.0 text, while `package.json` declares AGPL-3.0-or-later.
