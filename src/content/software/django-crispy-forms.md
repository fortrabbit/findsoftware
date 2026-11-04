---
id: django-crispy-forms
name: django-crispy-forms
urls:
  home: https://django-crispy-forms.readthedocs.io/en/latest/
  repository: https://github.com/django-crispy-forms/django-crispy-forms
  docs: https://django-crispy-forms.readthedocs.io/en/latest/
category:
  - forms
description: Django app that renders forms as configurable HTML from a template filter, a template tag and Python layout objects.
status: active
maintainer: Miguel Araujo, Daniel Feldroy and contributors
maintainerType: community
firstRelease: 2011
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
basedOn:
  - django
templating: django-templates
installMethod: pip
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-07-29
githubStargazers: 5150
contributors: 191
dependentRepos: 36528
dependentPackages: 110
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://django-crispy-forms.readthedocs.io/en/latest/
    checkedAt: 2026-11-04
  - field: urls
    url: https://api.github.com/repos/django-crispy-forms/django-crispy-forms
    checkedAt: 2026-11-04
  - field: urls
    url: https://django-crispy-forms.readthedocs.io/en/latest/
    checkedAt: 2026-11-04
  - field: category
    url: https://django-crispy-forms.readthedocs.io/en/latest/
    checkedAt: 2026-11-04
  - field: basedOn
    url: https://github.com/django-crispy-forms/django-crispy-forms/blob/2.7/pyproject.toml
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/django-crispy-forms/django-crispy-forms
    checkedAt: 2026-11-04
  - field: runtime
    url: https://github.com/django-crispy-forms/django-crispy-forms/blob/2.7/pyproject.toml
    checkedAt: 2026-11-04
  - field: runtimeMin
    url: https://github.com/django-crispy-forms/django-crispy-forms/blob/2.7/pyproject.toml
    checkedAt: 2026-11-04
  - field: templating
    url: https://django-crispy-forms.readthedocs.io/en/latest/template_packs.html
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://django-crispy-forms.readthedocs.io/en/latest/install.html
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://github.com/django-crispy-forms/django-crispy-forms/blob/2.7/LICENSE.txt
    checkedAt: 2026-11-04
  - field: license
    url: https://github.com/django-crispy-forms/django-crispy-forms/blob/2.7/pyproject.toml
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://github.com/django-crispy-forms/django-crispy-forms/blob/2.7/LICENSE.txt
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://pypi.org/pypi/django-crispy-forms/json
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://api.github.com/repos/django-crispy-forms/django-crispy-forms/releases/latest
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://api.github.com/repos/django-crispy-forms/django-crispy-forms/releases/latest
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/django-crispy-forms/django-crispy-forms
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/django-crispy-forms/django-crispy-forms/contributors
    checkedAt: 2026-11-04
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-crispy-forms
    checkedAt: 2026-11-04
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/django-crispy-forms
    checkedAt: 2026-11-04
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

django-crispy-forms renders Django forms as configurable HTML through a |crispy filter and a {% crispy %} tag. Layouts are built in Python from reusable components, so the markup comes from the template pack a project selects rather than from hand-written form templates. The pack chooses the CSS framework the output targets.

## Worth knowing

The core package ships no static files. The stylesheet and scripts of the chosen CSS framework are added to the site separately, and the Bootstrap 5 pack is a separate package.
