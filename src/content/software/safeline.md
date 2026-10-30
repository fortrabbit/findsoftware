---
id: safeline
name: SafeLine
urls:
  home: https://cyberserval.tech/landing/safeline
  repository: https://github.com/chaitin/SafeLine
  docs: https://docs.waf.chaitin.com/
  pricing: https://cyberserval.tech/landing/safeline
category:
  - web-server
description: Self-hosted web application firewall and reverse proxy that filters and blocks malicious HTTP traffic before it reaches web apps.
status: active
maintainer: CyberServal Co., Limited
maintainerType: company
firstRelease: 2023
language: go
basedOn:
  - nginx
adminUi: true
runsAs:
  - always-on
installMethod: automated installer script
licenseModel: open-core
license: GPL-3.0
currentMajor: "9"
latestReleaseDate: 2026-10-21
githubStargazers: 23114
contributors: 27
social:
  x: https://x.com/safeline_waf
  discord: https://discord.gg/SVnZGzHFvn
  forum: https://www.cyberserval.tech/discussion
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://github.com/chaitin/SafeLine/blob/main/README.md
    checkedAt: 2026-10-30
  - field: urls
    url: https://cyberserval.tech/landing/safeline
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/chaitin/SafeLine
    checkedAt: 2026-10-30
  - field: urls
    url: https://docs.waf.chaitin.com/en/GetStarted/Deploy
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://cyberserval.tech/terms-conditions
    checkedAt: 2026-10-30
  - field: category
    url: https://github.com/chaitin/SafeLine/blob/main/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/chaitin/SafeLine
    checkedAt: 2026-10-30
  - field: basedOn
    url: https://cyberserval.tech/landing/safeline
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://docs.waf.chaitin.com/en/GetStarted/Deploy
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.waf.chaitin.com/en/GetStarted/Deploy
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://docs.waf.chaitin.com/en/GetStarted/Deploy
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://docs.waf.chaitin.com/en/GetStarted/Deploy
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/chaitin/SafeLine/releases/tag/v9.4.3
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/chaitin/SafeLine/releases/tag/v9.4.3
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://github.com/chaitin/SafeLine/releases/tag/v1.0.0
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/chaitin/SafeLine
    checkedAt: 2026-10-30
  - field: urls
    url: https://cyberserval.tech/landing/safeline
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://github.com/chaitin/SafeLine
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/chaitin/SafeLine/contributors?per_page=1
    checkedAt: 2026-10-30
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

SafeLine is a web application firewall and reverse proxy that sits in front of web apps to protect them from attacks and exploits. It is built on Nginx, which the landing page names as the basis of its reverse proxy. The deployment guide runs SafeLine as a set of Docker containers started with Docker Compose, and it serves a web console for configuration.

## Worth knowing

A Pro license is required to run SafeLine on ARM servers, and the free Personal Edition is not supported there. The deployment guide fetches the automatic installer with certificate checking turned off.
