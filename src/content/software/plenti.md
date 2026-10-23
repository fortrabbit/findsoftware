---
id: plenti
name: Plenti
urls:
  home: https://plenti.co
  repository: https://github.com/plentico/plenti
  docs: https://plenti.co/docs/
category:
  - ssg
  - cms
description: Static site generator for Svelte templates, built with a Go command-line tool, with a Git-backed editor for the deployed site.
status: active
maintainer: Jantcu LLC
maintainerType: company
firstRelease: 2020
language: go
runtime:
  - binary
hosting:
  - static
basedOn:
  - svelte
contentStore:
  - flat-file
adminUi: true
templating: svelte
runsAs:
  - static
renderingModes:
  - static
  - spa
installMethod: homebrew, snap
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-10-16
githubStargazers: 1078
contributors: 13
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://plenti.co/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/plentico/plenti
    checkedAt: 2026-10-23
  - field: urls
    url: https://plenti.co/docs/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://plenti.co/
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/plentico/plenti/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://plenti.co/
    checkedAt: 2026-10-23
  - field: category
    url: https://plenti.co/docs/
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://plenti.co/docs/
    checkedAt: 2026-10-23
  - field: templating
    url: https://plenti.co/docs/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://plenti.co/docs/installation/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://plenti.co/docs/installation/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://plenti.co/docs/installation/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://plenti.co/docs/github-actions/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://plenti.co/docs/build/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://plenti.co/docs/build/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://plenti.co/docs/build/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://plenti.co/docs/cms-setup/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://plenti.co/docs/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/plentico/plenti
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/plentico/plenti/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/plentico/plenti/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/plentico/plenti/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/plentico/plenti/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/plentico/plenti
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/plentico/plenti/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: Go · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Plenti is a static site generator for Svelte templates, with a Go command-line tool that runs the build. The `plenti build` command writes the site to a folder named public as static assets, and the pages hydrate into a single-page application with HTML fallbacks for navigation without JavaScript.

Content lives in JSON files in the project's Git repository. The in-browser editor changes those JSON files, which can then be committed with Git. The CLI is installed through Homebrew, Snap or a downloaded release.

## Worth knowing

The editor on a deployed site needs a remote Git repository and an OAuth app, both set in `plenti.json`, so that feature depends on a Git host. The README says the API may change until a stable 1.0 release.

[CMS setup](https://plenti.co/docs/cms-setup/) describes the local and deployed editing options.
