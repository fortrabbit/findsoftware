---
id: mastodon
name: Mastodon
urls:
  home: https://joinmastodon.org
  repository: https://github.com/mastodon/mastodon
  docs: https://docs.joinmastodon.org
category:
  - community
description: Free, open-source decentralized social network server that federates microblogging accounts across the fediverse.
status: active
maintainer: Mastodon GmbH
maintainerType: company
hqCountry: DE
language: ruby
runtime:
  - ruby
  - node
hosting:
  - ruby
  - node
runtimeMin: ruby 3.3
runsAs:
  - always-on
installMethod: source
licenseModel: open-source
license: AGPL-3.0
currentMajor: "4"
latestReleaseDate: 2026-10-01
contributors: 1128
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: urls
    url: https://joinmastodon.org
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/mastodon/mastodon
    checkedAt: 2026-10-19
  - field: urls
    url: https://docs.joinmastodon.org
    checkedAt: 2026-10-19
  - field: license
    url: https://github.com/mastodon/mastodon
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://joinmastodon.org/about
    checkedAt: 2026-10-19
  - field: category
    url: https://joinmastodon.org/about
    checkedAt: 2026-10-19
  - field: language
    url: https://github.com/mastodon/mastodon
    checkedAt: 2026-10-19
  - field: runtime
    url: https://github.com/mastodon/mastodon/blob/v4.7.3/Gemfile
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://github.com/mastodon/mastodon/blob/v4.7.3/Gemfile
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://github.com/mastodon/mastodon/blob/v4.7.3/package.json
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://docs.joinmastodon.org/admin/install/
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://docs.joinmastodon.org/admin/install/
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://joinmastodon.org
    checkedAt: 2026-10-19
  - field: maintainerType
    url: https://joinmastodon.org/about
    checkedAt: 2026-10-19
  - field: hqCountry
    url: https://joinmastodon.org/about
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://github.com/mastodon/mastodon/releases
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://github.com/mastodon/mastodon/releases
    checkedAt: 2026-10-19
  - field: contributors
    url: https://github.com/mastodon/mastodon
    checkedAt: 2026-10-19
figure:
  emoji: 💬
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: Ruby · Community
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Mastodon is a decentralized social network server: each installation federates microblogging accounts with other servers in the fediverse. The install guide builds it from source and sets it up as systemd services, so it needs a host where processes keep running, with PostgreSQL and Redis beside it. Mastodon GmbH in Berlin maintains it.

## Worth knowing

The about page says the project lost its non-profit status in Germany and that the team began moving it to a foundation in 2025.
