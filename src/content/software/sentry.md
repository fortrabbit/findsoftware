---
id: sentry
name: Sentry
urls:
  home: https://sentry.io
  repository: https://github.com/getsentry/sentry
  docs: https://develop.sentry.dev/self-hosted/
  pricing: https://sentry.io/pricing/
category:
  - analytics
description: Application monitoring and error tracking platform, self-hosted or offered as Sentry SaaS.
status: active
maintainer: Functional Software, Inc. (dba Sentry)
maintainerType: company
hqCountry: US
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.13
runsAs:
  - always-on
installMethod: docker-compose, bash-install-script
licenseModel: source-available
license: FSL-1.1-Apache-2.0
currentMajor: "26"
latestReleaseDate: 2026-10-16
githubStargazers: 45600
contributors: 1101
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: urls
    url: https://sentry.io
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/getsentry/sentry
    checkedAt: 2026-10-19
  - field: urls
    url: https://develop.sentry.dev/self-hosted/
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://sentry.io
    checkedAt: 2026-10-19
  - field: maintainerType
    url: https://sentry.io
    checkedAt: 2026-10-19
  - field: hqCountry
    url: https://sentry.io/about/
    checkedAt: 2026-10-19
  - field: language
    url: https://github.com/getsentry/sentry
    checkedAt: 2026-10-19
  - field: runtime
    url: https://github.com/getsentry/sentry/blob/26.10.0/pyproject.toml
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://github.com/getsentry/sentry/blob/26.10.0/pyproject.toml
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://develop.sentry.dev/self-hosted/
    checkedAt: 2026-10-19
  - field: category
    url: https://sentry.io
    checkedAt: 2026-10-19
  - field: license
    url: https://github.com/getsentry/sentry/blob/26.10.0/LICENSE.md
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://github.com/getsentry/sentry/blob/26.10.0/LICENSE.md
    checkedAt: 2026-10-19
  - field: urls
    url: https://sentry.io/pricing/
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://github.com/getsentry/sentry/releases/tag/26.10.0
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://github.com/getsentry/sentry/releases/tag/26.10.0
    checkedAt: 2026-10-19
  - field: githubStargazers
    url: https://github.com/getsentry/sentry
    checkedAt: 2026-10-19
  - field: contributors
    url: https://github.com/getsentry/sentry
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://develop.sentry.dev/self-hosted/
    checkedAt: 2026-10-19
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

Sentry is an application monitoring and error tracking platform, offered as Sentry SaaS and as a self-hosted install. The platform is written in Python. The self-hosted installer lives in a separate repository and runs the stack in Docker Compose with a bash install and upgrade script, according to the [self-hosted docs](https://develop.sentry.dev/self-hosted/). Functional Software, Inc., which does business as Sentry and is based in San Francisco, develops it.

## Worth knowing

The license is the Functional Source License 1.1 with an Apache 2.0 future license: the code converts to Apache 2.0 after two years, and until then the license is not an OSI-approved open-source license.
