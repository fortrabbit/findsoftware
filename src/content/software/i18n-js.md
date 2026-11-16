---
id: i18n-js
name: i18n-js
urls:
  repository: https://github.com/fnando/i18n-js
  docs: https://github.com/fnando/i18n-js/blob/main/README.md
category:
  - library
description: Ruby gem that exports i18n translations to JSON files for use in JavaScript, with Rails support.
status: active
maintainer: Nando Vieira
maintainerType: individual
firstRelease: 2010
language: ruby
runtime:
  - ruby
runtimeMin: ruby 3.2
runsAs:
  - local
installMethod: Gemfile (Bundler)
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2025-10-31
githubStargazers: 3808
contributors: 10
dependentRepos: 2328
dependentPackages: 31
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/fnando/i18n-js
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/fnando/i18n-js/blob/main/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/fnando/i18n-js/git/tags/a0e605712fc7a6dfca81528834ce718d0c287d50
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/fnando/i18n-js/main/LICENSE.md
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/fnando/i18n-js/blob/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/fnando/i18n-js
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/fnando/i18n-js/v4.2.4/i18n-js.gemspec
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://raw.githubusercontent.com/fnando/i18n-js/v4.2.4/i18n-js.gemspec
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/fnando/i18n-js/blob/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/fnando/i18n-js/blob/main/README.md
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://github.com/fnando/i18n-js/blob/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://rubygems.org/api/v1/gems/i18n-js.json
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/fnando/i18n-js/blob/main/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://rubygems.org/api/v1/gems/i18n-js.json
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/versions/i18n-js.json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/fnando/i18n-js
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/fnando/i18n-js/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/i18n-js
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/i18n-js
    checkedAt: 2026-11-16
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

i18n-js exports the translations of a Ruby i18n setup to JSON files, so JavaScript can read the same messages. A YAML configuration lists the output files and the key patterns to include or exclude, and the output path can carry the locale and an MD5 digest of the file. The gem's plugins can fill missing keys from the default locale and export other file formats through ERB templates, and a lint command lists keys that are missing from a locale.

## Worth knowing

The script linter needs a Node.js runtime on the machine that runs it. The README also describes watchers (watchman, guard and listen) that rerun the export when locale files change, and a companion npm package for JavaScript-only use.
