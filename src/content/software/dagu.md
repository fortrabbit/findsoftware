---
id: dagu
name: Dagu
urls:
  home: https://dagu.sh
  repository: https://github.com/dagucloud/dagu
  docs: https://docs.dagu.sh
  pricing: https://dagu.sh/pricing
category:
  - backend
description: Self-hostable workflow engine that runs declarative YAML workflows of scripts, commands and containers on one machine or a fleet of workers, with a built-in web UI.
status: active
maintainer: Descarty, Inc.
maintainerType: company
firstRelease: 2022
language: go
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: install script (curl) with setup wizard
licenseModel: open-core
license: GPL-3.0-or-later
currentMajor: "2"
latestReleaseDate: 2026-11-03
githubStargazers: 4538
npmWeeklyDownloads: 917
contributors: 117
social:
  bluesky: https://bsky.app/profile/dagu-sh.bsky.social
  discord: https://discord.gg/gpahPUjGRk
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://dagu.sh/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/dagucloud/dagu
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.dagu.sh/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://dagu.sh/terms
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/dagucloud/dagu/releases
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/dagucloud/dagu
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/dagucloud/dagu
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/dagucloud/dagu
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.dagu.sh/overview/deployment-models
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/dagucloud/dagu
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/dagucloud/dagu
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.dagu.sh/getting-started/installation/npm
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/dagucloud/dagu
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/dagucloud/dagu
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://raw.githubusercontent.com/dagucloud/dagu/main/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/dagucloud/dagu
    checkedAt: 2026-11-03
  - field: license
    url: https://raw.githubusercontent.com/dagucloud/dagu/main/LICENSING.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://docs.dagu.sh/overview/self-host-license
    checkedAt: 2026-11-03
  - field: urls
    url: https://dagu.sh/pricing
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/@dagucloud/dagu
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/dagucloud/dagu/releases/latest
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/dagucloud/dagu/releases/latest
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/dagucloud/dagu
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/dagucloud/dagu/contributors?per_page=1
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Dagu is a self-hostable workflow engine. Workflows are declared in YAML and run scripts, commands and containers on one machine or on a fleet of workers, and the server serves a built-in web UI. An external caller can trigger a single workflow through a token-authenticated webhook. Installs use a shell script, Homebrew, npm, Docker, Helm or PowerShell. The npm package downloads the Go binary during installation. The [deployment models](https://docs.dagu.sh/overview/deployment-models) page describes an always-on server that sends reports while workers run the jobs.

## Worth knowing

SSO, RBAC, audit logging and incident routing come with the Team and Pro self-host plans. Embedding the Go API in a product distributed outside the GPL needs a separate written agreement, according to the licensing notes. Public webhook URLs and remote MCP access run through Dagu Cloud.
