---
id: nift
name: Nift
urls:
  home: https://nift.dev/
  repository: https://github.com/nift-dev/nift
  docs: https://nift.dev/docs.html
category:
  - ssg
description: Dependency-aware command-line build tool and template language that generates websites from HTML, content and data files.
status: active
maintainer: Nicholas Ham
firstRelease: 2026
language: cpp
hosting:
  - static
contentStore:
  - flat-file
templating: Nift template language
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: shell install script (curl)
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-10-15
githubStargazers: 1
contributors: 4
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://nift.dev/
    checkedAt: 2026-10-23
  - field: urls
    url: https://nift.dev/docs/installing.html
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/nift-dev/nift
    checkedAt: 2026-10-23
  - field: urls
    url: https://nift.dev/docs.html
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/nift-dev/nift/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/nift-dev/nift
    checkedAt: 2026-10-23
  - field: category
    url: https://nift.dev/about.html
    checkedAt: 2026-10-23
  - field: templating
    url: https://nift.dev/about.html
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://nift.dev/about.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://nift.dev/docs/installing.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://nift.dev/docs/installing.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://nift.dev/docs/installing.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://nift.dev/docs/installing.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://nift.dev/docs/installing.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://nift.dev/docs/installing.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://nift.dev/docs/installing.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://nift.dev/docs/installing.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://nift.dev/docs/hosting.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://nift.dev/privacy.html
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://nift.dev/docs/hosting.html
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/nift-dev/nift
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/nift-dev/nift/main/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/nift-dev/nift/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/nift-dev/nift/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/nift-dev/nift
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/nift-dev/nift/contributors
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/nift-dev/nift/releases
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Nift is a command-line build tool for websites with its own template language. It is a native C++ program that the about page calls a dependency-aware website build system. The about page also presents a native scripting language and an interactive shell.

The output is ordinary files in a public directory. The [deployment guide](https://nift.dev/docs/hosting.html) says Nift does not need to run on the production server when the site is built before deployment, and it names preset targets for several hosting platforms.

## Worth knowing

Nift writes files and does not run a server, so anything that needs a process on the live site comes from the rest of the stack. The project runs from the nift-dev repository; the earlier nifty-site-manager repository is not part of this record.
