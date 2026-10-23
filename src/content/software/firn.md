---
id: firn
name: firn
urls:
  repository: https://github.com/teesloane/firn
category:
  - ssg
description: Static site generator written in Rust that renders folders of Org Mode files to HTML.
status: stub
maintainerType: individual
firstRelease: 2020
language: rust
runtime:
  - binary
hosting:
  - static
contentStore:
  - flat-file
templating: tera
runsAs:
  - local
  - static
renderingModes:
  - static
installMethod: binary download
licenseModel: open-source
license: EPL-1.0
currentMajor: "0"
latestReleaseDate: 2022-03-29
githubStargazers: 331
contributors: 9
social:
  discord: https://discord.gg/TbgKxYb
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: status
    url: https://theiceshelf.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/teesloane/firn
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/teesloane/firn/releases
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/teesloane/firn/master/README.org
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/teesloane/firn
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/teesloane/firn/master/README.org
    checkedAt: 2026-10-23
  - field: templating
    url: https://raw.githubusercontent.com/teesloane/firn/master/README.org
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://raw.githubusercontent.com/teesloane/firn/master/README.org
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/teesloane/firn/master/README.org
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/teesloane/firn/master/README.org
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/teesloane/firn/master/README.org
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/teesloane/firn/master/README.org
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/teesloane/firn
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/teesloane/firn/master/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/teesloane/firn/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/teesloane/firn/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/teesloane/firn
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/teesloane/firn/contributors?per_page=1
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: Rust · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

firn is a static site generator for Org Mode files, written in Rust. Running the binary on a directory of Org files reads them recursively, parses them, collects links, tags and logbooks, and renders HTML through the Tera template engine. The README describes it as a drop-in way to create a site from an existing folder of Org files, and gives `firn new`, `firn serve` and `firn build` as the commands. It is installed by downloading the binary from the GitHub releases page.

## Worth knowing

The documentation address the README links now shows an unrelated site, so the project has no site on record and the record is a stub.
