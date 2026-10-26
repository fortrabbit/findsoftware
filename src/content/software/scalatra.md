---
id: scalatra
name: Scalatra
urls:
  home: https://scalatra.org/
  repository: https://github.com/scalatra/scalatra
  docs: https://scalatra.org/guides/3/
category:
  - framework
description: Scala micro-framework for building web sites and HTTP APIs on the JVM, with a Sinatra-style routing DSL.
status: active
maintainer: Scalatra Team
maintainerType: community
firstRelease: 2010
language: scala
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 11
databases:
  - mysql
  - postgres
headlessApi:
  - rest
templating: twirl
runsAs:
  - always-on
installMethod: sbt (giter8 project template)
licenseModel: open-source
license: BSD-2-Clause
currentMajor: "3"
latestReleaseDate: 2026-08-22
githubStargazers: 2648
contributors: 105
social:
  x: https://twitter.com/scalatra
  forum: https://groups.google.com/group/scalatra-user
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://scalatra.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/scalatra/scalatra
    checkedAt: 2026-10-26
  - field: urls
    url: https://scalatra.org/guides/3/
    checkedAt: 2026-10-26
  - field: category
    url: https://scalatra.org/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/scalatra/scalatra
    checkedAt: 2026-10-26
  - field: runtime
    url: https://scalatra.org/getting-started/installation.html
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://scalatra.org/getting-started/installation.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://scalatra.org/getting-started/installation.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://scalatra.org/guides/3/deployment/servlet-container.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://scalatra.org/guides/3/deployment/standalone.html
    checkedAt: 2026-10-26
  - field: templating
    url: https://scalatra.org/guides/3/views/twirl.html
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://scalatra.org/
    checkedAt: 2026-10-26
  - field: databases
    url: https://scalatra.org/guides/3/persistence/slick.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://scalatra.org/guides/3/persistence/squeryl.html
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/scalatra/scalatra/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/scalatra/scalatra/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://scalatra.org/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://search.maven.org/solrsearch/select?q=g:org.scalatra+AND+a:scalatra_2.8.0&core=gav&rows=50&wt=json
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/scalatra/scalatra/git/refs/tags/v3.2.1
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/scalatra/scalatra/git/tags/51865898a627f1e87b5ca130de061a8e0d23b4c2
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/scalatra/scalatra
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/scalatra/scalatra/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Scalatra is a Scala micro-framework for web sites and HTTP APIs that runs on the JVM. Its homepage describes a Sinatra-style DSL. The [servlet container guide](https://scalatra.org/guides/3/deployment/servlet-container.html) says a Scalatra 3 application runs on any servlet container that supports the Servlet standard it names, and the standalone guide shows launching it in an embedded Jetty server from glue code.

Views can be written with Twirl, the template language the Scalatra 3 guides describe. The project's site mentions the construction of RESTful APIs, and its community page names a Google group as the preferred channel for discussion.

## Worth knowing

Scalate integration has been dropped since Scalatra 3.0, according to the guides. The internationalization guide has not been written yet.
