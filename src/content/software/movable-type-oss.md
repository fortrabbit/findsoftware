---
id: movable-type-oss
name: Movable Type Open Source
urls:
  repository: https://github.com/movabletype/movabletype
  docs: https://www.movabletype.org/documentation/installation/
category:
  - cms
description: Source code line of Movable Type, the Perl publishing and blogging system, kept in the movabletype/movabletype repository.
status: active
maintainer: Six Apart Ltd.
maintainerType: company
firstRelease: 2001
hqCountry: JP
language: perl
databases:
  - mysql
runsAs:
  - per-request
installMethod: upload the files to a directory enabled for CGI scripts, then open it in the browser for the installation screens
licenseModel: source-available
license: custom
currentMajor: "9"
latestReleaseDate: 2026-09-25
githubStargazers: 434
contributors: 34
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/movabletype/movabletype
    checkedAt: 2026-10-26
  - field: urls
    url: https://www.movabletype.org/documentation/installation/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/movabletype/movabletype/blob/develop/mt.cgi
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/movabletype/movabletype
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/movabletype/movabletype/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/movabletype/movabletype/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/movabletype/movabletype/blob/develop/mt.cgi
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/movabletype/movabletype/blob/develop/lib/MT.pm
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/movabletype/movabletype/tags
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/movabletype/movabletype/commits/60206300cefb494580930b04bc6849641f64ffd3
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/movabletype/movabletype
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/movabletype/movabletype/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://www.movabletype.org/about/
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://www.movabletype.org/about/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/movabletype/movabletype/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/movabletype/movabletype/blob/develop/README.md
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Movable Type Open Source is the source code line of the Movable Type publishing and blogging system, kept in a public GitHub repository. The code is Perl, and the README names MySQL as an example database. The program files are uploaded to a directory enabled for CGI scripts, and the installation screens run in the browser.

The repository has no LICENSE file. Two source files state terms: mt.cgi says the code cannot be redistributed without permission from Six Apart, and the POD in lib/MT.pm says the license is the one agreed to when downloading Movable Type.

## Worth knowing

The file headers restrict redistribution, so the record reads as source-available, not open source. The sources name no site of their own; the movabletype.org site named in the installation guide is the commercial product's, which is recorded separately.
