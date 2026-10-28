---
id: docker4drupal
name: Docker4Drupal
urls:
  home: https://wodby.com/docker4drupal
  repository: https://github.com/wodby/docker4drupal
  docs: https://wodby.com/docs/1.0/stacks/drupal/local
category:
  - dev-tool
description: Docker Compose stack of container images for running a local Drupal development environment on Linux, macOS and Windows.
status: active
maintainer: Wodby Inc.
maintainerType: company
firstRelease: 2016
databases:
  - mariadb
  - postgres
runsAs:
  - local
installMethod: git clone of the repository at its latest stable tag
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-10-24
githubStargazers: 1265
contributors: 43
social:
  x: https://x.com/wodbycloud
  discord: https://discord.wodby.com/wodbycloud
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://wodby.com/docker4drupal
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/wodby/docker4drupal
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/wodby/docker4drupal/blob/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://wodby.com/terms
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/wodby/docker4drupal/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/wodby/docker4drupal/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://wodby.com/docs/1.0/stacks/drupal/local
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://wodby.com/docs/1.0/stacks/drupal/local
    checkedAt: 2026-10-28
  - field: databases
    url: https://github.com/wodby/docker4drupal/blob/master/README.md
    checkedAt: 2026-10-28
  - field: databases
    url: https://github.com/wodby/docker4drupal/blob/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/wodby/docker4drupal/blob/master/README.md
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/wodby/docker4drupal/blob/master/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/wodby/docker4drupal/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/wodby/docker4drupal/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/wodby/docker4drupal/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/wodby/docker4drupal
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/wodby/docker4drupal/contributors
    checkedAt: 2026-10-28
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
---

Docker4Drupal is a set of Docker Compose files and container images that start a Drupal development environment on the developer's own machine, on Linux, macOS or Windows. The [local setup guide](https://wodby.com/docs/1.0/stacks/drupal/local) describes two ways to get it: clone the repository at its latest stable tag, or download and unpack the archive from the latest release. Docker must be installed first.

The stack's containers cover a web server, PHP, a MariaDB or PostgreSQL database and supporting services, and it can run either Drupal CMS or vanilla Drupal. The images are maintained by Wodby.

## Worth knowing

The stack is for local work. The README points to a hosted Drupal stack on Wodby for deployment to a server, a separate offering with its own terms.
