---
id: pkgdown
name: pkgdown
urls:
  home: https://pkgdown.r-lib.org/
  repository: https://github.com/r-lib/pkgdown
  docs: https://pkgdown.r-lib.org/articles/pkgdown.html
category:
  - ssg
description: R package that builds a static HTML website for an R package from its documentation, vignettes and README.
status: active
maintainer: Hadley Wickham
firstRelease: 2016
hosting:
  - static
runsAs:
  - static
renderingModes:
  - static
installMethod: install.packages
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-07-07
githubStargazers: 777
contributors: 149
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/r-lib/pkgdown
    checkedAt: 2026-10-23
  - field: urls
    url: https://pkgdown.r-lib.org/
    checkedAt: 2026-10-23
  - field: urls
    url: https://pkgdown.r-lib.org/articles/pkgdown.html
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://pkgdown.r-lib.org/
    checkedAt: 2026-10-23
  - field: category
    url: https://api.github.com/repos/r-lib/pkgdown
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://cran.r-project.org/package=pkgdown
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://cran.r-project.org/package=pkgdown
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/r-lib/pkgdown/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://cran.r-project.org/package=pkgdown
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://cran.r-project.org/package=pkgdown
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/r-lib/pkgdown/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/r-lib/pkgdown/releases/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/r-lib/pkgdown/releases/latest
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/r-lib/pkgdown
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/r-lib/pkgdown/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: SSG
ai: authored
---

pkgdown builds a website for an R package from its README, its function documentation and its vignettes: the README becomes the homepage, documentation in man/ generates a function reference, and vignettes render into articles. The [getting-started guide](https://pkgdown.r-lib.org/articles/pkgdown.html) describes publishing the site through GitHub Actions.

## Worth knowing

Without GitHub, the site is rebuilt by hand each time it changes.
