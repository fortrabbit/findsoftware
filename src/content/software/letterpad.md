---
id: letterpad
name: Letterpad
urls:
  home: https://letterpad.app
  repository: https://github.com/letterpad/letterpad
category:
  - cms
description: Blog publishing engine with an admin dashboard and a server-rendered public website, storing content in SQLite or MySQL.
status: active
maintainer: Letterpad
firstRelease: 2019
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 18
databases:
  - sqlite
  - mysql
adminUi: true
runsAs:
  - always-on
renderingModes:
  - server
installMethod: git clone, bun install, bun run build, bun run seed, bun run start
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2024-02-15
githubStargazers: 789
contributors: 13
social:
  discord: https://discord.gg/n89rCNnzRw
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://letterpad.app/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/letterpad/letterpad
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/letterpad/letterpad/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/letterpad/letterpad/languages
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/letterpad/letterpad/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/letterpad/letterpad/blob/master/package.json
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/letterpad/letterpad/blob/master/package.json
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/letterpad/letterpad/blob/master/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://github.com/letterpad/letterpad/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/letterpad/letterpad/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/letterpad/letterpad/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/letterpad/letterpad/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/letterpad/letterpad/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/letterpad/letterpad
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/letterpad/letterpad/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/letterpad/letterpad/releases/tag/v1.3.0
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/letterpad/letterpad/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/letterpad/letterpad/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/letterpad/letterpad
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/letterpad/letterpad/contributors
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · CMS
ai: authored
packagistDownloads: null
---

Letterpad is a blog publishing engine with an admin dashboard and a server-rendered public website. The admin panel and the client site run as two apps in one repository, on ports 3000 and 3001 by default, and content is stored in SQLite or MySQL. The README lists inline editing on the website, domain mapping, three themes, a multi-user install and integrations with Cloudinary and Unsplash. Installation clones the repository and runs `bun install`, `bun run build`, `bun run seed` and `bun run start`, or runs the Docker image named in the README.

## Worth knowing

The project's website, letterpad.app, runs a hosted publishing platform with member accounts and a Pro plan, which is separate from the open source install. The client app needs a client ID copied from the admin settings.
