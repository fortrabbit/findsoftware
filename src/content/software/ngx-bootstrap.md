---
id: ngx-bootstrap
name: ngx-bootstrap
urls:
  home: https://valor-software.com/ngx-bootstrap
  repository: https://github.com/valor-software/ngx-bootstrap
  docs: https://valor-software.com/ngx-bootstrap/#/documentation
category:
  - ui-library
description: Bootstrap components for Angular applications.
status: active
maintainer: Valor Software
firstRelease: 2016
language: javascript
basedOn:
  - angular
  - bootstrap
installMethod: ng-add
licenseModel: open-source
license: MIT
currentMajor: "22"
latestReleaseDate: 2026-08-12
githubStargazers: 5510
npmWeeklyDownloads: 432196
contributors: 312
dependentRepos: 26230
dependentPackages: 1061
social:
  forum: https://stackoverflow.com/questions/tagged/ngx-bootstrap
addedAt: 2026-10-27
checkedAt: 2026-10-27
sources:
  - field: urls
    url: https://valor-software.com/ngx-bootstrap
    checkedAt: 2026-10-27
  - field: urls
    url: https://github.com/valor-software/ngx-bootstrap
    checkedAt: 2026-10-27
  - field: urls
    url: https://github.com/valor-software/ngx-bootstrap/blob/development/README.md
    checkedAt: 2026-10-27
  - field: firstRelease
    url: https://github.com/valor-software/ngx-bootstrap/releases/tag/1.0.1-beta.2
    checkedAt: 2026-10-27
  - field: maintainer
    url: https://github.com/valor-software/ngx-bootstrap/blob/development/LICENSE
    checkedAt: 2026-10-27
  - field: language
    url: https://github.com/valor-software/ngx-bootstrap
    checkedAt: 2026-10-27
  - field: category
    url: https://github.com/valor-software/ngx-bootstrap/blob/development/README.md
    checkedAt: 2026-10-27
  - field: basedOn
    url: https://github.com/valor-software/ngx-bootstrap/blob/development/README.md
    checkedAt: 2026-10-27
  - field: basedOn
    url: https://github.com/valor-software/ngx-bootstrap/blob/development/README.md
    checkedAt: 2026-10-27
  - field: installMethod
    url: https://github.com/valor-software/ngx-bootstrap/blob/development/README.md
    checkedAt: 2026-10-27
  - field: installMethod
    url: https://github.com/valor-software/ngx-bootstrap/blob/development/README.md
    checkedAt: 2026-10-27
  - field: license
    url: https://github.com/valor-software/ngx-bootstrap
    checkedAt: 2026-10-27
  - field: license
    url: https://github.com/valor-software/ngx-bootstrap/blob/development/LICENSE
    checkedAt: 2026-10-27
  - field: licenseModel
    url: https://github.com/valor-software/ngx-bootstrap
    checkedAt: 2026-10-27
  - field: currentMajor
    url: https://github.com/valor-software/ngx-bootstrap/releases/tag/v22.0.0
    checkedAt: 2026-10-27
  - field: latestReleaseDate
    url: https://github.com/valor-software/ngx-bootstrap/releases/tag/v22.0.0
    checkedAt: 2026-10-27
  - field: githubStargazers
    url: https://github.com/valor-software/ngx-bootstrap
    checkedAt: 2026-10-27
  - field: contributors
    url: https://github.com/valor-software/ngx-bootstrap
    checkedAt: 2026-10-27
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-09-28:2026-10-04/ngx-bootstrap
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/ngx-bootstrap
    checkedAt: 2026-10-27
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/ngx-bootstrap
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
runsAs: null
---

ngx-bootstrap provides Bootstrap components as Angular components, so an Angular project does not need the original Bootstrap JavaScript components. It is installed from npm as ngx-bootstrap, with the Angular CLI command or a plain npm install, and each component is imported from its own entry point, such as the tooltip module. The Bootstrap stylesheet is added to the project separately, and the README describes a setTheme call for projects where the Bootstrap version cannot be detected automatically. The source is maintained by Valor Software on GitHub.

## Worth knowing

Version 22 requires zoneless change detection, and the README states that zone.js is no longer supported. Projects on older Angular majors use the version that matches them, as the README's compatibility table shows.
