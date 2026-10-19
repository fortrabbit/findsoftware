---
id: glitchtip
name: GlitchTip
urls:
  home: https://glitchtip.com
  repository: https://gitlab.com/glitchtip/glitchtip-backend
  docs: https://glitchtip.com/documentation
  pricing: https://glitchtip.com/pricing
category:
  - analytics
description: Open-source error tracking platform that works with Sentry client SDKs, self-hosted or hosted by GlitchTip.
status: active
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.12
runsAs:
  - always-on
installMethod: docker-compose, helm-chart, managed-hosting, source-uv
licenseModel: open-source
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-08-07
contributors: 39
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: urls
    url: https://glitchtip.com
    checkedAt: 2026-10-19
  - field: urls
    url: https://gitlab.com/glitchtip/glitchtip-backend
    checkedAt: 2026-10-19
  - field: urls
    url: https://glitchtip.com/documentation
    checkedAt: 2026-10-19
  - field: language
    url: https://gitlab.com/glitchtip/glitchtip-backend
    checkedAt: 2026-10-19
  - field: runtime
    url: https://gitlab.com/glitchtip/glitchtip-backend/-/blob/v6.2.6/pyproject.toml
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://gitlab.com/glitchtip/glitchtip-backend/-/blob/v6.2.6/pyproject.toml
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://glitchtip.com/documentation/install
    checkedAt: 2026-10-19
  - field: category
    url: https://glitchtip.com
    checkedAt: 2026-10-19
  - field: license
    url: https://gitlab.com/glitchtip/glitchtip-backend/-/blob/v6.2.6/LICENSE
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://glitchtip.com
    checkedAt: 2026-10-19
  - field: urls
    url: https://glitchtip.com/pricing
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://gitlab.com/glitchtip/glitchtip-backend/-/tags/v6.2.6
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://gitlab.com/glitchtip/glitchtip-backend/-/tags/v6.2.6
    checkedAt: 2026-10-19
  - field: contributors
    url: https://gitlab.com/glitchtip/glitchtip-backend
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://glitchtip.com/documentation/install
    checkedAt: 2026-10-19
figure:
  emoji: 📈
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: Python · Analytics
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

GlitchTip is an error tracking platform that accepts events from Sentry client SDKs. It is written in Python and needs PostgreSQL, with Valkey or Redis as an option, as the [install guide](https://glitchtip.com/documentation/install) describes. The guide recommends Docker Compose and also lists a Helm chart, managed hosting and a source install with uv. GlitchTip is also offered as a hosted service with paid plans.
