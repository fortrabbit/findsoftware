---
id: minerl
name: minerl
urls:
  repository: https://github.com/neevek/minerl
  docs: https://github.com/neevek/minerl/blob/master/README.md
category:
  - ssg
description: Perl blog-aware static site generator with tags, archives and template inheritance.
status: stub
maintainer: neevek
maintainerType: individual
firstRelease: 2013
contentStore:
  - flat-file
templating: html-template
runsAs:
  - local
renderingModes:
  - static
installMethod: git clone, then make && make install
licenseModel: open-source
license: Artistic-2.0
currentMajor: "0"
latestReleaseDate: 2013-07-30
githubStargazers: 20
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/neevek/minerl
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/neevek/minerl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/neevek/minerl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/neevek/minerl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/neevek/minerl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/neevek/minerl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/neevek/minerl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/neevek/minerl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/neevek/minerl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/neevek/minerl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/neevek/minerl/blob/master/README.md
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/neevek/minerl/tags
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/neevek/minerl/commits/release_v0.02
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/neevek/minerl/commits/release_v0.01
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/neevek/minerl/contributors
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/neevek/minerl
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: SSG
ai: authored
---

minerl is a blog-aware static site generator written in Perl. Pages, templates and resource files are plain files in a site directory, templates expand variables with HTML::Template, and the README describes tag pages, archives by month and template inheritance through a layout header.

It installs with make and make install from a git clone, after the Perl modules it depends on are installed. The generate command creates a site, build writes the pages, and serve starts an HTTP server for the output.

## Worth knowing

The repository has tags but no GitHub release, and no LICENSE file; the Artistic License 2.0 is the one the README names.
