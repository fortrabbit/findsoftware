---
id: mdsvex
name: mdsvex
urls:
  home: https://mdsvex.pngwn.at/
  repository: https://github.com/pngwn/MDsveX
  docs: https://mdsvex.pngwn.at/docs
category:
  - library
description: Markdown preprocessor for Svelte that lets Svelte components and Markdown be written in the same document.
status: active
maintainer: pngwn
maintainerType: individual
firstRelease: 2019
language: javascript
basedOn:
  - svelte
templating: svelte
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-07-19
githubStargazers: 3076
npmWeeklyDownloads: 312014
contributors: 48
dependentRepos: 992
dependentPackages: 256
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://mdsvex.pngwn.at/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/pngwn/MDsveX
    checkedAt: 2026-11-16
  - field: urls
    url: https://mdsvex.pngwn.at/docs
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/pngwn/MDsveX/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/mdsvex
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/pngwn/MDsveX/blob/main/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://mdsvex.pngwn.at/docs
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/pngwn/MDsveX
    checkedAt: 2026-11-16
  - field: templating
    url: https://mdsvex.pngwn.at/docs
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://mdsvex.pngwn.at/docs
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/pngwn/MDsveX/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/pngwn/MDsveX/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/pngwn/MDsveX/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://registry.npmjs.org/mdsvex
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/mdsvex
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/pngwn/MDsveX
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/pngwn/MDsveX/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/mdsvex
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/mdsvex
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
i18n: null
renderingModes: null
packagistDownloads: null
runsAs: null
---

mdsvex brings Markdown into Svelte projects. It is added as a preprocessor to a Svelte build with rollup or webpack, which then passes `.svx` files through it, or its compile function turns a document into Svelte code without hooking into the Svelte compiler. The docs say it supports all Svelte syntax and almost all Markdown syntax, so a Markdown document can import and use Svelte components. Parsing runs on unified, remark and rehype, and remark and rehype plugins can be passed in as options.

The repository is a monorepo that also holds packages for working with Svelte syntax trees.

## Worth knowing

A code block indented by four spaces does nothing in mdsvex, since indentation is common in XML-based languages.
