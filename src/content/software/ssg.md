---
id: ssg
name: lustre_ssg
urls:
  repository: https://github.com/lustre-labs/ssg
  docs: https://hexdocs.pm/lustre_ssg/
category:
  - ssg
description: Static site generator for Lustre projects, written in Gleam.
status: active
maintainer: lustre-labs
firstRelease: 2023
runtime:
  - beam
  - node
  - deno
hosting:
  - static
runsAs:
  - static
renderingModes:
  - static
installMethod: gleam add
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-05-21
githubStargazers: 108
contributors: 18
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/lustre-labs/ssg
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/lustre-labs/ssg/blob/main/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/lustre-labs/ssg/blob/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/lustre-labs/ssg/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/lustre-labs/ssg/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/lustre-labs/ssg/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/lustre-labs/ssg/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/lustre-labs/ssg/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://hex.pm/api/packages/lustre_ssg
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/lustre-labs/ssg/blob/main/gleam.toml
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://api.github.com/repos/lustre-labs/ssg
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/lustre-labs/ssg/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/lustre-labs/ssg/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/lustre-labs/ssg/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/lustre-labs/ssg
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/lustre-labs/ssg/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: SSG
ai: authored
---

lustre_ssg is a static site generator for Lustre projects, written in Gleam, and it runs on both Gleam's Erlang and JavaScript targets. A project declares its routes in a build script and runs it with gleam run -m build, and the output is a folder of HTML files. The README states that the package has no command line interface, no built-in server and no client-side hydration.
