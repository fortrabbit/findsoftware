---
id: bunkerweb
name: BunkerWeb
urls:
  home: https://www.bunkerweb.io
  repository: https://github.com/bunkerity/bunkerweb
  docs: https://docs.bunkerweb.io
  pricing: https://panel.bunkerweb.io/store/bunkerweb-pro
  plugins: https://docs.bunkerweb.io/plugins/
category:
  - web-server
description: Open-source web application firewall that runs as a reverse proxy in front of web services, with an optional web UI.
status: active
maintainer: Bunkerity SAS
maintainerType: company
firstRelease: 2021
hqCountry: FR
language: python
runtime:
  - python
hosting:
  - python
basedOn:
  - nginx
databases:
  - sqlite
  - mariadb
  - mysql
  - postgres
adminUi: true
i18n: Web UI in multiple languages, with community translations
runsAs:
  - always-on
installMethod: docker image
licenseModel: open-core
license: AGPL-3.0
currentMajor: "1"
latestReleaseDate: 2026-10-21
githubStargazers: 11134
contributors: 57
social:
  x: https://x.com/bunkerity
  discord: https://discord.com/invite/fTf46FmtyD
  forum: https://github.com/bunkerity/bunkerweb/discussions
  subreddit: https://www.reddit.com/r/BunkerWeb/
  instagram: https://www.instagram.com/bunkerweb/
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://www.bunkerweb.io/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/bunkerity/bunkerweb
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/bunkerity/bunkerweb/blob/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://www.bunkerweb.io/legal-notice
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://www.bunkerweb.io/legal-notice
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://www.bunkerweb.io/legal-notice
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/bunkerity/bunkerweb/blob/master/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/bunkerity/bunkerweb/blob/master/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/bunkerity/bunkerweb/blob/master/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/bunkerity/bunkerweb
    checkedAt: 2026-10-28
  - field: runtime
    url: https://docs.bunkerweb.io/1.6.16/integrations/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.bunkerweb.io/1.6.16/integrations/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.bunkerweb.io/1.6.16/integrations/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.bunkerweb.io/1.6.16/integrations/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.bunkerweb.io/1.6.16/integrations/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.bunkerweb.io/1.6.16/integrations/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/bunkerity/bunkerweb/blob/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/bunkerity/bunkerweb
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/bunkerity/bunkerweb/blob/master/README.md
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/bunkerity/bunkerweb/blob/master/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://github.com/bunkerity/bunkerweb/blob/master/CHANGELOG.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/bunkerity/bunkerweb/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/bunkerity/bunkerweb/releases/latest
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://docs.bunkerweb.io/1.6.16/integrations/
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://docs.bunkerweb.io/1.6.16/web-ui/
    checkedAt: 2026-10-28
  - field: databases
    url: https://github.com/bunkerity/bunkerweb/blob/master/README.md
    checkedAt: 2026-10-28
  - field: i18n
    url: https://docs.bunkerweb.io/1.6.16/web-ui/
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/bunkerity/bunkerweb/blob/master/README.md
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/bunkerity/bunkerweb
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/bunkerity/bunkerweb/contributors?per_page=1
    checkedAt: 2026-10-28
ai: authored
contentStore: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

BunkerWeb is a web application firewall that sits in front of web services as a reverse proxy. It is built on NGINX and is installed from a Docker image, Linux packages, a Kubernetes autoconf controller or a Terraform provider. Settings are kept in one of four supported databases, and an optional web UI manages the instances with admin, writer and reader roles.

Multisite mode lets one instance serve and protect several web applications. It is off by default.

## Worth knowing

The PRO edition is a paid tier: its features are marked in the documentation, and a license key from the vendor's panel enables them. BunkerWeb Cloud is the same company's managed SaaS offering, for users who do not want to run the instances themselves. The Swarm integration is marked deprecated in the integrations guide.
