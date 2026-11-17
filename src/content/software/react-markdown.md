---
id: react-markdown
name: react-markdown
urls:
  home: https://remarkjs.github.io/react-markdown/
  repository: https://github.com/remarkjs/react-markdown
  docs: https://github.com/remarkjs/react-markdown#readme
category:
  - library
description: React component that renders a Markdown string as React elements.
status: active
maintainer: Espen Hovlandsdal
maintainerType: individual
firstRelease: 2015
language: javascript
runtime:
  - node
  - deno
hosting:
  - node
  - deno
runtimeMin: node 16
basedOn:
  - react
  - unified
installMethod: npm, cdn
licenseModel: open-source
license: MIT
currentMajor: "10"
latestReleaseDate: 2025-03-07
githubStargazers: 15936
npmWeeklyDownloads: 56191113
contributors: 66
dependentRepos: 48191
dependentPackages: 2783
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://raw.githubusercontent.com/remarkjs/react-markdown/main/readme.md
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/remarkjs/react-markdown
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/remarkjs/react-markdown/main/readme.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/remarkjs/react-markdown/main/license
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://raw.githubusercontent.com/remarkjs/react-markdown/main/license
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/remarkjs/react-markdown/main/readme.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://raw.githubusercontent.com/remarkjs/react-markdown/main/readme.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://raw.githubusercontent.com/remarkjs/react-markdown/main/readme.md
    checkedAt: 2026-11-17
  - field: language
    url: https://api.github.com/repos/remarkjs/react-markdown
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/remarkjs/react-markdown/main/readme.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/remarkjs/react-markdown/main/readme.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://raw.githubusercontent.com/remarkjs/react-markdown/main/readme.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/remarkjs/react-markdown/main/readme.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/remarkjs/react-markdown/main/readme.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/remarkjs/react-markdown
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/remarkjs/react-markdown/main/license
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/remarkjs/react-markdown/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/remarkjs/react-markdown/releases
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/react-markdown
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/react-markdown
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/remarkjs/react-markdown
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/remarkjs/react-markdown/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/react-markdown
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/react-markdown
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
runsAs: null
---

react-markdown renders a Markdown string as React elements. It is a unified pipeline, with remark parsing the markdown and rehype handling the HTML, and it takes plugins that change how markdown is transformed and components that replace the normal HTML elements.

It follows CommonMark by default, and GitHub-flavored syntax comes from the remark-gfm plugin. The package is ESM only, so it loads with `import` and not `require`.

## Worth knowing

The [README](https://github.com/remarkjs/react-markdown#readme) says the plugins and components you use may be insecure, and recommends rehype-sanitize for content that must be completely safe.
