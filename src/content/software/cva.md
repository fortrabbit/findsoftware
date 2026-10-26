---
id: cva
name: cva
urls:
  home: https://cva.style
  repository: https://github.com/joe-bell/cva
  docs: https://cva.style/getting-started/installation
category:
  - css-framework
description: A TypeScript library for building type-safe, variant-driven class names with Tailwind CSS or any other styling approach.
status: active
maintainer: Joe Bell
maintainerType: individual
firstRelease: 2022
language: javascript
installMethod: npm
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2024-11-26
githubStargazers: 6907
npmWeeklyDownloads: 42493776
contributors: 30
dependentRepos: 12840
dependentPackages: 710
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://cva.style/
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/joe-bell/cva
    checkedAt: 2026-10-26
  - field: urls
    url: https://cva.style/getting-started/installation
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/joe-bell/cva/blob/main/packages/class-variance-authority/package.json
    checkedAt: 2026-10-26
  - field: maintainerType
    url: https://api.github.com/users/joe-bell
    checkedAt: 2026-10-26
  - field: language
    url: https://github.com/joe-bell/cva
    checkedAt: 2026-10-26
  - field: category
    url: https://cva.style/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://cva.style/getting-started/installation
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/joe-bell/cva
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/joe-bell/cva/blob/main/README.md
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/joe-bell/cva
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/joe-bell/cva/releases/latest
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/joe-bell/cva/releases/latest
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://registry.npmjs.org/class-variance-authority
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://github.com/joe-bell/cva
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/joe-bell/cva/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-18:2026-10-24/class-variance-authority
    checkedAt: 2026-10-26
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/class-variance-authority
    checkedAt: 2026-10-26
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/class-variance-authority
    checkedAt: 2026-10-26
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
---

cva is a TypeScript library for building class name strings from variant definitions. A component declares its base classes and its variants, and the library returns the class string for the values passed in, with those values typed. It works with Tailwind CSS or any other styling approach. The package installs from npm under the name class-variance-authority, because the shorter name had been registered as a placeholder before the project published; the installation page says the shorter name will be used from the next major version on. Joe Bell, named as the author in the package's manifest and the README license line, maintains it.

## Worth knowing

The next major line is in beta. By default cva joins class names but does not resolve conflicting Tailwind CSS utilities, so the installation page lists approaches for style conflicts.
