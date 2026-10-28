---
id: laradock
name: Laradock
urls:
  home: https://laradock.io
  repository: https://github.com/laradock/laradock
  docs: https://laradock.io/docs/getting-started
category:
  - dev-tool
description: Docker Compose setup and CLI that starts a pre-configured local stack of PHP, web server and service containers for PHP projects.
status: active
maintainer: Mahmoud Zalt
maintainerType: individual
firstRelease: 2016
runsAs:
  - local
installMethod: git clone, then ./laradock start
licenseModel: open-source
license: MIT
currentMajor: "20"
latestReleaseDate: 2026-07-15
githubStargazers: 12678
contributors: 378
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://laradock.io/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/laradock/laradock
    checkedAt: 2026-10-28
  - field: urls
    url: https://laradock.io/docs/getting-started
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/laradock/laradock/master/LICENSE
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://raw.githubusercontent.com/laradock/laradock/master/LICENSE
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/laradock/laradock/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/laradock/laradock/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/laradock/laradock/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/laradock/laradock/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/laradock/laradock/master/LICENSE
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/laradock/laradock/master/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/laradock/laradock/releases?per_page=100
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/laradock/laradock/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/laradock/laradock/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/laradock/laradock
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/laradock/laradock/contributors?per_page=1
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
---

Laradock is a Docker Compose setup for running PHP projects locally. It ships pre-configured containers for a web server, PHP and other services, and a command-line script that starts the stack. Clone the repository into a PHP project and start it with the script, or run Docker Compose directly against the same files.

The stack runs on Linux, macOS and Windows and needs Docker with Compose v2.20 or newer. The project's ship command builds a production image from the stack, which can then run on Kubernetes, Google Cloud Run, AWS ECS, Kamal or a single server. The MIT-licensed project is maintained by Mahmoud Zalt and contributors.
