---
id: gustav
name: Gustav
urls:
  repository: https://github.com/futape/gustav
  docs: https://github.com/futape/gustav/wiki
category:
  - ssg
description: PHP static-site generator for blogs and other websites, with a template system and a PHP API.
status: active
maintainer: Lucas Krause
maintainerType: individual
firstRelease: 2015
language: php
runtime:
  - php
hosting:
  - php
runtimeMin: php 5.3
runsAs:
  - per-request
renderingModes:
  - static
  - server
installMethod: copy the downloaded files to the web space
licenseModel: open-source
license: BSD-3-Clause, CC-BY-4.0
currentMajor: "1"
latestReleaseDate: 2015-02-22
githubStargazers: 15
contributors: 4
addedAt: 2026-10-20
checkedAt: 2026-10-20
sources:
  - field: urls
    url: https://api.github.com/repos/futape/gustav
    checkedAt: 2026-10-20
  - field: urls
    url: https://github.com/futape/gustav/blob/master/README.md
    checkedAt: 2026-10-20
  - field: language
    url: https://api.github.com/repos/futape/gustav
    checkedAt: 2026-10-20
  - field: category
    url: https://github.com/futape/gustav/blob/master/README.md
    checkedAt: 2026-10-20
  - field: runtime
    url: https://github.com/futape/gustav/blob/master/README.md
    checkedAt: 2026-10-20
  - field: runtimeMin
    url: https://github.com/futape/gustav/wiki/System-requirements
    checkedAt: 2026-10-20
  - field: installMethod
    url: https://raw.githubusercontent.com/futape/gustav/doc/Getting-started.md
    checkedAt: 2026-10-20
  - field: renderingModes
    url: https://raw.githubusercontent.com/futape/gustav/doc/Generating-destination-files.md
    checkedAt: 2026-10-20
  - field: renderingModes
    url: https://raw.githubusercontent.com/futape/gustav/doc/Generating-destination-files.md
    checkedAt: 2026-10-20
  - field: runsAs
    url: https://raw.githubusercontent.com/futape/gustav/doc/Generating-destination-files.md
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/futape/gustav/blob/master/README.md
    checkedAt: 2026-10-20
  - field: license
    url: https://github.com/futape/gustav/blob/master/README.md
    checkedAt: 2026-10-20
  - field: licenseModel
    url: https://github.com/futape/gustav/blob/master/README.md
    checkedAt: 2026-10-20
  - field: maintainer
    url: https://github.com/futape/gustav/blob/master/README.md
    checkedAt: 2026-10-20
  - field: maintainerType
    url: https://github.com/futape/gustav/blob/master/README.md
    checkedAt: 2026-10-20
  - field: firstRelease
    url: https://api.github.com/repos/futape/gustav/git/tags/e5ea9eb8ae28b705dfefff62431f790c429ad5cf
    checkedAt: 2026-10-20
  - field: currentMajor
    url: https://api.github.com/repos/futape/gustav/tags
    checkedAt: 2026-10-20
  - field: latestReleaseDate
    url: https://api.github.com/repos/futape/gustav/git/tags/45ce5a5f61a0cb6b66386d64b7c2294f793e1e13
    checkedAt: 2026-10-20
  - field: githubStargazers
    url: https://api.github.com/repos/futape/gustav
    checkedAt: 2026-10-20
  - field: contributors
    url: https://api.github.com/repos/futape/gustav/contributors?anon=true&per_page=100
    checkedAt: 2026-10-20
figure:
  emoji: ⚡
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: PHP · SSG
ai: authored
npmWeeklyDownloads: null
---

Gustav is a static-site generator written in PHP for blogs and other websites. It runs on the web server: a request for a destination file that does not exist yet goes to its generate.php script, which writes the file either as static content or as PHP that generates the content on each request. It is installed by copying the downloaded files to a web space, and its documentation says it is designed for an Apache server. The documentation is in the [GitHub wiki](https://github.com/futape/gustav/wiki).

## Worth knowing

The documentation and the logo fall under a Creative Commons license, separate from the source code.
