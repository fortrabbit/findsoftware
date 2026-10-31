---
id: athenapdf
name: Athena PDF
urls:
  repository: https://github.com/arachnys/athenapdf
  docs: https://github.com/arachnys/athenapdf/blob/master/weaver/docs/quick-start.md
category:
  - media
description: Docker-based HTML to PDF converter, with an Electron command line tool and a Go microservice, deprecated by its maintainer.
status: discontinued
maintainer: Arachnys Information Services Ltd
maintainerType: company
firstRelease: 2017
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
  - local
installMethod: docker
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2018-07-05
githubStargazers: 2243
contributors: 26
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: status
    url: https://github.com/arachnys/athenapdf/blob/master/README.md
    checkedAt: 2026-10-31
  - field: urls
    url: https://api.github.com/repos/arachnys/athenapdf
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/arachnys/athenapdf/blob/master/weaver/docs/quick-start.md
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://github.com/arachnys/athenapdf/blob/master/LICENSE
    checkedAt: 2026-10-31
  - field: maintainerType
    url: https://github.com/arachnys/athenapdf/blob/master/LICENSE
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/arachnys/athenapdf/releases/tag/v2.9.2
    checkedAt: 2026-10-31
  - field: language
    url: https://api.github.com/repos/arachnys/athenapdf/languages
    checkedAt: 2026-10-31
  - field: runtime
    url: https://api.github.com/repos/arachnys/athenapdf/languages
    checkedAt: 2026-10-31
  - field: category
    url: https://github.com/arachnys/athenapdf/blob/master/README.md
    checkedAt: 2026-10-31
  - field: license
    url: https://api.github.com/repos/arachnys/athenapdf
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/arachnys/athenapdf/blob/master/weaver/docs/quick-start.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/arachnys/athenapdf/blob/master/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/arachnys/athenapdf/blob/master/weaver/docs/building.md
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://github.com/arachnys/athenapdf/blob/master/README.md
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://github.com/arachnys/athenapdf/blob/master/README.md
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/arachnys/athenapdf/releases/tag/v2.13.0
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/arachnys/athenapdf/releases/tag/v2.13.0
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://api.github.com/repos/arachnys/athenapdf
    checkedAt: 2026-10-31
  - field: contributors
    url: https://api.github.com/repos/arachnys/athenapdf/contributors?per_page=1
    checkedAt: 2026-10-31
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Athena PDF converts HTML pages to PDF inside Docker containers. It ships as two parts: a command line tool, which the project describes as an Electron program, and a Go microservice called weaver that runs conversions for other programs. The [quick start](https://github.com/arachnys/athenapdf/blob/master/weaver/docs/quick-start.md) runs the microservice with a single `docker run` command, and the README presents the command line tool as a replacement for wkhtmltopdf.

## Worth knowing

The repository is archived on GitHub, and the README states that the project is deprecated and no longer supported.
