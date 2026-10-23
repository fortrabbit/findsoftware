---
id: chaibuilder
name: ChaiBuilder
urls:
  home: https://chaibuilder.com
  repository: https://github.com/chaibuilder/core
  docs: https://chaibuilder.com/docs
  pricing: https://chaibuilder.com/pricing
category:
  - cms
description: Open-source AI-enabled visual website builder for Next.js, with a block-based editor and server-side data providers.
status: active
maintainer: ChaiBuilder contributors
maintainerType: community
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 20
contentStore:
  - database
databases:
  - sqlite
  - postgres
adminUi: true
i18n: yes, multilingual in chaipro
runsAs:
  - always-on
renderingModes:
  - isr
installMethod: npx chaibuilder-app create
licenseModel: open-core
license: BSD-3-Clause
githubStargazers: 487
contributors: 13
social:
  x: https://x.com/chaibuilder
  forum: https://github.com/chaibuilder/core/discussions
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: name
    url: https://chaibuilder.com
    checkedAt: 2026-10-23
  - field: urls
    url: https://chaibuilder.com
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/chaibuilder/core
    checkedAt: 2026-10-23
  - field: urls
    url: https://chaibuilder.com/docs
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/chaibuilder/core/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/chaibuilder/core/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://chaibuilder.com/pricing
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/chaibuilder/core
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/chaibuilder/core/blob/main/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://chaibuilder.com/docs/concepts/pages-vs-cms
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://chaibuilder.com/docs/getting-started/quickstart
    checkedAt: 2026-10-23
  - field: databases
    url: https://chaibuilder.com/docs/getting-started/quickstart
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/chaibuilder/core/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://chaibuilder.com/docs/getting-started/quickstart
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/chaibuilder/core/blob/main/README.md
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://github.com/chaibuilder/core
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/chaibuilder/core/contributors?per_page=1
    checkedAt: 2026-10-23
  - field: runtime
    url: https://chaibuilder.com/docs/deployment/requirements
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://chaibuilder.com/docs/deployment/requirements
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://chaibuilder.com/docs/deployment/deploy-node
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://chaibuilder.com/docs/deployment/hosting-overview
    checkedAt: 2026-10-23
  - field: i18n
    url: https://chaibuilder.com/pricing
    checkedAt: 2026-10-23
  - field: urls
    url: https://chaibuilder.com/pricing
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · CMS
ai: authored
packagistDownloads: null
---

ChaiBuilder is an AI-enabled visual website builder for Next.js, maintained by ChaiBuilder contributors. Editors work on a drag-and-drop canvas with Tailwind styling. Pages are rendered by the Next.js app, built on first visit and revalidated when published, so the site needs a server runtime: a long-running Node process, a container or a managed Next.js platform such as Vercel, Netlify or Cloudflare. Content lives in a SQLite or Postgres database.

The project is added to a Next.js app as a git subtree, or created with the `npx chaibuilder-app create` scaffolder, which sets up a starter project.

## Worth knowing

The open-source core is BSD-3-Clause. The starter runs chaipro, a licensed edition that adds multi-tenancy, role-based access control and multilingual support, among others. It runs free for 30 days and needs a license key after that, and its source is not included. The core's README names an npm package that is not on the registry, so the subtree is the install path that works for the core.
