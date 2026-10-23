---
id: jssg
name: jssg
urls:
  repository: https://github.com/agrison/jssg
  docs: https://github.com/agrison/jssg/blob/master/README.md
category:
  - ssg
description: Java static site generator that builds Markdown and Textile posts and pages into HTML with Freemarker layouts.
status: stub
maintainer: Alexandre Grison
maintainerType: individual
language: java
runtime:
  - jvm
hosting:
  - static
contentStore:
  - flat-file
templating: freemarker
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: git clone, then mvn package
githubStargazers: 22
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/agrison/jssg
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/agrison/jssg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/agrison/jssg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/agrison/jssg
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/agrison/jssg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/agrison/jssg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/agrison/jssg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/agrison/jssg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/agrison/jssg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/agrison/jssg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/agrison/jssg/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/agrison/jssg/blob/master/pom.xml
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/agrison/jssg
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/agrison/jssg/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: Java · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

jssg is a static site generator written in Java. It reads posts and pages written in Markdown or Textile and merges them into HTML with Freemarker layouts, writing the result to a build folder. The project is installed by cloning the repository and running `mvn package`. `jssg -build -serve` builds the site and starts a local server that rebuilds changed files, and the README says the built site can be put on any web server.

## Worth knowing

The repository holds no LICENSE file.

Code snippet highlighting uses Pygments, which has to be in the PATH or set in the config.properties file.
