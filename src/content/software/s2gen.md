---
id: s2gen
name: s2gen
urls:
  home: https://appliedscala.com/s2gen/
  repository: https://github.com/denisftw/s2gen
  docs: https://github.com/denisftw/s2gen/blob/master/README.md
category:
  - ssg
description: Static site generator written in Scala that builds a site from Markdown content and Freemarker templates, with a monitor mode and an embedded server.
status: stub
maintainer: Denis Kalinin
maintainerType: individual
firstRelease: 2016
runtime:
  - jvm
hosting:
  - static
runtimeMin: jvm 8
contentStore:
  - flat-file
templating: freemarker
i18n: yes
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: download the release package and add its bin directory to PATH
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2022-08-11
githubStargazers: 15
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://appliedscala.com/s2gen/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/denisftw/s2gen
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/denisftw/s2gen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/denisftw/s2gen/master/LICENSE
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/denisftw/s2gen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/denisftw/s2gen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/denisftw/s2gen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/denisftw/s2gen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/denisftw/s2gen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/denisftw/s2gen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/denisftw/s2gen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/denisftw/s2gen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/denisftw/s2gen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://github.com/denisftw/s2gen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/denisftw/s2gen
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/denisftw/s2gen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/denisftw/s2gen/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/denisftw/s2gen/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/denisftw/s2gen/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/denisftw/s2gen
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/denisftw/s2gen/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: SSG
ai: authored
---

s2gen is a static site generator written in Scala. It reads content written in Markdown, renders it with Freemarker templates, and writes HTML files to a site directory, and it can build localized versions of a site alongside the default one. In monitor mode it watches for file changes and serves the generated files from an embedded web server, which the README describes as enough for testing.

## Worth knowing

The generator needs a Java runtime, JRE 8 at least, on the machine that builds the site.
