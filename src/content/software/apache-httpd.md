---
id: apache-httpd
name: Apache HTTP Server
urls:
  home: https://httpd.apache.org/
  repository: https://github.com/apache/httpd
  docs: https://httpd.apache.org/docs/2.4/
category:
  - web-server
description: Open-source web server for modern operating systems, extended by loadable modules.
status: active
maintainer: The Apache Software Foundation
maintainerType: foundation
firstRelease: 1995
hqCountry: US
language: c
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: source build
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-10-01
githubStargazers: 4037
contributors: 56
httpArchiveSites: 1465263
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: name
    url: https://httpd.apache.org/
    checkedAt: 2026-10-28
  - field: urls
    url: https://httpd.apache.org/
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/apache/httpd
    checkedAt: 2026-10-28
  - field: urls
    url: https://httpd.apache.org/docs/2.4/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://httpd.apache.org/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://www.apache.org/foundation/
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://www.apache.org/foundation/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://httpd.apache.org/ABOUT_APACHE.html
    checkedAt: 2026-10-28
  - field: category
    url: https://httpd.apache.org/
    checkedAt: 2026-10-28
  - field: category
    url: https://httpd.apache.org/docs/2.4/mod/mod_proxy.html
    checkedAt: 2026-10-28
  - field: category
    url: https://httpd.apache.org/docs/2.4/mod/mod_proxy_balancer.html
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/apache/httpd
    checkedAt: 2026-10-28
  - field: runtime
    url: https://httpd.apache.org/docs/2.4/install.html
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/apache/httpd/tags
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://httpd.apache.org/download.cgi
    checkedAt: 2026-10-28
  - field: license
    url: https://httpd.apache.org/docs/2.4/platform/
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://httpd.apache.org/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://httpd.apache.org/docs/2.4/install.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://httpd.apache.org/docs/2.4/install.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://httpd.apache.org/download.cgi
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://httpd.apache.org/docs/2.4/invoking.html
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/apache/httpd
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/apache/httpd/contributors
    checkedAt: 2026-10-28
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-28
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

Apache HTTP Server, usually called httpd, is a web server maintained by The Apache Software Foundation. The [documentation](https://httpd.apache.org/docs/2.4/) describes it as a server for modern operating systems, and its modules add reverse proxying through [mod_proxy](https://httpd.apache.org/docs/2.4/mod/mod_proxy.html) and load balancing through [mod_proxy_balancer](https://httpd.apache.org/docs/2.4/mod/mod_proxy_balancer.html). On Unix the program runs as a daemon that keeps running in the background to handle requests. The project publishes source code; the [installation guide](https://httpd.apache.org/docs/2.4/install.html) covers building it on Unix-like systems, and operating system distributions ship their own packages.

## Worth knowing

The daemon model means a host has to allow a long-running server process, not only static files. The 2.2 line is end-of-life; the 2.4 line is the current one.
