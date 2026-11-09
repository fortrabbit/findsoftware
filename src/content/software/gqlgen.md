---
id: gqlgen
name: gqlgen
urls:
  home: https://gqlgen.com
  repository: https://github.com/99designs/gqlgen
  docs: https://gqlgen.com/getting-started/
category:
  - backend
description: Go library for building GraphQL servers from a GraphQL schema, with Go code generated from it.
status: active
maintainer: 99designs
firstRelease: 2018
language: go
runtime:
  - binary
hosting:
  - binary
installMethod: go get -tool (Go tool dependency)
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-22
githubStargazers: 10768
contributors: 420
dependentRepos: 3167
dependentPackages: 2651
addedAt: 2026-11-09
checkedAt: 2026-11-09
sources:
  - field: urls
    url: https://gqlgen.com/
    checkedAt: 2026-11-09
  - field: urls
    url: https://api.github.com/repos/99designs/gqlgen
    checkedAt: 2026-11-09
  - field: urls
    url: https://raw.githubusercontent.com/99designs/gqlgen/master/README.md
    checkedAt: 2026-11-09
  - field: language
    url: https://api.github.com/repos/99designs/gqlgen
    checkedAt: 2026-11-09
  - field: category
    url: https://raw.githubusercontent.com/99designs/gqlgen/master/README.md
    checkedAt: 2026-11-09
  - field: runtime
    url: https://raw.githubusercontent.com/99designs/gqlgen/master/README.md
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://gqlgen.com/getting-started/
    checkedAt: 2026-11-09
  - field: license
    url: https://api.github.com/repos/99designs/gqlgen
    checkedAt: 2026-11-09
  - field: licenseModel
    url: https://api.github.com/repos/99designs/gqlgen
    checkedAt: 2026-11-09
  - field: maintainer
    url: https://api.github.com/users/99designs
    checkedAt: 2026-11-09
  - field: firstRelease
    url: https://api.github.com/repos/99designs/gqlgen/releases/tags/0.2.0
    checkedAt: 2026-11-09
  - field: currentMajor
    url: https://api.github.com/repos/99designs/gqlgen/releases/tags/v0.17.98
    checkedAt: 2026-11-09
  - field: latestReleaseDate
    url: https://api.github.com/repos/99designs/gqlgen/releases/tags/v0.17.98
    checkedAt: 2026-11-09
  - field: githubStargazers
    url: https://api.github.com/repos/99designs/gqlgen
    checkedAt: 2026-11-09
  - field: contributors
    url: https://api.github.com/repos/99designs/gqlgen/contributors?per_page=1
    checkedAt: 2026-11-09
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/proxy.golang.org/packages/github.com%2F99designs%2Fgqlgen
    checkedAt: 2026-11-09
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/proxy.golang.org/packages/github.com%2F99designs%2Fgqlgen
    checkedAt: 2026-11-09
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

gqlgen generates Go code for a GraphQL server from a schema written in the GraphQL schema definition language. The README describes the approach as schema first: the developer defines the API in the schema, and the generated code calls resolvers that the developer implements.

A project adds gqlgen as a Go tool dependency, runs its init command to create the project layout, and regenerates the code from the schema with its generate command. The getting-started tutorial walks through these steps.

## Worth knowing

Field resolvers run concurrently in separate goroutines. The worker_limit setting in the configuration sets how many run at once.
