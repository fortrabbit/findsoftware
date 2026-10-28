---
id: browser-sync
name: Browsersync
urls:
  home: https://browsersync.io/
  repository: https://github.com/BrowserSync/browser-sync
  docs: https://browsersync.io/docs
category:
  - dev-tool
description: Node development server that keeps multiple browsers and devices in sync, reloading pages and mirroring interactions as files change.
status: active
maintainer: Shane Osbourne
firstRelease: 2013
language: javascript
runtime:
  - node
runtimeMin: node 8
runsAs:
  - local
installMethod: npm install -g browser-sync
licenseModel: open-source
license: Apache-2.0
currentMajor: "3"
latestReleaseDate: 2025-04-02
githubStargazers: 12293
npmWeeklyDownloads: 803648
contributors: 90
dependentRepos: 354567
dependentPackages: 9860
social:
  x: https://twitter.com/browsersync
  discord: https://discord.gg/2d2xUThp
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://browsersync.io/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/BrowserSync/browser-sync
    checkedAt: 2026-10-28
  - field: urls
    url: https://browsersync.io/docs
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/BrowserSync/browser-sync/master/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/BrowserSync/browser-sync
    checkedAt: 2026-10-28
  - field: category
    url: https://browsersync.io/docs/command-line
    checkedAt: 2026-10-28
  - field: runtime
    url: https://browsersync.io/
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/BrowserSync/browser-sync/v3.0.3/packages/browser-sync/package.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://browsersync.io/docs
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://browsersync.io/docs
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://browsersync.io/docs
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/BrowserSync/browser-sync
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://browsersync.io/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/browser-sync
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/BrowserSync/browser-sync/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://registry.npmjs.org/browser-sync
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/BrowserSync/browser-sync
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/BrowserSync/browser-sync/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/browser-sync
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/browser-sync
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/browser-sync
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
---

Browsersync is a Node development server that serves a site or proxies an existing one, watches its files, and reloads connected browsers when they change. It works by injecting an asynchronous script after the opening body tag, so a page needs a body tag for the script to load. The README notes that the snippet can be customised for other cases.

With several browsers or devices connected, the server mirrors scroll, click, refresh and form actions between them, and it can push recorded URLs out to all of them. Settings such as network throttling and sync toggles are available from a browser UI or from the command line. A JavaScript API lets build scripts create named instances, and the project integrates with task runners such as Grunt and Gulp as well as other Node projects.
