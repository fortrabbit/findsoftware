---
id: cobalt
name: Cobalt
urls:
  home: https://cobalt-org.github.io/
  repository: https://github.com/cobalt-org/cobalt.rs
  docs: https://cobalt-org.github.io/docs/
category:
  - ssg
description: Straightforward static site generator written in Rust that turns Markdown pages, posts and Liquid layouts into a static site.
status: active
maintainer: Cobalt contributors
maintainerType: community
firstRelease: 2017
language: rust
runtime:
  - binary
hosting:
  - static
contentStore:
  - flat-file
templating: liquid
runsAs:
  - static
renderingModes:
  - static
installMethod: binary download
licenseModel: open-source
license: Apache-2.0, MIT
currentMajor: "0"
latestReleaseDate: 2026-02-19
githubStargazers: 1537
contributors: 52
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://cobalt-org.github.io/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/cobalt-org/cobalt.rs
    checkedAt: 2026-10-23
  - field: urls
    url: https://cobalt-org.github.io/docs/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://cobalt-org.github.io/
    checkedAt: 2026-10-23
  - field: maintainerType
    url: https://cobalt-org.github.io/
    checkedAt: 2026-10-23
  - field: description
    url: https://github.com/cobalt-org/cobalt.rs/blob/master/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://cobalt-org.github.io/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://cobalt-org.github.io/docs/install/
    checkedAt: 2026-10-23
  - field: category
    url: https://cobalt-org.github.io/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://cobalt-org.github.io/getting-started/
    checkedAt: 2026-10-23
  - field: templating
    url: https://cobalt-org.github.io/docs/layouts/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://cobalt-org.github.io/docs/usage
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://cobalt-org.github.io/docs/usage
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://cobalt-org.github.io/docs/install/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://cobalt-org.github.io/docs/install/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://cobalt-org.github.io/docs/install/
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/cobalt-org/cobalt.rs/master/LICENSE-APACHE
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/cobalt-org/cobalt.rs/master/LICENSE-MIT
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/cobalt-org/cobalt.rs/master/LICENSE-MIT
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/cobalt-org/cobalt.rs/releases?per_page=100
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/cobalt-org/cobalt.rs/releases/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/cobalt-org/cobalt.rs/releases/latest
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/cobalt-org/cobalt.rs
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/cobalt-org/cobalt.rs/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Cobalt is a static site generator written in Rust. It reads Markdown pages and posts, and renders them through Liquid layouts that can include shared fragments from an `_includes` directory. Content is kept as files in the site directory. Running `cobalt build` writes HTML files to `_site`, ready to be served by a web server. The `cobalt serve` command builds the site and serves it locally while watching for changes, and posts start as drafts until they are published with `cobalt publish`.

The project's [deployment guide](https://cobalt-org.github.io/docs/deployment) describes publishing the output to GitHub Pages or GitLab Pages through a CI job, and uploading it to a self-hosted server with rsync or a git hook.
