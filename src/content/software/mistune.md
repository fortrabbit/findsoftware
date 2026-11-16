---
id: mistune
name: Mistune
urls:
  home: https://mistune.lepture.com/en/latest/
  repository: https://github.com/lepture/mistune
  docs: https://mistune.lepture.com/en/latest/
category:
  - library
description: Python library that parses Markdown and renders it to HTML through renderers and plugins.
status: active
maintainer: Hsiaoming Yang
maintainerType: individual
firstRelease: 2014
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
installMethod: pip
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "3"
latestReleaseDate: 2026-10-19
githubStargazers: 3085
contributors: 84
dependentRepos: 64256
dependentPackages: 331
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://mistune.lepture.com/en/latest/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/lepture/mistune
    checkedAt: 2026-11-16
  - field: urls
    url: https://mistune.lepture.com/en/latest/
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://pypi.org/pypi/mistune/json
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/lepture/mistune/blob/v3.4.0/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/lepture/mistune
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/lepture/mistune/blob/v3.4.0/README.md
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/lepture/mistune/blob/v3.4.0/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/lepture/mistune/blob/v3.4.0/pyproject.toml
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/lepture/mistune/blob/v3.4.0/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/lepture/mistune/blob/v3.4.0/pyproject.toml
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/lepture/mistune/blob/v3.4.0/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/lepture/mistune/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/lepture/mistune/releases
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/mistune
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/mistune
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/lepture/mistune
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/lepture/mistune/contributors?per_page=1
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
runsAs: null
---

Mistune is a Python library that turns Markdown text into HTML. A caller creates a parser with create_markdown and passes it the Markdown text, and the library ships renderers and plugins alongside the parser. It is installed with pip and maintained by Hsiaoming Yang. The [documentation](https://mistune.lepture.com/en/latest/) is the project's own site.

## Worth knowing

create_markdown() escapes raw HTML by default. The legacy mistune.html() helper enables raw HTML and several plugins, and the README says to use it only for trusted input or to sanitize its output elsewhere.
