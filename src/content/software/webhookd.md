---
id: webhookd
name: webhookd
urls:
  repository: https://github.com/ncarlier/webhookd
  docs: https://github.com/ncarlier/webhookd#readme
category:
  - backend
description: Go webhook server that runs a shell script or external process for each HTTP request, with the script output returned in streamed or buffered form.
status: active
maintainer: Nicolas Carlier
maintainerType: individual
firstRelease: 2014
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: go install
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-22
githubStargazers: 1104
contributors: 14
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://github.com/ncarlier/webhookd
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/ncarlier/webhookd/blob/master/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/ncarlier/webhookd/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/ncarlier/webhookd/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/ncarlier/webhookd/releases/tag/v0.0.1
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/ncarlier/webhookd/blob/master/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/ncarlier/webhookd
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/ncarlier/webhookd/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/ncarlier/webhookd/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/ncarlier/webhookd/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/ncarlier/webhookd/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/ncarlier/webhookd/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/ncarlier/webhookd/blob/master/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/ncarlier/webhookd/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/ncarlier/webhookd/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/ncarlier/webhookd/releases/tag/v1.22.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/ncarlier/webhookd/releases/tag/v1.22.1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/ncarlier/webhookd
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/ncarlier/webhookd
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

webhookd is a Go webhook server that runs a shell script or other executable when an HTTP request arrives. The directory layout sets the webhook URL, so a script placed in a subfolder answers at the matching path. The server can sit behind an upstream authentication layer such as Authelia, Pomerium or Traefik, and it can check signatures from services such as Discord. It installs as a binary, a Docker image, an APT package or through go install, and a systemd service is set up for system-wide installs.
