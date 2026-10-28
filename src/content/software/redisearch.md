---
id: redisearch
name: RediSearch
urls:
  repository: https://github.com/RediSearch/RediSearch
  docs: https://redis.io/docs/latest/develop/ai/search-and-query/
category:
  - search
  - database
description: Query and indexing engine module for Redis that adds full-text search, secondary indexing, vector similarity search and aggregations.
status: stub
firstRelease: 2017
language: rust
basedOn:
  - redis
licenseModel: source-available
license: RSALv2 or SSPLv1
currentMajor: "2"
latestReleaseDate: 2026-06-17
githubStargazers: 6245
contributors: 128
social:
  discord: https://discord.gg/knMsnYmwXu
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://github.com/RediSearch/RediSearch
    checkedAt: 2026-10-28
  - field: urls
    url: https://redis.io/docs/latest/develop/ai/search-and-query/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/RediSearch/RediSearch/releases
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://raw.githubusercontent.com/RediSearch/RediSearch/master/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/RediSearch/RediSearch/master/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/RediSearch/RediSearch/master/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/RediSearch/RediSearch
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/RediSearch/RediSearch/v2.10.31/LICENSE.txt
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/RediSearch/RediSearch/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/RediSearch/RediSearch/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://github.com/RediSearch/RediSearch
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/RediSearch/RediSearch/contributors?per_page=1
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

RediSearch is a query and indexing engine module for Redis. It adds full-text search, secondary indexing, vector similarity search and aggregations over data already stored in Redis, and it runs as a Redis module.

## Worth knowing

The README states that standalone versions are no longer released and that RediSearch is part of Redis from version 8, so it is no longer installed as a separate module. Maintenance releases on older lines are still tagged in the repository. Distributed RediSearch is offered as part of Redis Cloud and Redis Enterprise. The source is available under the Redis Source Available License 2.0 or the Server Side Public License v1.
