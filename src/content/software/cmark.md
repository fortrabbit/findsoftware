---
id: cmark
name: cmark
urls:
  repository: https://github.com/commonmark/cmark
  docs: https://github.com/commonmark/cmark/tree/master/man
category:
  - library
description: C library and command-line program that parses CommonMark Markdown into a syntax tree and renders it as HTML, man, LaTeX, CommonMark or XML.
status: active
maintainer: John MacFarlane
maintainerType: individual
firstRelease: 2014
language: c
installMethod: make install (source)
licenseModel: open-source
license: BSD-2-Clause, MIT, CC-BY-SA-4.0
currentMajor: "0"
latestReleaseDate: 2026-02-14
githubStargazers: 2041
contributors: 98
social:
  forum: https://talk.commonmark.org/
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://api.github.com/repos/commonmark/cmark
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/commonmark/cmark/blob/master/COPYING
    checkedAt: 2026-11-04
  - field: maintainerType
    url: https://github.com/commonmark/cmark/blob/master/COPYING
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/commonmark/cmark
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://api.github.com/repos/commonmark/cmark/commits/0.6
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/commonmark/cmark/blob/master/README.md
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/commonmark/cmark/blob/master/COPYING
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/commonmark/cmark/blob/master/COPYING
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://github.com/commonmark/cmark/blob/master/README.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/commonmark/cmark/blob/master/README.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/commonmark/cmark/blob/master/README.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/commonmark/cmark/blob/master/README.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/commonmark/cmark/blob/master/README.md
    checkedAt: 2026-11-04
  - field: urls
    url: https://github.com/commonmark/cmark/blob/master/README.md
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/commonmark/cmark/releases/latest
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/commonmark/cmark/releases/latest
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/commonmark/cmark
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/commonmark/cmark/contributors
    checkedAt: 2026-11-04
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

cmark is the C reference implementation of CommonMark, the Markdown syntax that has a written specification. It is both a shared library, libcmark, and a command-line program. The library parses CommonMark into an abstract syntax tree, lets a program change the tree, and renders it as HTML, groff man, LaTeX, CommonMark or an XML form of the tree. It has no external dependencies and is built with cmake, or with make, which calls cmake. The [README](https://github.com/commonmark/cmark/blob/master/README.md) names wrapper libraries that let other languages call libcmark, among them Go, Ruby, Python, Lua and PHP.

## Worth knowing

By default the library removes raw HTML and links that use the javascript, vbscript, data or file schemes. The unsafe option turns that off, and the README recommends an HTML sanitizer for that case.
