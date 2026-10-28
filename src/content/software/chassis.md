---
id: chassis
name: Chassis
urls:
  home: https://chassis.io/
  repository: https://github.com/Chassis/Chassis
  docs: https://docs.chassis.io/en/latest/
category:
  - dev-tool
description: Vagrant-based local virtual server, installed from a Git repository, that runs a WordPress site with PHP, nginx and MySQL on the developer's machine.
status: active
maintainer: Ryan McCue & Bronson Quick
firstRelease: 2019
language: php
runsAs:
  - local
installMethod: git clone
licenseModel: open-source
license: LGPL-3.0
currentMajor: "5"
latestReleaseDate: 2024-03-23
githubStargazers: 616
contributors: 36
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://chassis.io/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/Chassis/Chassis
    checkedAt: 2026-10-28
  - field: urls
    url: https://docs.chassis.io/en/latest/quickstart/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://docs.chassis.io/en/latest/quickstart/
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/Chassis/Chassis/blob/main/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/Chassis/Chassis
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://docs.chassis.io/en/latest/quickstart/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.chassis.io/en/latest/quickstart/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.chassis.io/en/latest/quickstart/
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/Chassis/Chassis
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://chassis.io/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/Chassis/Chassis/releases/tags/2.2
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/Chassis/Chassis/releases/tag/5.4.2
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://github.com/Chassis/Chassis/releases/tag/5.4.2
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/Chassis/Chassis
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/Chassis/Chassis/contributors?per_page=1
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
npmWeeklyDownloads: null
---

Chassis is a virtual server for a WordPress site, built with Vagrant and run on the developer's machine. A project is set up by cloning the Chassis repository with git and starting its virtual machine with `vagrant up`, after which the site is served at a local address. The README states that both subdomain and subdirectory multisite work out of the box. The project's documentation is hosted at docs.chassis.io.

## Worth knowing

The quickstart requires VirtualBox and Vagrant to be installed on macOS, Windows or Linux, so the tool needs those two programs before the virtual machine can start.
