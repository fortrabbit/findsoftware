---
id: prose
name: Prose
urls:
  home: https://prose.io
  repository: https://github.com/prose/prose
  docs: https://github.com/prose/prose/blob/master/README.md
category:
  - cms
description: Web-based content editor that creates, edits and deletes the files of a website stored in a GitHub repository.
status: stub
maintainer: Development Seed
firstRelease: 2014
language: javascript
runtime:
  - node
hosting:
  - node
adminUi: true
runsAs:
  - browser
installMethod: git clone and npm i for local development
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "1"
latestReleaseDate: 2014-04-23
githubStargazers: 4775
contributors: 69
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://prose.io
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/prose/prose
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/prose/prose/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/prose/prose/master/LICENSE.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/prose/prose
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/prose/prose/blob/master/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/prose/prose/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/prose/prose/blob/master/CONTRIBUTING.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/prose/prose/blob/master/DEPLOYMENT.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/prose/prose
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/prose/prose/master/LICENSE.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/prose/prose/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/prose/prose/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/prose/prose/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/prose/prose
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/prose/prose/contributors
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/prose/prose/blob/master/CONTRIBUTING.md
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · CMS
ai: authored
packagistDownloads: null
---

Prose is a web-based content editor for files in GitHub repositories. It creates, edits and deletes files and saves the changes to GitHub, and it runs entirely in the browser. The hosted version at prose.io is served from GitHub Pages and uses a separate service, Gatekeeper, to authenticate with the GitHub API.

To run it on a developer machine, the contributing guide has the repository cloned, `npm i` run, and the app started with `npm start`. Node.js is the listed prerequisite.

## Worth knowing

The [README](https://github.com/prose/prose/blob/master/README.md) says the project is looking for new maintainers. Because Prose runs entirely on the client, it relies on a Gatekeeper to authenticate with the GitHub API. The [deployment page](https://github.com/prose/prose/blob/master/DEPLOYMENT.md) describes setting up your own instance.
