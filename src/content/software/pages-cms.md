---
id: pages-cms
name: Pages CMS
urls:
  home: https://pagescms.org
  repository: https://github.com/hunvreus/pagescms
  docs: https://pagescms.org/docs/
category:
  - cms
description: Open source web CMS that edits the content and media files of static sites stored in a GitHub repository.
status: active
maintainer: Ronan Berder
maintainerType: individual
firstRelease: 2024
language: javascript
databases:
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: npm install, then npm run build and npm run start behind a reverse proxy
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-06-08
githubStargazers: 4126
contributors: 8
social:
  discord: https://discord.gg/5UYD7CMZ6H
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://pagescms.org
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/hunvreus/pagescms
    checkedAt: 2026-10-23
  - field: urls
    url: https://pagescms.org/docs/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/hunvreus/pagescms
    checkedAt: 2026-10-23
  - field: category
    url: https://pagescms.org/docs/
    checkedAt: 2026-10-23
  - field: databases
    url: https://pagescms.org/docs/development/database/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://pagescms.org/docs/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/hunvreus/pagescms
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://pagescms.org
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/hunvreus/pagescms/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/hunvreus/pagescms/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/hunvreus/pagescms/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/hunvreus/pagescms
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/hunvreus/pagescms/contributors
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://pagescms.org
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://pagescms.org/docs/guides/installing/self-host/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://pagescms.org/docs/guides/installing/vercel/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://pagescms.org/docs/guides/installing/self-host/
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · CMS
ai: authored
packagistDownloads: null
---

Pages CMS is a web editor for the content and media files of static sites stored in a GitHub repository. Editors work in the browser, and saved changes go back to the repository as files, so content does not live in a database. The app keeps its own state in PostgreSQL: auth data, collaborators, the parsed .pages.yml configuration and a cache.

The app is connected to GitHub through a GitHub App, which a setup helper creates. The project also runs a hosted copy at app.pagescms.org, which the README describes as an option for editing without running anything locally.

## Worth knowing

A self-hosted instance needs a PostgreSQL database, the GitHub App, and a running process started with npm run start, as the [self-hosting guide](https://pagescms.org/docs/guides/installing/self-host/) describes. The project has a Discord chat linked from its README.
