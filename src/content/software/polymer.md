---
id: polymer
name: Polymer
urls:
  home: https://polymer-library.polymer-project.org/
  repository: https://github.com/Polymer/polymer
category:
  - ui-library
description: Library for building custom HTML elements as Web Components, with optional two-way data binding.
status: active
maintainer: The Polymer Authors
maintainerType: community
firstRelease: 2014
runsAs:
  - browser
installMethod: npm i @polymer/polymer
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "3"
latestReleaseDate: 2024-10-07
githubStargazers: 22011
npmWeeklyDownloads: 143733
contributors: 135
httpArchiveSites: 1064
dependentRepos: 5528
dependentPackages: 2346
social:
  x: https://twitter.com/polymer
addedAt: 2026-10-22
checkedAt: 2026-10-22
sources:
  - field: urls
    url: https://polymer-library.polymer-project.org/
    checkedAt: 2026-10-22
  - field: urls
    url: https://api.github.com/repos/Polymer/polymer
    checkedAt: 2026-10-22
  - field: category
    url: https://raw.githubusercontent.com/Polymer/polymer/master/README.md
    checkedAt: 2026-10-22
  - field: installMethod
    url: https://raw.githubusercontent.com/Polymer/polymer/master/README.md
    checkedAt: 2026-10-22
  - field: runsAs
    url: https://raw.githubusercontent.com/Polymer/polymer/master/README.md
    checkedAt: 2026-10-22
  - field: license
    url: https://api.github.com/repos/Polymer/polymer
    checkedAt: 2026-10-22
  - field: licenseModel
    url: https://raw.githubusercontent.com/Polymer/polymer/master/README.md
    checkedAt: 2026-10-22
  - field: maintainer
    url: https://raw.githubusercontent.com/Polymer/polymer/master/LICENSE.txt
    checkedAt: 2026-10-22
  - field: currentMajor
    url: https://api.github.com/repos/Polymer/polymer/releases
    checkedAt: 2026-10-22
  - field: latestReleaseDate
    url: https://api.github.com/repos/Polymer/polymer/releases/latest
    checkedAt: 2026-10-22
  - field: firstRelease
    url: https://api.github.com/repos/Polymer/polymer/releases
    checkedAt: 2026-10-22
  - field: githubStargazers
    url: https://api.github.com/repos/Polymer/polymer
    checkedAt: 2026-10-22
  - field: contributors
    url: https://api.github.com/repos/Polymer/polymer/contributors
    checkedAt: 2026-10-22
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@polymer/polymer
    checkedAt: 2026-10-22
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-25
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40polymer%2Fpolymer
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/%40polymer%2Fpolymer
    checkedAt: 2026-10-25
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
---

Polymer is a library for building custom HTML elements as Web Components. An element is a class that extends the library's base class, declares its properties in a static getter and returns a template from another. The browser then treats the element like a standard HTML element. The library also offers optional two-way data binding between an element's model and its template.

The library runs in the browser and uses the native JavaScript module loader.

## Worth knowing

The homepage says the library is in maintenance mode and recommends Lit for new development. The README names LitElement as a successor to the library's base class.
