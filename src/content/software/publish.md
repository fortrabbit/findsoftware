---
id: publish
name: Publish
urls:
  repository: https://github.com/JohnSundell/Publish
  docs: https://github.com/JohnSundell/Publish/tree/master/Documentation
category:
  - ssg
description: Static site generator for Swift developers, in which each website is defined as a Swift package.
status: stub
maintainer: John Sundell
maintainerType: individual
firstRelease: 2019
runtime:
  - binary
hosting:
  - static
contentStore:
  - flat-file
templating: Plot
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: Swift Package Manager dependency
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2022-04-24
githubStargazers: 4971
contributors: 38
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/JohnSundell/Publish
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/JohnSundell/Publish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/JohnSundell/Publish/master/LICENSE
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/JohnSundell/Publish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/JohnSundell/Publish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/JohnSundell/Publish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/JohnSundell/Publish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/JohnSundell/Publish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/JohnSundell/Publish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/JohnSundell/Publish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/JohnSundell/Publish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/JohnSundell/Publish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/JohnSundell/Publish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/JohnSundell/Publish
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/JohnSundell/Publish/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/JohnSundell/Publish/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/JohnSundell/Publish/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/JohnSundell/Publish/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/JohnSundell/Publish
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/JohnSundell/Publish/contributors
    checkedAt: 2026-10-23
ai: authored
---

Publish is a static site generator for Swift developers, in which each website is a Swift package and its configuration, content and publishing pipeline are written as Swift code. By default it reads Markdown files from a `Content` folder, and extra items and pages can be added in code. HTML is rendered through Plot, a Swift library for HTML, so themes are written in Swift against it. The build produces static files, and the command line tool can start a localhost server for local testing and development. Built-in deployment methods publish the output to Git and GitHub.

## Worth knowing

Building a site needs Swift 5.4 or later on the machine that runs the build.
