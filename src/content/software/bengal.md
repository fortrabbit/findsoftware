---
id: bengal
name: Bengal
urls:
  home: https://lbliii.github.io/bengal/
  repository: https://github.com/lbliii/bengal
  docs: https://lbliii.github.io/bengal/docs/get-started/
category:
  - ssg
description: Python static site generator for documentation, blogs and other Markdown-based sites, with a built-in dev server.
status: active
maintainer: Bengal Contributors
maintainerType: community
firstRelease: 2026
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3.14
contentStore:
  - flat-file
templating: kida
runsAs:
  - static
renderingModes:
  - static
installMethod: pip install
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-06-17
githubStargazers: 51
contributors: 4
ecosystemsMonthlyDownloads: 434
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://github.com/lbliii/bengal/blob/main/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/lbliii/bengal
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/lbliii/bengal/blob/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/lbliii/bengal/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: maintainerType
    url: https://github.com/lbliii/bengal/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/lbliii/bengal
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/lbliii/bengal/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://lbliii.github.io/bengal/docs/get-started/
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/lbliii/bengal/blob/main/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/lbliii/bengal/blob/main/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/lbliii/bengal/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/lbliii/bengal/blob/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://lbliii.github.io/bengal/docs/ship/deployment/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://lbliii.github.io/bengal/docs/ship/deployment/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/lbliii/bengal
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/lbliii/bengal/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/lbliii/bengal/releases?per_page=100
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/lbliii/bengal/releases?per_page=100
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/lbliii/bengal/releases?per_page=100
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/lbliii/bengal
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/lbliii/bengal/contributors
    checkedAt: 2026-10-23
  - field: ecosystemsMonthlyDownloads
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/bengal
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Bengal is a static site generator for documentation sites, blogs and other Markdown-based sites, written in Python. Pages are Markdown files in a `content` folder, rendered with Kida templates, and the production build writes the site to `public/` as static HTML, CSS and JavaScript.

It is installed with `pip install bengal`. `bengal new site` creates a project, and `bengal serve` runs a dev server with live reload. The [documentation](https://lbliii.github.io/bengal/) covers configuration, content and deployment.

## Worth knowing

Bengal requires Python 3.14 or later and is marked alpha in its README and on PyPI. The README lists Patitas (Markdown), Rosettes (syntax highlighting), Kida (templates) and Pounce (ASGI server) as parts of The Bengal Ecosystem, the stack the project belongs to.
