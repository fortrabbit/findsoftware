---
id: relay
name: Relay
urls:
  home: https://relay.dev/
  repository: https://github.com/meta/relay
  docs: https://relay.dev/docs/
category:
  - framework
description: JavaScript framework for building data-driven React applications on GraphQL, with a compiler that precomputes each component's queries.
status: active
maintainer: Meta Platforms, Inc.
maintainerType: company
firstRelease: 2015
language: javascript
basedOn:
  - react
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "21"
latestReleaseDate: 2026-05-27
githubStargazers: 18981
npmWeeklyDownloads: 6115613
contributors: 291
dependentRepos: 76213
dependentPackages: 210
social:
  x: https://twitter.com/RelayFramework/
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://relay.dev/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/meta/relay
    checkedAt: 2026-11-16
  - field: urls
    url: https://relay.dev/docs/
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/meta/relay/blob/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://github.com/meta/relay/blob/main/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/meta/relay/blob/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://relay.dev/docs/getting-started/quick-start/
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/meta/relay
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/meta/relay/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/react-relay
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/meta/relay/releases/tag/v21.0.1
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/meta/relay/releases/tag/v21.0.1
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/meta/relay
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/meta/relay/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/relay-runtime
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/relay-runtime
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/relay-runtime
    checkedAt: 2026-11-16
ai: authored
packagistDownloads: null
---

Relay is a JavaScript framework for building data-driven React applications on GraphQL. Each component declares the data it needs, and the Relay compiler aggregates those declarations into GraphQL requests at build time. At runtime, the Relay store keeps every component that reads the same data up to date.

The [Relay documentation](https://relay.dev/docs/) describes the framework, and its [quick start](https://relay.dev/docs/getting-started/quick-start/) walks through adding Relay to a React project.

## Worth knowing

Relay requires a Babel plugin and the Relay Compiler, so a build step is part of the setup. It also makes assumptions about the GraphQL server: that it provides a way to refetch an object and a description of how to page through connections. The [GraphQL server specification](https://relay.dev/docs/guides/graphql-server-specification/) spells them out.
