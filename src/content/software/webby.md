---
id: webby
name: Webby
urls:
  repository: https://github.com/TwP/webby
category:
  - ssg
description: Ruby static website generator that combines page contents with layouts to produce HTML.
status: discontinued
maintainer: Tim Pease
maintainerType: individual
firstRelease: 2008
language: ruby
runtime:
  - ruby
hosting:
  - static
contentStore:
  - flat-file
templating: erb, textile, markdown, haml, sass
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: gem install
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2009-07-25
githubStargazers: 265
contributors: 7
dependentRepos: 24
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: status
    url: https://raw.githubusercontent.com/TwP/webby/master/README.rdoc
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/TwP/webby
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/TwP/webby/master/webby.gemspec
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/TwP/webby
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/TwP/webby/master/README.rdoc
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/TwP/webby/master/webby.gemspec
    checkedAt: 2026-10-23
  - field: templating
    url: https://raw.githubusercontent.com/TwP/webby/master/README.rdoc
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/TwP/webby/master/README.rdoc
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://raw.githubusercontent.com/TwP/webby/master/webby.gemspec
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/TwP/webby/master/README.rdoc
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/TwP/webby/master/README.rdoc
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/TwP/webby/master/README.rdoc
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/TwP/webby/master/README.rdoc
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/TwP/webby/git/refs/tags/webby-0.7.1
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/TwP/webby/git/refs/tags/webby-0.9.4
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/gems/webby.json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/TwP/webby
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/TwP/webby/contributors
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/TwP/webby/master/README.rdoc
    checkedAt: 2026-10-23
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/webby
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Webby is a Ruby tool that combines the contents of each page with a shared layout, such as the header, navigation and footer, to produce HTML files. Its autobuild mode regenerates pages as they change and serves the output through WEBrick, the web server bundled with Ruby, for local preview. The generated files are plain HTML, so the live site needs no server-side code and any web space can host it.

## Worth knowing

The README says Webby is no longer under active development and points readers to nanoc, a similar tool. The project's RubyForge homepage no longer answers, so the README and the gem are the only readable sources.
