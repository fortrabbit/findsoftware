---
id: omniauth
name: OmniAuth
urls:
  repository: https://github.com/omniauth/omniauth
  docs: https://github.com/omniauth/omniauth/wiki
  plugins: https://github.com/omniauth/omniauth/wiki/List-of-Strategies
category:
  - auth
description: Ruby library that standardizes multi-provider authentication for web applications through Rack middleware strategies.
status: active
maintainer: Michael Bleigh
maintainerType: individual
firstRelease: 2010
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 2.5
installMethod: gem
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-11-14
githubStargazers: 8104
contributors: 179
dependentRepos: 54474
dependentPackages: 924
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/omniauth/omniauth
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/omniauth/omniauth/master/README.md
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/omniauth/omniauth/master/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/omniauth/omniauth/master/LICENSE.md
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://raw.githubusercontent.com/omniauth/omniauth/master/LICENSE.md
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/omniauth/omniauth/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/omniauth/omniauth
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/omniauth/omniauth/v2.4.1/omniauth.gemspec
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://raw.githubusercontent.com/omniauth/omniauth/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/omniauth/omniauth/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/omniauth/omniauth/v2.4.1/omniauth.gemspec
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/omniauth/omniauth/master/LICENSE.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/omniauth.json
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/omniauth/omniauth/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/omniauth/omniauth/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/omniauth/omniauth
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/omniauth/omniauth/contributors
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/omniauth
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/omniauth
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

OmniAuth is a Ruby library that standardizes multi-provider authentication for web applications. It is installed as a gem, and each of its strategies is a Rack middleware, so one or more sign-in providers are added to an application's middleware stack. The [OmniAuth wiki](https://github.com/omniauth/omniauth/wiki) holds the in-depth documentation and a community list of third-party strategies.

## Worth knowing

The built-in Developer strategy is described in the README as completely insecure and not usable in production, so it is meant for development only.
