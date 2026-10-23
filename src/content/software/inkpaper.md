---
id: inkpaper
name: InkPaper
urls:
  home: https://inkproject.github.io/
  repository: https://github.com/InkProject/ink
  docs: https://github.com/InkProject/ink/blob/master/README.md
category:
  - ssg
description: Static blog generator written in Go that builds Markdown articles from YAML configuration and a theme.
status: active
maintainer: 紙小墨
language: go
runtime:
  - binary
hosting:
  - static
contentStore:
  - flat-file
templating: go templates
i18n: yes
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: release binary download
license: CC BY-NC 4.0
githubStargazers: 1089
contributors: 17
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://inkproject.github.io/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/InkProject/ink
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/InkProject/ink/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/InkProject/ink/blob/master/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/InkProject/ink
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/InkProject/ink/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/InkProject/ink/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/InkProject/ink/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/InkProject/ink/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/InkProject/ink/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/InkProject/ink/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/InkProject/ink/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/InkProject/ink/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/InkProject/ink/blob/master/README.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://github.com/InkProject/ink/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/InkProject/ink/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://inkproject.github.io/
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/InkProject/ink
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/InkProject/ink/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: Go · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

InkPaper is a static blog generator written in Go. Authors write articles as Markdown files in a `source` folder, and `ink build` writes the site into a `public` folder, so the output is static files that a web space can serve. A preview of the site opens at a localhost address. Page templates use Go's template syntax, and the interface language is set in the configuration. The README lists a download of a release binary, a build from source with the Go toolchain and a Docker build as install routes.

## Worth knowing

The README gives the license as CC BY-NC 4.0, and the repository has no LICENSE file. The homepage footer shows a different license, CC BY 4.0, so the terms of reuse need checking before use. The repository has no stable release: its only GitHub release is a rolling "nightly" prerelease.

The README describes a converter for Jekyll and Hexo posts and labels it as beta.
