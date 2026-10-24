---
id: doctave
name: Doctave
urls:
  home: https://cli.doctave.com
  repository: https://github.com/Doctave/doctave
  docs: https://cli.doctave.com
category:
  - ssg
description: Documentation site generator that converts Markdown files into a developer documentation site, distributed as a Rust binary.
status: stub
maintainer: Doctave
firstRelease: 2020
language: rust
runtime:
  - binary
hosting:
  - static
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: binary download
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2022-04-02
githubStargazers: 670
contributors: 3
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://cli.doctave.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/Doctave/doctave
    checkedAt: 2026-10-23
  - field: urls
    url: https://cli.doctave.com/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/Doctave/doctave
    checkedAt: 2026-10-23
  - field: category
    url: https://cli.doctave.com/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://cli.doctave.com/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://cli.doctave.com/deployment
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/Doctave/doctave
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://cli.doctave.com/
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/Doctave/doctave/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/Doctave/doctave/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/Doctave/doctave/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/Doctave/doctave
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/Doctave/doctave/contributors
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/Doctave/doctave/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://cli.doctave.com/installing
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://cli.doctave.com/installing
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://cli.doctave.com/installing
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://cli.doctave.com/deployment
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/Doctave/doctave/blob/master/README.md
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Doctave is a command-line tool that converts a folder of Markdown files into a documentation site. It is written in Rust and distributed as a single binary, installed from precompiled downloads, through Homebrew, or with Cargo from the GitHub repository. `doctave serve` previews the site locally, and `doctave build --release` writes it as a static bundle into the `site` directory.

The open source tool is built and maintained by Doctave.com.

## Worth knowing

The README says Doctave is not a generic static site generator and only generates documentation sites from Markdown. The [deployment guide](https://cli.doctave.com/deployment) walks through publishing on GitHub Pages.
