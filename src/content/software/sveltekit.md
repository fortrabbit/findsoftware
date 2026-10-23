---
id: sveltekit
name: SvelteKit
urls:
  home: https://svelte.dev/docs/kit
  repository: https://github.com/sveltejs/kit
  docs: https://svelte.dev/docs/kit
  plugins: https://svelte.dev/packages
category:
  - framework
  - ssg
description: Svelte-based framework for building web applications with server rendering, prerendering and client-side rendering.
status: active
maintainer: Svelte volunteers
maintainerType: community
firstRelease: 2020
language: javascript
runtime:
  - node
  - bun
hosting:
  - node
  - bun
  - static
runtimeMin: node 22
basedOn:
  - svelte
  - vite
templating: svelte
runsAs:
  - static
  - always-on
renderingModes:
  - server
  - static
  - spa
installMethod: npx sv create my-app
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-14
githubStargazers: 20863
npmWeeklyDownloads: 2003290
contributors: 727
social:
  bluesky: https://bsky.app/profile/svelte.dev
  discord: https://svelte.dev/chat
wikidata: Q106156162
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: urls
    url: https://github.com/sveltejs/kit
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/sveltejs/kit
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/sveltejs/kit
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://registry.npmjs.org/@sveltejs/kit
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://github.com/sveltejs/kit
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://github.com/sveltejs/kit
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q106156162
    checkedAt: 2026-10-18
  - field: category
    url: https://svelte.dev/docs/kit/introduction
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://svelte.dev/docs/kit/introduction
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://registry.npmjs.org/@sveltejs/kit/latest
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/sveltejs/kit
    checkedAt: 2026-10-18
  - field: runtime
    url: https://svelte.dev/docs/kit/adapters
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://registry.npmjs.org/@sveltejs/kit/latest
    checkedAt: 2026-10-18
  - field: templating
    url: https://svelte.dev/docs/kit/introduction
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://svelte.dev/docs/kit/page-options
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://svelte.dev/docs/kit/creating-a-project
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/sveltejs/kit
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/sveltejs/kit
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://registry.npmjs.org/@sveltejs/kit/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@sveltejs/kit
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/sveltejs/kit
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/sveltejs/kit/contributors?anon=true
    checkedAt: 2026-10-18
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@sveltejs/kit
    checkedAt: 2026-10-18
  - field: urls
    url: https://svelte.dev/packages
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://svelte.dev/docs/kit/adapters
    checkedAt: 2026-10-19
figure:
  emoji: 🧱
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Framework
ai: authored
packagistDownloads: null
---

SvelteKit is a framework for building web applications with Svelte, using Vite for development and builds. Pages can be rendered on the server, prerendered to static HTML, rendered in the browser only, or a mix of these. Adapters turn the built app into output for a target such as a Node server, a Bun server, Cloudflare, Netlify, Vercel or static hosting. The adapter-auto package picks one for the platform it detects.

## Worth knowing

The server needs depend on the adapter. The Node adapter needs a long-running Node process, while the static adapter needs no server. Development is done by volunteers, and donations go through Open Collective. The [adapters page](https://svelte.dev/docs/kit/adapters) lists the official adapters.
