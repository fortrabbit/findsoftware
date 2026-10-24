---
id: pdoc
name: pdoc
urls:
  home: https://pdoc.dev
  repository: https://github.com/mitmproxy/pdoc
  docs: https://pdoc.dev/docs/pdoc.html
category:
  - ssg
description: API documentation generator for Python projects that renders modules, classes and functions from their docstrings and type annotations into HTML.
status: active
maintainer: Maximilian Hils
firstRelease: 2013
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
templating: jinja2
installMethod: pip
licenseModel: open-source
license: MIT-0
currentMajor: "16"
latestReleaseDate: 2025-10-27
githubStargazers: 2519
contributors: 62
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://pdoc.dev/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/mitmproxy/pdoc
    checkedAt: 2026-10-23
  - field: urls
    url: https://pdoc.dev/docs/pdoc.html
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/mitmproxy/pdoc/main/LICENSE
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/mitmproxy/pdoc/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/mitmproxy/pdoc/blob/main/README.md
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/mitmproxy/pdoc/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/mitmproxy/pdoc/blob/main/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://pdoc.dev/docs/pdoc.html
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/mitmproxy/pdoc
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/mitmproxy/pdoc/main/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://pypi.org/pypi/pdoc/json
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://pypi.org/pypi/pdoc/json
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://pypi.org/pypi/pdoc/json
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/mitmproxy/pdoc
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/mitmproxy/pdoc/contributors?per_page=1
    checkedAt: 2026-10-23
ai: authored
---

pdoc generates API documentation for Python projects. It imports the modules it is given, reads their docstrings and type annotations, and writes standalone HTML. The pdoc command includes a web server with live reloading, and the [pdoc documentation](https://pdoc.dev/docs/pdoc.html) describes its templates and options. The project is installed with pip and is maintained by Maximilian Hils.

## Worth knowing

pdoc runs the code of the modules it documents, so those modules are imported on every run. The README recommends Sphinx for substantially more complex documentation needs and states that the project is not associated with the separate pdoc3 project.
