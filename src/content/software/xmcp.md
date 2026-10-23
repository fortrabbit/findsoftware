---
id: xmcp
name: xmcp
urls:
  home: https://xmcp.dev
  repository: https://github.com/basementstudio/xmcp
  docs: https://xmcp.dev/docs
category:
  - framework
description: TypeScript framework for building MCP servers that expose tools, prompts and resources to AI applications.
status: active
maintainer: basement.studio LLC
maintainerType: company
firstRelease: 2025
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
runsAs:
  - always-on
  - per-request
installMethod: npx create-xmcp-app (scaffolder)
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-22
githubStargazers: 1342
npmWeeklyDownloads: 7528
contributors: 37
social:
  x: https://x.com/xmcp_dev
  discord: https://discord.gg/d9a7JBBxV9
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://api.github.com/repos/basementstudio/xmcp
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/basementstudio/xmcp
    checkedAt: 2026-10-22
  - field: urls
    url: https://xmcp.dev/docs
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/basementstudio/xmcp/main/license.md
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/basementstudio/xmcp
    checkedAt: 2026-10-22
  - field: category
    url: https://xmcp.dev/docs
    checkedAt: 2026-10-22
  - field: runtime
    url: https://xmcp.dev/docs/getting-started/installation
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://xmcp.dev/docs/getting-started/installation
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://xmcp.dev/docs/getting-started/installation
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://xmcp.dev/docs/deployment/render
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://xmcp.dev/docs/deployment/vercel
    checkedAt: 2026-10-22
  - field: license
    url: https://raw.githubusercontent.com/basementstudio/xmcp/main/license.md
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://raw.githubusercontent.com/basementstudio/xmcp/main/license.md
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://api.github.com/repos/basementstudio/xmcp/releases
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://api.github.com/repos/basementstudio/xmcp/releases
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/basementstudio/xmcp
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/basementstudio/xmcp/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/xmcp
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://registry.npmjs.org/xmcp
    checkedAt: 2026-10-22
figure:
  emoji: 🧱
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Framework
ai: authored
packagistDownloads: null
---

xmcp is a TypeScript framework for building MCP servers, which give AI applications tools, prompts and resources through the Model Context Protocol. The [installation page](https://xmcp.dev/docs/getting-started/installation) scaffolds a project with create-xmcp-app and asks which transport to use: HTTP, which runs on a server, or STDIO, which runs on the user's machine.

An HTTP server can be hosted as a Node.js web service, as the [Render guide](https://xmcp.dev/docs/deployment/render) describes, or run as a Vercel Function, as the [Vercel guide](https://xmcp.dev/docs/deployment/vercel) describes.

## Worth knowing

The build step needs the xmcp compiler as a development dependency, and the Vercel guide says to keep development dependencies installed during the build. The built server is self-contained at runtime.
