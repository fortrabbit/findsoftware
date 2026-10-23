---
id: emdash
name: EmDash
urls:
  home: https://emdashcms.com
  repository: https://github.com/emdash-cms/emdash
  docs: https://docs.emdashcms.com/
category:
  - cms
description: Full-stack TypeScript CMS built on Astro, with an admin panel, a REST API and a plugin system, that runs on Cloudflare or a Node.js server.
status: active
maintainer: Cloudflare Inc.
maintainerType: company
firstRelease: 2026
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
basedOn:
  - astro
contentStore:
  - database
databases:
  - sqlite
  - postgres
adminUi: true
headlessApi:
  - rest
i18n: yes, per-locale entries, slugs and publishing
runsAs:
  - always-on
  - per-request
installMethod: npm create emdash@latest
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-18
githubStargazers: 13905
npmWeeklyDownloads: 41787
contributors: 217
social:
  x: https://x.com/EmDashCMS
  discord: https://discord.gg/YY9vBaQRYt
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://emdashcms.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/emdash-cms/emdash
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/emdash-cms/emdash/blob/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/emdash-cms/emdash/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/emdash-cms/emdash/releases
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/emdash-cms/emdash/blob/main/README.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/emdash-cms/emdash/blob/main/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/emdash-cms/emdash
    checkedAt: 2026-10-23
  - field: runtime
    url: https://docs.emdashcms.com/deployment/nodejs/
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://docs.emdashcms.com/deployment/nodejs/
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/emdash-cms/emdash/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/emdash-cms/emdash/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://docs.emdashcms.com/deployment/nodejs/
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/emdash-cms/emdash/blob/main/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/emdash-cms/emdash/blob/main/README.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://github.com/emdash-cms/emdash/blob/main/README.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://docs.emdashcms.com/guides/internationalization/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://docs.emdashcms.com/deployment/nodejs/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://docs.emdashcms.com/deployment/cloudflare/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/emdash-cms/emdash/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/emdash-cms/emdash/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.emdashcms.com/deployment/nodejs/
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/emdash-cms/emdash/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/emdash-cms/emdash/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/emdash-cms/emdash
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/emdash-cms/emdash/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/emdash
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · CMS
ai: authored
packagistDownloads: null
---

EmDash is a full-stack TypeScript CMS built on Astro. It includes an admin panel, a REST API, role-based access control and a WordPress import. The admin signs in with passkeys by default, with GitHub, Google and Microsoft available as login providers.

EmDash runs on Cloudflare with D1, R2 and Workers, or on a Node.js server with SQLite. On a Node.js server the built-in scheduler runs only while the Node.js process is running, according to the deployment guide.

## Worth knowing

The WordPress import covers posts, pages, media and taxonomies from WXR exports.
