---
id: docnado
name: docnado
urls:
  home: https://heinventions.github.io/docnado-site/
  repository: https://github.com/HEInventions/docnado
  docs: https://github.com/HEInventions/docnado/blob/master/README.md
category:
  - ssg
description: Documentation tool that renders Markdown files into a local web server, static HTML or PDF files.
status: stub
maintainer: Hardy & Ellis Inventions LTD
firstRelease: 2018
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3.6
contentStore:
  - flat-file
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: pip
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2022-02-22
githubStargazers: 96
contributors: 4
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://heinventions.github.io/docnado-site/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/HEInventions/docnado
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/HEInventions/docnado/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://heinventions.github.io/docnado-site/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/HEInventions/docnado
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/HEInventions/docnado/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/HEInventions/docnado/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://pypi.org/pypi/docnado/json
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/HEInventions/docnado/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/HEInventions/docnado/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/HEInventions/docnado
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://heinventions.github.io/docnado-site/
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/docnado/json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://pypi.org/pypi/docnado/json
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://pypi.org/pypi/docnado/json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/HEInventions/docnado
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/HEInventions/docnado/contributors
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/HEInventions/docnado/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/HEInventions/docnado/blob/master/README.md
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

docnado is a Python command-line tool that turns a folder of Markdown files into a documentation site. Running `docnado` starts a server on localhost, and the `--html` option freezes the documentation into a set of static HTML files. Documents can also be written out as PDF files through the same server. Each document selects its template and sets its metadata at the top of the file, and the sidebar is generated automatically. The copyright line on the project's site names Hardy & Ellis Inventions LTD.

## Worth knowing

The README describes the localhost output as insecure HTML, and it lists the static HTML files as a separate output. PDF output needs the separate wkhtmltopdf binary, which the README says must be configured or placed in the working directory.
