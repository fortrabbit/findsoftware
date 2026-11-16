---
id: sveltekit-superforms
name: Superforms
urls:
  home: https://superforms.rocks
  repository: https://github.com/ciscoheat/sveltekit-superforms
  docs: https://superforms.rocks/get-started
category:
  - forms
description: Form library for SvelteKit that validates form data on the server and in the client with the validation library of choice.
status: active
maintainer: Andreas Söderlund
maintainerType: individual
firstRelease: 2023
language: javascript
basedOn:
  - sveltekit
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-29
githubStargazers: 2784
npmWeeklyDownloads: 376937
contributors: 26
dependentRepos: 205
dependentPackages: 7
social:
  x: https://twitter.com/encodeart
  discord: https://discord.gg/g5GHjGtU2W
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: name
    url: https://superforms.rocks/
    checkedAt: 2026-11-16
  - field: urls
    url: https://superforms.rocks/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/ciscoheat/sveltekit-superforms
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/ciscoheat/sveltekit-superforms/v3.1.0/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/ciscoheat/sveltekit-superforms/releases
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/ciscoheat/sveltekit-superforms/v3.1.0/LICENSE
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://raw.githubusercontent.com/ciscoheat/sveltekit-superforms/v3.1.0/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/ciscoheat/sveltekit-superforms
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/ciscoheat/sveltekit-superforms/v3.1.0/README.md
    checkedAt: 2026-11-16
  - field: basedOn
    url: https://raw.githubusercontent.com/ciscoheat/sveltekit-superforms/v3.1.0/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://superforms.rocks/get-started
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/ciscoheat/sveltekit-superforms/v3.1.0/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/ciscoheat/sveltekit-superforms/v3.1.0/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/ciscoheat/sveltekit-superforms/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/ciscoheat/sveltekit-superforms/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/ciscoheat/sveltekit-superforms
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/ciscoheat/sveltekit-superforms/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/sveltekit-superforms
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/sveltekit-superforms
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/sveltekit-superforms
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
---

Superforms is a form library for SvelteKit that validates form data on the server and in the client. A form is defined by a schema from one of the supported validation libraries, and the server function `superValidate` builds the form in a load function or a form action so the page can return it to the client.

The npm package is installed into a SvelteKit project next to the validation library the schema uses. The [get-started tutorial](https://superforms.rocks/get-started) walks through a first form with a schema, a load function and an action.

## Worth knowing

The schema has to be defined at the top level of its module so the adapter caching works. Support through the project's Discord is free for non-profit use, and commercial support is bought with a donation.
