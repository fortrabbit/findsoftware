---
id: webassets
name: webassets
urls:
  repository: https://github.com/miracle2k/webassets
  docs: https://webassets.readthedocs.io/en/latest/
category:
  - build-tool
description: Python library that merges, compresses and versions CSS and JavaScript files for web applications, with framework integrations.
status: active
maintainer: Michael Elsdörfer
maintainerType: individual
firstRelease: 2008
language: python
runtime:
  - python
runtimeMin: python 3.10
installMethod: pip
licenseModel: open-source
license: BSD-2-Clause, BSD
currentMajor: "3"
latestReleaseDate: 2025-08-17
githubStargazers: 932
contributors: 136
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/miracle2k/webassets
    checkedAt: 2026-10-28
  - field: urls
    url: https://webassets.readthedocs.io/en/latest/
    checkedAt: 2026-10-28
  - field: category
    url: https://webassets.readthedocs.io/en/latest/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/miracle2k/webassets/master/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/miracle2k/webassets
    checkedAt: 2026-10-28
  - field: runtime
    url: https://pypi.org/pypi/webassets/json
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://pypi.org/pypi/webassets/json
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/miracle2k/webassets
    checkedAt: 2026-10-28
  - field: license
    url: https://pypi.org/pypi/webassets/json
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://pypi.org/pypi/webassets/json
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/miracle2k/webassets/releases/latest
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/miracle2k/webassets/tags
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://raw.githubusercontent.com/miracle2k/webassets/master/README.rst
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/miracle2k/webassets
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/miracle2k/webassets/contributors
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
npmWeeklyDownloads: null
---

webassets is a Python library that manages the CSS and JavaScript assets of a web application. It merges and compresses source files, runs them through filters and compilers such as CoffeeScript or Sass, and puts a hash of each output's content into its URL, so that changed files get new URLs.

Bundles are defined in code or in an external configuration file. A bundle returns the URL of its merged output, or in debug mode the URL of each source file. The library does not depend on one web framework; the docs describe integration pages for Django, Flask and Pyramid, and a Jinja2 integration.

## Worth knowing

The project's PyPI classifier marks the package as Development Status Alpha. The documentation site's title names an older release than the newest one, so the docs may describe an older version.
