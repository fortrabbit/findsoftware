---
id: countly
name: Countly Lite
urls:
  home: https://countly.com
  repository: https://github.com/Countly/countly-server
  docs: https://support.countly.com/hc/en-us
  pricing: https://countly.com/pricing
category:
  - analytics
description: Self-hosted analytics and engagement server that collects data from web, mobile and desktop applications and shows it in dashboards.
status: active
maintainer: Countly Ltd
maintainerType: company
firstRelease: 2013
hqCountry: GB
language: javascript
runtime:
  - node
hosting:
  - node
databases:
  - mongodb
adminUi: true
headlessApi:
  - rest
installMethod: install script (wget -qO- https://c.ly/install | bash) for Ubuntu or CentOS
licenseModel: open-core
license: AGPL-3.0 with modified Section 7, open-source, non-commercial license (stated for Countly Lite)
latestReleaseDate: 2026-10-30
githubStargazers: 5925
contributors: 94
social:
  discord: https://discord.gg/countly
  youtube: https://www.youtube.com/gocountly
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://countly.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/Countly/countly-server
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/Countly/countly-server/blob/master/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://countly.com/legal/terms-of-use
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://countly.com/legal/privacy-policy
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/Countly/countly-server
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/Countly/countly-server/blob/master/README.md
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/Countly/countly-server/blob/master/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/Countly/countly-server/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/Countly/countly-server/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/Countly/countly-server/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/Countly/countly-server/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/Countly/countly-server/blob/master/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://raw.githubusercontent.com/Countly/countly-server/master/LICENSE.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/Countly/countly-server/blob/master/README.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/Countly/countly-server/blob/master/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/Countly/countly-server/blob/master/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/Countly/countly-server/blob/master/README.md
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://countly.com/features
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/Countly/countly-server/commits/countly-server-v13.06
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/Countly/countly-server/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/Countly/countly-server
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/Countly/countly-server/contributors
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Countly is an analytics and engagement server. A site or app sends data to it through the Countly SDKs or the write API, and the dashboards show what was collected. The repository holds the server side, including session and event collection, reporting, push notifications, remote configuration and a plugin architecture. It runs on Linux, installed with a script or a Docker image, and keeps its data in MongoDB on Node.js. Countly Ltd maintains the project and also offers a paid Enterprise edition and a managed Flex service.

## Worth knowing

The README describes the free Lite edition as open source for non-commercial use, and the repository's LICENSE file adds a term about keeping the Countly logo. Advanced features, granular data access and support sit in the Enterprise edition.
