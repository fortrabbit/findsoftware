---
id: tinacms
name: TinaCMS
urls:
  home: https://tina.io
  repository: https://github.com/tinacms/tinacms
  docs: https://tina.io/docs/
  pricing: https://tina.io/pricing
category:
  - headless-cms
description: Git-backed headless content management system for Markdown, MDX, JSON and YAML files, with a GraphQL API and an in-browser editing interface.
status: active
maintainer: SSW USA
firstRelease: 2019
language: javascript
runtime:
  - node
hosting:
  - node
  - static
databases:
  - mongodb
  - postgres
adminUi: true
headlessApi:
  - graphql
runsAs:
  - static
  - local
  - per-request
renderingModes:
  - static
  - server
installMethod: npx create-tina-app@latest
licenseModel: open-source
license: Apache-2.0
currentMajor: "3"
latestReleaseDate: 2026-10-19
githubStargazers: 13845
npmWeeklyDownloads: 49626
contributors: 160
social:
  x: https://twitter.com/tinacms
  bluesky: https://bsky.app/profile/tina.io
  discord: https://discord.com/invite/zumN63Ybpf
  forum: https://github.com/tinacms/tinacms/discussions
  youtube: https://www.youtube.com/@TinaCMS
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://tina.io/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/tinacms/tinacms
    checkedAt: 2026-10-23
  - field: urls
    url: https://tina.io/docs/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://tina.io/terms-of-service
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/tinacms
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/tinacms/tinacms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/tinacms/tinacms
    checkedAt: 2026-10-23
  - field: runtime
    url: https://tina.io/docs/self-hosted/overview/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/tinacms/tinacms
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/tinacms/tinacms/main/LICENSE
    checkedAt: 2026-10-23
  - field: databases
    url: https://tina.io/docs/self-hosted/overview/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://tina.io/docs/
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://github.com/tinacms/tinacms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/tinacms/tinacms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://tina.io/docs/tinacloud/overview/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://tina.io/docs/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://tina.io/docs/self-hosted/overview/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/tinacms/tinacms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://tina.io/pricing
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/tinacms/tinacms/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/tinacms/tinacms/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/tinacms/tinacms
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/tinacms/tinacms/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/tinacms
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

TinaCMS is a Git-backed headless content management system. Content lives as Markdown, MDX, JSON and YAML files in a Git repository, and editors save changes from an admin interface built into the site. A GraphQL API serves the content to the front end. The admin is a statically built single-page app, and the site itself can be built as static HTML or rendered on the server.

Locally, TinaCMS reads the project's own files. A self-hosted backend runs as a Node.js serverless function with its own database adapter, auth provider and Git provider, and the docs say some features are not available when self-hosting.

## Worth knowing

TinaCloud is the hosted backend that the project offers next to the open source package. It provides a hosted GraphQL endpoint, Git integration, user management and editorial workflow features.
