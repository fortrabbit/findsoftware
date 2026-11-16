---
id: ueberauth
name: Überauth
urls:
  repository: https://github.com/ueberauth/ueberauth
  docs: https://hexdocs.pm/ueberauth
  plugins: https://github.com/ueberauth/ueberauth/wiki/List-of-Strategies
category:
  - auth
description: Elixir authentication library for Plug-based web applications that runs the request and callback phases of third-party login strategies.
status: active
maintainer: Sonny Scroggin
firstRelease: 2015
language: elixir
runtime:
  - beam
hosting:
  - elixir
installMethod: mix
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-11
githubStargazers: 1718
contributors: 103
dependentRepos: 680
dependentPackages: 123
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/ueberauth/ueberauth
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/ueberauth/ueberauth/main/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/ueberauth/ueberauth/main/LICENSE
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/ueberauth/ueberauth/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/ueberauth/ueberauth
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/ueberauth/ueberauth/v0.11.0/mix.exs
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://hex.pm/api/packages/ueberauth
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/ueberauth/ueberauth/main/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/ueberauth/ueberauth/main/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://hex.pm/api/packages/ueberauth
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/ueberauth/ueberauth/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/ueberauth/ueberauth/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/ueberauth/ueberauth
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/ueberauth/ueberauth/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/hex.pm/packages/ueberauth
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/hex.pm/packages/ueberauth
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/ueberauth/ueberauth/main/README.md
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

Überauth runs the start and the return of a third-party sign-in inside a Plug application. Each provider is a strategy plug with a request phase, which redirects the visitor to the provider or shows a form, and a callback phase, which turns the provider's answer into an `Ueberauth.Auth` struct or an `Ueberauth.Failure` struct. The application's controller handles both structs and creates or signs in the user itself. The README says the library provides only the initial authentication challenge and does not authenticate each request.

Providers are listed in the application configuration, and their routes default to paths such as `/auth/github` and `/auth/github/callback`. Each strategy is a separate Hex package that the application adds to its dependencies. The [documentation on Hex](https://hexdocs.pm/ueberauth) covers the full API.

## Worth knowing

The core library and the strategy packages for Apple, Facebook, GitHub, Google and Twitter share one GitHub repository, and each strategy is published to Hex on its own.
