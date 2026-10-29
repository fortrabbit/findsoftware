---
id: maxscale
name: MariaDB MaxScale
urls:
  repository: https://github.com/mariadb-corporation/MaxScale
  docs: https://mariadb.com/docs/maxscale
category:
  - database
description: Database proxy that routes statements from applications to MariaDB and MySQL backend servers, with load balancing and high availability.
status: discontinued
maintainer: MariaDB plc
maintainerType: company
firstRelease: 2016
language: cpp
runtime:
  - binary
hosting:
  - binary
databases:
  - mariadb
  - mysql
runsAs:
  - always-on
installMethod: apt and dnf packages
licenseModel: source-available
license: BUSL-1.1
latestReleaseDate: 2024-08-27
githubStargazers: 1497
contributors: 39
social:
  forum: https://groups.google.com/forum/#!forum/maxscale
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: status
    url: https://github.com/mariadb-corporation/MaxScale/blob/24.02/README.md
    checkedAt: 2026-10-29
  - field: name
    url: https://github.com/mariadb-corporation/MaxScale/blob/24.02/README.md
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/mariadb-corporation/MaxScale
    checkedAt: 2026-10-29
  - field: urls
    url: https://github.com/mariadb-corporation/MaxScale/blob/24.02/README.md
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://github.com/mariadb-corporation/MaxScale/blob/24.02/README.md
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://github.com/mariadb-corporation/MaxScale/blob/24.02/README.md
    checkedAt: 2026-10-29
  - field: category
    url: https://github.com/mariadb-corporation/MaxScale/blob/24.02/README.md
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/mariadb-corporation/MaxScale
    checkedAt: 2026-10-29
  - field: runtime
    url: https://mariadb.com/docs/maxscale/maxscale-management/deployment/installation-and-configuration
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://api.github.com/repos/mariadb-corporation/MaxScale/git/refs/tags/maxscale-24.08.0
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://api.github.com/repos/mariadb-corporation/MaxScale/git/refs/tags/maxscale-0.4.2
    checkedAt: 2026-10-29
  - field: databases
    url: https://mariadb.com/docs/maxscale/maxscale-quickstart-guides/maxscale-getting-started-guide
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://mariadb.com/docs/maxscale/maxscale-quickstart-guides/maxscale-getting-started-guide
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://mariadb.com/docs/maxscale/maxscale-quickstart-guides/maxscale-getting-started-guide
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://mariadb.com/docs/maxscale/maxscale-management/deployment/installation-and-configuration
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://mariadb.com/docs/maxscale/maxscale-management/deployment/installation-and-configuration
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/mariadb-corporation/MaxScale
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/mariadb-corporation/MaxScale/contributors?per_page=1&anon=false
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/mariadb-corporation/MaxScale/blob/maxscale-24.08.0/licenses/LICENSE2408.TXT
    checkedAt: 2026-10-29
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

MariaDB MaxScale is a database proxy that forwards statements from applications to MariaDB and MySQL backend servers. It is written in C++, installed from packages or built from source, and started as a service on the host that runs the proxy. Its README describes load balancing and high availability that work transparently to the applications, with plugin components for protocols and routing decisions.

## Worth knowing

The README states that the open source version of MaxScale is no longer supported or maintained, and that a fully supported version is available from MariaDB plc. The newest tag is under the Business Source License, which allows production use on fewer than three server instances.
