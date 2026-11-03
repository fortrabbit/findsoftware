---
id: commento
name: Commento
urls:
  repository: https://gitlab.com/commento/commento
category:
  - community
description: Comment platform that a website embeds to let its readers post comments, with a Go server and a PostgreSQL database.
status: stub
maintainer: Commento, Inc.
maintainerType: company
firstRelease: 2018
language: go
databases:
  - postgres
installMethod: docker
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2020-04-10
contributors: 29
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://gitlab.com/api/v4/projects/commento%2Fcommento
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://gitlab.com/commento/commento/-/raw/master/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://gitlab.com/commento/commento/-/raw/master/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://gitlab.com/api/v4/projects/commento%2Fcommento/languages
    checkedAt: 2026-11-03
  - field: license
    url: https://gitlab.com/commento/commento/-/raw/master/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://gitlab.com/api/v4/projects/commento%2Fcommento/repository/tags
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://gitlab.com/api/v4/projects/commento%2Fcommento/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://gitlab.com/api/v4/projects/commento%2Fcommento/releases
    checkedAt: 2026-11-03
  - field: databases
    url: https://gitlab.com/commento/commento/-/raw/master/docker-compose.yml
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://gitlab.com/commento/commento/-/raw/master/docker-compose.yml
    checkedAt: 2026-11-03
  - field: contributors
    url: https://gitlab.com/api/v4/projects/commento%2Fcommento/repository/contributors
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Commento is a comment platform that a website embeds so its readers can add comments. The [README](https://gitlab.com/commento/commento/-/raw/master/README.md) describes it as a platform that you can embed in your website, and says it can import comments from Disqus. The repository ships a Dockerfile, a Makefile and a [Docker Compose file](https://gitlab.com/commento/commento/-/raw/master/docker-compose.yml) that runs the server next to a PostgreSQL container.

## Worth knowing

The project's own site, commento.io, and its documentation returned 404 for every page tried when this record was checked, so the record has no homepage and its status is stub.
