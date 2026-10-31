---
id: accent
name: Accent
urls:
  home: https://www.accent.reviews
  repository: https://github.com/mirego/accent
  docs: https://www.accent.reviews/guides/getting-started
category:
  - library
description: Open-source translation management web app that keeps localization files in step with a project through a CLI and a GraphQL API.
status: active
maintainer: Mirego
firstRelease: 2019
hqCountry: CA
language: elixir
runtime:
  - beam
hosting:
  - elixir
runtimeMin: beam 26
databases:
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "1"
latestReleaseDate: 2026-10-16
githubStargazers: 1493
npmWeeklyDownloads: 8459
contributors: 50
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://www.accent.reviews
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/mirego/accent
    checkedAt: 2026-10-31
  - field: urls
    url: https://www.accent.reviews/guides/getting-started
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://github.com/mirego/accent/blob/master/LICENSE.md
    checkedAt: 2026-10-31
  - field: hqCountry
    url: https://www.mirego.com/
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/mirego/accent/tree/v0.0.2
    checkedAt: 2026-10-31
  - field: category
    url: https://github.com/mirego/accent
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/mirego/accent/blob/v1.32.1/mix.exs
    checkedAt: 2026-10-31
  - field: runtime
    url: https://github.com/mirego/accent/blob/v1.32.1/mix.exs
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/mirego/accent/tree/v1.32.1
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/mirego/accent/tree/v1.32.1
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/mirego/accent
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://github.com/mirego/accent
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/mirego/accent
    checkedAt: 2026-10-31
  - field: contributors
    url: https://github.com/mirego/accent
    checkedAt: 2026-10-31
  - field: databases
    url: https://github.com/mirego/accent
    checkedAt: 2026-10-31
  - field: runtimeMin
    url: https://github.com/mirego/accent/blob/v1.32.1/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/mirego/accent
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/mirego/accent
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/mirego/accent
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://github.com/mirego/accent
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://github.com/mirego/accent
    checkedAt: 2026-10-31
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-23:2026-10-29/accent-cli
    checkedAt: 2026-10-31
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Accent is an open-source web app for managing translations, maintained by Mirego. Translators and developers work in its web UI, and the accent-cli npm package connects a project's locale files to an Accent instance. The app is written in Elixir on the Phoenix framework and keeps its data in PostgreSQL. Its GraphQL API, which the README describes as open and documented, serves the UI and the CLI.

The README lists three install routes: the official Docker image, a source build run with mix and Make, and a Heroku setup. The Docker run starts the web server on port 4000 and migrates the database on startup.
