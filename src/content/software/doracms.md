---
id: doracms
name: DoraCMS
urls:
  home: https://www.doracms.net
  repository: https://github.com/doramart/DoraCMS
  docs: https://www.doracms.net
category:
  - cms
description: Content management system with an EggJS server, Vue 3 user and admin front ends, and MongoDB or MariaDB storage.
status: stub
maintainer: DoraCMS Team
maintainerType: community
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 18
basedOn:
  - vue
databases:
  - mongodb
  - mariadb
adminUi: true
templating: nunjucks
i18n: yes
runsAs:
  - always-on
installMethod: git clone, then pnpm install
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2020-08-01
githubStargazers: 3548
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: name
    url: https://github.com/doramart/DoraCMS/blob/3.1/README.en.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://www.doracms.net
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/doramart/DoraCMS
    checkedAt: 2026-10-23
  - field: urls
    url: https://www.doracms.net
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/doramart/DoraCMS/blob/3.1/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/doramart/DoraCMS/languages
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/doramart/DoraCMS/blob/3.1/README.en.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/doramart/DoraCMS/blob/3.1/README.en.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/doramart/DoraCMS/blob/3.1/README.en.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/doramart/DoraCMS/blob/3.1/README.en.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://www.doracms.net/guide/getting-started
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/doramart/DoraCMS/blob/3.1/README.en.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/doramart/DoraCMS/blob/3.1/README.en.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://github.com/doramart/DoraCMS/blob/3.1/README.en.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://www.doracms.net/guide/template
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/doramart/DoraCMS/blob/3.1/README.en.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/doramart/DoraCMS/blob/3.1/README.en.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://www.doracms.net/guide/cli
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/doramart/DoraCMS/blob/3.1/README.en.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/doramart/DoraCMS
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/doramart/DoraCMS/blob/3.1/README.en.md
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/doramart/DoraCMS/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/doramart/DoraCMS/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/doramart/DoraCMS
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/doramart/DoraCMS/contributors
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · CMS
ai: authored
packagistDownloads: null
---

DoraCMS is a content management system built on an EggJS server, with Vue 3 user and admin front ends in a pnpm monorepo. The admin center is developed on top of SoybeanAdmin. Page templates use Nunjucks. Content is stored in MongoDB or MariaDB, and the Docker Compose setup starts MongoDB by default, with MariaDB under a Compose profile. Installation clones the repository and runs `pnpm install`, starts the stack with Docker Compose, or scaffolds a project with the `doracms-cli` package.

## Worth knowing

The docs quick start gives Node.js 18.20 or newer, while the README badge gives 14. The repository has a single GitHub release, which predates the current default branch.
