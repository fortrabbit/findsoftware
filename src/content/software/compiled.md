---
id: compiled
name: Compiled
urls:
  home: https://compiledcssinjs.com
  repository: https://github.com/atlassian-labs/compiled
  docs: https://compiledcssinjs.com/docs/installation
category:
  - css-framework
description: Compile-time CSS-in-JS library for React that writes its styles out as atomic CSS.
status: active
maintainer: Atlassian
firstRelease: 2020
language: javascript
basedOn:
  - react
installMethod: npm
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-08-25
githubStargazers: 2054
npmWeeklyDownloads: 758929
contributors: 78
dependentRepos: 548
dependentPackages: 19
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/atlassian-labs/compiled
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/atlassian-labs/compiled
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/atlassian-labs/compiled/blob/master/website/packages/docs/src/pages/installation.mdx
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://registry.npmjs.org/@compiled/react
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/atlassian-labs/compiled/blob/master/CONTRIBUTING.md
    checkedAt: 2026-10-26
  - field: language
    url: https://github.com/atlassian-labs/compiled
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/atlassian-labs/compiled/blob/master/website/packages/docs/src/pages/about-compiled.mdx
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://github.com/atlassian-labs/compiled/blob/master/website/packages/docs/src/pages/about-compiled.mdx
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/atlassian-labs/compiled/blob/master/website/packages/docs/src/pages/installation.mdx
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/atlassian-labs/compiled
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/atlassian-labs/compiled
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://registry.npmjs.org/@compiled/react
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@compiled/react
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://github.com/atlassian-labs/compiled
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/atlassian-labs/compiled/contributors
    checkedAt: 2026-10-26
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/@compiled/react
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@compiled/react
    checkedAt: 2026-10-26
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/@compiled/react
    checkedAt: 2026-10-26
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
---

Compiled is a compile-time CSS-in-JS library for React, maintained by Atlassian. It parses styles written in JavaScript transforms them, and outputs them as atomic CSS, with the style sheets produced at compile time. Using it means adding a plugin for the bundler in use or configuring Babel directly, as the [installation guide](https://github.com/atlassian-labs/compiled/blob/master/website/packages/docs/src/pages/installation.mdx) describes.

## Worth knowing

Atlassian does not officially support Compiled outside its own products and the Atlassian ecosystem, as the [contributing guide](https://github.com/atlassian-labs/compiled/blob/master/CONTRIBUTING.md) says. The docs' limitations page lists dynamic selectors and indirect selectors among the things the compile-time design cannot handle, and it says the older Styled API will eventually be retired.
