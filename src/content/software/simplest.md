---
id: simplest
name: Simplest
urls:
  repository: https://github.com/ciscoheat/simplest-sitegen
  docs: https://github.com/ciscoheat/simplest-sitegen/blob/master/README.md
category:
  - ssg
description: Static site generator that builds a website from plain HTML files and one shared template, with a Browsersync dev server.
status: stub
maintainer: Andreas Söderlund
maintainerType: individual
firstRelease: 2022
hosting:
  - static
contentStore:
  - flat-file
templating: pug, svelte
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: npm create simplest-sitegen
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2022-09-27
githubStargazers: 8
npmWeeklyDownloads: 70
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/ciscoheat/simplest-sitegen
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/ciscoheat/simplest-sitegen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/ciscoheat/simplest-sitegen/blob/master/package.json
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/simplest-sitegen
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/ciscoheat/simplest-sitegen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/ciscoheat/simplest-sitegen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/ciscoheat/simplest-sitegen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/ciscoheat/simplest-sitegen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/ciscoheat/simplest-sitegen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/ciscoheat/simplest-sitegen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/ciscoheat/simplest-sitegen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/ciscoheat/simplest-sitegen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/ciscoheat/simplest-sitegen/blob/master/package.json
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/ciscoheat/simplest-sitegen/blob/master/package.json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/simplest-sitegen/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/simplest-sitegen
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/ciscoheat/simplest-sitegen
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/ciscoheat/simplest-sitegen/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/simplest-sitegen
    checkedAt: 2026-10-23
ai: authored
---

Simplest is a static site generator that builds pages from HTML files in a src folder, in any folder structure, using one shared template.html. The npx simplest build command writes the site to a build folder that can be uploaded to any host. The npx simplest command starts a Browsersync development server on the developer's machine. A project is created with npm create simplest-sitegen.

Pug and Svelte files are optional alternatives to plain HTML.
