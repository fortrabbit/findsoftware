---
id: zas
name: Zas
urls:
  home: https://dario.cat/zas/
  repository: https://github.com/darccio/zas
  docs: https://dario.cat/zas/
category:
  - ssg
description: Static site generator written in Go that renders Markdown and HTML pages through a shared layout.
status: active
maintainer: Dario Castañé
maintainerType: individual
firstRelease: 2016
language: go
runtime:
  - binary
hosting:
  - static
templating: go templates
i18n: yes
runsAs:
  - static
renderingModes:
  - static
installMethod: go install
licenseModel: open-source
license: AGPL-3.0, AGPL-3.0-or-later
currentMajor: "0"
latestReleaseDate: 2026-10-15
githubStargazers: 217
contributors: 3
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://dario.cat/zas/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/darccio/zas
    checkedAt: 2026-10-23
  - field: urls
    url: https://dario.cat/zas/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://dario.cat/zas/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/darccio/zas
    checkedAt: 2026-10-23
  - field: runtime
    url: https://dario.cat/zas/
    checkedAt: 2026-10-23
  - field: category
    url: https://dario.cat/zas/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/darccio/zas/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://dario.cat/zas/templates/
    checkedAt: 2026-10-23
  - field: i18n
    url: https://raw.githubusercontent.com/darccio/zas/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://dario.cat/zas/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://dario.cat/zas/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/darccio/zas
    checkedAt: 2026-10-23
  - field: license
    url: https://dario.cat/zas/LICENSE.txt
    checkedAt: 2026-10-23
  - field: license
    url: https://dario.cat/zas/
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/darccio/zas/releases/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/darccio/zas/releases/latest
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/darccio/zas/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/darccio/zas
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/darccio/zas/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Zas is a static site generator written in Go. It renders Markdown and HTML pages through a shared layout, and the generated site is placed in `.zas/deploy`, which can be uploaded to any static host.

It is installed with go install, and page content runs through Go templates. Multilingual sites are configured with an i18n.yml file in the `.zas` directory. The homepage states that the current source requires Go 1.26 or newer.
