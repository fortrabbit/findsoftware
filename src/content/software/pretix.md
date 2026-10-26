---
id: pretix
name: pretix
urls:
  home: https://pretix.eu
  repository: https://github.com/pretix/pretix
  docs: https://docs.pretix.eu
  pricing: https://pretix.eu/about/en/pricing
  plugins: https://marketplace.pretix.eu/
category:
  - community
  - e-commerce
description: Ticket shop application for conferences, festivals and other events, with an online shop and point of sale.
status: active
maintainer: pretix GmbH
maintainerType: company
firstRelease: 2017
hqCountry: DE
language: python
runtime:
  - python
  - node
hosting:
  - python
  - node
runtimeMin: python 3.11
contentStore:
  - database
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
i18n: yes
runsAs:
  - always-on
  - scheduled
installMethod: pip
licenseModel: open-core
license: AGPL-3.0, AGPL-3.0 with additional terms
latestReleaseDate: 2026-09-30
githubStargazers: 2549
contributors: 353
social:
  mastodon: https://pretix.social/@pretix
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://pretix.eu/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/pretix/pretix
    checkedAt: 2026-10-26
  - field: urls
    url: https://docs.pretix.eu/self-hosting/installation/general/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://pretix.eu/about/en/imprint
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://pretix.eu/about/en/imprint
    checkedAt: 2026-10-26
  - field: category
    url: https://pretix.eu/
    checkedAt: 2026-10-26
  - field: category
    url: https://pretix.eu/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/pretix/pretix
    checkedAt: 2026-10-26
  - field: runtime
    url: https://docs.pretix.eu/self-hosting/installation/manual_smallscale/
    checkedAt: 2026-10-26
  - field: runtime
    url: https://docs.pretix.eu/self-hosting/installation/manual_smallscale/
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://docs.pretix.eu/self-hosting/installation/manual_smallscale/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://docs.pretix.eu/self-hosting/installation/manual_smallscale/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://docs.pretix.eu/self-hosting/installation/docker_smallscale/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.pretix.eu/self-hosting/installation/docker_smallscale/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.pretix.eu/self-hosting/installation/manual_smallscale/
    checkedAt: 2026-10-26
  - field: databases
    url: https://docs.pretix.eu/self-hosting/installation/general/
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://pretix.eu/about/en/features/admin
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://docs.pretix.eu/dev/api/index.html
    checkedAt: 2026-10-26
  - field: i18n
    url: https://pretix.eu/about/en/features/shop
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/pretix/pretix/master/LICENSE
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/pretix/pretix/master/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://pypi.org/pypi/pretix/json
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://pypi.org/pypi/pretix/json
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/pretix/pretix
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/pretix/pretix/contributors
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://docs.pretix.eu/self-hosting/installation/general/
    checkedAt: 2026-10-26
  - field: urls
    url: https://pretix.eu/
    checkedAt: 2026-10-26
  - field: urls
    url: https://pretix.eu/about/en/pricing
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

pretix is a ticket shop application for events, with an online shop, point of sale and an administration interface for reports and team permissions. It is written in Python and runs as a self-hosted application, installed with pip or as a Docker image, with gunicorn serving the web application. The [installation guide](https://docs.pretix.eu/self-hosting/installation/general/) recommends PostgreSQL as the database, and the [API documentation](https://docs.pretix.eu/dev/api/index.html) describes a REST-style API. The company behind it, pretix GmbH, is based in Heidelberg, Germany, and also offers pretix Hosted.

## Worth knowing

Some features are marked as available only in the Hosted and Enterprise editions, not in the Community edition. The license is the GNU AGPL v3 with additional terms. The [LICENSE file](https://github.com/pretix/pretix/blob/master/LICENSE) waives AGPL section 13 only for use outside a list of purposes, which includes offering pretix to third parties as a service, and says the attribution notice at the bottom of generated pages may not be removed.
