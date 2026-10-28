---
id: phoenix-esbuild
name: esbuild for Phoenix
urls:
  repository: https://github.com/phoenixframework/esbuild
  docs: https://hexdocs.pm/esbuild
category:
  - build-tool
description: Mix tasks for installing the esbuild CLI and invoking it from Elixir projects, such as Phoenix applications.
status: active
maintainer: Wojtek Mach, José Valim
firstRelease: 2021
language: elixir
runtime:
  - beam
basedOn:
  - esbuild
runsAs:
  - local
installMethod: Mix dependency in mix.exs, then mix esbuild.install
licenseModel: open-source
license: MIT, MIT License
currentMajor: "0"
latestReleaseDate: 2026-10-19
githubStargazers: 277
contributors: 33
dependentRepos: 1680
dependentPackages: 49
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/phoenixframework/esbuild
    checkedAt: 2026-10-28
  - field: urls
    url: https://hexdocs.pm/esbuild
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/phoenixframework/esbuild/blob/main/LICENSE.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/phoenixframework/esbuild
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/phoenixframework/esbuild/blob/main/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/phoenixframework/esbuild/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/phoenixframework/esbuild/blob/v0.10.1/mix.exs
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/phoenixframework/esbuild/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/phoenixframework/esbuild/blob/main/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/phoenixframework/esbuild
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/phoenixframework/esbuild/blob/main/LICENSE.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://hex.pm/api/packages/esbuild/releases/0.1.0
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://hex.pm/api/packages/esbuild
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://hex.pm/api/packages/esbuild/releases/0.10.1
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/phoenixframework/esbuild
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/phoenixframework/esbuild/contributors
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/hex.pm/packages/esbuild
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/hex.pm/packages/esbuild
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

esbuild for Phoenix is a set of Mix tasks that install the esbuild CLI and invoke it from Elixir projects, such as Phoenix applications. It is built on esbuild, the JavaScript bundler, and its README describes adding it to a Phoenix application as a Mix dependency, installed with `mix esbuild.install`.

The README's development setup runs esbuild in watch mode. The package is kept in the phoenixframework GitHub organization and is copyrighted to Wojtek Mach and José Valim under the MIT License.

The [README](https://github.com/phoenixframework/esbuild/blob/main/README.md) gives the setup steps.
