---
id: markdown-to-jsx
name: markdown-to-jsx
urls:
  home: https://markdown-to-jsx.quantizor.dev/
  repository: https://github.com/quantizor/markdown-to-jsx
category:
  - library
description: Markdown parser and compiler toolchain for JavaScript and TypeScript projects, with React, React Native, SolidJS, Vue and HTML output.
status: active
maintainer: Evan Jacobs
maintainerType: individual
firstRelease: 2015
language: javascript
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "9"
latestReleaseDate: 2026-11-06
githubStargazers: 2393
npmWeeklyDownloads: 6011860
contributors: 70
dependentRepos: 56285
dependentPackages: 468
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://registry.npmjs.org/markdown-to-jsx/latest
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/quantizor/markdown-to-jsx
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://registry.npmjs.org/markdown-to-jsx/9.10.6
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://registry.npmjs.org/markdown-to-jsx/9.10.6
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/quantizor/markdown-to-jsx/blob/main/lib/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://github.com/quantizor/markdown-to-jsx
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/quantizor/markdown-to-jsx/blob/main/lib/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://registry.npmjs.org/markdown-to-jsx/9.10.6
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/quantizor/markdown-to-jsx
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/quantizor/markdown-to-jsx/releases/tag/markdown-to-jsx@9.10.6
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/quantizor/markdown-to-jsx/releases/tag/markdown-to-jsx@9.10.6
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://github.com/quantizor/markdown-to-jsx/releases/tag/1.0.0
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/markdown-to-jsx
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://github.com/quantizor/markdown-to-jsx
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/quantizor/markdown-to-jsx/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/markdown-to-jsx
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/markdown-to-jsx
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

markdown-to-jsx compiles Markdown into components for React, React Native, SolidJS and Vue, or into an HTML string or back into Markdown. The default export is a React component that renders a Markdown string, and each target has its own entry point with a `compiler` and a `parser` that returns the syntax tree. Overrides replace the rendering of any HTML tag, and a `renderRule` hook changes how one kind of node is drawn, for example to highlight fenced code.

The library accepts GFM and CommonMark syntax and keeps raw HTML in the input as JSX elements. Its README says the component works in React Server Components as well as in client code, without a client directive.

## Worth knowing

Raw HTML is sanitized in every renderer. Function props on custom components stay as strings unless `evalUnserializableExpressions` is turned on, and the README discourages that option for user-written Markdown.
