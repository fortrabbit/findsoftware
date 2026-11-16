---
id: markdown-it-py
name: markdown-it-py
urls:
  home: https://markdown-it-py.readthedocs.io
  repository: https://github.com/executablebooks/markdown-it-py
  docs: https://markdown-it-py.readthedocs.io
  plugins: https://markdown-it-py.readthedocs.io/en/latest/plugins.html
category:
  - library
description: Python port of the markdown-it Markdown parser, which follows the CommonMark spec and supports syntax plugins.
status: active
maintainer: ExecutableBookProject
maintainerType: community
firstRelease: 2020
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
installMethod: pip, conda
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-11-10
githubStargazers: 1397
contributors: 55
dependentRepos: 11935
dependentPackages: 508
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://markdown-it-py.readthedocs.io/en/latest/
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/executablebooks/markdown-it-py
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/executablebooks/markdown-it-py/blob/master/README.md
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/executablebooks/markdown-it-py/blob/v4.3.0/LICENSE
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/executablebooks/markdown-it-py/blob/v4.3.0/LICENSE
    checkedAt: 2026-11-16
  - field: urls
    url: https://markdown-it-py.readthedocs.io/en/latest/
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/executablebooks/markdown-it-py/blob/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://github.com/executablebooks/markdown-it-py
    checkedAt: 2026-11-16
  - field: runtime
    url: https://github.com/executablebooks/markdown-it-py/blob/master/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/executablebooks/markdown-it-py/blob/v4.3.0/pyproject.toml
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/executablebooks/markdown-it-py/blob/master/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/executablebooks/markdown-it-py/blob/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/executablebooks/markdown-it-py/blob/v4.3.0/LICENSE
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://github.com/executablebooks/markdown-it-py
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/executablebooks/markdown-it-py/releases/tag/v4.3.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/executablebooks/markdown-it-py/releases/tag/v4.3.0
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://github.com/executablebooks/markdown-it-py/releases/tag/v0.1.1d
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://github.com/executablebooks/markdown-it-py
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/executablebooks/markdown-it-py/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/markdown-it-py
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/markdown-it-py
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

markdown-it-py parses Markdown into a stream of tokens and renders the tokens to HTML. It follows the CommonMark spec for the base syntax, and its rules can be extended or replaced in code. Syntax beyond CommonMark comes from plugins that are added to a parser object with `use`, and a plugin such as the table syntax is switched on with `enable`.

It is a Python port of markdown-it, the JavaScript parser, and changes as little of the JavaScript code structure as possible. The package also installs a command-line tool, `markdown-it`, which reads files or standard input and writes HTML to standard output.

## Worth knowing

Tables are off by default, as in CommonMark, so a document that uses table syntax needs the table option or the command-line flag to render it as a table.
