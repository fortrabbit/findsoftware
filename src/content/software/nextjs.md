---
id: nextjs
name: Next.js
urls:
  home: https://nextjs.org
  repository: https://github.com/vercel/next.js
  docs: https://nextjs.org/docs
category:
  - framework
  - ssg
description: React framework for building full-stack web applications with server, static and incremental rendering.
status: active
maintainer: Vercel
maintainerType: company
firstRelease: 2016
language: javascript
runtime:
  - node
  - bun
hosting:
  - node
  - bun
  - static
runtimeMin: node 20
templating: jsx
i18n: internationalized routing by sub-path or domain via Proxy and app/[lang]; translations via third-party libraries
runsAs:
  - always-on
  - static
renderingModes:
  - server
  - static
  - spa
  - isr
installMethod: npx create-next-app@latest
licenseModel: open-source
license: MIT
currentMajor: "16"
latestReleaseDate: 2026-10-15
githubStargazers: 143069
npmWeeklyDownloads: 40841184
contributors: 4170
social:
  x: https://x.com/nextjs
  bluesky: https://bsky.app/profile/nextjs.org
  discord: https://nextjs.org/discord
wikidata: Q56062435
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: urls
    url: https://github.com/vercel/next.js
    checkedAt: 2026-10-18
  - field: urls
    url: https://nextjs.org/
    checkedAt: 2026-10-18
  - field: urls
    url: https://nextjs.org/
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://nextjs.org/governance
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://nextjs.org/
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://nextjs.org/governance
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://nextjs.org/governance
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q56062435
    checkedAt: 2026-10-18
  - field: category
    url: https://nextjs.org/
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/vercel/next.js
    checkedAt: 2026-10-18
  - field: runtime
    url: https://nextjs.org/docs/app/getting-started/deploying
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://registry.npmjs.org/next/latest
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://nextjs.org/docs/app/getting-started/installation
    checkedAt: 2026-10-18
  - field: templating
    url: https://nextjs.org/docs/app/getting-started/installation
    checkedAt: 2026-10-18
  - field: i18n
    url: https://nextjs.org/docs/app/guides/internationalization
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://nextjs.org/docs/app/getting-started/deploying
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://nextjs.org/docs/app/guides/static-exports
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://nextjs.org/docs/app/guides/incremental-static-regeneration
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://nextjs.org/docs/app/getting-started/installation
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/vercel/next.js
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/vercel/next.js
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/vercel/next.js/releases/tag/v16.4.2
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/vercel/next.js
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/vercel/next.js/contributors?anon=true
    checkedAt: 2026-10-18
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/next
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://nextjs.org/docs/app/getting-started/deploying
    checkedAt: 2026-10-19
figure:
  emoji: 🧱
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: JavaScript · Framework
ai: authored
packagistDownloads: null
---

Next.js is a React framework for full-stack web applications. One project can render pages on the server, prerender them as static HTML, run as a single-page app, or regenerate static pages incrementally. Streaming lets a page send parts of its output as they become ready. Internationalized routing puts each language in a sub-path or a domain, and translated strings come from third-party libraries.

Self-hosting with the full feature set runs a long-running Node server process, and the docs recommend a reverse proxy in front of it. The project publishes no official Docker image, but the repository includes example Dockerfiles. The static export writes HTML, CSS and JavaScript for any file host and leaves out the server features.

## Worth knowing

A self-hosted server keeps regenerated pages on the local disk of each instance unless a shared cache handler is configured. Next.js has two routers, the App Router and the Pages Router, documented separately. The [self-hosting guide](https://nextjs.org/docs/app/guides/self-hosting) covers the cache in detail.
