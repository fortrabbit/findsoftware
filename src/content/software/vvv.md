---
id: vvv
name: VVV
urls:
  home: https://varyingvagrantvagrants.org
  repository: https://github.com/Varying-Vagrant-Vagrants/VVV
  docs: https://varyingvagrantvagrants.org/docs/en-US/
category:
  - dev-tool
description: Local development environment for WordPress and PHP applications, run as a Vagrant virtual machine.
status: active
maintainer: Jeremy Felt
firstRelease: 2012
databases:
  - mariadb
runsAs:
  - local
installMethod: git clone, then vagrant plugin install --local and vagrant up --provision
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2025-05-21
githubStargazers: 4524
contributors: 143
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://varyingvagrantvagrants.org/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/Varying-Vagrant-Vagrants/VVV
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/Varying-Vagrant-Vagrants/VVV/develop/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://varyingvagrantvagrants.org/docs/en-US/governance/
    checkedAt: 2026-10-28
  - field: category
    url: https://varyingvagrantvagrants.org/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/Varying-Vagrant-Vagrants/VVV/develop/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/Varying-Vagrant-Vagrants/VVV/develop/README.md
    checkedAt: 2026-10-28
  - field: databases
    url: https://varyingvagrantvagrants.org/docs/en-US/installed-packages/
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/Varying-Vagrant-Vagrants/VVV
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/Varying-Vagrant-Vagrants/VVV/develop/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://varyingvagrantvagrants.org/docs/en-US/governance/
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/Varying-Vagrant-Vagrants/VVV/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/Varying-Vagrant-Vagrants/VVV/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/Varying-Vagrant-Vagrants/VVV
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/Varying-Vagrant-Vagrants/VVV/contributors?per_page=1
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

VVV is a local development environment for WordPress and PHP applications, powered by Vagrant. Developers clone the repository, install Vagrant and a virtual machine provider, and start the machine with vagrant up and the provision flag. Its default stack includes MariaDB and phpMyAdmin.

## Worth knowing

The project began as a creation of the 10up agency and became a community project in 2014. The governance page names the current project lead.

Vagrant and git are required, plus a provider: VirtualBox, Parallels Pro, Hyper-V or Docker. On Windows with Docker installed, Hyper-V replaces VirtualBox.
