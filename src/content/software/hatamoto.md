---
id: hatamoto
name: Hatamoto
urls:
  home: https://hatamoto.dev
  repository: https://github.com/Zen-Labs-Corp/hatamoto
  docs: https://hatamoto.dev/docs
  plugins: https://hatamoto.dev/plugins
category:
  - cms
description: Self-hosted content management system written in Go that runs as one binary next to a Postgres database.
status: active
maintainer: Zen Labs Corporation
maintainerType: company
firstRelease: 2026
hqCountry: AU
language: go
runtime:
  - binary
hosting:
  - binary
contentStore:
  - database
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
templating: go templates
i18n: no, one language per site
runsAs:
  - always-on
renderingModes:
  - server
installMethod: docker compose
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-27
githubStargazers: 9
contributors: 1
social:
  forum: https://github.com/Zen-Labs-Corp/hatamoto/discussions
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/Zen-Labs-Corp/hatamoto
    checkedAt: 2026-10-28
  - field: urls
    url: https://hatamoto.dev/
    checkedAt: 2026-10-28
  - field: urls
    url: https://hatamoto.dev/docs/getting-started
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://hatamoto.dev/privacy
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/Zen-Labs-Corp/hatamoto/blob/main/README.md
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://hatamoto.dev/privacy
    checkedAt: 2026-10-28
  - field: category
    url: https://hatamoto.dev/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/Zen-Labs-Corp/hatamoto
    checkedAt: 2026-10-28
  - field: runtime
    url: https://hatamoto.dev/
    checkedAt: 2026-10-28
  - field: contentStore
    url: https://hatamoto.dev/docs/getting-started/requirements-and-secrets
    checkedAt: 2026-10-28
  - field: databases
    url: https://hatamoto.dev/
    checkedAt: 2026-10-28
  - field: headlessApi
    url: https://hatamoto.dev/docs/ai-seo/mcp
    checkedAt: 2026-10-28
  - field: templating
    url: https://hatamoto.dev/docs/themes/engine-details
    checkedAt: 2026-10-28
  - field: i18n
    url: https://hatamoto.dev/hatamoto-vs-wordpress
    checkedAt: 2026-10-28
  - field: renderingModes
    url: https://hatamoto.dev/docs/themes/engine-details
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://hatamoto.dev/docs/operate/deploy-systemd
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://hatamoto.dev/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://hatamoto.dev/docs/getting-started/install-binary
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/Zen-Labs-Corp/hatamoto
    checkedAt: 2026-10-28
  - field: license
    url: https://hatamoto.dev/
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/Zen-Labs-Corp/hatamoto/releases/tag/v1.0.1
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/Zen-Labs-Corp/hatamoto/releases
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/Zen-Labs-Corp/hatamoto/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/Zen-Labs-Corp/hatamoto
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/Zen-Labs-Corp/hatamoto/contributors
    checkedAt: 2026-10-28
  - field: urls
    url: https://hatamoto.dev/plugins
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://hatamoto.dev/docs/admin/tour
    checkedAt: 2026-10-28
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Hatamoto is a content management system from Zen Labs Corporation, in Australia. The site, the admin, the JSON API and the MCP endpoint run in one Go program, next to a Postgres database that holds the content. Pages are rendered on the server through Go html/template theme files, and editors work in a web admin with a visual page builder. It installs from a release binary or with Docker Compose, and runs as a long-lived service that restarts when it stops. Content types are set up in the admin, and a WordPress importer is documented. Plugins and themes come from a directory on the project's site.

## Worth knowing

Each install is one site in one language. The project's own comparison with WordPress lists several sites from one install and multiple languages as things WordPress does and Hatamoto does not.
