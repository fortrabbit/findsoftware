---
id: propshaft
name: Propshaft
urls:
  repository: https://github.com/rails/propshaft
  docs: https://github.com/rails/propshaft/blob/main/README.md
category:
  - build-tool
description: Asset pipeline library for Rails that serves and digest-stamps the app's stylesheets, JavaScript and images without bundling them.
status: active
maintainer: Basecamp
firstRelease: 2021
language: ruby
runtime:
  - ruby
runtimeMin: ruby 2.7
basedOn:
  - rails
runsAs:
  - local
installMethod: rails new myapp -a propshaft
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-04-17
githubStargazers: 1047
contributors: 61
dependentRepos: 317
dependentPackages: 1
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/rails/propshaft
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/rails/propshaft/main/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/rails/propshaft/main/MIT-LICENSE
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://raw.githubusercontent.com/rails/propshaft/main/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://raw.githubusercontent.com/rails/propshaft/main/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/rails/propshaft
    checkedAt: 2026-10-28
  - field: runtime
    url: https://raw.githubusercontent.com/rails/propshaft/v1.3.2/propshaft.gemspec
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://raw.githubusercontent.com/rails/propshaft/v1.3.2/propshaft.gemspec
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/rails/propshaft/main/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/rails/propshaft/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/rails/propshaft/main/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://rubygems.org/api/v1/gems/propshaft.json
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/rails/propshaft/main/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/rails/propshaft/releases
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/rails/propshaft/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/rails/propshaft/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/rails/propshaft
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/rails/propshaft/contributors
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/propshaft
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/propshaft
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
npmWeeklyDownloads: null
---

Propshaft is an asset pipeline that Rails applications use to serve their assets. It builds one load path from the asset directories of the app and its gems, so logical asset paths resolve through the usual asset helpers, and it stamps each asset with a digest hash so that the digested files can be cached for a long time.

Precompiling copies the assets into `public/assets`, and a manifest maps logical paths to digested names. In development there is no precompile step, and the assets are served by a development server.

## Worth knowing

Propshaft does not transpile. Its README says it was explicitly not designed to provide full transpiler capabilities, so projects that need transpiling use a separate tool.
