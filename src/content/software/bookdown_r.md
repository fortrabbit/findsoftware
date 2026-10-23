---
id: bookdown_r
name: bookdown
urls:
  home: https://pkgs.rstudio.com/bookdown/
  repository: https://github.com/rstudio/bookdown
  docs: https://pkg.yihui.org/bookdown/
category:
  - ssg
description: R package for writing books and long-form documents in R Markdown, rendered to HTML, PDF, LaTeX, EPUB and Word.
status: active
maintainer: Yihui Xie
firstRelease: 2016
hosting:
  - static
runsAs:
  - static
renderingModes:
  - static
installMethod: install.packages("bookdown") from CRAN
licenseModel: open-source
license: GPL-3
currentMajor: "0"
latestReleaseDate: 2026-08-28
githubStargazers: 4088
contributors: 108
social:
  forum: https://forum.posit.co/tags/c/R-Markdown/10/bookdown
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://pkgs.rstudio.com/bookdown/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/rstudio/bookdown
    checkedAt: 2026-10-23
  - field: urls
    url: https://pkg.yihui.org/bookdown/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/rstudio/bookdown/main/DESCRIPTION
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/rstudio/bookdown/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://pkg.yihui.org/bookdown/github.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/rstudio/bookdown/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://pkg.yihui.org/bookdown/github.html
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/rstudio/bookdown/main/DESCRIPTION
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/rstudio/bookdown/main/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/rstudio/bookdown/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/rstudio/bookdown/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/rstudio/bookdown/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/rstudio/bookdown
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/rstudio/bookdown/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: SSG
ai: authored
---

bookdown is an R package for writing books and long-form articles and reports with R Markdown. It is installed from CRAN and runs inside R, for example with `bookdown::render_book()`, which writes the HTML output to a `_book` folder by default. The [book chapter on GitHub](https://pkg.yihui.org/bookdown/github.html) says the HTML output files can be hosted as static HTML files. The [package site](https://pkgs.rstudio.com/bookdown/) is the project's homepage.

## Worth knowing

Pandoc must be installed, as the package's system requirements state. The README lists one-click publishing to Posit Connect among the ways to publish.
