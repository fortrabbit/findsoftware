---
id: usesend
name: useSend
urls:
  home: https://usesend.com
  repository: https://github.com/usesend/useSend
  docs: https://docs.usesend.com/introduction
  pricing: https://usesend.com/#pricing
category:
  - email
description: Open source email platform for sending transactional and marketing email through a REST API, an SMTP relay and a dashboard.
status: active
maintainer: useSend
firstRelease: 2024
language: javascript
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
installMethod: docker
licenseModel: open-source
license: AGPL-3.0
currentMajor: "1"
latestReleaseDate: 2026-10-26
githubStargazers: 4778
contributors: 49
social:
  x: https://x.com/useSend_com
  bluesky: https://bsky.app/profile/usesend.com
  discord: https://discord.com/invite/BU8n8pJv8S
  forum: https://github.com/usesend/usesend/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://usesend.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/usesend/useSend
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.usesend.com/introduction
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://api.github.com/users/usesend
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/usesend/useSend
    checkedAt: 2026-11-03
  - field: category
    url: https://usesend.com
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://docs.usesend.com/api-reference/introduction
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/usesend/useSend
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://api.github.com/repos/usesend/useSend
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/usesend/useSend/releases/tag/v1.0.0
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/usesend/useSend/releases/tag/v1.10.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/usesend/useSend/releases/tag/v1.10.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/usesend/useSend
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/usesend/useSend/contributors
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.usesend.com/get-started/set-up-docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.usesend.com/get-started/set-up-docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.usesend.com/self-hosting/railway
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.usesend.com/self-hosting/overview
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/usesend/usesend/blob/main/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://usesend.com
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

useSend is an open source email platform that sends product, transactional and marketing email through a REST API, an SMTP relay and a web dashboard. The dashboard shows deliveries, opens, clicks and bounces. The software runs as a Docker image, which can be started with Docker Compose together with Postgres and Redis, or on Railway. Redis serves as its queue and Postgres as its database. Mail goes out through Amazon SES, and delivery status comes back through SNS, so a self-hosted install needs an AWS account. The GitHub organization named useSend maintains the project.

## Worth knowing

The vendor runs a hosted version at app.usesend.com alongside the open source code, and the project says it is funded by that offering and by sponsors. Stored email content stays in the database unless a retention period is set, and images added in the editor go to S3-compatible storage.
