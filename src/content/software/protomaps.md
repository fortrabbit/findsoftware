---
id: protomaps
name: PMTiles
urls:
  home: https://protomaps.com
  repository: https://github.com/protomaps/PMTiles
  docs: https://docs.protomaps.com/pmtiles/
category:
  - graphics
description: Single-file archive format for tiled map data, with a JavaScript library that reads it in browsers and Node.js.
status: active
maintainer: Protomaps LLC
maintainerType: company
firstRelease: 2021
language: javascript
runtime:
  - node
installMethod: npm, script tag
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "4"
latestReleaseDate: 2026-08-10
githubStargazers: 3199
npmWeeklyDownloads: 2270953
contributors: 51
dependentRepos: 81
dependentPackages: 27
social:
  bluesky: https://bsky.app/profile/protomaps.com
  mastodon: https://mapstodon.space/@protomaps
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://protomaps.com/
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/protomaps/PMTiles
    checkedAt: 2026-11-16
  - field: urls
    url: https://docs.protomaps.com/pmtiles/
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/pmtiles
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/protomaps/PMTiles/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/protomaps/PMTiles/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://github.com/protomaps/PMTiles
    checkedAt: 2026-11-16
  - field: category
    url: https://docs.protomaps.com/pmtiles/
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/protomaps/PMTiles/blob/main/js/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/protomaps/PMTiles/blob/main/js/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/protomaps/PMTiles/blob/main/js/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/protomaps/PMTiles/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://protomaps.com/about
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://registry.npmjs.org/pmtiles/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://registry.npmjs.org/pmtiles
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://github.com/protomaps/PMTiles
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/protomaps/PMTiles/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/pmtiles
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/pmtiles
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/pmtiles
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
runsAs: null
---

PMTiles is a single-file archive format for tiled map data, with a JavaScript library that reads it in browsers and Node.js. An archive holds a tile pyramid in one file that can be hosted on a storage platform such as S3, and the reader fetches only the tiles it needs with HTTP range requests. The format is read-only, so an archive is written again in full when its contents change. The [documentation](https://docs.protomaps.com/pmtiles/) describes the archive concepts and how the library works with map libraries such as MapLibre GL JS, Leaflet and OpenLayers.

## Worth knowing

This record covers the format and the library only. The Protomaps project also runs a hosted tile API for its basemap, which is a separate service.
