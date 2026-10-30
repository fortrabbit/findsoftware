---
id: mise
name: mise
urls:
  home: https://mise.jdx.dev/
  repository: https://github.com/jdx/mise
  docs: https://mise.jdx.dev/
category:
  - dev-tool
description: Command-line tool that installs a project's dev tools, sets its environment variables and runs its tasks from one mise.toml file.
status: active
maintainer: Jeff Dickey
maintainerType: individual
firstRelease: 2023
language: rust
runtime:
  - binary
runsAs:
  - local
installMethod: install script from mise.run
licenseModel: open-source
license: MIT
latestReleaseDate: 2026-10-30
githubStargazers: 35564
npmWeeklyDownloads: 8461
contributors: 461
social:
  discord: https://discord.gg/mABnUDvP57
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://mise.jdx.dev/
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/jdx/mise
    checkedAt: 2026-10-30
  - field: urls
    url: https://mise.jdx.dev/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://github.com/jdx/mise/blob/main/LICENSE
    checkedAt: 2026-10-30
  - field: category
    url: https://mise.jdx.dev/
    checkedAt: 2026-10-30
  - field: language
    url: https://mise.jdx.dev/
    checkedAt: 2026-10-30
  - field: runtime
    url: https://mise.jdx.dev/
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://mise.jdx.dev/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://mise.jdx.dev/installing-mise.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://mise.jdx.dev/installing-mise.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://mise.jdx.dev/installing-mise.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://mise.jdx.dev/installing-mise.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://mise.jdx.dev/installing-mise.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://mise.jdx.dev/installing-mise.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://mise.jdx.dev/installing-mise.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://mise.jdx.dev/installing-mise.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://mise.jdx.dev/installing-mise.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://mise.jdx.dev/installing-mise.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://mise.jdx.dev/installing-mise.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://mise.jdx.dev/installing-mise.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://mise.jdx.dev/installing-mise.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://mise.jdx.dev/installing-mise.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://mise.jdx.dev/installing-mise.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://mise.jdx.dev/installing-mise.html
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://mise.jdx.dev/installing-mise.html
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/jdx/mise/blob/main/LICENSE
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://mise.jdx.dev/
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/jdx/mise/releases/tag/v2026.10.24
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://github.com/jdx/mise/releases/tag/v2023.8.0
    checkedAt: 2026-10-30
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-19:2026-10-25/mise
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://github.com/jdx/mise
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/jdx/mise/contributors?per_page=1
    checkedAt: 2026-10-30
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
---

mise is a command-line tool, written in Rust, that installs the tools a project uses, sets its environment variables and runs its tasks. A project keeps those settings in a mise.toml file, which the shell, the editor and CI read. The tools come from a registry of installable tools or from backends such as GitHub releases, Cargo, npm and PyPI. It reads asdf's .tool-versions files and can run asdf plugins, and a project using direnv can move its environment lines into mise.toml. It installs through a shell script, Homebrew and other package managers, Docker images or Cargo.

## Worth knowing

mise is a developer and CI tool, so it belongs on a developer's machine or in a CI job, not on a live site. Running direnv and mise together is unsupported.
