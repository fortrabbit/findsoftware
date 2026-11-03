---
id: openreplay
name: OpenReplay
urls:
  home: https://openreplay.com
  repository: https://github.com/openreplay/openreplay
  docs: https://docs.openreplay.com/en/getting-started/
category:
  - analytics
description: Self-hosted session replay and product analytics platform, with a tracker SDK that runs inside the monitored web or mobile app.
status: active
maintainer: Asayer, Inc dba OpenReplay
maintainerType: company
firstRelease: 2021
language: javascript
databases:
  - postgres
installMethod: docker compose
licenseModel: open-core
license: AGPL-3.0, MIT (some directories), OpenReplay Enterprise License (commercial, ee/ directory)
currentMajor: "1"
latestReleaseDate: 2026-09-25
githubStargazers: 13092
contributors: 76
social:
  forum: https://forum.openreplay.com
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://openreplay.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/openreplay/openreplay
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.openreplay.com/en/getting-started/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/openreplay/openreplay
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/openreplay/openreplay
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/openreplay/openreplay/blob/main/ee/LICENSE.md
    checkedAt: 2026-11-03
  - field: category
    url: https://openreplay.com
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/openreplay/openreplay
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/openreplay/openreplay/releases
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/openreplay/openreplay/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.openreplay.com/en/deployment/deploy-docker/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.openreplay.com/en/deployment/deploy-kubernetes/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.openreplay.com/en/deployment/
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.openreplay.com/en/deployment/deploy-kubernetes/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/openreplay/openreplay/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/openreplay/openreplay/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/openreplay/openreplay
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/openreplay/openreplay
    checkedAt: 2026-11-03
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

OpenReplay records user sessions in a web or mobile app and plays them back as replays. A tracker SDK runs inside the monitored app and sends its data to an OpenReplay server that the operator hosts. The documentation covers a Docker Compose install on a single machine and a Helm chart for Kubernetes, and the Kubernetes chart packages PostgreSQL and Redis that the server needs. The project's own docs also describe deploying from source. The company behind the project, Asayer, Inc, offers OpenReplay Cloud as a hosted alternative to running the server.

## Worth knowing

The monorepo carries several licenses. Most files are under the AGPLv3, some directories are under the MIT license, and the directory named ee/ holds the Enterprise Edition under a separate commercial license. The Docker Compose route is marked as experimental on its deployment page. The README gives a baseline of two vCPUs, 8 GB of RAM and 50 GB of storage for a single virtual machine.
