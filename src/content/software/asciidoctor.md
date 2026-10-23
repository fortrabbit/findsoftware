---
id: asciidoctor
name: Asciidoctor
urls:
  home: https://asciidoctor.org
  repository: https://github.com/asciidoctor/asciidoctor
  docs: https://docs.asciidoctor.org/
category:
  - media
description: Ruby text processor that converts AsciiDoc source into HTML 5, DocBook 5, man pages and other output formats.
status: active
maintainer: Dan Allen, Sarah White, Ryan Waldron, and the individual contributors
maintainerType: community
firstRelease: 2012
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 2.3
installMethod: gem install, Bundler, Linux distribution packages, Homebrew or MacPorts, or the Docker image
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2025-10-24
githubStargazers: 5224
contributors: 190
social:
  x: https://twitter.com/asciidoctor
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://asciidoctor.org/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/asciidoctor/asciidoctor
    checkedAt: 2026-10-23
  - field: urls
    url: https://asciidoctor.org/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/asciidoctor/asciidoctor/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://asciidoctor.org/
    checkedAt: 2026-10-23
  - field: category
    url: https://asciidoctor.org/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://asciidoctor.org/
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://asciidoctor.org/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://docs.asciidoctor.org/asciidoctor/latest/install/
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/asciidoctor/asciidoctor/main/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/asciidoctor/asciidoctor/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/asciidoctor.json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/asciidoctor/asciidoctor/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/asciidoctor/asciidoctor/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/asciidoctor/asciidoctor
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/asciidoctor/asciidoctor/contributors?per_page=1
    checkedAt: 2026-10-23
figure:
  emoji: 🖼️
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: Ruby · Media
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Asciidoctor is the Ruby processor for AsciiDoc, the markup language. It reads AsciiDoc source and converts it to output formats such as HTML 5, DocBook 5 and man pages. PDF and EPUB 3 output come from separate converter gems. It is the successor to AsciiDoc.py.

Asciidoctor is installed as a gem from RubyGems, through Bundler, a Linux distribution package, Homebrew or MacPorts, or the Docker image named on the [install page](https://docs.asciidoctor.org/asciidoctor/latest/install/). The same language is processed outside Ruby by Asciidoctor.js, for JavaScript, and AsciidoctorJ, for the JVM. Both are separate projects.

## Worth knowing

Asciidoctor itself requires a Ruby implementation: CRuby, JRuby or TruffleRuby, in the version ranges the homepage lists.
