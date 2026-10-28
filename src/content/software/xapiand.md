---
id: xapiand
name: Xapiand
urls:
  home: https://kronuz.github.io/Xapiand
  repository: https://github.com/Kronuz/Xapiand
  docs: https://kronuz.github.io/Xapiand/installation/
category:
  - search
description: RESTful search and storage engine in one C++ binary, with full-text, geospatial and range queries over JSON or MessagePack documents.
status: stub
maintainer: Dubalu LLC
maintainerType: company
firstRelease: 2026
language: cpp
runtime:
  - binary
hosting:
  - binary
basedOn:
  - xapian
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker
licenseModel: open-source
license: MIT, GPL
githubStargazers: 362
contributors: 7
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://kronuz.github.io/Xapiand/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/Kronuz/Xapiand
    checkedAt: 2026-10-28
  - field: urls
    url: https://kronuz.github.io/Xapiand/installation/
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/Kronuz/Xapiand/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/Kronuz/Xapiand
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/Kronuz/Xapiand
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/Kronuz/Xapiand
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/Kronuz/Xapiand
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/Kronuz/Xapiand
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/Kronuz/Xapiand/blob/master/LICENSE
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/Kronuz/Xapiand
    checkedAt: 2026-10-28
  - field: headlessApi
    url: https://github.com/Kronuz/Xapiand
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/Kronuz/Xapiand
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/Kronuz/Xapiand
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/Kronuz/Xapiand
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/Kronuz/Xapiand
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/Kronuz/Xapiand
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/Kronuz/Xapiand/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/Kronuz/Xapiand
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/Kronuz/Xapiand/contributors?per_page=1
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Xapiand is a RESTful search and storage server built as one C++ binary, described on its [project site](https://kronuz.github.io/Xapiand/). Applications send it JSON or MessagePack documents over HTTP and query them with full-text, geospatial and range searches. Its full-text search is built on a customized Xapian fork kept inside the source tree.

The project lists Docker, Homebrew and RPM or DEB packages as install routes, and it can also be built from source with CMake. The README describes a clustering design in which each shard elects a primary over Raft and nodes replicate data by pulling it from one another.

## Worth knowing

No stable release exists yet. The published releases are alpha versions, so this record shows a prerelease date and no stable version. The bundled Xapian fork carries the GPL, while the rest of the source is MIT-licensed.
