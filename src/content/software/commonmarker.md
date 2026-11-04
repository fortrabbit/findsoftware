---
id: commonmarker
name: Commonmarker
urls:
  repository: https://github.com/gjtorikian/commonmarker
category:
  - library
description: Ruby gem that wraps the comrak Rust parser to convert CommonMark and GitHub Flavored Markdown to HTML.
status: active
maintainer: Garen J. Torikian
maintainerType: individual
firstRelease: 2015
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3.2
basedOn:
  - comrak
installMethod: bundler
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-16
githubStargazers: 566
contributors: 41
dependentRepos: 317893
dependentPackages: 69
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://api.github.com/repos/gjtorikian/commonmarker
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/gjtorikian/commonmarker/blob/v2.10.1/LICENSE.txt
    checkedAt: 2026-11-04
  - field: language
    url: https://github.com/gjtorikian/commonmarker/blob/main/README.md
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/gjtorikian/commonmarker/blob/main/README.md
    checkedAt: 2026-11-04
  - field: runtime
    url: https://github.com/gjtorikian/commonmarker/blob/v2.10.1/commonmarker.gemspec
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://github.com/gjtorikian/commonmarker/blob/v2.10.1/commonmarker.gemspec
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://github.com/gjtorikian/commonmarker/blob/main/README.md
    checkedAt: 2026-11-04
  - field: basedOn
    url: https://github.com/gjtorikian/commonmarker/blob/main/README.md
    checkedAt: 2026-11-04
  - field: license
    url: https://api.github.com/repos/gjtorikian/commonmarker
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://api.github.com/repos/gjtorikian/commonmarker/releases
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/gjtorikian/commonmarker/releases
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/gjtorikian/commonmarker/releases
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/gjtorikian/commonmarker
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/gjtorikian/commonmarker/contributors?per_page=1
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/commonmarker
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/commonmarker
    checkedAt: 2026-11-04
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
runsAs: null
---

Commonmarker is a Ruby gem that converts Markdown to HTML and parses it into a tree a program can walk and change. The gem wraps the comrak Rust library, so a Ruby program calls compiled Rust code through methods such as Commonmarker.to_html. Parsed documents can also be turned back into CommonMark with to_commonmark.

The strikethrough, table, autolink and task list extensions from the GitHub Flavored Markdown specification are on by default, as are shortcodes and a syntax highlighter for fenced code blocks. Setting an extension option to false turns it off, and the syntax highlighter is disabled by setting its plugin to nil.

## Worth knowing

The gem's README states that it can currently only generate HTML. Building the gem from source compiles the Rust extension, and the README's developer section points to the comrak dependency instructions when that step fails.
