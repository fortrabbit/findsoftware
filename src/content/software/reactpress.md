---
id: reactpress
name: ReactPress
urls:
  home: https://docs.gaoredu.com
  repository: https://github.com/fecommunity/reactpress
  docs: https://docs.gaoredu.com
category:
  - cms
description: Publishing system for React developers, with a NestJS API, a web admin, Next.js themes and SQLite or MySQL storage.
status: active
maintainer: fecommunity
maintainerType: community
firstRelease: 2024
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 20
basedOn:
  - nestjs
databases:
  - sqlite
  - mysql
adminUi: true
headlessApi:
  - rest
i18n: admin interface in Chinese and English
runsAs:
  - always-on
renderingModes:
  - server
  - isr
installMethod: npm global install, then reactpress init
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-08-09
githubStargazers: 721
npmWeeklyDownloads: 342
contributors: 3
social:
  forum: https://github.com/fecommunity/reactpress/discussions
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://docs.gaoredu.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/fecommunity/reactpress
    checkedAt: 2026-10-23
  - field: urls
    url: https://docs.gaoredu.com/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/fecommunity/reactpress/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/fecommunity/reactpress
    checkedAt: 2026-10-23
  - field: category
    url: https://docs.gaoredu.com/
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://docs.gaoredu.com/docs/reference/faq
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/fecommunity/reactpress/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/fecommunity/reactpress/blob/master/README.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://docs.gaoredu.com/docs/getting-started/first-site
    checkedAt: 2026-10-23
  - field: databases
    url: https://docs.gaoredu.com/docs/reference/faq
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://docs.gaoredu.com/docs/intro
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://docs.gaoredu.com/docs/reference/faq
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://docs.gaoredu.com/docs/getting-started/what-is-reactpress
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://docs.gaoredu.com/docs/getting-started/first-site
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.gaoredu.com/docs/getting-started/first-site
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.gaoredu.com/docs/tutorial-extras/docker-deployment
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.gaoredu.com/docs/getting-started/installation
    checkedAt: 2026-10-23
  - field: maintainerType
    url: https://docs.gaoredu.com/about
    checkedAt: 2026-10-23
  - field: i18n
    url: https://docs.gaoredu.com/docs/user-guide/admin-overview
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/fecommunity/reactpress
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/fecommunity/reactpress/blob/master/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/fecommunity/reactpress/releases/tag/v1.0.0
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/fecommunity/reactpress/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/fecommunity/reactpress/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/fecommunity/reactpress
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/fecommunity/reactpress/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@fecommunity/reactpress
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · CMS
ai: authored
packagistDownloads: null
---

ReactPress is a publishing system for React developers, combining a NestJS API, a web admin built with Vite and React, and swappable Next.js themes. Writers publish through the admin, and the public site is a Next.js theme that renders on the server. The default setup stores content in an embedded SQLite database, and an external MySQL database can be configured instead. A headless REST API with API keys lets other frontends read the same content. Installation is a global npm package, `npm install -g @fecommunity/reactpress`, followed by `reactpress init`, which starts the API, the admin and the default theme. The docs also describe a Docker Compose setup and an Electron desktop client with a local SQLite mode.

## Worth knowing

Docker is needed only for the embedded-docker or external MySQL configurations. The README and install docs state Node.js 20 or newer.
