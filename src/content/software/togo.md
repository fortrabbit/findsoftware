---
id: togo
name: togo
urls:
  home: https://to-go.dev
  repository: https://github.com/togo-framework/togo
  docs: https://to-go.dev/en/docs
  plugins: https://to-go.dev/en/plugins
category:
  - framework
description: Full-stack framework that generates a Go API and a web frontend from one repository.
status: active
maintainer: Fady Mondy
firstRelease: 2026
hqCountry: EG
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
  - postgres
  - mysql
  - mongodb
headlessApi:
  - rest
  - graphql
runsAs:
  - always-on
  - local
installMethod: install script (curl | sh, PowerShell on Windows)
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-13
githubStargazers: 6
contributors: 1
pluginCount: 241
social:
  discord: https://discord.gg/6ejdqCUMdH
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/togo-framework/togo
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/togo-framework/togo
    checkedAt: 2026-10-26
  - field: urls
    url: https://to-go.dev/en/docs
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/togo-framework/togo/blob/main/README.md
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://to-go.dev/en/terms
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/togo-framework/togo
    checkedAt: 2026-10-26
  - field: category
    url: https://to-go.dev/en
    checkedAt: 2026-10-26
  - field: runtime
    url: https://to-go.dev/en
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://to-go.dev/en
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/togo-framework/togo/blob/main/README.md
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://github.com/togo-framework/togo/blob/main/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://to-go.dev/en/docs
    checkedAt: 2026-10-26
  - field: databases
    url: https://to-go.dev/en/docs/getting-started
    checkedAt: 2026-10-26
  - field: databases
    url: https://to-go.dev/en
    checkedAt: 2026-10-26
  - field: databases
    url: https://to-go.dev/en/docs/guide/orm
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://to-go.dev/en/docs/deploy
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://to-go.dev/en/docs/getting-started
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/togo-framework/togo
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/togo-framework/togo/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/togo-framework/togo/commits/v0.1.0
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/togo-framework/togo/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/togo-framework/togo/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/togo-framework/togo
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/togo-framework/togo/contributors
    checkedAt: 2026-10-26
  - field: urls
    url: https://to-go.dev/en
    checkedAt: 2026-10-26
  - field: pluginCount
    url: https://to-go.dev/en/plugins
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

togo is a full-stack framework that builds a Go API and a web frontend in one repository. The API compiles to a static Go binary shipped in a distroless container image, and every resource is exposed over GraphQL and REST/OpenAPI 3.1. The core is a microkernel: REST, GraphQL, auth and the dashboard are plugins that `togo install <owner>/<repo>` adds to an app. The `togo` command-line tool creates apps, generates resources and runs the server.

The default database is SQLite, and the docs also name Postgres, MySQL and MongoDB. Deployment is documented for Google Cloud Run, Fly.io and Docker containers, with Terraform scaffolded by the CLI. The [documentation](https://to-go.dev/en/docs) covers the guides and the CLI reference.

## Worth knowing

The project's own pages disagree on the frontend: the homepage names React with TanStack, while the README and the docs name Next.js. Roles and SSO come from the first-party auth plugin rather than the core.
