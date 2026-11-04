---
id: automerge
name: Automerge
urls:
  home: https://automerge.org
  repository: https://github.com/automerge/automerge
  docs: https://automerge.org/docs/
category:
  - backend
description: Library of data structures for building collaborative applications, with a JavaScript package and a Rust core.
status: active
maintainer: Automerge contributors
maintainerType: community
firstRelease: 2019
language: javascript
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-09-16
githubStargazers: 6711
npmWeeklyDownloads: 97230
contributors: 61
dependentRepos: 25
dependentPackages: 32
social:
  bluesky: https://bsky.app/profile/automerge.org
  discord: https://discord.gg/zKGe4DCfgR
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://automerge.org/
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/automerge/automerge
    checkedAt: 2026-11-04
  - field: urls
    url: https://automerge.org/docs/hello/
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://api.github.com/repos/automerge/automerge/git/refs/tags/v0.0.1
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://raw.githubusercontent.com/automerge/automerge/main/LICENSE
    checkedAt: 2026-11-04
  - field: category
    url: https://automerge.org/
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/automerge/automerge
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/automerge/automerge/blob/main/javascript/README.md
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/automerge/automerge/blob/main/javascript/README.md
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://github.com/automerge/automerge/releases/tag/js/automerge-3.5.0
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://github.com/automerge/automerge/releases/tag/js/automerge-3.5.0
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/automerge/automerge
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/automerge/automerge/contributors
    checkedAt: 2026-11-04
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/@automerge/automerge
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40automerge%2Fautomerge
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40automerge%2Fautomerge
    checkedAt: 2026-11-04
ai: authored
packagistDownloads: null
---

Automerge is a library of data structures for building collaborative applications, which its homepage describes as a local-first sync engine for multiplayer apps. The JavaScript package, @automerge/automerge, wraps a core written in Rust and compiled to WebAssembly. The repository is a monorepo that also holds language bindings and the automerge-repo library.

## Worth knowing

Browser projects need a bundler to load the package, because the WebAssembly core cannot be imported as an ES module in browsers. The project's own docs describe the JavaScript implementation as usable in Node.js, Electron and browsers.
