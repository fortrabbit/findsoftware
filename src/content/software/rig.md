---
id: rig
name: Reactive Interaction Gateway
urls:
  home: https://accenture.github.io/reactive-interaction-gateway/
  repository: https://github.com/Accenture/reactive-interaction-gateway
  docs: https://accenture.github.io/reactive-interaction-gateway/docs/intro.html
category:
  - backend
description: Gateway between frontend clients and backend services that forwards backend events to clients over WebSocket, SSE and long polling, and proxies or queues client requests.
status: stub
maintainer: Accenture
firstRelease: 2017
language: elixir
runtime:
  - beam
hosting:
  - elixir
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: Apache-2.0
currentMajor: "3"
latestReleaseDate: 2022-08-12
githubStargazers: 602
contributors: 16
social:
  x: https://twitter.com/reactivegateway
  forum: https://stackoverflow.com/questions/tagged/reactive-interaction-gateway
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://accenture.github.io/reactive-interaction-gateway/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/Accenture/reactive-interaction-gateway
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/Accenture/reactive-interaction-gateway/blob/master/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/Accenture/reactive-interaction-gateway/blob/master/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/Accenture/reactive-interaction-gateway
    checkedAt: 2026-10-26
  - field: runtime
    url: https://accenture.github.io/reactive-interaction-gateway/docs/rig-dev-guide.html
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/Accenture/reactive-interaction-gateway/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/Accenture/reactive-interaction-gateway
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/Accenture/reactive-interaction-gateway/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://accenture.github.io/reactive-interaction-gateway/docs/rig-ops-guide.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/Accenture/reactive-interaction-gateway/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://accenture.github.io/reactive-interaction-gateway/docs/rig-ops-guide.html
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/Accenture/reactive-interaction-gateway/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/Accenture/reactive-interaction-gateway/releases
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://github.com/Accenture/reactive-interaction-gateway/blob/master/CHANGELOG.md
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/Accenture/reactive-interaction-gateway
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/Accenture/reactive-interaction-gateway/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

RIG, the Reactive Interaction Gateway, sits between a frontend and its backend services. Backend events are picked up from Kafka, NATS or Amazon Kinesis and forwarded to connected clients over WebSocket, server-sent events or long polling, according to each client's subscriptions. Client requests can be proxied to HTTP backends and answered synchronously, or turned into messages for asynchronous processing, with the response returned to the open connection when the backend replies.

The project is written in Elixir and runs on the Erlang VM. The operator's guide says RIG is typically deployed with Docker, and its ports for client traffic and internal APIs, together with the message broker and JWT settings, are set through environment variables.

## Worth knowing

The repository includes Kubernetes deployment instructions, and the FAQ says no knowledge of Elixir or Erlang is needed to use RIG.
