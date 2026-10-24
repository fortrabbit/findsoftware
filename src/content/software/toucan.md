---
id: toucan
name: Toucan
urls:
  home: https://toucansites.com
  repository: https://github.com/toucansites/toucan
  docs: https://toucansites.com/docs/
category:
  - ssg
description: Markdown-based static site generator written in Swift.
status: active
maintainer: Binary Birds Ltd.
maintainerType: company
firstRelease: 2024
runtime:
  - binary
hosting:
  - static
templating: mustache
i18n: multi-language sites with locale and time zone settings
runsAs:
  - static
renderingModes:
  - static
installMethod: Homebrew, Mint, prebuilt binary, pkg installer
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-05-06
githubStargazers: 273
contributors: 6
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://toucansites.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/toucansites/toucan
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/toucansites/toucan/blob/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/toucansites/toucan/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/toucansites/toucan/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://toucansites.com/docs/installation/source/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://toucansites.com/docs/installation/macos/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://toucansites.com/docs/installation/linux/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://toucansites.com/docs/getting-started/docker/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/toucansites/toucan/blob/main/README.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://toucansites.com/docs/getting-started/configuration/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://toucansites.com/docs/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://toucansites.com/docs/getting-started/quickstart/
    checkedAt: 2026-10-23
  - field: templating
    url: https://toucansites.com/docs/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/toucansites/toucan
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/toucansites/toucan/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/toucansites/toucan/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/toucansites/toucan/releases/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/toucansites/toucan/releases/latest
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/toucansites/toucan
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/toucansites/toucan/contributors?per_page=1
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: SSG
ai: authored
---

Toucan is a static site generator written in Swift. It reads Markdown content and Mustache templates from a project folder and builds every page at build time, and the generated files can be hosted on a file server. Besides generating a site, the command line has `watch` and `serve` subcommands for rebuilding and previewing. The docs describe locale and time zone settings for multi-language sites. Binary Birds maintains the project, and the project's own website is generated with Toucan.

## Worth knowing

The docs describe deployment to GitHub Pages through a [GitHub Actions guide](https://toucansites.com/docs/deployment/github-pages/).
