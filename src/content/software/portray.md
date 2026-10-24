---
id: portray
name: portray
urls:
  home: https://timothycrosley.github.io/portray/
  repository: https://github.com/timothycrosley/portray
  docs: https://timothycrosley.github.io/portray/docs/quick_start/1.-installation/
category:
  - ssg
description: Python command line tool and library that builds documentation websites for Python projects from Markdown and docstrings.
status: active
maintainer: Timothy Crosley
maintainerType: individual
firstRelease: 2019
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3.7
basedOn:
  - mkdocs
contentStore:
  - flat-file
runsAs:
  - local
  - static
renderingModes:
  - static
installMethod: pip3 install portray
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2022-12-19
githubStargazers: 861
contributors: 20
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://timothycrosley.github.io/portray/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/timothycrosley/portray
    checkedAt: 2026-10-23
  - field: urls
    url: https://timothycrosley.github.io/portray/docs/quick_start/1.-installation/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/timothycrosley/portray/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/timothycrosley/portray
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/timothycrosley/portray/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/timothycrosley/portray/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://pypi.org/pypi/portray/json
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://timothycrosley.github.io/portray/docs/quick_start/1.-installation/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://timothycrosley.github.io/portray/docs/quick_start/1.-installation/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://timothycrosley.github.io/portray/docs/quick_start/1.-installation/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/timothycrosley/portray/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://timothycrosley.github.io/portray/docs/quick_start/1.-installation/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/timothycrosley/portray/blob/main/README.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/timothycrosley/portray/blob/main/README.md
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/timothycrosley/portray/blob/main/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://timothycrosley.github.io/portray/docs/quick_start/2.-cli/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/timothycrosley/portray
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/timothycrosley/portray/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/portray/json
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://pypi.org/pypi/portray/json
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://pypi.org/pypi/portray/json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/timothycrosley/portray
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/timothycrosley/portray/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

portray is a Python command line tool and library that builds a documentation website for a Python project. It renders the project's Markdown files and the Markdown in its docstrings, and combines MkDocs for Markdown rendering with pdocs for reference documentation. The output is standard static HTML, and `portray on_github_pages` automates publishing to GitHub Pages.

The [installation guide](https://timothycrosley.github.io/portray/docs/quick_start/1.-installation/) says to install it with pip, Poetry or pipenv into the project's own environment and to run it from the root of the project, because it introspects the package to generate reference documentation.
