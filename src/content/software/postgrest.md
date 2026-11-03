---
id: postgrest
name: PostgREST
urls:
  home: https://docs.postgrest.org/
  repository: https://github.com/PostgREST/postgrest
  docs: https://docs.postgrest.org/
category:
  - backend
description: Standalone web server that serves a RESTful API directly from a PostgreSQL database schema.
status: active
maintainer: The PostgREST contributors
maintainerType: community
firstRelease: 2014
language: haskell
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: binary-download
licenseModel: open-source
license: MIT
currentMajor: "16"
latestReleaseDate: 2026-10-20
githubStargazers: 27739
contributors: 228
social:
  forum: https://github.com/PostgREST/postgrest/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://docs.postgrest.org/
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.postgrest.org/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/PostgREST/postgrest
    checkedAt: 2026-11-03
  - field: category
    url: https://docs.postgrest.org/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/PostgREST/postgrest/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/PostgREST/postgrest/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/PostgREST/postgrest
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/PostgREST/postgrest
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.postgrest.org/en/stable/explanations/install.html
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/PostgREST/postgrest
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/PostgREST/postgrest/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/PostgREST/postgrest/releases
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.postgrest.org/en/stable/explanations/install.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.postgrest.org/en/stable/explanations/install.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.postgrest.org/en/stable/explanations/install.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.postgrest.org/en/stable/explanations/install.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.postgrest.org/en/stable/explanations/install.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.postgrest.org/en/stable/explanations/install.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.postgrest.org/en/stable/explanations/install.html
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.postgrest.org/en/stable/explanations/install.html
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.postgrest.org/en/stable/integrations/systemd.html
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.postgrest.org/
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://docs.postgrest.org/
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/PostgREST/postgrest
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/PostgREST/postgrest
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

PostgREST is a standalone web server that serves a RESTful API directly from a PostgreSQL database, so the endpoints and their permissions follow the database schema and its roles. It is written in Haskell and ships as a compiled binary, as a Docker image and through several operating system package managers. A configuration file names the database connection, and the project's [systemd guide](https://docs.postgrest.org/en/stable/integrations/systemd.html) runs it as a daemon. Requests authenticate with JSON Web Tokens, and the anonymous, authenticator and user roles in the database decide what each request may do. The external-auth guide names Auth0 as a service that can issue those tokens.

## Worth knowing

The API takes its shape from the schema, so a change to a table, view or permission changes what clients can call. The install guide lists the PostgreSQL versions it supports.
