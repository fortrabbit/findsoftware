---
id: studiocms
name: StudioCMS
urls:
  repository: https://github.com/withstudiocms/studiocms
  docs: https://docs.studiocms.dev
  plugins: https://docs.studiocms.dev/en/package-catalog/
category:
  - headless-cms
description: Headless CMS for Astro, with a built-in dashboard, that runs as an Astro integration on libSQL, MySQL or PostgreSQL.
status: stub
maintainer: StudioCMS - withstudiocms
firstRelease: 2026
language: javascript
runtime:
  - node
hosting:
  - node
basedOn:
  - astro
databases:
  - mysql
  - postgres
adminUi: true
headlessApi:
  - rest
renderingModes:
  - server
installMethod: npm create studiocms@latest
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-19
githubStargazers: 839
npmWeeklyDownloads: 255
contributors: 23
social:
  x: https://x.com/withstudiocms
  bluesky: https://bsky.app/profile/studiocms.dev
  discord: https://chat.studiocms.dev
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/withstudiocms/studiocms
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/withstudiocms/studiocms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/withstudiocms/studiocms/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/withstudiocms/studiocms
    checkedAt: 2026-10-23
  - field: runtime
    url: https://docs.studiocms.dev/en/start-here/getting-started/
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/withstudiocms/studiocms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/withstudiocms/studiocms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://docs.studiocms.dev/en/start-here/getting-started/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.studiocms.dev/en/start-here/getting-started/
    checkedAt: 2026-10-23
  - field: databases
    url: https://docs.studiocms.dev/en/start-here/getting-started/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://docs.studiocms.dev/en/start-here/getting-started/
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://docs.studiocms.dev/en/how-it-works/restapi/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/withstudiocms/studiocms
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/withstudiocms/studiocms/main/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://github.com/withstudiocms/studiocms/releases/tag/studiocms@0.7.0
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://github.com/withstudiocms/studiocms/releases/tag/studiocms@0.7.0
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/withstudiocms/studiocms/releases/tag/studiocms@0.1.0
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/withstudiocms/studiocms
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/withstudiocms/studiocms/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/studiocms
    checkedAt: 2026-10-23
  - field: urls
    url: https://docs.studiocms.dev/en/start-here/getting-started/
    checkedAt: 2026-10-23
figure:
  emoji: 🔌
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Headless CMS
ai: authored
packagistDownloads: null
---

StudioCMS is a headless CMS that runs inside an Astro project as an Astro integration. It adds a dashboard, served at `/dashboard` by default, for managing content and settings, and it stores content in a database: libSQL by default, or MySQL or PostgreSQL set through the StudioCMS config file. The site is built with server output and the Node adapter in standalone mode. Rendering plugins turn stored content into pages, and at least one must be installed. The REST API is built on Astro endpoints, and its protected routes take an API token generated in the dashboard. Built-in authentication uses a username and password, and oAuth providers such as GitHub or Google are added as plugins.

## Worth knowing

The docs recommend the production build for the dashboard and say development mode can show Vite dependency errors. File storage is a no-op until a storage plugin such as the S3 manager is configured.
