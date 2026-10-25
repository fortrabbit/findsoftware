---
id: burdy
name: Burdy
urls:
  home: https://burdy.io
  repository: https://github.com/burdy-io/burdy
category:
  - headless-cms
description: Open-source headless CMS written in TypeScript, with a Node.js backend and a React admin.
status: stub
maintainer: Burdy Technologies
firstRelease: 2021
language: javascript
runtime:
  - node
hosting:
  - node
contentStore:
  - database
databases:
  - sqlite
  - postgres
  - mysql
  - mariadb
adminUi: true
i18n: yes, localization in the unified post and page structure
installMethod: npx create-burdy-app
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2022-01-27
githubStargazers: 232
npmWeeklyDownloads: 23
contributors: 8
dependentRepos: 1
dependentPackages: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://burdy.io/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/burdy-io/burdy
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/burdy-io/burdy/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/burdy-io/burdy
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/burdy
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/burdy-io/burdy/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/burdy-io/burdy/blob/main/README.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/burdy-io/burdy/blob/main/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/burdy-io/burdy/blob/main/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/burdy-io/burdy/blob/main/README.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://github.com/burdy-io/burdy/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/burdy-io/burdy/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/burdy-io/burdy/main/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/burdy-io/burdy/main/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/burdy
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/burdy
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/burdy-io/burdy
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/burdy-io/burdy/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/burdy
    checkedAt: 2026-10-23
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/burdy
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/burdy
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
---

Burdy is a self-hosted headless CMS written in TypeScript. The README lists Node.js, Express and TypeORM for the backend and React with Fluent UI for the admin, which is served at a path of the same app. Content is stored in a database, and the README names SQLite, PostgreSQL, MySQL and MariaDB as supported. A scaffolder, `npx create-burdy-app`, creates a project; the README gives `npm run dev` for development and `npm run build` followed by `npm run start` for production. Users are managed with groups and permissions, one installation can manage several sites, and a Preview Editor shows content updates on the live website from inside the admin.

## Worth knowing

The project's website says the company is rebranding and will release new enterprise tools, and it still offers the headless CMS for use. The documentation pages the README links return 404, so the README is the only documentation this record reads. The scaffolder is a separate npm package from the core package, `burdy`.
