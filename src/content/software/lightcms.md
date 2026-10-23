---
id: lightcms
name: LightCMS
urls:
  home: https://metavert.io/lightcms
  repository: https://github.com/metavert-io/lightcms
  docs: https://raw.githubusercontent.com/metavert-io/lightcms/main/README.md
category:
  - cms
description: Self-hosted content management system with a web admin, a REST API and an MCP server, written in Go.
status: active
maintainer: Metavert LLC
maintainerType: company
firstRelease: 2026
language: go
runtime:
  - binary
hosting:
  - binary
contentStore:
  - database
databases:
  - mongodb
adminUi: true
headlessApi:
  - rest
templating: go html/template
runsAs:
  - always-on
renderingModes:
  - static
installMethod: clone the repository, then set a MongoDB connection string
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2026-10-05
githubStargazers: 32
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://metavert.io/lightcms
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/metavert-io/lightcms
    checkedAt: 2026-10-23
  - field: urls
    url: https://metavert.io/lightcms
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/metavert-io/lightcms/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/metavert-io/lightcms
    checkedAt: 2026-10-23
  - field: databases
    url: https://metavert.io/lightcms
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://raw.githubusercontent.com/metavert-io/lightcms/main/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://metavert.io/lightcms
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://metavert.io/lightcms
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://metavert.io/lightcms
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/metavert-io/lightcms
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://metavert.io/lightcms
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/metavert-io/lightcms/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/metavert-io/lightcms/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/metavert-io/lightcms/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/metavert-io/lightcms
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/metavert-io/lightcms/contributors?per_page=100
    checkedAt: 2026-10-23
  - field: category
    url: https://metavert.io/lightcms
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://metavert.io/lightcms
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://metavert.io/lightcms
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/metavert-io/lightcms/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/metavert-io/lightcms/main/README.md
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: Go · CMS
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

LightCMS is a content management system written in Go. It stores its content in MongoDB, and the server is self-hosted. Pages are pre-rendered to static HTML files, and templates use Go html/template. A REST API is what the MCP server and the CLI tool connect to.

## Worth knowing

The server needs a MongoDB Atlas database. Semantic search uses Voyage AI embeddings, and without a Voyage key the search falls back to full-text matching. The chat widget streams answers through Claude Haiku when an Anthropic key is set. The embeddings can instead come from a self-hosted Ollama instance.
