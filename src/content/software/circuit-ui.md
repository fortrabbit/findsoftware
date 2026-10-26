---
id: circuit-ui
name: Circuit UI
urls:
  home: https://circuit.sumup.com/
  repository: https://github.com/sumup-oss/circuit-ui
  docs: https://circuit.sumup.com/
category:
  - ui-library
description: React component library and design system for SumUp's web products.
status: active
maintainer: SumUp
maintainerType: company
firstRelease: 2024
language: javascript
basedOn:
  - react
i18n: Localization and locale-aware formatting for any language and region, with default translations for a handful of essenti
installMethod: npm
licenseModel: open-source
license: Apache-2.0
currentMajor: "12"
latestReleaseDate: 2026-10-26
githubStargazers: 981
npmWeeklyDownloads: 1485
contributors: 91
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://github.com/sumup-oss/circuit-ui
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/sumup-oss/circuit-ui
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/sumup-oss/circuit-ui
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://registry.npmjs.org/@sumup-oss/circuit-ui
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/sumup-oss/circuit-ui
    checkedAt: 2026-10-26
  - field: maintainerType
    url: https://github.com/sumup-oss/circuit-ui
    checkedAt: 2026-10-26
  - field: language
    url: https://github.com/sumup-oss/circuit-ui
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://github.com/sumup-oss/circuit-ui/blob/main/packages/circuit-ui/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/sumup-oss/circuit-ui/blob/main/packages/circuit-ui/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/sumup-oss/circuit-ui/blob/main/packages/circuit-ui/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/sumup-oss/circuit-ui/blob/main/docs/introduction/2-getting-started.mdx
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/sumup-oss/circuit-ui
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/sumup-oss/circuit-ui/blob/main/packages/circuit-ui/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/sumup-oss/circuit-ui
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://github.com/sumup-oss/circuit-ui/releases/tag/@sumup-oss/circuit-ui@12.5.0
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://github.com/sumup-oss/circuit-ui/releases/tag/@sumup-oss/circuit-ui@12.5.0
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://github.com/sumup-oss/circuit-ui
    checkedAt: 2026-10-26
  - field: contributors
    url: https://github.com/sumup-oss/circuit-ui
    checkedAt: 2026-10-26
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-18:2026-10-24/@sumup-oss/circuit-ui
    checkedAt: 2026-10-26
  - field: i18n
    url: https://github.com/sumup-oss/circuit-ui/blob/main/docs/introduction/4-internationalization.mdx
    checkedAt: 2026-10-26
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
runsAs: null
---

Circuit UI is the web implementation of SumUp's Circuit Design System, shipped as a React component library. The install docs name the core package, which sits in a repository that also publishes design tokens, icons, illustrations, and ESLint and Stylelint plugins. Components are grouped into stable, internal, experimental, under review, legacy and deprecated stages, and the experimental and legacy groups are imported from their own paths. Most translatable strings are passed in through component props, and the components include default translations for a handful of essential strings.

## Worth knowing

The core package needs several peer dependencies installed beside it, including React, the design tokens, icons and intl packages, and temporal-polyfill. The getting-started page says to import the fonts and design tokens before the component styles.
