---
id: harold
name: Harold
urls:
  home: https://www.haroldjs.com
  repository: https://github.com/harold-js/create-harold-app
  docs: https://www.haroldjs.com/docs/getting-started.html
category:
  - ssg
description: Markdown and Handlebars static site generator for blogs, docs sites and landing pages, started with the create-harold-app scaffolder.
status: active
maintainer: Julian Ćwirko
firstRelease: 2021
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 24
contentStore:
  - flat-file
templating: handlebars
runsAs:
  - static
renderingModes:
  - static
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-04-11
githubStargazers: 37
npmWeeklyDownloads: 1
contributors: 1
dependentRepos: 1
dependentPackages: 1
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://www.haroldjs.com
    checkedAt: 2026-10-21
  - field: urls
    url: https://github.com/harold-js/create-harold-app
    checkedAt: 2026-10-21
  - field: urls
    url: https://www.haroldjs.com/docs/getting-started.html
    checkedAt: 2026-10-21
  - field: firstRelease
    url: https://registry.npmjs.org/create-harold-app
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://github.com/harold-js/create-harold-app/blob/master/LICENSE
    checkedAt: 2026-10-21
  - field: language
    url: https://github.com/harold-js/create-harold-app
    checkedAt: 2026-10-21
  - field: category
    url: https://www.haroldjs.com
    checkedAt: 2026-10-21
  - field: runtime
    url: https://www.haroldjs.com/docs/getting-started.html
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://www.haroldjs.com/docs/getting-started.html
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://www.haroldjs.com/docs/getting-started.html
    checkedAt: 2026-10-21
  - field: contentStore
    url: https://www.haroldjs.com
    checkedAt: 2026-10-21
  - field: templating
    url: https://www.haroldjs.com
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://www.haroldjs.com
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://www.haroldjs.com
    checkedAt: 2026-10-21
  - field: license
    url: https://github.com/harold-js/create-harold-app/blob/master/LICENSE
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/create-harold-app/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://api.github.com/repos/harold-js/create-harold-app/releases/latest
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://github.com/harold-js/create-harold-app
    checkedAt: 2026-10-21
  - field: contributors
    url: https://github.com/harold-js/create-harold-app
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/harold-scripts
    checkedAt: 2026-10-21
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/harold-scripts
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/harold-scripts
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
---

Harold is a static site generator that builds blogs, docs sites and landing pages from Markdown files with front matter. Layouts and partials are Handlebars templates, and styling is written in SCSS. The ready-made templates include a Lunr-powered search setup for content-heavy sites. Content stays as plain files in the project, and the build writes static HTML that any static host can serve.

A site starts with the [create-harold-app](https://github.com/harold-js/create-harold-app) scaffolder, which installs harold-scripts.

## Worth knowing

Template and directory names are set at setup. The getting-started guide says to rename the content and layout directories right after init, and to change the search configuration when the posts path changes.
