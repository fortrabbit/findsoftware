---
id: overblog-graphql-bundle
name: OverblogGraphQLBundle
urls:
  repository: https://github.com/overblog/GraphQLBundle
  docs: https://github.com/overblog/GraphQLBundle/blob/master/docs/index.md
category:
  - backend
description: Symfony bundle that adds a GraphQL server to a Symfony application, with a schema defined in configuration and PHP classes.
status: active
maintainer: Overblog
firstRelease: 2016
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.1
basedOn:
  - symfony
installMethod: composer
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-04-13
githubStargazers: 795
packagistDownloads: 9399032
contributors: 96
dependentRepos: 124
dependentPackages: 24
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/overblog/GraphQLBundle
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/overblog/GraphQLBundle/blob/master/docs/index.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/overblog/GraphQLBundle/master/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/overblog/GraphQLBundle
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/overblog/GraphQLBundle/master/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://raw.githubusercontent.com/overblog/GraphQLBundle/master/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/overblog/GraphQLBundle/v1.10.0/composer.json
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://raw.githubusercontent.com/overblog/GraphQLBundle/v1.10.0/composer.json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/overblog/GraphQLBundle/master/docs/index.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/overblog/GraphQLBundle
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/overblog/GraphQLBundle/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/overblog/GraphQLBundle/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/overblog/GraphQLBundle/releases/latest
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://packagist.org/packages/overblog/graphql-bundle.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/overblog/GraphQLBundle
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/overblog/GraphQLBundle/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: packagistDownloads
    url: https://packagist.org/packages/overblog/graphql-bundle.json
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/overblog%2Fgraphql-bundle
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/packagist.org/packages/overblog%2Fgraphql-bundle
    checkedAt: 2026-11-16
ai: authored
npmWeeklyDownloads: null
---

OverblogGraphQLBundle adds a GraphQL server to a Symfony application. It integrates GraphQL with webonyx/graphql-php and GraphQL Relay, and the project's docs enable its endpoint in the application's routing configuration, with a second route for setups that serve several schemas. The bundle is installed with Composer into a Symfony project.

## Worth knowing

Some optional features need packages the application does not get from the bundle itself: the validator and annotation features depend on Symfony and Doctrine packages, and the Doctrine type guesser needs the Doctrine ORM. The README's version table lists older lines than the current release, so the release history is the reference for versions.
