---
id: greenwood
name: Greenwood
urls:
  home: https://greenwoodjs.dev
  repository: https://github.com/ProjectEvergreen/greenwood
  docs: https://greenwoodjs.dev/guides/getting-started/
category:
  - ssg
description: Static site generator and web app framework built on web standards, with static, server-rendered and client-rendered pages.
status: active
maintainer: Project Evergreen
language: javascript
runtime:
  - node
hosting:
  - node
  - static
runtimeMin: node 22
runsAs:
  - always-on
  - static
renderingModes:
  - static
  - server
  - spa
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-07-11
githubStargazers: 132
npmWeeklyDownloads: 540
social:
  bluesky: https://bsky.app/profile/projectevergreen.bsky.social
  discord: https://greenwoodjs.dev/discord/
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://greenwoodjs.dev/
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/ProjectEvergreen/greenwood
    checkedAt: 2026-10-21
  - field: urls
    url: https://greenwoodjs.dev/guides/getting-started/
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://raw.githubusercontent.com/ProjectEvergreen/greenwood/master/LICENSE.md
    checkedAt: 2026-10-21
  - field: category
    url: https://raw.githubusercontent.com/ProjectEvergreen/greenwood/master/README.md
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/ProjectEvergreen/greenwood
    checkedAt: 2026-10-21
  - field: runtime
    url: https://greenwoodjs.dev/guides/getting-started/
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://registry.npmjs.org/@greenwood/cli/latest
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://greenwoodjs.dev/docs/introduction/about/
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://greenwoodjs.dev/guides/getting-started/
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://greenwoodjs.dev/guides/hosting/
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://greenwoodjs.dev/guides/hosting/
    checkedAt: 2026-10-21
  - field: license
    url: https://api.github.com/repos/ProjectEvergreen/greenwood
    checkedAt: 2026-10-21
  - field: license
    url: https://raw.githubusercontent.com/ProjectEvergreen/greenwood/master/README.md
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/@greenwood/cli/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/ProjectEvergreen/greenwood/releases/latest
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@greenwood/cli
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/ProjectEvergreen/greenwood
    checkedAt: 2026-10-21
figure:
  emoji: ⚡
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · SSG
ai: authored
packagistDownloads: null
---

Greenwood is a static site generator and web app framework built on web standards. It supports ES modules and Web APIs on the client and the server, server-renders Web Components, and routes files to pages, including API routes. A build writes static HTML, styles, scripts and images into a public directory.

Pages can be static, server-rendered or client-rendered, and a project can mix these in one site.

## Worth knowing

A static build needs only the output directory on a host. Server-rendered pages and API routes need a Node.js server or a serverless adapter, as the [hosting guide](https://greenwoodjs.dev/guides/hosting/) describes.
