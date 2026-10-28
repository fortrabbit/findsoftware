---
id: docksal
name: Docksal
urls:
  home: https://docksal.io
  repository: https://github.com/docksal/docksal
  docs: https://docs.docksal.io
category:
  - dev-tool
description: Command-line tool and Docker Compose stacks that set up local web development environments on macOS, Windows and Linux.
status: active
maintainer: Docksal
firstRelease: 2016
databases:
  - mysql
runsAs:
  - local
installMethod: install script (bash <(curl -fsSL https://get.docksal.io))
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2024-05-24
githubStargazers: 721
contributors: 76
social:
  x: https://twitter.com/docksalio
  youtube: https://www.youtube.com/docksal
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://docksal.io/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/docksal/docksal
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/docksal/docksal/blob/develop/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/docksal/docksal/develop/LICENSE
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/docksal/docksal/blob/develop/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://docksal.io/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.docksal.io/getting-started/setup/
    checkedAt: 2026-10-28
  - field: databases
    url: https://docs.docksal.io/stack/images-versions/
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/docksal/docksal/develop/LICENSE
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/docksal/docksal/develop/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/docksal/docksal/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/docksal/docksal/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/docksal/docksal/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/docksal/docksal
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/docksal/docksal/contributors
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

Docksal is a command-line tool, `fin`, that sets up a local web development environment from Docker Compose stacks, with a web server, a database and the tools a project names. The [install guide](https://docs.docksal.io/getting-started/setup/) installs it with a script that runs on macOS, Linux and Windows, and the project's own [documentation](https://docs.docksal.io) covers the services, the custom commands and the stock images. The project's README lists boilerplates for Drupal, WordPress, Laravel and other systems, which `fin project create` uses to build a starting project.

Docksal is maintained by its own team under the MIT license.

## Worth knowing

On Windows, the install guide asks for WSL 1 and says that WSL 2 is not supported by Docksal. On macOS and Windows the containers run through Docker Desktop or VirtualBox, so the host needs one of them.
