---
id: jungle
name: JungleJS
urls:
  home: https://junglejs.org
  repository: https://github.com/junglejs/junglejs
  docs: https://junglejs.org/docs/introduction/
category:
  - ssg
description: Jamstack static site framework for Svelte with a GraphQL data layer and file-based routes.
status: stub
maintainer: Conner Aldrich
firstRelease: 2020
language: javascript
hosting:
  - static
basedOn:
  - svelte
templating: svelte
runsAs:
  - static
renderingModes:
  - static
installMethod: npx degit junglejs/template, then npm install and npm run start
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2020-07-18
githubStargazers: 274
npmWeeklyDownloads: 3
contributors: 2
social:
  x: https://twitter.com/jungle_js
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://junglejs.org/
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/junglejs/junglejs
    checkedAt: 2026-10-22
  - field: urls
    url: https://junglejs.org/docs/introduction/
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/junglejs/junglejs/master/LICENSE
    checkedAt: 2026-10-22
  - field: license
    url: https://raw.githubusercontent.com/junglejs/junglejs/master/LICENSE
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://raw.githubusercontent.com/junglejs/junglejs/master/LICENSE
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/junglejs/junglejs
    checkedAt: 2026-10-22
  - field: basedOn
    url: https://junglejs.org/docs/introduction/
    checkedAt: 2026-10-22
  - field: category
    url: https://junglejs.org/docs/introduction/
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://junglejs.org/docs/quick-start/
    checkedAt: 2026-10-22
  - field: templating
    url: https://junglejs.org/docs/introduction/
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://junglejs.org/docs/introduction/
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://junglejs.org/
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/junglejs
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/junglejs/junglejs
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/junglejs/junglejs/contributors
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://api.github.com/repos/junglejs/junglejs/releases
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://api.github.com/repos/junglejs/junglejs/releases
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://api.github.com/repos/junglejs/junglejs/releases
    checkedAt: 2026-10-22
figure:
  emoji: ⚡
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: JavaScript · SSG
ai: authored
packagistDownloads: null
---

JungleJS is a Jamstack static site framework for Svelte. Routes are Svelte files under src/routes, and a file named with a parameter, such as [param].svelte, generates dynamic routes from the data layer. A GraphQL data layer lets any part of the app query data from any configured source.

The framework compiles to completely static code that does not have to be hydrated into a single page application. A new project is created from the junglejs template with npx degit and its dependencies are installed with npm. The build output in jungle/build is the folder to deploy to static hosting.

## Worth knowing

The package installed by the docs is junglejs, not the unrelated npm package named jungle.
