---
id: anubis
name: Anubis
urls:
  home: https://anubis.techaro.lol
  repository: https://github.com/TecharoHQ/anubis
  docs: https://github.com/TecharoHQ/anubis/blob/main/docs/docs/admin/installation.mdx
category:
  - web-server
description: Web application firewall that sits in front of a web service and makes each visitor solve a proof-of-work challenge before the request reaches the service, to stop scraper bots.
status: active
maintainer: Xe Iaso
firstRelease: 2025
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: native-deb
licenseModel: open-core
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-23
githubStargazers: 23922
contributors: 194
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://api.github.com/repos/TecharoHQ/anubis
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/TecharoHQ/anubis
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/TecharoHQ/anubis/blob/main/docs/docs/admin/installation.mdx
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/TecharoHQ/anubis/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/TecharoHQ/anubis/releases
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/TecharoHQ/anubis/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/TecharoHQ/anubis
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/TecharoHQ/anubis/blob/main/docs/docs/admin/native-install.mdx
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/TecharoHQ/anubis/blob/main/docs/docs/admin/environments/windows.mdx
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/TecharoHQ/anubis/blob/main/docs/docs/admin/native-install.mdx
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/TecharoHQ/anubis/blob/main/docs/docs/admin/native-install.mdx
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/TecharoHQ/anubis/blob/main/docs/docs/admin/native-install.mdx
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/TecharoHQ/anubis/blob/main/docs/docs/admin/native-install.mdx
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/TecharoHQ/anubis/blob/main/docs/docs/admin/environments/windows.mdx
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/TecharoHQ/anubis/blob/main/docs/docs/admin/installation.mdx
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/TecharoHQ/anubis/blob/main/docs/docs/admin/environments/docker-compose.mdx
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/TecharoHQ/anubis/blob/main/docs/docs/admin/environments/kubernetes.mdx
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/TecharoHQ/anubis
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/TecharoHQ/anubis/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/TecharoHQ/anubis/blob/main/docs/docs/admin/botstopper.mdx
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/TecharoHQ/anubis/releases/tag/v1.28.2
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/TecharoHQ/anubis/releases/tag/v1.28.2
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/TecharoHQ/anubis
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/TecharoHQ/anubis/contributors?per_page=1
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Anubis is a web application firewall written in Go. The operator places it between a reverse proxy, such as Nginx or Caddy, and the service being protected, with one Anubis instance for each protected service. Visitors receive a challenge page, a proof-of-work calculation that runs in their browser, before their requests are forwarded to the service.

The project publishes native packages for Debian-based and Red Hat-based systems, a tarball, a Windows installer that runs Anubis as a system service, and a Docker image on the GitHub Container Registry. The [installation guide](https://github.com/TecharoHQ/anubis/blob/main/docs/docs/admin/installation.mdx) lists the settings as environment variables, such as the target address and the difficulty.

## Worth knowing

The README calls Anubis "a bit of a nuclear response": a site behind it is blocked from smaller scrapers and may inhibit good bots such as the Internet Archive, which bot policy definitions can allowlist explicitly. The commercial edition, BotStopper, is built on the open source core and adds branding controls and a private bug tracker. Some settings in the docs are marked as BotStopper-only.
