---
id: cromwell
name: Cromwell CMS
urls:
  home: https://cromwellcms.com
  repository: https://github.com/CromwellCMS/Cromwell
  docs: https://cromwellcms.com/docs/overview/intro
category:
  - cms
  - e-commerce
  - headless-cms
description: Headless TypeScript CMS for React and Next.js websites, with a GraphQL API, an admin panel and a theme editor.
status: active
maintainer: Astrex LLC
maintainerType: company
firstRelease: 2020
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 14
basedOn:
  - nestjs
databases:
  - sqlite
  - mysql
  - mariadb
  - postgres
adminUi: true
headlessApi:
  - graphql
  - rest
templating: jsx
runsAs:
  - always-on
renderingModes:
  - server
  - isr
installMethod: Docker image cromwellcms/cromwell-mariadb (docker run)
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2024-07-12
githubStargazers: 753
npmWeeklyDownloads: 55
contributors: 3
social:
  discord: https://discord.gg/mxmJNSZ2gn
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://cromwellcms.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/CromwellCMS/Cromwell
    checkedAt: 2026-10-23
  - field: urls
    url: https://cromwellcms.com/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/CromwellCMS/Cromwell/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/CromwellCMS/Cromwell/languages
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/CromwellCMS/Cromwell/blob/master/README.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://cromwellcms.com/
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/CromwellCMS/Cromwell/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://cromwellcms.com/docs/overview/installation
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://cromwellcms.com/docs/overview/installation
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/CromwellCMS/Cromwell/blob/master/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://cromwellcms.com/
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://cromwellcms.com/
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://cromwellcms.com/docs/development/theme-development
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://cromwellcms.com/docs/overview/installation
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://cromwellcms.com/docs/overview/installation
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://cromwellcms.com/docs/overview/installation
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://cromwellcms.com/docs/overview/installation
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://cromwellcms.com/docs/overview/installation
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://cromwellcms.com/blog/intro-cromwell-cms
    checkedAt: 2026-10-23
  - field: templating
    url: https://cromwellcms.com/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/CromwellCMS/Cromwell
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://cromwellcms.com/
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/@cromwell%2fcore
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/@cromwell%2fcli/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@cromwell%2fcli
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/CromwellCMS/Cromwell
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/CromwellCMS/Cromwell/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@cromwell/cli
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

Cromwell CMS is a headless TypeScript CMS for websites built with React and Next.js. It has an admin panel, a drag-and-drop theme editor, and online store and blog functions. Themes are Next.js apps written in JSX, and the server is queried through GraphQL and a REST API. The CLI install route starts the services with `npx cromwell start`.

## Worth knowing

The CLI and npm install routes need Node.js 14 or 16 plus Python and node-gyp. The docs recommend SQLite only for development.
