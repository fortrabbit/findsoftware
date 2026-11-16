---
id: starry-night
name: starry-night
urls:
  repository: https://github.com/wooorm/starry-night
  docs: https://github.com/wooorm/starry-night/blob/main/readme.md
category:
  - library
description: JavaScript syntax highlighter that uses TextMate grammars and is designed to produce markup matching GitHub's code highlighting.
status: active
maintainer: Titus Wormer
maintainerType: individual
firstRelease: 2022
language: javascript
runtime:
  - node
  - deno
hosting:
  - node
  - deno
runtimeMin: node 16
installMethod: npm, cdn
licenseModel: open-source
license: MIT, Apache-2.0
currentMajor: "3"
latestReleaseDate: 2026-08-30
githubStargazers: 1819
npmWeeklyDownloads: 149890
contributors: 5
dependentRepos: 56
dependentPackages: 19
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/wooorm/starry-night
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/wooorm/starry-night/blob/main/readme.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/wooorm/starry-night/blob/main/license
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/wooorm/starry-night/blob/main/readme.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/wooorm/starry-night
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/wooorm/starry-night/blob/main/readme.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/wooorm/starry-night/blob/main/readme.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/wooorm/starry-night/blob/main/readme.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/wooorm/starry-night/blob/main/readme.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/wooorm/starry-night/blob/main/readme.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/wooorm/starry-night/blob/main/license
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/wooorm/starry-night/blob/main/readme.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/wooorm/starry-night/blob/main/license
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/wooorm/starry-night/releases
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/wooorm/starry-night/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/wooorm/starry-night/releases/latest
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@wooorm/starry-night
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@wooorm%2Fstarry-night
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@wooorm%2Fstarry-night
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/wooorm/starry-night
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/wooorm/starry-night/contributors?per_page=1
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

starry-night is a JavaScript syntax highlighter that uses TextMate grammars. It produces a syntax tree rather than a string, so the result can be turned into HTML, React nodes or ANSI output. The README says its output classes are meant to match GitHub's and that the stylesheet it ships supports light and dark mode. It calls the project similar to shiki.

## Worth knowing

The package is ESM only. The README notes a WebAssembly dependency and rather big grammars, and says it may be too heavy in browsers, where it names lowlight and refractor as more suitable options. The grammars it includes are covered by their own repositories' licenses, which the README calls permissive.
