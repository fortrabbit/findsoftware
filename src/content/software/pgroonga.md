---
id: pgroonga
name: PGroonga
urls:
  home: https://pgroonga.github.io/
  repository: https://github.com/pgroonga/pgroonga
  docs: https://pgroonga.github.io/overview/
category:
  - database
description: PostgreSQL extension that adds a full-text search index for all languages, using Groonga as the index engine.
status: active
maintainer: PGroonga Project
firstRelease: 2015
language: c
basedOn:
  - groonga
databases:
  - postgres
installMethod: apt packages
licenseModel: open-source
license: PostgreSQL
currentMajor: "4"
latestReleaseDate: 2026-10-09
githubStargazers: 757
contributors: 10
social:
  x: https://twitter.com/groonga/
  facebook: https://www.facebook.com/groonga
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://pgroonga.github.io/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/pgroonga/pgroonga
    checkedAt: 2026-10-28
  - field: urls
    url: https://pgroonga.github.io/overview/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://pgroonga.github.io/
    checkedAt: 2026-10-28
  - field: license
    url: https://pgroonga.github.io/
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://pgroonga.github.io/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/pgroonga/pgroonga
    checkedAt: 2026-10-28
  - field: category
    url: https://pgroonga.github.io/overview/
    checkedAt: 2026-10-28
  - field: category
    url: https://pgroonga.github.io/overview/
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://pgroonga.github.io/overview/
    checkedAt: 2026-10-28
  - field: databases
    url: https://pgroonga.github.io/overview/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://pgroonga.github.io/install/debian.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://pgroonga.github.io/install/macos.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://pgroonga.github.io/install/source.html
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/pgroonga/pgroonga/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/pgroonga/pgroonga/releases/latest
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/pgroonga/pgroonga/releases/tags/0.9.0
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/pgroonga/pgroonga
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/pgroonga/pgroonga/contributors
    checkedAt: 2026-10-28
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

PGroonga is a PostgreSQL extension that provides an index access method built on Groonga, so a PostgreSQL database can run full-text search through a PGroonga index. The extension loads into PostgreSQL, and the project lists PostgreSQL 12 to 18 as supported. Debian packages and Homebrew formulas are documented, and the project also documents a build from source with Meson and Ninja. The PGroonga Project maintains it.

## Worth knowing

The project's users page names Supabase as a managed PostgreSQL service that offers PGroonga. The Windows packages bundle Groonga, MeCab and other libraries under their own licenses.
