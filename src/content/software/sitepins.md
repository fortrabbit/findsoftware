---
id: sitepins
name: Sitepins
urls:
  home: https://sitepins.com
  repository: https://github.com/sitepins/sitepins
  docs: https://docs.sitepins.com
  pricing: https://sitepins.com/pricing
category:
  - cms
description: Sitepins is an open-source Git-based headless CMS that edits Markdown and frontmatter files in a GitHub or GitLab repository.
status: active
maintainer: Sitepins
hqCountry: BD
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
databases:
  - mongodb
adminUi: true
i18n: yes, interface in 12 languages
runsAs:
  - always-on
installMethod: pnpm
licenseModel: open-source
license: AGPL-3.0
githubStargazers: 192
contributors: 6
social:
  x: https://x.com/sitepinscms
  discord: https://discord.gg/UDhCe68qy
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: name
    url: https://github.com/sitepins/sitepins/blob/main/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://sitepins.com
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/sitepins/sitepins
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/sitepins/sitepins/blob/main/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/sitepins/sitepins/blob/main/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/sitepins/sitepins
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/sitepins/sitepins/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/sitepins/sitepins/blob/main/README.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/sitepins/sitepins/blob/main/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/sitepins/sitepins/blob/main/README.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://github.com/sitepins/sitepins/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/sitepins/sitepins/blob/main/README.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/sitepins/sitepins/blob/main/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://sitepins.com/pricing
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/sitepins/sitepins
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/sitepins/sitepins/contributors
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://sitepins.com/contact
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://sitepins.com/contact
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/sitepins/sitepins/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/sitepins/sitepins/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/sitepins/sitepins/blob/main/README.md
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · CMS
ai: authored
packagistDownloads: null
---

Sitepins is an open-source CMS that edits the Markdown and frontmatter files of a site kept in a GitHub or GitLab repository. Content stays in the repository, and nothing is copied into a Sitepins database.

The editing interface is a Next.js application, and the backend is an Express API with MongoDB. Self-hosting needs Node.js 22 or later, and the README gives two ways to start it: pnpm, or a docker compose file that brings up MongoDB, the API and the web app together.

## Worth knowing

A hosted version, Sitepins Cloud, is offered next to the open-source build, and its [pricing page](https://sitepins.com/pricing) lists the plans. The self-hosted build is described as having no plans, billing or usage limits. Self-hosting also needs a MongoDB instance that runs as a replica set.
