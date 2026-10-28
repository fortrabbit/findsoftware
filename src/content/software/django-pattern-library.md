---
id: django-pattern-library
name: django-pattern-library
urls:
  home: https://torchbox.github.io/django-pattern-library/
  repository: https://github.com/torchbox/django-pattern-library
  docs: https://torchbox.github.io/django-pattern-library/getting-started/
category:
  - dev-tool
description: Django module that builds a browsable UI pattern library from Django templates, with YAML data and Markdown documentation per pattern.
status: active
maintainer: Torchbox Ltd
maintainerType: company
firstRelease: 2019
hqCountry: GB
language: python
runtime:
  - python
runtimeMin: python 3.10
basedOn:
  - django
templating: django, jinja2
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: pip install django-pattern-library, or Poetry
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "1"
latestReleaseDate: 2026-07-24
githubStargazers: 424
contributors: 30
dependentRepos: 28
dependentPackages: 1
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://torchbox.github.io/django-pattern-library/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/torchbox/django-pattern-library
    checkedAt: 2026-10-28
  - field: urls
    url: https://torchbox.github.io/django-pattern-library/getting-started/
    checkedAt: 2026-10-28
  - field: category
    url: https://torchbox.github.io/django-pattern-library/
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/torchbox/django-pattern-library/blob/main/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/torchbox/django-pattern-library
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/torchbox/django-pattern-library/blob/v1.6.0/pyproject.toml
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/torchbox/django-pattern-library/blob/v1.6.0/pyproject.toml
    checkedAt: 2026-10-28
  - field: templating
    url: https://torchbox.github.io/django-pattern-library/getting-started/
    checkedAt: 2026-10-28
  - field: renderingModes
    url: https://torchbox.github.io/django-pattern-library/guides/static-site-export/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://torchbox.github.io/django-pattern-library/guides/static-site-export/
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://torchbox.github.io/django-pattern-library/getting-started/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://torchbox.github.io/django-pattern-library/getting-started/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://raw.githubusercontent.com/torchbox/django-pattern-library/main/LICENSE
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://torchbox.com/contact/
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/torchbox/django-pattern-library
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/torchbox/django-pattern-library/main/LICENSE
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://pypi.org/pypi/django-pattern-library/json
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/torchbox/django-pattern-library/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://github.com/torchbox/django-pattern-library/releases/tag/v1.6.0
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/torchbox/django-pattern-library
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/torchbox/django-pattern-library/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-pattern-library
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-pattern-library
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
i18n: null
hosting: null
packagistDownloads: null
npmWeeklyDownloads: null
---

django-pattern-library is a Django module for building UI pattern libraries, styleguides made from a project's own Django templates. It is installed with pip or Poetry, and the library is rendered by Django, so it depends on Django for rendering. Django templates are supported, and Jinja templates are supported in an experimental form.

The library can also be exported as a static site, which the project describes as a way to publish a pattern library without a runtime dependency on the rest of the code.

## Worth knowing

The getting-started guide says to enable the package only in testing environments, for a restricted, trusted audience. The Jinja support is marked experimental in the docs. The project is maintained by Torchbox Ltd, a company registered in England and Wales, and the repository is under the torchbox organization on GitHub.
