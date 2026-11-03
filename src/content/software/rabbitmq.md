---
id: rabbitmq
name: RabbitMQ
urls:
  home: https://www.rabbitmq.com/
  repository: https://github.com/rabbitmq/rabbitmq-server
  docs: https://www.rabbitmq.com/docs/documentation
category:
  - database
  - backend
description: Open source multi-protocol messaging and streaming broker that applications use to pass messages between services.
status: active
maintainer: Broadcom Inc.
maintainerType: company
firstRelease: 2008
language: erlang
runtime:
  - beam
hosting:
  - elixir
runtimeMin: beam 27
adminUi: true
runsAs:
  - always-on
installMethod: apt (Debian, Ubuntu)
licenseModel: open-core
license: MPL-2.0, Apache-2.0
currentMajor: "4"
latestReleaseDate: 2026-10-20
githubStargazers: 13955
contributors: 287
social:
  discord: https://www.rabbitmq.com/discord
  forum: https://github.com/rabbitmq/rabbitmq-server/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://www.rabbitmq.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.rabbitmq.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/rabbitmq/rabbitmq-server
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.rabbitmq.com/docs/documentation
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/rabbitmq/rabbitmq-server/blob/main/README.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/rabbitmq/rabbitmq-server/git/refs/tags/rabbitmq_v1_4_0
    checkedAt: 2026-11-03
  - field: language
    url: https://www.rabbitmq.com/docs/which-erlang
    checkedAt: 2026-11-03
  - field: runtime
    url: https://www.rabbitmq.com/docs/which-erlang
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://www.rabbitmq.com/docs/which-erlang
    checkedAt: 2026-11-03
  - field: category
    url: https://www.rabbitmq.com/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.rabbitmq.com/docs/install-debian
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.rabbitmq.com/docs/install-rpm
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.rabbitmq.com/docs/install-homebrew
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.rabbitmq.com/docs/install-windows
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.rabbitmq.com/docs/install-windows
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.rabbitmq.com/docs/install-generic-unix
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.rabbitmq.com/docs/download
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.rabbitmq.com/docs/download
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://www.rabbitmq.com/docs/install-debian
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://www.rabbitmq.com/docs/install-windows
    checkedAt: 2026-11-03
  - field: license
    url: https://www.rabbitmq.com/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/rabbitmq/rabbitmq-server/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://www.rabbitmq.com/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://www.rabbitmq.com/docs/management
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/rabbitmq/rabbitmq-server
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/rabbitmq/rabbitmq-server/contributors
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/rabbitmq/rabbitmq-server/releases/tag/v4.4.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/rabbitmq/rabbitmq-server/releases/tag/v4.3.7
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

RabbitMQ is an open source messaging and streaming broker that applications use to pass messages between services. The [homepage](https://www.rabbitmq.com/) names AMQP 1.0 and MQTT 5.0 among its protocols. It is written in Erlang and runs on the Erlang/OTP runtime, and its server starts as a daemon when the Debian package is installed. The install guides cover apt, dnf or yum, Homebrew, Chocolatey, a Windows installer, a generic UNIX binary build, a community Docker image and a Kubernetes operator.

The management plugin provides a browser-based UI and an HTTP API for monitoring and administering nodes and clusters. Users carry tags, and the tags control access to that UI. Authentication can defer to an LDAP server, and an OAuth 2.0 backend plugin accepts JWT access tokens.

## Worth knowing

Broadcom sells VMware Tanzu RabbitMQ, a commercial edition with longer support timelines, 24x7 support and disaster recovery features that the open source edition does not include.
