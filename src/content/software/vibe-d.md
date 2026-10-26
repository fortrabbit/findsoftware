---
id: vibe-d
name: vibe.d
urls:
  home: https://vibed.org
  repository: https://github.com/vibe-d/vibe.d
  docs: https://vibed.org/docs
  plugins: https://code.dlang.org/
category:
  - framework
description: Web framework and asynchronous I/O library for building HTTP servers, REST APIs and web applications in D.
status: active
maintainer: rejectedsoftware e.K.
firstRelease: 2012
language: other
runtime:
  - binary
hosting:
  - binary
databases:
  - mongodb
headlessApi:
  - rest
templating: diet
i18n: yes
runsAs:
  - always-on
renderingModes:
  - server
installMethod: DUB (dub init -t vibe.d)
licenseModel: open-source
license: MIT, MIT public license
currentMajor: "0"
latestReleaseDate: 2025-12-17
githubStargazers: 1223
contributors: 168
social:
  forum: https://forum.rejectedsoftware.com/groups/rejectedsoftware.vibed/
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: name
    url: https://vibed.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://vibed.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/vibe-d/vibe.d
    checkedAt: 2026-10-26
  - field: urls
    url: https://vibed.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://vibed.org/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://vibed.org/about
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://github.com/vibe-d/vibe.d/blob/master/CHANGELOG.md
    checkedAt: 2026-10-26
  - field: category
    url: https://vibed.org/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/vibe-d/vibe.d
    checkedAt: 2026-10-26
  - field: runtime
    url: https://vibed.org/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://vibed.org/docs
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://vibed.org/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://vibed.org/docs
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://vibed.org/download
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://vibed.org/download
    checkedAt: 2026-10-26
  - field: templating
    url: https://vibed.org/docs
    checkedAt: 2026-10-26
  - field: i18n
    url: https://vibed.org/docs
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://vibed.org/docs
    checkedAt: 2026-10-26
  - field: databases
    url: https://vibed.org/docs
    checkedAt: 2026-10-26
  - field: databases
    url: https://vibed.org/docs
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/vibe-d/vibe.d
    checkedAt: 2026-10-26
  - field: license
    url: https://vibed.org/about
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://vibed.org/about
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/vibe-d/vibe.d/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/vibe-d/vibe.d/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/vibe-d/vibe.d
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/vibe-d/vibe.d/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

vibe.d is a web framework for D, with an asynchronous I/O library underneath it. It provides an HTTP and HTTPS stack with client, server and proxy implementations and an interface generator for JSON and REST. Web pages can be written as Diet templates, and localization uses gettext-compatible translation files. Projects are created, built and run with DUB, and running one starts an HTTP server on a port. A native MongoDB driver and a Redis client ship with it.

## Worth knowing

Authentication covers HTTP Basic and HTTP Digest; higher-level schemes such as OAuth are left to extension libraries. The README states its compiler support as a rolling window of recent DMD releases and the LDC releases that implement the same frontend, so a fixed minimum compiler version is not given.
