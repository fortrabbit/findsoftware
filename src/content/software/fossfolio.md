---
id: fossfolio
name: Fossfolio
urls:
  home: https://fossworx-labs.github.io/fossfolio/
  repository: https://github.com/fossworx-labs/fossfolio
category:
  - ssg
description: Python static site generator for developer portfolio sites, built from Markdown content with plugin placeholders.
status: stub
maintainer: Anuran Roy
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3.9
contentStore:
  - flat-file
runsAs:
  - local
  - static
renderingModes:
  - static
installMethod: git clone, poetry install
licenseModel: open-source
license: MIT
githubStargazers: 31
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://fossworx-labs.github.io/fossfolio/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/fossworx-labs/fossfolio
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/fossworx-labs/fossfolio/main/LICENSE.md
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/fossworx-labs/fossfolio/main/README.md
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/fossworx-labs/fossfolio
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/fossworx-labs/fossfolio/main/pyproject.toml
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://raw.githubusercontent.com/fossworx-labs/fossfolio/main/pyproject.toml
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://raw.githubusercontent.com/fossworx-labs/fossfolio/main/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://raw.githubusercontent.com/fossworx-labs/fossfolio/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/fossworx-labs/fossfolio/main/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/fossworx-labs/fossfolio/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/fossworx-labs/fossfolio/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/fossworx-labs/fossfolio/main/LICENSE.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/fossworx-labs/fossfolio/main/LICENSE.md
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/fossworx-labs/fossfolio
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/fossworx-labs/fossfolio/contributors?per_page=1
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#9ad1d4"
  textColor: "#1a1a1a"
  text: Python · SSG
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Fossfolio is a static site generator written in Python for developers who want their own static websites, mostly portfolios. It is based on Python-markdown. Plugins are Python modules that replace placeholders such as `<% current_time %>` in the Markdown files. The [project site](https://fossworx-labs.github.io/fossfolio/) describes running `python build.py` to write the generated site to a `build` folder.

## Worth knowing

The README says Jinja2 templating is under development, so the plugin placeholders are the only templating it describes. The repository has no release and no tag.
