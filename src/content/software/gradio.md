---
id: gradio
name: Gradio
urls:
  home: https://gradio.app
  repository: https://github.com/gradio-app/gradio
  docs: https://gradio.app/docs/
category:
  - framework
description: Python package for building web interfaces and demos for machine learning models and Python functions.
status: active
maintainer: Gradio
firstRelease: 2019
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
runsAs:
  - always-on
installMethod: pip install gradio
licenseModel: open-source
license: Apache-2.0
currentMajor: "6"
latestReleaseDate: 2026-10-08
githubStargazers: 43894
contributors: 467
social:
  x: https://twitter.com/Gradio
  discord: https://discord.com/invite/feTf9x3ZSB
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://gradio.app/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/gradio-app/gradio
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/gradio-app/gradio/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://api.github.com/users/gradio-app
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/gradio-app/gradio/blob/main/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/gradio-app/gradio
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/gradio-app/gradio/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://github.com/gradio-app/gradio/blob/main/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/gradio-app/gradio/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://gradio.app/guides/deploying-gradio-with-docker
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/gradio-app/gradio/blob/main/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/gradio-app/gradio
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/gradio-app/gradio/blob/main/README.md
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/gradio-app/gradio/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/gradio-app/gradio/releases
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://pypi.org/pypi/gradio/json
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/gradio-app/gradio/contributors
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/gradio-app/gradio
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Gradio is a Python package for building web interfaces and demos for machine learning models and Python functions. A demo is written in Python and installed with `pip install gradio`, and the app runs as a Python process. The gradio-app organization on GitHub maintains it under the Apache 2.0 license, and the project lists a Discord server.

The Docker deployment guide runs a Gradio app on `0.0.0.0` and exposes port 7860. The sharing guide names Hugging Face Spaces as the hosting option for a permanent link to a demo.

## Worth knowing

Launching with `share=True` creates a public link to a demo. The homepage describes that link as pointing at a demo running on the user's own computer.
