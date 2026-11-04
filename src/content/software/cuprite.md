---
id: cuprite
name: Cuprite
urls:
  home: https://rubycdp.com/
  repository: https://github.com/rubycdp/cuprite
  docs: https://docs.rubycdp.com/docs/cuprite/introduction/
category:
  - testing
description: Pure Ruby driver for Capybara that runs Capybara tests on headless Chrome or Chromium.
status: active
maintainer: Dmitry Vorotilin
firstRelease: 2019
language: ruby
runtime:
  - ruby
runtimeMin: ruby 3.2
basedOn:
  - capybara
installMethod: bundler
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-30
githubStargazers: 1398
contributors: 47
dependentRepos: 354
dependentPackages: 35
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://rubycdp.com/
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/rubycdp/cuprite
    checkedAt: 2026-11-04
  - field: urls
    url: https://docs.rubycdp.com/docs/cuprite/introduction/
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/cuprite.json
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/rubycdp/cuprite/blob/main/LICENSE
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/rubycdp/cuprite
    checkedAt: 2026-11-04
  - field: runtime
    url: https://github.com/rubycdp/cuprite/blob/main/README.md
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://github.com/rubycdp/cuprite/blob/v0.20/cuprite.gemspec
    checkedAt: 2026-11-04
  - field: basedOn
    url: https://docs.rubycdp.com/docs/cuprite/introduction/
    checkedAt: 2026-11-04
  - field: category
    url: https://github.com/rubycdp/cuprite/blob/main/README.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://docs.rubycdp.com/docs/cuprite/introduction/
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/rubycdp/cuprite/releases
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/rubycdp/cuprite/releases
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/rubycdp/cuprite
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/rubycdp/cuprite/contributors?per_page=1
    checkedAt: 2026-11-04
  - field: license
    url: https://api.github.com/repos/rubycdp/cuprite
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/cuprite
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/cuprite
    checkedAt: 2026-11-04
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

Cuprite is a Ruby gem with no Selenium, WebDriver or ChromeDriver dependency that lets Capybara tests run against headless Chrome or Chromium. Projects install it with Bundler, as the [documentation](https://docs.rubycdp.com/docs/cuprite/introduction/) describes. Under the hood it uses Ferrum, a high-level Ruby API to the browser over the CDP protocol.

## Worth knowing

A Chrome or Chromium binary has to be installed and reachable through the PATH, the BROWSER_PATH variable or the browser_path option.
