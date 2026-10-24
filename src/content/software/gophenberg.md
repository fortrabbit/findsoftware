---
id: gophenberg
name: Gophenberg
urls:
  home: https://docs.gophenberg.org
  repository: https://github.com/gopherium/gophenberg
  docs: https://docs.gophenberg.org
category:
  - cms
description: Plugin-first CMS with a Go backend, a React admin built on the Gutenberg block editor and optional Astro themes, backed by PostgreSQL.
status: active
maintainer: Manuel 'SirLouen' Camargo
firstRelease: 2026
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
adminUi: true
i18n: yes, admin interface languages
runsAs:
  - always-on
renderingModes:
  - server
installMethod: docker compose
licenseModel: open-source
license: Apache-2.0, GPL-2.0-or-later (WordPress packages bundled in built frontend artifacts)
currentMajor: "0"
latestReleaseDate: 2026-10-15
githubStargazers: 573
contributors: 13
social:
  discord: https://discord.com/invite/gopherium
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://docs.gophenberg.org/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/gopherium/gophenberg
    checkedAt: 2026-10-23
  - field: urls
    url: https://docs.gophenberg.org/self-hosting/install/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/gopherium/gophenberg/main/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/gopherium/gophenberg
    checkedAt: 2026-10-23
  - field: runtime
    url: https://docs.gophenberg.org/start/what-is-gophenberg/
    checkedAt: 2026-10-23
  - field: category
    url: https://docs.gophenberg.org/start/what-is-gophenberg/
    checkedAt: 2026-10-23
  - field: databases
    url: https://docs.gophenberg.org/self-hosting/install/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://raw.githubusercontent.com/gopherium/gophenberg/main/README.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://raw.githubusercontent.com/gopherium/gophenberg/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://docs.gophenberg.org/start/what-is-gophenberg/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://docs.gophenberg.org/self-hosting/install/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.gophenberg.org/self-hosting/install/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/gopherium/gophenberg
    checkedAt: 2026-10-23
  - field: license
    url: https://docs.gophenberg.org/legal/licensing/
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/gopherium/gophenberg/main/README.md
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://github.com/gopherium/gophenberg/releases/tag/v0.19.0
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://github.com/gopherium/gophenberg/releases/tag/v0.19.0
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/gopherium/gophenberg/releases/tag/v0.1.0
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/gopherium/gophenberg
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/gopherium/gophenberg/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Gophenberg is a content management system that runs as one Go binary beside a PostgreSQL database. Posts are written in the Gutenberg block editor inside a React admin at `/admin`, and the binary publishes them on the public site at the root. The published content is also readable through a read-only JSON API at `/api/content/v1`, which needs no authentication.

Themes are optional. A theme is an Astro project that reads that JSON API, and the built-in renderer serves the posts when no theme is active or the theme is down. Plugins are Go packages compiled into the binary, each with its own routes and database tables. A reference plugin serves the posts as an RSS feed.

The [install guide](https://docs.gophenberg.org/self-hosting/install/) runs the binary and PostgreSQL with Docker Compose behind a reverse proxy that holds the HTTPS certificate. The admin login cookie is marked secure, so the site needs HTTPS in front to be used.

## Worth knowing

Gophenberg is below 1.0 according to its own pages. Built frontend artifacts bundle WordPress packages under GPL-2.0-or-later, so a built admin or theme carries those terms while the source stays Apache-2.0.
