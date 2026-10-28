---
id: panda-css
name: Panda CSS
urls:
  home: https://panda-css.com
  repository: https://github.com/chakra-ui/panda
  docs: https://panda-css.com/docs
category:
  - css-framework
description: Styling engine that generates atomic CSS at build time from type-safe TypeScript style definitions.
status: active
maintainer: Chakra Systems Inc.
maintainerType: company
firstRelease: 2023
language: javascript
runtime:
  - node
runtimeMin: node 22
runsAs:
  - local
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-22
githubStargazers: 6236
npmWeeklyDownloads: 565899
contributors: 179
httpArchiveSites: 4431
dependentRepos: 67
dependentPackages: 101
social:
  x: https://twitter.com/panda__css
  discord: https://discord.gg/VQrkpsgSx7
addedAt: 2026-10-27
checkedAt: 2026-10-27
sources:
  - field: urls
    url: https://panda-css.com/
    checkedAt: 2026-10-27
  - field: urls
    url: https://github.com/chakra-ui/panda
    checkedAt: 2026-10-27
  - field: urls
    url: https://panda-css.com/docs
    checkedAt: 2026-10-27
  - field: maintainer
    url: https://github.com/chakra-ui/panda/blob/v2/LICENSE.md
    checkedAt: 2026-10-27
  - field: firstRelease
    url: https://github.com/chakra-ui/panda/releases
    checkedAt: 2026-10-27
  - field: language
    url: https://panda-css.com/docs/overview/why-panda
    checkedAt: 2026-10-27
  - field: category
    url: https://panda-css.com/docs/overview/why-panda
    checkedAt: 2026-10-27
  - field: installMethod
    url: https://panda-css.com/docs/installation/cli
    checkedAt: 2026-10-27
  - field: installMethod
    url: https://panda-css.com/docs/installation/cli
    checkedAt: 2026-10-27
  - field: installMethod
    url: https://panda-css.com/docs/installation/cli
    checkedAt: 2026-10-27
  - field: installMethod
    url: https://panda-css.com/docs/installation/cli
    checkedAt: 2026-10-27
  - field: runsAs
    url: https://panda-css.com/docs/overview/why-panda
    checkedAt: 2026-10-27
  - field: runtime
    url: https://registry.npmjs.org/@pandacss/dev
    checkedAt: 2026-10-27
  - field: runtimeMin
    url: https://registry.npmjs.org/@pandacss/dev
    checkedAt: 2026-10-27
  - field: license
    url: https://github.com/chakra-ui/panda
    checkedAt: 2026-10-27
  - field: licenseModel
    url: https://github.com/chakra-ui/panda
    checkedAt: 2026-10-27
  - field: currentMajor
    url: https://github.com/chakra-ui/panda/releases
    checkedAt: 2026-10-27
  - field: latestReleaseDate
    url: https://github.com/chakra-ui/panda/releases
    checkedAt: 2026-10-27
  - field: githubStargazers
    url: https://github.com/chakra-ui/panda
    checkedAt: 2026-10-27
  - field: contributors
    url: https://github.com/chakra-ui/panda
    checkedAt: 2026-10-27
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/@pandacss/dev
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40pandacss%2Fdev
    checkedAt: 2026-10-27
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40pandacss%2Fdev
    checkedAt: 2026-10-27
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
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
packagistDownloads: null
---

Panda CSS is a styling engine that reads the style calls in a project's TypeScript source and writes plain atomic CSS when the build runs, so the browser receives a stylesheet and computes no styles itself. Codegen writes a styled-system folder that the code imports from, and the build extracts the CSS for the styles the source uses. The project installs it as an npm development dependency and runs the Panda CLI in the build.

## Worth knowing

Values have to be visible in the source for the build to emit their CSS. Styles that exist only at runtime need the dynamic-styles route the docs describe.
