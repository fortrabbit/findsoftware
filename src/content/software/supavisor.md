---
id: supavisor
name: Supavisor
urls:
  home: https://supabase.github.io/supavisor/
  repository: https://github.com/supabase/supavisor
  docs: https://supabase.github.io/supavisor/
category:
  - database
description: Open-source Postgres connection pooler that proxies many client connections into pools of database connections for multi-tenant clusters.
status: active
maintainer: Supabase
firstRelease: 2023
language: elixir
runtime:
  - beam
hosting:
  - elixir
databases:
  - postgres
installMethod: mix (source checkout, Elixir toolchain)
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-09-10
githubStargazers: 2282
contributors: 35
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://supabase.github.io/supavisor/
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/supabase/supavisor
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/supabase/supavisor
    checkedAt: 2026-10-30
  - field: urls
    url: https://supabase.github.io/supavisor/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://github.com/supabase/supavisor/blob/main/SECURITY.md
    checkedAt: 2026-10-30
  - field: category
    url: https://supabase.github.io/supavisor/
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/supabase/supavisor
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/supabase/supavisor/blob/main/mix.exs
    checkedAt: 2026-10-30
  - field: databases
    url: https://github.com/supabase/supavisor/blob/main/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://supabase.github.io/supavisor/development/installation/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/supabase/supavisor/blob/main/docker-compose.yml
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://supabase.github.io/supavisor/
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/supabase/supavisor
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/supabase/supavisor/releases/tag/v2.9.13
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/supabase/supavisor/releases/tag/v2.9.13
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://github.com/supabase/supavisor/releases/tag/v0.1.0
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/supabase/supavisor
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/supabase/supavisor/contributors?per_page=1
    checkedAt: 2026-10-30
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Supavisor is a connection pooler for Postgres that proxies client connections into pools of database connections. The [installation guide](https://supabase.github.io/supavisor/development/installation/) runs it from a source checkout with mix, and the repository's docker-compose file builds the service from its own Dockerfile. The docs also carry a [migration guide](https://supabase.github.io/supavisor/migrating/pgbouncer/) for moving from PgBouncer.

## Worth knowing

The project's security policy says Supavisor runs as the connection pooler on the hosted Supabase platform, and that people also run it on their own infrastructure.
