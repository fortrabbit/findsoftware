---
id: frontity
name: Frontity
urls:
  home: https://frontity.org
  repository: https://github.com/frontity/frontity
  docs: https://docs.frontity.org/
  plugins: https://api.frontity.org/frontity-packages
category:
  - framework
description: React framework for building WordPress websites, rendered by a Node.js server.
status: discontinued
maintainer: Worona Labs SL
maintainerType: company
parent: Automattic
firstRelease: 2019
language: javascript
runtime:
  - node
hosting:
  - node
basedOn:
  - react
runsAs:
  - always-on
renderingModes:
  - server
installMethod: npx frontity create
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2022-02-19
githubStargazers: 2930
npmWeeklyDownloads: 709
contributors: 36
social:
  x: https://twitter.com/frontity
  forum: https://community.frontity.org/
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: status
    url: https://github.com/frontity/frontity/blob/dev/README.md
    checkedAt: 2026-10-23
  - field: status
    url: https://frontity.org/legal/
    checkedAt: 2026-10-23
  - field: status
    url: https://api.github.com/repos/frontity/frontity
    checkedAt: 2026-10-23
  - field: urls
    url: https://frontity.org/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/frontity/frontity
    checkedAt: 2026-10-23
  - field: urls
    url: https://docs.frontity.org/getting-started
    checkedAt: 2026-10-23
  - field: name
    url: https://frontity.org/legal/
    checkedAt: 2026-10-23
  - field: description
    url: https://github.com/frontity/frontity/blob/dev/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/frontity/frontity/blob/dev/README.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/frontity/frontity/blob/dev/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/frontity/frontity
    checkedAt: 2026-10-23
  - field: runtime
    url: https://docs.frontity.org/getting-started
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/frontity/frontity/blob/dev/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://frontity.org/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://frontity.org/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/frontity/frontity
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/frontity/frontity/blob/dev/LICENSE
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/frontity/frontity/dev/LICENSE
    checkedAt: 2026-10-23
  - field: parent
    url: https://frontity.org/blog/frontity-is-joining-automattic/
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/frontity/frontity/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/frontity/frontity/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/frontity/frontity/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/frontity/frontity
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/frontity/frontity/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/frontity
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/frontity/frontity/blob/dev/README.md
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

Frontity is a React framework for building websites on WordPress. WordPress stays the place where content is written and edited, and Frontity reads that content through the WordPress REST API and renders the pages with React. A project starts with `npx frontity create`, is built with `npx frontity build`, and runs as a Node.js server on a different host from the WordPress one. The build folder can go to any hosting that serves Node.js apps, and the [deployment guide](https://docs.frontity.org/deployment) covers Vercel, Layer0 and Heroku. The code is copyrighted by Worona Labs SL, and Automattic acquired the project.

## Worth knowing

The README, the homepage and the legal page all say the framework is no longer under active development, and the repository is archived. A project built on it needs a WordPress site for content and a Node.js host for the front end, so both have to stay running.
