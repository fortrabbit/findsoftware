---
id: linaria
name: Linaria
urls:
  home: https://linaria.dev
  repository: https://github.com/callstack/linaria
  docs: https://github.com/callstack/linaria/blob/master/README.md
category:
  - css-framework
description: Zero-runtime CSS-in-JS library that extracts styles written in JavaScript into CSS files at build time.
status: active
maintainer: Callstack.io Sp. z o.o.
firstRelease: 2017
hqCountry: PL
language: javascript
runsAs:
  - local
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "8"
latestReleaseDate: 2026-08-10
githubStargazers: 12351
npmWeeklyDownloads: 479147
contributors: 146
dependentRepos: 1605
dependentPackages: 141
social:
  discord: https://discord.gg/zwR2Cdh
addedAt: 2026-10-27
checkedAt: 2026-10-27
sources:
  - field: urls
    url: https://api.github.com/repos/callstack/linaria
    checkedAt: 2026-10-27
  - field: urls
    url: https://api.github.com/repos/callstack/linaria
    checkedAt: 2026-10-27
  - field: urls
    url: https://github.com/callstack/linaria/blob/master/README.md
    checkedAt: 2026-10-27
  - field: maintainer
    url: https://www.callstack.com/
    checkedAt: 2026-10-27
  - field: hqCountry
    url: https://www.callstack.com/
    checkedAt: 2026-10-27
  - field: language
    url: https://api.github.com/repos/callstack/linaria
    checkedAt: 2026-10-27
  - field: category
    url: https://github.com/callstack/linaria/blob/master/README.md
    checkedAt: 2026-10-27
  - field: runsAs
    url: https://github.com/callstack/linaria/blob/master/README.md
    checkedAt: 2026-10-27
  - field: installMethod
    url: https://github.com/callstack/linaria/blob/master/README.md
    checkedAt: 2026-10-27
  - field: license
    url: https://api.github.com/repos/callstack/linaria
    checkedAt: 2026-10-27
  - field: license
    url: https://github.com/callstack/linaria/blob/master/LICENSE
    checkedAt: 2026-10-27
  - field: licenseModel
    url: https://github.com/callstack/linaria/blob/master/LICENSE
    checkedAt: 2026-10-27
  - field: firstRelease
    url: https://registry.npmjs.org/linaria
    checkedAt: 2026-10-27
  - field: currentMajor
    url: https://api.github.com/repos/callstack/linaria/releases
    checkedAt: 2026-10-27
  - field: latestReleaseDate
    url: https://api.github.com/repos/callstack/linaria/releases
    checkedAt: 2026-10-27
  - field: githubStargazers
    url: https://api.github.com/repos/callstack/linaria
    checkedAt: 2026-10-27
  - field: contributors
    url: https://api.github.com/repos/callstack/linaria/contributors?per_page=1&anon=false
    checkedAt: 2026-10-27
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-18:2026-10-24/@linaria/core
    checkedAt: 2026-10-27
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40linaria%2Fcore
    checkedAt: 2026-10-27
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40linaria%2Fcore
    checkedAt: 2026-10-27
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

Linaria is a CSS-in-JS library that writes styles inside JavaScript and extracts them into CSS files during the build, so the page carries no styling code at runtime. It is installed from npm as the @linaria packages with the wyw-in-js Babel preset, and the build needs Node.js. The README says Linaria is now built on top of wyw-in-js, which evaluates the modules at build time. Callstack.io Sp. z o.o., a company seated in Wrocław, Poland, maintains it.

## Worth knowing

Linaria runs when the site is built, so the live site serves the CSS files the build wrote. The README sets a minimum Node.js version for that build. The README's trade-offs say that modules used inside CSS rules cannot have side effects, and that dynamic styles are not supported in the css tag.
