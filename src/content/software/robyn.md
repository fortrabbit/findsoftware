---
id: robyn
name: Robyn
urls:
  home: https://robyn.tech
  repository: https://github.com/sparckles/Robyn
  docs: https://robyn.tech/documentation
category:
  - framework
description: Python web framework with an async API and a Rust runtime.
status: active
maintainer: Sanskar Jethi
firstRelease: 2021
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
databases:
  - sqlite
  - postgres
  - mongodb
templating: jinja2
runsAs:
  - always-on
installMethod: pip
licenseModel: open-source
license: BSD-2-Clause
currentMajor: "0"
latestReleaseDate: 2026-06-25
githubStargazers: 7426
contributors: 87
social:
  x: https://twitter.com/Robyn_oss
  discord: https://discord.gg/rkERZ5eNU8
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://robyn.tech/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/sparckles/Robyn
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/sparckles/Robyn/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/sparckles/Robyn/main/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/sparckles/Robyn/releases
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/sparckles/Robyn
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/sparckles/Robyn/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/sparckles/Robyn/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://github.com/sparckles/Robyn/blob/main/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/sparckles/Robyn/blob/main/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/sparckles/Robyn/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/sparckles/Robyn/blob/main/README.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://github.com/sparckles/Robyn/blob/main/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/sparckles/Robyn
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/sparckles/Robyn/main/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/sparckles/Robyn/main/LICENSE
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/sparckles/Robyn/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/sparckles/Robyn/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/sparckles/Robyn
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/sparckles/Robyn/contributors
    checkedAt: 2026-10-26
  - field: databases
    url: https://robyn.tech/documentation/en/example_app
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Robyn is a Python web framework that merges Python's async capabilities with a Rust runtime, as its [homepage](https://robyn.tech) states. An application is written in Python and starts its own server from code, which then answers requests on the port the code names. Jinja2 templating and Pydantic validation are optional extras of the pip package.

## Worth knowing

The server is a process the application starts itself, so a host has to keep that process running.
