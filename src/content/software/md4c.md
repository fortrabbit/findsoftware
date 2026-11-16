---
id: md4c
name: MD4C
urls:
  repository: https://github.com/mity/md4c
  docs: https://github.com/mity/md4c/wiki
category:
  - library
description: Dependency-free Markdown parser library written in C, with an HTML renderer in a separate module.
status: stub
maintainer: Martin Mitáš
maintainerType: individual
firstRelease: 2016
language: c
installMethod: copy source files
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-09-17
githubStargazers: 1512
contributors: 52
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/mity/md4c
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/mity/md4c/blob/master/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/mity/md4c/blob/master/LICENSE.md
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/mity/md4c/blob/master/LICENSE.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/mity/md4c
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/mity/md4c/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/mity/md4c/blob/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/mity/md4c
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/mity/md4c/blob/master/LICENSE.md
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/mity/md4c
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/mity/md4c/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/mity/md4c/tags
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/mity/md4c/commits/7fc1815a5eeba2af7d6120a76202bf59f3b6e6e4
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/mity/md4c/commits/1a8ce93d6f70af56a19d032dc3832a958bad301f
    checkedAt: 2026-11-16
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
runsAs: null
---

MD4C is a Markdown parser library written in C. It parses a whole document and calls callback functions provided by the application at the start and end of every block and span, without building a large document tree. A separate module converts Markdown to HTML.

The parser is the files `md4c.c` and `md4c.h`, which an application can link as a library or compile into its own code. It passes the CommonMark compliance tests, and flags switch on extensions such as tables, footnotes, task lists and strikethrough.

Martin Mitáš maintains it.

## Worth knowing

The README names desktop and office applications among the software that uses MD4C, and it describes no use in a website or web app.
