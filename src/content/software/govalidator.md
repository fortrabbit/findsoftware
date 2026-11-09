---
id: govalidator
name: govalidator
urls:
  home: https://asaskevich.dev/projects/govalidator/
  repository: https://github.com/asaskevich/govalidator
  docs: https://godoc.org/github.com/asaskevich/govalidator
category:
  - library
description: Go package of validators and sanitizers for strings, structs and collections.
status: active
maintainer: Aliaksei (Alex) Saskevich
maintainerType: individual
firstRelease: 2014
language: go
runtime:
  - binary
hosting:
  - binary
installMethod: go get
licenseModel: open-source
license: MIT
currentMajor: "12"
latestReleaseDate: 2026-04-14
githubStargazers: 6201
contributors: 91
addedAt: 2026-11-09
checkedAt: 2026-11-09
sources:
  - field: urls
    url: https://api.github.com/repos/asaskevich/govalidator
    checkedAt: 2026-11-09
  - field: urls
    url: https://asaskevich.dev/projects/govalidator/
    checkedAt: 2026-11-09
  - field: urls
    url: https://raw.githubusercontent.com/asaskevich/govalidator/master/README.md
    checkedAt: 2026-11-09
  - field: language
    url: https://api.github.com/repos/asaskevich/govalidator
    checkedAt: 2026-11-09
  - field: category
    url: https://raw.githubusercontent.com/asaskevich/govalidator/master/README.md
    checkedAt: 2026-11-09
  - field: runtime
    url: https://raw.githubusercontent.com/asaskevich/govalidator/master/README.md
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://raw.githubusercontent.com/asaskevich/govalidator/master/README.md
    checkedAt: 2026-11-09
  - field: installMethod
    url: https://raw.githubusercontent.com/asaskevich/govalidator/master/README.md
    checkedAt: 2026-11-09
  - field: license
    url: https://api.github.com/repos/asaskevich/govalidator
    checkedAt: 2026-11-09
  - field: licenseModel
    url: https://raw.githubusercontent.com/asaskevich/govalidator/master/LICENSE
    checkedAt: 2026-11-09
  - field: maintainer
    url: https://raw.githubusercontent.com/asaskevich/govalidator/master/LICENSE
    checkedAt: 2026-11-09
  - field: firstRelease
    url: https://api.github.com/repos/asaskevich/govalidator/commits/6fa0de0bdbbf76d3460145dc92622df8ecdc2f41
    checkedAt: 2026-11-09
  - field: currentMajor
    url: https://proxy.golang.org/github.com/asaskevich/govalidator/v12/@v/v12.0.0.info
    checkedAt: 2026-11-09
  - field: latestReleaseDate
    url: https://proxy.golang.org/github.com/asaskevich/govalidator/v12/@v/v12.0.0.info
    checkedAt: 2026-11-09
  - field: githubStargazers
    url: https://api.github.com/repos/asaskevich/govalidator
    checkedAt: 2026-11-09
  - field: contributors
    url: https://api.github.com/repos/asaskevich/govalidator/contributors?per_page=1
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
runsAs: null
---

govalidator is a Go package with validators and sanitizers for strings, structs and collections. Struct fields are checked through valid struct tags, where each validator name in a tag maps to a function, and the same checks are available as plain functions for values outside a struct.

The README says the package is based on validator.js, the JavaScript validation library. Custom validators can be added to the tag map, and a struct can be required to tag every field.

## Worth knowing

The README's breaking-changes section says custom validator functions take a context as second parameter, and that custom validators are added through a method rather than by writing to the map, to prevent data races.
