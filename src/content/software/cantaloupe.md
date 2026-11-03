---
id: cantaloupe
name: Cantaloupe
urls:
  home: https://cantaloupe-project.github.io
  repository: https://github.com/cantaloupe-project/cantaloupe
  docs: https://cantaloupe-project.github.io/manual/5.0/getting-started.html
category:
  - media
description: Java image server that generates cropped, scaled, rotated and watermarked derivatives of source images on request, including IIIF Image API responses.
status: active
maintainer: The Board of Trustees at the University of Illinois
firstRelease: 2015
language: java
runtime:
  - jvm
hosting:
  - java
adminUi: true
runsAs:
  - always-on
installMethod: release-jar
licenseModel: open-source
license: NCSA
currentMajor: "5"
latestReleaseDate: 2026-10-28
githubStargazers: 309
contributors: 34
social:
  forum: https://github.com/cantaloupe-project/cantaloupe/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://cantaloupe-project.github.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/cantaloupe-project/cantaloupe
    checkedAt: 2026-11-03
  - field: urls
    url: https://cantaloupe-project.github.io/manual/5.0/getting-started.html
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/cantaloupe-project/cantaloupe/develop/LICENSE.txt
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/cantaloupe-project/cantaloupe/releases
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/cantaloupe-project/cantaloupe
    checkedAt: 2026-11-03
  - field: category
    url: https://cantaloupe-project.github.io/
    checkedAt: 2026-11-03
  - field: runtime
    url: https://cantaloupe-project.github.io/manual/5.0/getting-started.html
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://cantaloupe-project.github.io/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/cantaloupe-project/cantaloupe/blob/develop/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/cantaloupe-project/cantaloupe/blob/develop/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/cantaloupe-project/cantaloupe/blob/develop/README.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/cantaloupe-project/cantaloupe/blob/develop/README.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/cantaloupe-project/cantaloupe/releases/tag/v5.0.8
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/cantaloupe-project/cantaloupe/releases/tag/v5.0.8
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/cantaloupe-project/cantaloupe
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/cantaloupe-project/cantaloupe/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://cantaloupe-project.github.io/manual/5.0/endpoints.html
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Cantaloupe is an image server written in Java that generates derivatives of source images on request, such as cropped, scaled, rotated or watermarked versions. It runs as a standalone Java process with its own web server, started from a release JAR or from a JAR built with Maven, and it needs Java 21 as its base requirement. The server follows the IIIF Image API, and a delegate class written in Ruby or Java can customize its behavior.

## Worth knowing

The manual lists eight image processors: Java 2D, which is the default, and JAI, TurboJPEG, Kakadu Native, OpenJPEG, Grok, FFmpeg and PDFBox. The project ships no official Docker image. A web-based Control Panel is available and is off by default.
