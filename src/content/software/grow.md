---
id: grow
name: Grow
urls:
  home: https://grow.dev/
  repository: https://github.com/grow/grow
  docs: https://grow.dev/install/
category:
  - ssg
description: Static site generator for Python that builds localized websites from YAML content and Jinja templates.
status: stub
maintainer: The Grow.dev Authors
maintainerType: community
firstRelease: 2014
language: python
runtime:
  - python
hosting:
  - static
runtimeMin: python 3.3
contentStore:
  - flat-file
templating: jinja
i18n: yes
runsAs:
  - static
renderingModes:
  - static
installMethod: pipenv install grow
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2022-07-21
githubStargazers: 407
contributors: 17
ecosystemsMonthlyDownloads: 1293
dependentRepos: 9
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://grow.dev/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/grow/grow
    checkedAt: 2026-10-23
  - field: urls
    url: https://grow.dev/install/
    checkedAt: 2026-10-23
  - field: category
    url: https://grow.dev/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/grow/grow/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/grow/grow
    checkedAt: 2026-10-23
  - field: runtime
    url: https://grow.dev/install/
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://pypi.org/pypi/grow/json
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://grow.dev/install/
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/grow/grow/blob/main/README.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://grow.dev/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://grow.dev/workflow/deployment/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://grow.dev/workflow/deployment/
    checkedAt: 2026-10-23
  - field: templating
    url: https://grow.dev/
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/grow/grow/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/grow/grow/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/grow/grow/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/grow/grow/releases?per_page=100
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/grow/grow/releases?per_page=100
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/grow/grow/releases?per_page=100
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/grow/grow
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/grow/grow/contributors
    checkedAt: 2026-10-23
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/grow
    checkedAt: 2026-10-25
  - field: ecosystemsMonthlyDownloads
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/grow
    checkedAt: 2026-10-25
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Grow is a static site generator for Python. Content is managed in YAML and JSON files and rendered with Jinja templates, and the project documents inbuilt localization for content, translations and URLs. The project installs with Pipenv on Python 3, and its README suggests starting from a starter project. Deployment generates a static site and transfers it to a web server or another location; the [deployment guide](https://grow.dev/workflow/deployment/) documents Google Cloud Storage, Amazon S3, local, SCP and Git destinations.
