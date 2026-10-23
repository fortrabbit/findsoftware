---
id: kobweb
name: Kobweb
urls:
  home: https://kobweb.varabyte.com
  repository: https://github.com/varabyte/kobweb
  docs: https://kobweb.varabyte.com/docs
category:
  - framework
  - ssg
description: Kotlin framework for building static or full stack websites and web apps on Compose HTML, with an export step that produces static site files.
status: active
maintainer: Varabyte
firstRelease: 2021
runtime:
  - jvm
hosting:
  - java
  - static
runsAs:
  - static
  - always-on
renderingModes:
  - static
installMethod: Homebrew, Nix, Scoop, SDKMAN, binary download, build from source
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-08-19
githubStargazers: 2254
contributors: 32
social:
  discord: https://discord.gg/5NZ2GKV5Cs
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://kobweb.varabyte.com
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/varabyte/kobweb
    checkedAt: 2026-10-23
  - field: urls
    url: https://kobweb.varabyte.com/docs
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://kobweb.varabyte.com/docs/getting-started/getting-kobweb
    checkedAt: 2026-10-23
  - field: category
    url: https://kobweb.varabyte.com/docs
    checkedAt: 2026-10-23
  - field: runtime
    url: https://kobweb.varabyte.com/docs/concepts/server/fullstack
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/varabyte/kobweb/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://kobweb.varabyte.com/docs/concepts/foundation/exporting
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://kobweb.varabyte.com/docs/concepts/foundation/exporting
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/varabyte/kobweb/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/varabyte/kobweb/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/varabyte/kobweb/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/varabyte/kobweb/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/varabyte/kobweb/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/varabyte/kobweb
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/varabyte/kobweb/contributors?per_page=1
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://kobweb.varabyte.com/docs/concepts/foundation/exporting
    checkedAt: 2026-10-23
figure:
  emoji: 🧱
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: Framework
ai: authored
---

Kobweb is a Kotlin framework for websites and web apps, built on top of Compose HTML. The export step takes a snapshot of every page, so a crawler that does not run JavaScript still reads HTML. A site can be exported as a static layout of files for a static hosting provider, or built as a full stack site with a server on a JVM target. The Kobweb command-line tool drives the build through Gradle and is installed with Homebrew, Nix, Scoop, SDKMAN or a binary download. Export runs a headless browser, which it can download on the first export unless a local one is configured.

## Worth knowing

The README says the framework is still pre-1.0. A full stack site needs a server to run, while a static layout site needs only a host that serves files.
