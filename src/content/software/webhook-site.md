---
id: webhook-site
name: Webhook.site
urls:
  home: https://webhook.site
  repository: https://github.com/webhooksite/webhook.site
  docs: https://docs.webhook.site
  pricing: https://docs.webhook.site/pro.html
category:
  - backend
  - testing
description: Webhook testing tool that gives each user a unique URL and email address to inspect incoming HTTP requests, with an open-source edition that can be self-hosted.
status: active
maintainer: Simon Fredsted
maintainerType: individual
firstRelease: 2018
language: javascript
runtime:
  - php
hosting:
  - php
runtimeMin: php 7
databases:
  - sqlite
runsAs:
  - per-request
installMethod: docker compose
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2023-06-21
githubStargazers: 6791
contributors: 19
social:
  x: https://twitter.com/webhooksite
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://webhook.site
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/webhooksite/webhook.site
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/webhooksite/webhook.site/blob/master/readme.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/webhooksite/webhook.site/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/webhooksite/webhook.site/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/webhooksite/webhook.site/releases/tag/1.0
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/webhooksite/webhook.site/blob/master/readme.md
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/webhooksite/webhook.site
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/webhooksite/docs/blob/master/docs/open-source.markdown
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/webhooksite/docs/blob/master/docs/open-source.markdown
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/webhooksite/webhook.site/blob/master/docker-compose.yml
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/webhooksite/docs/blob/master/docs/open-source.markdown
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/webhooksite/docs/blob/master/docs/open-source.markdown
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/webhooksite/docs/blob/master/docs/open-source.markdown
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/webhooksite/docs/blob/master/docs/open-source.markdown
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/webhooksite/docs/blob/master/docs/open-source.markdown
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/webhooksite/docs/blob/master/docs/pro.markdown
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/webhooksite/webhook.site/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/webhooksite/webhook.site/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/webhooksite/webhook.site/releases/tag/1.3
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/webhooksite/webhook.site/releases/tag/1.3
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/webhooksite/webhook.site
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/webhooksite/webhook.site
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Webhook.site is a tool for testing webhooks that gives each user a unique URL and email address and shows the requests and emails it receives. The open-source edition can be self-hosted with Docker Compose, from a Helm chart, or on a PHP web server. The hosted cloud at webhook.site has more features, some of them behind a paid subscription, and the open-source edition does not include Custom Actions.

## Worth knowing

The open-source edition runs with SQLite and depends on Redis, which its compose file starts as a separate service, along with Laravel Echo Server for realtime updates.
