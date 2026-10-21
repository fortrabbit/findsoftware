---
id: brisa
name: Brisa
urls:
  home: https://brisa.build
  repository: https://github.com/brisa-build/brisa
  docs: https://brisa.build/getting-started/quick-start
category:
  - framework
description: Web framework for JSX pages and web components that runs a Bun server by default and can also produce static output.
status: active
maintainer: Brisa
language: typescript
runtime:
  - bun
hosting:
  - bun
  - static
runtimeMin: bun 1.3
templating: jsx
i18n: text translation and routing
runsAs:
  - static
  - always-on
renderingModes:
  - server
  - static
installMethod: bun create brisa@latest
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-10-18
githubStargazers: 783
npmWeeklyDownloads: 1684
contributors: 20
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://brisa.build
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/brisa-build/brisa
    checkedAt: 2026-10-21
  - field: urls
    url: https://brisa.build/getting-started/quick-start
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://raw.githubusercontent.com/brisa-build/brisa/HEAD/LICENSE
    checkedAt: 2026-10-21
  - field: category
    url: https://brisa.build
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/brisa-build/brisa
    checkedAt: 2026-10-21
  - field: runtime
    url: https://brisa.build/getting-started/quick-start
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://registry.npmjs.org/brisa/latest
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://brisa.build/getting-started/quick-start
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://brisa.build
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://brisa.build/building-your-application/building/static-site-app
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://brisa.build/building-your-application/building/static-site-app
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://brisa.build/building-your-application/building/bun-server
    checkedAt: 2026-10-21
  - field: templating
    url: https://raw.githubusercontent.com/brisa-build/brisa/HEAD/README.md
    checkedAt: 2026-10-21
  - field: i18n
    url: https://raw.githubusercontent.com/brisa-build/brisa/HEAD/README.md
    checkedAt: 2026-10-21
  - field: license
    url: https://api.github.com/repos/brisa-build/brisa
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/brisa/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/brisa-build/brisa/releases/latest
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/brisa-build/brisa
    checkedAt: 2026-10-21
  - field: contributors
    url: https://api.github.com/repos/brisa-build/brisa/contributors
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/brisa
    checkedAt: 2026-10-21
figure:
  emoji: 🧱
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: TypeScript · Framework
ai: authored
packagistDownloads: null
---

Brisa is a web framework for JSX pages and web components. By default it builds a Bun web service that renders pages as server-rendered JSX components, and an `output` setting in the build switches to static HTML files, a Node.js or Deno server, or desktop and mobile apps. A project starts with `bun create brisa`, and the [quick start](https://brisa.build/getting-started/quick-start) lists Bun as the system requirement.

## Worth knowing

The README says the 0.x versions are experimental and not recommended for production until 1.x. With static output there is no server at runtime, so API endpoints and server interactions do not run, and redirects must be set up on the host.
