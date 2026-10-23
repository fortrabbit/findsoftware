---
id: rakkas
name: Rakkas
urls:
  home: https://rakkasjs.org
  repository: https://github.com/rakkasjs/rakkasjs
  docs: https://rakkasjs.org/guide/getting-started
category:
  - framework
description: React framework built on Vite for server-rendered websites and web apps, with optional static export.
status: active
maintainer: Fatih Aygün
firstRelease: 2022
language: typescript
runtime:
  - node
hosting:
  - node
  - static
basedOn:
  - react
  - vite
runsAs:
  - always-on
  - static
  - local
renderingModes:
  - server
  - static
installMethod: npx create-rakkas-app@latest
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2023-04-05
githubStargazers: 1103
npmWeeklyDownloads: 116
contributors: 11
social:
  x: https://twitter.com/cyco130
  discord: https://rakkasjs.org/chat
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://rakkasjs.org/
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/rakkasjs/rakkasjs
    checkedAt: 2026-10-22
  - field: urls
    url: https://rakkasjs.org/guide/getting-started
    checkedAt: 2026-10-22
  - field: category
    url: https://rakkasjs.org/
    checkedAt: 2026-10-22
  - field: basedOn
    url: https://rakkasjs.org/
    checkedAt: 2026-10-22
  - field: basedOn
    url: https://rakkasjs.org/
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/rakkasjs/rakkasjs
    checkedAt: 2026-10-22
  - field: runtime
    url: https://raw.githubusercontent.com/rakkasjs/rakkasjs/main/website/src/routes/_site/guide/node.page.mdx
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://rakkasjs.org/guide/getting-started
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://rakkasjs.org/
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://rakkasjs.org/
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://raw.githubusercontent.com/rakkasjs/rakkasjs/main/website/src/routes/_site/guide/static-prerendering.page.mdx
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://raw.githubusercontent.com/rakkasjs/rakkasjs/main/website/src/routes/_site/guide/node.page.mdx
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://raw.githubusercontent.com/rakkasjs/rakkasjs/main/website/src/routes/_site/guide/static-hosts.page.mdx
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://rakkasjs.org/guide/getting-started
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/rakkasjs/rakkasjs/main/LICENSE
    checkedAt: 2026-10-22
  - field: license
    url: https://api.github.com/repos/rakkasjs/rakkasjs
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://raw.githubusercontent.com/rakkasjs/rakkasjs/main/LICENSE
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://api.github.com/repos/rakkasjs/rakkasjs/releases
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://api.github.com/repos/rakkasjs/rakkasjs/releases
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://registry.npmjs.org/rakkasjs
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/rakkasjs/rakkasjs
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/rakkasjs/rakkasjs/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/rakkasjs
    checkedAt: 2026-10-22
figure:
  emoji: 🧱
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: TypeScript · Framework
ai: authored
packagistDownloads: null
---

Rakkas is a React framework built on Vite. The default build renders pages on the server, and the guide shows `node dist/server/index.js` launching the built app. The same project can prerender selected pages during the build and save them as static files, and the generated client assets sit in `dist/client` for a static host or CDN. The homepage lists Node, Vercel, Netlify and Cloudflare Workers as deploy targets.

## Worth knowing

A page can be prerendered only when its content is determined by its URL path alone. The README says minor releases will introduce breaking changes until 1.0 and that the framework is not yet ready for production use.
