---
id: jsbundling-rails
name: jsbundling-rails
urls:
  repository: https://github.com/rails/jsbundling-rails
  docs: https://github.com/rails/jsbundling-rails/blob/main/README.md
category:
  - build-tool
description: Rails gem that bundles JavaScript with Bun, esbuild, rollup.js or Webpack and delivers the output through the Rails asset pipeline.
status: active
maintainer: David Heinemeier Hansson
firstRelease: 2021
language: ruby
runtime:
  - ruby
  - node
basedOn:
  - rails
runsAs:
  - local
installMethod: bin/bundle add jsbundling-rails, then bin/rails javascript:install
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2024-07-29
githubStargazers: 922
contributors: 68
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/rails/jsbundling-rails
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/rails/jsbundling-rails/blob/main/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/rails/jsbundling-rails/main/MIT-LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/rails/jsbundling-rails
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/rails/jsbundling-rails/blob/main/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/rails/jsbundling-rails/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://rubygems.org/api/v1/versions/jsbundling-rails.json
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/rails/jsbundling-rails/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/rails/jsbundling-rails/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/rails/jsbundling-rails/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/rails/jsbundling-rails/blob/main/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/rails/jsbundling-rails
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/rails/jsbundling-rails/main/MIT-LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/jsbundling-rails.json
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/rails/jsbundling-rails/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/rails/jsbundling-rails/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/rails/jsbundling-rails
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/rails/jsbundling-rails/contributors
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
npmWeeklyDownloads: null
---

jsbundling-rails is a Rails gem that runs a JavaScript bundler inside a Rails application and places the bundled output where the asset pipeline can serve it. The installer sets up one of Bun, esbuild, rollup.js or Webpack. The bundled files go to app/assets/builds, a directory the installer keeps out of source control by default.

During development the bundler runs in watch mode in a terminal, alongside the Rails server. For production, its build task attaches to asset precompilation, so the bundle is built when assets are precompiled.

## Worth knowing

Node.js must be installed for the esbuild, rollup.js and Webpack installers, and the Bun installer needs the Bun runtime. For Webpack features such as code splitting and hot module reloading, the README points to shakapacker, a fork of webpacker.
