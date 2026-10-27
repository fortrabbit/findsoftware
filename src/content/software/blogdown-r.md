---
id: blogdown-r
name: blogdown
urls:
  home: https://pkgs.rstudio.com/blogdown/
  repository: https://github.com/rstudio/blogdown
  docs: https://pkg.yihui.org/blogdown/
category:
  - ssg
description: R package that builds blogs and websites from R Markdown files, using the Hugo static site generator by default.
status: active
maintainer: Yihui Xie
firstRelease: 2017
language: r
runtime:
  - r
hosting:
  - static
runtimeMin: r 3.5
contentStore:
  - flat-file
runsAs:
  - static
renderingModes:
  - static
installMethod: install.packages('blogdown') from CRAN
licenseModel: open-source
license: GPL-3
currentMajor: "1"
latestReleaseDate: 2026-06-19
githubStargazers: 1792
contributors: 60
social:
  forum: https://forum.posit.co/tags/c/R-Markdown/10/blogdown
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://pkgs.rstudio.com/blogdown/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/rstudio/blogdown
    checkedAt: 2026-10-23
  - field: urls
    url: https://pkg.yihui.org/blogdown/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://cran.r-project.org/web/packages/blogdown/index.html
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/rstudio/blogdown
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/rstudio/blogdown/main/DESCRIPTION
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://raw.githubusercontent.com/rstudio/blogdown/main/DESCRIPTION
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/rstudio/blogdown/main/DESCRIPTION
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/rstudio/blogdown/main/DESCRIPTION
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://pkg.yihui.org/blogdown/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/rstudio/blogdown/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://pkg.yihui.org/blogdown/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/rstudio/blogdown/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/rstudio/blogdown/main/DESCRIPTION
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://cran.r-project.org/web/packages/blogdown/index.html
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/rstudio/blogdown/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/rstudio/blogdown/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/rstudio/blogdown/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/rstudio/blogdown
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/rstudio/blogdown/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

blogdown is an R package that builds websites and blogs from R Markdown files. The package supports the Hugo static site generator best and uses it by default, and it also supports Jekyll and Hexo. It produces a website that consists of static files. The package is installed from CRAN, and the [blogdown book](https://pkg.yihui.org/blogdown/) describes the output in its introduction.

## Worth knowing

The package lists Hugo and Pandoc as system requirements, so both are installed alongside it.
