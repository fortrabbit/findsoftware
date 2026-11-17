---
id: wallaby
name: Wallaby
urls:
  repository: https://github.com/elixir-wallaby/wallaby
  docs: https://hexdocs.pm/wallaby
category:
  - testing
description: Elixir library for concurrent browser feature tests of web applications, driving Chrome or Selenium.
status: active
maintainer: Chris Keathley and Mitchell Hanberg
firstRelease: 2016
language: elixir
runtime:
  - beam
runtimeMin: beam 26
installMethod: mix
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-06-27
githubStargazers: 1806
contributors: 81
dependentRepos: 277
dependentPackages: 7
social:
  x: https://twitter.com/elixir_wallaby
addedAt: 2026-11-17
checkedAt: 2026-11-17
sources:
  - field: urls
    url: https://api.github.com/repos/elixir-wallaby/wallaby
    checkedAt: 2026-11-17
  - field: urls
    url: https://github.com/elixir-wallaby/wallaby/blob/main/README.md
    checkedAt: 2026-11-17
  - field: category
    url: https://github.com/elixir-wallaby/wallaby/blob/main/README.md
    checkedAt: 2026-11-17
  - field: language
    url: https://api.github.com/repos/elixir-wallaby/wallaby
    checkedAt: 2026-11-17
  - field: runtime
    url: https://github.com/elixir-wallaby/wallaby/blob/main/README.md
    checkedAt: 2026-11-17
  - field: runtimeMin
    url: https://github.com/elixir-wallaby/wallaby/blob/main/README.md
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://github.com/elixir-wallaby/wallaby/blob/main/README.md
    checkedAt: 2026-11-17
  - field: license
    url: https://api.github.com/repos/elixir-wallaby/wallaby
    checkedAt: 2026-11-17
  - field: maintainer
    url: https://github.com/elixir-wallaby/wallaby/blob/main/LICENSE.md
    checkedAt: 2026-11-17
  - field: firstRelease
    url: https://hex.pm/api/packages/wallaby
    checkedAt: 2026-11-17
  - field: currentMajor
    url: https://api.github.com/repos/elixir-wallaby/wallaby/releases
    checkedAt: 2026-11-17
  - field: latestReleaseDate
    url: https://api.github.com/repos/elixir-wallaby/wallaby/releases
    checkedAt: 2026-11-17
  - field: githubStargazers
    url: https://api.github.com/repos/elixir-wallaby/wallaby
    checkedAt: 2026-11-17
  - field: contributors
    url: https://api.github.com/repos/elixir-wallaby/wallaby/contributors
    checkedAt: 2026-11-17
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/hex.pm/packages/wallaby
    checkedAt: 2026-11-17
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/hex.pm/packages/wallaby
    checkedAt: 2026-11-17
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

Wallaby is an Elixir library for feature tests that drive a real browser against a web application. A test visits a page, fills in fields, clicks buttons and asserts on what the page shows. By default each test case runs concurrently and the library manages the browsers for it. Chrome is the default driver, and Selenium can be used instead; the matching driver tools have to be installed separately.

For Phoenix applications, the setup has the endpoint serve requests during tests. With a database that supports Ecto's sandbox mode, a plug lets the browser and the test share one database connection. The [official documentation](https://hexdocs.pm/wallaby) covers the DSL.

## Worth knowing

Wallaby also requires `bash`, which does not come pre-installed on Alpine Linux. Assets are not recompiled when `mix test` runs, so tests can fail against stale JavaScript or CSS until the assets are rebuilt. The README describes an esbuild alias and a webpack alias for this.
