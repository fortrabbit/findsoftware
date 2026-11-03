---
id: powersync
name: PowerSync
urls:
  home: https://www.powersync.com
  repository: https://github.com/powersync-ja/powersync-service
  docs: https://docs.powersync.com
  pricing: https://www.powersync.com/pricing
category:
  - backend
description: Sync service that keeps a client-side SQLite database in step with a backend database, self-hostable as a Docker image.
status: active
maintainer: Journey Mobile, Inc.
maintainerType: company
parent: JourneyApps
firstRelease: 2022
language: javascript
databases:
  - postgres
  - mongodb
  - mysql
  - sqlserver
runsAs:
  - always-on
installMethod: docker
licenseModel: source-available
license: FSL-1.1-ALv2
currentMajor: "1"
latestReleaseDate: 2026-10-24
githubStargazers: 399
contributors: 30
social:
  x: https://x.com/powersync_
  bluesky: https://bsky.app/profile/powersync.com
  discord: https://discord.com/invite/powersync
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.powersync.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.powersync.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/powersync-ja/powersync-service
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/powersync-ja/powersync-service/blob/v1.27.2/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://www.powersync.com
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/powersync-ja/powersync-service
    checkedAt: 2026-11-03
  - field: databases
    url: https://www.powersync.com
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.powersync.com/configuration/powersync-service/self-hosted-instances
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.powersync.com/architecture/powersync-service
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.powersync.com/intro/self-hosting
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.powersync.com/intro/self-hosting
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.powersync.com/configuration/powersync-service/self-hosted-instances
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/powersync-ja/powersync-service/releases/tag/v1.27.2
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/powersync-ja/powersync-service/releases/tag/v1.27.2
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://www.powersync.com/company
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/powersync-ja/powersync-service
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/powersync-ja/powersync-service
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/powersync-ja/powersync-service/blob/v1.27.2/LICENSE
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.powersync.com/pricing
    checkedAt: 2026-11-03
  - field: parent
    url: https://www.powersync.com/company
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

PowerSync is a sync engine that keeps a client-side SQLite database in step with a backend database. The service sits between the two: it replicates changes from the source database, stores the data it prepares for each client in a bucket storage database, and streams that data to the clients. It started as a component of JourneyApps' app platform and became a standalone product in 2022. The [self-hosting guide](https://docs.powersync.com/intro/self-hosting) describes running the service as a Docker image, with a Docker Compose stack for local development.

A self-hosted instance is a running deployment of the service. The [instance configuration page](https://docs.powersync.com/configuration/powersync-service/self-hosted-instances) lists a source database connection, a bucket storage database, client authentication and a sync configuration, all set in a config file.

## Worth knowing

The latest release is under the Functional Source License with an Apache 2.0 future license, so it is source-available. An Enterprise Self-Hosted Edition with dedicated support and custom pricing is a separate paid option. The PowerSync Dashboard is not available when self-hosting.
