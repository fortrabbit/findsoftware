---
id: weasyprint
name: WeasyPrint
urls:
  home: https://weasyprint.org
  repository: https://github.com/Kozea/WeasyPrint
  docs: https://doc.courtbouillon.org/weasyprint/stable/
category:
  - media
description: Python library and command-line tool that renders HTML and CSS pages to PDF documents.
status: active
maintainer: Elycoop − SCOP SA
maintainerType: company
firstRelease: 2011
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
installMethod: pip, Homebrew, Linux distribution package, Windows executable
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "70"
latestReleaseDate: 2026-09-08
githubStargazers: 9795
contributors: 169
dependentRepos: 1344
dependentPackages: 114
social:
  mastodon: https://fosstodon.org/@courtbouillon
addedAt: 2026-11-17
checkedAt: 2026-11-17
sources:
  - field: urls
    url: https://weasyprint.org/
    checkedAt: 2026-11-17
  - field: urls
    url: https://api.github.com/repos/Kozea/WeasyPrint
    checkedAt: 2026-11-17
  - field: urls
    url: https://github.com/Kozea/WeasyPrint/blob/main/README.rst
    checkedAt: 2026-11-17
  - field: category
    url: https://weasyprint.org/
    checkedAt: 2026-11-17
  - field: language
    url: https://api.github.com/repos/Kozea/WeasyPrint
    checkedAt: 2026-11-17
  - field: runtime
    url: https://github.com/Kozea/WeasyPrint/blob/v70.0/README.rst
    checkedAt: 2026-11-17
  - field: runtimeMin
    url: https://pypi.org/pypi/weasyprint/json
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://doc.courtbouillon.org/weasyprint/stable/first_steps.html
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://doc.courtbouillon.org/weasyprint/stable/first_steps.html
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://doc.courtbouillon.org/weasyprint/stable/first_steps.html
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://doc.courtbouillon.org/weasyprint/stable/first_steps.html
    checkedAt: 2026-11-17
  - field: license
    url: https://api.github.com/repos/Kozea/WeasyPrint
    checkedAt: 2026-11-17
  - field: maintainer
    url: https://www.courtbouillon.org/legal/
    checkedAt: 2026-11-17
  - field: firstRelease
    url: https://pypi.org/pypi/weasyprint/json
    checkedAt: 2026-11-17
  - field: currentMajor
    url: https://api.github.com/repos/Kozea/WeasyPrint/releases
    checkedAt: 2026-11-17
  - field: latestReleaseDate
    url: https://api.github.com/repos/Kozea/WeasyPrint/releases
    checkedAt: 2026-11-17
  - field: githubStargazers
    url: https://api.github.com/repos/Kozea/WeasyPrint
    checkedAt: 2026-11-17
  - field: contributors
    url: https://api.github.com/repos/Kozea/WeasyPrint/contributors
    checkedAt: 2026-11-17
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/weasyprint
    checkedAt: 2026-11-17
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/weasyprint
    checkedAt: 2026-11-17
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
---

WeasyPrint turns HTML and CSS into PDF documents. Its layout engine is written in Python and designed for pagination, and it does not use a full browser engine. A web application calls it from Python to produce a PDF from a page, and the `weasyprint` command does the same from the shell.

WeasyPrint needs Pango, a text-layout system library, next to the Python package. The [installation guide](https://doc.courtbouillon.org/weasyprint/stable/first_steps.html) lists the platforms and their packages. The documentation's "Why WeasyPrint?" section names wkhtmltopdf as one of the projects that add paged-media features to existing browsers.

## Worth knowing

The docs warn that untrusted HTML or CSS can cause high memory use, endless renderings or access to local files, and advise running the service as a user with limited access or in a container. WeasyPrint can take a long time to render long documents. For many documents, the docs suggest the Python API in long-lived processes to avoid start-up costs on every run.
