---
id: quartz
name: Quartz
urls:
  home: https://quartz.jzhao.xyz
  repository: https://github.com/jackyzha0/quartz
  docs: https://quartz.jzhao.xyz/getting-started/installation
category:
  - ssg
description: Static-site generator that publishes a digital garden and notes, written as Markdown, as a website.
status: active
maintainer: jackyzha0
maintainerType: individual
firstRelease: 2022
language: typescript
runtime:
  - node
hosting:
  - static
runtimeMin: node 22
contentStore:
  - flat-file
templating: jsx
i18n: yes
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: git clone, npm i, npx quartz create
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2023-08-21
githubStargazers: 13439
contributors: 247
social:
  discord: https://discord.gg/cRFFHYye7t
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://quartz.jzhao.xyz/
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/jackyzha0/quartz
    checkedAt: 2026-10-22
  - field: urls
    url: https://quartz.jzhao.xyz/getting-started/installation
    checkedAt: 2026-10-22
  - field: category
    url: https://quartz.jzhao.xyz/
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/jackyzha0/quartz
    checkedAt: 2026-10-22
  - field: runtime
    url: https://quartz.jzhao.xyz/getting-started/installation
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://quartz.jzhao.xyz/getting-started/installation
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://quartz.jzhao.xyz/getting-started/installation
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://quartz.jzhao.xyz/hosting
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://quartz.jzhao.xyz/hosting
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://quartz.jzhao.xyz/features/docker-support
    checkedAt: 2026-10-22
  - field: contentStore
    url: https://quartz.jzhao.xyz/
    checkedAt: 2026-10-22
  - field: templating
    url: https://quartz.jzhao.xyz/
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/jackyzha0/quartz/v5/LICENSE.txt
    checkedAt: 2026-10-22
  - field: license
    url: https://api.github.com/repos/jackyzha0/quartz
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://raw.githubusercontent.com/jackyzha0/quartz/v5/LICENSE.txt
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://api.github.com/repos/jackyzha0/quartz/releases
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://api.github.com/repos/jackyzha0/quartz/releases/latest
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/jackyzha0/quartz
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/jackyzha0/quartz/contributors
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://quartz.jzhao.xyz/
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://github.com/jackyzha0/quartz/tree/v5.0.0
    checkedAt: 2026-10-22
  - field: i18n
    url: https://quartz.jzhao.xyz/
    checkedAt: 2026-10-22
figure:
  emoji: ⚡
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: TypeScript · SSG
ai: authored
packagistDownloads: null
---

Quartz is a static-site generator that turns a folder of Markdown notes into a website for a digital garden. The source is cloned from its repository and dependencies are installed with npm. `npx quartz create` then runs a setup wizard that picks a template and a base URL. Content lives in the `content` folder, and layouts and page components are written as JSX.

`npx quartz build --serve` runs a local preview. The `public` directory is copied to any host that serves static HTML, and the hosting guide names GitHub Pages, Cloudflare, Netlify and Vercel.

## Worth knowing

The Docker support page says serve mode is intended for local previews only.
