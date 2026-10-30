---
id: miniserve
name: miniserve
urls:
  repository: https://github.com/svenstaro/miniserve
category:
  - web-server
description: Command-line tool that serves files and directories over HTTP from a single binary.
status: active
maintainer: Sven-Hendrik Haase
maintainerType: individual
firstRelease: 2018
language: rust
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: binary download from the GitHub releases page
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-04-08
githubStargazers: 8040
contributors: 72
dependentRepos: 1
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://github.com/svenstaro/miniserve
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://github.com/svenstaro/miniserve/blob/master/LICENSE
    checkedAt: 2026-10-30
  - field: category
    url: https://github.com/svenstaro/miniserve/blob/master/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/svenstaro/miniserve
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/svenstaro/miniserve/blob/master/README.md
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://github.com/svenstaro/miniserve/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/svenstaro/miniserve/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/svenstaro/miniserve/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/svenstaro/miniserve/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/svenstaro/miniserve/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/svenstaro/miniserve/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/svenstaro/miniserve/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/svenstaro/miniserve/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/svenstaro/miniserve/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/svenstaro/miniserve/blob/master/README.md
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/svenstaro/miniserve/blob/master/LICENSE
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://github.com/svenstaro/miniserve/blob/master/LICENSE
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/svenstaro/miniserve/releases/tag/v0.35.0
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/svenstaro/miniserve/releases/tag/v0.35.0
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://github.com/svenstaro/miniserve/releases/tag/v0.1.2
    checkedAt: 2026-10-30
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/miniserve
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://github.com/svenstaro/miniserve
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/svenstaro/miniserve/contributors?per_page=1
    checkedAt: 2026-10-30
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

miniserve is a command-line web server that serves one file or one directory over HTTP from a single binary. Its systemd unit can start it for a path as a daemon, so it can serve a directory unattended. It can be installed from release binaries and several package managers, with Cargo from crates.io, or run from a Docker or Podman image.

## Worth knowing

By default miniserve listens on all interfaces. The README notes that a public interface can also need the systemd unit's address rules changed.
