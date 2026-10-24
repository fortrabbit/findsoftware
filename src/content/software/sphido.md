---
id: sphido
name: Sphido
urls:
  home: https://sphido.cz
  repository: https://github.com/sphido/sphido
  docs: https://sphido.cz/create.html
category:
  - ssg
description: Static site generator built from two core functions, getPages() and allPages(), that read and iterate a folder of pages.
status: active
maintainer: Roman Ožana
language: javascript
runtime:
  - node
runtimeMin: node 22
contentStore:
  - flat-file
templating: javascript template literals
runsAs:
  - local
renderingModes:
  - static
installMethod: npm create sphido (create-sphido scaffolder)
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-08-14
githubStargazers: 37
npmWeeklyDownloads: 40
contributors: 5
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://api.github.com/repos/sphido/sphido
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/sphido/sphido
    checkedAt: 2026-10-22
  - field: urls
    url: https://sphido.cz/create.html
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://github.com/sphido/sphido/blob/main/LICENSE
    checkedAt: 2026-10-22
  - field: category
    url: https://sphido.cz
    checkedAt: 2026-10-22
  - field: language
    url: https://api.github.com/repos/sphido/sphido
    checkedAt: 2026-10-22
  - field: runtime
    url: https://sphido.cz/core.html
    checkedAt: 2026-10-22
  - field: runtimeMin
    url: https://sphido.cz/core.html
    checkedAt: 2026-10-22
  - field: renderingModes
    url: https://sphido.cz
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://sphido.cz/create.html
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://sphido.cz/create.html
    checkedAt: 2026-10-22
  - field: contentStore
    url: https://sphido.cz/core.html
    checkedAt: 2026-10-22
  - field: templating
    url: https://sphido.cz/cookbook.html
    checkedAt: 2026-10-22
  - field: license
    url: https://api.github.com/repos/sphido/sphido
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://sphido.cz
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://github.com/sphido/sphido/releases/tag/v4.1.1
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@sphido/core
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/sphido/sphido
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/sphido/sphido/contributors?anon=true
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@sphido/core
    checkedAt: 2026-10-22
ai: authored
packagistDownloads: null
---

Sphido is a static site generator for Node.js, published as a set of npm packages from one repository. The core package exposes two functions: getPages(), which reads a content folder, and allPages(), which walks the pages it found. Extender packages add behavior such as Markdown rendering, frontmatter, sitemaps and feeds.

Templates are JavaScript template literals. The build is a Node script that writes the generated site into a public folder.

## Worth knowing

The install docs point to a scaffolder, create-sphido, which is a separate package from the core.
