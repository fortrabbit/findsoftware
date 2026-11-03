---
id: featureprobe
name: FeatureProbe
urls:
  home: https://featureprobe.github.io/FeatureProbe/
  repository: https://github.com/FeatureProbe/FeatureProbe
  docs: https://featureprobe.github.io/FeatureProbe/
category:
  - dev-tool
description: Open-source feature management service for feature toggles, gradual rollouts and A/B tests, self-hosted with Docker Compose.
status: active
maintainer: FeatureProbe
firstRelease: 2022
language: javascript
databases:
  - mysql
adminUi: true
runsAs:
  - always-on
installMethod: docker compose
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2023-09-20
githubStargazers: 1639
contributors: 16
social:
  x: https://twitter.com/featureprobe
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://featureprobe.github.io/FeatureProbe/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/FeatureProbe/FeatureProbe
    checkedAt: 2026-11-03
  - field: urls
    url: https://featureprobe.github.io/FeatureProbe/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/FeatureProbe
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/FeatureProbe/FeatureProbe/blob/main/README.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/FeatureProbe/FeatureProbe/releases/tag/v1.1.0
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/FeatureProbe/FeatureProbe
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/FeatureProbe/FeatureProbe/blob/main/docker-compose.yml
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/FeatureProbe/FeatureProbe/blob/main/docs/docs/tutorials/setup_own_env.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/FeatureProbe/FeatureProbe/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/FeatureProbe/FeatureProbe/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/FeatureProbe/FeatureProbe/blob/main/README.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/FeatureProbe/FeatureProbe/releases/tag/2.7.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/FeatureProbe/FeatureProbe/releases/tag/2.7.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/FeatureProbe/FeatureProbe
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/FeatureProbe/FeatureProbe
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

FeatureProbe is an open-source feature management service for feature toggles, gradual rollouts and A/B tests. It is run from Docker images: the README gives docker compose up as the way to start the services, and the compose file starts an API image, a server image, an admin UI image and an analysis image. The API connects to a MySQL-protocol database, and a management portal in the browser configures the toggles.

The docs describe the self-hosted environment as five independent images that all need to start before the platform runs normally.
