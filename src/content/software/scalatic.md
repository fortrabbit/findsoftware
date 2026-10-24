---
id: scalatic
name: Scalatic
urls:
  repository: https://github.com/padurean/scalatic
  docs: https://github.com/padurean/scalatic/blob/master/README.md
category:
  - ssg
description: Scala static blog generator that renders GitHub-flavored Markdown posts into HTML through the GitHub API.
status: stub
maintainerType: individual
firstRelease: 2015
runtime:
  - jvm
hosting:
  - static
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: clone the repository and run with sbt
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2015-07-02
githubStargazers: 24
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/padurean/scalatic
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/padurean/scalatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/padurean/scalatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/padurean/scalatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/padurean/scalatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/padurean/scalatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/padurean/scalatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/padurean/scalatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/padurean/scalatic/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/padurean/scalatic
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/padurean/scalatic/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/padurean/scalatic/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/padurean/scalatic/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/padurean/scalatic/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/padurean/scalatic
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/padurean/scalatic/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
---

Scalatic is a static blog generator written in Scala. It renders each Markdown post to HTML by calling the GitHub API, so a build needs network access to GitHub. The generated blog is written to a target folder inside the blog's folder structure. It runs on the JVM, either from the single jar on the release page or from a clone with sbt.
