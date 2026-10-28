---
id: ansistrano
name: Ansistrano
urls:
  home: https://ansistrano.com
  repository: https://github.com/ansistrano/deploy
  docs: https://github.com/ansistrano/deploy/tree/master/docs
category:
  - dev-tool
description: Ansible roles that deploy applications with a Capistrano-style workflow, with a companion role for rollback.
status: active
maintainer: Carlos Buenosvinos
maintainerType: individual
firstRelease: 2015
runsAs:
  - local
installMethod: ansible-galaxy install ansistrano.deploy ansistrano.rollback
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-03-24
githubStargazers: 2409
contributors: 92
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://ansistrano.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/ansistrano/deploy
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/ansistrano/deploy/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/ansistrano/deploy/master/LICENSE
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://raw.githubusercontent.com/ansistrano/deploy/master/LICENSE
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/ansistrano/deploy/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/ansistrano/deploy/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/ansistrano/deploy/blob/master/docs/getting-started.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/ansistrano/deploy
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/ansistrano/deploy/master/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/ansistrano/deploy/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/ansistrano/deploy/tags
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/ansistrano/deploy/tags
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/ansistrano/deploy
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/ansistrano/deploy/contributors?per_page=1
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

Ansistrano is a pair of Ansible roles, ansistrano.deploy and ansistrano.rollback, that deploy an application in the Capistrano style. Each deployment is set up as a new release folder on the target host, the current link is moved to it, and older releases are removed down to a configured number.

The rollback role moves the current link back to an earlier release. The deploy role takes its code from rsync, rsync_direct, git, svn, hg, HTTP download, S3 or Google Cloud Storage. The roles run from the machine that holds the Ansible inventory.
