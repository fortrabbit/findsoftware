---
id: kubb
name: Kubb
urls:
  home: https://kubb.dev/
  repository: https://github.com/kubb-labs/kubb
  docs: https://kubb.dev/docs/5.x/introduction
  plugins: https://github.com/kubb-labs/plugins
category:
  - dev-tool
description: Code generator that turns an OpenAPI spec into TypeScript types, API clients, query hooks, validators and mocks.
status: active
maintainer: Stijn Van Hulle
firstRelease: 2023
language: javascript
runtime:
  - node
runtimeMin: node 22
runsAs:
  - local
installMethod: npm install -D kubb
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-11-15
githubStargazers: 1846
npmWeeklyDownloads: 99703
contributors: 91
dependentRepos: 1
social:
  discord: https://discord.gg/shfBFeczrm
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://kubb.dev/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/kubb-labs/kubb
    checkedAt: 2026-11-16
  - field: urls
    url: https://kubb.dev/docs/5.x/introduction
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/kubb-labs/kubb/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/kubb
    checkedAt: 2026-11-16
  - field: category
    url: https://kubb.dev/
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/kubb-labs/kubb
    checkedAt: 2026-11-16
  - field: runtime
    url: https://kubb.dev/docs/5.x/how-to/installation
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/kubb-labs/kubb/blob/kubb@5.20.2/packages/kubb/package.json
    checkedAt: 2026-11-16
  - field: license
    url: https://kubb.dev/docs/5.x/introduction
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://kubb.dev/docs/5.x/introduction
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://kubb.dev/docs/5.x/how-to/installation
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://kubb.dev/
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/kubb-labs/kubb/blob/main/packages/kubb/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/kubb-labs/kubb/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/kubb-labs/kubb/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/kubb-labs/kubb
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/kubb-labs/kubb/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/kubb
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/kubb
    checkedAt: 2026-11-16
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

Kubb is a code generator that reads an API description, such as OpenAPI, and writes TypeScript types, API clients, query hooks, validators and mocks. Each output is a plugin listed in a kubb.config.ts file, and running kubb generate writes the files, which the application then imports like any other module.

The repository is a monorepo that also ships the command-line package, the plugins and the adapters. The libraries that the generated clients import at runtime, such as axios, React or TanStack Query, are installed by the application's owner.

## Worth knowing

Kubb Studio is a hosted companion with a shared sandbox, and it can also run as a local agent started from a project folder. The README says Kubb works without Studio. The integration pages describe generation during a build or in CI, through the command line or a bundler plugin.
