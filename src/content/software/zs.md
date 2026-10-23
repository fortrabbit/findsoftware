---
id: zs
name: zs
urls:
  repository: https://git.mills.io/prologic/zs
  docs: https://git.mills.io/prologic/zs/src/branch/main/README.md
category:
  - ssg
description: Static site generator written in Go that builds Markdown and HTML files into a site, with plugins, hooks and routes.
status: active
maintainer: James Mills
firstRelease: 2021
language: go
runtime:
  - binary
hosting:
  - binary
contentStore:
  - flat-file
templating: placeholders
installMethod: go install
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-18
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://git.mills.io/api/v1/repos/prologic/zs
    checkedAt: 2026-10-23
  - field: urls
    url: https://git.mills.io/prologic/zs/raw/branch/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://git.mills.io/prologic/zs/raw/branch/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://git.mills.io/prologic/zs/raw/branch/main/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://git.mills.io/prologic/zs/raw/branch/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://git.mills.io/prologic/zs/raw/branch/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://git.mills.io/prologic/zs/raw/branch/main/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://git.mills.io/prologic/zs/raw/branch/main/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://git.mills.io/prologic/zs/raw/branch/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://git.mills.io/prologic/zs/raw/branch/main/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://git.mills.io/prologic/zs/raw/branch/main/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://git.mills.io/api/v1/repos/prologic/zs/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://git.mills.io/api/v1/repos/prologic/zs/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://git.mills.io/api/v1/repos/prologic/zs/releases
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: Go · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

zs is a static site generator written in Go. Content lives as Markdown or HTML files in the site's main directory, and placeholders such as {{ title }} are filled at build time from variables set in YAML front matter. Plugins are executables, in any language, whose output fills a placeholder, and build hooks run before and after each build.

zs is installed with go install. zs build rebuilds the site, and zs serve rebuilds it and serves it on the network.

James Mills maintains zs under the MIT license. The project began as a fork of zserge/zs, which its README names as the original.

## Worth knowing

The repository is hosted on a Gitea instance at git.mills.io, not on GitHub. The README is the only documentation, and it names no deployment target. The .routes file handles redirects and error responses, and the README describes it as working without a reverse proxy, but does not say which host serves those routes.
