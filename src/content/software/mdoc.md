---
id: mdoc
name: mdoc
urls:
  home: https://scalameta.org/mdoc/
  repository: https://github.com/scalameta/mdoc
  docs: https://scalameta.org/mdoc/docs/installation.html
category:
  - ssg
description: Markdown documentation tool for Scala that compiles and evaluates the Scala code blocks in markdown sources.
status: active
maintainer: mdoc developers
maintainerType: community
firstRelease: 2018
language: scala
runtime:
  - jvm
runtimeMin: jvm 11
runsAs:
  - local
installMethod: sbt plugin sbt-mdoc
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-09-03
githubStargazers: 402
contributors: 52
social:
  discord: https://discord.gg/FN9uG7k
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://scalameta.org/mdoc/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/scalameta/mdoc
    checkedAt: 2026-10-23
  - field: urls
    url: https://scalameta.org/mdoc/docs/installation.html
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://scalameta.org/mdoc/
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/scalameta/mdoc/blob/main/readme.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/scalameta/mdoc/blob/main/readme.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/scalameta/mdoc/blob/main/readme.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://scalameta.org/mdoc/docs/installation.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://scalameta.org/mdoc/docs/installation.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://scalameta.org/mdoc/docs/installation.html
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/scalameta/mdoc
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/scalameta/mdoc/blob/main/LICENCE.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/scalameta/mdoc/blob/main/LICENCE.md
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/scalameta/mdoc/releases/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/scalameta/mdoc/releases/latest
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/scalameta/mdoc/releases?per_page=100
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/scalameta/mdoc
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/scalameta/mdoc/contributors?per_page=1
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://scalameta.org/mdoc/docs/installation.html
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/scalameta/mdoc
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

mdoc is a markdown documentation tool for Scala. It reads markdown sources, compiles and evaluates the Scala code blocks in them, and writes markdown in which each block shows its result, so the examples in the documentation are type-checked. It runs as the sbt-mdoc plugin in an sbt build, where the docs/mdoc task generates the documentation, from the command line through coursier, or as a library API. The project is maintained by the mdoc developers. A [migration guide](https://scalameta.org/mdoc/docs/tut.html) covers moving documentation over from tut.

## Worth knowing

mdoc writes markdown. Its DocusaurusPlugin builds a static site from that markdown with Docusaurus, which needs node and yarn. The JDK requirement differs between releases, as the README's compatibility table shows.
