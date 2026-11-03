---
id: betterlytics
name: Betterlytics
urls:
  home: https://betterlytics.io
  repository: https://github.com/betterlytics/betterlytics
  docs: https://betterlytics.io/docs
  pricing: https://betterlytics.io/pricing
category:
  - analytics
description: Open-source web analytics platform with session replay, error tracking, Core Web Vitals and uptime monitoring, offered as a managed cloud service or self-hosted with Docker.
status: active
maintainer: Betterlytics
firstRelease: 2025
language: javascript
adminUi: true
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-source
license: AGPL-3.0
currentMajor: "1"
latestReleaseDate: 2026-10-28
githubStargazers: 180
npmWeeklyDownloads: 320
contributors: 14
social:
  bluesky: https://bsky.app/profile/betterlytics.bsky.social
  discord: https://discord.com/invite/vwqSvPn6sP
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://betterlytics.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://betterlytics.io/docs
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/betterlytics/betterlytics
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://betterlytics.io/terms
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/betterlytics/betterlytics/releases/tag/v1.0.0
    checkedAt: 2026-11-03
  - field: category
    url: https://betterlytics.io/docs
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/betterlytics/betterlytics
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/betterlytics/betterlytics
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/betterlytics/betterlytics
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://betterlytics.io/docs/installation/self-hosting
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://betterlytics.io/docs/installation/self-hosting
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/betterlytics/betterlytics
    checkedAt: 2026-11-03
  - field: urls
    url: https://betterlytics.io/pricing
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/@betterlytics/tracker
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/betterlytics/betterlytics
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/betterlytics/betterlytics/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/betterlytics/betterlytics/releases/tag/v1.5.2
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/betterlytics/betterlytics/releases/tag/v1.5.2
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Betterlytics is an open-source web analytics platform that also records session replays, JavaScript errors, Core Web Vitals and uptime checks in one dashboard. A site adds a tracking script or the `@betterlytics/tracker` npm package, which sends events to the platform. It runs as a managed cloud service hosted in the EU, or it is self-hosted with Docker Compose from a separate repository. ClickHouse is the store for session recordings, and a self-hosted instance serves plain HTTP on a local port for use behind a reverse proxy.

## Worth knowing

Self-hosted installations send the project a daily report unless the operator turns it off. Two optional features need outside services: geolocation uses a MaxMind GeoLite2 license key, and session recordings can go to S3-compatible storage instead of ClickHouse.
