---
id: wbsx
name: wbsx
urls:
  home: https://wbsx.codeberg.page/
  repository: https://codeberg.org/wbsx/wbsx
category:
  - ssg
description: Command-line toolkit that builds websites and web apps from XML with XSLT stylesheets.
status: active
maintainer: esdinb
firstRelease: 2025
language: go
runtime:
  - binary
hosting:
  - binary
templating: xslt
runsAs:
  - always-on
installMethod: Homebrew cask, tar archive, Debian and Ubuntu package, RPM, Nix, Guix, Windows zip, build from source
licenseModel: open-source
license: MIT
latestReleaseDate: 2026-08-27
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://wbsx.codeberg.page/
    checkedAt: 2026-10-23
  - field: urls
    url: https://codeberg.org/api/v1/repos/wbsx/wbsx
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://codeberg.org/wbsx/wbsx/raw/branch/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://codeberg.org/api/v1/repos/wbsx/wbsx
    checkedAt: 2026-10-23
  - field: category
    url: https://wbsx.codeberg.page/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://codeberg.org/wbsx/wbsx/raw/branch/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://wbsx.codeberg.page/
    checkedAt: 2026-10-23
  - field: templating
    url: https://wbsx.codeberg.page/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://wbsx.codeberg.page/
    checkedAt: 2026-10-23
  - field: license
    url: https://codeberg.org/wbsx/wbsx/raw/branch/main/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://codeberg.org/wbsx/wbsx/raw/branch/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://codeberg.org/api/v1/repos/wbsx/wbsx/tags
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://codeberg.org/api/v1/repos/wbsx/wbsx/releases
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

wbsx is a command-line program that transforms XML and HTML content with XSLT stylesheets to build websites and web apps. `wbsx run` maps a stylesheet and an input file to an output file, and `wbsx serve` starts an HTTP server that reads a server configuration file. The README lists Markdown rendering, asset bundling and localization among its features.

## Worth knowing

The homepage says the software is under active development and that breaking changes can come between releases. Building from source needs C libraries for XML, XSLT, ICU and HTML parsing, with a C or C++ compiler for the cgo bindings, on top of the Go toolchain. The repository is hosted on Codeberg.
