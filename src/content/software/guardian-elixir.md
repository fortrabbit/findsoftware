---
id: guardian-elixir
name: Guardian
urls:
  repository: https://github.com/ueberauth/guardian
  docs: https://hexdocs.pm/guardian
category:
  - auth
description: Token-based authentication library for Elixir applications, with JSON Web Tokens by default and Plug integration.
status: active
maintainer: Daniel Neighman
firstRelease: 2015
language: elixir
runtime:
  - beam
hosting:
  - elixir
installMethod: mix
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-08-17
githubStargazers: 3513
contributors: 160
dependentRepos: 1685
dependentPackages: 31
addedAt: 2026-11-09
checkedAt: 2026-11-09
sources:
  - field: urls
    url: https://api.github.com/repos/ueberauth/guardian
    checkedAt: 2026-11-09
  - field: urls
    url: https://raw.githubusercontent.com/ueberauth/guardian/master/README.md
    checkedAt: 2026-11-09
  - field: firstRelease
    url: https://api.github.com/repos/ueberauth/guardian/tags
    checkedAt: 2026-11-09
  - field: maintainer
    url: https://raw.githubusercontent.com/ueberauth/guardian/master/LICENSE
    checkedAt: 2026-11-09
  - field: category
    url: https://raw.githubusercontent.com/ueberauth/guardian/master/README.md
    checkedAt: 2026-11-09
  - field: language
    url: https://api.github.com/repos/ueberauth/guardian
    checkedAt: 2026-11-09
  - field: runtime
    url: https://raw.githubusercontent.com/ueberauth/guardian/master/README.md
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://raw.githubusercontent.com/ueberauth/guardian/master/README.md
    checkedAt: 2026-11-09
  - field: license
    url: https://raw.githubusercontent.com/ueberauth/guardian/master/README.md
    checkedAt: 2026-11-09
  - field: licenseModel
    url: https://raw.githubusercontent.com/ueberauth/guardian/master/LICENSE
    checkedAt: 2026-11-09
  - field: currentMajor
    url: https://api.github.com/repos/ueberauth/guardian/releases
    checkedAt: 2026-11-09
  - field: latestReleaseDate
    url: https://api.github.com/repos/ueberauth/guardian/releases
    checkedAt: 2026-11-09
  - field: githubStargazers
    url: https://api.github.com/repos/ueberauth/guardian
    checkedAt: 2026-11-09
  - field: contributors
    url: https://api.github.com/repos/ueberauth/guardian/contributors?per_page=1
    checkedAt: 2026-11-09
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/hex.pm/packages/guardian
    checkedAt: 2026-11-09
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/hex.pm/packages/guardian
    checkedAt: 2026-11-09
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

Guardian is a token-based authentication library for Elixir applications. Its core functions encode and sign a token for a resource, decode and verify it, revoke it and refresh it, with JSON Web Tokens as the default token type. It integrates with Plug and can be used outside it.

## Worth knowing

Revoking a JWT token does nothing by default, because the application does not track the tokens it issues. The README points to [GuardianDb](https://github.com/ueberauth/guardian_db) for recording issued tokens so that revocation takes effect.
