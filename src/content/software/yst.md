---
id: yst
name: yst
urls:
  repository: https://github.com/jgm/yst
category:
  - ssg
description: Tool that generates a static website by filling string templates with data from YAML or CSV files, or from SQLite3 databases.
status: active
maintainer: John MacFarlane
maintainerType: individual
firstRelease: 2009
runtime:
  - binary
hosting:
  - static
contentStore:
  - flat-file
databases:
  - sqlite
templating: stringtemplate
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: cabal install yst
licenseModel: open-source
license: GPL-2.0-or-later
currentMajor: "0"
latestReleaseDate: 2023-02-04
githubStargazers: 408
contributors: 6
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/jgm/yst
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://hackage.haskell.org/package/yst/yst.cabal
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/jgm/yst/master/README.markdown
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/jgm/yst/master/README.markdown
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/jgm/yst/master/README.markdown
    checkedAt: 2026-10-23
  - field: templating
    url: https://raw.githubusercontent.com/jgm/yst/master/README.markdown
    checkedAt: 2026-10-23
  - field: databases
    url: https://raw.githubusercontent.com/jgm/yst/master/README.markdown
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://raw.githubusercontent.com/jgm/yst/master/README.markdown
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/jgm/yst/master/README.markdown
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/jgm/yst/master/README.markdown
    checkedAt: 2026-10-23
  - field: license
    url: https://hackage.haskell.org/package/yst/yst.cabal
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/jgm/yst/master/LICENSE
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/jgm/yst/master/README.markdown
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://hackage.haskell.org/package/yst-0.1/upload-time
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/jgm/yst/tags
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://hackage.haskell.org/package/yst
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/jgm/yst
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/jgm/yst/contributors
    checkedAt: 2026-10-23
ai: authored
---

yst is a command-line tool that generates a static website by filling string templates with data from YAML or CSV files, or from SQLite3 databases. It is written in Haskell and installed with `cabal install yst`. Running `yst` writes the site to a `site` directory. The README describes templates written as Markdown with pandoc extensions, which yst converts to HTML with pandoc.

## Worth knowing

A SQLite3 build needs the `builtin-sqlite3` flag when the sqlite3 library is missing. The [README](https://raw.githubusercontent.com/jgm/yst/master/README.markdown) covers the commands and template syntax.
