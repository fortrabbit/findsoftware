---
id: pageel-cms
name: Pageel CMS
urls:
  home: https://www.pageel.com
  repository: https://github.com/pageel/pageel-cms
  docs: https://github.com/pageel/pageel-cms/blob/main/docs/setup.md
category:
  - cms
description: Self-hosted, Git-based content management system for Astro sites that edits Markdown and MDX files in a GitHub repository.
status: active
maintainer: REDD CO., LTD
firstRelease: 2025
hqCountry: VN
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
basedOn:
  - astro
adminUi: true
i18n: en, vi
runsAs:
  - always-on
renderingModes:
  - server
installMethod: git clone
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-07-30
githubStargazers: 62
npmWeeklyDownloads: 12
contributors: 3
social:
  subreddit: https://www.reddit.com/r/pageelcms/
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: name
    url: https://github.com/pageel/pageel-cms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://www.pageel.com
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/pageel/pageel-cms
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/pageel/pageel-cms/blob/main/docs/setup.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/pageel/pageel-cms/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://github.com/pageel/pageel-cms/blob/main/LICENSES.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/pageel/pageel-cms/releases/tag/v1.0.0
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/pageel/pageel-cms/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/pageel/pageel-cms/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/pageel/pageel-cms
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/pageel/pageel-cms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/pageel/pageel-cms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/pageel/pageel-cms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/pageel/pageel-cms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/pageel/pageel-cms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://github.com/pageel/pageel-cms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/pageel/pageel-cms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/pageel/pageel-cms/blob/main/docs/deployment.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/pageel/pageel-cms/blob/main/docs/deployment.md
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://github.com/pageel/pageel-cms/releases/tag/v2.5.8
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://github.com/pageel/pageel-cms/releases/tag/v2.5.8
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://github.com/pageel/pageel-cms
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/pageel/pageel-cms/contributors?per_page=1
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@pageel/cms
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · CMS
ai: authored
packagistDownloads: null
---

Pageel CMS is a self-hosted content management system for Astro sites. It uses a Git repository as the content backend, so Markdown and MDX files and images stay in the repo and no database is needed. Editors use a web dashboard, and the Git token stays on the server. GitHub is the default Git service, with Gitea and Gogs as options.

Login can use a username and password with a repository configured on the server, a username and password with each user supplying their own repository and token, or no account of its own, where each user brings a repository and token.

The [deployment guide](https://github.com/pageel/pageel-cms/blob/main/docs/deployment.md) describes two targets: Vercel, through the Astro Vercel adapter, and a Node server built with the Node adapter and run from `dist/server/entry.mjs`, with a Docker example. REDD CO., LTD maintains it.

## Worth knowing

The Vercel deployment runs as serverless functions, and the docs note that the rate limiter resets on each cold start. The README lists a separate commercial product, Pageel Workhub, for team workflow, review and permissions.
