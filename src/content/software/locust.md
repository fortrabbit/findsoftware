---
id: locust
name: Locust
urls:
  home: https://locust.io
  repository: https://github.com/locustio/locust
  docs: https://docs.locust.io/en/stable/what-is-locust.html
category:
  - testing
description: Load testing tool that writes test scenarios as Python code and runs them against HTTP and other protocols.
status: active
maintainer: Lars Holmberg
firstRelease: 2011
language: python
runtime:
  - python
runtimeMin: python 3.11
runsAs:
  - local
installMethod: pip, docker
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-10-21
githubStargazers: 28289
contributors: 340
dependentRepos: 1883
dependentPackages: 39
social:
  x: https://twitter.com/locustio
  discord: https://discord.gg/faeXQY82Zs
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://locust.io/
    checkedAt: 2026-11-16
  - field: urls
    url: https://docs.locust.io/en/stable/what-is-locust.html
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/locustio/locust
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/locustio/locust/tags
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/locustio/locust/master/README.md
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/locustio/locust/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/locustio/locust
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/locustio/locust/master/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://pypi.org/pypi/locust/json
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://docs.locust.io/en/stable/installation.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://docs.locust.io/en/stable/running-in-docker.html
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://docs.locust.io/en/stable/running-without-web-ui.html
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/locustio/locust/master/README.md
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/locustio/locust/master/README.md
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/locustio/locust/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/locustio/locust/releases
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/locustio/locust
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/locustio/locust/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/locust
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/locust
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Locust is a load testing tool in which test scenarios are plain Python code, so loops, conditions and calculations use ordinary language constructs. Tests run from the command line or from a web interface that shows throughput, response times and errors while the test runs, and the results can be exported for later analysis. The tool works mainly with websites and services over HTTP, and the documentation describes writing a client for other systems and protocols. The README also describes distributing a load test across several machines.

## Worth knowing

The documentation has a hosted load testing page that describes Azure Load Testing, a Microsoft-managed service that runs Locust tests in the cloud. It is separate from the open source tool.
