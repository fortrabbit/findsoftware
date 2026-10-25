---
id: pft
name: PFT
urls:
  home: https://dacav.roundhousecode.com/tags/pft.html
  repository: https://github.com/dacav/App-PFT
category:
  - ssg
description: Static website generator written in Perl, installed as command line tools for managing and compiling a blog.
status: stub
maintainer: Giovanni Simoni
maintainerType: individual
firstRelease: 2016
language: perl
hosting:
  - static
contentStore:
  - flat-file
templating: template-alloy
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: Perl Makefile.PL
licenseModel: open-source
license: GPL-3.0-or-later
currentMajor: "1"
latestReleaseDate: 2019-07-25
githubStargazers: 9
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://dacav.roundhousecode.com/tags/pft.html
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/dacav/App-PFT
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/dacav/App-PFT/master/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/dacav/App-PFT
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/dacav/App-PFT/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/dacav/App-PFT/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/dacav/App-PFT/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://dacav.roundhousecode.com/tags/pft.html
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/dacav/App-PFT/master/bin/pft-make
    checkedAt: 2026-10-23
  - field: templating
    url: https://raw.githubusercontent.com/dacav/App-PFT/master/bin/pft-make
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://raw.githubusercontent.com/dacav/App-PFT/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/dacav/App-PFT/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/dacav/App-PFT/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/dacav/App-PFT/master/README.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/dacav/App-PFT/master/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/dacav/App-PFT/tags
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/dacav/App-PFT/tags
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/dacav/App-PFT/tags
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/dacav/App-PFT
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/dacav/App-PFT/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

PFT is a static website generator written in Perl, distributed as the App-PFT command line tools. Content lives in a content directory of the site project, and `pft make` compiles it with Template::Alloy templates into a build directory. The README describes the result as something a plain HTTP server can serve, with no server-side generation. `pft pub` can publish the build over rsync and ssh.

The tools are installed with `perl Makefile.PL` or with cpanminus, and they use the separate PFT library for access to the file system.

## Worth knowing

The homepage is a page on the maintainer's personal site, which describes PFT as one of the maintainer's personal projects and as the generator used for that site.
