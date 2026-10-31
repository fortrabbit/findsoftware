---
id: bitcart
name: Bitcart
urls:
  home: https://bitcart.ai
  repository: https://github.com/bitcart/bitcart
  docs: https://docs.bitcart.ai
category:
  - e-commerce
description: Self-hosted, open-source cryptocurrency payment processor that sends payments to the merchant's own wallet, with a Merchants API, an admin panel and a checkout script for websites.
status: active
maintainer: MrNaif2018
maintainerType: community
firstRelease: 2019
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.12
databases:
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-26
githubStargazers: 998
contributors: 21
social:
  x: https://twitter.com/BitcartCC
  discord: https://discord.gg/8H2Sfdh
  subreddit: https://www.reddit.com/r/Bitcart
  instagram: https://instagram.com/bitcartcc
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://bitcart.ai
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/bitcart/bitcart
    checkedAt: 2026-10-31
  - field: urls
    url: https://docs.bitcart.ai
    checkedAt: 2026-10-31
  - field: license
    url: https://github.com/bitcart/bitcart
    checkedAt: 2026-10-31
  - field: category
    url: https://bitcart.ai
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/bitcart/bitcart
    checkedAt: 2026-10-31
  - field: runtime
    url: https://github.com/bitcart/bitcart/blob/0.11.0.1/pyproject.toml
    checkedAt: 2026-10-31
  - field: runtimeMin
    url: https://github.com/bitcart/bitcart/blob/0.11.0.1/pyproject.toml
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://docs.bitcart.ai/development/architecture
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.bitcart.ai/deployment/docker
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.bitcart.ai/deployment/manual
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://docs.bitcart.ai/deployment/configurator
    checkedAt: 2026-10-31
  - field: databases
    url: https://docs.bitcart.ai/development/architecture
    checkedAt: 2026-10-31
  - field: adminUi
    url: https://docs.bitcart.ai/development/architecture
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://github.com/bitcart/bitcart/blob/master/LICENSE
    checkedAt: 2026-10-31
  - field: maintainerType
    url: https://bitcart.ai
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/bitcart/bitcart/releases/tag/0.11.0.1
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://github.com/bitcart/bitcart/releases/tag/0.11.0.1
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/bitcart/bitcart/releases/tag/0.0.1a
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/bitcart/bitcart
    checkedAt: 2026-10-31
  - field: contributors
    url: https://github.com/bitcart/bitcart
    checkedAt: 2026-10-31
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Bitcart is a self-hosted cryptocurrency payment processor that sends payments directly to the merchant's own wallet. Bitcart Core, the daemons for each currency that wrap the Electrum wallet, is the only required component. The optional Merchants API adds PostgreSQL, Redis and a background worker that follows each enabled currency's daemon, and the optional admin panel is a user interface built around that API. The [architecture page](https://docs.bitcart.ai/development/architecture) describes how the parts fit together.

A website can take payments in two ways: it sends a POST request to the Merchants API to create an invoice, or it loads the admin panel's checkout modal script and opens an invoice by its ID. The [custom integration page](https://docs.bitcart.ai/integrations/custom-integration) describes both, along with a Python SDK that simplifies using the core daemons.

## Worth knowing

The [manual deployment page](https://docs.bitcart.ai/deployment/manual) says manual installation is not recommended in production, and the [Docker deployment page](https://docs.bitcart.ai/deployment/docker) describes the deployment method the project uses. The background worker keeps running, so an installation is a set of long-running services rather than static files.
