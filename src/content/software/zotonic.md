---
id: zotonic
name: Zotonic
urls:
  home: https://zotonic.com/
  repository: https://github.com/zotonic/zotonic
  docs: https://zotonic.com/developer-guide
category:
  - cms
  - framework
description: Open-source web framework and content management system written in Erlang.
status: active
maintainer: the Zotonic team
maintainerType: community
firstRelease: 2009
language: erlang
runtime:
  - beam
hosting:
  - elixir
runtimeMin: beam 19
contentStore:
  - database
databases:
  - postgres
adminUi: true
i18n: yes
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-09-01
githubStargazers: 850
contributors: 79
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://zotonic.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://zotonic.com/developer-guide
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/zotonic/zotonic
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://zotonic.com/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://zotonic.com/docs/1643/release-notes
    checkedAt: 2026-10-26
  - field: category
    url: https://zotonic.com/
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/zotonic/zotonic/blob/master/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/zotonic/zotonic
    checkedAt: 2026-10-26
  - field: runtime
    url: https://zotonic.com/reference/installation-requirements
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://zotonic.com/docs/1526/getting-started
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://zotonic.com/download
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://zotonic.com/docs/1526/getting-started
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://zotonic.com/docs/1987/run-zotonic-as-a-service
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://zotonic.com/reference/installation-requirements
    checkedAt: 2026-10-26
  - field: databases
    url: https://zotonic.com/reference/installation-requirements
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://github.com/zotonic/zotonic/blob/master/README.md
    checkedAt: 2026-10-26
  - field: i18n
    url: https://zotonic.com/docs/1410/mod_translation
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://github.com/zotonic/zotonic/blob/0.94.1/rebar.config
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/zotonic/zotonic/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/zotonic/zotonic/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/zotonic/zotonic/blob/master/README.md
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/zotonic/zotonic/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/zotonic/zotonic/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/zotonic/zotonic
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/zotonic/zotonic/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Zotonic is a content management system and web framework built on Erlang. Content is stored in PostgreSQL, and its backend offers a way to manage content. One installation runs several sites through virtual hosting, a translation module handles multiple languages, and an import module migrates a WordPress export into a site. Access to content is governed by rules between user groups and content groups.

A development checkout comes from the git repository, and a Docker or Podman image and a Nix shell are the other routes, as the [getting-started guide](https://zotonic.com/docs/1526/getting-started) describes.

## Worth knowing

Zotonic runs as a foreground process under a host service manager, so the host has to keep an Erlang process running. It also needs a PostgreSQL database, so a host that only serves static files cannot run it. On Windows the requirements page points to WSL or a container.
