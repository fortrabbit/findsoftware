---
id: frog
name: Frog
urls:
  repository: https://github.com/greghendershott/frog
  docs: https://docs.racket-lang.org/frog/index.html
category:
  - ssg
description: Static web site generator written in Racket that builds posts and pages from Markdown or Scribble sources.
status: stub
maintainer: Greg Hendershott
maintainerType: individual
hosting:
  - static
contentStore:
  - flat-file
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: raco pkg install frog
licenseModel: open-source
license: BSD-2-Clause
githubStargazers: 940
contributors: 28
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/greghendershott/frog
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/greghendershott/frog/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/greghendershott/frog/master/frog/LICENSE
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/greghendershott/frog/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.racket-lang.org/frog/Quick_start.html
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://raw.githubusercontent.com/greghendershott/frog/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/greghendershott/frog/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://docs.racket-lang.org/frog/Quick_start.html
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://docs.racket-lang.org/frog/Posts.html
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/greghendershott/frog/master/frog/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/greghendershott/frog/master/frog/LICENSE
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/greghendershott/frog
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/greghendershott/frog/contributors
    checkedAt: 2026-10-23
ai: authored
---

Frog is a static web site generator written in Racket. Posts and pages are written in Markdown or Scribble and stored as files in a project folder, and Frog generates the files that you publish, for example to a GitHub Pages repository or an Amazon S3 bucket. Racket is installed first, then the package is added with raco pkg install frog. The [Frog documentation](https://docs.racket-lang.org/frog/index.html) covers the quick start, posts, non-post pages, templates and parameters. Frog can preview the built site locally.

## Worth knowing

The README states that the project is in low-maintenance mode. The Racket package catalog describes the package as no longer under active development, which is a registry description and not a statement on the project's own pages. Syntax highlighting of fenced code blocks is optional and needs Python 3 with Pygments.
