---
id: hummingbird
name: Hummingbird
urls:
  home: https://hummingbird.codes/
  repository: https://github.com/hummingbird-project/hummingbird
  docs: https://docs.hummingbird.codes/2.0/documentation/hummingbird/
category:
  - framework
description: Swift web framework built on SwiftNIO for server-side web applications and APIs.
status: active
maintainer: Hummingbird
firstRelease: 2021
language: swift
runtime:
  - binary
hosting:
  - binary
templating: mustache
runsAs:
  - always-on
installMethod: Swift Package Manager
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-10-13
githubStargazers: 1898
contributors: 40
social:
  bluesky: https://bsky.app/profile/hummingbird.codes
  mastodon: https://mastodon.social/@hummingbird_project
  discord: https://discord.gg/4twfgYqdat
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://hummingbird.codes/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/hummingbird-project/hummingbird
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/hummingbird-project/hummingbird/blob/main/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/hummingbird-project/hummingbird/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://api.github.com/orgs/hummingbird-project
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/hummingbird-project/hummingbird
    checkedAt: 2026-10-26
  - field: runtime
    url: https://hummingbird.codes/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/hummingbird-project/hummingbird/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://hummingbird.codes/features
    checkedAt: 2026-10-26
  - field: templating
    url: https://github.com/hummingbird-project/hummingbird/blob/main/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/hummingbird-project/hummingbird
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/hummingbird-project/hummingbird/main/LICENSE.txt
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/hummingbird-project/hummingbird/releases
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/hummingbird-project/hummingbird/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/hummingbird-project/hummingbird/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/hummingbird-project/hummingbird
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/hummingbird-project/hummingbird/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Hummingbird is a Swift web framework for server-side web applications and APIs. It runs on top of a SwiftNIO-based server implementation and is added to a Swift package through the Swift Package Manager. Its core is minimal, with additional features provided through extensions, one of which is Mustache templating.

## Worth knowing

The project's features page describes the server finishing in-progress requests before going offline, so a deployment needs a host that keeps a process running. The README lists an AWS Lambda integration among the extensions in separate repositories, so a Lambda deployment depends on that extension rather than the core framework.
