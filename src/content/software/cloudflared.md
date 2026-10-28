---
id: cloudflared
name: cloudflared
urls:
  home: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/
  repository: https://github.com/cloudflare/cloudflared
  docs: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/
category:
  - web-server
description: Command-line tunneling daemon that connects a web server or other origin to the Cloudflare network without opening inbound firewall ports.
status: active
maintainer: Cloudflare, Inc.
maintainerType: company
firstRelease: 2020
hqCountry: US
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: binary download
licenseModel: open-source
license: Apache-2.0
latestReleaseDate: 2026-10-27
githubStargazers: 16327
contributors: 105
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: name
    url: https://github.com/cloudflare/cloudflared
    checkedAt: 2026-10-28
  - field: urls
    url: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/cloudflare/cloudflared
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/cloudflare/cloudflared
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://www.cloudflare.com/website-terms/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/downloads/
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://www.cloudflare.com/website-terms/
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/cloudflare/cloudflared
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/cloudflare/cloudflared
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/cloudflare/cloudflared
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/cloudflare/cloudflared
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/cloudflare/cloudflared
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/cloudflare/cloudflared
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/cloudflare/cloudflared
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/cloudflare/cloudflared
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/cloudflare/cloudflared
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/cloudflare/cloudflared
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/cloudflare/cloudflared/releases/latest
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/cloudflare/cloudflared/releases
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/cloudflare/cloudflared
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/cloudflare/cloudflared
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/cloudflare/cloudflared/contributors?per_page=1
    checkedAt: 2026-10-28
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

cloudflared is the command-line client for Cloudflare Tunnel, a tunneling daemon that proxies traffic from the Cloudflare network to your origins. The daemon sits between the Cloudflare network and an origin such as a web server, so the origin can stay closed to inbound connections. The [Cloudflare Tunnel documentation](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/) covers setup and routing. It is distributed as standalone binaries, a Docker image, and Debian, RPM and Homebrew packages.

## Worth knowing

The tunnel is a service that Cloudflare hosts. The README asks users to add a website to a Cloudflare account before they use it, and says the requirement is kept for legacy reasons.
