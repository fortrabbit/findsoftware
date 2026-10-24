---
id: laika
name: Laika
urls:
  home: https://typelevel.org/Laika/
  repository: https://github.com/typelevel/Laika
  docs: https://typelevel.org/Laika/
category:
  - ssg
description: Scala library and sbt plugin that generates HTML sites and EPUB and PDF e-books from Markdown and reStructuredText.
status: active
maintainer: Typelevel
firstRelease: 2016
runtime:
  - jvm
hosting:
  - static
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: sbt plugin (laika-sbt), Scala library from Maven Central
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2025-04-01
githubStargazers: 457
contributors: 23
social:
  discord: https://discord.gg/XF3CXcMzqD
  forum: https://github.com/typelevel/Laika/discussions
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://typelevel.org/Laika/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/typelevel/Laika
    checkedAt: 2026-10-23
  - field: urls
    url: https://typelevel.org/Laika/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://api.github.com/orgs/typelevel
    checkedAt: 2026-10-23
  - field: category
    url: https://typelevel.org/Laika/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://typelevel.org/Laika/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://typelevel.org/Laika/latest/02-running-laika/01-sbt-plugin.html
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://typelevel.org/Laika/latest/02-running-laika/01-sbt-plugin.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://typelevel.org/Laika/latest/02-running-laika/01-sbt-plugin.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://typelevel.org/Laika/latest/02-running-laika/01-sbt-plugin.html
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/typelevel/Laika/blob/main/license.txt
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/typelevel/Laika/blob/main/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/typelevel/Laika/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/typelevel/Laika/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/typelevel/Laika/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/typelevel/Laika
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/typelevel/Laika/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
---

Laika turns Markdown and reStructuredText sources into HTML sites and into EPUB and PDF e-books, and is used as a Scala library or an sbt plugin. It runs on the JVM, and its library can also run in the browser through Scala.js. The sbt task laikaSite writes the HTML site to a folder in the project's target directory, and a preview task serves that folder on localhost. The project is hosted under the Typelevel organization on GitHub, and questions go to its discussions or to the Typelevel chat.

## Worth knowing

The sbt plugin needs sbt 1.x, the Scala build tool. Releases before the 1.x line were published under another group ID, so older projects that depend on the library use different coordinates.
