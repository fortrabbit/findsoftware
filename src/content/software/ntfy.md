---
id: ntfy
name: ntfy
urls:
  home: https://ntfy.sh
  repository: https://github.com/binwiederhier/ntfy
  docs: https://docs.ntfy.sh/
category:
  - backend
description: Self-hostable HTTP publish-subscribe server that delivers published messages as push notifications to phones, desktops and browsers.
status: active
maintainer: Philipp C. Heckel
maintainerType: individual
firstRelease: 2021
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
  - postgres
templating: Go templates
runsAs:
  - always-on
installMethod: binary-download
licenseModel: open-source
license: Apache-2.0, GPL-2.0
currentMajor: "2"
latestReleaseDate: 2026-11-02
githubStargazers: 35257
contributors: 385
social:
  discord: https://discord.gg/cT7ECsZj9w
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://ntfy.sh
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/binwiederhier/ntfy
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.ntfy.sh/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://docs.ntfy.sh/contact/
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://api.github.com/users/binwiederhier
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/binwiederhier/ntfy/releases
    checkedAt: 2026-11-03
  - field: category
    url: https://ntfy.sh
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/binwiederhier/ntfy
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.ntfy.sh/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.ntfy.sh/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.ntfy.sh/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.ntfy.sh/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.ntfy.sh/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.ntfy.sh/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.ntfy.sh/install/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.ntfy.sh/install/
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.ntfy.sh/config/
    checkedAt: 2026-11-03
  - field: templating
    url: https://docs.ntfy.sh/publish/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/binwiederhier/ntfy
    checkedAt: 2026-11-03
  - field: license
    url: https://ntfy.sh
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://ntfy.sh
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/binwiederhier/ntfy/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/binwiederhier/ntfy/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/binwiederhier/ntfy
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/binwiederhier/ntfy
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

ntfy is a server that accepts messages over HTTP and delivers them as push notifications to phones, desktops and browsers. A script or application publishes to a topic with a PUT or POST request, and the apps and web app subscribed to that topic show the message. The server ships as a binary, a Docker image or a package, and its install guide describes running it as a permanent service. It can keep its data in SQLite or PostgreSQL.

The project also runs a public server, ntfy.sh, and the software can be self-hosted.

## Worth knowing

Without sign-up, a topic on the public server works like a password: the homepage says so and advises a name that is hard to guess. The public server also offers paid plans next to a free tier.
