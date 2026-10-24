---
id: mastro
name: Mastro
urls:
  home: https://mastrojs.github.io/
  repository: https://github.com/mastrojs/mastro
  docs: https://mastrojs.github.io/docs/
category:
  - ssg
  - framework
description: Web framework and site generator for JavaScript and TypeScript that builds static and server-rendered multi-page websites.
status: active
maintainer: Mastro
firstRelease: 2024
language: javascript
runtime:
  - node
  - deno
  - bun
hosting:
  - node
  - deno
  - bun
  - static
runsAs:
  - static
  - always-on
  - browser
renderingModes:
  - static
  - server
installMethod: pnpm create @mastrojs/mastro
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-07-27
githubStargazers: 197
contributors: 1
social:
  bluesky: https://bsky.app/profile/mastrojs.bsky.social
  discord: https://discord.gg/gmw2VEW5Rw
  forum: https://github.com/mastrojs/mastro/discussions
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://github.com/mastrojs/mastro/blob/main/README.md
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/mastrojs/mastro
    checkedAt: 2026-10-22
  - field: urls
    url: https://github.com/mastrojs/mastro/blob/main/README.md
    checkedAt: 2026-10-22
  - field: category
    url: https://github.com/mastrojs/mastro/blob/main/README.md
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/mastrojs/mastro
    checkedAt: 2026-10-22
  - field: runtime
    url: https://mastrojs.github.io/
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://mastrojs.github.io/docs/getting-started/
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://github.com/mastrojs/mastro/blob/main/README.md
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://github.com/mastrojs/mastro/blob/main/README.md
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://mastrojs.github.io/docs/deploy/
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://mastrojs.github.io/docs/deploy/
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://mastrojs.github.io/docs/getting-started/
    checkedAt: 2026-10-22
  - field: license
    url: https://raw.githubusercontent.com/mastrojs/mastro/main/LICENSE
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/mastrojs/mastro/main/LICENSE
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://registry.npmjs.org/mastro
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://jsr.io/@mastrojs/mastro/meta.json
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://jsr.io/@mastrojs/mastro/meta.json
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/mastrojs/mastro
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/mastrojs/mastro/contributors
    checkedAt: 2026-10-22
ai: authored
packagistDownloads: null
---

Mastro is a web framework and site generator for JavaScript and TypeScript. It builds static multi-page websites, and it can also run as a server that renders pages on demand. It runs on Node.js, Deno, Bun or Cloudflare Workers, and a project is created with pnpm create @mastrojs/mastro. The code is published on JSR as @mastrojs/mastro, and the license is MIT.

Static output can be served from any CDN, and a server can run on Deno, Node.js or Bun. Mastro can also run code inside a Service Worker in the visitor's browser, as an option on top of the default.

## Worth knowing

The older npm package named mastro is flagged deprecated on npm; the install commands above use the current package.
