---
id: react-md
name: react-md
urls:
  home: https://react-md.dev
  repository: https://github.com/mlaursen/react-md
  docs: https://react-md.dev/getting-started/installation
category:
  - ui-library
description: Accessible React component library, styled with Sass built to the Material Design specifications.
status: active
maintainer: Mikkel Laursen
maintainerType: individual
firstRelease: 2015
language: javascript
basedOn:
  - react
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "7"
latestReleaseDate: 2026-06-25
githubStargazers: 2326
npmWeeklyDownloads: 1038
contributors: 70
dependentPackages: 1
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://react-md.dev/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/mlaursen/react-md
    checkedAt: 2026-10-28
  - field: urls
    url: https://react-md.dev/getting-started/installation
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://react-md.dev/getting-started/installation
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/react-md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/mlaursen/react-md/main/LICENSE
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://raw.githubusercontent.com/mlaursen/react-md/main/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/mlaursen/react-md
    checkedAt: 2026-10-28
  - field: category
    url: https://react-md.dev/
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://react-md.dev/getting-started/installation
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/mlaursen/react-md/main/LICENSE
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/mlaursen/react-md/main/LICENSE
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/mlaursen/react-md/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/mlaursen/react-md/releases/tags/%40react-md%2Fcore%407.0.7
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/mlaursen/react-md
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/mlaursen/react-md/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/@react-md/core
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40react-md%2Fcore
    checkedAt: 2026-10-28
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

react-md is an accessible React component library whose styles are generated from Sass. The install page adds the `@react-md/core` package and the `sass` compiler, then has the project compile one stylesheet through an `@use` rule, so theme colors and spacing are set as Sass variables at build time. The components follow the Material Design specifications and the W3C ARIA authoring practices for keyboard and screen reader behavior.

## Worth knowing

Sass is a build-time requirement: the project compiles its styles, and a project that skips the Sass step has no styles. The install page also names React as a requirement, so the library runs only inside a React application.
