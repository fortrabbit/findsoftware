---
id: blogc
name: blogc
urls:
  home: https://blogc.rgm.io/
  repository: https://github.com/blogc/blogc
  docs: https://blogc.rgm.io/man/blogc.1.html
description: Command-line blog compiler that turns source files and templates into website resources, designed to be driven by make.
status: stub
maintainer: Rafael G. Martins
firstRelease: 2015
hosting:
  - static
contentStore:
  - flat-file
templating: blogc-template
runsAs:
  - static
  - local
installMethod: cmake
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "0"
latestReleaseDate: 2021-01-02
githubStargazers: 192
contributors: 3
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://blogc.rgm.io/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/blogc/blogc
    checkedAt: 2026-10-23
  - field: urls
    url: https://blogc.rgm.io/man/blogc.1.html
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/blogc/blogc/main/LICENSE
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/blogc/blogc/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://blogc.rgm.io/
    checkedAt: 2026-10-23
  - field: templating
    url: https://blogc.rgm.io/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/blogc/blogc/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://blogc.rgm.io/man/blogc-git-receiver.1.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://blogc.rgm.io/man/blogc-runserver.1.html
    checkedAt: 2026-10-23
  - field: license
    url: https://blogc.rgm.io/
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/blogc/blogc/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/blogc/blogc/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/blogc/blogc/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/blogc/blogc
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/blogc/blogc/contributors
    checkedAt: 2026-10-23
figure:
  emoji: 🧱
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: Framework
ai: authored
---

blogc is a command-line blog compiler. Each run compiles one source file and its templates into website resources, and the homepage says it is designed to be used with make. It does not know about the other files of a blog. The build tool blogc-make can turn blogc into a blogging engine, according to the homepage.

Content lives in source files in a directory, written in blogc's own markup language and rendered through its own template engine. Built files can be served by any web server: blogc-git-receiver rebuilds a site on every git push and links the built files as the web server's document root, and blogc-runserver is a local test server.

## Worth knowing

The homepage describes an autotools build, while the current README describes a CMake build.
