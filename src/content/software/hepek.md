---
id: hepek
name: Hepek
urls:
  home: https://sake92.github.io/hepek/
  repository: https://github.com/sake92/hepek
  docs: https://sake92.github.io/hepek/hepek/index.html
category:
  - ssg
  - ui-library
description: Scala toolkit for building static websites from typed HTML templates, with a static site generator and reusable UI components.
status: active
maintainer: Sakib Hadžiavdić
maintainerType: individual
firstRelease: 2018
runtime:
  - jvm
hosting:
  - static
templating: scalatags
runsAs:
  - static
renderingModes:
  - static
installMethod: sbt plugin
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2025-05-14
githubStargazers: 113
contributors: 7
social:
  discord: https://discord.gg/R2FtxDKyRE
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://sake92.github.io/hepek/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/sake92/hepek
    checkedAt: 2026-10-23
  - field: urls
    url: https://sake92.github.io/hepek/hepek/index.html
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/sake92/hepek/master/LICENSE
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/sake92/hepek/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/sake92/hepek/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/sake92/sbt-hepek/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/sake92/hepek/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/sake92/hepek/blob/master/hepek-cli/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://sake92.github.io/hepek/hepek/index.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://sake92.github.io/hepek/hepek/index.html
    checkedAt: 2026-10-23
  - field: templating
    url: https://sake92.github.io/hepek/hepek/index.html
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/sake92/hepek
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/sake92/hepek/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/sake92/hepek/git/ref/tags/0.1.2
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/sake92/hepek/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/sake92/hepek/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/sake92/hepek
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/sake92/hepek/contributors
    checkedAt: 2026-10-23
ai: authored
---

Hepek is a Scala toolkit for making websites. Its static site generator, Hepek SSG, writes Scala objects to files: each page is plain Scala built from Scalatags, a Scala DSL for HTML, and from Markdown for text, so there is no separate template language. The repository also holds Hepek Components, a library of typesafe templates, grids, forms, code highlighting and markdown rendering for the JVM and Scala.js, plus integrations for the Sharaf, Play, Http4s and ZIO frameworks.

The generator runs through an sbt or mill plugin, or through hepek-cli with scala-cli. The project has a Discord chat, linked from its homepage.

## Worth knowing

Code snippets and math in Markdown are rendered with Node.js, so a machine that builds the site needs Node.js as well as the JVM tools.
