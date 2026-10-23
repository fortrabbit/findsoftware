---
id: gaiden
name: Gaiden
urls:
  home: https://kobo.github.io/gaiden/
  repository: https://github.com/kobo/gaiden
  docs: https://kobo.github.io/gaiden/
category:
  - ssg
description: Documentation tool that builds HTML pages from Markdown files, written in Groovy.
status: active
maintainer: The respective authors and developers
maintainerType: community
firstRelease: 2013
runtime:
  - jvm
hosting:
  - static
contentStore:
  - flat-file
runsAs:
  - local
  - static
renderingModes:
  - static
installMethod: SDKMAN (sdk install gaiden)
licenseModel: open-source
license: Apache-2.0, Apache License, Version 2.0
currentMajor: "1"
latestReleaseDate: 2022-12-15
githubStargazers: 172
contributors: 6
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://kobo.github.io/gaiden/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/kobo/gaiden
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/kobo/gaiden/blob/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/kobo/gaiden/blob/main/NOTICE
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/kobo/gaiden/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://kobo.github.io/gaiden/getting-started.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://kobo.github.io/gaiden/getting-started.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://kobo.github.io/gaiden/getting-started.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://kobo.github.io/gaiden/getting-started.html
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://kobo.github.io/gaiden/getting-started.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://kobo.github.io/gaiden/getting-started.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://kobo.github.io/gaiden/commands.html
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://kobo.github.io/gaiden/commands.html
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/kobo/gaiden
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/kobo/gaiden/blob/main/README.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/kobo/gaiden/blob/main/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/kobo/gaiden/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/kobo/gaiden/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/kobo/gaiden/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/kobo/gaiden
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/kobo/gaiden/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: SSG
ai: authored
---

Gaiden is a documentation tool that turns Markdown files into HTML pages, written in Groovy. A project holds the Markdown pages next to two Groovy configuration files, one for settings and one for the list of pages. The `build` command writes the HTML pages and static resources to a build directory, and `dist` zips the HTML files.

Gaiden runs on a Java SE installation, as the [getting started guide](https://kobo.github.io/gaiden/getting-started.html) states. The guide also describes a wrapper script that downloads Gaiden when a project's command first runs, so Gaiden need not be installed first.

## Worth knowing

The LICENSE file names no copyright holder; the NOTICE file names "the respective authors and developers".
