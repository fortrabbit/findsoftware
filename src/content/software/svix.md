---
id: svix
name: Svix
urls:
  home: https://www.svix.com
  repository: https://github.com/svix/svix-webhooks
  docs: https://docs.svix.com
  pricing: https://www.svix.com/pricing/
category:
  - backend
description: Open source webhook service that sends webhooks with retries, signatures and a customer-facing portal, self-hosted or as a hosted service.
status: active
maintainer: Svix Inc.
maintainerType: company
firstRelease: 2021
hqCountry: US
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
installMethod: docker
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-28
githubStargazers: 3473
contributors: 92
social:
  x: https://twitter.com/SvixHQ
  mastodon: https://mastodon.social/@svixhq
  forum: https://github.com/svix/svix-webhooks/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.svix.com/open-source-webhook-service/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/svix/svix-webhooks
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.svix.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.svix.com/pricing/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.svix.com/terms/
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.svix.com/terms/
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/svix/svix-webhooks/releases
    checkedAt: 2026-11-03
  - field: category
    url: https://www.svix.com/open-source-webhook-service/
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/svix/svix-webhooks
    checkedAt: 2026-11-03
  - field: runtime
    url: https://www.svix.com/open-source-webhook-service/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/svix/svix-webhooks/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://www.svix.com/open-source-webhook-service/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.svix.com/open-source-webhook-service/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.svix.com/open-source-webhook-service/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/svix/svix-webhooks/blob/main/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/svix/svix-webhooks/blob/main/README.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/svix/svix-webhooks/releases/tag/server-v1.104.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/svix/svix-webhooks/releases/tag/server-v1.104.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/svix/svix-webhooks
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/svix/svix-webhooks
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Svix is an open source webhook service. An application calls the Svix API to send a webhook, and Svix delivers it to the endpoints its customers have configured, with retries, signatures and a customer-facing portal. The server is written in Rust and is installed from the official Docker image or a pre-compiled binary, or built from source.

The server stores events in PostgreSQL, and it can use Redis for its task queue and cache. The company also runs a hosted version of the same service, which the [open source page](https://www.svix.com/open-source-webhook-service/) describes next to the self-hosted server. Svix's own comparison pages set it beside Convoy, Hook0 and Hookdeck Outpost as webhook-sending platforms.

## Worth knowing

Building from source needs a Rust build environment.
