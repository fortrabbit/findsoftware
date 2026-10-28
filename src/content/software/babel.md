---
id: babel
name: Babel
urls:
  home: https://babel.dev
  repository: https://github.com/babel/babel
  docs: https://babel.dev/docs
category:
  - build-tool
description: JavaScript compiler that rewrites next-generation JavaScript into code that runs in the browsers and runtimes a project targets.
status: active
maintainer: Sebastian McKenzie and other contributors
maintainerType: community
firstRelease: 2014
language: javascript
runtime:
  - node
runtimeMin: node 22
runsAs:
  - local
installMethod: npm install --save-dev @babel/core @babel/cli @babel/preset-env
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-10-23
githubStargazers: 44052
npmWeeklyDownloads: 227357072
contributors: 413
dependentRepos: 3617515
dependentPackages: 197540
social:
  x: https://x.com/babeljs
  bluesky: https://bsky.app/profile/babel.dev
  forum: https://github.com/babel/babel/discussions
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://babel.dev/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/babel/babel
    checkedAt: 2026-10-28
  - field: urls
    url: https://babel.dev/docs/usage
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/babel/babel/main/LICENSE
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://raw.githubusercontent.com/babel/babel/main/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/babel/babel
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/babel/babel/v8.0.9/packages/babel-core/package.json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/babel/babel/v8.0.9/packages/babel-core/package.json
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/babel/babel/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://babel.dev/docs/usage
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://babel.dev/docs/usage
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://babel.dev/docs/usage
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://babel.dev/docs/usage
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://babel.dev/docs/usage
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/babel/babel
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/6to5
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/babel/babel/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/babel/babel/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/babel/babel
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/babel/babel/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/@babel/core
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40babel%2Fcore
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40babel%2Fcore
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
packagistDownloads: null
---

Babel is a JavaScript compiler. It takes code written with newer JavaScript syntax and emits code for the environments a project targets. The usage guide keeps the configuration, including the presets, in a babel.config file in the project root.

The project publishes its modules as packages under the @babel scope. @babel/core is the package the install docs list first, and @babel/cli compiles a source directory to an output directory from a terminal. The setup docs list integrations with build systems, test frameworks and template engines.

## Worth knowing

The current major declares a higher minimum Node.js version than the earlier major did.
