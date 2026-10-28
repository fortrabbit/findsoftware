---
id: coolify
name: Coolify
urls:
  home: https://coolify.io
  repository: https://github.com/coollabsio/coolify
  docs: https://coolify.io/docs
  pricing: https://coolify.io/pricing
category:
  - dev-tool
description: Open-source, self-hostable platform that deploys applications, databases and services to Docker containers on the user's own servers.
status: active
maintainer: coolLabs Solutions Kft.
maintainerType: company
firstRelease: 2021
hqCountry: HU
language: php
runsAs:
  - always-on
installMethod: install script
licenseModel: open-source
license: Apache-2.0
currentMajor: "4"
latestReleaseDate: 2026-10-28
githubStargazers: 65132
contributors: 412
social:
  discord: https://coollabs.io/discord
  forum: https://github.com/coollabsio/coolify/discussions
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: name
    url: https://coolify.io
    checkedAt: 2026-10-28
  - field: urls
    url: https://coolify.io
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/coollabsio/coolify
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/coollabsio/coolify/main/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://coollabs.io/terms-of-service
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://coollabs.io/terms-of-service
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://coollabs.io/terms-of-service
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/coollabsio/coolify/releases
    checkedAt: 2026-10-28
  - field: category
    url: https://coolify.io/docs/get-started/introduction
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/coollabsio/coolify
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://coolify.io/docs/installation
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://coolify.io/docs/installation
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/coollabsio/coolify
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/coollabsio/coolify/main/LICENSE
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/coollabsio/coolify/main/README.md
    checkedAt: 2026-10-28
  - field: urls
    url: https://coolify.io/pricing
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/coollabsio/coolify/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/coollabsio/coolify/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/coollabsio/coolify
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/coollabsio/coolify/contributors
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
npmWeeklyDownloads: null
---

Coolify is a self-hostable platform for deploying applications, databases and services to servers the user controls. The instance connects to each server over SSH, prepares it to run Docker workloads, and coordinates builds, deployments, domains and HTTPS. It is written in PHP and installed with a single install script. The resources it deploys run as standard Docker containers on the connected servers.

Coolify Cloud runs the instance for the user, who still supplies the servers. The homepage describes roles for team members and sign-in through several identity providers.

## Worth knowing

The [get-started guide](https://coolify.io/docs/get-started/introduction) says that running resources keep running when the instance is unavailable, but automation and dashboard control stop. Self-hosting makes the user responsible for the instance's updates, backups and recovery.
