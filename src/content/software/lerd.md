---
id: lerd
name: Lerd
urls:
  home: https://lerd.sh
  repository: https://github.com/lerd-env/lerd
  docs: https://lerd.sh/getting-started/installation
category:
  - dev-tool
description: Open-source local PHP development environment for Linux and macOS that runs sites, PHP versions and services as rootless Podman containers.
status: active
maintainer: George Dumitrescu
firstRelease: 2026
language: go
runtime:
  - binary
databases:
  - mysql
  - postgres
runsAs:
  - local
installMethod: install script
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-20
githubStargazers: 1450
contributors: 28
social:
  x: https://x.com/lerdphp
  bluesky: https://bsky.app/profile/lerdphp.bsky.social
  discord: https://discord.gg/5JK54s7xCC
  subreddit: https://reddit.com/r/lerd
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://lerd.sh/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/lerd-env/lerd
    checkedAt: 2026-10-28
  - field: urls
    url: https://lerd.sh/getting-started/installation
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/lerd-env/lerd/blob/main/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/lerd-env/lerd
    checkedAt: 2026-10-28
  - field: runtime
    url: https://lerd.sh/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://lerd.sh/getting-started/installation
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://lerd.sh/getting-started/installation
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://lerd.sh/getting-started/installation
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://lerd.sh/getting-started/installation
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://lerd.sh/getting-started/installation
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/lerd-env/lerd
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://lerd.sh/
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/lerd-env/lerd/releases/tag/v1.37.1
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://github.com/lerd-env/lerd/releases/tag/v1.37.1
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://github.com/lerd-env/lerd/releases/tag/v0.1.0
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/lerd-env/lerd/blob/main/LICENSE
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/lerd-env/lerd
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/lerd-env/lerd/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: databases
    url: https://lerd.sh/
    checkedAt: 2026-10-28
ai: authored
contentStore: null
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

Lerd is a local development environment for PHP projects on Linux and macOS. It gives each project a .test domain with HTTPS and runs Nginx, PHP-FPM and the project's services as rootless Podman containers, so no Docker daemon is involved. The tool ships as a single Go binary, installed by a script or through apt, dnf or Homebrew.

## Worth knowing

Lerd needs Podman, and on Linux a systemd-based distribution. Windows is supported through WSL2, which is in beta.
