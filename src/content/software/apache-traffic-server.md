---
id: apache-traffic-server
name: Apache Traffic Server
urls:
  home: https://trafficserver.apache.org/
  repository: https://github.com/apache/trafficserver
  docs: https://docs.trafficserver.apache.org/en/latest/
category:
  - web-server
description: Open-source caching proxy server for HTTP/1.1 and HTTP/2 traffic, used for forward and reverse proxying.
status: active
maintainer: The Apache Software Foundation
maintainerType: foundation
firstRelease: 2010
hqCountry: US
language: cpp
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: source tarball
licenseModel: open-source
license: Apache-2.0
currentMajor: "10"
latestReleaseDate: 2026-10-20
githubStargazers: 1994
contributors: 225
httpArchiveSites: 2930
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: name
    url: https://trafficserver.apache.org/
    checkedAt: 2026-10-28
  - field: urls
    url: https://trafficserver.apache.org/
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/apache/trafficserver
    checkedAt: 2026-10-28
  - field: urls
    url: https://docs.trafficserver.apache.org/en/latest/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://trafficserver.apache.org/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://www.apache.org/foundation/
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://www.apache.org/foundation/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://archive.apache.org/dist/trafficserver/
    checkedAt: 2026-10-28
  - field: category
    url: https://docs.trafficserver.apache.org/en/latest/getting-started/index.en.html
    checkedAt: 2026-10-28
  - field: category
    url: https://trafficserver.apache.org/
    checkedAt: 2026-10-28
  - field: category
    url: https://trafficserver.apache.org/
    checkedAt: 2026-10-28
  - field: language
    url: https://github.com/apache/trafficserver
    checkedAt: 2026-10-28
  - field: runtime
    url: https://docs.trafficserver.apache.org/en/latest/admin-guide/installation/index.en.html
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/apache/trafficserver/tags
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://trafficserver.apache.org/
    checkedAt: 2026-10-28
  - field: license
    url: https://trafficserver.apache.org/
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://trafficserver.apache.org/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.trafficserver.apache.org/en/latest/admin-guide/installation/index.en.html
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://docs.trafficserver.apache.org/en/latest/admin-guide/installation/index.en.html
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://docs.trafficserver.apache.org/en/latest/admin-guide/installation/index.en.html
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/apache/trafficserver
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/apache/trafficserver/contributors
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

Apache Traffic Server is a caching proxy server from The Apache Software Foundation. The [getting-started guide](https://docs.trafficserver.apache.org/en/latest/getting-started/index.en.html) describes it as a server for forward and reverse proxying of HTTP and HTTPS traffic, and it can run in either or both modes at once. The `trafficserver` command starts the set of processes that handle requests and monitor the system, and a stop subcommand ends them. The [installation guide](https://docs.trafficserver.apache.org/en/latest/admin-guide/installation/index.en.html) covers building from the source archive or a git clone with cmake.

## Worth knowing

The project ships no binary downloads, so a host needs a C++ build toolchain and the build dependencies the installation guide lists. The project also publishes a long-term support line beside the current major version.
