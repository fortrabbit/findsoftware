---
id: ultra
name: Ultra
urls:
  home: https://ultrajs.dev
  repository: https://github.com/exhibitionist-digital/ultra
  docs: https://ultrajs.dev/create-project
category:
  - framework
description: Deno and React framework for server-rendered web apps that uses ES modules and import maps in place of a bundler.
status: active
maintainer: Exhibitionist Digital
firstRelease: 2021
language: javascript
runtime:
  - deno
hosting:
  - deno
runtimeMin: deno 1.27
basedOn:
  - react
templating: jsx
runsAs:
  - always-on
renderingModes:
  - server
installMethod: deno run -A -r https://deno.land/x/ultra/create.ts
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2023-09-19
githubStargazers: 2943
contributors: 18
social:
  discord: https://discord.gg/XDC5WxGHb2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://ultrajs.dev/
    checkedAt: 2026-10-23
  - field: urls
    url: https://ultrajs.dev/create-project
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/exhibitionist-digital/ultra
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/exhibitionist-digital/ultra/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/exhibitionist-digital/ultra
    checkedAt: 2026-10-23
  - field: category
    url: https://ultrajs.dev/
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://ultrajs.dev/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://ultrajs.dev/prerequisites
    checkedAt: 2026-10-23
  - field: templating
    url: https://ultrajs.dev/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://ultrajs.dev/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://ultrajs.dev/fly-docker
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://raw.githubusercontent.com/exhibitionist-digital/ultra/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://ultrajs.dev/create-project
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/exhibitionist-digital/ultra
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/exhibitionist-digital/ultra/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/exhibitionist-digital/ultra/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/exhibitionist-digital/ultra/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/exhibitionist-digital/ultra/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/exhibitionist-digital/ultra
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/exhibitionist-digital/ultra/contributors
    checkedAt: 2026-10-23
figure:
  emoji: 🧱
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Framework
ai: authored
packagistDownloads: null
---

Ultra is a server-side rendering framework for React that runs on Deno. It renders pages on the server with React Suspense and serves ES modules to the browser, using import maps in place of a bundler.

The build step, `build.ts`, transpiles TypeScript and JSX to plain JavaScript, vendors the dependencies and versions the source and public files. It writes two production import maps, one for the client and one for the server. The production server runs from the `.ultra` output folder.

## Worth knowing

The Deno Deploy page states that Deno Deploy does not currently support dynamic imports, which affects use of `lazy` for that target. The Dockerfile deployment builds the app and runs the production server inside a container.
