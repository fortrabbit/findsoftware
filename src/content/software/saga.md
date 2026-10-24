---
id: saga
name: Saga
urls:
  home: https://getsaga.dev
  repository: https://github.com/loopwerk/Saga
  docs: https://getsaga.dev/docs/
  plugins: https://github.com/topics/saga-plugin
category:
  - ssg
description: Static site generator in Swift whose site pipeline is written as Swift code.
status: active
maintainer: Loopwerk
firstRelease: 2021
runtime:
  - binary
hosting:
  - static
templating: swim
i18n: built-in i18n support
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: Swift Package Manager dependency
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-22
githubStargazers: 135
contributors: 4
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://getsaga.dev/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/loopwerk/Saga
    checkedAt: 2026-10-23
  - field: urls
    url: https://getsaga.dev/docs/installation/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/loopwerk/Saga/main/LICENSE
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/loopwerk/Saga/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://getsaga.dev/docs/installation/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://getsaga.dev/docs/installation/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://getsaga.dev/docs/installation/
    checkedAt: 2026-10-23
  - field: templating
    url: https://getsaga.dev/docs/installation/
    checkedAt: 2026-10-23
  - field: i18n
    url: https://raw.githubusercontent.com/loopwerk/Saga/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://getsaga.dev/docs/deploying/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://getsaga.dev/docs/deploying/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://getsaga.dev/docs/installation/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/loopwerk/Saga
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/loopwerk/Saga/main/LICENSE
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/loopwerk/Saga/blob/main/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/loopwerk/Saga/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/loopwerk/Saga/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/loopwerk/Saga/releases/latest
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/loopwerk/Saga
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/loopwerk/Saga/contributors?per_page=1
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: SSG
ai: authored
---

Saga is a static site generator written in Swift, in which the site pipeline is Swift code rather than a configuration file. The [installation guide](https://getsaga.dev/docs/installation/) adds Saga as a Swift Package Manager dependency, and the `saga` command line tool can be installed with Homebrew. `saga dev` builds the site and starts a development server.

The [deployment guide](https://getsaga.dev/docs/deploying/) describes the output as a pure static website, written to a `deploy` folder by default, that can be published to a static host. Templates use Swim, and the README says commercial support is available from Loopwerk.

## Worth knowing

Building a site needs a Swift toolchain. The published site is static files, so the live site needs no Swift.
