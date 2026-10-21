---
id: docmd
name: docmd
urls:
  home: https://docmd.io
  repository: https://github.com/docmd-io/docmd
  docs: https://docs.docmd.io
category:
  - ssg
description: Documentation compiler that turns one folder of Markdown into a static documentation website, search index and AI context files.
status: active
maintainer: docmd.io
language: typescript
runtime:
  - node
hosting:
  - static
runtimeMin: node 20
i18n: yes
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: npm install -g @docmd/core
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-16
githubStargazers: 2530
npmWeeklyDownloads: 9000
contributors: 16
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://docmd.io
    checkedAt: 2026-10-21
  - field: urls
    url: https://api.github.com/repos/docmd-io/docmd
    checkedAt: 2026-10-21
  - field: urls
    url: https://github.com/docmd-io/docmd/blob/main/README.md
    checkedAt: 2026-10-21
  - field: maintainer
    url: https://github.com/docmd-io/docmd/blob/main/LICENSE
    checkedAt: 2026-10-21
  - field: category
    url: https://github.com/docmd-io/docmd/blob/main/README.md
    checkedAt: 2026-10-21
  - field: language
    url: https://api.github.com/repos/docmd-io/docmd
    checkedAt: 2026-10-21
  - field: license
    url: https://registry.npmjs.org/@docmd/core/latest
    checkedAt: 2026-10-21
  - field: licenseModel
    url: https://github.com/docmd-io/docmd/blob/main/README.md
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://github.com/docmd-io/docmd/blob/main/README.md
    checkedAt: 2026-10-21
  - field: runtime
    url: https://docs.docmd.io/getting-started/installation/
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://docs.docmd.io/getting-started/installation/
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://github.com/docmd-io/docmd/blob/main/README.md
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://github.com/docmd-io/docmd/blob/main/README.md
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://github.com/docmd-io/docmd/blob/main/README.md
    checkedAt: 2026-10-21
  - field: i18n
    url: https://github.com/docmd-io/docmd/blob/main/README.md
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/@docmd/core/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@docmd/core
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@docmd/core
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://api.github.com/repos/docmd-io/docmd
    checkedAt: 2026-10-21
  - field: contributors
    url: https://api.github.com/repos/docmd-io/docmd/contributors?anon=true&per_page=100
    checkedAt: 2026-10-21
figure:
  emoji: ⚡
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: TypeScript · SSG
ai: authored
packagistDownloads: null
---

docmd compiles a folder of Markdown into more than a website: the README lists a search index, llms.txt files, Open Knowledge Format bundles and an MCP interface among the outputs of the same build. The site itself is static HTML with minimal vanilla JavaScript. It can be installed locally, globally or as a Docker image (see the [installation guide](https://docs.docmd.io/getting-started/installation/)), and a migration command covers Docusaurus, VitePress, MkDocs and Starlight projects.

## Worth knowing

The AI Assistant is a chat over the documentation. It can connect to the project's own backend or a local AI provider, and for static sites the README names the hosted Cloud Relay as the bridge. The relay is free to use with the user's own provider key, and the provider may charge for model usage. Generated documentation does not require docmd-hosted infrastructure.
