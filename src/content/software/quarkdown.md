---
id: quarkdown
name: Quarkdown
urls:
  home: https://quarkdown.com
  repository: https://github.com/iamgio/quarkdown
  docs: https://quarkdown.com/wiki
category:
  - ssg
description: Markdown-based typesetting system that compiles one source into papers, presentations, knowledge bases and static websites.
status: active
maintainer: Giorgio Garofalo
maintainerType: individual
firstRelease: 2025
language: other
runtime:
  - jvm
hosting:
  - static
runsAs:
  - static
renderingModes:
  - static
installMethod: install script, homebrew, scoop, manual zip
licenseModel: open-source
license: GPL-3.0, AGPL-3.0
currentMajor: "2"
latestReleaseDate: 2026-10-09
githubStargazers: 16321
contributors: 32
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://quarkdown.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/iamgio/quarkdown
    checkedAt: 2026-10-23
  - field: urls
    url: https://quarkdown.com/wiki
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://quarkdown.com/
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/iamgio/quarkdown
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/iamgio/quarkdown/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/iamgio/quarkdown/blob/main/build.gradle.kts
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/iamgio/quarkdown/blob/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/iamgio/quarkdown/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/iamgio/quarkdown/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/iamgio/quarkdown/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/iamgio/quarkdown/blob/main/README.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://quarkdown.com/
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/iamgio/quarkdown/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/iamgio/quarkdown/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/iamgio/quarkdown/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/iamgio/quarkdown
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/iamgio/quarkdown/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Quarkdown is a Markdown-based typesetting system that compiles one source into papers, presentations, knowledge bases and static websites. It writes HTML, PDF, Markdown and plain text. The compiler is written in Kotlin and runs on the JVM, and the release archives bundle a Java runtime.

The HTML target includes a static site export, and anything placed in the project's `public` folder is copied to the output root without processing. The README also describes using Quarkdown from GitHub Actions workflows.

## Worth knowing

PDF export needs a Chromium-family browser, which the install scripts add. The compiler is licensed GPLv3 by default, with its command-line tool and language server under AGPLv3.

The [wiki](https://quarkdown.com/wiki) holds the guides and the CLI reference.
