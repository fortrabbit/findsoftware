---
id: hanami
name: Hanami
urls:
  home: https://hanakai.org/hanami
  repository: https://github.com/hanami/hanami
  docs: https://hanakai.org/learn/hanami/v3.0/getting-started
category:
  - framework
description: Ruby web framework for building maintainable apps and APIs, with a dedicated database layer and modular architecture.
status: active
maintainer: Hanami Team
maintainerType: community
firstRelease: 2014
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.1
databases:
  - sqlite
  - mysql
  - postgres
templating: erb
i18n: yes, translation files and locale switching
runsAs:
  - always-on
installMethod: gem install hanami
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-08-21
githubStargazers: 6428
contributors: 164
social:
  bluesky: https://bsky.app/profile/hanakai.org
  mastodon: https://ruby.social/@hanakai
  discord: https://discord.gg/KFCxDmk3JQ
  forum: https://discourse.hanakai.org
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://hanakai.org/hanami
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/hanami/hanami
    checkedAt: 2026-10-26
  - field: urls
    url: https://hanakai.org/learn/hanami/v3.0/getting-started
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/hanami/hanami/main/LICENSE.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/hanami/hanami
    checkedAt: 2026-10-26
  - field: category
    url: https://hanakai.org/hanami
    checkedAt: 2026-10-26
  - field: runtime
    url: https://hanakai.org/learn/hanami/v3.0/getting-started
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://hanakai.org/learn/hanami/v3.0/getting-started
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://hanakai.org/learn/hanami/v3.0/getting-started
    checkedAt: 2026-10-26
  - field: databases
    url: https://hanakai.org/learn/hanami/v3.0/database/configuration
    checkedAt: 2026-10-26
  - field: i18n
    url: https://hanakai.org/learn/hanami/v3.0/i18n
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/hanami/hanami
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/hanami/hanami/main/LICENSE.md
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/hanami/hanami/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/hanami/hanami/releases
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/hanami/hanami/git/refs/tags/v0.1.0
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/hanami/hanami
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/hanami/hanami/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://hanakai.org/learn/hanami/v3.0/cli-commands/server
    checkedAt: 2026-10-26
  - field: templating
    url: https://hanakai.org/learn/hanami/v3.0/views
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Hanami is a Ruby web framework designed to keep code organized and maintainable. Views use ERB templates. It is installed with `gem install hanami`, and its guides are published on the Hanakai site. The default database is SQLite, and the database configuration guide documents MySQL and PostgreSQL as well. The MIT license's copyright line names the Hanami Team, and the community links on the Hanakai site cover a forum, Discord, Mastodon, Bluesky and a newsletter.

## Worth knowing

The Hanami site moved from hanamirb.org to hanakai.org, and the guides now sit under the Hanakai domain. The guides describe `hanami server` as a development server for local use; in production the application is started with Puma, an always-on process.
