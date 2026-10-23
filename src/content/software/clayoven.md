---
id: clayoven
name: clayoven
urls:
  home: https://artagnon.github.io/clayoven/
  repository: https://github.com/artagnon/clayoven
  docs: https://artagnon.github.io/clayoven/
category:
  - ssg
description: Static site generator in Ruby, aimed at math-heavy sites, that builds pages from claytext source files.
status: active
maintainer: Ramkumar Ramachandra
maintainerType: individual
language: ruby
runtime:
  - ruby
hosting:
  - static
contentStore:
  - flat-file
templating: slim
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: git clone and bundle install, with bin/clayoven on PATH
licenseModel: open-source
license: MIT
githubStargazers: 332
contributors: 3
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/artagnon/clayoven
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/artagnon/clayoven
    checkedAt: 2026-10-23
  - field: urls
    url: https://raw.githubusercontent.com/artagnon/clayoven/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/artagnon/clayoven/master/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/artagnon/clayoven
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/artagnon/clayoven/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/artagnon/clayoven/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://raw.githubusercontent.com/artagnon/clayoven/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/artagnon/clayoven/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/artagnon/clayoven/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://raw.githubusercontent.com/artagnon/clayoven/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/artagnon/clayoven/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/artagnon/clayoven
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/artagnon/clayoven/master/LICENSE
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/artagnon/clayoven/master/LICENSE
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/artagnon/clayoven
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/artagnon/clayoven/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: Ruby · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

clayoven is a static site generator written in Ruby and aimed at math-heavy sites. Its source files are written in claytext, a custom format, and each subdirectory of `.clay` files becomes a topic of content pages, while a `name.index.clay` file becomes an index page for that topic. Templates are written in Slim. The engine builds incrementally from the git index and takes page dates from git history, and it renders math on the server with MathJaX and XyJaX.

The README installs it by cloning the repository, running `bundle`, and putting `bin/clayoven` on the path; `clayoven init` creates a starter project and `clayoven httpd` previews the site locally. The [rdoc documentation](https://artagnon.github.io/clayoven/) describes the code.
