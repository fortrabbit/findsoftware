---
id: graphql-codegen
name: GraphQL Code Generator
urls:
  home: https://the-guild.dev/graphql/codegen/
  repository: https://github.com/dotansimha/graphql-code-generator
  docs: https://the-guild.dev/graphql/codegen/docs/getting-started/installation
  plugins: https://the-guild.dev/graphql/codegen/plugins
category:
  - dev-tool
description: Plugin-based command-line tool that generates typed code from a GraphQL schema and its operations.
status: active
maintainer: Dotan Simha
maintainerType: individual
parent: The Guild
firstRelease: 2016
language: javascript
runtime:
  - node
runtimeMin: node 22
runsAs:
  - local
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-11-07
githubStargazers: 11265
npmWeeklyDownloads: 10691169
contributors: 434
social:
  x: https://x.com/theguilddev
  discord: https://discord.gg/xud7bH9
  youtube: https://www.youtube.com/watch?v=d_GBgH-L5c4&list=PLhCf3AUOg4PgQoY_A6xWDQ70yaNtPYtZd
addedAt: 2026-11-09
checkedAt: 2026-11-09
sources:
  - field: urls
    url: https://the-guild.dev/graphql/codegen/
    checkedAt: 2026-11-09
  - field: urls
    url: https://api.github.com/repos/dotansimha/graphql-code-generator
    checkedAt: 2026-11-09
  - field: urls
    url: https://the-guild.dev/graphql/codegen/docs/getting-started/installation
    checkedAt: 2026-11-09
  - field: maintainer
    url: https://github.com/dotansimha/graphql-code-generator/blob/master/LICENSE
    checkedAt: 2026-11-09
  - field: maintainerType
    url: https://github.com/dotansimha/graphql-code-generator/blob/master/LICENSE
    checkedAt: 2026-11-09
  - field: parent
    url: https://the-guild.dev/graphql/codegen/
    checkedAt: 2026-11-09
  - field: language
    url: https://api.github.com/repos/dotansimha/graphql-code-generator
    checkedAt: 2026-11-09
  - field: runtime
    url: https://registry.npmjs.org/@graphql-codegen/cli/latest
    checkedAt: 2026-11-09
  - field: runtimeMin
    url: https://registry.npmjs.org/@graphql-codegen/cli/latest
    checkedAt: 2026-11-09
  - field: category
    url: https://github.com/dotansimha/graphql-code-generator/blob/master/README.md
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://the-guild.dev/graphql/codegen/docs/getting-started/installation
    checkedAt: 2026-11-09
  - field: license
    url: https://api.github.com/repos/dotansimha/graphql-code-generator
    checkedAt: 2026-11-09
  - field: licenseModel
    url: https://github.com/dotansimha/graphql-code-generator/blob/master/LICENSE
    checkedAt: 2026-11-09
  - field: firstRelease
    url: https://api.github.com/repos/dotansimha/graphql-code-generator/releases?per_page=100
    checkedAt: 2026-11-09
  - field: currentMajor
    url: https://api.github.com/repos/dotansimha/graphql-code-generator/releases/latest
    checkedAt: 2026-11-09
  - field: latestReleaseDate
    url: https://api.github.com/repos/dotansimha/graphql-code-generator/releases/latest
    checkedAt: 2026-11-09
  - field: githubStargazers
    url: https://api.github.com/repos/dotansimha/graphql-code-generator
    checkedAt: 2026-11-09
  - field: contributors
    url: https://api.github.com/repos/dotansimha/graphql-code-generator/contributors?per_page=1
    checkedAt: 2026-11-09
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/@graphql-codegen/cli
    checkedAt: 2026-11-09
  - field: runsAs
    url: https://the-guild.dev/graphql/codegen/
    checkedAt: 2026-11-09
  - field: urls
    url: https://github.com/dotansimha/graphql-code-generator/blob/master/README.md
    checkedAt: 2026-11-09
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

GraphQL Code Generator is a command-line tool that generates code from a GraphQL schema and the operations written against it. Its project site describes it as a way to generate anything from a GraphQL schema, and the project maintains a plugin directory. A project installs it as a dependency with npm, and the tool runs on Node.js in development and CI.

The project's site presents it as part of The Guild's Hive ecosystem. Dotan Simha holds the copyright line in the license.

## Worth knowing

The docs say the tool loads plugins with require, which can fail in a monorepo when dependencies are hoisted.
