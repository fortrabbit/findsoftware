---
id: hasura
name: Hasura GraphQL Engine
urls:
  home: https://hasura.io
  repository: https://github.com/hasura/graphql-engine
  docs: https://hasura.io/docs/2.0/index/
  pricing: https://hasura.io/pricing/
category:
  - backend
description: Open-source GraphQL server that generates a GraphQL API over existing databases and other data sources, with a hosted Hasura Cloud edition.
status: active
maintainer: Hasura, Inc.
maintainerType: company
firstRelease: 2018
hqCountry: US
language: haskell
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
  - mysql
  - sqlserver
  - oracle
  - mariadb
  - mongodb
adminUi: true
headlessApi:
  - graphql
  - rest
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: Apache-2.0, MIT, for the docs and community contents of the v2 folder
currentMajor: "2"
latestReleaseDate: 2026-10-27
githubStargazers: 32125
contributors: 394
social:
  x: https://twitter.com/hasurahq
  discord: https://discord.com/invite/hasura
  forum: https://github.com/hasura/graphql-engine/discussions
  subreddit: https://www.reddit.com/r/Hasura/
  youtube: https://www.youtube.com/channel/UCZo1ciR8pZvdD3Wxp9aSNhQ
  facebook: https://www.facebook.com/HasuraHQ
  instagram: https://www.instagram.com/hasurahq/
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://hasura.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/hasura/graphql-engine
    checkedAt: 2026-11-03
  - field: urls
    url: https://hasura.io/docs/2.0/index/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://hasura.io/legal/website-terms-of-use
    checkedAt: 2026-11-03
  - field: category
    url: https://hasura.io/docs/2.0/getting-started/overview/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/hasura/graphql-engine/languages
    checkedAt: 2026-11-03
  - field: runtime
    url: https://hasura.io/docs/2.0/deployment/deployment-guides/index/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://hasura.io/docs/2.0/getting-started/overview/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://hasura.io/docs/2.0/deployment/deployment-guides/docker/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://hasura.io/docs/2.0/deployment/deployment-guides/kubernetes-helm/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/hasura/graphql-engine
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/hasura/graphql-engine
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://hasura.io/docs/2.0/enterprise/try-hasura-enterprise-edition/
    checkedAt: 2026-11-03
  - field: urls
    url: https://hasura.io/pricing/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/hasura/graphql-engine/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/hasura/graphql-engine/releases
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/hasura/graphql-engine/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/hasura/graphql-engine
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/hasura/graphql-engine/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: databases
    url: https://hasura.io/docs/2.0/schema/overview/
    checkedAt: 2026-11-03
  - field: databases
    url: https://hasura.io/docs/2.0/enterprise/overview/
    checkedAt: 2026-11-03
  - field: databases
    url: https://hasura.io/docs/2.0/enterprise/overview/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://hasura.io/docs/2.0/getting-started/docker-simple/
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://hasura.io/docs/2.0/index/
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://hasura.io/docs/2.0/api-reference/overview/
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://hasura.io/legal/website-terms-of-use
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Hasura GraphQL Engine is a server that puts a GraphQL API over existing databases and other data sources, as its [documentation](https://hasura.io/docs/2.0/index/) describes. Postgres stores the engine's metadata, and a web console ships with it. Permissions are defined per user-defined role, and single sign-on for the console is one of the Enterprise Edition settings.

The [Docker guide](https://hasura.io/docs/2.0/deployment/deployment-guides/docker/) starts the engine with a Postgres database beside it, and a Helm chart covers Kubernetes. Hasura Cloud is a managed service for Hasura instances, offered next to the self-installed engine.

## Worth knowing

The Docker image holds open-source and proprietary components, and the proprietary part, which carries the Enterprise Edition features, is enabled with a license provided by Hasura.
