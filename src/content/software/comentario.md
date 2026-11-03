---
id: comentario
name: Comentario
urls:
  home: https://comentario.app
  repository: https://gitlab.com/comentario/comentario
  docs: https://docs.comentario.app/
category:
  - community
description: Self-hosted web comment engine that adds threaded comments, voting and moderation to web pages through an embedded widget.
status: active
maintainer: Dmitry Kann
maintainerType: individual
firstRelease: 2023
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
  - postgres
adminUi: true
i18n: yes, the embedded comment engine supports i18n
runsAs:
  - always-on
installMethod: binary-package
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-16
contributors: 47
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://comentario.app/en/
    checkedAt: 2026-11-03
  - field: urls
    url: https://gitlab.com/api/v4/projects/42486427
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.comentario.app/en/getting-started/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://gitlab.com/comentario/comentario/-/raw/dev/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://gitlab.com/comentario/comentario/-/raw/dev/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://gitlab.com/comentario/comentario/-/releases/v2.0.1
    checkedAt: 2026-11-03
  - field: language
    url: https://gitlab.com/api/v4/projects/42486427/languages
    checkedAt: 2026-11-03
  - field: category
    url: https://gitlab.com/comentario/comentario/-/raw/dev/README.md
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.comentario.app/en/installation/docker-image/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.comentario.app/en/installation/binary-package/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.comentario.app/en/installation/binary-package/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.comentario.app/en/installation/docker-image/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.comentario.app/en/installation/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.comentario.app/en/installation/
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.comentario.app/en/installation/requirements/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://gitlab.com/comentario/comentario/-/raw/dev/README.md
    checkedAt: 2026-11-03
  - field: i18n
    url: https://gitlab.com/comentario/comentario/-/raw/dev/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://gitlab.com/comentario/comentario/-/raw/dev/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://docs.comentario.app/en/about/source-code/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://gitlab.com/comentario/comentario/-/releases/v3.19.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://gitlab.com/comentario/comentario/-/releases/v3.19.0
    checkedAt: 2026-11-03
  - field: contributors
    url: https://gitlab.com/api/v4/projects/42486427/repository/contributors
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Comentario is a web comment engine. It adds threaded comments, voting and moderation to the pages of a site, through an embedded widget. The server is written in Go and runs as a systemd service when installed from a binary package, or as a container, a Helm chart in Kubernetes, or a build from source. It stores its data in SQLite or PostgreSQL, and a moderator works in an administration UI that covers several domains. The project's README says it started as a fork of Commento, the predecessor it describes as now discontinued.

## Worth knowing

The README states that the code no longer shares legacy code with its predecessor since version 3.0, so the fork relationship describes the origin and not the current code. A cloud-hosted version is offered beside the self-hosted software; the [cloud page](https://docs.comentario.app/en/getting-started/cloud/) calls it a turnkey cloud solution.
