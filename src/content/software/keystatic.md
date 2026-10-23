---
id: keystatic
name: Keystatic
urls:
  home: https://keystatic.com
  repository: https://github.com/Thinkmill/keystatic
  docs: https://keystatic.com/docs/introduction
  pricing: https://keystatic.com/docs/cloud
category:
  - cms
description: Content management tool that edits Markdown, YAML and JSON files in a codebase, through the local file system or GitHub.
status: active
maintainer: Thinkmill Labs Pty Ltd
maintainerType: company
parent: Thinkmill
firstRelease: 2023
hqCountry: AU
language: javascript
runtime:
  - node
contentStore:
  - flat-file
adminUi: true
runsAs:
  - local
installMethod: npm create @keystatic@latest
licenseModel: open-core
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-08-26
githubStargazers: 2476
npmWeeklyDownloads: 102030
contributors: 67
social:
  x: https://twitter.com/thekeystatic
  discord: https://discord.gg/mudNPCMyCv
  forum: https://github.com/Thinkmill/keystatic/discussions
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://keystatic.com
    checkedAt: 2026-10-23
  - field: urls
    url: https://keystatic.com/docs/introduction
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/Thinkmill/keystatic
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/Thinkmill/keystatic/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/Thinkmill/keystatic/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://keystatic.com/privacy-policy
    checkedAt: 2026-10-23
  - field: parent
    url: https://keystatic.com
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/Thinkmill/keystatic
    checkedAt: 2026-10-23
  - field: runtime
    url: https://keystatic.com/docs/installation-next-js
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://keystatic.com
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://keystatic.com
    checkedAt: 2026-10-23
  - field: category
    url: https://keystatic.com
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://keystatic.com
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://keystatic.com
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/Thinkmill/keystatic
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/Thinkmill/keystatic/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@keystatic/core
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/@keystatic/core/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@keystatic/core
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/@keystatic/core
    checkedAt: 2026-10-23
  - field: hqCountry
    url: https://keystatic.com
    checkedAt: 2026-10-23
  - field: urls
    url: https://keystatic.com/docs/cloud
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://keystatic.com/docs/local-mode
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · CMS
ai: authored
packagistDownloads: null
---

Keystatic is a content editor for Markdown, Markdoc, MDX, YAML and JSON files in a codebase. It adds an admin UI to a Next.js, Astro or Remix project and writes the edited content back as files, so the project needs no database. In local mode the files sit on the developer's machine; in GitHub mode the same files are edited in a GitHub repository.

## Worth knowing

The GitHub mode page says the host must be able to run Node.js for Keystatic's API routes, and the [installation guide](https://keystatic.com/docs/installation-next-js) for Next.js says the same about the hosting provider.

Keystatic Cloud is a hosted add-on that, according to its [docs page](https://keystatic.com/docs/cloud), simplifies GitHub authentication for a project and offers opt-in products such as image storage.
