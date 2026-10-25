---
id: styx
name: Styx
urls:
  home: https://styx-static.github.io/styx-site/
  repository: https://github.com/styx-static/styx
  docs: https://styx-static.github.io/styx-site/documentation/
category:
  - ssg
description: Static site generator written in the Nix expression language.
status: stub
maintainer: Styx Contributors
maintainerType: community
firstRelease: 2016
language: other
hosting:
  - static
contentStore:
  - flat-file
templating: nix
runsAs:
  - local
  - static
renderingModes:
  - static
installMethod: nix profile install github:styx-static/styx
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2022-08-13
githubStargazers: 233
contributors: 11
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://styx-static.github.io/styx-site/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/styx-static/styx
    checkedAt: 2026-10-23
  - field: urls
    url: https://styx-static.github.io/styx-site/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/styx-static/styx/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/styx-static/styx
    checkedAt: 2026-10-23
  - field: category
    url: https://styx-static.github.io/styx-site/
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/styx-static/styx/blob/master/readme.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/styx-static/styx/blob/master/readme.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://styx-static.github.io/styx-site/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/styx-static/styx/blob/master/readme.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://styx-static.github.io/styx-site/documentation/index.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://styx-static.github.io/styx-site/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/styx-static/styx
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/styx-static/styx/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://styx-static.github.io/styx-site/
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://styx-static.github.io/styx-site/
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/styx-static/styx
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/styx-static/styx/contributors
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://styx-static.github.io/styx-site/documentation/index.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://styx-static.github.io/styx-site/documentation/index.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://styx-static.github.io/styx-site/documentation/index.html
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Styx is a static site generator written in the Nix expression language and installed through Nix. Content is written in Markdown, AsciiDoc or Nix, and the Nix templates of a theme produce the pages. Site configuration is declared through an interface like NixOS modules, with every declaration type-checked. The styx doc and styx site-doc commands print the embedded documentation and generate documentation for a site.

## Worth knowing

The documentation names Nix as the only dependency, and the documentation describes deploying a built site to GitHub Pages or an Amazon S3 bucket, or with NixOps or rsync.
