---
id: fess
name: Fess
urls:
  home: https://fess.codelibs.org
  repository: https://github.com/codelibs/fess
  docs: https://fess.codelibs.org/15.9/install/install.html
category:
  - search
description: Java enterprise search server with a built-in crawler, an admin console and a search UI, built on OpenSearch.
status: active
maintainer: CodeLibs, Inc.
maintainerType: company
firstRelease: 2009
hqCountry: JP
language: java
runtime:
  - jvm
hosting:
  - java
basedOn:
  - opensearch
adminUi: true
headlessApi:
  - rest
i18n: yes
runsAs:
  - always-on
installMethod: zip download
licenseModel: open-core
license: Apache-2.0
currentMajor: "15"
latestReleaseDate: 2026-10-15
githubStargazers: 1142
contributors: 36
social:
  forum: https://discuss.codelibs.org/c/FessEN/
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://fess.codelibs.org
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/codelibs/fess
    checkedAt: 2026-10-28
  - field: urls
    url: https://fess.codelibs.org/15.9/install/install.html
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://codelibs.co/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://codelibs.co/
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://codelibs.co/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://fess.codelibs.org/news.html
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/codelibs/fess
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/codelibs/fess/blob/main/README.md
    checkedAt: 2026-10-28
  - field: basedOn
    url: https://github.com/codelibs/fess/blob/main/README.md
    checkedAt: 2026-10-28
  - field: category
    url: https://fess.codelibs.org
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/codelibs/fess
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/codelibs/fess/main/LICENSE
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://fess.codelibs.org
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/codelibs/fess/blob/main/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/codelibs/fess/blob/main/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://fess.codelibs.org/15.9/install/install-linux.html
    checkedAt: 2026-10-28
  - field: adminUi
    url: https://github.com/codelibs/fess/blob/main/README.md
    checkedAt: 2026-10-28
  - field: headlessApi
    url: https://github.com/codelibs/fess/blob/main/README.md
    checkedAt: 2026-10-28
  - field: i18n
    url: https://github.com/codelibs/fess/blob/main/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/codelibs/fess/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/codelibs/fess/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/codelibs/fess
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/codelibs/fess/contributors
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Fess is an enterprise search server written in Java. It has a built-in crawler, a browser-based administration UI and a search UI. Crawled documents are indexed in OpenSearch, and the project's own pages state that Fess is built on OpenSearch. Fess runs as a service that depends on OpenSearch being started first. It is installed from a ZIP, RPM or DEB package, or run as a Docker image. The code is licensed under Apache-2.0 and maintained by CodeLibs, Inc.

## Worth knowing

The installation guide says Fess does not bundle a search engine and that every installation method needs a separate OpenSearch server. The README says the Docker images bundle OpenSearch, so the two statements differ for Docker.

A commercial version, N2 Search from N2SM, is offered beside the open-source product, with paid support.
