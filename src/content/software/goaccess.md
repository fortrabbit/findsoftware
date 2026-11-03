---
id: goaccess
name: GoAccess
urls:
  home: https://goaccess.io
  repository: https://github.com/allinurl/goaccess
  docs: https://goaccess.io/get-started
category:
  - analytics
description: Open source real-time web log analyzer with a terminal view, a self-contained HTML report and JSON and CSV output.
status: active
maintainer: Gerardo Orellana
maintainerType: individual
firstRelease: 2013
language: c
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: source-tarball
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-09-16
githubStargazers: 21112
contributors: 163
social:
  x: https://twitter.com/goaccess
  mastodon: https://infosec.exchange/@goaccess
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://goaccess.io
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/allinurl/goaccess
    checkedAt: 2026-11-03
  - field: urls
    url: https://goaccess.io/get-started
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/allinurl/goaccess/blob/v1.12/COPYING
    checkedAt: 2026-11-03
  - field: category
    url: https://goaccess.io
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/allinurl/goaccess
    checkedAt: 2026-11-03
  - field: runtime
    url: https://goaccess.io
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://goaccess.io/get-started
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://goaccess.io/download
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://goaccess.io/download
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://goaccess.io/get-started
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://goaccess.io/get-started
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://goaccess.io/download
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://goaccess.io/download
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://goaccess.io/download
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/allinurl/goaccess/blob/v1.12/COPYING
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://goaccess.io
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://goaccess.io/download
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/allinurl/goaccess/commits/ef3c4f3c3e42b378e705fb3a1a5ef1c2e72e6348
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/allinurl/goaccess/commits/b5e7eac5bf817dd4a8c52f8e5d1a7f8191b8c496
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/allinurl/goaccess
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/allinurl/goaccess/contributors
    checkedAt: 2026-11-03
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

GoAccess reads a web server's access log and reports HTTP statistics for the person who runs the server. It runs in a terminal by default. It can also write a static HTML report, and JSON and CSV output, and it reads several log formats, among them Apache, Nginx, CloudFront and Caddy.

The static HTML report is a file that the creator's own web server has to serve, because GoAccess does not serve it. The real-time HTML mode is different: GoAccess runs its own WebSocket server and pushes new data to the open report, and the download page asks the operator to open port 7890 for it. The install routes are a source tarball built with configure and make, distribution packages, Homebrew, a Docker image and a build from the GitHub repository.

## Worth knowing

The get-started page says the operator may want to configure the web server to restrict access to the report. The real-time mode keeps a process running on the server while it is in use.
