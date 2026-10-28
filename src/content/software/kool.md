---
id: kool
name: Kool
urls:
  home: https://kool.dev
  repository: https://github.com/kool-dev/kool
  docs: https://kool.dev/docs/getting-started/introduction
  pricing: https://kool.dev/cloud/pricing/reference
category:
  - dev-tool
description: Command-line tool for Docker-based local development environments, with optional deployment of containerized apps to the cloud.
status: active
maintainer: Kool Dev Sistemas de Informacao LTDA
maintainerType: company
firstRelease: 2020
hqCountry: BR
language: go
runtime:
  - binary
runsAs:
  - local
installMethod: install script (curl piped to bash)
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-09
githubStargazers: 726
contributors: 25
social:
  x: https://x.com/kabordev
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://kool.dev/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/kool-dev/kool
    checkedAt: 2026-10-28
  - field: urls
    url: https://kool.dev/docs/getting-started/introduction
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/kool-dev/kool/main/LICENSE.md
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://raw.githubusercontent.com/kool-dev/kool/main/LICENSE.md
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://kool.dev/about
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/kool-dev/kool/main/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/kool-dev/kool
    checkedAt: 2026-10-28
  - field: runtime
    url: https://kool.dev/docs/getting-started/installation
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://kool.dev/docs/getting-started/installation
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://kool.dev/docs/getting-started/installation
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/kool-dev/kool/main/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/kool-dev/kool
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/kool-dev/kool/main/LICENSE.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/kool-dev/kool/releases?per_page=100
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/kool-dev/kool/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/kool-dev/kool/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/kool-dev/kool
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/kool-dev/kool/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: urls
    url: https://kool.dev/cloud/pricing/reference
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

Kool is a command-line tool that runs Docker-based local development environments for web projects. The install script downloads the kool binary from the project's GitHub releases to the developer's machine, and the tool needs Docker Engine and Docker Compose running there. The docs cover Linux and macOS directly; Windows is supported only through WSL.

The CLI is MIT-licensed and maintained by Kool Dev, a company based in Brazil. The same company runs Kool Cloud, a managed cloud, and an option to deploy to a cloud or VPS the user brings. Those hosted products sit next to the open-source CLI and are separate from it.

## Worth knowing

Windows users need a WSL environment with Docker available inside it before the CLI can run; the CLI does not run natively on Windows.

Kool Cloud is a hosted product with its own pricing reference page. The CLI is usable without it.
