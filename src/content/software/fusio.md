---
id: fusio
name: Fusio
urls:
  home: https://www.fusio-project.org
  repository: https://github.com/apioo/fusio
  docs: https://docs.fusio-project.org/
category:
  - backend
description: Self-hosted, open-source API management platform and API gateway, written in PHP.
status: active
maintainer: Christoph Kappestein
maintainerType: individual
firstRelease: 2015
hqCountry: DE
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.4
databases:
  - mysql
  - postgres
  - sqlite
adminUi: true
headlessApi:
  - rest
runsAs:
  - per-request
installMethod: docker compose
licenseModel: open-source
license: Apache-2.0
currentMajor: "7"
latestReleaseDate: 2026-10-21
githubStargazers: 2127
packagistDownloads: 29142
contributors: 3
social:
  x: https://twitter.com/FusioAPI
  bluesky: https://bsky.app/profile/fusioapi.bsky.social
  mastodon: https://fosstodon.org/@fusio
  discord: https://discord.gg/eMrMgwsc6e
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: urls
    url: https://www.fusio-project.org/
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/apioo/fusio
    checkedAt: 2026-10-29
  - field: urls
    url: https://docs.fusio-project.org/
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://api.github.com/repos/apioo/fusio/releases
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://www.fusio-project.org/imprint
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://www.fusio-project.org/imprint
    checkedAt: 2026-10-29
  - field: hqCountry
    url: https://www.fusio-project.org/imprint
    checkedAt: 2026-10-29
  - field: category
    url: https://www.fusio-project.org/
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/apioo/fusio
    checkedAt: 2026-10-29
  - field: runtime
    url: https://github.com/apioo/fusio/blob/master/README.md
    checkedAt: 2026-10-29
  - field: runtimeMin
    url: https://github.com/apioo/fusio/blob/v7.2.1/composer.json
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://api.github.com/repos/apioo/fusio/releases
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://api.github.com/repos/apioo/fusio/releases
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/apioo/fusio/blob/v7.2.1/composer.json
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://www.fusio-project.org/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://github.com/apioo/fusio/blob/master/README.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.fusio-project.org/docs/installation/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://docs.fusio-project.org/docs/installation/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://github.com/apioo/fusio/blob/master/README.md
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://docs.fusio-project.org/docs/installation/
    checkedAt: 2026-10-29
  - field: databases
    url: https://docs.fusio-project.org/docs/installation/
    checkedAt: 2026-10-29
  - field: databases
    url: https://github.com/apioo/fusio/blob/master/README.md
    checkedAt: 2026-10-29
  - field: headlessApi
    url: https://github.com/apioo/fusio/blob/master/README.md
    checkedAt: 2026-10-29
  - field: adminUi
    url: https://github.com/apioo/fusio/blob/master/README.md
    checkedAt: 2026-10-29
  - field: packagistDownloads
    url: https://packagist.org/packages/fusio/impl.json
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/apioo/fusio
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/apioo/fusio/contributors?per_page=1
    checkedAt: 2026-10-29
ai: authored
npmWeeklyDownloads: null
---

Fusio is a self-hosted API management platform and API gateway written in PHP. It can expose SQL or NoSQL databases as REST APIs, route traffic to internal services, and run custom action logic. It runs on MySQL, PostgreSQL or SQLite, is served through a web server with only its public folder exposed, and is installed with Docker, Composer or a zip download. Its backend app is served from an apps path under the installation. The project is maintained by Christoph Kappestein.

## Worth knowing

The project's own comparison pages name Kong, Supabase and Appwrite as alternatives to Fusio. The homepage also lists a developer portal, SDK generation and monetization features, which the project describes as part of the same product.
