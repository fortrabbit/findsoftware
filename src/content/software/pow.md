---
id: pow
name: Pow
urls:
  home: https://powauth.com/
  repository: https://github.com/pow-auth/pow
  docs: https://pow.hexdocs.pm/
category:
  - auth
description: Authentication and user management library for Elixir apps, usable with Phoenix and Plug.
status: active
maintainer: Dan Schultzer
firstRelease: 2018
language: elixir
runtime:
  - beam
hosting:
  - elixir
basedOn:
  - phoenix
i18n: yes, templates and messages can use a Gettext module
installMethod: hex
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2025-01-11
githubStargazers: 1670
contributors: 52
dependentRepos: 246
dependentPackages: 8
social:
  x: https://twitter.com/danschultzer
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://powauth.com/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/pow-auth/pow
    checkedAt: 2026-11-16
  - field: urls
    url: https://pow.hexdocs.pm/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/pow-auth/pow/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://hex.pm/api/packages/pow/releases
    checkedAt: 2026-11-16
  - field: category
    url: https://powauth.com/
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/pow-auth/pow
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://github.com/pow-auth/pow/blob/main/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://powauth.com/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/pow-auth/pow/blob/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/pow-auth/pow/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/pow-auth/pow/blob/main/LICENSE
    checkedAt: 2026-11-16
  - field: i18n
    url: https://github.com/pow-auth/pow/blob/main/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/pow-auth/pow/releases/tag/v1.0.39
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/pow-auth/pow/releases/tag/v1.0.39
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/pow-auth/pow
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/pow-auth/pow/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/hex.pm/packages/pow
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/hex.pm/packages/pow
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Pow is an authentication and user management library built in Elixir. It works out of the box for Phoenix and Plug based applications and can be customized. Its [user roles guide](https://github.com/pow-auth/pow/blob/main/guides/user_roles.md) says adding roles needs no extension, and templates can use a Gettext module for translation.

## Worth knowing

The README says the default cache store is meant for development and test, and recommends a distributed, persistent cache store, such as Mnesia, for production.
