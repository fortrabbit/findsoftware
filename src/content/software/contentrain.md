---
id: contentrain
name: Contentrain
urls:
  home: https://contentrain.io
  repository: https://github.com/Contentrain/studio
  docs: https://docs.contentrain.io
  pricing: https://contentrain.io/pricing
category:
  - cms
  - headless-cms
description: Git-backed content management platform, self-hostable as an AGPL core, that stores structured content in a repository and edits it through chat, forms or a web UI.
status: active
maintainer: Contentrain, LLC
maintainerType: company
firstRelease: 2026
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
basedOn:
  - nuxt
databases:
  - postgres
adminUi: true
i18n: yes, multi-locale content workflows
runsAs:
  - always-on
installMethod: Docker image from GHCR, or pnpm from source
licenseModel: open-core
license: AGPL-3.0, AGPL-3.0 with additional terms (LICENSE-EXCEPTIONS), Proprietary, for the ee/ directory
currentMajor: "0"
latestReleaseDate: 2026-10-23
githubStargazers: 4
contributors: 2
social:
  x: https://x.com/Contentrain_io
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://contentrain.io
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/Contentrain/studio
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/Contentrain/studio/main/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/Contentrain/studio
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/Contentrain/studio/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/Contentrain/studio/main/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://raw.githubusercontent.com/Contentrain/studio/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/Contentrain/studio/main/docs/DOCKER.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/Contentrain/studio/main/docs/DOCKER.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://raw.githubusercontent.com/Contentrain/studio/main/docs/SELF_HOSTING.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://raw.githubusercontent.com/Contentrain/studio/main/README.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://raw.githubusercontent.com/Contentrain/studio/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/Contentrain/studio/main/LICENSE
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/Contentrain/studio/main/LICENSE-EXCEPTIONS
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/Contentrain/studio/main/README.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/Contentrain/studio/main/README.md
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/Contentrain/studio/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/Contentrain/studio/releases
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/Contentrain/studio/tags
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/Contentrain/studio
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/Contentrain/studio/contributors
    checkedAt: 2026-10-23
  - field: urls
    url: https://contentrain.io
    checkedAt: 2026-10-23
  - field: urls
    url: https://contentrain.io
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://raw.githubusercontent.com/Contentrain/studio/main/README.md
    checkedAt: 2026-10-23
  - field: name
    url: https://raw.githubusercontent.com/Contentrain/studio/main/README.md
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

Contentrain Studio is a content management platform that keeps structured content in a Git repository, which stays the source of truth. Editors work through chat, forms or a structured web UI. The core is written in TypeScript on Nuxt and runs on Node.js with PostgreSQL as its database. A Docker image is published for self-hosting.

## Worth knowing

The repository is open core. The core is licensed under AGPL-3.0 with additional terms, and the ee/ directory holds enterprise code under a proprietary license. A managed Pro and Enterprise offering runs on the same product, and SSO is listed as an Enterprise-only capability.
