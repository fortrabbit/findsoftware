---
id: stalwart
name: Stalwart
urls:
  home: https://stalw.art
  repository: https://github.com/stalwartlabs/stalwart
  docs: https://stalw.art/docs/install/
  pricing: https://stalw.art/pricing/
category:
  - email
description: Open-source mail and collaboration server written in Rust, serving SMTP, IMAP, JMAP, CalDAV, CardDAV and WebDAV.
status: active
maintainer: Stalwart Labs LLC
maintainerType: company
firstRelease: 2022
language: rust
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
  - mysql
  - sqlite
adminUi: true
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: AGPL-3.0, SELv2 (proprietary, commercial use)
currentMajor: "1"
latestReleaseDate: 2026-11-02
githubStargazers: 15682
contributors: 55
social:
  x: https://twitter.com/stalwartlabs/
  mastodon: https://mastodon.social/@stalwartlabs
  discord: https://discord.gg/vhqRgdhguq
  forum: https://support.stalw.art
  subreddit: https://www.reddit.com/r/stalwartlabs
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://stalw.art
    checkedAt: 2026-11-03
  - field: urls
    url: https://stalw.art/docs/install/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/stalwartlabs/stalwart
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/stalwartlabs/stalwart
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/stalwartlabs/stalwart/blob/main/README.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://stalw.art/about/
    checkedAt: 2026-11-03
  - field: category
    url: https://stalw.art
    checkedAt: 2026-11-03
  - field: runtime
    url: https://stalw.art/docs/install/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://stalw.art/docs/install/platform/docker/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://stalw.art/docs/install/platform/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://stalw.art/docs/cluster/orchestration/kubernetes/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://stalw.art/docs/install/platform/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://stalw.art/docs/install/platform/linux/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/stalwartlabs/stalwart/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/stalwartlabs/stalwart/blob/main/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://stalw.art/pricing/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://stalw.art/docs/management/webui/
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/stalwartlabs/stalwart/blob/main/README.md
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/stalwartlabs/stalwart
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/stalwartlabs/stalwart
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/stalwartlabs/stalwart/releases/tag/v1.0.2
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/stalwartlabs/stalwart/releases/tag/v1.0.2
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Stalwart is a mail and collaboration server written in Rust. It serves SMTP, IMAP, JMAP, CalDAV, CardDAV and WebDAV. A website can post its contact form straight to the server's [form endpoint](https://stalw.art/docs/http/form-submission/), which delivers each submission as an email. The server runs as a service on Linux, macOS, FreeBSD and Windows, or from its Docker image, and keeps its data in a configured store such as RocksDB, PostgreSQL or MySQL.

## Worth knowing

The community edition is licensed under AGPL-3.0. The Enterprise edition is sold per mailbox under a separate license, and the server reverts to the community edition when a subscription ends. A managed service is planned but not yet offered.
