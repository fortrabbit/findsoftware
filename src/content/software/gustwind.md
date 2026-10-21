---
id: gustwind
name: Gustwind
urls:
  home: https://gustwind.js.org/
  repository: https://github.com/gustwindjs/gustwind
  docs: https://gustwind.js.org/
category:
  - ssg
description: Node.js-powered website creator that builds component-oriented sites from HTMLisp templates, TypeScript and Markdown.
status: active
maintainer: Juho Vepsäläinen
language: typescript
runtime:
  - node
hosting:
  - node
runtimeMin: node 24
renderingModes:
  - static
  - server
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-07-10
githubStargazers: 31
npmWeeklyDownloads: 4
contributors: 2
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://gustwind.js.org/
    checkedAt: 2026-10-21
  - field: urls
    url: https://github.com/gustwindjs/gustwind
    checkedAt: 2026-10-21
  - field: urls
    url: https://gustwind.js.org/
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://gustwind.js.org/
    checkedAt: 2026-10-21
  - field: language
    url: https://github.com/gustwindjs/gustwind
    checkedAt: 2026-10-21
  - field: category
    url: https://gustwind.js.org/
    checkedAt: 2026-10-21
  - field: runtime
    url: https://github.com/gustwindjs/gustwind/blob/develop/gustwind-node/README.md
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://github.com/gustwindjs/gustwind/blob/develop/gustwind-node/README.md
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://github.com/gustwindjs/gustwind/blob/develop/gustwind-node/README.md
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://gustwind.js.org/
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://gustwind.js.org/deployment/
    checkedAt: 2026-10-21
  - field: license
    url: https://github.com/gustwindjs/gustwind/blob/develop/LICENSE
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/gustwind/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://registry.npmjs.org/gustwind
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://github.com/gustwindjs/gustwind
    checkedAt: 2026-10-21
  - field: contributors
    url: https://github.com/gustwindjs/gustwind
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/gustwind
    checkedAt: 2026-10-21
figure:
  emoji: ⚡
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: TypeScript · SSG
ai: authored
packagistDownloads: null
---

Gustwind is a website creator for large sites built from components. Templates and component definitions default to HTMLisp, a variant of HTML, and the build also accepts TypeScript and Markdown definitions. Data sources bring content into a site, and route definitions connect those sources to pages. Development mode serves the site for preview, and the production build writes static HTML with CSS inlined into the files. Plugins can replace parts of the build. The [documentation](https://gustwind.js.org/) covers the concepts, configuration and deployment.

## Worth knowing

The homepage says the APIs change every once in a while.

Server rendering is partial. The site says portions of Gustwind can run in a server environment, and the Cloudflare Workers adapter renders pages per request through an edge-compatible render path.
