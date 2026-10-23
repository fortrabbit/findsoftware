---
id: charge
name: Charge
urls:
  home: https://charge.js.org
  repository: https://github.com/brandonweiss/charge
  docs: https://charge.js.org/installation
category:
  - ssg
description: Opinionated, zero-config static site generator that builds sites from JSX and MDX templates.
status: stub
maintainer: Brandon Weiss
maintainerType: individual
firstRelease: 2018
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 10
templating: jsx, mdx
runsAs:
  - static
renderingModes:
  - static
installMethod: npm (global install or devDependency)
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2020-03-12
githubStargazers: 428
npmWeeklyDownloads: 33
contributors: 10
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://charge.js.org
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/brandonweiss/charge
    checkedAt: 2026-10-22
  - field: urls
    url: https://charge.js.org/installation
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/brandonweiss/charge/v1.7.0/package.json
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/brandonweiss/charge/languages
    checkedAt: 2026-10-22
  - field: category
    url: https://charge.js.org
    checkedAt: 2026-10-22
  - field: runtime
    url: https://raw.githubusercontent.com/brandonweiss/charge/v1.7.0/package.json
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://raw.githubusercontent.com/brandonweiss/charge/v1.7.0/package.json
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://charge.js.org/installation
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://charge.js.org/usage
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://charge.js.org
    checkedAt: 2026-10-22
  - field: templating
    url: https://charge.js.org
    checkedAt: 2026-10-22
  - field: license
    url: https://raw.githubusercontent.com/brandonweiss/charge/v1.7.0/package.json
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://raw.githubusercontent.com/brandonweiss/charge/v1.7.0/package.json
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://api.github.com/repos/brandonweiss/charge/releases
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://api.github.com/repos/brandonweiss/charge/releases
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://registry.npmjs.org/@static%2fcharge
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/brandonweiss/charge
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/brandonweiss/charge/contributors?anon=true&per_page=100
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@static/charge
    checkedAt: 2026-10-22
figure:
  emoji: ⚡
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: JavaScript · SSG
ai: authored
packagistDownloads: null
---

Charge is a static site generator that renders JSX and MDX templates server-side, so the site it generates is static files. The [documentation](https://charge.js.org/usage) describes two commands: `charge serve` starts a live-reloading development server, and `charge build` writes the static files that get deployed. The project describes itself as having no configuration, and the [installation page](https://charge.js.org/installation) names the scoped package `@static/charge` because the unscoped name on npm belongs to another project. The [deployment page](https://charge.js.org/deployment) lists Amazon S3, Netlify, Vercel and Heroku as hosts.
