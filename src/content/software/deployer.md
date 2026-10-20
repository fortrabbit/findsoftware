---
id: deployer
name: Deployer
urls:
  home: https://deployer.org
  repository: https://github.com/deployphp/deployer
  docs: https://deployer.org/docs/8.x/getting-started
category:
  - dev-tool
description: PHP deployment tool that runs deploy tasks on servers over SSH, with recipes for popular PHP frameworks and CMSs.
status: active
maintainer: deployphp (GitHub organization)
maintainerType: community
language: php
runtime:
  - php
runtimeMin: php 8.3
runsAs:
  - local
installMethod: composer global require deployer/deployer
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-05-18
packagistDownloads: 29661128
contributors: 479
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: urls
    url: https://deployer.org/
    checkedAt: 2026-10-19
  - field: urls
    url: https://api.github.com/repos/deployphp/deployer
    checkedAt: 2026-10-19
  - field: urls
    url: https://deployer.org/docs/8.x/getting-started
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://api.github.com/repos/deployphp/deployer
    checkedAt: 2026-10-19
  - field: maintainerType
    url: https://api.github.com/repos/deployphp/deployer
    checkedAt: 2026-10-19
  - field: category
    url: https://deployer.org/
    checkedAt: 2026-10-19
  - field: language
    url: https://api.github.com/repos/deployphp/deployer
    checkedAt: 2026-10-19
  - field: runtime
    url: https://repo.packagist.org/p2/deployer/deployer.json
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://repo.packagist.org/p2/deployer/deployer.json
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://deployer.org/docs/8.x/installation
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://deployer.org/docs/8.x/installation
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://deployer.org/docs/8.x/installation
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://deployer.org/docs/8.x/installation
    checkedAt: 2026-10-19
  - field: license
    url: https://api.github.com/repos/deployphp/deployer
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://api.github.com/repos/deployphp/deployer
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://repo.packagist.org/p2/deployer/deployer.json
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://api.github.com/repos/deployphp/deployer/releases/latest
    checkedAt: 2026-10-19
  - field: contributors
    url: https://api.github.com/repos/deployphp/deployer/contributors
    checkedAt: 2026-10-19
  - field: packagistDownloads
    url: https://packagist.org/packages/deployer/deployer.json
    checkedAt: 2026-10-19
  - field: packagistDownloads
    url: https://packagist.org/packages/deployer/deployer.json
    checkedAt: 2026-10-19
figure:
  emoji: 🧹
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: PHP · Dev tool
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
npmWeeklyDownloads: null
---

Deployer is a PHP command-line tool that a developer or a CI job runs to release code to servers over SSH. A `deploy.php` file sets the SSH user, the deploy path and the tasks, and the default layout keeps each release in its own folder with a `current` symlink. Recipes add tasks for frameworks and CMSs, and a provision recipe installs the server stack on Ubuntu.

## Worth knowing

Deployer runs on the machine that starts the deployment, so the live server needs no Deployer process. Provisioning needs root login with an SSH key, which recent Ubuntu images disable by default, according to the [getting started guide](https://deployer.org/docs/8.x/getting-started).
