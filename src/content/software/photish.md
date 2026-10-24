---
id: photish
name: Photish
urls:
  repository: https://github.com/henrylawson/photish
  docs: https://github.com/henrylawson/photish#photish
category:
  - ssg
  - media
description: Ruby static site generator that builds photo galleries from folders of photos and YAML metadata.
status: stub
maintainer: Henry Lawson
maintainerType: individual
firstRelease: 2016
language: ruby
runtime:
  - ruby
hosting:
  - static
runtimeMin: ruby 2.0
contentStore:
  - flat-file
templating: tilt
runsAs:
  - local
  - static
renderingModes:
  - static
installMethod: gem install photish
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2016-01-19
githubStargazers: 152
contributors: 3
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/henrylawson/photish
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/henrylawson/photish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/henrylawson/photish/master/LICENSE.txt
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/henrylawson/photish
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/henrylawson/photish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/henrylawson/photish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/henrylawson/photish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/henrylawson/photish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/henrylawson/photish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/henrylawson/photish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/henrylawson/photish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/henrylawson/photish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/henrylawson/photish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/henrylawson/photish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/henrylawson/photish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/henrylawson/photish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/henrylawson/photish/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/henrylawson/photish
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/henrylawson/photish/master/LICENSE.txt
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/henrylawson/photish/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/henrylawson/photish/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/henrylawson/photish/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/henrylawson/photish
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/henrylawson/photish/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Photish is a Ruby static site generator for photo galleries. Photos are grouped by folder, metadata for each photo can be written in a YAML file alongside it, and the templates that render the pages can use any engine that Tilt implements. `photish generate` writes a complete static website, which the [README](https://github.com/henrylawson/photish/blob/master/README.md) says can be hosted on NGINX, Apache HTTP Server or GitHub Pages, and `photish host` serves it locally while working on it.

The gem is the main install route, and Debian and RPM packages, Linux binaries and Windows binaries also exist.

## Worth knowing

The README lists ImageMagick or GraphicsMagick for image conversion and Exiftool for Exif metadata as separate dependencies that the packages do not install. It also says not all features are available in the native packages.
