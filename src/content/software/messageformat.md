---
id: messageformat
name: messageformat
urls:
  home: https://messageformat.github.io/
  repository: https://github.com/messageformat/messageformat
  docs: https://messageformat.github.io/
category:
  - library
description: JavaScript library for Unicode MessageFormat 2 messages, with a formatter that can serve as a polyfill for Intl.MessageFormat.
status: active
maintainer: OpenJS Foundation
maintainerType: foundation
firstRelease: 2012
language: javascript
installMethod: npm
licenseModel: open-source
license: Apache-2.0, MIT
currentMajor: "4"
latestReleaseDate: 2026-10-12
githubStargazers: 1773
npmWeeklyDownloads: 619862
contributors: 63
dependentRepos: 21030
dependentPackages: 189
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://messageformat.github.io/
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/messageformat/messageformat/blob/main/mf2/messageformat/README.md
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/messageformat/messageformat
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/messageformat
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/messageformat/messageformat/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/messageformat/messageformat/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/messageformat/messageformat/blob/main/mf2/messageformat/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://github.com/messageformat/messageformat
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/messageformat/messageformat/blob/main/mf2/messageformat/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/messageformat/messageformat/blob/main/mf2/messageformat/LICENSE
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/messageformat/messageformat/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/messageformat/messageformat/releases/tag/messageformat%404.1.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/messageformat/messageformat/releases/tag/messageformat%404.1.0
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://github.com/messageformat/messageformat
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/messageformat/messageformat/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/messageformat
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/messageformat
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/messageformat
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

messageformat is a JavaScript library for Unicode MessageFormat 2 messages, the localization standard that the MessageFormat Working Group developed. Its formatter can serve as a polyfill for the proposed ECMA-402 Intl.MessageFormat API. The package is installed with npm. It sits in the messageformat monorepo, which also holds the ICU MessageFormat and Fluent packages and is an OpenJS Foundation project.

## Worth knowing

The current API differs from the earlier majors, which were built on ICU MessageFormat. Projects on that line use @messageformat/core, a separate package.
