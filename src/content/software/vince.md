---
id: vince
name: vince
urls:
  home: https://www.vinceanalytics.com
  repository: https://github.com/vinceanalytics/vince
  docs: https://www.vinceanalytics.com/blog/deploy-local/
category:
  - analytics
description: Self-hosted web analytics server distributed as a single binary.
status: active
maintainer: Geofrey Ernest
firstRelease: 2023
language: go
runtime:
  - binary
hosting:
  - binary
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: binary download
licenseModel: open-source
license: AGPL-3.0
currentMajor: "1"
latestReleaseDate: 2025-09-01
githubStargazers: 2010
contributors: 7
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.vinceanalytics.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/vinceanalytics/vince
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/vinceanalytics/vince/releases
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.vinceanalytics.com/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/vinceanalytics/vince
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/vinceanalytics/vince/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://www.vinceanalytics.com/about
    checkedAt: 2026-11-03
  - field: category
    url: https://www.vinceanalytics.com/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/vinceanalytics/vince/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.vinceanalytics.com/blog/deploy-docker/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/vinceanalytics/vince/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/vinceanalytics/vince/blob/main/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/vinceanalytics/vince/blob/main/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://www.vinceanalytics.com/blog/config-cli/
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://www.vinceanalytics.com/blog/api-aggregate/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/vinceanalytics/vince/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/vinceanalytics/vince/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/vinceanalytics/vince/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/vinceanalytics/vince
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/vinceanalytics/vince/contributors
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

vince is a self-hosted web analytics server: the site owner runs it on their own machine or server as an alternative to Google Analytics. It is distributed as one binary with no runtime dependency, and it can be installed with an install script, a Docker image, a Helm chart or a download from the release page. One instance serves any number of sites.

## Worth knowing

The README calls vince a drop-in replacement for Plausible Analytics. Existing Plausible tracking scripts can point at a vince instance, and the tracking script is under 1 KB.

The storage is custom, built on compressed roaring bitmaps in columnar form.
