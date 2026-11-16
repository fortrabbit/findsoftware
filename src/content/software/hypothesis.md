---
id: hypothesis
name: Hypothesis
urls:
  home: https://hypothesis.works
  repository: https://github.com/HypothesisWorks/hypothesis
  docs: https://hypothesis.readthedocs.io/en/latest/
category:
  - testing
description: Property-based testing library for Python that generates test inputs from declared ranges and reports the simplest failing case.
status: active
maintainer: David R. MacIver
firstRelease: 2013
language: python
runtime:
  - python
runtimeMin: python 3.11
installMethod: pip
licenseModel: open-source
license: MPL-2.0
currentMajor: "6"
latestReleaseDate: 2026-11-06
githubStargazers: 9171
contributors: 324
social:
  forum: https://groups.google.com/forum/#!forum/hypothesis-users
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://raw.githubusercontent.com/HypothesisWorks/hypothesis/master/README.md
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/HypothesisWorks/hypothesis
    checkedAt: 2026-11-16
  - field: urls
    url: https://raw.githubusercontent.com/HypothesisWorks/hypothesis/master/README.md
    checkedAt: 2026-11-16
  - field: category
    url: https://raw.githubusercontent.com/HypothesisWorks/hypothesis/master/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/HypothesisWorks/hypothesis
    checkedAt: 2026-11-16
  - field: runtime
    url: https://raw.githubusercontent.com/HypothesisWorks/hypothesis/master/README.md
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://github.com/HypothesisWorks/hypothesis/blob/v6.170.15/hypothesis/pyproject.toml
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/HypothesisWorks/hypothesis/master/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/HypothesisWorks/hypothesis/blob/v6.170.15/hypothesis/pyproject.toml
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/HypothesisWorks/hypothesis/v6.170.15/LICENSE.txt
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/HypothesisWorks/hypothesis/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/HypothesisWorks/hypothesis/releases/latest
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://pypi.org/pypi/hypothesis/json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/HypothesisWorks/hypothesis
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/HypothesisWorks/hypothesis/contributors
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

Hypothesis is a property-based testing library for Python. A test declares the range of inputs it should pass for, using strategies, and Hypothesis chooses inputs from that range, including edge cases a developer might not have written by hand. When a test fails, Hypothesis reports the simplest failing input it can find.
