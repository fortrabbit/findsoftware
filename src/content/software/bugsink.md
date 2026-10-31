---
id: bugsink
name: Bugsink
urls:
  home: https://www.bugsink.com
  repository: https://github.com/bugsink/bugsink
  docs: https://www.bugsink.com/docs/
category:
  - analytics
description: Self-hosted error tracking server that accepts events from Sentry SDKs, with an optional managed version run by the same company.
status: active
maintainer: Bugsink B.V.
maintainerType: company
firstRelease: 2024
hqCountry: NL
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.11
databases:
  - sqlite
  - mysql
  - postgres
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: PolyForm-Shield-1.0.0, BSD-3-Clause, MIT, proprietary, ee/ directory only
currentMajor: "2"
latestReleaseDate: 2026-10-22
githubStargazers: 2156
contributors: 42
social:
  discord: https://discord.gg/6Af6Yzz77C
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://www.bugsink.com
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/bugsink/bugsink
    checkedAt: 2026-10-31
  - field: urls
    url: https://www.bugsink.com/docs/installation/
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://github.com/bugsink/bugsink/blob/2.6.2/LICENSE
    checkedAt: 2026-10-31
  - field: maintainerType
    url: https://www.bugsink.com/about/
    checkedAt: 2026-10-31
  - field: hqCountry
    url: https://www.bugsink.com/about/
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/bugsink/bugsink
    checkedAt: 2026-10-31
  - field: runtime
    url: https://github.com/bugsink/bugsink/blob/2.6.2/pyproject.toml
    checkedAt: 2026-10-31
  - field: runtimeMin
    url: https://github.com/bugsink/bugsink/blob/2.6.2/pyproject.toml
    checkedAt: 2026-10-31
  - field: category
    url: https://www.bugsink.com
    checkedAt: 2026-10-31
  - field: databases
    url: https://www.bugsink.com/docs/installation/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://www.bugsink.com/docs/installation/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://www.bugsink.com/docs/docker-compose-install/
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://www.bugsink.com/docs/local-install-using-virtualenv/
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://www.bugsink.com/docs/installation/
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/bugsink/bugsink/blob/2.6.2/LICENSE
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/bugsink/bugsink/blob/2.6.2/LICENSE
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/bugsink/bugsink/blob/2.6.2/LICENSE
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/bugsink/bugsink/blob/2.6.2/ee/LICENSE
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/bugsink/bugsink/releases/tag/2.6.2
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/bugsink/bugsink/releases/tag/2.6.2
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://pypi.org/pypi/bugsink/json
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/bugsink/bugsink
    checkedAt: 2026-10-31
  - field: contributors
    url: https://github.com/bugsink/bugsink
    checkedAt: 2026-10-31
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Bugsink is a self-hosted error tracking server that accepts events from Sentry SDKs. It is written in Python, and the [single server guide](https://www.bugsink.com/docs/single-server-production/) runs it with Gunicorn behind Nginx, while the Docker guides run it in a container. The data goes to SQLite, MySQL or PostgreSQL, and the quickest Docker setup uses SQLite in a throw-away container, as the [Docker install guide](https://www.bugsink.com/docs/docker-install/) describes. Bugsink B.V. develops it and also runs the same product as a managed service.

## Worth knowing

Most of the code is under the PolyForm Shield 1.0.0 license, and the ee/ directory may be used only under a separate license from Bugsink B.V.
