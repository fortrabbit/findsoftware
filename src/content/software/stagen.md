---
id: stagen
name: StaGen
urls:
  repository: https://github.com/wiztools/stagen
  docs: https://github.com/wiztools/stagen/wiki/Tutorial
category:
  - ssg
description: Static site generator written in Java, built for the WizTools.org website.
status: stub
maintainer: WizTools.org
firstRelease: 2014
language: java
runtime:
  - jvm
hosting:
  - static
contentStore:
  - flat-file
templating: stringtemplate
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: download the release archive and add its bin folder to PATH
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2014-11-22
githubStargazers: 45
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/wiztools/stagen
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/wiztools/stagen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/wiztools/stagen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/wiztools/stagen
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/wiztools/stagen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/wiztools/stagen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/wiztools/stagen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/wiztools/stagen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/wiztools/stagen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/wiztools/stagen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/wiztools/stagen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/wiztools/stagen
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/wiztools/stagen/master/LICENSE.txt
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/wiztools/stagen/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/wiztools/stagen/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/wiztools/stagen/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/wiztools/stagen
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/wiztools/stagen/contributors
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/wiztools/stagen/wiki/Tutorial
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/wiztools/stagen/blob/master/README.md
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: Java · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

StaGen is a static site generator written in Java and the generator behind the WizTools.org website. Content is Markdown, StringTemplate 4 renders it, and the build writes HTML files into a target folder. A command starts an embedded Jetty server that rebuilds the site while the developer edits it.

## Worth knowing

The README says StaGen does not support themes or blog-style pages, and suits sites with few pages generated from few templates. It gives Java 17 as a prerequisite for the current code, while the newest release dates from 2014, so the release and the README may not describe the same build.
