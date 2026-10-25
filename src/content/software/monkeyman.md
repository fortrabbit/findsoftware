---
id: monkeyman
name: Monkeyman
urls:
  repository: https://github.com/wspringer/monkeyman
  docs: https://github.com/wspringer/monkeyman/blob/master/README.md
category:
  - ssg
description: Scala static website generator that builds pages from HAML, Markdown and other layout and content files.
status: stub
maintainerType: individual
language: scala
runtime:
  - jvm
contentStore:
  - flat-file
templating: haml, jade, mustache, ssp
runsAs:
  - local
renderingModes:
  - static
installMethod: download the jar from the wiki Releases page and run it with java -jar
licenseModel: open-source
license: GPL-2.0
githubStargazers: 51
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/wspringer/monkeyman
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/wspringer/monkeyman/blob/master/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/wspringer/monkeyman
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/wspringer/monkeyman/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/wspringer/monkeyman/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/wspringer/monkeyman/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/wspringer/monkeyman/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/wspringer/monkeyman/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/wspringer/monkeyman
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/wspringer/monkeyman/master/COPYING
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/wspringer/monkeyman/contributors
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/wspringer/monkeyman
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/wspringer/monkeyman/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/wspringer/monkeyman/blob/master/README.md
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Monkeyman is a Scala static web site generator that builds a site from source and layout directories and serves a live preview while files change. Layouts are written in HAML, Jade, SSP or Mustache, and content files carry YAML front matter.

The program is a jar that the README says to download and start with java -jar. Its server command gives the preview, and its generate command writes the static build into a target directory.

## Worth knowing

The repository has no release and no tag; the README points to the project wiki for downloads. The README says Monkeyman may no longer be maintained if another tool with the same feature set appears.
