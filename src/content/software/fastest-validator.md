---
id: fastest-validator
name: fastest-validator
urls:
  repository: https://github.com/icebob/fastest-validator
category:
  - library
description: JavaScript validation library that compiles an object schema into a checker function for Node.js, browsers and Deno.
status: active
maintainer: Icebob
maintainerType: individual
firstRelease: 2017
language: javascript
runtime:
  - node
  - deno
hosting:
  - node
  - deno
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2025-04-30
githubStargazers: 1463
npmWeeklyDownloads: 181563
contributors: 40
social:
  x: https://twitter.com/Icebobcsi
addedAt: 2026-11-08
checkedAt: 2026-11-08
sources:
  - field: urls
    url: https://api.github.com/repos/icebob/fastest-validator
    checkedAt: 2026-11-08
  - field: language
    url: https://api.github.com/repos/icebob/fastest-validator
    checkedAt: 2026-11-08
  - field: category
    url: https://raw.githubusercontent.com/icebob/fastest-validator/master/README.md
    checkedAt: 2026-11-08
  - field: runtime
    url: https://raw.githubusercontent.com/icebob/fastest-validator/master/README.md
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://raw.githubusercontent.com/icebob/fastest-validator/master/README.md
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://raw.githubusercontent.com/icebob/fastest-validator/master/README.md
    checkedAt: 2026-11-08
  - field: license
    url: https://raw.githubusercontent.com/icebob/fastest-validator/master/README.md
    checkedAt: 2026-11-08
  - field: maintainer
    url: https://raw.githubusercontent.com/icebob/fastest-validator/master/LICENSE
    checkedAt: 2026-11-08
  - field: currentMajor
    url: https://api.github.com/repos/icebob/fastest-validator/releases/latest
    checkedAt: 2026-11-08
  - field: latestReleaseDate
    url: https://api.github.com/repos/icebob/fastest-validator/releases/latest
    checkedAt: 2026-11-08
  - field: firstRelease
    url: https://registry.npmjs.org/fastest-validator
    checkedAt: 2026-11-08
  - field: githubStargazers
    url: https://api.github.com/repos/icebob/fastest-validator
    checkedAt: 2026-11-08
  - field: contributors
    url: https://api.github.com/repos/icebob/fastest-validator/contributors
    checkedAt: 2026-11-08
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/fastest-validator
    checkedAt: 2026-11-08
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
runsAs: null
---

fastest-validator is a JavaScript library that validates plain objects against a schema. Each field in the schema gets a type and rules, such as a minimum length or a numeric range. The library compiles the schema into a checker function, which returns true or a list of error objects, one for each failing field.

The README lists built-in rules for types such as string, number, array, date, email and UUID. It also covers optional and nullable fields, custom and asynchronous validators, and custom error messages. The package is installed with npm, and the README shows use in Node.js, in a browser through a script tag, and in Deno. It names Moleculer as natively supported, and Fastify and Express as supported through separate packages.
