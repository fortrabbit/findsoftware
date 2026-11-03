---
id: libretranslate
name: LibreTranslate
urls:
  home: https://libretranslate.com
  repository: https://github.com/LibreTranslate/LibreTranslate
  docs: https://docs.libretranslate.com/
category:
  - library
description: Open source machine translation API that can run self-hosted, with translation engines from the Argos Translate library.
status: active
maintainer: LibreTranslate Authors
maintainerType: community
firstRelease: 2020
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.8
adminUi: true
runsAs:
  - always-on
installMethod: pip install libretranslate, then run libretranslate
licenseModel: open-source
license: AGPL-3.0
currentMajor: "1"
latestReleaseDate: 2026-05-26
githubStargazers: 17258
contributors: 242
dependentRepos: 2
social:
  bluesky: https://bsky.app/profile/libretranslate.com
  forum: https://community.libretranslate.com
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://libretranslate.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/LibreTranslate/LibreTranslate
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.libretranslate.com/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/LibreTranslate/LibreTranslate/blob/v1.9.6/pyproject.toml
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/LibreTranslate/LibreTranslate/blob/v1.9.6/pyproject.toml
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/LibreTranslate/LibreTranslate/releases
    checkedAt: 2026-11-03
  - field: category
    url: https://docs.libretranslate.com/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/LibreTranslate/LibreTranslate
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/LibreTranslate/LibreTranslate/blob/v1.9.6/pyproject.toml
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/LibreTranslate/LibreTranslate/blob/v1.9.6/pyproject.toml
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.libretranslate.com/guides/installation/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.libretranslate.com/guides/installation/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.libretranslate.com/guides/installation/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.libretranslate.com/guides/installation/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.libretranslate.com/guides/faq/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.libretranslate.com/guides/installation/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/LibreTranslate/LibreTranslate/blob/v1.9.6/pyproject.toml
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://docs.libretranslate.com/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/LibreTranslate/LibreTranslate/releases/tag/v1.9.6
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/LibreTranslate/LibreTranslate/releases/tag/v1.9.6
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/LibreTranslate/LibreTranslate
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/LibreTranslate/LibreTranslate/contributors
    checkedAt: 2026-11-03
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/libretranslate
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

LibreTranslate is a machine translation API whose translation engine comes from the Argos Translate library. It is a Python program. Installed with pip, it starts a local web server that offers an HTTP endpoint for translating text and a web interface for doing the same by hand, and the same server runs as a systemd service, from a Docker image, from a clone of the repository through a run script, or on Kubernetes with a Helm chart. The web interface can be switched off with a startup option, and the [installation guide](https://docs.libretranslate.com/guides/installation/) lists the routes.

The project also runs a managed service for people who do not want to host it. That service is offered beside the free software and uses API keys.

## Worth knowing

The managed service uses API keys. The docs state that using libretranslate.com in production requires buying an API key, and that the software can be run for free on a server of one's own.
