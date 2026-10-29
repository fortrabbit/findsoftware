---
id: garage
name: Garage
urls:
  home: https://garagehq.deuxfleurs.fr
  repository: https://git.deuxfleurs.fr/Deuxfleurs/garage
  docs: https://garagehq.deuxfleurs.fr/documentation/
category:
  - database
description: S3-compatible object storage server for self-hosted, geo-distributed deployments, written in Rust.
status: active
maintainer: Deuxfleurs (association loi 1901)
maintainerType: foundation
firstRelease: 2021
hqCountry: FR
language: rust
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: binary download
licenseModel: open-source
license: AGPL-3.0
currentMajor: "2"
latestReleaseDate: 2026-10-24
githubStargazers: 4786
contributors: 100
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: urls
    url: https://garagehq.deuxfleurs.fr/
    checkedAt: 2026-10-29
  - field: urls
    url: https://garagehq.deuxfleurs.fr/documentation/cookbook/from-source/
    checkedAt: 2026-10-29
  - field: urls
    url: https://garagehq.deuxfleurs.fr/documentation/
    checkedAt: 2026-10-29
  - field: category
    url: https://garagehq.deuxfleurs.fr/
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://guide.deuxfleurs.fr/vie_associative/mentions-legales
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://guide.deuxfleurs.fr/vie_associative/mentions-legales
    checkedAt: 2026-10-29
  - field: hqCountry
    url: https://guide.deuxfleurs.fr/vie_associative/mentions-legales
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/deuxfleurs-org/garage
    checkedAt: 2026-10-29
  - field: runtime
    url: https://garagehq.deuxfleurs.fr/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://garagehq.deuxfleurs.fr/documentation/quick-start/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://garagehq.deuxfleurs.fr/documentation/quick-start/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://garagehq.deuxfleurs.fr/documentation/cookbook/binary-packages/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://garagehq.deuxfleurs.fr/documentation/cookbook/from-source/
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://garagehq.deuxfleurs.fr/documentation/cookbook/systemd/
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://git.deuxfleurs.fr/api/v1/repos/Deuxfleurs/garage/releases
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://git.deuxfleurs.fr/api/v1/repos/Deuxfleurs/garage/releases
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://git.deuxfleurs.fr/api/v1/repos/Deuxfleurs/garage/releases
    checkedAt: 2026-10-29
  - field: license
    url: https://raw.githubusercontent.com/deuxfleurs-org/garage/main-v2/README.md
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://raw.githubusercontent.com/deuxfleurs-org/garage/main-v2/README.md
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/deuxfleurs-org/garage
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/deuxfleurs-org/garage/contributors?per_page=1
    checkedAt: 2026-10-29
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Garage is an S3-compatible object storage server for self-hosted deployments spread across several sites, written in Rust. It runs as a long-lived server process and can be started at boot through systemd. It ships as a single dependency-free binary for Linux and is also installed from a Docker image or a distribution package, or built from source with cargo. Buckets can be exposed as static websites. The maintainer is Deuxfleurs, an association under the French 1901 law.

## Worth knowing

Website hosting from a bucket serves only static files, with no redirects and no PHP or other languages. Only an index document and an error document can be set for a bucket.
