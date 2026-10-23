---
id: marmite
name: Marmite
urls:
  home: https://marmite.blog/
  repository: https://github.com/rochacbruno/marmite
  docs: https://marmite.blog/docs.html
category:
  - ssg
description: Static site generator, written in Rust, that turns a folder of Markdown files into a static blog.
status: active
maintainer: Bruno Rocha
maintainerType: individual
firstRelease: 2024
language: rust
runtime:
  - binary
hosting:
  - static
contentStore:
  - flat-file
templating: tera
i18n: language streams, with translation links and hreflang tags
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: install script, cargo, pip/uvx, Homebrew, Arch Linux, FreeBSD, Docker
licenseModel: open-source
license: AGPL-3.0
currentMajor: "0"
latestReleaseDate: 2026-07-31
githubStargazers: 888
contributors: 31
social:
  forum: https://github.com/rochacbruno/marmite/discussions
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://marmite.blog/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/rochacbruno/marmite
    checkedAt: 2026-10-23
  - field: urls
    url: https://marmite.blog/docs.html
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://marmite.blog/getting-started.html
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/rochacbruno/marmite
    checkedAt: 2026-10-23
  - field: category
    url: https://marmite.blog/docs.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/rochacbruno/marmite
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/rochacbruno/marmite
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/rochacbruno/marmite
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://marmite.blog/hosting.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://marmite.blog/hosting.html
    checkedAt: 2026-10-23
  - field: i18n
    url: https://github.com/rochacbruno/marmite
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/rochacbruno/marmite
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/rochacbruno/marmite/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/rochacbruno/marmite/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/rochacbruno/marmite/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/rochacbruno/marmite/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/rochacbruno/marmite
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/rochacbruno/marmite/contributors
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://marmite.blog/docs.html
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/rochacbruno/marmite
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

Marmite is a static site generator, written in Rust, that turns a folder of Markdown files into a static site, aimed at blogs. A workspace can hold several sites built by one command, and language streams handle multilingual content. It is installed with an install script, cargo, pip or uvx, Homebrew, Docker and other routes.

## Worth knowing

The editor and the content management API run only inside the development server started with the serve option. The deployed site is static files, and the project's hosting guide shows a GitHub Actions workflow that builds it and publishes it to GitHub Pages.
