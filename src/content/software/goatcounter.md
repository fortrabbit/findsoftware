---
id: goatcounter
name: GoatCounter
urls:
  home: https://www.goatcounter.com
  repository: https://github.com/arp242/goatcounter
  docs: https://www.goatcounter.com/help/start
category:
  - analytics
description: Open source web analytics platform, self-hosted or hosted, that counts pageviews with a script tag and avoids personal data.
status: active
maintainer: Martin Tournoij
maintainerType: individual
firstRelease: 2020
hqCountry: IE
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - sqlite
  - postgres
adminUi: true
headlessApi:
  - rest
i18n: multiple languages
runsAs:
  - always-on
installMethod: binary-download
licenseModel: open-source
license: EUPL-1.2, slightly modified (Compatible Licenses appendix reduced), ISC
currentMajor: "2"
latestReleaseDate: 2025-12-15
githubStargazers: 6134
contributors: 60
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.goatcounter.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/arp242/goatcounter
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.goatcounter.com/help/start
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/arp242/goatcounter/blob/v2.7.0/LICENSE
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.goatcounter.com/help/privacy
    checkedAt: 2026-11-03
  - field: category
    url: https://www.goatcounter.com
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/arp242/goatcounter
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/arp242/goatcounter/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/arp242/goatcounter/blob/main/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/arp242/goatcounter/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/arp242/goatcounter/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/arp242/goatcounter/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/arp242/goatcounter/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/arp242/goatcounter/blob/main/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/arp242/goatcounter/blob/main/README.md
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/arp242/goatcounter/blob/main/README.md
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://www.goatcounter.com/help/api
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/arp242/goatcounter/blob/v2.7.0/LICENSE
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/arp242/goatcounter/blob/v2.7.0/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/arp242/goatcounter/blob/main/README.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/arp242/goatcounter/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/arp242/goatcounter/releases
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/arp242/goatcounter/commits/4ff547e63a6386128c577e180c93abf2555dec40
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/arp242/goatcounter
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/arp242/goatcounter/contributors
    checkedAt: 2026-11-03
  - field: i18n
    url: https://www.goatcounter.com/help/translating
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

GoatCounter is a web analytics platform that counts pageviews through a script tag, a JavaScript-free tracking pixel, a REST API or imported web server logs. The project offers it as a hosted service on [goatcounter.com](https://www.goatcounter.com) and as an app the creator can run on their own server, and the README says the source code can be self-hosted without restrictions.

The self-hosted app serves on port 8080 by default and stores its data in SQLite unless it is given a PostgreSQL connection. The README lists release binaries, a Docker image and a source build as the install routes. The project describes its approach as counting visits without tracking personal data and without cookies.

## Worth knowing

The hosted service's privacy page states that data is stored on servers in Finland and Germany. The project's own text describes it as an alternative to Google Analytics and Matomo.
