---
id: uiv
name: uiv
urls:
  home: https://wxsms.github.io/uiv/
  repository: https://github.com/wxsms/uiv
  docs: https://wxsms.github.io/uiv/usage/getting-started
category:
  - ui-library
description: Vue component library that implements Bootstrap components, installed with npm or loaded from a CDN.
status: active
maintainer: Kairui Guo
maintainerType: individual
firstRelease: 2017
language: javascript
basedOn:
  - vue
  - bootstrap
i18n: yes
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-09-09
githubStargazers: 937
npmWeeklyDownloads: 27725
contributors: 49
dependentRepos: 185
dependentPackages: 11
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://wxsms.github.io/uiv/
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/wxsms/uiv
    checkedAt: 2026-10-28
  - field: urls
    url: https://wxsms.github.io/uiv/usage/getting-started
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/wxsms/uiv/blob/v2.0.7/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/wxsms/uiv
    checkedAt: 2026-10-28
  - field: category
    url: https://wxsms.github.io/uiv/
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://wxsms.github.io/uiv/usage/getting-started
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://wxsms.github.io/uiv/usage/getting-started
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://wxsms.github.io/uiv/usage/getting-started
    checkedAt: 2026-10-28
  - field: i18n
    url: https://wxsms.github.io/uiv/usage/i18n
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/wxsms/uiv
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://wxsms.github.io/uiv/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://registry.npmjs.org/uiv
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/wxsms/uiv/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/wxsms/uiv/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/wxsms/uiv
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/wxsms/uiv/contributors
    checkedAt: 2026-10-28
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/uiv
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/uiv
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/uiv
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
runsAs: null
---

uiv provides the components of Bootstrap as Vue components. A site or web app installs it with npm and imports the whole package or single components to keep the bundle small. A page in the browser can load the package from a CDN instead.

The package replaces Bootstrap's JavaScript but does not bring its stylesheet: the [getting-started guide](https://wxsms.github.io/uiv/usage/getting-started) says to load Bootstrap's CSS separately. Component and directive names carry no prefix by default and can take one. Server-side rendering is supported.

Component text is translatable through locale packs. All components default to en-US, the language can be changed on setup, and the locale packs work with vue-i18n.

## Worth knowing

A project that uses uiv also loads Bootstrap's CSS.
