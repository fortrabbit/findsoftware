---
id: microfeed
name: microfeed
urls:
  home: https://www.microfeed.org/
  repository: https://github.com/microfeed/microfeed
  docs: https://docs.microfeed.org/
category:
  - cms
  - headless-cms
description: Self-hosted content management system for podcasts, blogs, photos, documents and links, running on Cloudflare Workers with D1 and R2 storage.
status: active
maintainer: Listen Notes, Inc.
maintainerType: company
firstRelease: 2022
language: javascript
adminUi: true
headlessApi:
  - rest
templating: mustache
renderingModes:
  - server
installMethod: npx @microfeed/cli manage (official release)
licenseModel: open-source
license: AGPL-3.0
currentMajor: "1"
latestReleaseDate: 2026-09-22
githubStargazers: 4117
npmWeeklyDownloads: 20
contributors: 8
social:
  forum: https://github.com/microfeed/microfeed/discussions
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://www.microfeed.org/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/microfeed/microfeed
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/microfeed/microfeed/blob/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://www.microfeed.org/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/microfeed/microfeed/languages
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/microfeed/microfeed/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/microfeed/microfeed/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/microfeed/microfeed/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/microfeed/microfeed/blob/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://docs.microfeed.org/start-here/concepts/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/microfeed/microfeed/blob/main/README.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://www.microfeed.org/
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/microfeed/microfeed/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/microfeed/microfeed
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/microfeed/microfeed/blob/main/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/microfeed/microfeed/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/microfeed/microfeed/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/microfeed/microfeed/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/microfeed/microfeed
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/microfeed/microfeed/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@microfeed/cli
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

microfeed is a self-hosted content management system for podcasts, blogs, photos, documents and external links, built by Listen Notes, Inc. It runs as a Cloudflare Worker in the owner's own Cloudflare account, keeps metadata in Cloudflare D1 and media files in Cloudflare R2, and is edited in a built-in admin dashboard. Each item is published as a web page, an RSS entry and a JSON Feed entry. Themes are Mustache templates, and a REST API is available for other applications, with a headless mode that turns off the generated website. Installation runs `npx @microfeed/cli manage` to deploy an official release, `yarn manage` from a cloned checkout, or a GitHub Actions workflow.

## Worth knowing

Every install path needs a Cloudflare account, and the deployment CLI needs Node.js. The README FAQ describes microfeed as still in open alpha phase. The software is licensed under AGPL-3.0.
