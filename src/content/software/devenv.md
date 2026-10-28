---
id: devenv
name: devenv
urls:
  home: https://devenv.sh
  repository: https://github.com/cachix/devenv
  docs: https://devenv.sh/getting-started/
category:
  - dev-tool
description: Nix-based tool that declares a developer environment in a devenv.nix file (packages, languages, services, processes and tasks) and activates it in the shell.
status: active
maintainer: Cachix
firstRelease: 2022
language: rust
runsAs:
  - local
installMethod: nix profile install nixpkgs#devenv
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-09-24
githubStargazers: 7782
contributors: 312
social:
  x: https://x.com/devenv_nix
  discord: https://discord.gg/naMgvexb6q
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://devenv.sh/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/cachix/devenv
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/cachix/devenv/main/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://www.cachix.org/about
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/cachix/devenv
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/cachix/devenv/main/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://devenv.sh/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://devenv.sh/getting-started/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://devenv.sh/getting-started/
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/cachix/devenv
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/cachix/devenv/main/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/cachix/devenv/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/cachix/devenv/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/cachix/devenv/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/cachix/devenv
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/cachix/devenv/contributors?per_page=1
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
runtimeMin: null
packagistDownloads: null
npmWeeklyDownloads: null
---

devenv is a developer environment tool built on Nix. A project declares its environment in a devenv.nix file on top of Nix, and the inputs of that environment are pinned in a lockfile. The same environment can be built into OCI containers. An experimental machines feature installs or deploys NixOS and nix-darwin configurations over SSH from the command line.

## Worth knowing

Nix has to be installed before devenv. The install guide covers Linux, macOS and Windows through WSL2. A cloud version of the environments is in private beta.
