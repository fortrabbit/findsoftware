---
id: hashover
name: HashOver
urls:
  home: https://docs.barkdull.org/hashover-v2
  repository: https://github.com/jacobwb/hashover-next
  docs: https://docs.barkdull.org/hashover-v2/setup
category:
  - community
description: Self-hosted PHP comment system that adds a comment section to any website and stores comments in SQLite or MySQL.
status: active
maintainer: Jacob Barkdull
maintainerType: individual
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 5.3
contentStore:
  - flat-file
databases:
  - sqlite
  - mysql
adminUi: true
i18n: multiple languages
installMethod: file-download
licenseModel: open-source
license: AGPL-3.0
githubStargazers: 417
contributors: 12
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://docs.barkdull.org/hashover-v2
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/jacobwb/hashover-next
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.barkdull.org/hashover-v2/setup
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://docs.barkdull.org/hashover-v2
    checkedAt: 2026-11-03
  - field: category
    url: https://docs.barkdull.org/hashover-v2
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/jacobwb/hashover-next
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.barkdull.org/hashover-v2/setup
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://docs.barkdull.org/hashover-v2/setup
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.barkdull.org/hashover-v2/setup
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.barkdull.org/hashover-v2/setup
    checkedAt: 2026-11-03
  - field: contentStore
    url: https://docs.barkdull.org/hashover-v2
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.barkdull.org/hashover-v2/setup
    checkedAt: 2026-11-03
  - field: i18n
    url: https://github.com/jacobwb/hashover-next/blob/master/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/jacobwb/hashover-next
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://docs.barkdull.org/hashover-v2
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/jacobwb/hashover-next
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/jacobwb/hashover-next/contributors
    checkedAt: 2026-11-03
ai: authored
npmWeeklyDownloads: null
---

HashOver is a self-hosted comment system written in PHP. A site adds it with a JavaScript tag, or with a PHP call, and an element with the ID "hashover" marks where the comments appear. The README says comments can be posted anonymously, and that the only required information is the comment itself.

The software is not installed like a package. Its files are downloaded and used as they are, and the setup asks for an email address, an encryption key and an admin login in a secrets file. Comments are kept in flat files by default, and the setup page describes SQLite or MySQL as alternatives through PDO. The admin login moderates comments from inside the comment section.

## Worth knowing

The repository has no release or tag. The author's documentation describes version 2.0 as in development and keeps the 1.0 documentation beside it.
