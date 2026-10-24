---
id: ulka
name: Ulka
urls:
  home: https://ulka.js.org
  repository: https://github.com/ulkajs/ulka
  docs: https://ulka.js.org/docs/
category:
  - ssg
description: Static site generator written in JavaScript that builds pages from templates and content files, with a plugin system.
status: active
maintainer: Roshan Acharya
language: javascript
runtime:
  - node
hosting:
  - static
contentStore:
  - flat-file
templating: ejs, pug, liquid, ulka
runsAs:
  - static
renderingModes:
  - static
installMethod: npm init ulka
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2023-06-30
githubStargazers: 20
npmWeeklyDownloads: 27
contributors: 3
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://ulka.js.org/
    checkedAt: 2026-10-23
  - field: urls
    url: https://ulka.js.org/docs/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/ulkajs/ulka
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/ulkajs/ulka/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/ulkajs/ulka
    checkedAt: 2026-10-23
  - field: category
    url: https://ulka.js.org/docs/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://ulka.js.org/docs/quickstart/
    checkedAt: 2026-10-23
  - field: templating
    url: https://ulka.js.org/docs/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://ulka.js.org/docs/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/ulkajs/ulka/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://ulka.js.org/docs/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://ulka.js.org/docs/quickstart/
    checkedAt: 2026-10-23
  - field: license
    url: https://registry.npmjs.org/ulka/latest
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/ulkajs/ulka/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/ulka/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/ulka
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/ulkajs/ulka
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/ulkajs/ulka/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/ulka
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
---

Ulka is a static site generator written in JavaScript. It builds HTML pages and assets from templates and content files. Templates can use ejs, pug or liquid, or Ulka's own template language.

A project starts with `npm init ulka`. `npx ulka` builds the site into the output directory set in `ulka-config.js`.

Plugin packages such as `@ulkajs/plugin-tags` extend the build.
