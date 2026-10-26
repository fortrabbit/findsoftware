---
id: scotty
name: Scotty
urls:
  repository: https://github.com/scotty-web/scotty
  docs: https://github.com/scotty-web/scotty/wiki
category:
  - framework
description: Haskell web framework inspired by Ruby's Sinatra, for defining RESTful routes and responses on WAI and Warp.
status: active
maintainer: The Scotty maintainers
maintainerType: community
firstRelease: 2012
language: haskell
runtime:
  - binary
hosting:
  - binary
basedOn:
  - warp
templating: none, template-language agnostic
runsAs:
  - always-on
installMethod: runghc examples/basic.hs, or stack exec
licenseModel: open-source
license: BSD-3-Clause, BSD3
currentMajor: "0"
latestReleaseDate: 2026-01-07
githubStargazers: 1776
contributors: 67
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/scotty-web/scotty
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/scotty-web/scotty/blob/master/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/scotty-web/scotty/master/scotty.cabal
    checkedAt: 2026-10-26
  - field: maintainerType
    url: https://raw.githubusercontent.com/scotty-web/scotty/master/scotty.cabal
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/scotty-web/scotty
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/scotty-web/scotty/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/scotty-web/scotty/blob/master/README.md
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://github.com/scotty-web/scotty/blob/master/README.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://github.com/scotty-web/scotty/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/scotty-web/scotty/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/scotty-web/scotty/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/scotty-web/scotty
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/scotty-web/scotty/master/scotty.cabal
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/scotty-web/scotty/master/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://hackage.haskell.org/package/scotty-0.0.1
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/scotty-web/scotty/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://hackage.haskell.org/package/scotty-0.30
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/scotty-web/scotty
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/scotty-web/scotty/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Scotty is a Haskell web framework inspired by Ruby's Sinatra. It is built on WAI, the web application interface, and runs on the Warp web server. A page is defined by an HTTP verb, a URL pattern and the content it returns, and the project says any template language will do, since anything that returns a Text value works.

The package is published on Hackage, and its cabal file names "The Scotty maintainers" as the maintainer. The [README](https://github.com/scotty-web/scotty/blob/master/README.md) runs its examples with runghc or stack, and each example starts a server that runs until it is stopped. Tutorials and related projects are collected in the [Scotty wiki](https://github.com/scotty-web/scotty/wiki).
