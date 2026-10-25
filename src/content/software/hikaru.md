---
id: hikaru
name: Hikaru
urls:
  home: https://hikaru.alynx.one/
  repository: https://github.com/AlynxZhou/hikaru
  docs: https://hikaru.alynx.one/
category:
  - ssg
description: Static site generator that builds routes from the directory layout of its source files, installed from the hikarujs npm package.
status: active
maintainerType: individual
firstRelease: 2019
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 22
runsAs:
  - static
renderingModes:
  - static
installMethod: npm
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-07-11
githubStargazers: 19
npmWeeklyDownloads: 8
contributors: 1
dependentRepos: 1
dependentPackages: 2
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://hikaru.alynx.one/
    checkedAt: 2026-10-21
  - field: urls
    url: https://github.com/AlynxZhou/hikaru
    checkedAt: 2026-10-21
  - field: urls
    url: https://hikaru.alynx.one/
    checkedAt: 2026-10-21
  - field: firstRelease
    url: https://registry.npmjs.org/hikarujs
    checkedAt: 2026-10-21
  - field: language
    url: https://github.com/AlynxZhou/hikaru
    checkedAt: 2026-10-21
  - field: category
    url: https://hikaru.alynx.one/
    checkedAt: 2026-10-21
  - field: runtime
    url: https://github.com/AlynxZhou/hikaru/blob/master/README.md
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://registry.npmjs.org/hikarujs/latest
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://github.com/AlynxZhou/hikaru/blob/master/README.md
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://hikaru.alynx.one/
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://hikaru.alynx.one/
    checkedAt: 2026-10-21
  - field: license
    url: https://github.com/AlynxZhou/hikaru/blob/master/LICENSE
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/hikarujs/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://registry.npmjs.org/hikarujs
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://github.com/AlynxZhou/hikaru
    checkedAt: 2026-10-21
  - field: contributors
    url: https://github.com/AlynxZhou/hikaru
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/hikarujs
    checkedAt: 2026-10-21
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/hikarujs
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/hikarujs
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
---

Hikaru is a static site generator that builds routes from the directory layout of its source files. Pages are Markdown files with front matter, kept in a source directory. The build writes static files, and the README includes a live server step for previewing. Themes are added as separate repositories, and the default theme is ARIA. The command line program is installed into the site's own directory and run with npx, and the setup steps add feed, sitemap and search generators beside the core package.

The [docs site](https://hikaru.alynx.one/) covers the install, theme and configuration steps.

## Worth knowing

Hikaru supports the Node.js LTS and current release lines and does not support versions that have reached end of life, as the README states.

A site depends on a theme repository being cloned into the themes directory or added as a submodule, so the theme is a separate dependency from the core package.
