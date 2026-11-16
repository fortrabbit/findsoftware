---
id: svelte-i18n
name: svelte-i18n
urls:
  repository: https://github.com/kaisermann/svelte-i18n
  docs: https://github.com/kaisermann/svelte-i18n/blob/main/docs/Getting%20Started.md
category:
  - library
description: Internationalization library for Svelte that keeps the current locale, message dictionaries and formatters in Svelte stores.
status: active
maintainer: Christian Kaisermann
maintainerType: individual
firstRelease: 2018
language: javascript
basedOn:
  - svelte
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2024-10-21
githubStargazers: 1380
npmWeeklyDownloads: 177366
contributors: 25
dependentRepos: 586
dependentPackages: 81
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/kaisermann/svelte-i18n
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/kaisermann/svelte-i18n/main/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/kaisermann/svelte-i18n/main/LICENSE
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://raw.githubusercontent.com/kaisermann/svelte-i18n/main/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/kaisermann/svelte-i18n
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/kaisermann/svelte-i18n/main/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://raw.githubusercontent.com/kaisermann/svelte-i18n/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/kaisermann/svelte-i18n/blob/main/docs/Getting%20Started.md
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/kaisermann/svelte-i18n
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://registry.npmjs.org/svelte-i18n/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://registry.npmjs.org/svelte-i18n
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/svelte-i18n
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/svelte-i18n
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/svelte-i18n
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/svelte-i18n
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/kaisermann/svelte-i18n
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/kaisermann/svelte-i18n/contributors?per_page=1
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
runsAs: null
---

svelte-i18n localizes a Svelte app with stores. A locale store holds the current locale, a dictionary store holds the messages for each locale, and a formatter store turns a message id into text inside a component. A dictionary is a JSON object, added up front or loaded on demand, and the [Getting Started guide](https://github.com/kaisermann/svelte-i18n/blob/main/docs/Getting%20Started.md) covers both.

It is installed from npm into a Svelte project. Server rendering is covered by a separate SvelteKit guide, which sets the locale on the server from the request's language header.

## Worth knowing

The README opens with a notice that the library is being reworked, moving from a singleton to instances, and that the work will happen when the maintainer finds time and priority for it.
