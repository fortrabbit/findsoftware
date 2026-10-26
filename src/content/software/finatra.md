---
id: finatra
name: Finatra
urls:
  home: https://twitter.github.io/finatra/
  repository: https://github.com/twitter/finatra
  docs: https://twitter.github.io/finatra/user-guide/index.html
category:
  - framework
description: Scala framework for building HTTP and Thrift services on top of TwitterServer and Finagle.
status: active
maintainer: Twitter, Inc.
maintainerType: company
firstRelease: 2012
language: scala
runtime:
  - jvm
hosting:
  - java
templating: mustache
runsAs:
  - always-on
installMethod: sbt or Maven dependency on finatra-http-server or finatra-thrift
licenseModel: open-source
license: Apache-2.0
latestReleaseDate: 2024-05-02
githubStargazers: 2273
contributors: 140
social:
  x: https://twitter.com/finatra
  forum: https://groups.google.com/forum/#!forum/finatra-users
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://twitter.github.io/finatra/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/twitter/finatra
    checkedAt: 2026-10-26
  - field: urls
    url: https://twitter.github.io/finatra/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/twitter/finatra/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/twitter/finatra
    checkedAt: 2026-10-26
  - field: runtime
    url: https://twitter.github.io/finatra/user-guide/http/server.html
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/twitter/finatra/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/twitter/finatra
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/twitter/finatra/blob/develop/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://twitter.github.io/finatra/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://twitter.github.io/finatra/user-guide/http/server.html
    checkedAt: 2026-10-26
  - field: templating
    url: https://twitter.github.io/finatra/user-guide/index.html
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/twitter/finatra/commits/finatra-0.0.1
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://search.maven.org/solrsearch/select?q=g:com.twitter+AND+a:finatra-http-server_2.12&core=gav&rows=200&wt=json
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/twitter/finatra
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/twitter/finatra/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Finatra is a Scala framework for building HTTP and Thrift servers. It is built on TwitterServer and uses Finagle, and it runs on the JVM. A project adds the finatra-http-server or finatra-thrift module as an sbt or Maven dependency; per the server guide, the HTTP server is started on port 8888.

The [user guide](https://twitter.github.io/finatra/user-guide/index.html) documents Mustache support for templates.
