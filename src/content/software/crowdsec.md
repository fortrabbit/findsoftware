---
id: crowdsec
name: CrowdSec
urls:
  home: https://www.crowdsec.net
  repository: https://github.com/crowdsecurity/crowdsec
  docs: https://docs.crowdsec.net
  pricing: https://www.crowdsec.net/pricing
  plugins: https://hub.crowdsec.net
category:
  - web-server
description: Open-source security engine that detects malicious behavior from logs and HTTP requests and blocks it through bouncers for web servers, reverse proxies and firewalls.
status: active
maintainer: CrowdSec SAS
maintainerType: company
firstRelease: 2020
hqCountry: FR
language: go
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - always-on
installMethod: deb and rpm packages
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-26
githubStargazers: 15359
contributors: 87
social:
  x: https://x.com/crowd_security
  discord: https://discord.com/invite/crowdsec
  forum: https://discourse.crowdsec.net
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://www.crowdsec.net/
    checkedAt: 2026-10-28
  - field: urls
    url: https://docs.crowdsec.net/docs/intro
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/crowdsecurity/crowdsec
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://github.com/crowdsecurity/crowdsec/releases
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://www.crowdsec.net/legal-notices
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://www.crowdsec.net/legal-notices
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://www.crowdsec.net/legal-notices
    checkedAt: 2026-10-28
  - field: category
    url: https://docs.crowdsec.net/docs/appsec/intro
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/crowdsecurity/crowdsec
    checkedAt: 2026-10-28
  - field: runtime
    url: https://api.github.com/repos/crowdsecurity/crowdsec
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.crowdsec.net/u/getting_started/installation/linux
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.crowdsec.net/u/getting_started/installation/docker
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.crowdsec.net/docs/intro
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.crowdsec.net/u/getting_started/installation/windows
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://docs.crowdsec.net/u/getting_started/installation/windows
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://docs.crowdsec.net/docs/intro
    checkedAt: 2026-10-28
  - field: urls
    url: https://www.crowdsec.net/pricing
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/crowdsecurity/crowdsec
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://api.github.com/repos/crowdsecurity/crowdsec
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/crowdsecurity/crowdsec/releases/tag/v1.8.2
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://github.com/crowdsecurity/crowdsec/releases/tag/v1.8.2
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/crowdsecurity/crowdsec
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/crowdsecurity/crowdsec/contributors?per_page=1
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/crowdsecurity/crowdsec/blob/master/README.md
    checkedAt: 2026-10-28
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

CrowdSec is an open-source security engine that reads system logs and HTTP requests and detects behavior with scenarios. It does not block traffic itself: remediation components, called bouncers, enforce its decisions at the firewall, in web servers or in reverse proxies. The AppSec component adds web application firewall rules to web servers and reverse proxies that have a bouncer installed, and one engine can serve several of them.

CrowdSec, a French company, maintains the project. The engine is installed from packages or a Docker image, and a web console, offered as a hosted service, manages the setup alongside the cscli command-line tool.

## Worth knowing

The console is a hosted service, and its Premium tier is paid. Sharing detected attacks is optional: the introduction says the sharing applies when a user participates, and in return the engine downloads the community blocklist from the central API.
