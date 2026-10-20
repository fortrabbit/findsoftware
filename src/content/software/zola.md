---
id: zola
name: Zola
urls:
  home: https://www.getzola.org/
  repository: https://github.com/getzola/zola
  docs: https://www.getzola.org/documentation/
category:
  - ssg
description: Static site generator distributed as a single binary, with the Tera template engine, Sass compilation and search built in.
status: active
maintainer: Vincent Prouillet
maintainerType: individual
firstRelease: 2017
language: rust
runtime:
  - binary
hosting:
  - static
contentStore:
  - flat-file
templating: tera
i18n: multilingual sites, described as basic
runsAs:
  - static
renderingModes:
  - static
installMethod: prebuilt binary, homebrew, macports, linux and bsd distribution packages, winget, scoop, chocolatey, snap, flatpak, docker, cargo install
licenseModel: open-source
license: EUPL-1.2, MIT
currentMajor: "0"
latestReleaseDate: 2026-09-12
githubStargazers: 17517
contributors: 536
social:
  forum: https://zola.discourse.group/
wikidata: Q105808719
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: urls
    url: https://github.com/getzola/zola
    checkedAt: 2026-10-18
  - field: urls
    url: https://github.com/getzola/zola
    checkedAt: 2026-10-18
  - field: urls
    url: https://www.getzola.org/
    checkedAt: 2026-10-18
  - field: firstRelease
    url: https://github.com/getzola/zola/releases/tag/v0.0.2
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://www.getzola.org/
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://www.getzola.org/
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Q105808719
    checkedAt: 2026-10-18
  - field: category
    url: https://www.getzola.org/
    checkedAt: 2026-10-18
  - field: language
    url: https://github.com/getzola/zola
    checkedAt: 2026-10-18
  - field: runtime
    url: https://www.getzola.org/
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://www.getzola.org/
    checkedAt: 2026-10-18
  - field: templating
    url: https://www.getzola.org/documentation/templates/overview/
    checkedAt: 2026-10-18
  - field: i18n
    url: https://www.getzola.org/documentation/content/multilingual/
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://www.getzola.org/
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://www.getzola.org/documentation/getting-started/installation/
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/getzola/zola
    checkedAt: 2026-10-18
  - field: license
    url: https://github.com/getzola/zola
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://github.com/getzola/zola
    checkedAt: 2026-10-18
  - field: currentMajor
    url: https://github.com/getzola/zola/releases/latest
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://github.com/getzola/zola/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://github.com/getzola/zola
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/getzola/zola/contributors?anon=true
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://www.getzola.org/documentation/deployment/github-pages/
    checkedAt: 2026-10-19
figure:
  emoji: ⚡
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: Rust · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Zola is a Rust program that turns a folder of Markdown files into a static site, rendered with the Tera template engine. Sass compilation and search are built in. It ships as one executable with no dependencies, so the machine that builds the site needs no language runtime. Multilingual sites are supported, which the README calls basic. Themes are listed in a theme gallery. Vincent Prouillet maintains it as an individual, and the project was first named Gutenberg.

## Worth knowing

Code added after a license change in 2026 is under EUPL-1.2, while code that existed before stays MIT. Zola has no plugin system.
