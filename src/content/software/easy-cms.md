---
id: easy-cms
name: Easy CMS
urls:
  home: https://easycms.dev
  repository: https://github.com/maritonx/easy-cms
  docs: https://easycms.dev/docs
category:
  - headless-cms
description: Embedded headless CMS that runs inside a Nuxt or Next.js app, with a typed local API, a REST API and an admin at /admin.
status: active
maintainer: Kanawoot K.
maintainerType: individual
firstRelease: 2026
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
contentStore:
  - database
databases:
  - sqlite
  - postgres
adminUi: true
headlessApi:
  - rest
  - graphql
i18n: localized document fields
runsAs:
  - always-on
installMethod: npm create easy-cms@latest
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-11-04
githubStargazers: 2
npmWeeklyDownloads: 9301
contributors: 3
social:
  forum: https://github.com/maritonx/easy-cms/discussions
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://easycms.dev/
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/maritonx/easy-cms
    checkedAt: 2026-11-04
  - field: urls
    url: https://easycms.dev/docs
    checkedAt: 2026-11-04
  - field: category
    url: https://raw.githubusercontent.com/maritonx/easy-cms/main/README.md
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://api.github.com/repos/maritonx/easy-cms/tags
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://raw.githubusercontent.com/maritonx/easy-cms/main/LICENSE
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/maritonx/easy-cms
    checkedAt: 2026-11-04
  - field: license
    url: https://api.github.com/repos/maritonx/easy-cms
    checkedAt: 2026-11-04
  - field: license
    url: https://raw.githubusercontent.com/maritonx/easy-cms/main/LICENSE
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://raw.githubusercontent.com/maritonx/easy-cms/main/LICENSE
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/maritonx/easy-cms/releases
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@easy-cms/core
    checkedAt: 2026-11-04
  - field: runtime
    url: https://registry.npmjs.org/@easy-cms/core
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://registry.npmjs.org/@easy-cms/core
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://raw.githubusercontent.com/maritonx/easy-cms/main/README.md
    checkedAt: 2026-11-04
  - field: databases
    url: https://raw.githubusercontent.com/maritonx/easy-cms/main/README.md
    checkedAt: 2026-11-04
  - field: contentStore
    url: https://raw.githubusercontent.com/maritonx/easy-cms/main/README.md
    checkedAt: 2026-11-04
  - field: adminUi
    url: https://raw.githubusercontent.com/maritonx/easy-cms/main/README.md
    checkedAt: 2026-11-04
  - field: headlessApi
    url: https://raw.githubusercontent.com/maritonx/easy-cms/main/README.md
    checkedAt: 2026-11-04
  - field: headlessApi
    url: https://raw.githubusercontent.com/maritonx/easy-cms/main/README.md
    checkedAt: 2026-11-04
  - field: i18n
    url: https://raw.githubusercontent.com/maritonx/easy-cms/main/README.md
    checkedAt: 2026-11-04
  - field: runsAs
    url: https://easycms.dev/docs/deploy/vps
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/maritonx/easy-cms
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/maritonx/easy-cms/contributors
    checkedAt: 2026-11-04
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/@easy-cms/core
    checkedAt: 2026-11-04
ai: authored
packagistDownloads: null
---

Easy CMS is an embedded headless CMS for Nuxt and Next.js. It runs inside the application: the content model is written in TypeScript in the repository, and a Nuxt module or Next.js route handlers add the admin. Content is stored in one database that the application already uses, with SQLite or Postgres through Drizzle.

The CMS offers a typed local API inside the application and a REST API for other frontends. A standalone server runs the same CMS for frontends built with other tools. Official plugins add features such as SEO, forms, redirects and multi-tenant sites; the GraphQL, MCP and shop plugins are marked experimental.

## Worth knowing

The package is installed with npm create easy-cms@latest, and the one-click deploy buttons deploy a starter rather than an install route. The homepage says the product is embedded, not hosted, and no vendor cloud was found.
