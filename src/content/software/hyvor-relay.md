---
id: hyvor-relay
name: Hyvor Relay
urls:
  home: https://relay.hyvor.com
  repository: https://github.com/hyvor/relay
  docs: https://relay.hyvor.com/docs
  pricing: https://relay.hyvor.com/pricing
category:
  - email
description: Self-hostable email API for developers that sends transactional email over SMTP through the sender's own servers, with delivery logs, bounce handling and webhooks.
status: active
maintainer: HYVOR, SARL
maintainerType: company
firstRelease: 2025
hqCountry: FR
language: php
runtime:
  - php
  - binary
hosting:
  - php
  - binary
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker-compose
licenseModel: open-core
license: AGPL-3.0, AGPL-3.0 License, enterprise license for organizations that require a commercial license
currentMajor: "0"
latestReleaseDate: 2026-10-21
githubStargazers: 919
contributors: 5
social:
  x: https://x.com/HyvorHQ
  bluesky: https://bsky.app/profile/hyvor.com
  discord: https://discord.com/invite/2WRJxQB
  forum: https://hyvor.community
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://relay.hyvor.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/hyvor/relay
    checkedAt: 2026-11-03
  - field: urls
    url: https://relay.hyvor.com/docs
    checkedAt: 2026-11-03
  - field: urls
    url: https://relay.hyvor.com/pricing
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/hyvor/relay
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/hyvor/relay
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://hyvor.com/privacy
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/hyvor/relay/releases/tag/0.0.1
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/hyvor/relay
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/hyvor/relay/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/hyvor/relay/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://relay.hyvor.com/hosting
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://relay.hyvor.com/hosting/deploy-easy
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://relay.hyvor.com/hosting
    checkedAt: 2026-11-03
  - field: databases
    url: https://relay.hyvor.com/hosting
    checkedAt: 2026-11-03
  - field: category
    url: https://relay.hyvor.com
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/hyvor/relay
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/hyvor/relay/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/hyvor/relay/blob/main/README.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/hyvor/relay/releases/tag/0.0.48
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/hyvor/relay/releases/tag/0.0.48
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/hyvor/relay
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/hyvor/relay
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://relay.hyvor.com/hosting
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://relay.hyvor.com
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
npmWeeklyDownloads: null
---

Hyvor Relay is an email API for developers. An application sends a message to the API over REST, and the server delivers it over SMTP from the IP addresses and domains the operator configures. The server is a PHP API with Go workers, a built-in SMTP server, a DNS server and a webhook worker, shipped as one Docker image and started with Docker Compose or Docker Swarm. It keeps its data in PostgreSQL and signs administrators and users in through an external OpenID Connect provider. Bounces and complaints arrive on its SMTP server, and its DNS server manages the DNS records for the instance domain.

## Worth knowing

The project offers an enterprise license beside the AGPL-3.0 license, and its own pages say both carry the same features. The official cloud instance is not open for public signups, according to the [product docs](https://relay.hyvor.com/docs). A self-hosted server needs a static IPv4 address, with more for additional queues, and accepts incoming mail on port 25.
