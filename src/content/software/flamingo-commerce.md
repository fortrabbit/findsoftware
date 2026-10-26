---
id: flamingo-commerce
name: Flamingo Commerce
urls:
  home: https://www.flamingo.me/flamingo-commerce.html
  repository: https://github.com/i-love-flamingo/flamingo-commerce
  docs: https://docs.flamingo.me/
category:
  - e-commerce
description: Go modules for building headless e-commerce applications, covering product, cart, checkout and payment, on the Flamingo framework.
status: active
maintainer: AOE GmbH
maintainerType: company
firstRelease: 2020
language: go
runtime:
  - binary
hosting:
  - binary
basedOn:
  - flamingo
headlessApi:
  - graphql
installMethod: go get flamingo.me/flamingo-commerce/v3
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-10-14
githubStargazers: 598
contributors: 35
social:
  x: https://twitter.com/aoepeople
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.flamingo.me/flamingo-commerce.html
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/i-love-flamingo/flamingo-commerce
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/i-love-flamingo/flamingo-commerce/blob/master/Readme.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/i-love-flamingo/flamingo-commerce/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/i-love-flamingo/flamingo-commerce
    checkedAt: 2026-10-26
  - field: runtime
    url: https://www.flamingo.me/flamingo-commerce.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/i-love-flamingo/flamingo-commerce/blob/master/Readme.md
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://github.com/i-love-flamingo/flamingo-commerce/blob/master/Readme.md
    checkedAt: 2026-10-26
  - field: category
    url: https://www.flamingo.me/flamingo-commerce.html
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://github.com/i-love-flamingo/flamingo-commerce/blob/master/Readme.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/i-love-flamingo/flamingo-commerce
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/i-love-flamingo/flamingo-commerce/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://www.flamingo.me/flamingo-commerce.html
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/i-love-flamingo/flamingo-commerce/releases?per_page=100
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/i-love-flamingo/flamingo-commerce/releases?per_page=100
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/i-love-flamingo/flamingo-commerce/releases/tags/v3.14.0
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/i-love-flamingo/flamingo-commerce
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/i-love-flamingo/flamingo-commerce/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Flamingo Commerce is a set of Go modules for building headless e-commerce applications on the Flamingo framework. The modules cover price, product, category, cart, payment, search, checkout, customer, order and w3cdatalayer. Each one is a bounded context with its own ports and adapters, and the modules provide GraphQL support. An application imports them with `go get` and loads them in its Flamingo bootstrap.

## Worth knowing

The project states that its API is still Beta and that its models and methods may change, so an update can require code changes in an application built on it. The modules are built on the Flamingo framework, which the project names as their base.
