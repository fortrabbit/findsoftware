---
id: frp
name: frp
urls:
  home: https://gofrp.org
  repository: https://github.com/fatedier/frp
  docs: https://gofrp.org/en/docs/
  plugins: https://github.com/gofrp/plugin
category:
  - web-server
description: Reverse proxy that exposes services behind a NAT or firewall to the internet through a server with a public IP address, written in Go.
status: active
maintainer: The frp Authors
maintainerType: community
firstRelease: 2016
language: go
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: binary download from the GitHub release page
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-10-14
githubStargazers: 110286
contributors: 139
social:
  x: https://x.com/fatedier
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: urls
    url: https://gofrp.org/en/
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/fatedier/frp
    checkedAt: 2026-10-29
  - field: urls
    url: https://gofrp.org/en/docs/
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://gofrp.org/en/
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://api.github.com/repos/fatedier/frp/releases
    checkedAt: 2026-10-29
  - field: adminUi
    url: https://gofrp.org/en/docs/overview/
    checkedAt: 2026-10-29
  - field: category
    url: https://github.com/fatedier/frp/blob/dev/README.md
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/fatedier/frp
    checkedAt: 2026-10-29
  - field: runtime
    url: https://gofrp.org/en/docs/setup/
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://gofrp.org/en/docs/setup/
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://gofrp.org/en/docs/setup/systemd/
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://github.com/fatedier/frp/blob/dev/README.md
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://api.github.com/repos/fatedier/frp/releases
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/fatedier/frp/blob/v0.71.1/LICENSE
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://github.com/fatedier/frp/blob/dev/README.md
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/fatedier/frp
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/fatedier/frp/contributors?per_page=1
    checkedAt: 2026-10-29
  - field: urls
    url: https://github.com/fatedier/frp/blob/dev/README.md
    checkedAt: 2026-10-29
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

frp is a reverse proxy that exposes a local server behind a NAT or firewall to the internet, through a server with a public IP address. It is written in Go and ships as a binary for each platform, downloaded from the GitHub release page, with no other runtime to install. The server process, frps, can run in the background as a systemd service. It forwards traffic from the public server to services on the local network, including HTTP and HTTPS requests to web services addressed by domain name.

## Worth knowing

The README describes a successor line in development that will not be compatible with the current one, while the current line continues to receive releases. The README says the project will move from version 0 to version 1 at the appropriate time.
