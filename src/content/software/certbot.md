---
id: certbot
name: Certbot
urls:
  home: https://certbot.eff.org
  repository: https://github.com/certbot/certbot
  docs: https://eff-certbot.readthedocs.io/en/stable/
category:
  - web-server
description: Command-line client that obtains and renews TLS certificates from Let's Encrypt and other ACME certificate authorities.
status: active
maintainer: Electronic Frontier Foundation
maintainerType: foundation
language: python
runtime:
  - python
hosting:
  - python
runtimeMin: python 3.10
runsAs:
  - scheduled
installMethod: snap, pip, docker
licenseModel: open-source
license: Apache-2.0
currentMajor: "5"
latestReleaseDate: 2026-09-01
githubStargazers: 33278
contributors: 560
ecosystemsMonthlyDownloads: 451623
dependentRepos: 470
dependentPackages: 111
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: urls
    url: https://certbot.eff.org
    checkedAt: 2026-10-19
  - field: urls
    url: https://api.github.com/repos/certbot/certbot
    checkedAt: 2026-10-19
  - field: urls
    url: https://eff-certbot.readthedocs.io/en/stable/install.html
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://www.eff.org/about
    checkedAt: 2026-10-19
  - field: maintainerType
    url: https://www.eff.org/about
    checkedAt: 2026-10-19
  - field: category
    url: https://certbot.eff.org
    checkedAt: 2026-10-19
  - field: language
    url: https://api.github.com/repos/certbot/certbot
    checkedAt: 2026-10-19
  - field: runtime
    url: https://pypi.org/pypi/certbot/json
    checkedAt: 2026-10-19
  - field: runtimeMin
    url: https://pypi.org/pypi/certbot/json
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://eff-certbot.readthedocs.io/en/stable/install.html
    checkedAt: 2026-10-19
  - field: license
    url: https://raw.githubusercontent.com/certbot/certbot/main/LICENSE.txt
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://raw.githubusercontent.com/certbot/certbot/main/LICENSE.txt
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://api.github.com/repos/certbot/certbot/releases/latest
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://api.github.com/repos/certbot/certbot/releases/latest
    checkedAt: 2026-10-19
  - field: githubStargazers
    url: https://api.github.com/repos/certbot/certbot
    checkedAt: 2026-10-19
  - field: contributors
    url: https://api.github.com/repos/certbot/certbot/contributors?anon=true
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://eff-certbot.readthedocs.io/en/stable/using.html
    checkedAt: 2026-10-20
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/certbot
    checkedAt: 2026-10-25
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/certbot
    checkedAt: 2026-10-25
  - field: ecosystemsMonthlyDownloads
    url: https://packages.ecosyste.ms/api/v1/registries/pypi.org/packages/certbot
    checkedAt: 2026-10-25
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

Certbot requests TLS certificates over the ACME protocol, from Let's Encrypt or another ACME certificate authority, and renews them. It runs as a command on the server, by hand, from cron or from a systemd timer, outside the request path of the website. The project recommends installing it as a snap; pip and a Docker image are alternatives, and the install page directs most users to the instructions on certbot.eff.org.
