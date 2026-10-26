---
id: zap
name: Zap
urls:
  repository: https://github.com/zigzap/zap
category:
  - framework
description: Microframework for web applications in Zig, built on the facil.io C library.
status: discontinued
maintainer: Rene Schallner
maintainerType: individual
firstRelease: 2023
language: zig
basedOn:
  - facil-io
templating: mustache
runsAs:
  - always-on
installMethod: zig fetch (Zig build dependency)
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-08-28
githubStargazers: 3407
contributors: 36
social:
  discord: https://discord.gg/jQAAN6Ubyj
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: status
    url: https://raw.githubusercontent.com/zigzap/zap/master/README.md
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/zigzap/zap
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/zigzap/zap/releases
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/zigzap/zap/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: maintainerType
    url: https://github.com/zigzap/zap/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/zigzap/zap
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/zigzap/zap/master/README.md
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://raw.githubusercontent.com/zigzap/zap/master/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://raw.githubusercontent.com/zigzap/zap/master/README.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://raw.githubusercontent.com/zigzap/zap/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/zigzap/zap/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/zigzap/zap/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://api.github.com/repos/zigzap/zap
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/zigzap/zap/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/zigzap/zap/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/zigzap/zap
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/zigzap/zap/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Zap is a microframework for web applications written in Zig. It wraps and patches the facil.io C library to serve HTTP from Zig, and the README includes a mustache templating example.

Zap is added to a Zig project with `zig fetch` and a dependency in `build.zig`.

## Worth knowing

The repository is archived. Its README names Baz, a Zig successor built on bounded/http, as the alternative on the way. The README also says Zap does not work on Windows, with WSL2 or a container as the way around.
