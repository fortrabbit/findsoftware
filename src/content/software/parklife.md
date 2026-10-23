---
id: parklife
name: parklife
urls:
  home: https://parklife.dev
  repository: https://github.com/benpickles/parklife
  docs: https://parklife.dev/cli
category:
  - ssg
description: Ruby library that renders a Rack application, such as Rails or Sinatra, into a static HTML build.
status: active
maintainer: Ben Pickles
maintainerType: individual
firstRelease: 2023
language: ruby
runtime:
  - ruby
hosting:
  - static
runtimeMin: ruby 2.5
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: Gemfile, then bundle install
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-08-19
githubStargazers: 308
contributors: 5
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://parklife.dev/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/benpickles/parklife
    checkedAt: 2026-10-23
  - field: urls
    url: https://parklife.dev/cli
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://parklife.dev/cli
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/benpickles/parklife
    checkedAt: 2026-10-23
  - field: category
    url: https://parklife.dev/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://parklife.dev/
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://rubygems.org/api/v1/versions/parklife.json
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/benpickles/parklife/blob/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://parklife.dev/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://parklife.dev/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/benpickles/parklife/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/benpickles/parklife/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/benpickles/parklife/blob/main/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/benpickles/parklife/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/benpickles/parklife/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/benpickles/parklife/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/benpickles/parklife
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/benpickles/parklife/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: Ruby · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

parklife is a Ruby gem that renders a Rack application, such as one built with Rails or Sinatra, into a static build. It is added to the application's Gemfile, and the parklife build command crawls the application and writes the static files to a build directory. The build can be served by GitHub Pages, Netlify, S3, Vercel, or any other server.

## Worth knowing

The README says parklife does not handle assets such as images and CSS, which have to be generated and copied into the build directory separately.
