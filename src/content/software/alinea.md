---
id: alinea
name: Alinea
urls:
  home: https://alineacms.com
  repository: https://github.com/alineacms/alinea
  docs: https://alineacms.com/docs
category:
  - headless-cms
description: Git-based headless CMS for Next.js that stores every entry as a JSON file in the project repository.
status: active
maintainer: alineacms
firstRelease: 2022
language: javascript
runtime:
  - node
hosting:
  - node
databases:
  - sqlite
adminUi: true
i18n: yes
installMethod: npm install alinea, then npx alinea init
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-06-26
githubStargazers: 854
npmWeeklyDownloads: 1897
contributors: 12
dependentRepos: 3
dependentPackages: 3
social:
  x: https://twitter.com/alineacms
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://alineacms.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/alineacms/alinea
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/alineacms/alinea/blob/main/readme.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/alineacms/alinea/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/alineacms/alinea
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/alineacms/alinea/blob/main/readme.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/alineacms/alinea/blob/main/readme.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://alineacms.com/docs/getting-started
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/alineacms/alinea/blob/main/readme.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/alineacms/alinea/blob/main/readme.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://github.com/alineacms/alinea/blob/main/readme.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/alineacms/alinea
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/alineacms/alinea/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/alineacms/alinea/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/alineacms/alinea/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/alineacms/alinea/releases
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/alinea
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/alineacms/alinea
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/alineacms/alinea/contributors
    checkedAt: 2026-10-23
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/alinea
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/alinea
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
---

Alinea is a headless CMS for Next.js. Content types are defined in TypeScript in a `cms.ts` file, and each entry is stored as a JSON file in the project's git repository. Editors work in a dashboard that ships with the site, and the search index for that dashboard is kept in SQLite. Pages query their content in server components, with results typed from the schema.

## Worth knowing

Alinea Cloud is a hosted option next to the open source package: the README offers it as an alternative to running the backend on your own database, and says it handles sign-in and publishing. The main-branch README documents a preview line whose quick start installs the preview tag of the npm package.
