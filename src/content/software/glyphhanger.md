---
id: glyphhanger
name: glyphhanger
urls:
  repository: https://github.com/zachleat/glyphhanger
  docs: https://github.com/zachleat/glyphhanger/blob/main/README.md
category:
  - build-tool
description: Command-line tool that finds the glyphs a web page uses and subsets web font files to them.
status: active
maintainer: Zach Leatherman
maintainerType: individual
firstRelease: 2017
language: javascript
runtime:
  - node
installMethod: npm install -g glyphhanger
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-06-05
githubStargazers: 907
npmWeeklyDownloads: 985
contributors: 10
dependentRepos: 46
dependentPackages: 10
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/zachleat/glyphhanger
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/zachleat/glyphhanger/blob/main/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://registry.npmjs.org/glyphhanger/latest
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/zachleat/glyphhanger/blob/v6.0.0/package.json
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/zachleat/glyphhanger
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/zachleat/glyphhanger/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/zachleat/glyphhanger/blob/v6.0.0/package.json
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/zachleat/glyphhanger/blob/main/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/glyphhanger
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/zachleat/glyphhanger/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/zachleat/glyphhanger/releases
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/glyphhanger
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/glyphhanger
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/glyphhanger
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/zachleat/glyphhanger
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/zachleat/glyphhanger/contributors
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
---

glyphhanger is a command-line tool that reads a web page or a local file and lists the characters its text uses as a Unicode range. With `--subset`, it writes smaller copies of font files that keep only those characters, in TTF, WOFF or WOFF2 format. With `--css`, it also writes a `@font-face` block for the subset files. It can follow local links with a spider, and limit the result to text in one font family or to visible text.

## Worth knowing

Subsetting needs `pyftsubset` from fonttools, which needs Python. By default the page reader runs Puppeteer with headless Chrome; a `--jsdom` mode reads pages without it.
