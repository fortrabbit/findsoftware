---
id: kamal
name: Kamal
urls:
  home: https://kamal-deploy.org
  repository: https://github.com/basecamp/kamal
  docs: https://kamal-deploy.org/docs/installation/
category:
  - dev-tool
description: Command-line tool that deploys web apps packaged as Docker containers to servers over SSH, with zero-downtime switching.
status: active
maintainer: 37signals LLC
maintainerType: company
firstRelease: 2023
hqCountry: US
language: ruby
runtime:
  - ruby
runsAs:
  - local
installMethod: gem install kamal
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-06-18
githubStargazers: 14692
contributors: 167
social:
  discord: https://discord.gg/YgHVT7GCXS
  forum: https://github.com/basecamp/kamal/discussions
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://kamal-deploy.org/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/basecamp/kamal
    checkedAt: 2026-10-28
  - field: urls
    url: https://kamal-deploy.org/docs/installation/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://37signals.com/terms
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://37signals.com/privacy
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/basecamp/kamal
    checkedAt: 2026-10-28
  - field: category
    url: https://kamal-deploy.org/
    checkedAt: 2026-10-28
  - field: runtime
    url: https://kamal-deploy.org/docs/installation/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://kamal-deploy.org/docs/installation/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://kamal-deploy.org/docs/installation/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://kamal-deploy.org/docs/installation/
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/basecamp/kamal
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/basecamp/kamal/blob/main/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/basecamp/kamal/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/basecamp/kamal/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/basecamp/kamal/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/basecamp/kamal
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/basecamp/kamal/contributors
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Kamal deploys web apps that run in Docker containers to servers it reaches over SSH. The command-line tool builds the image, pushes it to a registry, pulls it onto each server and starts a new container. kamal-proxy then routes traffic to the new container once it answers its health check. The project was originally built for Rails apps and works with any web app that can be containerized. It was formerly known as MRSK.

Kamal is installed with gem install kamal, or run from a Docker container when Ruby is not available. The [installation guide](https://kamal-deploy.org/docs/installation/) says that the first setup installs Docker on any server that lacks it, which needs root access over SSH.
