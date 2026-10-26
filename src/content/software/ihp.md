---
id: ihp
name: IHP
urls:
  home: https://ihp.digitallyinduced.com/
  repository: https://github.com/digitallyinduced/ihp
  docs: https://ihp.digitallyinduced.com/Guide/
  pricing: https://ihp.digitallyinduced.com/Pricing
category:
  - framework
description: Haskell web framework that generates records and routes from a schema file and checks SQL and HTML templates at compile time.
status: active
maintainer: digitally induced GmbH
maintainerType: company
firstRelease: 2020
hqCountry: DE
language: haskell
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
templating: hsx
runsAs:
  - always-on
renderingModes:
  - server
installMethod: nix profile install nixpkgs#ihp-new
licenseModel: open-core
license: MIT, The MIT License (MIT)
currentMajor: "1"
latestReleaseDate: 2026-06-21
githubStargazers: 5362
contributors: 107
social:
  x: https://twitter.com/digitallyinduce
  forum: https://discuss.ihp.digitallyinduced.com/
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://ihp.digitallyinduced.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/digitallyinduced/ihp
    checkedAt: 2026-10-26
  - field: urls
    url: https://ihp.digitallyinduced.com/Guide/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/digitallyinduced/ihp/master/LICENSE
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.digitallyinduced.com/imprint.html
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://ihp.digitallyinduced.com/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/digitallyinduced/ihp
    checkedAt: 2026-10-26
  - field: runtime
    url: https://ihp.digitallyinduced.com/
    checkedAt: 2026-10-26
  - field: category
    url: https://ihp.digitallyinduced.com/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://ihp.digitallyinduced.com/Guide/installation.html
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/digitallyinduced/ihp
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/digitallyinduced/ihp/master/LICENSE
    checkedAt: 2026-10-26
  - field: urls
    url: https://ihp.digitallyinduced.com/Pricing
    checkedAt: 2026-10-26
  - field: databases
    url: https://ihp.digitallyinduced.com/
    checkedAt: 2026-10-26
  - field: templating
    url: https://ihp.digitallyinduced.com/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://ihp.digitallyinduced.com/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://ihp.digitallyinduced.com/Guide/architecture.html
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/digitallyinduced/ihp/releases
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/digitallyinduced/ihp/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/digitallyinduced/ihp/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/digitallyinduced/ihp
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/digitallyinduced/ihp/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

IHP is a web framework written in Haskell. A schema file is the single source of truth: the framework generates records, ids and enums from it, and checks SQL queries against the project's PostgreSQL database at compile time. Its HTML templating language, HSX, is parsed at compile time too. The framework is installed with the Nix package manager.

The server model is a long-running process that listens on a configured port, so a running IHP app needs a host that keeps a process alive, not one that serves static files. The [deployment guide](https://ihp.digitallyinduced.com/Guide/deployment.html) covers Docker, NixOS, bare metal and AWS EC2. digitally induced GmbH, based in Düsseldorf, Germany, maintains the project.

## Worth knowing

The installation guide requires Nix, supports macOS and Linux, and says native Windows is not supported. The company also sells IHP Pro and IHP Business licenses next to the MIT-licensed framework. The pricing page lists features that the Basic tier does not include, among them Docker support.
