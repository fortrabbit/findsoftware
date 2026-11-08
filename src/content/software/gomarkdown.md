---
id: gomarkdown
name: gomarkdown
urls:
  repository: https://github.com/gomarkdown/markdown
  docs: https://pkg.go.dev/github.com/gomarkdown/markdown
category:
  - library
description: Go library that parses Markdown and renders it as HTML, with an optional CommonMark mode.
status: active
maintainer: gomarkdown
maintainerType: community
language: go
runtime:
  - binary
hosting:
  - binary
licenseModel: open-source
license: BSD-2-Clause
githubStargazers: 1740
contributors: 92
addedAt: 2026-11-08
checkedAt: 2026-11-08
sources:
  - field: urls
    url: https://api.github.com/repos/gomarkdown/markdown
    checkedAt: 2026-11-08
  - field: urls
    url: https://github.com/gomarkdown/markdown/blob/master/README.md
    checkedAt: 2026-11-08
  - field: maintainer
    url: https://api.github.com/repos/gomarkdown/markdown
    checkedAt: 2026-11-08
  - field: maintainerType
    url: https://github.com/gomarkdown/markdown/blob/master/LICENSE.txt
    checkedAt: 2026-11-08
  - field: category
    url: https://github.com/gomarkdown/markdown/blob/master/README.md
    checkedAt: 2026-11-08
  - field: language
    url: https://api.github.com/repos/gomarkdown/markdown
    checkedAt: 2026-11-08
  - field: runtime
    url: https://github.com/gomarkdown/markdown/blob/master/README.md
    checkedAt: 2026-11-08
  - field: license
    url: https://github.com/gomarkdown/markdown/blob/master/LICENSE.txt
    checkedAt: 2026-11-08
  - field: licenseModel
    url: https://github.com/gomarkdown/markdown/blob/master/LICENSE.txt
    checkedAt: 2026-11-08
  - field: githubStargazers
    url: https://api.github.com/repos/gomarkdown/markdown
    checkedAt: 2026-11-08
  - field: contributors
    url: https://api.github.com/repos/gomarkdown/markdown/contributors?per_page=1
    checkedAt: 2026-11-08
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

gomarkdown is a Go library that parses Markdown text and renders it as HTML. A parser turns the text into a syntax tree defined in its ast package, an HTML renderer writes the tree out, and a Markdown renderer writes a tree back to Markdown. A CommonMark mode builds the same tree, so custom renderers and tree transforms still apply. The HTML renderer has flags for untrusted input that limit what it keeps. The repository also contains a command-line tool, mdtohtml, that converts a Markdown file to HTML.

## Worth knowing

The project is a fork of the v2 line of [Blackfriday](https://github.com/russross/blackfriday), with its API split into separate ast, parser and html packages. The repository has no release objects or tags, and the README names no version.
