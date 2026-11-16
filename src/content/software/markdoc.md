---
id: markdoc
name: Markdoc
urls:
  home: https://markdoc.dev
  repository: https://github.com/markdoc/markdoc
  docs: https://markdoc.dev/docs
category:
  - library
description: Markdown-based syntax and toolchain for building custom documentation sites, with a parser, a transform step and renderers.
status: active
maintainer: Stripe, Inc.
maintainerType: company
parent: Stripe, Inc.
firstRelease: 2022
language: javascript
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-11-13
githubStargazers: 8525
npmWeeklyDownloads: 889015
contributors: 25
dependentRepos: 819
dependentPackages: 55
social:
  x: https://twitter.com/StripeDev
  forum: https://github.com/markdoc/markdoc/discussions
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://markdoc.dev/
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/markdoc/markdoc
    checkedAt: 2026-11-16
  - field: urls
    url: https://markdoc.dev/docs
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/markdoc/markdoc/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/markdoc/markdoc/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: parent
    url: https://markdoc.dev/
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/markdoc/markdoc/blob/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://github.com/markdoc/markdoc
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://markdoc.dev/docs
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/markdoc/markdoc/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/markdoc/markdoc
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/markdoc/markdoc/releases/tag/v0.5.12
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@markdoc/markdoc
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://github.com/markdoc/markdoc/releases/tag/0.1.0
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@markdoc/markdoc
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://github.com/markdoc/markdoc
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/markdoc/markdoc/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@markdoc%2Fmarkdoc
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@markdoc%2Fmarkdoc
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

Markdoc is a Markdown syntax and a JavaScript toolchain for building documentation sites. Content goes through three steps: `parse` turns the source into a tree, `transform` turns the tree into renderable content, and a renderer produces HTML or React output. Authors can add their own tags and nodes, and the library has built-in validation for checking content before it renders.

Stripe created Markdoc for its own documentation. The repository also holds a Next.js integration, a separate package that builds a documentation site from Markdoc content.

## Worth knowing

The React renderer needs React installed, and the public renderer types need `@types/react` even when only the parser or the HTML renderer is used.
