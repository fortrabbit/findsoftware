---
id: zine
name: Zine
urls:
  home: https://zine-ssg.io
  repository: https://github.com/kristoff-it/zine
  docs: https://zine-ssg.io/docs/
category:
  - ssg
description: Static site generator, written in Zig, that builds a site from content files and layouts into an output directory.
status: active
maintainer: Loris Cro
maintainerType: individual
firstRelease: 2024
runtime:
  - binary
hosting:
  - static
contentStore:
  - flat-file
templating: superhtml
i18n: yes
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: download a binary for the platform, or build from source with Zig
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-09-03
githubStargazers: 1621
contributors: 44
social:
  forum: https://zine.discourse.group
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://zine-ssg.io/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/kristoff-it/zine
    checkedAt: 2026-10-23
  - field: urls
    url: https://zine-ssg.io/docs/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/kristoff-it/zine/main/LICENSE
    checkedAt: 2026-10-23
  - field: category
    url: https://zine-ssg.io/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://zine-ssg.io/quickstart/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://zine-ssg.io/quickstart/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://zine-ssg.io/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://zine-ssg.io/docs/cli/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://zine-ssg.io/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://zine-ssg.io/
    checkedAt: 2026-10-23
  - field: templating
    url: https://zine-ssg.io/
    checkedAt: 2026-10-23
  - field: i18n
    url: https://zine-ssg.io/docs/i18n/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/kristoff-it/zine
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/kristoff-it/zine/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/kristoff-it/zine/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/kristoff-it/zine/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/kristoff-it/zine/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/kristoff-it/zine
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/kristoff-it/zine/contributors
    checkedAt: 2026-10-23
ai: authored
---

Zine is a static site generator written in Zig. A Zine site is a collection of content files and layouts. The build turns the content into HTML, styles it with the layouts and copies the result into an output directory, which a static host can serve. Content is written in SuperMD, an extension of Markdown, and layouts are written in SuperHTML.

Zine is installed from a download for the platform, or compiled from source with Zig; the [quickstart](https://zine-ssg.io/quickstart/) covers both. The [docs](https://zine-ssg.io/docs/) include deployment guides for GitHub Pages, Cloudflare Pages, Codeberg Pages and sourcehut pages, and an official GitHub Action runs Zine in CI.

Loris Cro maintains the project under the MIT license.

## Worth knowing

The homepage describes Zine as beta software and says that not all planned features are implemented yet. Building from source needs Zig.
