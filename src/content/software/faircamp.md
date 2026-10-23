---
id: faircamp
name: Faircamp
urls:
  home: https://faircamp.org
  repository: https://codeberg.org/simonrepp/faircamp
  docs: https://faircamp.org/docs/
category:
  - ssg
description: Static site generator that builds a website from a folder of audio files, for audio producers.
status: active
maintainer: Simon Repp
maintainerType: individual
firstRelease: 2023
language: rust
runtime:
  - binary
hosting:
  - static
contentStore:
  - flat-file
adminUi: true
i18n: yes
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: binary download
licenseModel: open-source
license: AGPL-3.0-or-later, CC0-1.0
currentMajor: "2"
latestReleaseDate: 2026-10-01
social:
  mastodon: https://post.lurk.org/@freebliss
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://faircamp.org/
    checkedAt: 2026-10-23
  - field: urls
    url: https://codeberg.org/api/v1/repos/simonrepp/faircamp
    checkedAt: 2026-10-23
  - field: urls
    url: https://codeberg.org/simonrepp/faircamp/raw/branch/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://codeberg.org/simonrepp/faircamp/raw/branch/main/Cargo.toml
    checkedAt: 2026-10-23
  - field: language
    url: https://codeberg.org/api/v1/repos/simonrepp/faircamp
    checkedAt: 2026-10-23
  - field: runtime
    url: https://faircamp.org/download.html
    checkedAt: 2026-10-23
  - field: category
    url: https://codeberg.org/simonrepp/faircamp/raw/branch/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://faircamp.org/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://faircamp.org/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://faircamp.org/docs/latest/guide/getting-started/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://faircamp.org/download.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://faircamp.org/download.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://faircamp.org/download.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://codeberg.org/simonrepp/faircamp/raw/tag/2.0.1/BUILD.md
    checkedAt: 2026-10-23
  - field: license
    url: https://codeberg.org/simonrepp/faircamp/raw/branch/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://codeberg.org/simonrepp/faircamp/raw/branch/main/README.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://faircamp.org/
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://codeberg.org/simonrepp/faircamp/raw/branch/main/CHANGELOG.md
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://codeberg.org/api/v1/repos/simonrepp/faircamp/tags
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://codeberg.org/api/v1/repos/simonrepp/faircamp/tags
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://faircamp.org/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://faircamp.org/
    checkedAt: 2026-10-23
  - field: i18n
    url: https://faircamp.org/
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: Rust · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Faircamp is a static site generator for audio producers. It reads a folder hierarchy of audio files and builds a complete website presenting them, and the finished site needs no database and no programming. It comes as a desktop application with a graphical editor and as a command-line edition, and the text files behind a site can also be edited by hand.

The build writes the site into a directory inside the site directory, and the [going-online guide](https://faircamp.org/docs/latest/guide/going-online/) describes uploading its contents to a web host over FTP or SSH. Simon Repp maintains the project, which is hosted on Codeberg.

## Worth knowing

The software is AGPL-3.0-or-later and the documentation is CC0-1.0. The project's ALTERNATIVES.md lists other tools for the same job.
