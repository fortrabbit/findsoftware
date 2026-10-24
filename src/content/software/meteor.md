---
id: meteor
name: Meteor
urls:
  home: https://www.meteor.com
  repository: https://github.com/meteor/meteor
  docs: https://docs.meteor.com
  plugins: https://atmospherejs.com/
category:
  - framework
description: JavaScript application platform for building web and mobile applications.
status: active
maintainer: Meteor Software Ltd.
maintainerType: company
language: javascript
runtime:
  - node
hosting:
  - node
databases:
  - mongodb
runsAs:
  - always-on
installMethod: npx meteor
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-09-08
githubStargazers: 44793
npmWeeklyDownloads: 1644
social:
  x: https://x.com/meteorjs
  discord: https://discord.gg/hZkTCaVjmT
  forum: https://forums.meteor.com/
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://github.com/meteor/meteor
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/meteor/meteor
    checkedAt: 2026-10-21
  - field: urls
    url: https://github.com/meteor/meteor
    checkedAt: 2026-10-21
  - field: category
    url: https://api.github.com/repos/meteor/meteor
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/meteor/meteor
    checkedAt: 2026-10-21
  - field: runtime
    url: https://docs.meteor.com/about/install.html
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://docs.meteor.com/about/install.html
    checkedAt: 2026-10-21
  - field: license
    url: https://raw.githubusercontent.com/meteor/meteor/devel/LICENSE
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/meteor/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/meteor/meteor/releases/latest
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://raw.githubusercontent.com/meteor/meteor/devel/LICENSE
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/meteor/meteor
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/meteor
    checkedAt: 2026-10-21
  - field: urls
    url: https://github.com/meteor/meteor
    checkedAt: 2026-10-21
  - field: databases
    url: https://docs.meteor.com/tutorials/deployment/deployment.html
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://docs.meteor.com/tutorials/deployment/deployment.html
    checkedAt: 2026-10-21
ai: authored
packagistDownloads: null
---

Meteor is a JavaScript platform for web and mobile applications. The meteor command line tool creates a project, asking for a frontend framework, and runs it during development; the README links tutorials for React, Blaze, Vue, Svelte and Solid. Packages for Meteor are published on [Atmosphere](https://atmospherejs.com/).

For production, `meteor build` produces a bundle that is a plain Node.js application. The [deployment guide](https://docs.meteor.com/tutorials/deployment/deployment.html) describes it as a websocket-based Node.js app, started with a MongoDB connection string, so the host needs a running Node.js process and access to a MongoDB server.

## Worth knowing

Galaxy, a hosted platform from the creators of Meteor, deploys Meteor apps from a git push. The npm package named meteor is only the installer for the command line tool, and the [install guide](https://docs.meteor.com/about/install.html) says not to add it to a project's package.json.
