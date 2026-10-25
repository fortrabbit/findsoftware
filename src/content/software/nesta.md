---
id: nesta
name: nesta
urls:
  home: https://nestacms.com
  repository: https://github.com/gma/nesta
  docs: https://nestacms.com/docs/
category:
  - cms
  - ssg
description: Ruby content management system built with Sinatra that stores content as plain text files and can be deployed as static HTML or rendered on the server.
status: active
maintainer: Graham Ashton
maintainerType: individual
firstRelease: 2010
language: ruby
runtime:
  - ruby
hosting:
  - ruby
  - static
runsAs:
  - static
  - local
renderingModes:
  - static
  - server
installMethod: RubyGems (gem install nesta)
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2024-11-19
githubStargazers: 899
contributors: 23
dependentRepos: 130
dependentPackages: 25
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/gma/nesta
    checkedAt: 2026-10-23
  - field: urls
    url: https://nestacms.com/
    checkedAt: 2026-10-23
  - field: urls
    url: https://nestacms.com/docs/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/gma/nesta/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/gma/nesta
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/gma/nesta
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/gma/nesta/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/gma/nesta/blob/main/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/gma/nesta/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://nestacms.com/docs/quick-start/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/gma/nesta/blob/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/gma/nesta/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/gma/nesta/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/gma/nesta/blob/main/README.md
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/gma/nesta
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/gma/nesta/contributors
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/nesta.json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://rubygems.org/api/v1/gems/nesta.json
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/gems/nesta.json
    checkedAt: 2026-10-23
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/nesta
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/nesta
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Nesta is a content management system written in Ruby with the Sinatra web framework. Content is kept in plain text files on disk, written in Markdown or Textile, so the site needs no database. A site can be built as static HTML, or served with pages rendered on the server, and a local web server runs in development mode. Nesta is installed as a RubyGem. Graham Ashton maintains it.

## Worth knowing

Nesta is at major version 0, and its releases are published as tags, not as GitHub releases. Server rendering needs a Rack-compatible web server, and the deployment guide recommends Puma.
