---
id: nicegui
name: NiceGUI
urls:
  home: https://nicegui.io
  repository: https://github.com/zauberzeug/nicegui
  docs: https://nicegui.io/documentation
category:
  - framework
description: Python UI framework that builds web-based user interfaces shown in the browser, served by a running Python process.
status: active
maintainer: Zauberzeug GmbH
maintainerType: company
firstRelease: 2021
hqCountry: DE
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
basedOn:
  - fastapi
runsAs:
  - always-on
renderingModes:
  - server
installMethod: pip install nicegui
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-07
githubStargazers: 16317
contributors: 228
social:
  discord: https://discord.gg/TEpFeAaF4f
  forum: https://github.com/zauberzeug/nicegui/discussions
  subreddit: https://www.reddit.com/r/nicegui/
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://pypi.org/pypi/nicegui/json
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/zauberzeug/nicegui
    checkedAt: 2026-10-26
  - field: urls
    url: https://raw.githubusercontent.com/zauberzeug/nicegui/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/zauberzeug/nicegui/main/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/zauberzeug/nicegui
    checkedAt: 2026-10-26
  - field: category
    url: https://raw.githubusercontent.com/zauberzeug/nicegui/main/README.md
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://raw.githubusercontent.com/zauberzeug/nicegui/main/README.md
    checkedAt: 2026-10-26
  - field: runtime
    url: https://pypi.org/pypi/nicegui/json
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://pypi.org/pypi/nicegui/json
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/zauberzeug/nicegui/main/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/zauberzeug/nicegui/main/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/zauberzeug/nicegui/main/README.md
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://raw.githubusercontent.com/zauberzeug/nicegui/main/website/imprint_privacy.py
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://raw.githubusercontent.com/zauberzeug/nicegui/main/website/documentation/content/section_configuration_deployment.py
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://raw.githubusercontent.com/zauberzeug/nicegui/main/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/zauberzeug/nicegui/main/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/zauberzeug/nicegui/main/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/zauberzeug/nicegui/releases
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/zauberzeug/nicegui/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/zauberzeug/nicegui/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/zauberzeug/nicegui
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/zauberzeug/nicegui/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

NiceGUI is a Python framework for building web user interfaces. The developer writes the interface in Python, and the framework shows it in the browser, keeping a WebSocket connection open between the page and the Python process. The project states that it is built on top of FastAPI. The same code can also run in a native desktop window instead of the browser. Redis is available as an optional storage backend next to the default file storage, and the project's own website at nicegui.io is built with NiceGUI.

## Worth knowing

All UI logic runs in the Python process, which uses a single uvicorn worker. The deployment guide describes starting the main script with systemd or a similar service, or running the Docker image, so the process has to keep running for connected browsers to work.
