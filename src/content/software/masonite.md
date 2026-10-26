---
id: masonite
name: Masonite
urls:
  home: https://www.masonite.dev/
  repository: https://github.com/masonitedev/masonite
  docs: https://docs.masonite.dev
category:
  - framework
description: Python web framework with an Active Record style ORM, queues, mail, notifications, events and task scheduling.
status: active
maintainer: the Masonite community
maintainerType: community
firstRelease: 2017
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
databases:
  - sqlite
  - mysql
  - postgres
  - sqlserver
templating: jinja2
runsAs:
  - always-on
  - scheduled
renderingModes:
  - server
  - api-only
installMethod: pip install masonite-framework, then masonite new
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2026-06-07
githubStargazers: 49
contributors: 75
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.masonite.dev/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/masonitedev/masonite
    checkedAt: 2026-10-26
  - field: urls
    url: https://docs.masonite.dev/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.masonite.dev/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://docs.masonite.dev/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/masonitedev/masonite
    checkedAt: 2026-10-26
  - field: runtime
    url: https://docs.masonite.dev/getting-started/installation/
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://docs.masonite.dev/getting-started/installation/
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://pypi.org/pypi/masonite-framework/json
    checkedAt: 2026-10-26
  - field: category
    url: https://docs.masonite.dev/
    checkedAt: 2026-10-26
  - field: templating
    url: https://docs.masonite.dev/the-basics/views/
    checkedAt: 2026-10-26
  - field: databases
    url: https://docs.masonite.dev/getting-started/installation/
    checkedAt: 2026-10-26
  - field: databases
    url: https://docs.masonite.dev/orm/installation/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://docs.masonite.dev/getting-started/installation/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://docs.masonite.dev/getting-started/installation/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.masonite.dev/getting-started/deployment/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.masonite.dev/getting-started/deployment/
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/masonitedev/masonite
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/masonitedev/masonite/blob/5.0/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://pypi.org/pypi/masonite/json
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/masonitedev/masonite/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/masonitedev/masonite/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/masonitedev/masonite
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/masonitedev/masonite/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Masonite bundles an Active Record style ORM, mail, queues, notifications, events and task scheduling. A project is created with `masonite new` after `pip install masonite-framework`, as either a full-stack project that renders views on the server or an API-only project. Views use Jinja2 templates, and the ORM works with SQLite, MySQL, PostgreSQL and SQL Server.

A live site runs as a long-lived process behind a production WSGI server, and task scheduling needs the schedule runner in the server's cron, run every minute.

The project moved to the masonitedev organization and a renamed PyPI package, and the community maintains it. The earlier repository and the `masonite` package are deprecated.
