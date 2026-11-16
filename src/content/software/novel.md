---
id: novel
name: Novel
urls:
  home: https://novel.sh
  repository: https://github.com/steven-tey/novel
  docs: https://novel.sh/docs/introduction
category:
  - ui-library
description: Notion-style WYSIWYG editor with AI-powered autocompletions, built with Tiptap for React.
status: active
maintainer: Steven Tey
maintainerType: individual
firstRelease: 2023
language: javascript
basedOn:
  - tiptap
  - react
installMethod: npm
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2025-01-18
githubStargazers: 16467
npmWeeklyDownloads: 104382
contributors: 55
dependentRepos: 1
dependentPackages: 4
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://novel.sh/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/steven-tey/novel
    checkedAt: 2026-11-16
  - field: urls
    url: https://novel.sh/docs/introduction
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://registry.npmjs.org/novel/latest
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/steven-tey/novel/blob/main/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://novel.sh/docs/quickstart
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/steven-tey/novel/blob/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/steven-tey/novel
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://novel.sh/docs/quickstart
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/novel
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/steven-tey/novel/blob/main/README.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/steven-tey/novel/blob/main/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://registry.npmjs.org/novel/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://registry.npmjs.org/novel
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/steven-tey/novel
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/steven-tey/novel/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/novel
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/novel
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/novel
    checkedAt: 2026-11-16
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
runsAs: null
---

Novel is a Notion-style WYSIWYG editor for React with AI-powered autocompletions, built on Tiptap. Its package ships no styles. It exports components for the editor root, content, command items and bubble items, and the [documentation](https://novel.sh/docs/introduction) calls it a headless editor.

The repository is a monorepo. The npm package is published from its headless package, and a Next.js demo app sits beside it.

## Worth knowing

The README says the demo app needs an OpenAI API key and a Vercel Blob token to run locally. It also lists community-maintained Svelte and Vue packages; this record covers the React editor.
