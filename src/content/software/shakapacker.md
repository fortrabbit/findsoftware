---
id: shakapacker
name: Shakapacker
urls:
  home: https://shakapacker.com
  repository: https://github.com/shakacode/shakapacker
  docs: https://shakapacker.com/docs/
category:
  - build-tool
description: Rails gem and npm package that bundles a Rails app's JavaScript and CSS with webpack or Rspack and exposes the output through Rails view helpers.
status: active
maintainer: ShakaCode, LLC
maintainerType: company
firstRelease: 2022
hqCountry: US
language: ruby
runtime:
  - ruby
  - node
runtimeMin: ruby 2.7
basedOn:
  - rails
runsAs:
  - local
installMethod: bundle add shakapacker --strict
licenseModel: open-source
license: MIT
currentMajor: "10"
latestReleaseDate: 2026-08-29
githubStargazers: 489
npmWeeklyDownloads: 306945
contributors: 437
dependentRepos: 186
dependentPackages: 3
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://shakapacker.com/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/shakacode/shakapacker
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/shakacode/shakapacker/blob/main/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://www.shakacode.com/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://www.shakacode.com/
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://www.shakacode.com/
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/shakacode/shakapacker
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/shakacode/shakapacker/blob/main/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/shakacode/shakapacker/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://shakapacker.com/docs/installation/
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/shakacode/shakapacker/blob/v10.3.2/shakapacker.gemspec
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/shakacode/shakapacker/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://shakapacker.com/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://shakapacker.com/docs/deployment/
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/shakacode/shakapacker
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/shakacode/shakapacker/blob/main/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/shakapacker.json
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/shakacode/shakapacker/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/shakacode/shakapacker/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/shakacode/shakapacker
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/shakacode/shakapacker/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/shakapacker
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/shakapacker
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/shakapacker
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
packagistDownloads: null
---

Shakapacker connects a Rails application to a JavaScript bundler. It runs webpack or Rspack over the app's JavaScript and CSS, writes a manifest of the output files, and gives view helpers for rendering the bundled assets. It is added to a Rails app with `bundle add`, and an installer task writes the bundler configuration and entry points into the app. The project's configuration lives in config/shakapacker.yml, and the bundler configuration stays editable for teams that need custom setups.

The project describes itself as the successor to rails/webpacker, the bundler integration it replaces. ShakaCode, LLC, a consultancy for Rails teams, maintains it.

## Worth knowing

Compiling the assets runs as a step of `assets:precompile`, so the machine or CI job that precompiles the app needs Node.js as well as Ruby. The installation guide lists both as requirements.
