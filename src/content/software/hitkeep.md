---
id: hitkeep
name: HitKeep
urls:
  home: https://hitkeep.com
  repository: https://github.com/HitKeep/hitkeep
  docs: https://hitkeep.com/guides/introduction/
  pricing: https://hitkeep.com/pricing/
category:
  - analytics
description: Web analytics server that ships as one Go binary and records visits and conversions through a script added to a site's pages.
status: active
maintainer: Pascale Beier
firstRelease: 2025
hqCountry: DE
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
adminUi: true
headlessApi:
  - rest
i18n: dashboard UI translated into English, German, Spanish, French, Italian, Dutch and Portuguese
runsAs:
  - always-on
installMethod: Homebrew formula HitKeep/hitkeep/hitkeep
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-11-02
githubStargazers: 105
contributors: 8
social:
  x: https://x.com/gethitkeep
  bluesky: https://bsky.app/profile/hitkeep.com
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://hitkeep.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://hitkeep.com/guides/introduction/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/HitKeep/hitkeep
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/HitKeep/hitkeep/releases
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/HitKeep/hitkeep/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://hitkeep.com/legal/imprint/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/HitKeep/hitkeep
    checkedAt: 2026-11-03
  - field: category
    url: https://hitkeep.com/guides/introduction/
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/HitKeep/hitkeep/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://hitkeep.com/guides/installation/binary/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/HitKeep/hitkeep/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/HitKeep/hitkeep/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://hitkeep.com/guides/installation/binary/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://hitkeep.com/guides/installation/
    checkedAt: 2026-11-03
  - field: databases
    url: https://hitkeep.com/reference/facts-and-limits/
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/HitKeep/hitkeep
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/HitKeep/hitkeep/blob/main/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/HitKeep/hitkeep/blob/main/README.md
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://hitkeep.com/api/
    checkedAt: 2026-11-03
  - field: urls
    url: https://hitkeep.com/pricing/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/HitKeep/hitkeep/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/HitKeep/hitkeep/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/HitKeep/hitkeep
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/HitKeep/hitkeep/contributors
    checkedAt: 2026-11-03
  - field: i18n
    url: https://hitkeep.com/guides/introduction/
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

HitKeep is a web analytics server. A script tag added to a site's pages sends visits and events to the server, and the dashboard reports traffic, goals, funnels, ecommerce revenue, Search Console data and Web Vitals. The server is one Go binary. It keeps analytics in DuckDB and its control plane in SQLite, and it publishes incoming hits to an embedded NSQ queue, so it needs no separate database, queue or cache service.

It installs with Homebrew, from a Docker Compose file that uses the pascalebeier/hitkeep image, or as a Linux binary run as a native service. The same code runs as HitKeep Cloud in an EU or US region for teams that do not want to operate the server themselves.

## Worth knowing

The tracker sets no analytics cookies and respects Do Not Track, according to the README. Team single sign-on uses OpenID Connect in both the cloud and self-hosted installs.
