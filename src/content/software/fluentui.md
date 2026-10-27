---
id: fluentui
name: Fluent UI React
urls:
  home: https://react.fluentui.dev
  repository: https://github.com/microsoft/fluentui
  docs: https://react.fluentui.dev/
category:
  - ui-library
description: React component library of the Fluent UI design system, published by Microsoft.
status: active
maintainer: Microsoft Corporation
maintainerType: company
firstRelease: 2022
hqCountry: US
language: javascript
basedOn:
  - react
installMethod: npm
licenseModel: open-source
license: MIT, fonts and icons subject to the assets license agreement
currentMajor: "9"
latestReleaseDate: 2026-10-26
githubStargazers: 20368
npmWeeklyDownloads: 260921
contributors: 383
dependentRepos: 535
dependentPackages: 58
social:
  x: https://twitter.com/FluentUI
addedAt: 2026-10-27
checkedAt: 2026-10-27
sources:
  - field: urls
    url: https://github.com/microsoft/fluentui
    checkedAt: 2026-10-27
  - field: urls
    url: https://github.com/microsoft/fluentui
    checkedAt: 2026-10-27
  - field: urls
    url: https://github.com/microsoft/fluentui/blob/master/packages/react-components/react-components/README.md
    checkedAt: 2026-10-27
  - field: firstRelease
    url: https://registry.npmjs.org/@fluentui%2freact-components
    checkedAt: 2026-10-27
  - field: maintainer
    url: https://github.com/microsoft/fluentui/blob/master/LICENSE
    checkedAt: 2026-10-27
  - field: maintainerType
    url: https://www.microsoft.com/en-us/legal/terms-of-use
    checkedAt: 2026-10-27
  - field: hqCountry
    url: https://www.microsoft.com/en-us/legal/terms-of-use
    checkedAt: 2026-10-27
  - field: language
    url: https://github.com/microsoft/fluentui
    checkedAt: 2026-10-27
  - field: category
    url: https://github.com/microsoft/fluentui/blob/master/apps/public-docsite-v9/src/Concepts/Introduction.mdx
    checkedAt: 2026-10-27
  - field: basedOn
    url: https://github.com/microsoft/fluentui/blob/master/apps/public-docsite-v9/src/Concepts/Introduction.mdx
    checkedAt: 2026-10-27
  - field: installMethod
    url: https://github.com/microsoft/fluentui/blob/master/apps/public-docsite-v9/src/Concepts/QuickStart.mdx
    checkedAt: 2026-10-27
  - field: license
    url: https://github.com/microsoft/fluentui/blob/master/README.md
    checkedAt: 2026-10-27
  - field: license
    url: https://github.com/microsoft/fluentui/blob/master/LICENSE
    checkedAt: 2026-10-27
  - field: license
    url: https://github.com/microsoft/fluentui/blob/master/README.md
    checkedAt: 2026-10-27
  - field: currentMajor
    url: https://github.com/microsoft/fluentui/releases/tag/@fluentui/react-components_v9.74.11
    checkedAt: 2026-10-27
  - field: latestReleaseDate
    url: https://github.com/microsoft/fluentui/releases/tag/@fluentui/react-components_v9.74.11
    checkedAt: 2026-10-27
  - field: githubStargazers
    url: https://github.com/microsoft/fluentui
    checkedAt: 2026-10-27
  - field: contributors
    url: https://github.com/microsoft/fluentui
    checkedAt: 2026-10-27
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-18:2026-10-24/@fluentui/react-components
    checkedAt: 2026-10-27
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@fluentui%2freact-components
    checkedAt: 2026-10-27
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@fluentui%2freact-components
    checkedAt: 2026-10-27
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

Fluent UI React is the React component library of the Fluent UI design system, which Microsoft publishes from a monorepo on GitHub. Its components come in the @fluentui/react-components package, and the quick start wraps an application in a FluentProvider that takes a theme and supplies the style renderer. The components are styled with CSS in JS, and design tokens carry updates to the Fluent design language.

The same repository holds the React v8 packages and the web components, which this record does not cover. Microsoft publishes the package, and the docs source sits in the repository's public docs app.

## Worth knowing

The quick start notes known strict mode bugs with React 18 and suggests turning strict mode off for Next.js hydration. The root README encourages users of the v8 packages to migrate to v9.
