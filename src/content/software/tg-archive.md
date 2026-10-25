---
id: tg-archive
name: tg-archive
urls:
  repository: https://github.com/knadh/tg-archive
description: Tool that exports Telegram group chats into a static website archive, synced into a local SQLite database.
status: discontinued
maintainer: Kailash Nadh
maintainerType: individual
firstRelease: 2021
language: python
runtime:
  - python
hosting:
  - static
databases:
  - sqlite
templating: jinja2
runsAs:
  - static
  - scheduled
renderingModes:
  - static
installMethod: pip
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-01-26
githubStargazers: 1173
contributors: 22
ecosystemsMonthlyDownloads: 191
dependentRepos: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: status
    url: https://github.com/knadh/tg-archive/blob/master/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/knadh/tg-archive
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/knadh/tg-archive/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/knadh/tg-archive
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/knadh/tg-archive/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/knadh/tg-archive/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/knadh/tg-archive/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/knadh/tg-archive/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/knadh/tg-archive/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/knadh/tg-archive/blob/master/README.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/knadh/tg-archive/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/knadh/tg-archive
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/knadh/tg-archive/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/tg-archive/json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/knadh/tg-archive/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://pypi.org/pypi/tg-archive/json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/knadh/tg-archive
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/knadh/tg-archive/contributors
    checkedAt: 2026-10-23
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/tg-archive
    checkedAt: 2026-10-25
  - field: ecosystemsMonthlyDownloads
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/tg-archive
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

tg-archive is a tool that exports Telegram group chats into static websites, preserving chat history like mailing list archives. It uses the Telethon Telegram API client to sync a group's messages into a local SQLite database, then builds a static archive website from a Jinja HTML template. The install step needs Telegram API credentials for a user account, not the Bot API.

## Worth knowing

The README states that the author is no longer maintaining or developing the tool, and that small, clearly documented pull requests can still be reviewed and merged. The README suggests a cron job to sync messages and re-publish the archive periodically.
