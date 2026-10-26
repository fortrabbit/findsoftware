---
id: fast
name: FAST
urls:
  home: https://fast.design/
  repository: https://github.com/microsoft/fast
  docs: https://fast.design/docs/3.x/getting-started/quick-start/
category:
  - ui-library
description: Library for building Web Components based on W3C standards, published by Microsoft.
status: active
maintainer: Microsoft Corporation
maintainerType: company
firstRelease: 2018
language: javascript
templating: html tagged template literals, or declarative f-template HTML elements
runsAs:
  - browser
renderingModes:
  - spa
  - server
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-15
githubStargazers: 9684
npmWeeklyDownloads: 143671
contributors: 152
dependentRepos: 479
dependentPackages: 111
social:
  x: https://twitter.com/FAST_UI
  discord: https://discord.gg/FcSNfg4
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://fast.design/
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/microsoft/fast
    checkedAt: 2026-10-26
  - field: urls
    url: https://fast.design/docs/3.x/getting-started/quick-start/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://github.com/microsoft/fast/tree/v1.2.0
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/microsoft/fast/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: maintainerType
    url: https://github.com/microsoft/fast/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://github.com/microsoft/fast
    checkedAt: 2026-10-26
  - field: category
    url: https://fast.design/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://fast.design/docs/3.x/getting-started/quick-start/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://fast.design/docs/3.x/declarative-templates/server-rendering/
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/microsoft/fast/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/microsoft/fast/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://github.com/microsoft/fast/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://github.com/microsoft/fast/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://github.com/microsoft/fast
    checkedAt: 2026-10-26
  - field: contributors
    url: https://github.com/microsoft/fast
    checkedAt: 2026-10-26
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-18:2026-10-24/@microsoft/fast-element
    checkedAt: 2026-10-26
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40microsoft%2Ffast-element
    checkedAt: 2026-10-26
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40microsoft%2Ffast-element
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://fast.design/docs/3.x/declarative-templates/overview/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://fast.design/docs/3.x/declarative-templates/server-rendering/
    checkedAt: 2026-10-26
  - field: templating
    url: https://fast.design/docs/3.x/declarative-templates/overview/
    checkedAt: 2026-10-26
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
i18n: null
hosting: null
runtimeMin: null
packagistDownloads: null
---

FAST is Microsoft's library for building Web Components, the W3C standards for custom HTML elements. Its core package, FAST Element, extends the standard Web Component APIs, and the [quick-start guide](https://fast.design/docs/3.x/getting-started/quick-start/) installs it with npm for a TypeScript project built with a bundler. The project does not add a component model of its own, and it can be used with any framework or without one.

Templates are written either as JavaScript tagged template literals or as declarative HTML elements. The declarative form lets any server technology render the initial HTML, which the browser then hydrates, while the FAST runtime itself stays browser-only.

## Worth knowing

Ready-made components built on FAST Element, such as Fluent UI's web components, are separate packages that the README names. They are not part of this record.
