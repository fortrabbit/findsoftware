---
id: fresh
name: Fresh
urls:
  home: https://usefresh.dev
  repository: https://github.com/denoland/fresh
  docs: https://usefresh.dev/docs
category:
  - framework
description: Web framework for Deno that renders every route on the server as a Preact component and hydrates interactive islands.
status: active
maintainer: Luca Casonato
language: javascript
runtime:
  - deno
hosting:
  - deno
basedOn:
  - preact
runsAs:
  - always-on
renderingModes:
  - server
installMethod: deno run -Ar jsr:@fresh/init
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-04-28
githubStargazers: 13797
httpArchiveSites: 4
social:
  discord: https://discord.com/invite/deno
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://usefresh.dev/
    checkedAt: 2026-10-21
  - field: urls
    url: https://usefresh.dev/
    checkedAt: 2026-10-21
  - field: urls
    url: https://usefresh.dev/docs/getting-started
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://github.com/denoland/fresh/blob/main/LICENSE
    checkedAt: 2026-10-21
  - field: category
    url: https://usefresh.dev/
    checkedAt: 2026-10-21
  - field: language
    url: https://raw.githubusercontent.com/freshframework/fresh/main/README.md
    checkedAt: 2026-10-21
  - field: runtime
    url: https://usefresh.dev/
    checkedAt: 2026-10-21
  - field: basedOn
    url: https://usefresh.dev/
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://usefresh.dev/
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://usefresh.dev/docs/deployment/docker
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://usefresh.dev/
    checkedAt: 2026-10-21
  - field: license
    url: https://api.github.com/repos/freshframework/fresh
    checkedAt: 2026-10-21
  - field: license
    url: https://github.com/denoland/fresh/blob/main/LICENSE
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://jsr.io/@fresh/core/meta.json
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/freshframework/fresh/releases/latest
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/freshframework/fresh
    checkedAt: 2026-10-21
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
---

Fresh is a web framework for Deno. Each route renders on the server as a Preact component, and only the parts marked as islands run JavaScript in the browser. Forms are handled on the server with standard Request and FormData objects, and partial responses let the server stream HTML into one part of a page without a full reload. Route handlers define GET, POST, DELETE and other HTTP methods as named functions on a route.

## Worth knowing

The [deployment guide](https://usefresh.dev/docs/deployment/deno-deploy) describes Deno Deploy as the recommended host, a hosted platform next to the open source framework. The home page also lists Docker, Cloudflare Workers and deno compile as deploy targets.
